(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{103:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",function(){return o}),t.d(a,"rightToc",function(){return l}),t.d(a,"default",function(){return c});t(0);var n=t(164);function r(){return(r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o={id:"api-forms",title:"Forms"},l=[{value:"Forms components",id:"forms-components",children:[{value:"AutoForm",id:"autoform",children:[]},{value:"ValidatedQuickForm",id:"validatedquickform",children:[]},{value:"ValidatedForm",id:"validatedform",children:[]},{value:"QuickForm",id:"quickform",children:[]},{value:"BaseForm",id:"baseform",children:[]}]},{value:"Form features",id:"form-features",children:[{value:"Asynchronous validation",id:"asynchronous-validation",children:[]},{value:"Autosave",id:"autosave",children:[]},{value:"Methods",id:"methods",children:[]},{value:"Change reactions",id:"change-reactions",children:[]},{value:"Model transformations",id:"model-transformations",children:[]},{value:"Post-submit handling",id:"post-submit-handling",children:[]},{value:"Validation options and modes",id:"validation-options-and-modes",children:[]}]}],b={rightToc:l},d="wrapper";function c(e){var a=e.components,t=i(e,["components"]);return Object(n.b)(d,r({},b,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h2",null,Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"forms-components"})),Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#forms-components"}),"#"),"Forms components"),Object(n.b)("p",null,"Most of the time you'll be using either ",Object(n.b)("inlineCode",{parentName:"p"},"AutoForm")," or ",Object(n.b)("inlineCode",{parentName:"p"},"ValidatedForm"),", but there are also other form components (rather low-level ones) with different capabilities."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:"center"}),"Component"),Object(n.b)("th",r({parentName:"tr"},{align:"center"}),"Self-generated?"),Object(n.b)("th",r({parentName:"tr"},{align:"center"}),"Self-managed?"),Object(n.b)("th",r({parentName:"tr"},{align:"center"}),"Self-validated?"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"AutoForm")),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"✔️"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"✔️"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"✔️")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"ValidatedQuickForm")),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"✔️"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"✖️"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"✔️")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"ValidatedForm")),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"✖️"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"✖️"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"✔️")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"QuickForm")),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"✔️"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"✖️"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"✖️")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"BaseForm")),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"✖️"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"✖️"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"✖️")))),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"autoform"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#autoform"}),"#"),Object(n.b)("inlineCode",{parentName:"h3"},"AutoForm")),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"AutoForm")," extends ",Object(n.b)("inlineCode",{parentName:"p"},"ValidatedQuickForm")," with state management.\nIt is the most user-friendly and commonly used form.\nIt's self-generated so if you provide a schema, the fields will be automatically rendered.\nThese fields will be also validated.\nBy default, the validation will take place ",Object(n.b)("inlineCode",{parentName:"p"},"onSubmit"),", and ",Object(n.b)("inlineCode",{parentName:"p"},"onChange")," ",Object(n.b)("strong",{parentName:"p"},"after the first submission"),"."),Object(n.b)("h5",null,Object(n.b)("a",r({parentName:"h5"},{"aria-hidden":!0,className:"anchor",id:"props"})),Object(n.b)("a",r({parentName:"h5"},{"aria-hidden":!0,className:"hash-link",href:"#props"}),"#"),"Props:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:"center"}),"Name"),Object(n.b)("th",r({parentName:"tr"},{align:"center"}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"onChangeModel")),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"Like ",Object(n.b)("inlineCode",{parentName:"td"},"onChange")," but for the whole model. Triggered just after ",Object(n.b)("inlineCode",{parentName:"td"},"onChange")," but with the next model instead of (key, value) pair.")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Note:")," All ",Object(n.b)("inlineCode",{parentName:"p"},"ValidatedQuickForm")," props are also accepted and all methods are available.\nIn other words, that means that ",Object(n.b)("inlineCode",{parentName:"p"},"AutoForm")," receives all props listed on this page."),Object(n.b)("h5",null,Object(n.b)("a",r({parentName:"h5"},{"aria-hidden":!0,className:"anchor",id:"props-usage"})),Object(n.b)("a",r({parentName:"h5"},{"aria-hidden":!0,className:"hash-link",href:"#props-usage"}),"#"),"Props usage:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-js"}),"import AutoForm from 'uniforms/AutoForm'; // Or from the theme package.\n\n<AutoForm onChangeModel={model => console.log(model)} />;\n")),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"validatedquickform"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#validatedquickform"}),"#"),Object(n.b)("inlineCode",{parentName:"h3"},"ValidatedQuickForm")),Object(n.b)("p",null,"This form combines both ",Object(n.b)("inlineCode",{parentName:"p"},"QuickForm")," and ",Object(n.b)("inlineCode",{parentName:"p"},"ValidatedForm")," features.\nIt is not self-managed, however, it will automatically generate fields based on the provided schema and validate them."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Note:")," All ",Object(n.b)("inlineCode",{parentName:"p"},"QuickForm")," props are also accepted and all methods are available.",Object(n.b)("br",null),"\n",Object(n.b)("strong",{parentName:"p"},"Note:")," All ",Object(n.b)("inlineCode",{parentName:"p"},"ValidatedForm")," props are also accepted and all methods are available."),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"validatedform"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#validatedform"}),"#"),Object(n.b)("inlineCode",{parentName:"h3"},"ValidatedForm")),Object(n.b)("p",null,"(",Object(n.b)("em",{parentName:"p"},"It's rather an internal form, but it's still exported."),")"),Object(n.b)("p",null,"It's based on ",Object(n.b)("inlineCode",{parentName:"p"},"BaseForm")," and extends its functionality by enabling automatic form validation.\nIts purpose is providing validation functions.\nIt's not autogenerated, so if you want to see any fields rendered, you have to manually add them.\n",Object(n.b)("inlineCode",{parentName:"p"},"ValidatedForm")," is not self-managed, so you won't be able to type anything until there is no ",Object(n.b)("inlineCode",{parentName:"p"},"onChange")," handler,\nhowever, there will be validation checks."),Object(n.b)("h5",null,Object(n.b)("a",r({parentName:"h5"},{"aria-hidden":!0,className:"anchor",id:"props-1"})),Object(n.b)("a",r({parentName:"h5"},{"aria-hidden":!0,className:"hash-link",href:"#props-1"}),"#"),"Props:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:"center"}),"Name"),Object(n.b)("th",r({parentName:"tr"},{align:"center"}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"onValidate")),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"Additional asynchronous validation. Schema validation has to be sync, so this is the only way to achieve async validation.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"validate")),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"Validation mode. By default, the form will start to validate from the time of the first submit and then revalidate on every change. It's ",Object(n.b)("inlineCode",{parentName:"td"},"onChangeAfterSubmit"),". There are also ",Object(n.b)("inlineCode",{parentName:"td"},"onChange")," and ",Object(n.b)("inlineCode",{parentName:"td"},"onSubmit")," modes, but those are quite self-explanatory.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"validator")),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"Validator options. It's passed to ",Object(n.b)("inlineCode",{parentName:"td"},"getValidator")," of your schema bridge. It really depends on your schema.")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Note:")," All ",Object(n.b)("inlineCode",{parentName:"p"},"BaseForm")," props are also accepted and all methods are available."),Object(n.b)("h5",null,Object(n.b)("a",r({parentName:"h5"},{"aria-hidden":!0,className:"anchor",id:"props-usage-1"})),Object(n.b)("a",r({parentName:"h5"},{"aria-hidden":!0,className:"hash-link",href:"#props-usage-1"}),"#"),"Props usage:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-js"}),"import ValidatedForm from 'uniforms/ValidatedForm'; // Or from the theme package.\n\n<ValidatedForm\n  onValidate={(model, error, callback) => {\n    // You can either ignore validation error...\n    if (omitValidation(model)) {\n      return callback(null);\n    }\n\n    // ...or any additional validation if an error is already there...\n    if (error) {\n      return callback();\n    }\n\n    // ...or feed it with another error.\n    MyAPI.validate(model, error => callback(error || null));\n  }}\n  validate=\"onChangeAfterSubmit\"\n  validator={{ clean: true }}\n  ref={form => {\n    // Validate form with the current model.\n    //   Returns a Promise, which rejects with an validation error or\n    //   resolves without any value. Note, that it resolves/rejects AFTER\n    //   the component is rerendered.\n    form.validate();\n\n    // Validate form with key set to value.\n    //   You can use it to check, if a given value will pass the\n    //   validation or not. Returns validation Promise, as described above.\n    form.validate(key, value);\n\n    // Validate form with the given model.\n    //   Rather internal function. Returns validation Promise, as described\n    //   above.\n    form.validateModel(model);\n  }}\n/>;\n")),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"quickform"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#quickform"}),"#"),Object(n.b)("inlineCode",{parentName:"h3"},"QuickForm")),Object(n.b)("p",null,"(",Object(n.b)("em",{parentName:"p"},"It's rather an internal form, but it's still exported."),")"),Object(n.b)("p",null,"It's based on ",Object(n.b)("inlineCode",{parentName:"p"},"BaseForm")," and extends its functionality by enabling automatic form generation.\nIf you provide a schema, the fields will be automatically rendered.\nHowever, ",Object(n.b)("inlineCode",{parentName:"p"},"QuickForm")," is not self-managed, so you won't be able to type anything until there is no ",Object(n.b)("inlineCode",{parentName:"p"},"onChange")," handler."),Object(n.b)("h5",null,Object(n.b)("a",r({parentName:"h5"},{"aria-hidden":!0,className:"anchor",id:"props-2"})),Object(n.b)("a",r({parentName:"h5"},{"aria-hidden":!0,className:"hash-link",href:"#props-2"}),"#"),"Props:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:"center"}),"Name"),Object(n.b)("th",r({parentName:"tr"},{align:"center"}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"autoField")),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"Custom ",Object(n.b)("inlineCode",{parentName:"td"},"AutoField"),". It should be anything that will pass through ",Object(n.b)("inlineCode",{parentName:"td"},"React.createElement"),".")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"errorsField")),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"Custom ",Object(n.b)("inlineCode",{parentName:"td"},"ErrorsField"),". It should be anything that will pass through ",Object(n.b)("inlineCode",{parentName:"td"},"React.createElement"),".")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"submitField")),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"Custom ",Object(n.b)("inlineCode",{parentName:"td"},"SubmitField"),". It should be anything that will pass through ",Object(n.b)("inlineCode",{parentName:"td"},"React.createElement"),".")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Note:")," All ",Object(n.b)("inlineCode",{parentName:"p"},"BaseForm")," props are also accepted and all methods are available."),Object(n.b)("h5",null,Object(n.b)("a",r({parentName:"h5"},{"aria-hidden":!0,className:"anchor",id:"props-usage-2"})),Object(n.b)("a",r({parentName:"h5"},{"aria-hidden":!0,className:"hash-link",href:"#props-usage-2"}),"#"),"Props usage:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-js"}),"import QuickForm from 'uniforms/QuickForm'; // Or from the theme package.\n\n<QuickForm\n  autoField={CustomAutoField}\n  errorsField={CustomErrorsField}\n  submitField={CustomSubmitField}\n/>;\n")),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"baseform"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#baseform"}),"#"),Object(n.b)("inlineCode",{parentName:"h3"},"BaseForm")),Object(n.b)("p",null,"(",Object(n.b)("em",{parentName:"p"},"It's rather an internal form, but it's still exported."),")"),Object(n.b)("p",null,"It's the very basic form & foundation for the other forms.\nIt's not autogenerated, so if you want to see any fields rendered, you have to manually add them.\nHowever, ",Object(n.b)("inlineCode",{parentName:"p"},"BaseForm")," is not self-managed, so you won't be able to type anything until there is no ",Object(n.b)("inlineCode",{parentName:"p"},"onChange")," handler."),Object(n.b)("h5",null,Object(n.b)("a",r({parentName:"h5"},{"aria-hidden":!0,className:"anchor",id:"props-3"})),Object(n.b)("a",r({parentName:"h5"},{"aria-hidden":!0,className:"hash-link",href:"#props-3"}),"#"),"Props:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:"center"}),"Name"),Object(n.b)("th",r({parentName:"tr"},{align:"center"}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"autosaveDelay")),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"Autosave delay. Set 0 for an instant autosave.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"autosave")),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"Enable autosave. Every change triggers ",Object(n.b)("inlineCode",{parentName:"td"},"onSubmit"),".")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"disabled")),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"Default ",Object(n.b)("inlineCode",{parentName:"td"},"disabled")," prop for all fields. By default it's false - set it to true to disable the whole form.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"error")),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"Validation error. Current validation state. It should be either compatible with your schema or an ",Object(n.b)("inlineCode",{parentName:"td"},"Error")," object.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"grid")),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"Bootstrap grid layout style. Passing a number is an equivalent of ",Object(n.b)("inlineCode",{parentName:"td"},"{sm: n}"),". Object is a ",Object(n.b)("inlineCode",{parentName:"td"},"{mode: size}")," object. Complete string is simply passed through. Available in: bootstrap3, bootstrap4.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"label")),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"Default label prop for all fields. By default it's true - set it to false to disable labels for the whole form.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"model")),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"Form model. An object with ",Object(n.b)("inlineCode",{parentName:"td"},"{field: value}")," structure. It doesn't matter if it has a prototype or not, but keep in mind that in ",Object(n.b)("inlineCode",{parentName:"td"},"onSubmit")," or in ",Object(n.b)("inlineCode",{parentName:"td"},"onChangeModel")," you'll receive a plain object. If you treat form as an input, then this is a value.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"modelTransform")),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"Model transform. Function transforming one model into another. It's used in a few situations (modes) described below. Do not mutate a given model!")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"onChange")),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"Field change action. It receives two arguments: key and value, where the key is a dot-separated path to the changed field and value is a requested value.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"onSubmitFailure")),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"Submit failure action. If ",Object(n.b)("inlineCode",{parentName:"td"},"onSubmit")," returns a Promise, then this will be attached to its ",Object(n.b)("inlineCode",{parentName:"td"},".catch")," chain.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"onSubmitSuccess")),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"Submit success action. If ",Object(n.b)("inlineCode",{parentName:"td"},"onSubmit")," returns a Promise, then this will be attached to its ",Object(n.b)("inlineCode",{parentName:"td"},".then")," chain.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"onSubmit")),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"Submit action. When the form is submitted manually or by an HTML5 event, then it's called with the current model.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"placeholder")),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"Default placeholder prop for all fields. By default it's false - set it to true to enable placeholders for the whole form.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"schema")),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"Form schema. It's used for form generation in QuickForm and validation in ValidatedForm.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"showInlineError")),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"Default ",Object(n.b)("inlineCode",{parentName:"td"},"showInlineError")," prop for all fields. By default it's false - set it to true to enable inline errors for the whole form. Available in: antd, bootstrap3, bootstrap4, semantic.")))),Object(n.b)("h5",null,Object(n.b)("a",r({parentName:"h5"},{"aria-hidden":!0,className:"anchor",id:"props-usage-3"})),Object(n.b)("a",r({parentName:"h5"},{"aria-hidden":!0,className:"hash-link",href:"#props-usage-3"}),"#"),"Props usage:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-js"}),"import BaseForm from 'uniforms/BaseForm'; // Or from the theme package.\n\n<BaseForm\n  autosaveDelay={0}\n  autosave={false}\n  disabled={false}\n  error={new Error('Nope.')}\n  grid={3} // 'col-3-sm' on label, 'col-9-sm' on input\n  grid=\"4\" // 'col-4-sm' on label, 'col-8-sm' on input\n  grid={{ md: 5 }} // 'col-5-md' on label, 'col-7-md' on input\n  grid=\"col-6-xl\" // 'col-6-xl' on label, 'col-6-xl' on input\n  label\n  model={{ fieldA: 1 }}\n  modelTransform={(mode, model) => {\n    // This model will be passed to the fields.\n    if (mode === 'form') {\n      /* ... */\n    }\n\n    // This model will be submitted.\n    if (mode === 'submit') {\n      /* ... */\n    }\n\n    // This model will be validated.\n    if (mode === 'validate') {\n      /* ... */\n    }\n\n    // Otherwise, return unaltered model.\n    return model;\n  }}\n  onChange={(key, value) => console.log(key, value)}\n  onSubmitFailure={() => alert('Promise rejected!')}\n  onSubmitSuccess={() => alert('Promise resolved!')}\n  onSubmit={model => db.saveThatReturnsPromiseOrNothing(model)}\n  placeholder={false}\n  schema={myFormSchema}\n  showInlineError\n  ref={form => {\n    // Reset form.\n    //   It will reset changed state, model state in AutoForm, validation\n    //   state in ValidatedForm and rerender.\n    form.reset();\n\n    // Trigger form change.\n    //   It's a programmatic equivalent of a change event.\n    form.change(key, value);\n\n    // Submit form.\n    //   It's a programmatic equivalent of a submit event. Returns a promise,\n    //   which will either resolve with submitted form or reject with\n    //   validation error in ValidatedForm. You can also use onSubmitFailure\n    //   and onSubmitSuccess instead of doing form.submit().then().\n    form.submit();\n  }}\n/>;\n")),Object(n.b)("h2",null,Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"form-features"})),Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#form-features"}),"#"),"Form features"),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"asynchronous-validation"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#asynchronous-validation"}),"#"),"Asynchronous validation"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"AutoForm")," and ",Object(n.b)("inlineCode",{parentName:"p"},"ValidatedForm")," both accept an ",Object(n.b)("inlineCode",{parentName:"p"},"onValidate")," prop. It can be used to create an asynchronous validation:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-js"}),"const onValidate = (model, error, callback) => {\n  // You can either ignore validation error...\n  if (omitValidation(model)) {\n    return callback(null);\n  }\n\n  // ...or any additional validation if an error is already there...\n  if (error) {\n    return callback();\n  }\n\n  // ...or feed it with another error.\n  MyAPI.validate(model, error => callback(error || null));\n};\n\n// Later...\n\n<ValidatedForm {...props} onValidate={onValidate} />;\n")),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"autosave"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#autosave"}),"#"),"Autosave"),Object(n.b)("p",null,"Every form has autosave functionality. If you set an ",Object(n.b)("inlineCode",{parentName:"p"},"autosave")," prop, then every change will trigger a submit. There's also an ",Object(n.b)("inlineCode",{parentName:"p"},"autosaveDelay")," prop - a minimum time between saves in milliseconds (default: ",Object(n.b)("inlineCode",{parentName:"p"},"0"),")."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Example:")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-js"}),"<AutoForm\n  autosave\n  autosaveDelay={5000} // 5 seconds\n  schema={schema}\n  onSubmit={onSubmit}\n/>\n")),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"methods"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#methods"}),"#"),"Methods"),Object(n.b)("p",null,"You can use ",Object(n.b)("a",r({parentName:"p"},{href:"https://facebook.github.io/react/docs/more-about-refs.html"}),"React ",Object(n.b)("inlineCode",{parentName:"a"},"ref")," prop")," to manually access form methods. Example usage:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-js"}),"const MyForm = ({ schema, onSubmit }) => {\n  let formRef;\n\n  return (\n    <section>\n      <AutoForm\n        ref={ref => (formRef = ref)}\n        schema={schema}\n        onSubmit={onSubmit}\n      />\n      <small onClick={() => formRef.reset()}>Reset</small>\n      <small onClick={() => formRef.submit()}>Submit</small>\n    </section>\n  );\n};\n")),Object(n.b)("p",null,"All available methods:"),Object(n.b)("h4",null,Object(n.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"anchor",id:"changekey-value"})),Object(n.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"hash-link",href:"#changekey-value"}),"#"),Object(n.b)("inlineCode",{parentName:"h4"},"change(key, value)")),Object(n.b)("p",null,"Triggers a form change. It's a programmatic equivalent of a change event."),Object(n.b)("h4",null,Object(n.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"anchor",id:"reset"})),Object(n.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"hash-link",href:"#reset"}),"#"),Object(n.b)("inlineCode",{parentName:"h4"},"reset()")),Object(n.b)("p",null,"Resets a form. It will also reset changed state, model state (only in AutoForm), validation state (only in ValidatedForm) and trigger a rerender."),Object(n.b)("h4",null,Object(n.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"anchor",id:"submit"})),Object(n.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"hash-link",href:"#submit"}),"#"),Object(n.b)("inlineCode",{parentName:"h4"},"submit()")),Object(n.b)("p",null,"Submits a form. It's a programmatic equivalent of a submit event. Returns a promise, which will either resolve with a submitted model or reject with validation error in ValidatedForm. You can also use ",Object(n.b)("inlineCode",{parentName:"p"},"onSubmitFailure")," and ",Object(n.b)("inlineCode",{parentName:"p"},"onSubmitSuccess")," instead of doing ",Object(n.b)("inlineCode",{parentName:"p"},"form.submit().then()"),"."),Object(n.b)("h4",null,Object(n.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"anchor",id:"validate"})),Object(n.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"hash-link",href:"#validate"}),"#"),Object(n.b)("inlineCode",{parentName:"h4"},"validate()")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"(added in ",Object(n.b)("inlineCode",{parentName:"em"},"ValidatedForm"),")")),Object(n.b)("p",null,"Validates a form with the current model. Returns a Promise, which rejects with a validation error or resolves without any value. Note, that it resolves/rejects ",Object(n.b)("strong",{parentName:"p"},"after")," the component is rerendered."),Object(n.b)("h4",null,Object(n.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"anchor",id:"validatekey-value"})),Object(n.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"hash-link",href:"#validatekey-value"}),"#"),Object(n.b)("inlineCode",{parentName:"h4"},"validate(key, value)")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"(added in ",Object(n.b)("inlineCode",{parentName:"em"},"ValidatedForm"),")")),Object(n.b)("p",null,"Validates a form with key set to value. You can use it to check, if a given value will pass the validation or not. Returns validation Promise, as described above."),Object(n.b)("h4",null,Object(n.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"anchor",id:"validatemodelmodel"})),Object(n.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"hash-link",href:"#validatemodelmodel"}),"#"),Object(n.b)("inlineCode",{parentName:"h4"},"validateModel(model)")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"(added in ",Object(n.b)("inlineCode",{parentName:"em"},"ValidatedForm"),")")),Object(n.b)("p",null,"Validates a form with the given model. Returns validation Promise, as described above."),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"change-reactions"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#change-reactions"}),"#"),"Change reactions"),Object(n.b)("p",null,"If you want to make one field to influence others, simply extend ",Object(n.b)("inlineCode",{parentName:"p"},"AutoForm")," and override ",Object(n.b)("inlineCode",{parentName:"p"},"onChange")," method."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Example:")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-js"}),"class ChainForm extends AutoForm {\n  onChange(key, value) {\n    if (key === 'key_to_intercept') return;\n    if (key === 'key_to_translate') return super.onChange('another_key', value);\n    if (key === 'key_to_mutate') {\n      super.onChange('another_key1', value * 2);\n      super.onChange('another_key2', value / 2);\n      return;\n    }\n\n    super.onChange(key, value);\n  }\n}\n")),Object(n.b)("p",null,"It can be easily applied multiple times to make your forms even more reusable."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Example:")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-js"}),"const withMultipliedField = (fieldA, fieldB, Form) =>\n  class withMultipliedFieldForm extends Form {\n    onChange(key, value) {\n      // Multiply fieldA\n      if (key === fieldA) super.onChange(fieldB, value + value);\n\n      // Pass every change\n      super.onChange(key, value);\n    }\n  };\n")),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"model-transformations"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#model-transformations"}),"#"),"Model transformations"),Object(n.b)("p",null,"If you need to transform model before it will be validated, submitted or passed down to the fields, there's a ",Object(n.b)("inlineCode",{parentName:"p"},"modelTransform")," prop, which should be used in those use cases."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Example:")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-js"}),"<AutoForm\n  // Do not mutate given model!\n  modelTransform={(mode, model) => {\n    // This model will be passed to the fields.\n    if (mode === 'form') {\n      /* ... */\n    }\n\n    // This model will be submitted.\n    if (mode === 'submit') {\n      /* ... */\n    }\n\n    // This model will be validated.\n    if (mode === 'validate') {\n      /* ... */\n    }\n\n    // Otherwise, return unaltered model.\n    return model;\n  }}\n  onSubmit={onSubmit}\n  schema={schema}\n/>\n")),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"post-submit-handling"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#post-submit-handling"}),"#"),"Post-submit handling"),Object(n.b)("p",null,"It's a good UX practice to tell your users that something failed or succeed. To make it simpler, there are ",Object(n.b)("inlineCode",{parentName:"p"},"onSubmitFailure")," and ",Object(n.b)("inlineCode",{parentName:"p"},"onSubmitSuccess")," props."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Example:")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-js"}),"<AutoForm\n  schema={schema}\n  onSubmit={doc => db.saveThatReturnsPromise(doc)}\n  onSubmitSuccess={() => alert('Promise resolved!')}\n  onSubmitFailure={() => alert('Promise rejected!')}\n/>\n")),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"validation-options-and-modes"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#validation-options-and-modes"}),"#"),"Validation options and modes"),Object(n.b)("p",null,"Any form can be validated in one those three styles:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"onChange"),"\nValidate on every change.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"onChangeAfterSubmit")," ",Object(n.b)("em",{parentName:"p"},"(default)"),"\nValidate on every change, but only after first submit.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"onSubmit"),"\nValidate on every submit."))),Object(n.b)("p",null,"If your schema validator accepts any options, those can be passed in ",Object(n.b)("inlineCode",{parentName:"p"},"validator")," prop."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Example:")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-js"}),'<AutoForm\n  validate="onChange"\n  validator={validatorOptions}\n  schema={schema}\n  onSubmit={onSubmit}\n/>\n')))}c.isMDXComponent=!0},164:function(e,a,t){"use strict";t.d(a,"a",function(){return l}),t.d(a,"b",function(){return m});var n=t(0),r=t.n(n),i=r.a.createContext({}),o=function(e){var a=r.a.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):Object.assign({},a,e)),t},l=function(e){var a=o(e.components);return r.a.createElement(i.Provider,{value:a},e.children)},b="mdxType",d={inlineCode:"code",wrapper:function(e){return r.a.createElement(r.a.Fragment,{},e.children)}},c=function(e){var a=e.components,t=e.mdxType,n=e.originalType,i=e.parentName,l=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===a.indexOf(n)&&(t[n]=e[n]);return t}(e,["components","mdxType","originalType","parentName"]),b=o(a);return r.a.createElement(b[i+"."+t]||b[t]||d[t]||n,a?Object.assign({},l,{components:a}):l)};function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var d in a)hasOwnProperty.call(a,d)&&(l[d]=a[d]);l.originalType=e,l[b]="string"==typeof e?e:n,o[1]=l;for(var m=2;m<i;m++)o[m]=t[m];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}c.displayName="MDXCreateElement"}}]);