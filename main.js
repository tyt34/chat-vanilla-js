(()=>{"use strict";var e,t,n,r,a={182:(e,t,n)=>{n.d(t,{$Q:()=>m,C:()=>c,E4:()=>o,My:()=>S,NI:()=>y,R$:()=>d,T3:()=>l,bF:()=>a,bl:()=>_,fl:()=>p,kd:()=>u,mm:()=>f,uK:()=>s,vq:()=>v,xD:()=>i});var r=n(745);const a=document.querySelector(r.Ms),o=document.querySelector(r.y9),c=document.querySelector(r.Uv),l=document.querySelector(r.XZ),m=document.querySelector(r.tX),u=document.getElementById(r.KT),i=document.getElementById(r.nT),s=document.querySelector(r.Xc),d=document.querySelector(r.Pp),p=document.querySelector(r.di),_=document.querySelector(r.PA),v=document.querySelector(r.Qr),y=document.querySelector(r.UE),f=document.querySelector(r.Ci),S=document.querySelector(r.Qp)},745:(e,t,n)=>{n.d(t,{Ci:()=>h,DU:()=>L,Er:()=>p,F$:()=>C,KT:()=>u,Mm:()=>T,Ms:()=>a,PA:()=>q,Pp:()=>d,Qp:()=>E,Qr:()=>b,T4:()=>$,T6:()=>k,TL:()=>y,UE:()=>x,Uv:()=>c,Vz:()=>f,XZ:()=>l,Xc:()=>s,Xx:()=>r,Y9:()=>M,ZF:()=>w,_:()=>P,bE:()=>K,bU:()=>D,di:()=>S,eE:()=>F,k9:()=>v,lu:()=>_,nT:()=>i,nU:()=>g,nr:()=>j,sd:()=>X,tX:()=>m,vj:()=>U,y9:()=>o});const r="https://chat-node-js-backend.glitch.me/",a=".main__user-name",o=".main__user-ava",c=".template-item",l=".template-message",m=".main__list",u="send-message",i="label-input",s=".main__textarea",d=".main__list-messages",p=".main__message-text",_=".main__message-user",v=".main__message",y=".main__item-text",f=".main__ava-mini",S=".main__input",q=".main__prev-text",b=".template-img",g=".main__img-mini",x=".popup__img",h=".popup",k=".popup__close",E=".main__number-users",C="main__message_main",w="li.main__item",L="Вы: ",T="default",U="main__message_other",M="popup_open",F="Файл не выбран",K="chat message",j="give a name",P="now list users",X="add new user",$="remove user",D="message for all"},952:(e,t,n)=>{n.a(e,(async(e,t)=>{try{n(48);var r=n(745),a=n(182),o=n(482),c=e([o]);const l=(0,(o=(c.then?(await c)():c)[0]).io)(r.Xx);let m="",u="",i="",s="",d=[],p="";function _(e){let t=!0;return d.map((n=>{n.id===e&&(t=!1)})),t}const v=function(e,t){let n=a.vq.content.cloneNode(!0);n.querySelector(r.nU).src=e,n.querySelector(r.nU).addEventListener("click",(()=>{a.NI.src=e,a.mm.classList.add(r.Y9)})),t.querySelector(r.k9).append(n)},y=function(e,t,n,a){e.querySelector(r.Er).textContent=t,e.querySelector(r.lu).textContent=n,e.querySelector(r.k9).classList.add(a)},f=function(){if(""!==a.uK.value){let e=a.T3.content.cloneNode(!0);y(e,a.uK.value,m,r.F$),e.querySelector(r.y9).src=i,s&&v(p,e),l.emit(r.bE,{message:a.uK.value,imageFile:s}),a.uK.value="",s="",a.bl.textContent=r.eE,a.fl.value="",a.R$.append(e)}};document.querySelector(r.T6).addEventListener("click",(()=>{a.mm.classList.remove(r.Y9)})),a.kd.onclick=function(){event.preventDefault()},a.xD.onclick=function(){event.preventDefault(),a.fl.click(),a.fl.addEventListener("change",(function(e){a.bl.textContent=a.fl.files[0].name,a.uK.value=a.uK.value+" ",p=URL.createObjectURL(a.fl.files[0]);let t=new FileReader;t.addEventListener("load",(()=>{s=t.result})),t.readAsDataURL(a.fl.files[0])}))},a.kd.addEventListener("click",f),l.emit(r.nr),l.on(r.nr,(e=>{a.bF.textContent=r.DU+e.name,m=e.name,u=e.id,e.avatar!==r.Mm&&(i=e.avatar,a.E4.src=e.avatar)})),l.on(r._,(e=>{e.map((e=>{if(_(e.id)){let t=a.C.content.cloneNode(!0);t.querySelector(r.TL).textContent=e.name,e.avatar!==r.Mm&&(t.querySelector(r.y9).src=e.avatar),a.$Q.append(t)}})),d=e,a.My.textContent=d.length})),l.on(r.sd,(e=>{let t=a.C.content.cloneNode(!0);t.querySelector(r.TL).textContent=e.name,e.avatar!==r.Mm&&(t.querySelector(r.Vz).src=e.avatar),a.$Q.append(t),d.push(e),a.My.textContent=d.length})),l.on(r.T4,(e=>{d.map(((t,n)=>{t.id===e&&([...document.querySelectorAll(r.ZF)].map((e=>{e.querySelector(r.TL).textContent===t.name&&e.remove()})),d.splice(n,1),a.My.textContent=d.length)}))})),l.on(r.bU,(e=>{if(e.id!==u){let t=a.T3.content.cloneNode(!0);y(t,e.message,e.name,r.vj),e.avatar!==r.Mm&&(t.querySelector(r.y9).src=e.avatar),""!==e.imageFile&&v(e.imageFile,t),a.R$.append(t)}})),t()}catch(S){t(S)}}))},48:(e,t,n)=>{e.exports=n.p+"images/def-ava.png"},482:e=>{e.exports=import("https://cdn.socket.io/4.4.1/socket.io.esm.min.js")}},o={};function c(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return a[e](n,n.exports,c),n.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=e=>{e&&!e.d&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},c.a=(a,o,c)=>{var l;c&&((l=[]).d=1);var m,u,i,s=new Set,d=a.exports,p=new Promise(((e,t)=>{i=t,u=e}));p[t]=d,p[e]=e=>(l&&e(l),s.forEach(e),p.catch((e=>{}))),a.exports=p,o((a=>{var o;m=(a=>a.map((a=>{if(null!==a&&"object"==typeof a){if(a[e])return a;if(a.then){var o=[];o.d=0,a.then((e=>{c[t]=e,r(o)}),(e=>{c[n]=e,r(o)}));var c={};return c[e]=e=>e(o),c}}var l={};return l[e]=e=>{},l[t]=a,l})))(a);var c=()=>m.map((e=>{if(e[n])throw e[n];return e[t]})),u=new Promise((t=>{(o=()=>t(c)).r=0;var n=e=>e!==l&&!s.has(e)&&(s.add(e),e&&!e.d&&(o.r++,e.push(o)));m.map((t=>t[e](n)))}));return o.r?u:c()}),(e=>(e?i(p[n]=e):u(d),r(l)))),l&&(l.d=0)},c.d=(e,t)=>{for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.p="",c(952)})();