(()=>{"use strict";var e,t,n,r,o={182:(e,t,n)=>{n.d(t,{$Q:()=>s,C:()=>c,E4:()=>a,My:()=>S,NI:()=>v,R$:()=>d,T3:()=>l,bF:()=>o,bl:()=>_,fl:()=>p,kd:()=>m,mm:()=>f,uK:()=>i,vq:()=>y,xD:()=>u});var r=n(745);const o=document.querySelector(r.Ms),a=document.querySelector(r.y9),c=document.querySelector(r.Uv),l=document.querySelector(r.XZ),s=document.querySelector(r.tX),m=document.getElementById(r.KT),u=document.getElementById(r.nT),i=document.querySelector(r.Xc),d=document.querySelector(r.Pp),p=document.querySelector(r.di),_=document.querySelector(r.PA),y=document.querySelector(r.Qr),v=document.querySelector(r.UE),f=document.querySelector(r.Ci),S=document.querySelector(r.Qp)},745:(e,t,n)=>{let r;n.d(t,{Ci:()=>k,DU:()=>T,Er:()=>_,F$:()=>C,KT:()=>u,Mm:()=>U,Ms:()=>a,PA:()=>x,Pp:()=>p,Qp:()=>w,Qr:()=>b,T4:()=>D,T6:()=>E,TL:()=>f,UE:()=>h,Uv:()=>l,Vz:()=>S,XZ:()=>s,Xc:()=>d,Xx:()=>o,Y9:()=>F,ZF:()=>L,_:()=>$,bE:()=>P,bU:()=>N,di:()=>q,eE:()=>K,k9:()=>v,lu:()=>y,nT:()=>i,nU:()=>g,nr:()=>X,sd:()=>j,tX:()=>m,vj:()=>M,y9:()=>c}),r="http://localhost:3000/";const o="http://localhost:3000/",a=".main__user-name",c=".main__user-ava",l=".template-item",s=".template-message",m=".main__list",u="send-message",i="label-input",d=".main__textarea",p=".main__list-messages",_=".main__message-text",y=".main__message-user",v=".main__message",f=".main__item-text",S=".main__ava-mini",q=".main__input",x=".main__prev-text",b=".template-img",g=".main__img-mini",h=".popup__img",k=".popup",E=".popup__close",w=".main__number-users",C="main__message_main",L="li.main__item",T="Вы: ",U="default",M="main__message_other",F="popup_open",K="Файл не выбран",P="chat message",X="give a name",$="now list users",j="add new user",D="remove user",N="message for all"},952:(e,t,n)=>{n.a(e,(async(e,t)=>{try{n(48);var r=n(745),o=n(182),a=n(482),c=e([a]);const l=(0,(a=(c.then?(await c)():c)[0]).io)(r.Xx);let s="",m="",u="",i="",d=new Map,p="";const _=function(e,t){let n=o.vq.content.cloneNode(!0);n.querySelector(r.nU).src=e,n.querySelector(r.nU).addEventListener("click",(()=>{o.NI.src=e,o.mm.classList.add(r.Y9)})),t.querySelector(r.k9).append(n)},y=function(e,t,n,o){e.querySelector(r.Er).textContent=t,e.querySelector(r.lu).textContent=n,e.querySelector(r.k9).classList.add(o)},v=function(){if(""!==o.uK.value){let e=o.T3.content.cloneNode(!0);y(e,o.uK.value,s,r.F$),e.querySelector(r.y9).src=u,i&&_(p,e),l.emit(r.bE,{message:o.uK.value,imageFile:i}),o.uK.value="",i="",o.bl.textContent=r.eE,o.fl.value="",o.R$.append(e)}};document.querySelector(r.T6).addEventListener("click",(()=>{o.mm.classList.remove(r.Y9)})),o.kd.onclick=function(){event.preventDefault()},o.xD.onclick=function(){event.preventDefault(),o.fl.click(),o.fl.addEventListener("change",(function(e){o.bl.textContent=o.fl.files[0].name,o.uK.value=o.uK.value+" ",p=URL.createObjectURL(o.fl.files[0]);let t=new FileReader;t.addEventListener("load",(()=>{i=t.result})),t.readAsDataURL(o.fl.files[0])}))},o.kd.addEventListener("click",v),l.emit(r.nr),l.on(r.nr,(e=>{const{avatar:t,id:n,name:a}=e;o.bF.textContent=r.DU+a,s=a,m=n,t!==r.Mm&&(u=t,o.E4.src=t)})),l.on(r._,(e=>{e.map((e=>{const{avatar:t,id:n,name:a}=e;if(!d.get(n)){let e=o.C.content.cloneNode(!0);e.querySelector(r.TL).textContent=a,t!==r.Mm&&(e.querySelector(r.y9).src=t),o.$Q.append(e),d.set(n,{name:a,avatar:t})}})),o.My.textContent=d.size})),l.on(r.sd,(e=>{const{avatar:t,id:n,name:a}=e;if(!d.get(n)){let e=o.C.content.cloneNode(!0);e.querySelector(r.TL).textContent=a,t!==r.Mm&&(e.querySelector(r.Vz).src=t),o.$Q.append(e),d.set(n,{name:a,avatar:t}),o.My.textContent=d.size}})),l.on(r.T4,(e=>{[...document.querySelectorAll(r.ZF)].map((t=>{t.querySelector(r.TL).textContent===d.get(e).name&&(t.remove(),d.delete(e))})),o.My.textContent=d.size})),l.on(r.bU,(e=>{const{avatar:t,id:n,imageFile:a,message:c,name:l}=e;if(n!==m){let e=o.T3.content.cloneNode(!0);y(e,c,l,r.vj),t!==r.Mm&&(e.querySelector(r.y9).src=t),""!==a&&_(a,e),o.R$.append(e)}})),t()}catch(e){t(e)}}))},48:(e,t,n)=>{e.exports=n.p+"images/def-ava.png"},482:e=>{e.exports=import("https://cdn.socket.io/4.4.1/socket.io.esm.min.js")}},a={};function c(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return o[e](n,n.exports,c),n.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=e=>{e&&!e.d&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},c.a=(o,a,c)=>{var l;c&&((l=[]).d=1);var s,m,u,i=new Set,d=o.exports,p=new Promise(((e,t)=>{u=t,m=e}));p[t]=d,p[e]=e=>(l&&e(l),i.forEach(e),p.catch((e=>{}))),o.exports=p,a((o=>{var a;s=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var a=[];a.d=0,o.then((e=>{c[t]=e,r(a)}),(e=>{c[n]=e,r(a)}));var c={};return c[e]=e=>e(a),c}}var l={};return l[e]=e=>{},l[t]=o,l})))(o);var c=()=>s.map((e=>{if(e[n])throw e[n];return e[t]})),m=new Promise((t=>{(a=()=>t(c)).r=0;var n=e=>e!==l&&!i.has(e)&&(i.add(e),e&&!e.d&&(a.r++,e.push(a)));s.map((t=>t[e](n)))}));return a.r?m:c()}),(e=>(e?u(p[n]=e):m(d),r(l)))),l&&(l.d=0)},c.d=(e,t)=>{for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.p="",c(952)})();