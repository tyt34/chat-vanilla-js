(()=>{"use strict";var e,t,n,a,r={182:(e,t,n)=>{n.d(t,{$Q:()=>l,C:()=>c,E4:()=>o,My:()=>g,NI:()=>y,R$:()=>d,T3:()=>s,bF:()=>r,bl:()=>v,fl:()=>p,kd:()=>i,mm:()=>f,uK:()=>m,vq:()=>_,xD:()=>u});var a=n(745);const r=document.querySelector(a.Ms),o=document.querySelector(a.y9),c=document.querySelector(a.Uv),s=document.querySelector(a.XZ),l=document.querySelector(a.tX),i=document.getElementById(a.KT),u=document.getElementById(a.nT),m=document.querySelector(a.Xc),d=document.querySelector(a.Pp),p=document.querySelector(a.di),v=document.querySelector(a.PA),_=document.querySelector(a.Qr),y=document.querySelector(a.UE),f=document.querySelector(a.Ci),g=document.querySelector(a.Qp)},745:(e,t,n)=>{let a;n.d(t,{Ci:()=>k,DU:()=>C,Er:()=>v,F$:()=>L,KT:()=>u,Ms:()=>o,PA:()=>q,Pp:()=>p,Qp:()=>w,Qr:()=>h,T6:()=>U,TL:()=>f,UE:()=>b,Uv:()=>s,Vz:()=>g,XZ:()=>l,Xc:()=>d,Xx:()=>r,Y9:()=>N,ZF:()=>E,_G:()=>R,di:()=>S,eE:()=>A,k9:()=>y,lu:()=>_,nT:()=>m,nU:()=>x,tX:()=>i,vj:()=>G,y9:()=>c}),a="http://localhost:3001/";const r="http://localhost:3001/",o=".main__user-name",c=".main__user-ava",s=".template-item",l=".template-message",i=".main__list",u="send-message",m="label-input",d=".main__textarea",p=".main__list-messages",v=".main__message-text",_=".main__message-user",y=".main__message",f=".main__item-text",g=".main__ava-mini",S=".main__input",q=".main__prev-text",h=".template-img",x=".main__img-mini",b=".popup__img",k=".popup",U=".popup__close",w=".main__number-users",L="main__message_main",E="li.main__item",C="Вы: ",G="main__message_other",N="popup_open",A="Файл не выбран",R={sendChatMessage:"chat message",giveName:"give a name",giveAllUsers:"now list users",getNewUser:"add new user",getOldUser:"remove user",getNewMessage:"message for all"}},938:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{KN:()=>y,PL:()=>_,Uf:()=>i,ZI:()=>p,a:()=>l,av:()=>m,jk:()=>d,kX:()=>v,oL:()=>u});var r=n(182),o=n(745),c=n(952),s=e([c]);c=(s.then?(await s)():s)[0];const l=function(e,t){let n=r.vq.content.cloneNode(!0);n.querySelector(o.nU).src=e,n.querySelector(o.nU).addEventListener("click",(()=>{r.NI.src=e,r.mm.classList.add(o.Y9)})),t.querySelector(o.k9).append(n)},i=function(e,t,n,a){e.querySelector(o.Er).textContent=t,e.querySelector(o.lu).textContent=n,e.querySelector(o.k9).classList.add(a)},u=function(){r.mm.classList.remove(o.Y9)},m=function({avatar:e,id:t,name:n}){r.bF.textContent=o.DU+n,c.hd.name=n,c.hd.id=t,c.hd.avatar=e,r.E4.src=e},d=function(e){e.map((({avatar:e,id:t,name:n})=>{if(!c.AG.get(t)){let a=r.C.content.cloneNode(!0);a.querySelector(o.TL).textContent=n,a.querySelector(o.y9).src=e,r.$Q.append(a),c.AG.set(t,{name:n,avatar:e})}})),r.My.textContent=c.AG.size},p=function({avatar:e,id:t,name:n}){if(!c.AG.get(t)){let a=r.C.content.cloneNode(!0);a.querySelector(o.TL).textContent=n,a.querySelector(o.Vz).src=e,r.$Q.append(a),c.AG.set(t,{name:n,avatar:e}),r.My.textContent=c.AG.size}},v=function(e){[...document.querySelectorAll(o.ZF)].map((t=>{t.querySelector(o.TL).textContent===c.AG.get(e).name&&(t.remove(),c.AG.delete(e))})),r.My.textContent=c.AG.size},_=function({avatar:e,id:t,imageFile:n,message:a,name:s}){if(t!==c.hd.id){let t=r.T3.content.cloneNode(!0);if(i(t,a,s,o.vj),t.querySelector(o.y9).src=e,""!==n){let e=r.vq.content.cloneNode(!0);fetch(n).then((e=>e.blob())).then((n=>{e.querySelector(o.nU).src=window.URL.createObjectURL(n),e.querySelector(o.nU).addEventListener("click",(()=>{r.NI.src=window.URL.createObjectURL(n),r.mm.classList.add(o.Y9)})),t.querySelector(o.k9).append(e),r.R$.append(t)}))}else r.R$.append(t)}},y=function(){event.preventDefault()};a()}catch(e){a(e)}}))},952:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{AG:()=>d,hd:()=>u}),n(48);var r=n(745),o=n(182),c=n(938),s=n(482),l=e([c,s]);[c,s]=l.then?(await l)():l;const i=(0,s.io)(r.Xx);let u={name:"",id:"",avatar:""},m="",d=new Map,p="";const v=function(){event.preventDefault(),o.fl.click(),o.fl.addEventListener("change",(function(e){o.bl.textContent=o.fl.files[0].name,o.uK.value=o.uK.value+" ",p=URL.createObjectURL(o.fl.files[0]);let t=new FileReader;t.addEventListener("load",(()=>{m=t.result})),t.readAsDataURL(o.fl.files[0])}))},_=function(){if(""!==o.uK.value){let e=o.T3.content.cloneNode(!0);(0,c.Uf)(e,o.uK.value,u.name,r.F$),e.querySelector(r.y9).src=u.avatar,""!==m&&(0,c.a)(p,e),i.emit(r._G.sendChatMessage,{message:o.uK.value,imageFile:m}),o.uK.value="",m="",o.bl.textContent=r.eE,o.fl.value="",o.R$.append(e),o.R$.scrollTo(0,o.R$.scrollHeight)}};o.kd.onclick=c.KN,o.xD.onclick=v,o.kd.addEventListener("click",_),i.emit(r._G.giveName),i.on(r._G.giveName,(e=>{(0,c.av)(e)})),i.on(r._G.giveAllUsers,(e=>{(0,c.jk)(e)})),i.on(r._G.getNewUser,(e=>{(0,c.ZI)(e)})),i.on(r._G.getOldUser,(e=>{(0,c.kX)(e)})),i.on(r._G.getNewMessage,(e=>{(0,c.PL)(e)})),document.querySelector(r.T6).addEventListener("click",c.oL),a()}catch(e){a(e)}}))},48:(e,t,n)=>{e.exports=n.p+"images/def-ava.png"},482:e=>{e.exports=import("https://cdn.socket.io/4.4.1/socket.io.esm.min.js")}},o={};function c(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return r[e](n,n.exports,c),n.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",a=e=>{e&&!e.d&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},c.a=(r,o,c)=>{var s;c&&((s=[]).d=1);var l,i,u,m=new Set,d=r.exports,p=new Promise(((e,t)=>{u=t,i=e}));p[t]=d,p[e]=e=>(s&&e(s),m.forEach(e),p.catch((e=>{}))),r.exports=p,o((r=>{var o;l=(r=>r.map((r=>{if(null!==r&&"object"==typeof r){if(r[e])return r;if(r.then){var o=[];o.d=0,r.then((e=>{c[t]=e,a(o)}),(e=>{c[n]=e,a(o)}));var c={};return c[e]=e=>e(o),c}}var s={};return s[e]=e=>{},s[t]=r,s})))(r);var c=()=>l.map((e=>{if(e[n])throw e[n];return e[t]})),i=new Promise((t=>{(o=()=>t(c)).r=0;var n=e=>e!==s&&!m.has(e)&&(m.add(e),e&&!e.d&&(o.r++,e.push(o)));l.map((t=>t[e](n)))}));return o.r?i:c()}),(e=>(e?u(p[n]=e):i(d),a(s)))),s&&(s.d=0)},c.d=(e,t)=>{for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.p="",c(952)})();