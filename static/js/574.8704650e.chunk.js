"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[574],{574:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var a=t(152),r=t(649),s=t(762),i="contactForm_contactForm__f4X+T",o="contactForm_formLabel__PNGQI",c=t(329),l=function(){var e=(0,r.Tn)(),n=(0,a.Z)(e,2),t=n[0],l=n[1].isLoading,u=[];return(0,c.jsxs)("form",{className:i,onSubmit:function(e){e.preventDefault();var n=e.target,a=n.elements.name.value,r=n.elements.phone.value;n.reset();var s=a.toLowerCase(),i=u.find((function(e){return e.name.toLowerCase()===s}));if(i)return alert("".concat(a," is already in contacts, sorry"));t({name:a,phone:r})},children:[(0,c.jsxs)("label",{className:o,children:["Name",(0,c.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,c.jsxs)("label",{className:o,children:["Number",(0,c.jsx)("input",{type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,c.jsx)("button",{type:"submit",disabled:l,children:l?(0,s.U)("Adding..."):"Add contact"})]})},u=t(48),d=t(634),m=function(e){return e.filter.filterValue},h="filter_filterLabel__jh4CL",f=function(){var e=(0,u.I0)(),n=(0,u.v9)(m);return(0,c.jsxs)("label",{className:h,children:["Find contacts by name",(0,c.jsx)("input",{type:"text",value:n,onChange:function(n){e((0,d.Tv)(n.target.value))}})]})},p="contactsItem_contactsListItem__h-NOJ",b=function(e){var n=e.id,t=e.name,i=e.number,o=(0,r.Nt)(),l=(0,a.Z)(o,2),u=l[0],d=l[1].isLoading;return(0,c.jsxs)("li",{className:p,children:[t,": ",i,(0,c.jsx)("button",{type:"button",disabled:d,onClick:function(){u(n)},children:d?(0,s.U)("Deleting"):"Delete"})]})},x="contacts_contactsList__TzXx2",_=function(){var e=(0,r.wY)(),n=e.data,t=e.isSuccess,a=e.isLoading,i=e.error,o=(0,u.v9)(m);return(0,c.jsxs)("div",{className:x,children:[i&&(0,c.jsx)("p",{children:i.data}),a&&(0,c.jsx)(s.a,{}),t&&function(){var e=o.trim().toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(e)}))}().map((function(e){var n=e.id,t=e.name,a=e.phone;return(0,c.jsx)(b,{id:n,name:t,number:a},n)}))]})},j=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h1",{children:"Phonebook"}),(0,c.jsx)(l,{}),(0,c.jsx)("h2",{children:"Contacts"}),(0,c.jsx)(f,{}),(0,c.jsx)(_,{})]})}}}]);
//# sourceMappingURL=574.8704650e.chunk.js.map