(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[11],{517:function(e,t,n){"use strict";var c=n(3),r=n(11),a=n(4),o=n(280),i=n(449),s=n(499),l=n(460),d=n(0),u=n(488),b=Object(u.a)((function(){return{root:{backgroundColor:"var(--bg-color-accent)",color:"var(--text-color)",borderRadius:"var(--border-radius)","& .Mui-error .MuiSelect-root":{borderColor:"var(--error-color) !important"}},label:{color:"var(--label-color)",fontSize:"1.5rem"},labelFocus:{color:"var(--secondary-color) !important"},selectRoot:{color:"var(--text-color)",fontSize:"1.6rem",borderRadius:"var(--border-radius) !important",border:"solid 1px var(--border-color)",backgroundColor:"var(--bg-color-accent) !important"},selectIcon:{color:"var(--label-color)"},selectMenu:{backgroundColor:"var(--bg-color-accent)",maxHeight:"25rem","& .MuiMenuItem-root":{fontSize:"1.5rem",padding:"1rem 1.6rem","&:hover, &:active, &.Mui-selected":{backgroundColor:"var(--hover-color)"}}}}})),j=n(1),h=["label","options","className","error","resetFlag","index","onChange"];function p(e){var t,n=e.label,u=e.options,p=e.className,g=e.error,m=e.resetFlag,f=e.index,v=e.onChange,O=Object(a.a)(e,h),x=Object(d.useState)(null===(t=u[f])||void 0===t?void 0:t.value),w=Object(r.a)(x,2),C=w[0],N=w[1],y=b();return Object(d.useEffect)((function(){var e;m&&N(null===(e=u[0])||void 0===e?void 0:e.value)}),[m]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(o.a,{className:"".concat(y.root," ").concat(p),variant:"filled",children:[Object(j.jsx)(i.a,{classes:{root:y.label,focused:y.labelFocus},id:n,children:n}),Object(j.jsx)(l.a,Object(c.a)(Object(c.a)({classes:{root:y.selectRoot,icon:y.selectIcon},MenuProps:{classes:{paper:y.selectMenu}},disableUnderline:!0,error:g,labelId:n,label:n,value:C,onChange:function(e){N(e.target.value),v(e)}},O),{},{children:u&&u.map((function(e,t){return Object(j.jsx)(s.a,{value:e.value,children:e.label},t)}))}))]})})}p.defaultProps={className:"",label:"Label",options:[],error:!1,resetFlag:0,onChange:function(){}};t.a=p},519:function(e,t,n){"use strict";var c=n(3),r=n(4),a=n(11),o=n(495),i=n(0),s=n(1),l=["children"];t.a=function(e){var t=Object(i.useState)(!1),n=Object(a.a)(t,2),d=n[0],u=n[1],b=Object(i.useState)(-1),j=Object(a.a)(b,2),h=j[0],p=j[1],g=e.children,m=Object(r.a)(e,l);return Object(i.useEffect)((function(){var e=!0;return document.body.offsetWidth>576?e&&p(!0):e&&p(!1),function(){return e=!1}}),[]),Object(s.jsx)(s.Fragment,{children:-1!==h&&Object(s.jsx)(s.Fragment,{children:h?Object(s.jsx)(o.a,Object(c.a)(Object(c.a)({},m),{},{children:g})):Object(s.jsx)(o.a,Object(c.a)(Object(c.a)({},m),{},{open:d,onClick:function(){return u(!d)},children:g}))})})}},521:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i}));var c=n.p+"static/media/correct.369c0cd9.mp3",r=n(529),a=function(e){new Audio(e).play()},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r=new SpeechSynthesisUtterance;window.speechSynthesis.cancel(),r.lang="en",r.text=e,r.volume=c,r.voice=t,r.rate=n,window.speechSynthesis.speak(r)},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2?arguments[2]:void 0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1e3,l=a>=0&&a<=1?a:1,d=i>=0&&i<=10?i:1,u=new Audio;u.volume=l,u.playbackRate=d,u.src=t?c:r.a,u.play(),setTimeout((function(){o(e,n,d,l)}),s)}},529:function(e,t,n){"use strict";t.a=n.p+"static/media/incorrect.fdd769b0.mp3"},530:function(e,t,n){"use strict";var c=n(11),r=n(0),a=n(19),o=[];t.a=function(){var e=Object(r.useState)(o),t=Object(c.a)(e,2),n=t[0],i=t[1],s=Object(a.c)((function(e){return e.voiceReducer})),l=s.speed,d=s.voiceURI,u=s.volume,b=n.find((function(e){return e.voiceURI===d}));return Object(r.useEffect)((function(){if(!(o.length>0)){var e=setInterval((function(){var t=window.speechSynthesis.getVoices();t.length>0&&(o=t.filter((function(e){return-1!==e.lang.indexOf("en")})),i(t.filter((function(e){return-1!==e.lang.indexOf("en")}))),clearInterval(e))}),50);return function(){e&&clearInterval(e)}}}),[]),{speed:l,volume:u,voice:b}}},531:function(e,t,n){"use strict";var c=n(11),r=n(0),a=n(488),o=Object(a.a)((function(){return{root:{border:"solid 1px var(--secondary-color)",padding:"0.4rem 0.8rem",width:"max-content",borderRadius:"25px",transition:"all 0.25s","&.active":{backgroundColor:"var(--secondary-color)"},"&:hover, &:active":{filter:"brightness(0.85)"}},icon:{borderRadius:"50%",width:"2.8rem",height:"2.8rem",marginRight:"0.5rem"},text:{color:"var(--text-color)",fontWeight:500,fontSize:"1.4rem",paddingLeft:"0.4rem",paddingRight:"0.8rem"}}})),i=n(1);function s(e){var t=e.title,n=e.iconSrc,a=e.id,s=e.onChange,l=o(),d=Object(r.useState)(!1),u=Object(c.a)(d,2),b=u[0],j=u[1];return Object(r.useEffect)((function(){j(!1)}),[]),Object(i.jsxs)("div",{className:"".concat(l.root," flex-center--ver cur-pointer ").concat(b?"active":""),onClick:function(){s(a,!b),j(!b)},children:[n&&Object(i.jsx)("img",{className:l.icon,src:n,alt:"icon"}),Object(i.jsx)("span",{className:l.text,children:t})]})}s.defaultProps={id:"",iconSrc:null,title:"Title",onChange:function(){},resetFlag:0};t.a=s},533:function(e,t,n){"use strict";var c=n(3),r=n(28),a=n.n(r),o="/api/word",i={getWord:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return a.a.get("".concat(o,"/get-word-details"),{params:{id:e}})},getWordDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return a.a.get("".concat(o,"/get-word-by-word"),{params:{word:e}})},getWordByTopic:function(e){return a.a.get("".concat(o,"/get-word-by-topic/").concat(e))},searchWord:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return a.a.get("".concat(o,"/search-word"),{params:{word:e,isCompact:t}})},getWordTopics:function(){return a.a.get("".concat(o,"/get-word-topics"))},getAllWord:function(){return a.a.get("".concat(o,"/get-all-word"))},postWord:function(e){return a.a.post("".concat(o,"/post-word"),Object(c.a)({},e),{header:{"content-type":"multipart/form-data"}})},putWord:function(e,t){return a.a.put("".concat(o,"/put-word/").concat(e),Object(c.a)({},t),{params:{id:e},header:{"content-type":"multipart/form-data"}})},deleteWord:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return a.a.delete("".concat(o,"/delete-word"),{params:{word:e,type:t}})},checkWordExist:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return a.a.get("".concat(o,"/exist-word"),{params:{word:e,type:t}})},getWordList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,n=arguments.length>2?arguments[2]:void 0,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"rand";return a.a.get("".concat(o,"/get-word-pack"),{params:{page:e,perPage:t,packInfo:JSON.stringify(n),sortType:c}})},getWordTopicGallery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,n=arguments.length>2?arguments[2]:void 0;return a.a.get("".concat(o,"/get-word-topic-gallery"),{params:{page:e,perPage:t,packInfo:JSON.stringify(n)}})},getWordTopic:function(e){return a.a.get("".concat(o,"/get-word-topic-slide"),{params:{packInfo:JSON.stringify(e)}})}};t.a=i},535:function(e,t,n){"use strict";var c=n(11),r=n(503),a=n(496),o=n(522),i=n(552),s=n.n(i),l=n(541),d=n.n(l),u=n(531),b=n(527),j=n(0),h=n(488),p=Object(h.a)((function(){return{button:{backgroundColor:"var(--bg-color-accent) !important",boxShadow:"none !important",border:"solid 1px var(--border-color)",color:"var(--label-color)",textTransform:"capitalize",minHeight:"5.6rem","&:hover, &:active":{opacity:.85}},tagsWrap:{paddingTop:"0 !important",paddingBottom:"0 !important"},tags:{display:"flex",flexWrap:"wrap",padding:"2.4rem 1.2rem",backgroundColor:"var(--bg-color-accent)",borderRadius:"var(--sm-border-radius)","& > *":{margin:"0.8rem"}}}})),g=n(1);function m(e){var t=e.onChange,n=e.buttonTitle,i=e.topicList,l=e.buttonWrapper,b=e.tagsWrapper,h=p(),m=Object(j.useState)(!1),f=Object(c.a)(m,2),v=f[0],O=f[1],x=Object(j.useRef)([]),w=l||o.a,C=b||o.a,N=function(e,n){n?x.current.push(e):x.current=x.current.filter((function(t){return t!==e})),t(x.current)};return Object(j.useEffect)((function(){x.current=[]}),[]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(w,{children:Object(g.jsx)(r.a,{color:"secondary",variant:"contained",endIcon:v?Object(g.jsx)(s.a,{}):Object(g.jsx)(d.a,{}),className:"".concat(h.button," w-100 h-100"),onClick:function(){return O(!v)},children:n})}),Object(g.jsx)(C,{className:v?"":h.tagsWrap,children:Object(g.jsx)(a.a,{in:v,children:Object(g.jsx)("div",{className:h.tags,children:i.map((function(e,t){return Object(g.jsx)(u.a,{iconSrc:e.icon,title:e.title,id:e.key,onChange:N},t)}))})})})]})}m.defaultProps={onChange:function(){},resetFlag:0,buttonTitle:"Ch\u1ecdn ch\u1ee7 \u0111\u1ec1",topicList:b.a};t.a=m},543:function(e,t,n){"use strict";var c=n(544),r=n.n(c),a=n(521),o=n(530),i=(n(0),n(1));function s(e){var t=e.className,n=e.type,c=e.text,s=e.audioSrc,l=e.isWrap,d=Object(o.a)(),u=d.voice,b=d.speed,j=d.volume,h=function(){n?Object(a.b)(c,u,b,j):Object(a.a)(s)};return Object(i.jsx)(i.Fragment,{children:l?Object(i.jsx)("div",{onClick:h,children:e.children}):Object(i.jsx)(r.a,{className:"english-speaker ".concat(t),onClick:h})})}s.defaultProps={audioSrc:"",className:"",text:"",type:!0,isWrap:!1},t.a=s},549:function(e,t,n){"use strict";var c=n(451),r=n(183),a=n.n(r),o=n(592),i=n(5),s=n(527),l=n(29),d=(n(0),n(531)),u=n(10),b=n(488),j=Object(b.a)((function(e){var t;return{root:{backgroundColor:"rgba(0,0,0,0.5)"},paper:(t={maxWidth:350,width:"100%",backgroundColor:"var(--bg-color-sec)",padding:"2.4rem 3.2rem"},Object(u.a)(t,e.breakpoints.up("sm"),{maxWidth:480}),Object(u.a)(t,e.breakpoints.up("md"),{maxWidth:678}),Object(u.a)(t,"maxHeight","85vh"),t),title:{color:"var(--title-color)",textTransform:"capitalize",fontSize:"2.2rem",wordSpacing:1.5,fontWeight:500},content:{display:"grid",gridTemplateColumns:"1fr",gap:"0.8rem","& *":{fontSize:"1.6rem",lineHeight:1.5,letterSpacing:"0.5px",color:"var(--text-color)"}},closeIcon:{fontSize:"3.2rem",color:"var(--title-color)",transition:"all 0.5s","&:hover, &:active":{transform:"rotate(360deg)"}},label:{color:"var(--label-color)",textDecoration:"underline",fontSize:"1.7rem"},picture:{width:"5.6rem",height:"5.6rem"},word:{fontSize:"2rem",color:"var(--secondary-color)",fontWeight:"bold"},type:{fontWeight:500},mean:{color:"var(--text-color)"},phonetic:{fontSize:"1.7rem",color:"var(--phonetic-color)"},topics:{margin:"0 -0.4rem","& > *":{margin:"0.4rem"}}}})),h=n(1);function p(e){var t=[];return e.forEach((function(e){t.push(s.a.find((function(t){return t.key===e})))})),t}function g(e){var t,n=e.picture,r=e.word,s=e.mean,u=e.phonetic,b=e.level,g=e.type,m=e.examples,f=e.specialty,v=e.synonyms,O=e.antonyms,x=e.note,w=e.topics,C=e.open,N=e.onClose,y=e.loading,A=j();return Object(h.jsxs)(c.a,{classes:{root:"".concat(A.root," flex-center"),paper:"".concat(A.paper," container")},open:C,onClose:N,anchorReference:"none",children:[Object(h.jsxs)("div",{className:"flex-center-between",children:[Object(h.jsxs)("h2",{className:A.title,children:["Chi ti\u1ebft t\u1eeb ",Object(h.jsx)("span",{className:A.wordTitle,children:'"'.concat(r,'"')})]}),Object(h.jsx)(a.a,{className:"".concat(A.closeIcon," cur-pointer"),onClick:N})]}),Object(h.jsx)("div",{className:"english-break"}),y?Object(h.jsx)(o.a,{style:{width:"100%",height:"35vh"},variant:"rect",animation:"wave"}):Object(h.jsxs)("div",{className:A.content,children:[Object(h.jsxs)("div",{className:"flex-center--ver my-4",children:[n&&""!==n&&Object(h.jsx)("img",{src:Object(l.a)(n,56,56,!0),alt:"Photo",className:"".concat(A.picture," mr-8")}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{className:A.word,children:[r,"\xa0",Boolean(g)&&Object(h.jsxs)("span",{className:A.type,children:["( ",g," )"]}),Object(h.jsx)("span",{className:A.mean,children:" - ".concat(s)})]}),Boolean(u)&&Object(h.jsxs)("p",{className:"".concat(A.phonetic," mt-4"),children:["/ ",u," /"]})]})]}),"0"!==b&&Object(h.jsxs)("p",{className:A.level,children:[Object(h.jsx)("b",{className:A.label,children:"C\u1ea5p \u0111\u1ed9:"}),"\xa0\xa0",b]}),m&&m.length>0&&Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{className:A.label,children:"C\xe2u v\xed d\u1ee5:"}),m.map((function(e,t){return Object(h.jsxs)("p",{children:[t+1,".\xa0",e]},t)}))]}),f&&"0"!==f&&Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{className:A.label,children:"Thu\u1ed9c chuy\xean ng\xe0nh:"}),"\xa0\xa0",(null===(t=i.l.find((function(e){return e.value===f})))||void 0===t?void 0:t.label)||"Kh\xf4ng"]}),w&&w.length>0&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("b",{className:A.label,children:"Ch\u1ee7 \u0111\u1ec1:"}),Object(h.jsx)("div",{className:"".concat(A.topics," d-flex flex-wrap"),children:p(w).map((function(e,t){return Object(h.jsx)(d.a,{title:e.title,iconSrc:e.icon},t)}))})]}),v&&v.length>0&&Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{className:A.label,children:"C\xe1c t\u1eeb \u0111\u1ed3ng ngh\u0129a:"}),"\xa0\xa0",v.join(", ")]}),O&&O.length>0&&Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{className:A.label,children:"C\xe1c t\u1eeb tr\xe1i ngh\u0129a:"}),"\xa0\xa0",O.join(", ")]}),x&&""!==x&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("b",{className:A.label,children:"Ghi ch\xfa:"}),Object(h.jsx)("p",{children:x.split("\n").map((function(e,t){return Object(h.jsxs)("span",{children:[e," ",Object(h.jsx)("br",{})]},t)}))})]})]})]})}g.defaultProps={examples:[],level:"",loading:!0,mean:"",note:"",onClose:function(){},open:!1,phonetic:"",picture:"",specialty:"",synonyms:[],topics:[],type:"",word:""};t.a=g},555:function(e,t,n){"use strict";var c=n(28),r=n.n(c),a="/api/highscore",o={putUpdateHighscore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return r.a.put("".concat(a,"/update"),{name:e,score:t})},postScore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return r.a.post("".concat(a,"/post"),{name:e,coin:t})},getLeaderboard:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return r.a.get("".concat(a,"/leaderboard"),{params:{name:e}})}};t.a=o},556:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c={TOP_COIN:"top-coin",CORRECT_WORD:"correct-word",WORD_MATCH:"word-match",FAST_GAME:"fast-game"}},571:function(e,t,n){"use strict";var c=n(28),r=n.n(c),a="/api/games",o={getWordPackCWG:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"-1",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-1",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-1",c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:50;return r.a.get("".concat(a,"/correct-word/pack"),{params:{type:e,level:t,specialty:n,topics:JSON.stringify(c),nQuestion:o}})},getWordPackWordMatch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"-1",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-1",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-1",c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:50;return r.a.get("".concat(a,"/word-match/pack"),{params:{type:e,level:t,specialty:n,topics:JSON.stringify(c),nQuestion:o}})},getWordPackFG:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return r.a.get("".concat(a,"/fast-game/pack"),{params:{topic:e}})}};t.a=o},572:function(e,t,n){"use strict";t.a=n.p+"static/media/win.7b50de9f.mp3"},576:function(e,t,n){"use strict";var c=n(3),r=n(12),a=n(503),o=n(500),i=n(502),s=n(501),l=n(564),d=n(522),u=n(517),b=n(527),j=n(0),h=n(535),p=n(488),g=n(176),m=Object(p.a)((function(e){return Object(c.a)({},Object(g.a)(e))})),f=n(5),v=n(1),O="wordPackForm";function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[{value:"-1",label:"T\u1ea5t c\u1ea3"}].concat(Object(r.a)(e))}function w(e){var t=e.onChoose,n=e.onCancel,r=e.open,p=e.topicMultiples,g=e.title,w=e.okBtnText,C=e.cancelBtnText,N=e.okBtnProps,y=e.cancelBtnProps,A=m(),S=Object(j.useRef)([]);return Object(v.jsxs)(o.a,{classes:{paper:A.dialogPaper},maxWidth:"md",fullWidth:!0,disableBackdropClick:!0,open:r,children:[Object(v.jsx)(l.a,{classes:{root:A.title},children:g}),Object(v.jsx)(s.a,{dividers:!0,classes:{dividers:A.breakLine},children:Object(v.jsx)("form",{id:O,onSubmit:function(e){var n,c,r,a;e.preventDefault();var o=e.target,i=(null===(n=o.type)||void 0===n?void 0:n.value)||"-1",s=(null===(c=o.specialty)||void 0===c?void 0:c.value)||"-1",l=(null===(r=o.topic)||void 0===r?void 0:r.value)||"-1",d=(null===(a=o.level)||void 0===a?void 0:a.value)||"-1";t({type:i,specialty:s,level:d,topics:p?S.current:"-1"===l?[]:[l]})},children:Object(v.jsxs)(d.a,{container:!0,spacing:3,children:[Object(v.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(u.a,{label:"Lo\u1ea1i t\u1eeb",className:"w-100",options:x(f.m),inputProps:{name:"type"},index:0})}),Object(v.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(u.a,{label:"C\u1ea5p \u0111\u1ed9",className:"w-100",options:x(f.k),inputProps:{name:"level"},index:0})}),Object(v.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(u.a,{label:"Chuy\xean ng\xe0nh",className:"w-100",options:x(f.l),inputProps:{name:"specialty"},index:0})}),p?Object(v.jsx)(h.a,{onChange:function(e){return S.current=e},buttonWrapper:function(e){return Object(v.jsx)(d.a,Object(c.a)(Object(c.a)({},e),{},{item:!0,xs:12,md:6}))},tagsWrapper:function(e){return Object(v.jsx)(d.a,Object(c.a)(Object(c.a)({},e),{},{item:!0,xs:12}))}}):Object(v.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(u.a,{label:"Ch\u1ee7 \u0111\u1ec1",className:"w-100",options:x(b.b),inputProps:{name:"topic"}})}),Boolean(e.children)&&Object(v.jsx)(d.a,{item:!0,xs:12,md:6,children:e.children})]})})}),Object(v.jsxs)(i.a,{children:[Object(v.jsx)(a.a,Object(c.a)(Object(c.a)({onClick:n,className:"_btn _btn-stand",variant:"outlined"},y),{},{children:C})),Object(v.jsx)(a.a,Object(c.a)(Object(c.a)({autoFocus:!0,disableFocusRipple:!0,component:"button",type:"submit",form:O,className:"_btn _btn-primary",variant:"contained"},N),{},{children:w}))]})]})}w.defaultProps={onChoose:function(){},open:!0,topicMultiples:!0,title:"G\xf3i t\u1eeb v\u1ef1ng",okBtnText:"Ok",cancelBtnText:"\u0110\xf3ng",okBtnProps:{},cancelBtnProps:{}};t.a=w},580:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var c=n(10),r=n(3),a=n(488),o=n(176);t.b=Object(a.a)((function(e){return Object(r.a)(Object(r.a)({},Object(o.d)(e)),{},{mainContent:{display:"grid",gridTemplateColumns:"1fr",gridTemplateRows:"3fr 7fr"},question:{fontSize:"2.4rem",color:"var(--text-color)",fontWeight:"bold"},result:{fontSize:"1.5rem"},answers:Object(c.a)({display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr 1fr",gap:"1.2rem",padding:"2.4rem 0"},e.breakpoints.up("md"),{width:"100%",margin:"0 auto",maxWidth:"50%",minWidth:"40rem",gap:"2.4rem"}),answerItem:{backgroundColor:"#00ffff",borderRadius:"10px",color:"var(--text-color)",fontSize:"2rem",cursor:"pointer",transition:"all 0.25s","&:hover, &:active":{backgroundColor:"#ccffff"},"& .phonetic":{opacity:.8,fontSize:"1.6rem"},"&.right":{border:"solid 5px var(--right-color)"},"&.wrong":{border:"solid 5px var(--error-color)"}}})}));var i=Object(a.a)((function(){return{root:{minHeight:"65vh"},img:{height:"8rem",marginBottom:"2.4rem"},result:{color:"var(--label-color)",fontSize:"1.6rem","& b":{color:"var(--text-color)",fontSize:"2.4rem",padding:"0 0.4rem"}},icon:{margin:"0 0.6rem"}}}))},613:function(e,t,n){"use strict";t.a="data:image/png;base64,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"},618:function(e,t,n){"use strict";var c=n(16),r=n.n(c),a=n(27),o=n(11),i=n(503),s=n(573),l=n.n(s),d=n(545),u=n.n(d),b=n(611),j=n.n(b),h=n(59),p=n(555),g=n(572),m=n(5),f=(n(556),n(521)),v=n(0),O=n(19),x=n(20),w=(n(107),n(580)),C=(n(609),n(1));function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,c=e*m.a.CORRECT_GAME_PER_QUES-t*m.a.CORRECT_GAME_PER_QUES+n;return c<0?0:c>m.d.USER_COIN?m.d.USER_COIN:c}function y(e){var t=e.nRight,n=e.nWrong,c=e.onReplay,s=e.nameGame,d=Object(w.a)(),b=Object(x.g)(),y=Object(v.useState)(null),A=Object(o.a)(y,2),S=A[0],k=A[1],W=Object(O.c)((function(e){return e.authReducer})),R=W.isAuth;W.coin;Object(v.useEffect)((function(){Object(f.a)(g.a)}),[]),Object(v.useEffect)((function(){R&&Object(a.a)(r.a.mark((function e(){var c,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.getUserInfo();case 3:return c=e.sent,a=N(t,n,c.data.user.coin),console.log(c.data.user.coin),k(a),e.next=9,h.a.putUpdateUserCoin(a);case 9:e.sent,p.a.postScore(s,t),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(0);case 15:case"end":return e.stop()}}),e,null,[[0,13]])})))()}),[]);return Object(C.jsxs)("div",{className:"".concat(d.root," flex-center-col"),children:[Object(C.jsx)("img",{className:d.img,src:"data:image/png;base64,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",alt:"Cup Photo"}),Object(C.jsxs)("div",{className:"".concat(d.result," flex-center--ver"),children:[Object(C.jsx)("b",{children:t}),"\xa0\u0110\xfang",Object(C.jsx)(u.a,{className:"".concat(d.icon," right")}),"\xa0-\xa0",Object(C.jsx)("b",{children:n}),"\xa0Sai",Object(C.jsx)(l.a,{className:"".concat(d.icon," wrong")})]}),R&&S&&Object(C.jsxs)("div",{className:"".concat(d.result," flex-center--ver mt-4"),children:[Object(C.jsx)(j.a,{className:d.icon,style:{color:"#C3AD1A",marginLeft:0}}),"S\u1ed1 coin hi\u1ec7n t\u1ea1i:\xa0",Object(C.jsx)("b",{children:S})]}),Object(C.jsxs)("div",{className:"mt-10",children:[Object(C.jsx)(i.a,{className:"_btn _btn-outlined-stand mr-5",variant:"outlined",onClick:function(){b.push(m.g.GAMES_HOME)},children:"Quay v\u1ec1"}),Object(C.jsx)(i.a,{className:"_btn _btn-primary",onClick:c,children:"Ch\u01a1i l\u1ea1i"})]})]})}y.defaultProps={nRight:0,nWrong:0,nameGame:"",onReplay:function(){}};t.a=y},748:function(e,t,n){"use strict";n.r(t);var c=n(16),r=n.n(c),a=n(27),o=n(11),i=n(575),s=n.n(i),l=n(612),d=n.n(l),u=n(571),b=n(88),j=n(145),h=n(576),p=n(0),g=n(19),m=n(20),f=n(48),v=n(3),O=n(495),x=n(573),w=n.n(x),C=n(545),N=n.n(C),y=n(574),A=n.n(y),S=n(529),k=n(613),W=n(519),R=n(5),E=n(521),P=n(618),T=n(12),F=n(488),I=n(715),z=n.n(I),H=n(533),B=n(543),U=n(549),M=n(10),G=Object(F.a)((function(e){return{root:{display:"grid",gridTemplateColumns:"1fr",gridTemplateRows:"1fr 1fr 1fr",gap:"0.8rem"},helpIcon:{fontSize:"3.6rem",color:"var(--title-color)"},speaker:{fontSize:"3.6rem !important"},mean:{fontSize:"2.4rem",fontWeight:500,color:"var(--text-color)"},answer:{fontSize:"1.6rem"},split:Object(M.a)({padding:"0.8rem",margin:"0 -0.6rem",flexWrap:"wrap",alignContent:"center","& > *":{margin:"0.6rem"}},e.breakpoints.up("md"),{maxWidth:767,margin:"0 auto"}),char:{color:"var(--text-color)",fontSize:"1.8rem",fontWeight:500,width:"4.2rem",height:"4.2rem",lineHeight:"4.2rem",textAlign:"center",backgroundColor:"#00ffff",cursor:"pointer",boxShadow:"1px 1px 4px 0px rgba(0,0,0,0.2)",borderRadius:4,transition:"all 0.25s","&:hover, &:active":{backgroundColor:"#ccffff"},"&.wrong":{backgroundColor:"var(--error-color)"},"&.right":{backgroundColor:"var(--right-color)"}},"@global @keyframes aniSlide":{"0%":{transform:"none",opacity:0},"50%":{opacity:.3},"100%":{transform:"translateY(-8rem)",opacity:0,visibility:"hidden"}}}})),L=n(1);function V(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[],n=1;n&&!(n>=50);){if((t=e.split("").sort((function(){return Math.random()-.5}))).join("")!==e){n=0;break}n++}return t}function q(e){var t,n=e.word,c=e.mean,i=e.onCorrect,s=e.onWrong,l=e.resetFlag,d=Object(p.useRef)(V(n.toLowerCase())),u=Object(p.useState)([]),b=Object(o.a)(u,2),j=b[0],h=b[1],g=Object(p.useState)(!1),m=Object(o.a)(g,2),f=m[0],x=m[1],w=Object(p.useState)(!1),C=Object(o.a)(w,2),N=C[0],y=C[1],A=Object(p.useState)({show:!1,loading:!1,data:null}),S=Object(o.a)(A,2),k=S[0],W=S[1],R=G(),E=Object(F.a)({slideAni:{position:"relative","&:before":{position:"absolute",top:0,content:'"'.concat(null===(t=j[j.length-1])||void 0===t?void 0:t.ch,'"'),width:"100%",height:"100%",backgroundColor:"var(--bg-color-accent)",animationName:"aniSlide",animationDuration:"0.35s",animationFillMode:"forwards"}}})();return Object(p.useEffect)((function(){var e=!0;if(N)return j.map((function(e){return e.ch})).join("").toLowerCase()===n.toLowerCase()?(e&&x(!0),i()):(e&&x(!1),s()),function(){e=!1}}),[N]),Object(p.useEffect)((function(){var e=!0;if(-1!==l)return e&&(y(!1),x(!1),h([]),d.current=V(n.toLowerCase())),function(){return e=!1}}),[l]),Object(p.useEffect)((function(){var e=!0;return k.show&&k.loading&&Object(a.a)(r.a.mark((function t(){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,H.a.getWordDetails(n);case 3:200===(c=t.sent).status&&e&&W({show:!0,loading:!1,data:Object(v.a)({},c.data)}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e&&W({show:!1,loading:!1,data:null});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))(),function(){return e=!1}}),[k]),Object(L.jsxs)("div",{className:R.root,children:[Object(L.jsx)("div",{id:"userSplitId",className:"".concat(R.split," flex-center"),children:j.map((function(e,t){var c=e.ch===n.toLowerCase()[t]?"right":"wrong";return Object(L.jsx)("div",{className:"".concat(R.char," ").concat(N?c:""),onClick:function(){return function(e){N&&y(!1);var t=j.slice(0,e);h(t)}(t)},children:e.ch},t)}))}),Object(L.jsxs)("div",{children:[Object(L.jsxs)("div",{className:"flex-center-between my-4",children:[Object(L.jsx)(O.a,{title:"Xem \u0111\xe1p \xe1n",children:Object(L.jsx)(z.a,{className:"".concat(R.helpIcon," cur-pointer"),onClick:function(){return W({loading:!0,data:null,show:!0})}})}),Object(L.jsx)("p",{className:"".concat(R.mean," t-center px-4"),children:c}),Object(L.jsx)(B.a,{className:R.speaker,text:n})]}),N&&Object(L.jsx)("p",{className:"".concat(R.answer," t-center ").concat(f?"right":"wrong"),children:f?"Ch\xednh x\xe1c":"Sai r\u1ed3i"})]}),Object(L.jsx)("div",{className:"".concat(R.split," flex-center"),children:d.current.map((function(e,t){var c=-1!==j.findIndex((function(e){return t===e.index}));return Object(L.jsx)("div",{className:"".concat(R.char," ").concat(c?" ".concat(E.slideAni," disabled"):""),onClick:function(){return function(e){var t=[].concat(Object(T.a)(j),[{index:e,ch:d.current[e]}]);h(t),t.length===n.length&&y(!0)}(t)},children:c?"":e},t)}))}),Object(L.jsx)(U.a,Object(v.a)({open:k.show,loading:k.loading,onClose:function(){return W({loading:!1,data:null,show:!1})}},k.data))]})}q.defaultProps={mean:"",word:"",onCorrect:function(){},onWrong:function(){},resetFlag:-1};var Q=q,X=n(176),Y=Object(F.a)((function(e){return Object(v.a)({},Object(X.d)(e))}));function D(e){var t=e.list,n=Object(g.c)((function(e){return e.voiceReducer})),c=n.voice,r=n.speed,a=n.volume,i=Y(),s=t.length,l=Object(p.useState)({current:0,nRight:0,nWrong:0,resetFlag:-1}),d=Object(o.a)(l,2),u=d[0],b=d[1],j=Object(p.useState)(!1),h=Object(o.a)(j,2),m=h[0],f=h[1],x=Object(p.useState)(!1),C=Object(o.a)(x,2),y=C[0],T=C[1],F=u.current,I=u.nRight,z=u.nWrong,H=u.resetFlag,B=function(){T(!0)};return console.log(F),console.log(s),Object(L.jsx)("div",{className:"flex-center-col h-100vh",children:Object(L.jsxs)("div",{className:"".concat(i.root," container english-game-box position-rel"),children:[Object(L.jsxs)("div",{className:"english-game-title",children:[Object(L.jsx)("img",{src:k.a,alt:"game photo"}),Object(L.jsxs)("h1",{className:"flex-center--ver",children:[Object(L.jsx)("span",{children:"Gh\xe9p t\u1eeb"}),Object(L.jsx)(W.a,{title:"Ch\u1ecdn c\xe1c k\xfd t\u1ef1 \u0111\u1ec3 t\u1ea1o th\xe0nh m\u1ed9t t\u1eeb c\xf3 ngh\u0129a \u0111\xfang v\u1edbi t\u1eeb ti\u1ebfng Vi\u1ec7t \u0111\u01b0\u1ee3c cho",children:Object(L.jsx)(A.a,{className:"ml-5"})})]})]}),y?Object(L.jsx)(P.a,{onReplay:function(){T(!1),b({current:0,nRight:0,nWrong:0,resetFlag:-1})},nRight:I,nWrong:z,nameGame:"word-match"}):Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)("div",{className:"".concat(i.summary," flex-center-between"),children:[Object(L.jsxs)("div",{className:"flex-center--ver",children:["C\xe2u\xa0",Object(L.jsx)("b",{children:F+1}),"\xa0/\xa0",Object(L.jsx)("b",{children:s})]}),Object(L.jsxs)("div",{className:"flex-center--ver",children:[Object(L.jsx)("b",{children:I}),"\xa0\u0110\xfang",Object(L.jsx)(N.a,{className:"".concat(i.summaryIcon," right")}),"\xa0-\xa0",Object(L.jsx)("b",{children:z}),"\xa0Sai",Object(L.jsx)(w.a,{className:"".concat(i.summaryIcon," wrong")})]})]}),t&&t.length>0&&F+1<=s?Object(L.jsx)(Q,{mean:t[F].mean,word:t[F].word,onCorrect:function(){Object(E.c)(t[F].word,!0,c,a,r),f(!0),setTimeout((function(){F+1>=s?(b({nRight:I+1,nWrong:z}),B()):(f(!1),b({current:F+1,nRight:I+1,resetFlag:F,nWrong:z}))}),R.i.DELAY_ANSWER)},onWrong:function(){Object(E.a)(S.a)},resetFlag:H}):Object(L.jsx)("h3",{className:"flex-center notfound-title",children:"G\xf3i t\u1eeb v\u1ef1ng hi\u1ec7n t\u1ea1i kh\xf4ng kh\u1ea3 d\u1ee5ng, vui l\xf2ng th\u1eed l\u1ea1i sau. C\u1ea3m \u01a1n !"}),F<s&&Object(L.jsx)(O.a,{title:F<s-1?"Qua c\xe2u k\u1ebf":"K\u1ebft th\xfac",children:Object(L.jsx)("div",{className:"nav-arrow next ".concat(m?"disabled":""),onClick:function(){Object(E.a)(S.a),F+1>=s?(b(Object(v.a)(Object(v.a)({},u),{},{nWrong:z+1})),B()):(b(Object(v.a)(Object(v.a)({},u),{},{current:F+1,nWrong:z+1,resetFlag:F})),console.log(F))}})})]})]})})}D.defaultProps={list:[]};var K=D;var J=function(){var e=Object(p.useState)(0),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(p.useState)([]),l=Object(o.a)(i,2),v=l[0],O=l[1],x=Object(g.b)(),w=Object(m.g)(),C=Object(p.useRef)(20),N=function(){var e=Object(a.a)(r.a.mark((function e(t){var n,a,o,i,s,l,d,b,j,h,p;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.type,a=t.topics,o=t.level,i=t.specialty,e.prev=1,c(1),s=C.current<0||C.current>500?100:C.current,e.next=6,u.a.getWordPackWordMatch(n,o,i,a,s);case 6:if(200!==(l=e.sent).status){e.next=17;break}if(d=l.data.wordPack,0!==(b=void 0===d?[]:d).length){e.next=13;break}return x(Object(f.b)("R\u1ea5t xin l\u1ed7i, g\xf3i t\u1eeb v\u1ef1ng hi\u1ec7n t\u1ea1i kh\xf4ng \u0111\u1ee7. Vui l\xf2ng th\u1eed l\u1ea1i sao","warning")),c(0),e.abrupt("return");case 13:return console.log(b),O(b),c(2),e.abrupt("return");case 17:x(Object(f.b)("L\u1ea5y g\xf3i t\u1eeb v\u1ef1ng th\u1ea5t b\u1ea1i, th\u1eed l\u1ea1i !","warning")),c(0),e.next=26;break;case 21:e.prev=21,e.t0=e.catch(1),p=(null===(j=e.t0.response)||void 0===j||null===(h=j.data)||void 0===h?void 0:h.message)||"L\u1ea5y g\xf3i t\u1eeb v\u1ef1ng th\u1ea5t b\u1ea1i, th\u1eed l\u1ea1i !",x(Object(f.b)(p,"error")),c(0);case 26:case"end":return e.stop()}}),e,null,[[1,21]])})));return function(t){return e.apply(this,arguments)}}();return Object(L.jsx)(L.Fragment,{children:0===n?Object(L.jsx)(h.a,{open:!0,onChoose:N,onCancel:function(){return w.goBack()},topicMultiples:!0,title:"L\u1ef1a ch\u1ecdn g\xf3i t\u1eeb v\u1ef1ng",okBtnText:"B\u1eaft \u0111\u1ea7u",cancelBtnText:"Quay l\u1ea1i",cancelBtnProps:{startIcon:Object(L.jsx)(s.a,{})},okBtnProps:{startIcon:Object(L.jsx)(d.a,{})},children:Object(L.jsx)(j.a,{type:"number",inputProps:{min:5,max:500,defaultValue:20},placeholder:"Nh\u1eadp s\u1ed1 c\xe2u",label:"S\u1ed1 c\xe2u",className:"w-100",onChange:function(e){return C.current=e.target.value}})}):1===n?Object(L.jsx)(b.a,{title:"\u0110ang t\u1ea3i g\xf3i c\xe2u h\u1ecfi ..."}):Object(L.jsx)(K,{list:v})})},Z=n(68),_=n(56);t.default=function(){return Object(_.a)("Game gh\xe9p t\u1eeb (Word matching game)"),Object(Z.a)(),Object(L.jsx)(J,{})}}}]);
//# sourceMappingURL=11.371a4c64.chunk.js.map