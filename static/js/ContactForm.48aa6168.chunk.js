"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[635],{624:function(e,a,t){t.r(a),t.d(a,{default:function(){return d}});var n=t(152),r=t(649),s=t(762),o="contactForm_contactForm__f4X+T",c="contactForm_formLabel__PNGQI",i=t(184),d=function(){var e=(0,r.Tn)(),a=(0,n.Z)(e,2),t=a[0],d=a[1].isLoading,l=[];return(0,i.jsxs)("form",{className:o,onSubmit:function(e){e.preventDefault();var a=e.target,n=a.elements.name.value,r=a.elements.phone.value;a.reset();var s=n.toLowerCase(),o=l.find((function(e){return e.name.toLowerCase()===s}));if(o)return alert("".concat(n," is already in contacts, sorry"));t({name:n,phone:r})},children:[(0,i.jsxs)("label",{className:c,children:["Name",(0,i.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,i.jsxs)("label",{className:c,children:["Number",(0,i.jsx)("input",{type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,i.jsx)("button",{type:"submit",disabled:d,children:d?(0,s.U)("Adding..."):"Add contact"})]})}}}]);
//# sourceMappingURL=ContactForm.48aa6168.chunk.js.map