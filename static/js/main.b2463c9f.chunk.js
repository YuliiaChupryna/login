(this.webpackJsonplogin=this.webpackJsonplogin||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){e.exports=n(26)},26:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(7),i=n.n(r),l=n(3),c=n(2),o=n(8),u=function(e){return e.email},m=function(e){return e.password},E=function(e){return e.isEmailError},_=function(e){return e.isPasswordError},p=function(e){return e.isResetClicked},g=function(e){return e.isResettingEmailError},d=function(e){return{type:"SET_IS_RESET_CLICKED",isClicked:e}},b={email:"",password:"",areInputsReseted:!0,isEmailError:null,isPasswordError:null,isResetClicked:!1,resettingEmail:"",isResettingEmailError:null},R=Object(o.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_EMAIL":return Object(c.a)({},e,{email:t.email});case"SET_PASSWORD":return Object(c.a)({},e,{password:t.password});case"SET_ARE_INPUTS_RESETED":return Object(c.a)({},e,{areInputsReseted:t.areReseted});case"SET_IS_EMAIL_ERROR":return Object(c.a)({},e,{isEmailError:t.isError});case"SET_IS_PASSWORD_ERROR":return Object(c.a)({},e,{isPasswordError:t.isError});case"SET_IS_RESET_CLICKED":return Object(c.a)({},e,{isResetClicked:t.isClicked});case"SET_RESETTING_EMAIL":return Object(c.a)({},e,{resettingEmail:t.email});case"SET_IS_RESETTING_EMAIL_ERROR":return Object(c.a)({},e,{isResettingEmailError:t.isError});default:return e}}),b),S=(n(13),n(4)),f=n(6),N=n.n(f),O=(n(25),{setEmail:function(e){return{type:"SET_EMAIL",email:e}},setPassword:function(e){return{type:"SET_PASSWORD",password:e}},setIsEmailError:function(e){return{type:"SET_IS_EMAIL_ERROR",isError:e}},setIsPasswordError:function(e){return{type:"SET_IS_PASSWORD_ERROR",isError:e}},setIsResetClicked:d}),I=Object(l.b)((function(e){return{email:u(e),password:m(e),isEmailError:E(e),isPasswordError:_(e)}}),O)((function(e){var t=e.setEmail,n=e.setPassword,r=e.isEmailError,i=e.isPasswordError,l=e.setIsEmailError,c=e.setIsPasswordError,o=e.setIsResetClicked,u=Object(a.useState)(""),m=Object(S.a)(u,2),E=m[0],_=m[1],p=Object(a.useState)(null),g=Object(S.a)(p,2),d=g[0],b=g[1],R=Object(a.useState)(""),f=Object(S.a)(R,2),O=f[0],I=f[1],v=Object(a.useState)(null),w=Object(S.a)(v,2),h=w[0],T=w[1],j={email:[_,b,l],password:[I,T,c]},y=function(e,t,n){var a=e.target.value;j[t][2](!1),j[t][0](a),n.test(a)?j[t][1](!0):j[t][1](!1),""===a&&j[t][1](null)};return s.a.createElement("div",{className:"sign-in__login"},s.a.createElement("h2",{className:"sign-in__heading"},"Welcome back"),s.a.createElement("p",{className:"sign-in__text"},"Sign in to continue to IO technologies"),s.a.createElement("form",{onSubmit:function(e){e.preventDefault(),!1!==d&&""!==E||(b(!1),l(!0)),!1!==h&&""!==O||(T(!1),c(!0)),d&&h&&(t(E),n(O),b(null),T(null),I(""),_(""))}},s.a.createElement("div",{className:"sign-in__input-wrapper"},s.a.createElement("input",{value:E,className:N()("sign-in__input",{"sign-in__input--valid":d},{"sign-in__input--error":!1===d},{"sign-in__input--submit-err":r}),type:"email",placeholder:"Your email",onChange:function(e){return y(e,"email",/^[a-zA-Z]+[a-zA-Z0-9\.\_\-]*@[^\.]+\.+[a-zA-Z]+[a-zA-Z]+/g)}}),r&&s.a.createElement("p",{className:"sign-in__error-message"},"Oops! Your email is not valid")),s.a.createElement("div",{className:"sign-in__input-wrapper"},s.a.createElement("input",{className:N()("sign-in__input",{"sign-in__input--valid":h},{"sign-in__input--error":!1===h},{"sign-in__input--submit-err":i}),value:O,type:"password",placeholder:"Password",onChange:function(e){return y(e,"password",/.{8,}/g)}}),i&&s.a.createElement("p",{className:"sign-in__error-message"},"Oops! Your password is not valid")),s.a.createElement("button",{className:"sign-in__submit-btn",type:"submit"},"Log in",s.a.createElement("span",{className:"arrow"},"\ud83e\udc62")),s.a.createElement("p",{className:"sign-in__forgotten-text"},"Forgot your password"),s.a.createElement("button",{type:"button",className:"sign-in__reset-btn",onClick:function(){o(!0)}},"Reset")))})),v=["Flirchi","io","company name","facenews.com","technologies","patterns","innovations","company product"],w=function(){return s.a.createElement("div",{className:"sign-in__projects"},s.a.createElement("h2",{className:"sign-in__heading"},"Hi, Nikita!"),s.a.createElement("p",{className:"sign-in__text"},"Please choose your project."),s.a.createElement("ul",{className:"sign-in__projects-list"},v.map((function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("li",{className:"sign-in__li"},s.a.createElement("a",{className:"sign-in__link",href:"/"},e)),s.a.createElement("hr",{className:"sign-in__hr"}))}))))},h={setIsResetClicked:d,setResettingEmail:function(e){return{type:"SET_RESETTING_EMAIL",email:e}},setIsResettingEmailError:function(e){return{type:"SET_IS_RESETTING_EMAIL_ERROR",isError:e}}},T=Object(l.b)((function(e){return{isResettingEmailError:g(e)}}),h)((function(e){var t=e.setIsResetClicked,n=e.setResettingEmail,r=e.setIsResettingEmailError,i=e.isResettingEmailError,l=Object(a.useState)(""),c=Object(S.a)(l,2),o=c[0],u=c[1],m=Object(a.useState)(null),E=Object(S.a)(m,2),_=E[0],p=E[1];return s.a.createElement("div",{className:"sign-in__reset"},s.a.createElement("h2",{className:"sign-in__heading"},"Forgot password?"),s.a.createElement("form",{onSubmit:function(e){e.preventDefault(),!1!==_&&""!==o||(p(!1),r(!0)),_&&(n(o),p(null),u(""),t(!1))}},s.a.createElement("div",{className:"sign-in__input-wrapper"},s.a.createElement("input",{value:o,className:N()("sign-in__input",{"sign-in__input--valid":_},{"sign-in__input--error":!1===_},{"sign-in__input--submit-err":i}),type:"email",placeholder:"Your email",onChange:function(e){return function(e,t,n){var a=e.target.value;r(!1),u(a),n.test(a)?p(!0):p(!1),""===a&&p(null)}(e,0,/[^@]+@[^\.]+\.+[a-zA-Z]+[a-zA-Z]+/g)}}),i&&s.a.createElement("p",{className:"sign-in__error-message"},"Oops! Your email is not valid")),s.a.createElement("button",{className:"sign-in__submit-btn",type:"submit"},"Send me instructions")))})),j=Object(l.b)((function(e){return{email:u(e),password:m(e),isResetClicked:p(e)}}))((function(e){var t=e.password,n=e.email,a=e.isResetClicked;return s.a.createElement("section",{className:"sign-in"},s.a.createElement("div",{className:"sign-in__left-content"},s.a.createElement("article",{className:"sign-in__support"},s.a.createElement("div",{className:"sign-in__name"},s.a.createElement("h2",{className:"sign-in__logo"},"Technologies")),s.a.createElement("p",{className:"sign-in__instruction-text"},"Get how-to help and instructions or specific features in"),s.a.createElement("div",{className:"sign-in__support-buttons"},s.a.createElement("button",{className:"sign-in__support-btn",type:"button"},"Help center"),s.a.createElement("span",null,"or"),s.a.createElement("button",{className:"sign-in__support-btn",type:"button"},"Support")))),s.a.createElement("div",{className:"sign-in__right-content"},!n&&!t&&!a&&s.a.createElement(I,null),n&&t&&s.a.createElement(w,null),a&&s.a.createElement(T,null)))}));i.a.render(s.a.createElement(l.a,{store:R},s.a.createElement(j,null),","),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.b2463c9f.chunk.js.map