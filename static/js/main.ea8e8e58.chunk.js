(this.webpackJsonpbeerapi=this.webpackJsonpbeerapi||[]).push([[0],{15:function(e,t){t.NameMinChar=2,t.NameMaxChar=50,t.PasswordMinLength=6,t.BASE_URL="https://api.punkapi.com/v2/beers"},210:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(73),r=a.n(s),i=(a(41),a(4)),l=a(8),o=(a(84),a(1)),d=function(e){return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsxs)("div",{className:"wrapImgName",children:[Object(o.jsx)("img",{src:e.image_url,alt:"beer"}),Object(o.jsx)("div",{className:"beerName",children:Object(o.jsx)("h4",{children:e.name})})]}),Object(o.jsxs)("div",{className:"wrapH",children:[Object(o.jsx)("div",{className:"abv",children:Object(o.jsx)("h5",{children:"ABV - ".concat(e.abv,"% ")})}),Object(o.jsx)("div",{className:"ibu",children:Object(o.jsx)("h5",{children:"IBU - ".concat(e.ibu?e.ibu:"-"," ")})}),Object(o.jsx)("div",{className:"tagLine",children:Object(o.jsx)("h5",{children:e.tagline})})]})]})},j=(a(86),function(e){var t=e.beerList;return Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"wrapListBeer",children:t.map((function(e,t){return Object(o.jsx)("section",{className:"wrapCard",children:d(e)},t)}))})})}),b=(a(87),a(88),function(e){var t=e.handleChange;return Object(o.jsx)("div",{className:"searchBar",children:Object(o.jsx)("input",{className:"searchInput",type:"text",placeholder:"Search...",onChange:t})})}),h=(a(89),function(e){var t=e.switchSort;return Object(o.jsx)("div",{className:"wrapbtn",children:Object(o.jsx)("button",{onClick:t,className:"btn",children:"\u2191 SORT ABV% \u2193  "})})}),u=(a(90),function(e){var t=e.buttonClicked;return Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"wrapbtnImg",children:Object(o.jsxs)("button",{className:"btnImg",onClick:t,children:[Object(o.jsx)("img",{className:"imgKey",src:"https://www.flaticon.com/svg/vstatic/svg/3659/3659724.svg?token=exp=1619297728~hmac=61601a082ac94de84b78e92cc783b815",alt:""})," "]})})})}),m=function(e){var t=e.onTextChange,a=e.onSortByClick,n=e.registerButtonClicked;return Object(o.jsxs)("header",{className:"header",children:[Object(o.jsx)("div",{className:"headText",children:Object(o.jsx)("h1",{children:"BEER"})}),Object(o.jsx)(h,{switchSort:a}),Object(o.jsx)(b,{handleChange:t}),Object(o.jsx)(u,{buttonClicked:n})]})},x=(a(91),a(13)),O=a(16),v=a(15),p=O.a().shape({name:O.b().min(v.NameMinChar,"Too Short!").max(v.NameMaxChar,"Too Long!").required("Required"),birthDate:O.b().required("Required!"),email:O.b().email("Invalid email").required("Required"),password:O.b().min(v.PasswordMinLength,"Too Short!").required("Required")}),f=function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),e.preventDefault()},g=function(e){var t=e.isVisible,a=e.onCloseClicked;if(!t)return null;return Object(o.jsx)("div",{className:"form-background",onClick:function(){a()},children:Object(o.jsxs)("div",{className:"form",onClick:f,children:[Object(o.jsx)("div",{className:"btnClose",children:Object(o.jsx)("button",{onClick:a,children:"X"})}),Object(o.jsx)(x.c,{initialValues:{name:"",email:"",birthDate:"",password:""},validationSchema:p,validateOnBlur:!0,children:function(e){var t=e.errors,n=e.touched,c=e.isValid,s=e.dirty,r=e.values,i=e.handleChange,l=e.handleBlur;return Object(o.jsxs)(x.b,{children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"name",children:"\u0424.\u0418.\u041e"}),Object(o.jsx)(x.a,{name:"name",type:"text",className:"form-control",onChange:i,onBlur:l,value:r.name}),t.name&&n.name?Object(o.jsx)("div",{className:"text-danger",children:t.name}):null]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"email",children:"\u0410\u0434\u0440\u0435\u0441 \u043f\u043e\u0447\u0442\u044b"}),Object(o.jsx)(x.a,{name:"email",type:"email",className:"form-control",onChange:i,onBlur:l,value:r.email}),t.email&&n.email?Object(o.jsx)("div",{className:"text-danger",children:t.email}):null]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"birthDate",children:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"}),Object(o.jsx)(x.a,{name:"birthDate",type:"date",className:"form-control"}),t.birthDate&&n.birthDate?Object(o.jsx)("div",{className:"text-danger",children:t.birthDate}):null]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"password",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(o.jsx)(x.a,{name:"password",type:"password",className:"form-control",onChange:i,onBlur:l,value:r.password}),t.password&&n.password?Object(o.jsx)("div",{className:"text-danger",children:t.password}):null]}),Object(o.jsx)("button",{className:"btn",disabled:!c||!s,onClick:a,type:"submit",children:"Submit"})]})}})]})})},N=a(79),C=a.n(N);var w=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),r=Object(l.a)(s,2),d=r[0],b=r[1],h=Object(n.useState)(!1),u=Object(l.a)(h,2),x=u[0],O=u[1];return Object(n.useEffect)((function(){C.a.get(v.BASE_URL).then((function(e){b(e.data),c(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(o.jsxs)("div",{className:"wrapperApp",children:[Object(o.jsx)("div",{className:"header",children:Object(o.jsx)(m,{onTextChange:function(e){var t=e.target.value,a=d.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));c(a)},onSortByClick:function(){var e=Object(i.a)(d.sort((function(e,t){return e.abv-t.abv})));a[0].abv<a[a.length-1].abv&&c(e.reverse()),a[0].abv>a[a.length-1].abv&&c(e)},registerButtonClicked:function(){O(!0)}})}),Object(o.jsx)(g,{isVisible:x,onCloseClicked:function(){O(!1)}}),Object(o.jsx)(j,{beerList:a})]})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,211)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(w,{})}),document.getElementById("root")),k()},41:function(e,t,a){},84:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){}},[[210,1,2]]]);
//# sourceMappingURL=main.ea8e8e58.chunk.js.map