(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={form:"ContactForm_form__2zEFK",labelTitle:"ContactForm_labelTitle__1IQzM",input:"ContactForm_input__2LLoH",button:"ContactForm_button__VPT8y"}},25:function(t,e,n){t.exports={item:"ContactList_item__1I96J",button:"ContactList_button__1tITz"}},29:function(t,e,n){t.exports={form:"Filter_form__-PWgm",input:"Filter_input__3qAA2"}},39:function(t,e,n){},77:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(17),o=n.n(r),u=n(45),s=n(10),i=n(41),b=n(3),l=n(19),j=n(20),f=n(23),O=n(21),h=n(11),d=n.n(h),m=n(24),p=n(2),C=Object(p.b)("contacts/fetchContactsRequest"),x=Object(p.b)("contacts/fetchContactsSuccess"),v=Object(p.b)("contacts/fetchContactsError"),g=Object(p.b)("contacts/addContactRequest"),y=Object(p.b)("contacts/addContactSuccess"),_=Object(p.b)("contacts/addContactError"),k=Object(p.b)("contacts/deleteContactRequest"),w=Object(p.b)("contacts/deleteContactSuccess"),N=Object(p.b)("contacts/deleteContactError"),S=Object(p.b)("contacts/changeFilter"),F=n(16),L=n.n(F);L.a.defaults.baseURL="http://localhost:4040";var E,q,T,R,I,A={fetchContacts:function(){return L.a.get("/contacts")},addContact:function(t){return L.a.post("/contacts",t)},deleteContact:function(t){return L.a.delete("/contacts/".concat(t))}},D=n(14),z=function(t){return t.contacts.loading},P=function(t){return t.contacts.items},U=function(t){return t.contacts.filter},J=Object(D.a)([P,U],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),M=n(12),V=n.n(M),B=n(1),H=function(t){Object(f.a)(n,t);var e=Object(O.a)(n);function n(){var t;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleInputChange=function(e){var n=e.target,c=n.name,a=n.value;t.setState(Object(b.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault();var n=t.state.name,c=t.props.contacts;t.state.name&&t.state.number?c.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," already exists. Try another name")):(t.props.onSubmit(t.state),t.resetForm()):alert("Enter the name!")},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(j.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(B.jsxs)("form",{className:V.a.form,onSubmit:this.handleSubmit,children:[Object(B.jsxs)("label",{className:V.a.labelTitle,children:["Name:",Object(B.jsx)("input",{type:"text",name:"name",className:V.a.input,value:e,onChange:this.handleInputChange})]}),Object(B.jsxs)("label",{className:V.a.labelTitle,children:["Phone:",Object(B.jsx)("input",{type:"text",name:"number",className:V.a.input,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"The telephone number must contain numbers and may contain spaces, dashes, parentheses and may start with +",required:!0,value:n,onChange:this.handleInputChange})]}),Object(B.jsx)("button",{type:"submit",className:V.a.button,children:"Add contact"})]})}}]),n}(c.Component),K=Object(s.b)((function(t){return{contacts:P(t)}}),(function(t){return{onSubmit:function(e){return t(function(t){var e=t.name,n=t.number;return function(){var t=Object(m.a)(d.a.mark((function t(c){var a,r,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={name:e,number:n},c(g()),t.prev=2,t.next=5,A.addContact(a);case 5:r=t.sent,o=r.data,c(y(o)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),c(_(t.t0));case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()}(e))}}}))(H),Q=n(29),W=n.n(Q),G=Object(s.b)((function(t){return{filterValue:U(t)}}),(function(t){return{onFilter:function(e){return t(S(e.target.value))}}}))((function(t){var e=t.filterValue,n=t.onFilter;return Object(B.jsx)("form",{className:W.a.form,children:Object(B.jsxs)("label",{children:["Find contacts by name",Object(B.jsx)("input",{type:"text",className:W.a.input,value:e,onChange:n})]})})})),X=n(25),Y=n.n(X),Z=function(t){Object(f.a)(n,t);var e=Object(O.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){var t=this.props,e=t.contactList,n=t.onDeleteContact,c=t.isLoadingContacts;return Object(B.jsxs)(B.Fragment,{children:[c&&Object(B.jsx)("h1",{children:"Loading.."}),Object(B.jsx)("ul",{className:Y.a.list,children:e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(B.jsxs)("li",{className:Y.a.item,children:[Object(B.jsxs)("p",{children:[c,": "]}),Object(B.jsx)("p",{children:a}),Object(B.jsx)("button",{type:"button",className:Y.a.button,onClick:function(){return n(e)},children:"Delete"})]},e)}))})]})}}]),n}(c.Component),$=Object(s.b)((function(t){return{isLaodingContacts:z(t),contactList:J(t)}}),(function(t){return{onDeleteContact:function(e){return t((n=e,function(){var t=Object(m.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(k()),t.prev=1,t.next=4,A.deleteContact(n);case 4:e(w(n)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),e(N(t.t0));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()));var n},fetchContacts:function(){return t(function(){var t=Object(m.a)(d.a.mark((function t(e){var n,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(C()),t.prev=1,t.next=4,A.fetchContacts();case 4:n=t.sent,c=n.data,e(x(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(v(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}())}}}))(Z),tt=(n(39),function(){return Object(B.jsxs)("div",{className:"container",children:[Object(B.jsx)("h1",{className:"title",children:"Phonebook"}),Object(B.jsx)(K,{}),Object(B.jsx)("h2",{className:"title",children:"Contacts"}),Object(B.jsx)(G,{}),Object(B.jsx)($,{})]})}),et=n(22),nt=n(42),ct=n.n(nt),at=n(9),rt=[].concat(Object(et.a)(Object(p.d)({serializableCheck:{ignoredActions:[at.a,at.f,at.b,at.c,at.d,at.e]}})),[ct.a]),ot=n(43),ut=n.n(ot),st=n(5),it=Object(p.c)([],(E={},Object(b.a)(E,x,(function(t,e){return e.payload})),Object(b.a)(E,y,(function(t,e){var n=e.payload;return[].concat(Object(et.a)(t),[n])})),Object(b.a)(E,w,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),E)),bt=Object(p.c)(!1,(q={},Object(b.a)(q,C,(function(){return!0})),Object(b.a)(q,x,(function(){return!1})),Object(b.a)(q,v,(function(){return!1})),Object(b.a)(q,g,(function(){return!0})),Object(b.a)(q,y,(function(){return!1})),Object(b.a)(q,_,(function(){return!1})),Object(b.a)(q,k,(function(){return!0})),Object(b.a)(q,w,(function(){return!1})),Object(b.a)(q,N,(function(){return!1})),q)),lt=Object(p.c)("",Object(b.a)({},S,(function(t,e){return e.payload}))),jt=Object(st.b)({items:it,filter:lt,loading:bt}),ft=(Object(p.b)("auth/registrationRequest"),Object(p.b)("auth/registrationSuccess")),Ot=Object(p.b)("auth/registrationError"),ht=(Object(p.b)("auth/loginRequest"),Object(p.b)("auth/loginSuccess")),dt=Object(p.b)("auth/loginError"),mt=(Object(p.b)("auth/logoutRequest"),Object(p.b)("auth/logoutSuccess")),pt=(Object(p.b)("auth/logoutError"),Object(p.b)("auth/getCurrentUserRequest"),Object(p.b)("auth/getCurrentUserSuccess")),Ct=Object(p.b)("auth/getCurrentUserError"),xt={name:null,email:null},vt=Object(p.c)(xt,(T={},Object(b.a)(T,ft,(function(t,e){return e.payload.user})),Object(b.a)(T,ht,(function(t,e){return e.payload.user})),Object(b.a)(T,mt,(function(){return xt})),Object(b.a)(T,pt,(function(t,e){return e.payload})),T)),gt=Object(p.c)(null,(R={},Object(b.a)(R,ft,(function(t,e){return e.payload.token})),Object(b.a)(R,ht,(function(t,e){return e.payload.token})),Object(b.a)(R,mt,(function(){return null})),R)),yt=Object(p.c)(!1,(I={},Object(b.a)(I,ft,(function(){return!0})),Object(b.a)(I,ht,(function(){return!0})),Object(b.a)(I,pt,(function(){return!0})),Object(b.a)(I,Ot,(function(){return!1})),Object(b.a)(I,dt,(function(){return!1})),Object(b.a)(I,Ct,(function(){return!1})),Object(b.a)(I,mt,(function(){return!1})),I)),_t=Object(st.b)({user:vt,token:gt,isAuthenticated:yt}),kt={key:"auth",storage:ut.a,whitelist:["token"]},wt=Object(p.a)({reducer:{auth:Object(at.g)(kt,_t),contacts:jt},middleware:rt,devTools:!1}),Nt=Object(at.h)(wt);o.a.render(Object(B.jsx)(a.a.StrictMode,{children:Object(B.jsx)(s.a,{store:wt,children:Object(B.jsx)(i.a,{loading:"loading",persistor:Nt,children:Object(B.jsx)(u.a,{children:Object(B.jsx)(tt,{})})})})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.c55d8297.chunk.js.map