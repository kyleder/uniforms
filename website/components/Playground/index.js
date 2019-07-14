import Frame, { FrameContextConsumer } from 'react-frame-component';
import React, { Component, createContext, useContext } from 'react';
import ValidatedForm from 'uniforms/ValidatedForm';
import connectField from 'uniforms/connectField';
import context from 'uniforms/context';
import omit from 'lodash/omit';
import classNames from 'classnames';

import presets from './presets';
import schema from './schema';
import styles from './styles';
import themes from './themes';
import playgroundStyles from './playground.module.css';
import { parseQuery, updateQuery } from './utils';

import ConfigProvider from 'antd/lib/config-provider';

const themeContext = createContext();

class Playground extends Component {
  constructor() {
    super(...arguments);

    const state = schema.clean(parseQuery());

    try {
      schema.validate(state);
    } catch (error) {
      error.details.forEach(({ name }) => {
        state[name] = schema.getDefinition(name).defaultValue;
      });
    }

    this.state = state;

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    updateQuery(this.state);
  }

  componentDidUpdate() {
    updateQuery(this.state);
  }

  onChange(key, value) {
    if (key === 'preset') {
      this.setState(state => ({
        props: { ...state.props, schema: presets[value] }
      }));
    }

    this.setState({ [key]: value });
  }

  render() {
    return (
      <PlaygroundForm
        className={playgroundStyles['playground']}
        model={this.state}
        onChange={this.onChange}
        schema={schema}
      >
        <section className={playgroundStyles['playground-column']}>
          <nav className={playgroundStyles['playground-toolbar']}>
            <PlaygroundSelectField name="preset" />
            <PlaygroundSelectField name="theme" />
          </nav>

          <PlaygroundPropsField name="props" spellCheck={false} />
        </section>

        <PlaygroundPreviewField name="props" />
      </PlaygroundForm>
    );
  }
}

class PlaygroundForm extends ValidatedForm {
  render() {
    return (
      <themeContext.Provider value={this.props.model.theme}>
        <context.Provider value={this.getContext()}>
          <section {...omit(this.getNativeFormProps(), ['onSubmit'])} />
        </context.Provider>
      </themeContext.Provider>
    );
  }
}

class PlaygroundPreview extends Component {
  constructor() {
    super(...arguments);

    this.state = { model: undefined };

    this.onModel = this.onModel.bind(this);
    this._schema = eval(`(${this.props.value.schema})`);
  }

  componentWillReceiveProps(props) {
    if (this.props.value.schema !== props.value.schema) {
      this.onModel({});
      this._schema = eval(`(${props.value.schema})`);
    }
  }

  onModel(model) {
    this.setState({ model: JSON.stringify(model, null, 4) });
  }

  render() {
    const Form = themes[this.context].AutoForm;
    const {
      asyncOnSubmit,
      asyncOnValidate,
      schema,
      ...props
    } = this.props.value;

    props.schema = this._schema;
    if (asyncOnSubmit)
      props.onSubmit = () => new Promise(resolve => setTimeout(resolve, 1000));
    if (asyncOnValidate)
      props.onValidate = (model, error, next) => setTimeout(() => next(), 1000);

    return (
      <PlaygroundWrap theme={this.context}>
        {this.props.errorMessage ? (
          <span children={this.props.errorMessage} />
        ) : (
          <Form key={schema} onChangeModel={this.onModel} {...props} />
        )}

        {this.state.model !== undefined && <br />}
        {this.state.model !== undefined && <pre children={this.state.model} />}
      </PlaygroundWrap>
    );
  }
}

PlaygroundPreview.contextType = themeContext;

const PlaygroundPreviewField = connectField(PlaygroundPreview);

function PlaygroundProps({ onChange, schema, value }) {
  const theme = useContext(themeContext);

  const isAntd = theme === 'antd';
  const isBootstrap = theme === 'bootstrap3' || theme === 'bootstrap4';
  const isMaterial = theme === 'material';
  const isSemantic = theme === 'semantic';

  const { AutoField, AutoForm, ErrorsField, LongTextField } = themes[theme];

  return (
    <PlaygroundWrap theme={theme}>
      <AutoForm
        autosave
        autosaveDelay={100}
        model={value}
        onSubmit={onChange}
        schema={schema}
      >
        <AutoField name="autosave" />
        <AutoField name="autosaveDelay" disabled={!value.autosave} />
        <AutoField name="disabled" />
        <AutoField name="label" />
        <AutoField name="placeholder" />
        <AutoField
          name="showInlineError"
          disabled={!(isAntd || isBootstrap || isMaterial || isSemantic)}
        />
        <AutoField name="asyncOnSubmit" />
        <AutoField name="asyncOnValidate" />
        <LongTextField
          name="schema"
          {...(isMaterial && { fullWidth: true, rowsMax: 20 })}
        />
        <ErrorsField />
      </AutoForm>
    </PlaygroundWrap>
  );
}

const PlaygroundPropsField = connectField(PlaygroundProps);

function PlaygroundSelect({ allowedValues = [], onChange, transform, value }) {
  return (
    <select onChange={event => onChange(event.target.value)} value={value}>
      {allowedValues.map(value => (
        <option key={value} value={value}>
          {transform ? transform(value) : value}
        </option>
      ))}
    </select>
  );
}

const PlaygroundSelectField = connectField(PlaygroundSelect);

export function PlaygroundWrap({ children, frameProps, theme }) {
  const content = (
    <React.Fragment>
      {children}
      {styles[theme]}
    </React.Fragment>
  );

  if (theme === 'material') {
    // Material-UI injects scoped CSS classes into head.
    return (
      <section
        children={content}
        className={classNames(
          'frame-root',
          playgroundStyles['playground-wrap']
        )}
      />
    );
  }

  let frameContent = content;
  if (theme === 'antd') {
    // Make AntD popups contained within the iframe.
    frameContent = (
      <FrameContextConsumer>
        {context => (
          <ConfigProvider getPopupContainer={() => context.document.body}>
            {content}
          </ConfigProvider>
        )}
      </FrameContextConsumer>
    );
  }

  return (
    <Frame
      children={frameContent}
      className={playgroundStyles['playground-wrap']}
      {...frameProps}
    />
  );
}

export default Playground;
