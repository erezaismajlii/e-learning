(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[22],{516:function(e,t,a){"use strict";var r=a(4),n=a(29),c=a.n(n),o="".concat("http://localhost:5000","/api/grammar"),i={getGrammar:function(e){return c.a.get("".concat(o,"/get-grammar/").concat(e))},getGrammarById:function(e){return c.a.get("".concat(o,"/get-grammar-by-id/").concat(e))},getGrammarByLevel:function(e,t){return c.a.get("".concat(o,"/get-grammar-by-level/").concat(e),{headers:{Authorization:t}})},getGrammarLevels:function(e){return c.a.get("".concat(o,"/get-grammar-levels"),{headers:{Authorization:e}})},getAllGrammar:function(e){return c.a.get("".concat(o,"/get-all-grammar"),{headers:{Authorization:e}})},postGrammar:function(e){return c.a.post("".concat(o,"/post-grammar"),Object(r.a)({},e),{header:{"content-type":"multipart/form-data"}})},putGrammar:function(e,t){return c.a.put("".concat(o,"/put-grammar/").concat(e),Object(r.a)({},t),{params:{id:e},header:{"content-type":"multipart/form-data"}})},deleteGrammar:function(e){return c.a.delete("".concat(o,"/delete-grammar/").concat(e))},searchGrammar:function(e){return c.a.get("".concat(o,"/search-grammar"),{params:{title:e}})}};t.a=i},543:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return l}));var r=a(16),n=a.n(r),c=a(27),o=a(53),i=a(516),s=function(e){return function(){var t=Object(c.a)(n.a.mark((function t(a){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.getGrammar(e);case 3:200===(r=t.sent).status?a({type:o.a.GET_GRAMMAR,payload:r.data}):a({type:o.a.SET_GRAMMAR_ERROR,payload:r.data.message}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:o.a.SET_GRAMMAR_ERROR,payload:t.t0.response.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},l=function(e){return function(){var t=Object(c.a)(n.a.mark((function t(a){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.deleteGrammar(e);case 3:200===(r=t.sent).status?a({type:o.a.DELETE_GRAMMAR,payload:e}):a({type:o.a.SET_GRAMMAR_ERROR,payload:r.data.message}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:o.a.SET_GRAMMAR_ERROR,payload:t.t0.response.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}},578:function(e,t,a){"use strict";t.a="data:image/gif;base64,R0lGODlhEAAQAKIAAMQAAP///9ZPT+aXl/TPz8sfH95vb+yvryH5BAUUAAEALAAAAAAQABAAAANCGLrc/pBAN8RsALRTimQFYCxDVhxNqQWq9YQCkbmPnAE0dJiXYtwfyA+XQTkIgswgkBQFmbel7wYIGmIbgcDYayQAADs="},579:function(e,t,a){"use strict";t.a="data:image/gif;base64,R0lGODlhEAAQAKIAAD6wPv///53XneHz4WnCab7kvlG4UXnIeSH5BAUUAAEALAAAAAAQABAAAAM+GLrMcy2qQohswpxxV96dkhFcWBhkGJxGoT6AIAmuCICYYcgnUUcCQOsQ6wwMQkCqEwQUQwPn0kiUqVbWSwIAOw=="},698:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return Q}));var r=a(11),n=a(4),c=a(3),o=a(0),i=a(716),s=a(693),l=a(496),u=a(575),d=a(62),b=(a(655),a(692)),j=a(691),m=a(718),h=a(501),p=a(492),g=a(19),O=a(543),f=a(22),A=a(477),x=a(28),w=a(6),v=a(578),y=a(579),C=a(2),R=["children","value","index"],G=Object(A.a)((function(){return{borderTopic:{borderStyle:"solid",borderColor:"initial",borderWidth:"1px",backgroundColor:"#ccff66",width:"700px",height:"auto"},grammarbox:{backgroundColor:"#CF9",padding:"10px 10px",border:"1px solid #666",marginBottom:"10px"},picture:{width:"50rem",height:"30rem",marginLeft:"15rem"}}}));function k(e){var t=e.children,a=e.value,r=e.index,o=Object(c.a)(e,R);return Object(C.jsx)("div",Object(n.a)(Object(n.a)({role:"tabpanel",hidden:a!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},o),{},{children:a===r&&Object(C.jsx)(u.a,{sx:{p:3},children:Object(C.jsx)(l.a,{children:t})})}))}function E(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}function Q(){Object(d.a)("Grammar");var e=G(),t=Object(o.useState)(0),a=Object(r.a)(t,2),c=a[0],A=a[1],R=Object(o.useState)(!1),Q=Object(r.a)(R,2),M=Q[0],S=Q[1],I=Object(o.useState)(!1),T=Object(r.a)(I,2),B=T[0],_=T[1],L=Object(f.h)().id,U=Object(g.c)((function(e){return e.grammarReducer})),D=U.grammar,F=U.questions,P=Object(g.b)();Object(o.useEffect)((function(){return P(Object(O.b)(L),[P])}));var Y=Object(o.useState)([]),q=Object(r.a)(Y,2),z=q[0],N=(q[1],function(e){var t=[];return e&&(t=e.split("\n")),t}),V=null;D&&(V=Object(x.a)(D.Image?D.Image:w.b.IMAGE_SRC,200,200,!0,!0));var W=Object(o.useState)([]),X=Object(r.a)(W,2),H=X[0],J=(X[1],function(e,t){if(z[e])if(z[e].includes(t))for(var a=0;a<z[e].length;a++)z[e][a]==t&&z[e].splice(a,1);else z[e].push(t);else{z[e]=[],z[e].push(t)}});return console.log(F),console.log(H),Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(h.a,{children:[Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(l.a,{variant:"h6",align:"center",children:D.Title}),Object(C.jsx)(l.a,{children:D.Content})]}),D.Video?Object(C.jsx)("p",{align:"center",children:Object(C.jsx)("iframe",{src:D.Video,width:"500",height:"300"})}):Object(C.jsx)("img",{className:e.picture,src:V,alt:"photo",align:"center"}),D.Audio&&Object(C.jsxs)("audio",{controls:!0,children:[Object(C.jsx)("source",{src:D.Audio,type:"audio/mpeg"}),"Your browser does not support the audio element."]}),Object(C.jsxs)(u.a,{sx:{width:"100%"},children:[Object(C.jsx)(u.a,{sx:{borderBottom:1,borderColor:"divider"},children:Object(C.jsxs)(i.a,{value:c,onChange:function(e,t){A(t)},"aria-label":"basic tabs example",indicatorColor:"primary",children:[Object(C.jsx)(s.a,Object(n.a)({label:"Script"},E(0))),Object(C.jsx)(s.a,Object(n.a)({label:"Grammar"},E(1))),Object(C.jsx)(s.a,Object(n.a)({label:"Quiz"},E(2)))]})}),Object(C.jsx)(k,{value:c,index:0,children:0!=N(D.Script).length&&N(D.Script).map((function(e){return Object(C.jsx)(l.a,{variant:"body2",align:"justify",children:e})}))}),Object(C.jsx)(k,{value:c,index:1,children:D.Items&&D.Items.map((function(t,a){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(l.a,{className:e.grammarbox,children:Object(C.jsxs)("p",{children:[Object(C.jsxs)("strong",{children:["Point ",a+1," :  "]}),t.Point]})}),Object(C.jsx)("div",{children:N(t.Examples).map((function(e){return Object(C.jsx)(l.a,{variant:"body2",align:"justify",children:e})}))})]})}))}),Object(C.jsxs)(k,{value:c,index:2,children:[Object(C.jsx)(l.a,{variant:"h6",children:"Answer the following questions about the interview."}),F&&F.map((function(e,t){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(l.a,{variant:"body2",children:[t+1,") ",e.Content,M&&1==H[t]&&Object(C.jsx)("span",{children:Object(C.jsx)("img",{src:y.a,alt:"Correct!"})}),M&&0==H[t]&&Object(C.jsx)("span",{children:Object(C.jsx)("img",{src:v.a,alt:"Correct!"})})]}),Object(C.jsx)(b.a,{children:e.Answers.map((function(e,a){return B&&1==e.isCorrect?Object(C.jsx)(j.a,{control:Object(C.jsx)(m.a,{color:"primary",id:"".concat(e,"-").concat(a),onClick:function(){return J(t,a)}}),label:Object(C.jsx)(l.a,{style:{color:"#008000"},children:Object(C.jsx)("strong",{children:e.content})})},a):Object(C.jsx)(j.a,{control:Object(C.jsx)(m.a,{color:"primary",id:"".concat(e,"-").concat(a),onClick:function(){return J(t,a)}}),label:e.content},a)}))})]})})),Object(C.jsx)(p.a,{color:"primary",onClick:function(){return function(){if(z.length>0){console.log(z);for(var e=0;e<z.length;e++)z[e]?(console.log(e),console.log(z[e]),z[e].length>0?z[e].length>1?H[e]=!1:(1==F[e].Answers[z[e][0]].isCorrect&&(H[e]=!0),0==F[e].Answers[z[e][0]].isCorrect&&(H[e]=!1)):window.confirm("Ch\u1ecdn \u0111\xe1p \xe1n cho t\u1ea5t c\u1ea3 c\xe2u h\u1ecfi.")&&window.close()):window.confirm("Ch\u1ecdn \u0111\xe1p \xe1n cho t\u1ea5t c\u1ea3 c\xe2u h\u1ecfi.")&&window.close()}else window.confirm("Ch\u1ecdn \u0111\xe1p \xe1n cho t\u1ea5t c\u1ea3 c\xe2u h\u1ecfi.")&&window.close();S(!0),_(!0)}()},children:"Check Answers"}),Object(C.jsx)(p.a,{color:"primary",onClick:function(){window.confirm("Do you want reload page again?")&&window.location.reload()},children:"Reset Quiz"}),Object(C.jsx)(p.a,{color:"primary",onClick:function(){_(!0)},children:"Show Answers"})]})]})]})})}}}]);
//# sourceMappingURL=22.44af22e7.chunk.js.map