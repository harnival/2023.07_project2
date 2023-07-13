(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Oa(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const pe={},Xn=[],lt=()=>{},Qp=()=>!1,Jp=/^on[^a-z]/,Dr=t=>Jp.test(t),xa=t=>t.startsWith("onUpdate:"),we=Object.assign,Da=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Xp=Object.prototype.hasOwnProperty,J=(t,e)=>Xp.call(t,e),B=Array.isArray,Zn=t=>Mr(t)==="[object Map]",hh=t=>Mr(t)==="[object Set]",K=t=>typeof t=="function",Ce=t=>typeof t=="string",Ma=t=>typeof t=="symbol",_e=t=>t!==null&&typeof t=="object",dh=t=>_e(t)&&K(t.then)&&K(t.catch),fh=Object.prototype.toString,Mr=t=>fh.call(t),Zp=t=>Mr(t).slice(8,-1),ph=t=>Mr(t)==="[object Object]",La=t=>Ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,zi=Oa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Lr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},e_=/-(\w)/g,Ct=Lr(t=>t.replace(e_,(e,n)=>n?n.toUpperCase():"")),t_=/\B([A-Z])/g,Cs=Lr(t=>t.replace(t_,"-$1").toLowerCase()),Fr=Lr(t=>t.charAt(0).toUpperCase()+t.slice(1)),fo=Lr(t=>t?`on${Fr(t)}`:""),ii=(t,e)=>!Object.is(t,e),qi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},sr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ho=t=>{const e=parseFloat(t);return isNaN(e)?t:e},n_=t=>{const e=Ce(t)?Number(t):NaN;return isNaN(e)?t:e};let nc;const $o=()=>nc||(nc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fa(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Ce(s)?o_(s):Fa(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Ce(t))return t;if(_e(t))return t}}const s_=/;(?![^(]*\))/g,i_=/:([^]+)/,r_=/\/\*[^]*?\*\//g;function o_(t){const e={};return t.replace(r_,"").split(s_).forEach(n=>{if(n){const s=n.split(i_);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ua(t){let e="";if(Ce(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const s=Ua(t[n]);s&&(e+=s+" ")}else if(_e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const a_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",l_=Oa(a_);function _h(t){return!!t||t===""}const c_=t=>Ce(t)?t:t==null?"":B(t)||_e(t)&&(t.toString===fh||!K(t.toString))?JSON.stringify(t,gh,2):String(t),gh=(t,e)=>e&&e.__v_isRef?gh(t,e.value):Zn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:hh(e)?{[`Set(${e.size})`]:[...e.values()]}:_e(e)&&!B(e)&&!ph(e)?String(e):e;let nt;class mh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=nt,!e&&nt&&(this.index=(nt.scopes||(nt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=nt;try{return nt=this,e()}finally{nt=n}}}on(){nt=this}off(){nt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function u_(t){return new mh(t)}function h_(t,e=nt){e&&e.active&&e.effects.push(t)}function d_(){return nt}const Wa=t=>{const e=new Set(t);return e.w=0,e.n=0,e},vh=t=>(t.w&sn)>0,yh=t=>(t.n&sn)>0,f_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=sn},p_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];vh(i)&&!yh(i)?i.delete(t):e[n++]=i,i.w&=~sn,i.n&=~sn}e.length=n}},jo=new WeakMap;let js=0,sn=1;const Vo=30;let st;const wn=Symbol(""),Ko=Symbol("");class Ba{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,h_(this,s)}run(){if(!this.active)return this.fn();let e=st,n=Qt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=st,st=this,Qt=!0,sn=1<<++js,js<=Vo?f_(this):sc(this),this.fn()}finally{js<=Vo&&p_(this),sn=1<<--js,st=this.parent,Qt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){st===this?this.deferStop=!0:this.active&&(sc(this),this.onStop&&this.onStop(),this.active=!1)}}function sc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Qt=!0;const Eh=[];function bs(){Eh.push(Qt),Qt=!1}function Is(){const t=Eh.pop();Qt=t===void 0?!0:t}function Ke(t,e,n){if(Qt&&st){let s=jo.get(t);s||jo.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Wa()),wh(i)}}function wh(t,e){let n=!1;js<=Vo?yh(t)||(t.n|=sn,n=!vh(t)):n=!t.has(st),n&&(t.add(st),st.deps.push(t))}function xt(t,e,n,s,i,r){const o=jo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&B(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":B(t)?La(n)&&a.push(o.get("length")):(a.push(o.get(wn)),Zn(t)&&a.push(o.get(Ko)));break;case"delete":B(t)||(a.push(o.get(wn)),Zn(t)&&a.push(o.get(Ko)));break;case"set":Zn(t)&&a.push(o.get(wn));break}if(a.length===1)a[0]&&Go(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Go(Wa(l))}}function Go(t,e){const n=B(t)?t:[...t];for(const s of n)s.computed&&ic(s);for(const s of n)s.computed||ic(s)}function ic(t,e){(t!==st||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const __=Oa("__proto__,__v_isRef,__isVue"),Ch=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ma)),g_=Ha(),m_=Ha(!1,!0),v_=Ha(!0),rc=y_();function y_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Z(this);for(let r=0,o=this.length;r<o;r++)Ke(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(Z)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){bs();const s=Z(this)[e].apply(this,n);return Is(),s}}),t}function E_(t){const e=Z(this);return Ke(e,"has",t),e.hasOwnProperty(t)}function Ha(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?L_:Rh:e?Sh:Th).get(s))return s;const o=B(s);if(!t){if(o&&J(rc,i))return Reflect.get(rc,i,r);if(i==="hasOwnProperty")return E_}const a=Reflect.get(s,i,r);return(Ma(i)?Ch.has(i):__(i))||(t||Ke(s,"get",i),e)?a:Me(a)?o&&La(i)?a:a.value:_e(a)?t?Ph(a):bi(a):a}}const w_=bh(),C_=bh(!0);function bh(t=!1){return function(n,s,i,r){let o=n[s];if(ls(o)&&Me(o)&&!Me(i))return!1;if(!t&&(!ir(i)&&!ls(i)&&(o=Z(o),i=Z(i)),!B(n)&&Me(o)&&!Me(i)))return o.value=i,!0;const a=B(n)&&La(s)?Number(s)<n.length:J(n,s),l=Reflect.set(n,s,i,r);return n===Z(r)&&(a?ii(i,o)&&xt(n,"set",s,i):xt(n,"add",s,i)),l}}function b_(t,e){const n=J(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&xt(t,"delete",e,void 0),s}function I_(t,e){const n=Reflect.has(t,e);return(!Ma(e)||!Ch.has(e))&&Ke(t,"has",e),n}function T_(t){return Ke(t,"iterate",B(t)?"length":wn),Reflect.ownKeys(t)}const Ih={get:g_,set:w_,deleteProperty:b_,has:I_,ownKeys:T_},S_={get:v_,set(t,e){return!0},deleteProperty(t,e){return!0}},R_=we({},Ih,{get:m_,set:C_}),$a=t=>t,Ur=t=>Reflect.getPrototypeOf(t);function Fi(t,e,n=!1,s=!1){t=t.__v_raw;const i=Z(t),r=Z(e);n||(e!==r&&Ke(i,"get",e),Ke(i,"get",r));const{has:o}=Ur(i),a=s?$a:n?Ka:ri;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Ui(t,e=!1){const n=this.__v_raw,s=Z(n),i=Z(t);return e||(t!==i&&Ke(s,"has",t),Ke(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Wi(t,e=!1){return t=t.__v_raw,!e&&Ke(Z(t),"iterate",wn),Reflect.get(t,"size",t)}function oc(t){t=Z(t);const e=Z(this);return Ur(e).has.call(e,t)||(e.add(t),xt(e,"add",t,t)),this}function ac(t,e){e=Z(e);const n=Z(this),{has:s,get:i}=Ur(n);let r=s.call(n,t);r||(t=Z(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?ii(e,o)&&xt(n,"set",t,e):xt(n,"add",t,e),this}function lc(t){const e=Z(this),{has:n,get:s}=Ur(e);let i=n.call(e,t);i||(t=Z(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&xt(e,"delete",t,void 0),r}function cc(){const t=Z(this),e=t.size!==0,n=t.clear();return e&&xt(t,"clear",void 0,void 0),n}function Bi(t,e){return function(s,i){const r=this,o=r.__v_raw,a=Z(o),l=e?$a:t?Ka:ri;return!t&&Ke(a,"iterate",wn),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function Hi(t,e,n){return function(...s){const i=this.__v_raw,r=Z(i),o=Zn(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?$a:e?Ka:ri;return!e&&Ke(r,"iterate",l?Ko:wn),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Ut(t){return function(...e){return t==="delete"?!1:this}}function A_(){const t={get(r){return Fi(this,r)},get size(){return Wi(this)},has:Ui,add:oc,set:ac,delete:lc,clear:cc,forEach:Bi(!1,!1)},e={get(r){return Fi(this,r,!1,!0)},get size(){return Wi(this)},has:Ui,add:oc,set:ac,delete:lc,clear:cc,forEach:Bi(!1,!0)},n={get(r){return Fi(this,r,!0)},get size(){return Wi(this,!0)},has(r){return Ui.call(this,r,!0)},add:Ut("add"),set:Ut("set"),delete:Ut("delete"),clear:Ut("clear"),forEach:Bi(!0,!1)},s={get(r){return Fi(this,r,!0,!0)},get size(){return Wi(this,!0)},has(r){return Ui.call(this,r,!0)},add:Ut("add"),set:Ut("set"),delete:Ut("delete"),clear:Ut("clear"),forEach:Bi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Hi(r,!1,!1),n[r]=Hi(r,!0,!1),e[r]=Hi(r,!1,!0),s[r]=Hi(r,!0,!0)}),[t,n,e,s]}const[P_,N_,k_,O_]=A_();function ja(t,e){const n=e?t?O_:k_:t?N_:P_;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(J(n,i)&&i in s?n:s,i,r)}const x_={get:ja(!1,!1)},D_={get:ja(!1,!0)},M_={get:ja(!0,!1)},Th=new WeakMap,Sh=new WeakMap,Rh=new WeakMap,L_=new WeakMap;function F_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function U_(t){return t.__v_skip||!Object.isExtensible(t)?0:F_(Zp(t))}function bi(t){return ls(t)?t:Va(t,!1,Ih,x_,Th)}function Ah(t){return Va(t,!1,R_,D_,Sh)}function Ph(t){return Va(t,!0,S_,M_,Rh)}function Va(t,e,n,s,i){if(!_e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=U_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function es(t){return ls(t)?es(t.__v_raw):!!(t&&t.__v_isReactive)}function ls(t){return!!(t&&t.__v_isReadonly)}function ir(t){return!!(t&&t.__v_isShallow)}function Nh(t){return es(t)||ls(t)}function Z(t){const e=t&&t.__v_raw;return e?Z(e):t}function kh(t){return sr(t,"__v_skip",!0),t}const ri=t=>_e(t)?bi(t):t,Ka=t=>_e(t)?Ph(t):t;function Oh(t){Qt&&st&&(t=Z(t),wh(t.dep||(t.dep=Wa())))}function xh(t,e){t=Z(t);const n=t.dep;n&&Go(n)}function Me(t){return!!(t&&t.__v_isRef===!0)}function W_(t){return Dh(t,!1)}function B_(t){return Dh(t,!0)}function Dh(t,e){return Me(t)?t:new H_(t,e)}class H_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Z(e),this._value=n?e:ri(e)}get value(){return Oh(this),this._value}set value(e){const n=this.__v_isShallow||ir(e)||ls(e);e=n?e:Z(e),ii(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ri(e),xh(this))}}function it(t){return Me(t)?t.value:t}const $_={get:(t,e,n)=>it(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Me(i)&&!Me(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Mh(t){return es(t)?t:new Proxy(t,$_)}class j_{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ba(e,()=>{this._dirty||(this._dirty=!0,xh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=Z(this);return Oh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function V_(t,e,n=!1){let s,i;const r=K(t);return r?(s=t,i=lt):(s=t.get,i=t.set),new j_(s,i,r||!i,n)}function Jt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Wr(r,e,n)}return i}function Xe(t,e,n,s){if(K(t)){const r=Jt(t,e,n,s);return r&&dh(r)&&r.catch(o=>{Wr(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Xe(t[r],e,n,s));return i}function Wr(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Jt(l,null,10,[t,o,a]);return}}K_(t,n,i,s)}function K_(t,e,n,s=!0){console.error(t)}let oi=!1,zo=!1;const De=[];let yt=0;const ts=[];let At=null,gn=0;const Lh=Promise.resolve();let Ga=null;function Fh(t){const e=Ga||Lh;return t?e.then(this?t.bind(this):t):e}function G_(t){let e=yt+1,n=De.length;for(;e<n;){const s=e+n>>>1;ai(De[s])<t?e=s+1:n=s}return e}function za(t){(!De.length||!De.includes(t,oi&&t.allowRecurse?yt+1:yt))&&(t.id==null?De.push(t):De.splice(G_(t.id),0,t),Uh())}function Uh(){!oi&&!zo&&(zo=!0,Ga=Lh.then(Bh))}function z_(t){const e=De.indexOf(t);e>yt&&De.splice(e,1)}function q_(t){B(t)?ts.push(...t):(!At||!At.includes(t,t.allowRecurse?gn+1:gn))&&ts.push(t),Uh()}function uc(t,e=oi?yt+1:0){for(;e<De.length;e++){const n=De[e];n&&n.pre&&(De.splice(e,1),e--,n())}}function Wh(t){if(ts.length){const e=[...new Set(ts)];if(ts.length=0,At){At.push(...e);return}for(At=e,At.sort((n,s)=>ai(n)-ai(s)),gn=0;gn<At.length;gn++)At[gn]();At=null,gn=0}}const ai=t=>t.id==null?1/0:t.id,Y_=(t,e)=>{const n=ai(t)-ai(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Bh(t){zo=!1,oi=!0,De.sort(Y_);const e=lt;try{for(yt=0;yt<De.length;yt++){const n=De[yt];n&&n.active!==!1&&Jt(n,null,14)}}finally{yt=0,De.length=0,Wh(),oi=!1,Ga=null,(De.length||ts.length)&&Bh()}}function Q_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||pe;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||pe;d&&(i=n.map(_=>Ce(_)?_.trim():_)),h&&(i=n.map(Ho))}let a,l=s[a=fo(e)]||s[a=fo(Ct(e))];!l&&r&&(l=s[a=fo(Cs(e))]),l&&Xe(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Xe(c,t,6,i)}}function Hh(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!K(t)){const l=c=>{const u=Hh(c,e,!0);u&&(a=!0,we(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(_e(t)&&s.set(t,null),null):(B(r)?r.forEach(l=>o[l]=null):we(o,r),_e(t)&&s.set(t,o),o)}function Br(t,e){return!t||!Dr(e)?!1:(e=e.slice(2).replace(/Once$/,""),J(t,e[0].toLowerCase()+e.slice(1))||J(t,Cs(e))||J(t,e))}let qe=null,Hr=null;function rr(t){const e=qe;return qe=t,Hr=t&&t.type.__scopeId||null,e}function J_(t){Hr=t}function X_(){Hr=null}function Z_(t,e=qe,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Cc(-1);const r=rr(e);let o;try{o=t(...i)}finally{rr(r),s._d&&Cc(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function po(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:_,ctx:m,inheritAttrs:w}=t;let A,N;const O=rr(t);try{if(n.shapeFlag&4){const x=i||s;A=vt(u.call(x,x,h,r,_,d,m)),N=l}else{const x=e;A=vt(x.length>1?x(r,{attrs:l,slots:a,emit:c}):x(r,null)),N=e.props?l:eg(l)}}catch(x){Ys.length=0,Wr(x,t,1),A=We(ct)}let H=A;if(N&&w!==!1){const x=Object.keys(N),{shapeFlag:se}=H;x.length&&se&7&&(o&&x.some(xa)&&(N=tg(N,o)),H=rn(H,N))}return n.dirs&&(H=rn(H),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&(H.transition=n.transition),A=H,rr(O),A}const eg=t=>{let e;for(const n in t)(n==="class"||n==="style"||Dr(n))&&((e||(e={}))[n]=t[n]);return e},tg=(t,e)=>{const n={};for(const s in t)(!xa(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function ng(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?hc(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Br(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?hc(s,o,c):!0:!!o;return!1}function hc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Br(n,r))return!0}return!1}function sg({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const ig=t=>t.__isSuspense;function rg(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):q_(t)}const $i={};function ns(t,e,n){return $h(t,e,n)}function $h(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=pe){var a;const l=d_()===((a=Pe)==null?void 0:a.scope)?Pe:null;let c,u=!1,h=!1;if(Me(t)?(c=()=>t.value,u=ir(t)):es(t)?(c=()=>t,s=!0):B(t)?(h=!0,u=t.some(x=>es(x)||ir(x)),c=()=>t.map(x=>{if(Me(x))return x.value;if(es(x))return yn(x);if(K(x))return Jt(x,l,2)})):K(t)?e?c=()=>Jt(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),Xe(t,l,3,[_])}:c=lt,e&&s){const x=c;c=()=>yn(x())}let d,_=x=>{d=O.onStop=()=>{Jt(x,l,4)}},m;if(ci)if(_=lt,e?n&&Xe(e,l,3,[c(),h?[]:void 0,_]):c(),i==="sync"){const x=nm();m=x.__watcherHandles||(x.__watcherHandles=[])}else return lt;let w=h?new Array(t.length).fill($i):$i;const A=()=>{if(O.active)if(e){const x=O.run();(s||u||(h?x.some((se,ge)=>ii(se,w[ge])):ii(x,w)))&&(d&&d(),Xe(e,l,3,[x,w===$i?void 0:h&&w[0]===$i?[]:w,_]),w=x)}else O.run()};A.allowRecurse=!!e;let N;i==="sync"?N=A:i==="post"?N=()=>je(A,l&&l.suspense):(A.pre=!0,l&&(A.id=l.uid),N=()=>za(A));const O=new Ba(c,N);e?n?A():w=O.run():i==="post"?je(O.run.bind(O),l&&l.suspense):O.run();const H=()=>{O.stop(),l&&l.scope&&Da(l.scope.effects,O)};return m&&m.push(H),H}function og(t,e,n){const s=this.proxy,i=Ce(t)?t.includes(".")?jh(s,t):()=>s[t]:t.bind(s,s);let r;K(e)?r=e:(r=e.handler,n=e);const o=Pe;cs(this);const a=$h(i,r.bind(s),n);return o?cs(o):Cn(),a}function jh(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function yn(t,e){if(!_e(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Me(t))yn(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)yn(t[n],e);else if(hh(t)||Zn(t))t.forEach(n=>{yn(n,e)});else if(ph(t))for(const n in t)yn(t[n],e);return t}function FS(t,e){const n=qe;if(n===null)return t;const s=Gr(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=pe]=e[r];o&&(K(o)&&(o={mounted:o,updated:o}),o.deep&&yn(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function un(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(bs(),Xe(l,n,8,[t.el,a,t,e]),Is())}}function ag(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Qh(()=>{t.isMounted=!0}),Jh(()=>{t.isUnmounting=!0}),t}const Ye=[Function,Array],Vh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ye,onEnter:Ye,onAfterEnter:Ye,onEnterCancelled:Ye,onBeforeLeave:Ye,onLeave:Ye,onAfterLeave:Ye,onLeaveCancelled:Ye,onBeforeAppear:Ye,onAppear:Ye,onAfterAppear:Ye,onAppearCancelled:Ye},lg={name:"BaseTransition",props:Vh,setup(t,{slots:e}){const n=qg(),s=ag();let i;return()=>{const r=e.default&&Gh(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const w of r)if(w.type!==ct){o=w;break}}const a=Z(t),{mode:l}=a;if(s.isLeaving)return _o(o);const c=dc(o);if(!c)return _o(o);const u=qo(c,a,s,n);Yo(c,u);const h=n.subTree,d=h&&dc(h);let _=!1;const{getTransitionKey:m}=c.type;if(m){const w=m();i===void 0?i=w:w!==i&&(i=w,_=!0)}if(d&&d.type!==ct&&(!mn(c,d)||_)){const w=qo(d,a,s,n);if(Yo(d,w),l==="out-in")return s.isLeaving=!0,w.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},_o(o);l==="in-out"&&c.type!==ct&&(w.delayLeave=(A,N,O)=>{const H=Kh(s,d);H[String(d.key)]=d,A._leaveCb=()=>{N(),A._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=O})}return o}}},cg=lg;function Kh(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function qo(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:_,onLeaveCancelled:m,onBeforeAppear:w,onAppear:A,onAfterAppear:N,onAppearCancelled:O}=e,H=String(t.key),x=Kh(n,t),se=(V,ie)=>{V&&Xe(V,s,9,ie)},ge=(V,ie)=>{const ee=ie[1];se(V,ie),B(V)?V.every(Ie=>Ie.length<=1)&&ee():V.length<=1&&ee()},be={mode:r,persisted:o,beforeEnter(V){let ie=a;if(!n.isMounted)if(i)ie=w||a;else return;V._leaveCb&&V._leaveCb(!0);const ee=x[H];ee&&mn(t,ee)&&ee.el._leaveCb&&ee.el._leaveCb(),se(ie,[V])},enter(V){let ie=l,ee=c,Ie=u;if(!n.isMounted)if(i)ie=A||l,ee=N||c,Ie=O||u;else return;let M=!1;const re=V._enterCb=Fe=>{M||(M=!0,Fe?se(Ie,[V]):se(ee,[V]),be.delayedLeave&&be.delayedLeave(),V._enterCb=void 0)};ie?ge(ie,[V,re]):re()},leave(V,ie){const ee=String(t.key);if(V._enterCb&&V._enterCb(!0),n.isUnmounting)return ie();se(h,[V]);let Ie=!1;const M=V._leaveCb=re=>{Ie||(Ie=!0,ie(),re?se(m,[V]):se(_,[V]),V._leaveCb=void 0,x[ee]===t&&delete x[ee])};x[ee]=t,d?ge(d,[V,M]):M()},clone(V){return qo(V,e,n,s)}};return be}function _o(t){if($r(t))return t=rn(t),t.children=null,t}function dc(t){return $r(t)?t.children?t.children[0]:void 0:t}function Yo(t,e){t.shapeFlag&6&&t.component?Yo(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Gh(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===mt?(o.patchFlag&128&&i++,s=s.concat(Gh(o.children,e,a))):(e||o.type!==ct)&&s.push(a!=null?rn(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function zh(t,e){return K(t)?(()=>we({name:t.name},e,{setup:t}))():t}const Yi=t=>!!t.type.__asyncLoader,$r=t=>t.type.__isKeepAlive;function ug(t,e){qh(t,"a",e)}function hg(t,e){qh(t,"da",e)}function qh(t,e,n=Pe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(jr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)$r(i.parent.vnode)&&dg(s,e,n,i),i=i.parent}}function dg(t,e,n,s){const i=jr(e,t,s,!0);Xh(()=>{Da(s[e],i)},n)}function jr(t,e,n=Pe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;bs(),cs(n);const a=Xe(e,n,t,o);return Cn(),Is(),a});return s?i.unshift(r):i.push(r),r}}const Lt=t=>(e,n=Pe)=>(!ci||t==="sp")&&jr(t,(...s)=>e(...s),n),Yh=Lt("bm"),Qh=Lt("m"),fg=Lt("bu"),pg=Lt("u"),Jh=Lt("bum"),Xh=Lt("um"),_g=Lt("sp"),gg=Lt("rtg"),mg=Lt("rtc");function vg(t,e=Pe){jr("ec",t,e)}const Zh="components";function yg(t,e){return wg(Zh,t,!0,e)||t}const Eg=Symbol.for("v-ndc");function wg(t,e,n=!0,s=!1){const i=qe||Pe;if(i){const r=i.type;if(t===Zh){const a=Zg(r,!1);if(a&&(a===e||a===Ct(e)||a===Fr(Ct(e))))return r}const o=fc(i[t]||r[t],e)||fc(i.appContext[t],e);return!o&&s?r:o}}function fc(t,e){return t&&(t[e]||t[Ct(e)]||t[Fr(Ct(e))])}function US(t,e,n,s){let i;const r=n&&n[s];if(B(t)||Ce(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(_e(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const Qo=t=>t?ud(t)?Gr(t)||t.proxy:Qo(t.parent):null,qs=we(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Qo(t.parent),$root:t=>Qo(t.root),$emit:t=>t.emit,$options:t=>qa(t),$forceUpdate:t=>t.f||(t.f=()=>za(t.update)),$nextTick:t=>t.n||(t.n=Fh.bind(t.proxy)),$watch:t=>og.bind(t)}),go=(t,e)=>t!==pe&&!t.__isScriptSetup&&J(t,e),Cg={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(go(s,e))return o[e]=1,s[e];if(i!==pe&&J(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&J(c,e))return o[e]=3,r[e];if(n!==pe&&J(n,e))return o[e]=4,n[e];Jo&&(o[e]=0)}}const u=qs[e];let h,d;if(u)return e==="$attrs"&&Ke(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==pe&&J(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,J(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return go(i,e)?(i[e]=n,!0):s!==pe&&J(s,e)?(s[e]=n,!0):J(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==pe&&J(t,o)||go(e,o)||(a=r[0])&&J(a,o)||J(s,o)||J(qs,o)||J(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:J(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function pc(t){return B(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Jo=!0;function bg(t){const e=qa(t),n=t.proxy,s=t.ctx;Jo=!1,e.beforeCreate&&_c(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:_,updated:m,activated:w,deactivated:A,beforeDestroy:N,beforeUnmount:O,destroyed:H,unmounted:x,render:se,renderTracked:ge,renderTriggered:be,errorCaptured:V,serverPrefetch:ie,expose:ee,inheritAttrs:Ie,components:M,directives:re,filters:Fe}=e;if(c&&Ig(c,s,null),o)for(const ue in o){const te=o[ue];K(te)&&(s[ue]=te.bind(n))}if(i){const ue=i.call(n,n);_e(ue)&&(t.data=bi(ue))}if(Jo=!0,r)for(const ue in r){const te=r[ue],St=K(te)?te.bind(n,n):K(te.get)?te.get.bind(n,n):lt,Ft=!K(te)&&K(te.set)?te.set.bind(n):lt,pt=Qe({get:St,set:Ft});Object.defineProperty(s,ue,{enumerable:!0,configurable:!0,get:()=>pt.value,set:$e=>pt.value=$e})}if(a)for(const ue in a)ed(a[ue],s,n,ue);if(l){const ue=K(l)?l.call(n):l;Reflect.ownKeys(ue).forEach(te=>{Qi(te,ue[te])})}u&&_c(u,t,"c");function ye(ue,te){B(te)?te.forEach(St=>ue(St.bind(n))):te&&ue(te.bind(n))}if(ye(Yh,h),ye(Qh,d),ye(fg,_),ye(pg,m),ye(ug,w),ye(hg,A),ye(vg,V),ye(mg,ge),ye(gg,be),ye(Jh,O),ye(Xh,x),ye(_g,ie),B(ee))if(ee.length){const ue=t.exposed||(t.exposed={});ee.forEach(te=>{Object.defineProperty(ue,te,{get:()=>n[te],set:St=>n[te]=St})})}else t.exposed||(t.exposed={});se&&t.render===lt&&(t.render=se),Ie!=null&&(t.inheritAttrs=Ie),M&&(t.components=M),re&&(t.directives=re)}function Ig(t,e,n=lt){B(t)&&(t=Xo(t));for(const s in t){const i=t[s];let r;_e(i)?"default"in i?r=Ze(i.from||s,i.default,!0):r=Ze(i.from||s):r=Ze(i),Me(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function _c(t,e,n){Xe(B(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ed(t,e,n,s){const i=s.includes(".")?jh(n,s):()=>n[s];if(Ce(t)){const r=e[t];K(r)&&ns(i,r)}else if(K(t))ns(i,t.bind(n));else if(_e(t))if(B(t))t.forEach(r=>ed(r,e,n,s));else{const r=K(t.handler)?t.handler.bind(n):e[t.handler];K(r)&&ns(i,r,t)}}function qa(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>or(l,c,o,!0)),or(l,e,o)),_e(e)&&r.set(e,l),l}function or(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&or(t,r,n,!0),i&&i.forEach(o=>or(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Tg[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Tg={data:gc,props:mc,emits:mc,methods:Vs,computed:Vs,beforeCreate:Ue,created:Ue,beforeMount:Ue,mounted:Ue,beforeUpdate:Ue,updated:Ue,beforeDestroy:Ue,beforeUnmount:Ue,destroyed:Ue,unmounted:Ue,activated:Ue,deactivated:Ue,errorCaptured:Ue,serverPrefetch:Ue,components:Vs,directives:Vs,watch:Rg,provide:gc,inject:Sg};function gc(t,e){return e?t?function(){return we(K(t)?t.call(this,this):t,K(e)?e.call(this,this):e)}:e:t}function Sg(t,e){return Vs(Xo(t),Xo(e))}function Xo(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ue(t,e){return t?[...new Set([].concat(t,e))]:e}function Vs(t,e){return t?we(Object.create(null),t,e):e}function mc(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:we(Object.create(null),pc(t),pc(e??{})):e}function Rg(t,e){if(!t)return e;if(!e)return t;const n=we(Object.create(null),t);for(const s in e)n[s]=Ue(t[s],e[s]);return n}function td(){return{app:null,config:{isNativeTag:Qp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ag=0;function Pg(t,e){return function(s,i=null){K(s)||(s=we({},s)),i!=null&&!_e(i)&&(i=null);const r=td(),o=new Set;let a=!1;const l=r.app={_uid:Ag++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:sm,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&K(c.install)?(o.add(c),c.install(l,...u)):K(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=We(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Gr(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){ar=l;try{return c()}finally{ar=null}}};return l}}let ar=null;function Qi(t,e){if(Pe){let n=Pe.provides;const s=Pe.parent&&Pe.parent.provides;s===n&&(n=Pe.provides=Object.create(s)),n[t]=e}}function Ze(t,e,n=!1){const s=Pe||qe;if(s||ar){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:ar._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&K(e)?e.call(s&&s.proxy):e}}function Ng(t,e,n,s=!1){const i={},r={};sr(r,Kr,1),t.propsDefaults=Object.create(null),nd(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Ah(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function kg(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=Z(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Br(t.emitsOptions,d))continue;const _=e[d];if(l)if(J(r,d))_!==r[d]&&(r[d]=_,c=!0);else{const m=Ct(d);i[m]=Zo(l,a,m,_,t,!1)}else _!==r[d]&&(r[d]=_,c=!0)}}}else{nd(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!J(e,h)&&((u=Cs(h))===h||!J(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Zo(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!J(e,h))&&(delete r[h],c=!0)}c&&xt(t,"set","$attrs")}function nd(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(zi(l))continue;const c=e[l];let u;i&&J(i,u=Ct(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Br(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=Z(n),c=a||pe;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Zo(i,l,h,c[h],t,!J(c,h))}}return o}function Zo(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=J(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&K(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(cs(i),s=c[n]=l.call(null,e),Cn())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Cs(n))&&(s=!0))}return s}function sd(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!K(t)){const u=h=>{l=!0;const[d,_]=sd(h,e,!0);we(o,d),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return _e(t)&&s.set(t,Xn),Xn;if(B(r))for(let u=0;u<r.length;u++){const h=Ct(r[u]);vc(h)&&(o[h]=pe)}else if(r)for(const u in r){const h=Ct(u);if(vc(h)){const d=r[u],_=o[h]=B(d)||K(d)?{type:d}:we({},d);if(_){const m=wc(Boolean,_.type),w=wc(String,_.type);_[0]=m>-1,_[1]=w<0||m<w,(m>-1||J(_,"default"))&&a.push(h)}}}const c=[o,a];return _e(t)&&s.set(t,c),c}function vc(t){return t[0]!=="$"}function yc(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Ec(t,e){return yc(t)===yc(e)}function wc(t,e){return B(e)?e.findIndex(n=>Ec(n,t)):K(e)&&Ec(e,t)?0:-1}const id=t=>t[0]==="_"||t==="$stable",Ya=t=>B(t)?t.map(vt):[vt(t)],Og=(t,e,n)=>{if(e._n)return e;const s=Z_((...i)=>Ya(e(...i)),n);return s._c=!1,s},rd=(t,e,n)=>{const s=t._ctx;for(const i in t){if(id(i))continue;const r=t[i];if(K(r))e[i]=Og(i,r,s);else if(r!=null){const o=Ya(r);e[i]=()=>o}}},od=(t,e)=>{const n=Ya(e);t.slots.default=()=>n},xg=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Z(e),sr(e,"_",n)):rd(e,t.slots={})}else t.slots={},e&&od(t,e);sr(t.slots,Kr,1)},Dg=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=pe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(we(i,e),!n&&a===1&&delete i._):(r=!e.$stable,rd(e,i)),o=e}else e&&(od(t,e),o={default:1});if(r)for(const a in i)!id(a)&&!(a in o)&&delete i[a]};function ea(t,e,n,s,i=!1){if(B(t)){t.forEach((d,_)=>ea(d,e&&(B(e)?e[_]:e),n,s,i));return}if(Yi(s)&&!i)return;const r=s.shapeFlag&4?Gr(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===pe?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Ce(c)?(u[c]=null,J(h,c)&&(h[c]=null)):Me(c)&&(c.value=null)),K(l))Jt(l,a,12,[o,u]);else{const d=Ce(l),_=Me(l);if(d||_){const m=()=>{if(t.f){const w=d?J(h,l)?h[l]:u[l]:l.value;i?B(w)&&Da(w,r):B(w)?w.includes(r)||w.push(r):d?(u[l]=[r],J(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,J(h,l)&&(h[l]=o)):_&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,je(m,n)):m()}}}const je=rg;function Mg(t){return Lg(t)}function Lg(t,e){const n=$o();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:_=lt,insertStaticContent:m}=t,w=(f,p,g,v=null,E=null,C=null,P=!1,T=null,S=!!p.dynamicChildren)=>{if(f===p)return;f&&!mn(f,p)&&(v=y(f),$e(f,E,C,!0),f=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:b,ref:F,shapeFlag:D}=p;switch(b){case Vr:A(f,p,g,v);break;case ct:N(f,p,g,v);break;case Ji:f==null&&O(p,g,v,P);break;case mt:M(f,p,g,v,E,C,P,T,S);break;default:D&1?se(f,p,g,v,E,C,P,T,S):D&6?re(f,p,g,v,E,C,P,T,S):(D&64||D&128)&&b.process(f,p,g,v,E,C,P,T,S,R)}F!=null&&E&&ea(F,f&&f.ref,C,p||f,!p)},A=(f,p,g,v)=>{if(f==null)s(p.el=a(p.children),g,v);else{const E=p.el=f.el;p.children!==f.children&&c(E,p.children)}},N=(f,p,g,v)=>{f==null?s(p.el=l(p.children||""),g,v):p.el=f.el},O=(f,p,g,v)=>{[f.el,f.anchor]=m(f.children,p,g,v,f.el,f.anchor)},H=({el:f,anchor:p},g,v)=>{let E;for(;f&&f!==p;)E=d(f),s(f,g,v),f=E;s(p,g,v)},x=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),i(f),f=g;i(p)},se=(f,p,g,v,E,C,P,T,S)=>{P=P||p.type==="svg",f==null?ge(p,g,v,E,C,P,T,S):ie(f,p,E,C,P,T,S)},ge=(f,p,g,v,E,C,P,T)=>{let S,b;const{type:F,props:D,shapeFlag:U,transition:j,dirs:Y}=f;if(S=f.el=o(f.type,C,D&&D.is,D),U&8?u(S,f.children):U&16&&V(f.children,S,null,v,E,C&&F!=="foreignObject",P,T),Y&&un(f,null,v,"created"),be(S,f,f.scopeId,P,v),D){for(const ae in D)ae!=="value"&&!zi(ae)&&r(S,ae,null,D[ae],C,f.children,v,E,xe);"value"in D&&r(S,"value",null,D.value),(b=D.onVnodeBeforeMount)&&gt(b,v,f)}Y&&un(f,null,v,"beforeMount");const he=(!E||E&&!E.pendingBranch)&&j&&!j.persisted;he&&j.beforeEnter(S),s(S,p,g),((b=D&&D.onVnodeMounted)||he||Y)&&je(()=>{b&&gt(b,v,f),he&&j.enter(S),Y&&un(f,null,v,"mounted")},E)},be=(f,p,g,v,E)=>{if(g&&_(f,g),v)for(let C=0;C<v.length;C++)_(f,v[C]);if(E){let C=E.subTree;if(p===C){const P=E.vnode;be(f,P,P.scopeId,P.slotScopeIds,E.parent)}}},V=(f,p,g,v,E,C,P,T,S=0)=>{for(let b=S;b<f.length;b++){const F=f[b]=T?jt(f[b]):vt(f[b]);w(null,F,p,g,v,E,C,P,T)}},ie=(f,p,g,v,E,C,P)=>{const T=p.el=f.el;let{patchFlag:S,dynamicChildren:b,dirs:F}=p;S|=f.patchFlag&16;const D=f.props||pe,U=p.props||pe;let j;g&&hn(g,!1),(j=U.onVnodeBeforeUpdate)&&gt(j,g,p,f),F&&un(p,f,g,"beforeUpdate"),g&&hn(g,!0);const Y=E&&p.type!=="foreignObject";if(b?ee(f.dynamicChildren,b,T,g,v,Y,C):P||te(f,p,T,null,g,v,Y,C,!1),S>0){if(S&16)Ie(T,p,D,U,g,v,E);else if(S&2&&D.class!==U.class&&r(T,"class",null,U.class,E),S&4&&r(T,"style",D.style,U.style,E),S&8){const he=p.dynamicProps;for(let ae=0;ae<he.length;ae++){const Ee=he[ae],tt=D[Ee],Wn=U[Ee];(Wn!==tt||Ee==="value")&&r(T,Ee,tt,Wn,E,f.children,g,v,xe)}}S&1&&f.children!==p.children&&u(T,p.children)}else!P&&b==null&&Ie(T,p,D,U,g,v,E);((j=U.onVnodeUpdated)||F)&&je(()=>{j&&gt(j,g,p,f),F&&un(p,f,g,"updated")},v)},ee=(f,p,g,v,E,C,P)=>{for(let T=0;T<p.length;T++){const S=f[T],b=p[T],F=S.el&&(S.type===mt||!mn(S,b)||S.shapeFlag&70)?h(S.el):g;w(S,b,F,null,v,E,C,P,!0)}},Ie=(f,p,g,v,E,C,P)=>{if(g!==v){if(g!==pe)for(const T in g)!zi(T)&&!(T in v)&&r(f,T,g[T],null,P,p.children,E,C,xe);for(const T in v){if(zi(T))continue;const S=v[T],b=g[T];S!==b&&T!=="value"&&r(f,T,b,S,P,p.children,E,C,xe)}"value"in v&&r(f,"value",g.value,v.value)}},M=(f,p,g,v,E,C,P,T,S)=>{const b=p.el=f?f.el:a(""),F=p.anchor=f?f.anchor:a("");let{patchFlag:D,dynamicChildren:U,slotScopeIds:j}=p;j&&(T=T?T.concat(j):j),f==null?(s(b,g,v),s(F,g,v),V(p.children,g,F,E,C,P,T,S)):D>0&&D&64&&U&&f.dynamicChildren?(ee(f.dynamicChildren,U,g,E,C,P,T),(p.key!=null||E&&p===E.subTree)&&ad(f,p,!0)):te(f,p,g,F,E,C,P,T,S)},re=(f,p,g,v,E,C,P,T,S)=>{p.slotScopeIds=T,f==null?p.shapeFlag&512?E.ctx.activate(p,g,v,P,S):Fe(p,g,v,E,C,P,S):Tt(f,p,S)},Fe=(f,p,g,v,E,C,P)=>{const T=f.component=zg(f,v,E);if($r(f)&&(T.ctx.renderer=R),Yg(T),T.asyncDep){if(E&&E.registerDep(T,ye),!f.el){const S=T.subTree=We(ct);N(null,S,p,g)}return}ye(T,f,p,g,E,C,P)},Tt=(f,p,g)=>{const v=p.component=f.component;if(ng(f,p,g))if(v.asyncDep&&!v.asyncResolved){ue(v,p,g);return}else v.next=p,z_(v.update),v.update();else p.el=f.el,v.vnode=p},ye=(f,p,g,v,E,C,P)=>{const T=()=>{if(f.isMounted){let{next:F,bu:D,u:U,parent:j,vnode:Y}=f,he=F,ae;hn(f,!1),F?(F.el=Y.el,ue(f,F,P)):F=Y,D&&qi(D),(ae=F.props&&F.props.onVnodeBeforeUpdate)&&gt(ae,j,F,Y),hn(f,!0);const Ee=po(f),tt=f.subTree;f.subTree=Ee,w(tt,Ee,h(tt.el),y(tt),f,E,C),F.el=Ee.el,he===null&&sg(f,Ee.el),U&&je(U,E),(ae=F.props&&F.props.onVnodeUpdated)&&je(()=>gt(ae,j,F,Y),E)}else{let F;const{el:D,props:U}=p,{bm:j,m:Y,parent:he}=f,ae=Yi(p);if(hn(f,!1),j&&qi(j),!ae&&(F=U&&U.onVnodeBeforeMount)&&gt(F,he,p),hn(f,!0),D&&ne){const Ee=()=>{f.subTree=po(f),ne(D,f.subTree,f,E,null)};ae?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Ee()):Ee()}else{const Ee=f.subTree=po(f);w(null,Ee,g,v,f,E,C),p.el=Ee.el}if(Y&&je(Y,E),!ae&&(F=U&&U.onVnodeMounted)){const Ee=p;je(()=>gt(F,he,Ee),E)}(p.shapeFlag&256||he&&Yi(he.vnode)&&he.vnode.shapeFlag&256)&&f.a&&je(f.a,E),f.isMounted=!0,p=g=v=null}},S=f.effect=new Ba(T,()=>za(b),f.scope),b=f.update=()=>S.run();b.id=f.uid,hn(f,!0),b()},ue=(f,p,g)=>{p.component=f;const v=f.vnode.props;f.vnode=p,f.next=null,kg(f,p.props,v,g),Dg(f,p.children,g),bs(),uc(),Is()},te=(f,p,g,v,E,C,P,T,S=!1)=>{const b=f&&f.children,F=f?f.shapeFlag:0,D=p.children,{patchFlag:U,shapeFlag:j}=p;if(U>0){if(U&128){Ft(b,D,g,v,E,C,P,T,S);return}else if(U&256){St(b,D,g,v,E,C,P,T,S);return}}j&8?(F&16&&xe(b,E,C),D!==b&&u(g,D)):F&16?j&16?Ft(b,D,g,v,E,C,P,T,S):xe(b,E,C,!0):(F&8&&u(g,""),j&16&&V(D,g,v,E,C,P,T,S))},St=(f,p,g,v,E,C,P,T,S)=>{f=f||Xn,p=p||Xn;const b=f.length,F=p.length,D=Math.min(b,F);let U;for(U=0;U<D;U++){const j=p[U]=S?jt(p[U]):vt(p[U]);w(f[U],j,g,null,E,C,P,T,S)}b>F?xe(f,E,C,!0,!1,D):V(p,g,v,E,C,P,T,S,D)},Ft=(f,p,g,v,E,C,P,T,S)=>{let b=0;const F=p.length;let D=f.length-1,U=F-1;for(;b<=D&&b<=U;){const j=f[b],Y=p[b]=S?jt(p[b]):vt(p[b]);if(mn(j,Y))w(j,Y,g,null,E,C,P,T,S);else break;b++}for(;b<=D&&b<=U;){const j=f[D],Y=p[U]=S?jt(p[U]):vt(p[U]);if(mn(j,Y))w(j,Y,g,null,E,C,P,T,S);else break;D--,U--}if(b>D){if(b<=U){const j=U+1,Y=j<F?p[j].el:v;for(;b<=U;)w(null,p[b]=S?jt(p[b]):vt(p[b]),g,Y,E,C,P,T,S),b++}}else if(b>U)for(;b<=D;)$e(f[b],E,C,!0),b++;else{const j=b,Y=b,he=new Map;for(b=Y;b<=U;b++){const ze=p[b]=S?jt(p[b]):vt(p[b]);ze.key!=null&&he.set(ze.key,b)}let ae,Ee=0;const tt=U-Y+1;let Wn=!1,Zl=0;const Ms=new Array(tt);for(b=0;b<tt;b++)Ms[b]=0;for(b=j;b<=D;b++){const ze=f[b];if(Ee>=tt){$e(ze,E,C,!0);continue}let _t;if(ze.key!=null)_t=he.get(ze.key);else for(ae=Y;ae<=U;ae++)if(Ms[ae-Y]===0&&mn(ze,p[ae])){_t=ae;break}_t===void 0?$e(ze,E,C,!0):(Ms[_t-Y]=b+1,_t>=Zl?Zl=_t:Wn=!0,w(ze,p[_t],g,null,E,C,P,T,S),Ee++)}const ec=Wn?Fg(Ms):Xn;for(ae=ec.length-1,b=tt-1;b>=0;b--){const ze=Y+b,_t=p[ze],tc=ze+1<F?p[ze+1].el:v;Ms[b]===0?w(null,_t,g,tc,E,C,P,T,S):Wn&&(ae<0||b!==ec[ae]?pt(_t,g,tc,2):ae--)}}},pt=(f,p,g,v,E=null)=>{const{el:C,type:P,transition:T,children:S,shapeFlag:b}=f;if(b&6){pt(f.component.subTree,p,g,v);return}if(b&128){f.suspense.move(p,g,v);return}if(b&64){P.move(f,p,g,R);return}if(P===mt){s(C,p,g);for(let D=0;D<S.length;D++)pt(S[D],p,g,v);s(f.anchor,p,g);return}if(P===Ji){H(f,p,g);return}if(v!==2&&b&1&&T)if(v===0)T.beforeEnter(C),s(C,p,g),je(()=>T.enter(C),E);else{const{leave:D,delayLeave:U,afterLeave:j}=T,Y=()=>s(C,p,g),he=()=>{D(C,()=>{Y(),j&&j()})};U?U(C,Y,he):he()}else s(C,p,g)},$e=(f,p,g,v=!1,E=!1)=>{const{type:C,props:P,ref:T,children:S,dynamicChildren:b,shapeFlag:F,patchFlag:D,dirs:U}=f;if(T!=null&&ea(T,null,g,f,!0),F&256){p.ctx.deactivate(f);return}const j=F&1&&U,Y=!Yi(f);let he;if(Y&&(he=P&&P.onVnodeBeforeUnmount)&&gt(he,p,f),F&6)Li(f.component,g,v);else{if(F&128){f.suspense.unmount(g,v);return}j&&un(f,null,p,"beforeUnmount"),F&64?f.type.remove(f,p,g,E,R,v):b&&(C!==mt||D>0&&D&64)?xe(b,p,g,!1,!0):(C===mt&&D&384||!E&&F&16)&&xe(S,p,g),v&&Fn(f)}(Y&&(he=P&&P.onVnodeUnmounted)||j)&&je(()=>{he&&gt(he,p,f),j&&un(f,null,p,"unmounted")},g)},Fn=f=>{const{type:p,el:g,anchor:v,transition:E}=f;if(p===mt){Un(g,v);return}if(p===Ji){x(f);return}const C=()=>{i(g),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(f.shapeFlag&1&&E&&!E.persisted){const{leave:P,delayLeave:T}=E,S=()=>P(g,C);T?T(f.el,C,S):S()}else C()},Un=(f,p)=>{let g;for(;f!==p;)g=d(f),i(f),f=g;i(p)},Li=(f,p,g)=>{const{bum:v,scope:E,update:C,subTree:P,um:T}=f;v&&qi(v),E.stop(),C&&(C.active=!1,$e(P,f,p,g)),T&&je(T,p),je(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},xe=(f,p,g,v=!1,E=!1,C=0)=>{for(let P=C;P<f.length;P++)$e(f[P],p,g,v,E)},y=f=>f.shapeFlag&6?y(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),k=(f,p,g)=>{f==null?p._vnode&&$e(p._vnode,null,null,!0):w(p._vnode||null,f,p,null,null,null,g),uc(),Wh(),p._vnode=f},R={p:w,um:$e,m:pt,r:Fn,mt:Fe,mc:V,pc:te,pbc:ee,n:y,o:t};let L,ne;return e&&([L,ne]=e(R)),{render:k,hydrate:L,createApp:Pg(k,L)}}function hn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ad(t,e,n=!1){const s=t.children,i=e.children;if(B(s)&&B(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=jt(i[r]),a.el=o.el),n||ad(o,a)),a.type===Vr&&(a.el=o.el)}}function Fg(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Ug=t=>t.__isTeleport,mt=Symbol.for("v-fgt"),Vr=Symbol.for("v-txt"),ct=Symbol.for("v-cmt"),Ji=Symbol.for("v-stc"),Ys=[];let ot=null;function Ks(t=!1){Ys.push(ot=t?null:[])}function Wg(){Ys.pop(),ot=Ys[Ys.length-1]||null}let li=1;function Cc(t){li+=t}function ld(t){return t.dynamicChildren=li>0?ot||Xn:null,Wg(),li>0&&ot&&ot.push(t),t}function ji(t,e,n,s,i,r){return ld(Q(t,e,n,s,i,r,!0))}function Bg(t,e,n,s,i){return ld(We(t,e,n,s,i,!0))}function ta(t){return t?t.__v_isVNode===!0:!1}function mn(t,e){return t.type===e.type&&t.key===e.key}const Kr="__vInternal",cd=({key:t})=>t??null,Xi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ce(t)||Me(t)||K(t)?{i:qe,r:t,k:e,f:!!n}:t:null);function Q(t,e=null,n=null,s=0,i=null,r=t===mt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&cd(e),ref:e&&Xi(e),scopeId:Hr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:qe};return a?(Qa(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Ce(n)?8:16),li>0&&!o&&ot&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&ot.push(l),l}const We=Hg;function Hg(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Eg)&&(t=ct),ta(t)){const a=rn(t,e,!0);return n&&Qa(a,n),li>0&&!r&&ot&&(a.shapeFlag&6?ot[ot.indexOf(t)]=a:ot.push(a)),a.patchFlag|=-2,a}if(em(t)&&(t=t.__vccOpts),e){e=$g(e);let{class:a,style:l}=e;a&&!Ce(a)&&(e.class=Ua(a)),_e(l)&&(Nh(l)&&!B(l)&&(l=we({},l)),e.style=Fa(l))}const o=Ce(t)?1:ig(t)?128:Ug(t)?64:_e(t)?4:K(t)?2:0;return Q(t,e,n,s,i,o,r,!0)}function $g(t){return t?Nh(t)||Kr in t?we({},t):t:null}function rn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?Vg(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&cd(a),ref:e&&e.ref?n&&i?B(i)?i.concat(Xi(e)):[i,Xi(e)]:Xi(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==mt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&rn(t.ssContent),ssFallback:t.ssFallback&&rn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function jg(t=" ",e=0){return We(Vr,null,t,e)}function WS(t,e){const n=We(Ji,null,t);return n.staticCount=e,n}function BS(t="",e=!1){return e?(Ks(),Bg(ct,null,t)):We(ct,null,t)}function vt(t){return t==null||typeof t=="boolean"?We(ct):B(t)?We(mt,null,t.slice()):typeof t=="object"?jt(t):We(Vr,null,String(t))}function jt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:rn(t)}function Qa(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Qa(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Kr in e)?e._ctx=qe:i===3&&qe&&(qe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else K(e)?(e={default:e,_ctx:qe},n=32):(e=String(e),s&64?(n=16,e=[jg(e)]):n=8);t.children=e,t.shapeFlag|=n}function Vg(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Ua([e.class,s.class]));else if(i==="style")e.style=Fa([e.style,s.style]);else if(Dr(i)){const r=e[i],o=s[i];o&&r!==o&&!(B(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function gt(t,e,n,s=null){Xe(t,e,7,[n,s])}const Kg=td();let Gg=0;function zg(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Kg,r={uid:Gg++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new mh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sd(s,i),emitsOptions:Hh(s,i),emit:null,emitted:null,propsDefaults:pe,inheritAttrs:s.inheritAttrs,ctx:pe,data:pe,props:pe,attrs:pe,slots:pe,refs:pe,setupState:pe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Q_.bind(null,r),t.ce&&t.ce(r),r}let Pe=null;const qg=()=>Pe||qe;let Ja,Bn,bc="__VUE_INSTANCE_SETTERS__";(Bn=$o()[bc])||(Bn=$o()[bc]=[]),Bn.push(t=>Pe=t),Ja=t=>{Bn.length>1?Bn.forEach(e=>e(t)):Bn[0](t)};const cs=t=>{Ja(t),t.scope.on()},Cn=()=>{Pe&&Pe.scope.off(),Ja(null)};function ud(t){return t.vnode.shapeFlag&4}let ci=!1;function Yg(t,e=!1){ci=e;const{props:n,children:s}=t.vnode,i=ud(t);Ng(t,n,i,e),xg(t,s);const r=i?Qg(t,e):void 0;return ci=!1,r}function Qg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=kh(new Proxy(t.ctx,Cg));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Xg(t):null;cs(t),bs();const r=Jt(s,t,0,[t.props,i]);if(Is(),Cn(),dh(r)){if(r.then(Cn,Cn),e)return r.then(o=>{Ic(t,o,e)}).catch(o=>{Wr(o,t,0)});t.asyncDep=r}else Ic(t,r,e)}else hd(t,e)}function Ic(t,e,n){K(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:_e(e)&&(t.setupState=Mh(e)),hd(t,n)}let Tc;function hd(t,e,n){const s=t.type;if(!t.render){if(!e&&Tc&&!s.render){const i=s.template||qa(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=we(we({isCustomElement:r,delimiters:a},o),l);s.render=Tc(i,c)}}t.render=s.render||lt}cs(t),bs(),bg(t),Is(),Cn()}function Jg(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ke(t,"get","$attrs"),e[n]}}))}function Xg(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Jg(t)},slots:t.slots,emit:t.emit,expose:e}}function Gr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Mh(kh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in qs)return qs[n](t)},has(e,n){return n in e||n in qs}}))}function Zg(t,e=!0){return K(t)?t.displayName||t.name:t.name||e&&t.__name}function em(t){return K(t)&&"__vccOpts"in t}const Qe=(t,e)=>V_(t,e,ci);function Xa(t,e,n){const s=arguments.length;return s===2?_e(e)&&!B(e)?ta(e)?We(t,null,[e]):We(t,e):We(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ta(n)&&(n=[n]),We(t,e,n))}const tm=Symbol.for("v-scx"),nm=()=>Ze(tm),sm="3.3.4",im="http://www.w3.org/2000/svg",vn=typeof document<"u"?document:null,Sc=vn&&vn.createElement("template"),rm={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?vn.createElementNS(im,t):vn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>vn.createTextNode(t),createComment:t=>vn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>vn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Sc.innerHTML=s?`<svg>${t}</svg>`:t;const a=Sc.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function om(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function am(t,e,n){const s=t.style,i=Ce(n);if(n&&!i){if(e&&!Ce(e))for(const r in e)n[r]==null&&na(s,r,"");for(const r in n)na(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Rc=/\s*!important$/;function na(t,e,n){if(B(n))n.forEach(s=>na(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=lm(t,e);Rc.test(n)?t.setProperty(Cs(s),n.replace(Rc,""),"important"):t[s]=n}}const Ac=["Webkit","Moz","ms"],mo={};function lm(t,e){const n=mo[e];if(n)return n;let s=Ct(e);if(s!=="filter"&&s in t)return mo[e]=s;s=Fr(s);for(let i=0;i<Ac.length;i++){const r=Ac[i]+s;if(r in t)return mo[e]=r}return e}const Pc="http://www.w3.org/1999/xlink";function cm(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Pc,e.slice(6,e.length)):t.setAttributeNS(Pc,e,n);else{const r=l_(e);n==null||r&&!_h(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function um(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=_h(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Gn(t,e,n,s){t.addEventListener(e,n,s)}function hm(t,e,n,s){t.removeEventListener(e,n,s)}function dm(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=fm(e);if(s){const c=r[e]=gm(s,i);Gn(t,a,c,l)}else o&&(hm(t,a,o,l),r[e]=void 0)}}const Nc=/(?:Once|Passive|Capture)$/;function fm(t){let e;if(Nc.test(t)){e={};let s;for(;s=t.match(Nc);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Cs(t.slice(2)),e]}let vo=0;const pm=Promise.resolve(),_m=()=>vo||(pm.then(()=>vo=0),vo=Date.now());function gm(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Xe(mm(s,n.value),e,5,[s])};return n.value=t,n.attached=_m(),n}function mm(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const kc=/^on[a-z]/,vm=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?om(t,s,i):e==="style"?am(t,n,s):Dr(e)?xa(e)||dm(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ym(t,e,s,i))?um(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),cm(t,e,s,i))};function ym(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&kc.test(e)&&K(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||kc.test(e)&&Ce(n)?!1:e in t}const Wt="transition",Ls="animation",dd=(t,{slots:e})=>Xa(cg,Em(t),e);dd.displayName="Transition";const fd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};dd.props=we({},Vh,fd);const dn=(t,e=[])=>{B(t)?t.forEach(n=>n(...e)):t&&t(...e)},Oc=t=>t?B(t)?t.some(e=>e.length>1):t.length>1:!1;function Em(t){const e={};for(const M in t)M in fd||(e[M]=t[M]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,m=wm(i),w=m&&m[0],A=m&&m[1],{onBeforeEnter:N,onEnter:O,onEnterCancelled:H,onLeave:x,onLeaveCancelled:se,onBeforeAppear:ge=N,onAppear:be=O,onAppearCancelled:V=H}=e,ie=(M,re,Fe)=>{fn(M,re?u:a),fn(M,re?c:o),Fe&&Fe()},ee=(M,re)=>{M._isLeaving=!1,fn(M,h),fn(M,_),fn(M,d),re&&re()},Ie=M=>(re,Fe)=>{const Tt=M?be:O,ye=()=>ie(re,M,Fe);dn(Tt,[re,ye]),xc(()=>{fn(re,M?l:r),Bt(re,M?u:a),Oc(Tt)||Dc(re,s,w,ye)})};return we(e,{onBeforeEnter(M){dn(N,[M]),Bt(M,r),Bt(M,o)},onBeforeAppear(M){dn(ge,[M]),Bt(M,l),Bt(M,c)},onEnter:Ie(!1),onAppear:Ie(!0),onLeave(M,re){M._isLeaving=!0;const Fe=()=>ee(M,re);Bt(M,h),Im(),Bt(M,d),xc(()=>{M._isLeaving&&(fn(M,h),Bt(M,_),Oc(x)||Dc(M,s,A,Fe))}),dn(x,[M,Fe])},onEnterCancelled(M){ie(M,!1),dn(H,[M])},onAppearCancelled(M){ie(M,!0),dn(V,[M])},onLeaveCancelled(M){ee(M),dn(se,[M])}})}function wm(t){if(t==null)return null;if(_e(t))return[yo(t.enter),yo(t.leave)];{const e=yo(t);return[e,e]}}function yo(t){return n_(t)}function Bt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function fn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function xc(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Cm=0;function Dc(t,e,n,s){const i=t._endId=++Cm,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=bm(t,e);if(!o)return s();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),r()},d=_=>{_.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function bm(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),i=s(`${Wt}Delay`),r=s(`${Wt}Duration`),o=Mc(i,r),a=s(`${Ls}Delay`),l=s(`${Ls}Duration`),c=Mc(a,l);let u=null,h=0,d=0;e===Wt?o>0&&(u=Wt,h=o,d=r.length):e===Ls?c>0&&(u=Ls,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?Wt:Ls:null,d=u?u===Wt?r.length:l.length:0);const _=u===Wt&&/\b(transform|all)(,|$)/.test(s(`${Wt}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:_}}function Mc(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Lc(n)+Lc(t[s])))}function Lc(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Im(){return document.body.offsetHeight}const Fc=t=>{const e=t.props["onUpdate:modelValue"]||!1;return B(e)?n=>qi(e,n):e};function Tm(t){t.target.composing=!0}function Uc(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const HS={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Fc(i);const r=s||i.props&&i.props.type==="number";Gn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Ho(a)),t._assign(a)}),n&&Gn(t,"change",()=>{t.value=t.value.trim()}),e||(Gn(t,"compositionstart",Tm),Gn(t,"compositionend",Uc),Gn(t,"change",Uc))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Fc(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Ho(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Sm=["ctrl","shift","alt","meta"],Rm={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Sm.some(n=>t[`${n}Key`]&&!e.includes(n))},Hn=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=Rm[e[i]];if(r&&r(n,e))return}return t(n,...s)},$S={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Fs(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Fs(t,!0),s.enter(t)):s.leave(t,()=>{Fs(t,!1)}):Fs(t,e))},beforeUnmount(t,{value:e}){Fs(t,e)}};function Fs(t,e){t.style.display=e?t._vod:"none"}const Am=we({patchProp:vm},rm);let Wc;function Pm(){return Wc||(Wc=Mg(Am))}const Nm=(...t)=>{const e=Pm().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=km(s);if(!i)return;const r=e._component;!K(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function km(t){return Ce(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(t,e){if(!t)throw Ts(e)},Ts=function(t){return new Error("Firebase Database ("+pd.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Om=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Za={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(d=64)),s.push(n[u],n[h],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_d(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Om(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new xm;const d=r<<2|a>>4;if(s.push(d),c!==64){const _=a<<4&240|c>>2;if(s.push(_),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gd=function(t){const e=_d(t);return Za.encodeByteArray(e,!0)},lr=function(t){return gd(t).replace(/\./g,"")},cr=function(t){try{return Za.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(t){return md(void 0,t)}function md(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Mm(n)||(t[n]=md(t[n],e[n]));return t}function Mm(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm=()=>Lm().__FIREBASE_DEFAULTS__,Um=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Wm=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&cr(t[1]);return e&&JSON.parse(e)},el=()=>{try{return Fm()||Um()||Wm()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vd=t=>{var e,n;return(n=(e=el())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Bm=t=>{const e=vd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},yd=()=>{var t;return(t=el())===null||t===void 0?void 0:t.config},Ed=t=>{var e;return(e=el())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[lr(JSON.stringify(n)),lr(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function $m(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jm(){const t=Le();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Cd(){return pd.NODE_ADMIN===!0}function Vm(){try{return typeof indexedDB=="object"}catch{return!1}}function Km(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm="FirebaseError";class cn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Gm,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ti.prototype.create)}}class Ti{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?zm(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new cn(i,a,s)}}function zm(t,e){return t.replace(qm,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const qm=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(t){return JSON.parse(t)}function Se(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ui(cr(r[0])||""),n=ui(cr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Ym=function(t){const e=bd(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Qm=function(t){const e=bd(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function us(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function sa(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ur(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function hr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Bc(r)&&Bc(o)){if(!hr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Bc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Gs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function zs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Xm(t,e){const n=new Zm(t,e);return n.subscribe.bind(n)}class Zm{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");ev(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Eo),i.error===void 0&&(i.error=Eo),i.complete===void 0&&(i.complete=Eo);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ev(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Eo(){}function zr(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,I(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},qr=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(t){return t&&t._delegate?t._delegate:t}class Tn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ii;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(iv(e))try{this.getOrInitializeService({instanceIdentifier:pn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=pn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pn){return this.instances.has(e)}getOptions(e=pn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:sv(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=pn){return this.component?this.component.multipleInstances?e:pn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sv(t){return t===pn?void 0:t}function iv(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const ov={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},av=le.INFO,lv={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},cv=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=lv[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nl{constructor(e){this.name=e,this._logLevel=av,this._logHandler=cv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ov[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const uv=(t,e)=>e.some(n=>t instanceof n);let Hc,$c;function hv(){return Hc||(Hc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dv(){return $c||($c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Id=new WeakMap,ia=new WeakMap,Td=new WeakMap,wo=new WeakMap,sl=new WeakMap;function fv(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Xt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Id.set(n,t)}).catch(()=>{}),sl.set(e,t),e}function pv(t){if(ia.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ia.set(t,e)}let ra={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ia.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Td.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _v(t){ra=t(ra)}function gv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Co(this),e,...n);return Td.set(s,e.sort?e.sort():[e]),Xt(s)}:dv().includes(t)?function(...e){return t.apply(Co(this),e),Xt(Id.get(this))}:function(...e){return Xt(t.apply(Co(this),e))}}function mv(t){return typeof t=="function"?gv(t):(t instanceof IDBTransaction&&pv(t),uv(t,hv())?new Proxy(t,ra):t)}function Xt(t){if(t instanceof IDBRequest)return fv(t);if(wo.has(t))return wo.get(t);const e=mv(t);return e!==t&&(wo.set(t,e),sl.set(e,t)),e}const Co=t=>sl.get(t);function vv(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Xt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Xt(o.result),l.oldVersion,l.newVersion,Xt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const yv=["get","getKey","getAll","getAllKeys","count"],Ev=["put","add","delete","clear"],bo=new Map;function jc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bo.get(e))return bo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Ev.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||yv.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return bo.set(e,r),r}_v(t=>({...t,get:(e,n,s)=>jc(e,n)||t.get(e,n,s),has:(e,n)=>!!jc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Cv(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Cv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const oa="@firebase/app",Vc="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=new nl("@firebase/app"),bv="@firebase/app-compat",Iv="@firebase/analytics-compat",Tv="@firebase/analytics",Sv="@firebase/app-check-compat",Rv="@firebase/app-check",Av="@firebase/auth",Pv="@firebase/auth-compat",Nv="@firebase/database",kv="@firebase/database-compat",Ov="@firebase/functions",xv="@firebase/functions-compat",Dv="@firebase/installations",Mv="@firebase/installations-compat",Lv="@firebase/messaging",Fv="@firebase/messaging-compat",Uv="@firebase/performance",Wv="@firebase/performance-compat",Bv="@firebase/remote-config",Hv="@firebase/remote-config-compat",$v="@firebase/storage",jv="@firebase/storage-compat",Vv="@firebase/firestore",Kv="@firebase/firestore-compat",Gv="firebase",zv="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa="[DEFAULT]",qv={[oa]:"fire-core",[bv]:"fire-core-compat",[Tv]:"fire-analytics",[Iv]:"fire-analytics-compat",[Rv]:"fire-app-check",[Sv]:"fire-app-check-compat",[Av]:"fire-auth",[Pv]:"fire-auth-compat",[Nv]:"fire-rtdb",[kv]:"fire-rtdb-compat",[Ov]:"fire-fn",[xv]:"fire-fn-compat",[Dv]:"fire-iid",[Mv]:"fire-iid-compat",[Lv]:"fire-fcm",[Fv]:"fire-fcm-compat",[Uv]:"fire-perf",[Wv]:"fire-perf-compat",[Bv]:"fire-rc",[Hv]:"fire-rc-compat",[$v]:"fire-gcs",[jv]:"fire-gcs-compat",[Vv]:"fire-fst",[Kv]:"fire-fst-compat","fire-js":"fire-js",[Gv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=new Map,la=new Map;function Yv(t,e){try{t.container.addComponent(e)}catch(n){Sn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function hs(t){const e=t.name;if(la.has(e))return Sn.debug(`There were multiple attempts to register component ${e}.`),!1;la.set(e,t);for(const n of dr.values())Yv(n,t);return!0}function il(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Zt=new Ti("app","Firebase",Qv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=zv;function Sd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:aa,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Zt.create("bad-app-name",{appName:String(i)});if(n||(n=yd()),!n)throw Zt.create("no-options");const r=dr.get(i);if(r){if(hr(n,r.options)&&hr(s,r.config))return r;throw Zt.create("duplicate-app",{appName:i})}const o=new rv(i);for(const l of la.values())o.addComponent(l);const a=new Jv(n,s,o);return dr.set(i,a),a}function Rd(t=aa){const e=dr.get(t);if(!e&&t===aa&&yd())return Sd();if(!e)throw Zt.create("no-app",{appName:t});return e}function en(t,e,n){var s;let i=(s=qv[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sn.warn(a.join(" "));return}hs(new Tn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv="firebase-heartbeat-database",Zv=1,hi="firebase-heartbeat-store";let Io=null;function Ad(){return Io||(Io=vv(Xv,Zv,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(hi)}}}).catch(t=>{throw Zt.create("idb-open",{originalErrorMessage:t.message})})),Io}async function ey(t){try{return await(await Ad()).transaction(hi).objectStore(hi).get(Pd(t))}catch(e){if(e instanceof cn)Sn.warn(e.message);else{const n=Zt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sn.warn(n.message)}}}async function Kc(t,e){try{const s=(await Ad()).transaction(hi,"readwrite");await s.objectStore(hi).put(e,Pd(t)),await s.done}catch(n){if(n instanceof cn)Sn.warn(n.message);else{const s=Zt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Sn.warn(s.message)}}}function Pd(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=1024,ny=30*24*60*60*1e3;class sy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ry(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Gc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=ny}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Gc(),{heartbeatsToSend:n,unsentEntries:s}=iy(this._heartbeatsCache.heartbeats),i=lr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Gc(){return new Date().toISOString().substring(0,10)}function iy(t,e=ty){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),zc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),zc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ry{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vm()?Km().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ey(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function zc(t){return lr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(t){hs(new Tn("platform-logger",e=>new wv(e),"PRIVATE")),hs(new Tn("heartbeat",e=>new sy(e),"PRIVATE")),en(oa,Vc,t),en(oa,Vc,"esm2017"),en("fire-js","")}oy("");function rl(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Nd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ay=Nd,kd=new Ti("auth","Firebase",Nd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=new nl("@firebase/auth");function ly(t,...e){fr.logLevel<=le.WARN&&fr.warn(`Auth (${Rs}): ${t}`,...e)}function Zi(t,...e){fr.logLevel<=le.ERROR&&fr.error(`Auth (${Rs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t,...e){throw ol(t,...e)}function Et(t,...e){return ol(t,...e)}function cy(t,e,n){const s=Object.assign(Object.assign({},ay()),{[e]:n});return new Ti("auth","Firebase",s).create(e,{appName:t.name})}function ol(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return kd.create(t,...e)}function $(t,e,...n){if(!t)throw ol(e,...n)}function Pt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zi(e),new Error(e)}function Dt(t,e){t||Pt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function uy(){return qc()==="http:"||qc()==="https:"}function qc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uy()||$m()||"connection"in navigator)?navigator.onLine:!0}function dy(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dt(n>e,"Short delay should be less than long delay!"),this.isMobile=tl()||wd()}get(){return hy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(t,e){Dt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py=new Si(3e4,6e4);function As(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function On(t,e,n,s,i={}){return xd(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Ss(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Od.fetch()(Dd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function xd(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},fy),e);try{const i=new _y(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Vi(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Vi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Vi(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw cy(t,u,c);ht(t,u)}}catch(i){if(i instanceof cn)throw i;ht(t,"network-request-failed",{message:String(i)})}}async function Ri(t,e,n,s,i={}){const r=await On(t,e,n,s,i);return"mfaPendingCredential"in r&&ht(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Dd(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?al(t.config,i):`${t.config.apiScheme}://${i}`}class _y{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Et(this.auth,"network-request-failed")),py.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Vi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Et(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gy(t,e){return On(t,"POST","/v1/accounts:delete",e)}async function my(t,e){return On(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vy(t,e=!1){const n=Oe(t),s=await n.getIdToken(e),i=ll(s);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Qs(To(i.auth_time)),issuedAtTime:Qs(To(i.iat)),expirationTime:Qs(To(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function To(t){return Number(t)*1e3}function ll(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Zi("JWT malformed, contained fewer than 3 sections"),null;try{const i=cr(n);return i?JSON.parse(i):(Zi("Failed to decode base64 JWT payload"),null)}catch(i){return Zi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function yy(t){const e=ll(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ds(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof cn&&Ey(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Ey({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qs(this.lastLoginAt),this.creationTime=Qs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pr(t){var e;const n=t.auth,s=await t.getIdToken(),i=await ds(t,my(n,{idToken:s}));$(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Iy(r.providerUserInfo):[],a=by(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Md(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Cy(t){const e=Oe(t);await pr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function by(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Iy(t){return t.map(e=>{var{providerId:n}=e,s=rl(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ty(t,e){const n=await xd(t,{},async()=>{const s=Ss({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Dd(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Od.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Ty(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new di;return s&&($(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&($(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&($(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new di,this.toJSON())}_performRefresh(){return Pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bn{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=rl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Md(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ds(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vy(this,e)}reload(){return Cy(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await pr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ds(this,gy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,N=(c=n.createdAt)!==null&&c!==void 0?c:void 0,O=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:H,emailVerified:x,isAnonymous:se,providerData:ge,stsTokenManager:be}=n;$(H&&be,e,"internal-error");const V=di.fromJSON(this.name,be);$(typeof H=="string",e,"internal-error"),Ht(h,e.name),Ht(d,e.name),$(typeof x=="boolean",e,"internal-error"),$(typeof se=="boolean",e,"internal-error"),Ht(_,e.name),Ht(m,e.name),Ht(w,e.name),Ht(A,e.name),Ht(N,e.name),Ht(O,e.name);const ie=new bn({uid:H,auth:e,email:d,emailVerified:x,displayName:h,isAnonymous:se,photoURL:m,phoneNumber:_,tenantId:w,stsTokenManager:V,createdAt:N,lastLoginAt:O});return ge&&Array.isArray(ge)&&(ie.providerData=ge.map(ee=>Object.assign({},ee))),A&&(ie._redirectEventId=A),ie}static async _fromIdTokenResponse(e,n,s=!1){const i=new di;i.updateFromServerResponse(n);const r=new bn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await pr(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc=new Map;function Nt(t){Dt(t instanceof Function,"Expected a class definition");let e=Yc.get(t);return e?(Dt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Yc.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ld.type="NONE";const Qc=Ld;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(t,e,n){return`firebase:${t}:${e}:${n}`}class ss{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=er(this.userKey,i.apiKey,r),this.fullPersistenceKey=er("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ss(Nt(Qc),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Nt(Qc);const o=er(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=bn._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new ss(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new ss(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hd(e))return"Blackberry";if($d(e))return"Webos";if(cl(e))return"Safari";if((e.includes("chrome/")||Ud(e))&&!e.includes("edge/"))return"Chrome";if(Bd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Fd(t=Le()){return/firefox\//i.test(t)}function cl(t=Le()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ud(t=Le()){return/crios\//i.test(t)}function Wd(t=Le()){return/iemobile/i.test(t)}function Bd(t=Le()){return/android/i.test(t)}function Hd(t=Le()){return/blackberry/i.test(t)}function $d(t=Le()){return/webos/i.test(t)}function Yr(t=Le()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Sy(t=Le()){var e;return Yr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ry(){return jm()&&document.documentMode===10}function jd(t=Le()){return Yr(t)||Bd(t)||$d(t)||Hd(t)||/windows phone/i.test(t)||Wd(t)}function Ay(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(t,e=[]){let n;switch(t){case"Browser":n=Jc(Le());break;case"Worker":n=`${Jc(Le())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Rs}/${s}`}async function Kd(t,e){return On(t,"GET","/v2/recaptchaConfig",As(t,e))}function Xc(t){return t!==void 0&&t.enterprise!==void 0}class Gd{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function zd(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Et("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",Py().appendChild(s)})}function Ny(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ky="https://www.google.com/recaptcha/enterprise.js?render=",Oy="recaptcha-enterprise",xy="NO_RECAPTCHA";class qd{constructor(e){this.type=Oy,this.auth=Ps(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Kd(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Gd(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;Xc(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(xy)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&Xc(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}zd(ky+a).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function _r(t,e,n,s=!1){const i=new qd(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zc(this),this.idTokenSubscription=new Zc(this),this.beforeStateQueue=new Dy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ss.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Oe(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Nt(e))})}async initializeRecaptchaConfig(){const e=await Kd(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Gd(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new qd(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ti("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nt(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await ss.create(this,[Nt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ly(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ps(t){return Oe(t)}class Zc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Xm(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ly(t,e){const n=il(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(hr(r,e??{}))return i;ht(i,"already-initialized")}return n.initialize({options:e})}function Fy(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Nt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Uy(t,e,n){const s=Ps(t);$(s._canInitEmulator,s,"emulator-config-failed"),$(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Yd(e),{host:o,port:a}=Wy(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||By()}function Yd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Wy(t){const e=Yd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:eu(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:eu(o)}}}function eu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function By(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pt("not implemented")}_getIdTokenResponse(e){return Pt("not implemented")}_linkToIdToken(e,n){return Pt("not implemented")}_getReauthenticationResolver(e){return Pt("not implemented")}}async function Hy(t,e){return On(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(t,e){return Ri(t,"POST","/v1/accounts:signInWithPassword",As(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $y(t,e){return Ri(t,"POST","/v1/accounts:signInWithEmailLink",As(t,e))}async function jy(t,e){return Ri(t,"POST","/v1/accounts:signInWithEmailLink",As(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends ul{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new fi(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new fi(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await _r(e,s,"signInWithPassword");return So(e,i)}else return So(e,s).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await _r(e,s,"signInWithPassword");return So(e,r)}else return Promise.reject(i)});case"emailLink":return $y(e,{email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Hy(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return jy(e,{idToken:n,email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function is(t,e){return Ri(t,"POST","/v1/accounts:signInWithIdp",As(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy="http://localhost";class Rn extends ul{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Rn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=rl(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Rn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return is(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,is(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,is(e,n)}buildRequest(){const e={requestUri:Vy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ss(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Gy(t){const e=Gs(zs(t)).link,n=e?Gs(zs(e)).deep_link_id:null,s=Gs(zs(t)).deep_link_id;return(s?Gs(zs(s)).link:null)||s||n||e||t}class hl{constructor(e){var n,s,i,r,o,a;const l=Gs(zs(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=Ky((i=l.mode)!==null&&i!==void 0?i:null);$(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Gy(e);try{return new hl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(){this.providerId=Ns.PROVIDER_ID}static credential(e,n){return fi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=hl.parseLink(n);return $(s,"argument-error"),fi._fromEmailAndCode(e,s.code,s.tenantId)}}Ns.PROVIDER_ID="password";Ns.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ns.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends Qd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends Ai{constructor(){super("facebook.com")}static credential(e){return Rn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kt.credential(e.oauthAccessToken)}catch{return null}}}Kt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends Ai{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Rn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Gt.credential(n,s)}catch{return null}}}Gt.GOOGLE_SIGN_IN_METHOD="google.com";Gt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends Ai{constructor(){super("github.com")}static credential(e){return Rn._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zt.credential(e.oauthAccessToken)}catch{return null}}}zt.GITHUB_SIGN_IN_METHOD="github.com";zt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends Ai{constructor(){super("twitter.com")}static credential(e,n){return Rn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return qt.credential(n,s)}catch{return null}}}qt.TWITTER_SIGN_IN_METHOD="twitter.com";qt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ro(t,e){return Ri(t,"POST","/v1/accounts:signUp",As(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await bn._fromIdTokenResponse(e,s,i),o=tu(s);return new An({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=tu(s);return new An({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function tu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends cn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,gr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new gr(e,n,s,i)}}function Jd(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?gr._fromErrorAndOperation(t,r,e,s):r})}async function zy(t,e,n=!1){const s=await ds(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return An._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qy(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await ds(t,Jd(s,i,e,t),n);$(r.idToken,s,"internal-error");const o=ll(r.idToken);$(o,s,"internal-error");const{sub:a}=o;return $(t.uid===a,s,"user-mismatch"),An._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&ht(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xd(t,e,n=!1){const s="signIn",i=await Jd(t,s,e),r=await An._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function Yy(t,e){return Xd(Ps(t),e)}async function jS(t,e,n){var s;const i=Ps(t),r={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((s=i._getRecaptchaConfig())===null||s===void 0)&&s.emailPasswordEnabled){const c=await _r(i,r,"signUpPassword");o=Ro(i,c)}else o=Ro(i,r).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await _r(i,r,"signUpPassword");return Ro(i,u)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),l=await An._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function Qy(t,e,n){return Yy(Oe(t),Ns.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jy(t,e){return On(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VS(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=Oe(t),r={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ds(s,Jy(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function Xy(t,e,n,s){return Oe(t).onIdTokenChanged(e,n,s)}function Zy(t,e,n){return Oe(t).beforeAuthStateChanged(e,n)}function Zd(t,e,n,s){return Oe(t).onAuthStateChanged(e,n,s)}function eE(t){return Oe(t).signOut()}const mr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mr,"1"),this.storage.removeItem(mr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(){const t=Le();return cl(t)||Yr(t)}const nE=1e3,sE=10;class tf extends ef{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=tE()&&Ay(),this.fallbackToPolling=jd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Ry()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,sE):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},nE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}tf.type="LOCAL";const iE=tf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf extends ef{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}nf.type="SESSION";const sf=nf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Qr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await rE(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=dl("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return window}function aE(t){wt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(){return typeof wt().WorkerGlobalScope<"u"&&typeof wt().importScripts=="function"}async function lE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function uE(){return rf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of="firebaseLocalStorageDb",hE=1,vr="firebaseLocalStorage",af="fbase_key";class Pi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jr(t,e){return t.transaction([vr],e?"readwrite":"readonly").objectStore(vr)}function dE(){const t=indexedDB.deleteDatabase(of);return new Pi(t).toPromise()}function ua(){const t=indexedDB.open(of,hE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(vr,{keyPath:af})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(vr)?e(s):(s.close(),await dE(),e(await ua()))})})}async function nu(t,e,n){const s=Jr(t,!0).put({[af]:e,value:n});return new Pi(s).toPromise()}async function fE(t,e){const n=Jr(t,!1).get(e),s=await new Pi(n).toPromise();return s===void 0?null:s.value}function su(t,e){const n=Jr(t,!0).delete(e);return new Pi(n).toPromise()}const pE=800,_E=3;class lf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ua(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>_E)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qr._getInstance(uE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await lE(),!this.activeServiceWorker)return;this.sender=new oE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ua();return await nu(e,mr,"1"),await su(e,mr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>nu(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>fE(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>su(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Jr(i,!1).getAll();return new Pi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lf.type="LOCAL";const gE=lf;new Si(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(t,e){return e?Nt(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl extends ul{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return is(e,this._buildIdpRequest())}_linkToIdToken(e,n){return is(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return is(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function vE(t){return Xd(t.auth,new fl(t),t.bypassAuthState)}function yE(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),qy(n,new fl(t),t.bypassAuthState)}async function EE(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),zy(n,new fl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vE;case"linkViaPopup":case"linkViaRedirect":return EE;case"reauthViaPopup":case"reauthViaRedirect":return yE;default:ht(this.auth,"internal-error")}}resolve(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE=new Si(2e3,1e4);class Qn extends cf{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Qn.currentPopupAction&&Qn.currentPopupAction.cancel(),Qn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){Dt(this.filter.length===1,"Popup operations only handle one event");const e=dl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wE.get())};e()}}Qn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE="pendingRedirect",tr=new Map;class bE extends cf{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=tr.get(this.auth._key());if(!e){try{const s=await IE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}tr.set(this.auth._key(),e)}return this.bypassAuthState||tr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function IE(t,e){const n=RE(e),s=SE(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function TE(t,e){tr.set(t._key(),e)}function SE(t){return Nt(t._redirectPersistence)}function RE(t){return er(CE,t.config.apiKey,t.name)}async function AE(t,e,n=!1){const s=Ps(t),i=mE(s,e),o=await new bE(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE=10*60*1e3;class NE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!uf(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Et(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PE&&this.cachedEventUids.clear(),this.cachedEventUids.has(iu(e))}saveEventToCache(e){this.cachedEventUids.add(iu(e)),this.lastProcessedEventTime=Date.now()}}function iu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function uf({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uf(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OE(t,e={}){return On(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,DE=/^https?/;async function ME(t){if(t.config.emulator)return;const{authorizedDomains:e}=await OE(t);for(const n of e)try{if(LE(n))return}catch{}ht(t,"unauthorized-domain")}function LE(t){const e=ca(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!DE.test(n))return!1;if(xE.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE=new Si(3e4,6e4);function ru(){const t=wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function UE(t){return new Promise((e,n)=>{var s,i,r;function o(){ru(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ru(),n(Et(t,"network-request-failed"))},timeout:FE.get()})}if(!((i=(s=wt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=wt().gapi)===null||r===void 0)&&r.load)o();else{const a=Ny("iframefcb");return wt()[a]=()=>{gapi.load?o():n(Et(t,"network-request-failed"))},zd(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw nr=null,e})}let nr=null;function WE(t){return nr=nr||UE(t),nr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE=new Si(5e3,15e3),HE="__/auth/iframe",$E="emulator/auth/iframe",jE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function KE(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?al(e,$E):`https://${t.config.authDomain}/${HE}`,s={apiKey:e.apiKey,appName:t.name,v:Rs},i=VE.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Ss(s).slice(1)}`}async function GE(t){const e=await WE(t),n=wt().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:KE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jE,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Et(t,"network-request-failed"),a=wt().setTimeout(()=>{r(o)},BE.get());function l(){wt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qE=500,YE=600,QE="_blank",JE="http://localhost";class ou{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function XE(t,e,n,s=qE,i=YE){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},zE),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Le().toLowerCase();n&&(a=Ud(c)?QE:n),Fd(c)&&(e=e||JE,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[_,m])=>`${d}${_}=${m},`,"");if(Sy(c)&&a!=="_self")return ZE(e||"",a),new ou(null);const h=window.open(e||"",a,u);$(h,t,"popup-blocked");try{h.focus()}catch{}return new ou(h)}function ZE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew="__/auth/handler",tw="emulator/auth/handler",nw=encodeURIComponent("fac");async function au(t,e,n,s,i,r){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Rs,eventId:i};if(e instanceof Qd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",sa(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof Ai){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${nw}=${encodeURIComponent(l)}`:"";return`${sw(t)}?${Ss(a).slice(1)}${c}`}function sw({config:t}){return t.emulator?al(t,tw):`https://${t.authDomain}/${ew}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao="webStorageSupport";class iw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sf,this._completeRedirectFn=AE,this._overrideRedirectResult=TE}async _openPopup(e,n,s,i){var r;Dt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await au(e,n,s,ca(),i);return XE(e,o,dl())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await au(e,n,s,ca(),i);return aE(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Dt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await GE(e),s=new NE(e);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ao,{type:Ao},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Ao];o!==void 0&&n(!!o),ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ME(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return jd()||cl()||Yr()}}const rw=iw;var lu="@firebase/auth",cu="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function lw(t){hs(new Tn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vd(t)},c=new My(s,i,r,l);return Fy(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),hs(new Tn("auth-internal",e=>{const n=Ps(e.getProvider("auth").getImmediate());return(s=>new ow(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),en(lu,cu,aw(t)),en(lu,cu,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw=5*60,uw=Ed("authIdTokenMaxAge")||cw;let uu=null;const hw=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>uw)return;const i=n==null?void 0:n.token;uu!==i&&(uu=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function dw(t=Rd()){const e=il(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ly(t,{popupRedirectResolver:rw,persistence:[gE,iE,sf]}),s=Ed("authTokenSyncURL");if(s){const r=hw(s);Zy(n,r,()=>r(n.currentUser)),Xy(n,o=>r(o))}const i=vd("auth");return i&&Uy(n,`http://${i}`),n}lw("Browser");var fw="firebase",pw="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en(fw,pw,"app");const hu="@firebase/database",du="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hf="";function _w(t){hf=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Se(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ui(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return bt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new gw(e)}}catch{}return new mw},En=df("localStorage"),ha=df("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs=new nl("@firebase/database"),vw=function(){let t=1;return function(){return t++}}(),ff=function(t){const e=tv(t),n=new Jm;n.update(e);const s=n.digest();return Za.encodeByteArray(s)},Ni=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ni.apply(null,s):typeof s=="object"?e+=Se(s):e+=s,e+=" "}return e};let In=null,fu=!0;const yw=function(t,e){I(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(rs.logLevel=le.VERBOSE,In=rs.log.bind(rs),e&&ha.set("logging_enabled",!0)):typeof t=="function"?In=t:(In=null,ha.remove("logging_enabled"))},Ne=function(...t){if(fu===!0&&(fu=!1,In===null&&ha.get("logging_enabled")===!0&&yw(!0)),In){const e=Ni.apply(null,t);In(e)}},ki=function(t){return function(...e){Ne(t,...e)}},da=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ni(...t);rs.error(e)},Mt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ni(...t)}`;throw rs.error(e),new Error(e)},He=function(...t){const e="FIREBASE WARNING: "+Ni(...t);rs.warn(e)},Ew=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&He("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},pl=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},ww=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},fs="[MIN_NAME]",Pn="[MAX_NAME]",xn=function(t,e){if(t===e)return 0;if(t===fs||e===Pn)return-1;if(e===fs||t===Pn)return 1;{const n=pu(t),s=pu(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Cw=function(t,e){return t===e?0:t<e?-1:1},Us=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Se(e))},_l=function(t){if(typeof t!="object"||t===null)return Se(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Se(e[s]),n+=":",n+=_l(t[e[s]]);return n+="}",n},pf=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function ke(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const _f=function(t){I(!pl(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},bw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Iw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Tw(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Sw=new RegExp("^-?(0*)\\d{1,10}$"),Rw=-2147483648,Aw=2147483647,pu=function(t){if(Sw.test(t)){const e=Number(t);if(e>=Rw&&e<=Aw)return e}return null},ks=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw He("Exception was thrown by user callback.",n),e},Math.floor(0))}},Pw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Js=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){He(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ne("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',He(e)}}class os{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}os.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl="5",gf="v",mf="s",vf="r",yf="f",Ef=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,wf="ls",Cf="p",fa="ac",bf="websocket",If="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=En.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&En.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Ow(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Sf(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let s;if(e===bf)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===If)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ow(t)&&(n.ns=t.namespace);const i=[];return ke(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(){this.counters_={}}incrementCounter(e,n=1){bt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Dm(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po={},No={};function ml(t){const e=t.toString();return Po[e]||(Po[e]=new xw),Po[e]}function Dw(t,e){const n=t.toString();return No[n]||(No[n]=e()),No[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&ks(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u="start",Lw="close",Fw="pLPCommand",Uw="pRTLPCB",Rf="id",Af="pw",Pf="ser",Ww="cb",Bw="seg",Hw="ts",$w="d",jw="dframe",Nf=1870,kf=30,Vw=Nf-kf,Kw=25e3,Gw=3e4;class Jn{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ki(e),this.stats_=ml(n),this.urlFn=l=>(this.appCheckToken&&(l[fa]=this.appCheckToken),Sf(n,If,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Mw(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Gw)),ww(()=>{if(this.isClosed_)return;this.scriptTagHolder=new vl((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===_u)this.id=a,this.password=l;else if(o===Lw)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[_u]="t",s[Pf]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Ww]=this.scriptTagHolder.uniqueCallbackIdentifier),s[gf]=gl,this.transportSessionId&&(s[mf]=this.transportSessionId),this.lastSessionId&&(s[wf]=this.lastSessionId),this.applicationId&&(s[Cf]=this.applicationId),this.appCheckToken&&(s[fa]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ef.test(location.hostname)&&(s[vf]=yf);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Jn.forceAllow_=!0}static forceDisallow(){Jn.forceDisallow_=!0}static isAvailable(){return Jn.forceAllow_?!0:!Jn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!bw()&&!Iw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Se(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=gd(n),i=pf(s,Vw);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[jw]="t",s[Rf]=e,s[Af]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Se(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class vl{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=vw(),window[Fw+this.uniqueCallbackIdentifier]=e,window[Uw+this.uniqueCallbackIdentifier]=n,this.myIFrame=vl.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ne("frame writing exception"),a.stack&&Ne(a.stack),Ne(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ne("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Rf]=this.myID,e[Af]=this.myPW,e[Pf]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+kf+s.length<=Nf;){const o=this.pendingSegs.shift();s=s+"&"+Bw+i+"="+o.seg+"&"+Hw+i+"="+o.ts+"&"+$w+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Kw)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ne("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw=16384,qw=45e3;let yr=null;typeof MozWebSocket<"u"?yr=MozWebSocket:typeof WebSocket<"u"&&(yr=WebSocket);class rt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ki(this.connId),this.stats_=ml(n),this.connURL=rt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[gf]=gl,typeof location<"u"&&location.hostname&&Ef.test(location.hostname)&&(o[vf]=yf),n&&(o[mf]=n),s&&(o[wf]=s),i&&(o[fa]=i),r&&(o[Cf]=r),Sf(e,bf,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,En.set("previous_websocket_failure",!0);try{let s;Cd(),this.mySock=new yr(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){rt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&yr!==null&&!rt.forceDisallow_}static previouslyFailed(){return En.isInMemoryStorage||En.get("previous_websocket_failure")===!0}markConnectionHealthy(){En.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ui(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Se(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=pf(n,zw);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(qw))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}rt.responsesRequiredToBeHealthy=2;rt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Jn,rt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=rt&&rt.isAvailable();let s=n&&!rt.previouslyFailed();if(e.webSocketOnly&&(n||He("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[rt];else{const i=this.transports_=[];for(const r of pi.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);pi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}pi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw=6e4,Qw=5e3,Jw=10*1024,Xw=100*1024,ko="t",gu="d",Zw="s",mu="r",eC="e",vu="o",yu="a",Eu="n",wu="p",tC="h";class nC{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ki("c:"+this.id+":"),this.transportManager_=new pi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Js(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Xw?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Jw?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ko in e){const n=e[ko];n===yu?this.upgradeIfSecondaryHealthy_():n===mu?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===vu&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Us("t",e),s=Us("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:wu,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:yu,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Eu,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Us("t",e),s=Us("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Us(ko,e);if(gu in e){const s=e[gu];if(n===tC){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Eu){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Zw?this.onConnectionShutdown_(s):n===mu?this.onReset_(s):n===eC?da("Server Error: "+s):n===vu?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):da("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),gl!==s&&He("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Js(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Yw))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Js(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Qw))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:wu,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(En.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends xf{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!tl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Er}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu=32,bu=768;class ce{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function X(){return new ce("")}function G(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function on(t){return t.pieces_.length-t.pieceNum_}function fe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ce(t.pieces_,e)}function yl(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function sC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function _i(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Df(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ce(e,0)}function me(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ce)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ce(n,0)}function q(t){return t.pieceNum_>=t.pieces_.length}function Be(t,e){const n=G(t),s=G(e);if(n===null)return e;if(n===s)return Be(fe(t),fe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function iC(t,e){const n=_i(t,0),s=_i(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=xn(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function El(t,e){if(on(t)!==on(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Je(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(on(t)>on(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class rC{constructor(e,n){this.errorPrefix_=n,this.parts_=_i(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=qr(this.parts_[s]);Mf(this)}}function oC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=qr(e),Mf(t)}function aC(t){const e=t.parts_.pop();t.byteLength_-=qr(e),t.parts_.length>0&&(t.byteLength_-=1)}function Mf(t){if(t.byteLength_>bu)throw new Error(t.errorPrefix_+"has a key path longer than "+bu+" bytes ("+t.byteLength_+").");if(t.parts_.length>Cu)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Cu+") or object contains a cycle "+_n(t))}function _n(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl extends xf{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new wl}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=1e3,lC=60*5*1e3,Iu=30*1e3,cC=1.3,uC=3e4,hC="server_kill",Tu=3;class Ot extends Of{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ot.nextPersistentConnectionId_++,this.log_=ki("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ws,this.maxReconnectDelay_=lC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Cd())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");wl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Er.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Se(r)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Ii,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Ot.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&bt(e,"w")){const s=us(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();He(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Qm(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Iu)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Ym(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Se(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):da("Unrecognized action received from server: "+Se(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ws,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ws,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>uC&&(this.reconnectDelay_=Ws),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*cC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ot.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ne("getToken() completed but was canceled"):(Ne("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new nC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{He(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(hC)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&He(h),l())}}}interrupt(e){Ne("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ne("Resuming connection for reason: "+e),delete this.interruptReasons_[e],sa(this.interruptReasons_)&&(this.reconnectDelay_=Ws,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>_l(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ce(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ne("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Tu&&(this.reconnectDelay_=Iu,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ne("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Tu&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+hf.replace(/\./g,"-")]=1,tl()?e["framework.cordova"]=1:wd()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Er.getInstance().currentlyOnline();return sa(this.interruptReasons_)&&e}}Ot.nextPersistentConnectionId_=0;Ot.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new z(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new z(fs,e),i=new z(fs,n);return this.compare(s,i)!==0}minPost(){return z.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ki;class Lf extends Xr{static get __EMPTY_NODE(){return Ki}static set __EMPTY_NODE(e){Ki=e}compare(e,n){return xn(e.name,n.name)}isDefinedOn(e){throw Ts("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return z.MIN}maxPost(){return new z(Pn,Ki)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,Ki)}toString(){return".key"}}const as=new Lf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ae{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ae.RED,this.left=i??Ve.EMPTY_NODE,this.right=r??Ve.EMPTY_NODE}copy(e,n,s,i,r){return new Ae(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ve.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ve.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ae.RED=!0;Ae.BLACK=!1;class dC{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ae(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ve{constructor(e,n=Ve.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ve(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ae.BLACK,null,null))}remove(e){return new Ve(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ae.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Gi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Gi(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Gi(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Gi(this.root_,null,this.comparator_,!0,e)}}Ve.EMPTY_NODE=new dC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(t,e){return xn(t.name,e.name)}function Cl(t,e){return xn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pa;function pC(t){pa=t}const Ff=function(t){return typeof t=="number"?"number:"+_f(t):"string:"+t},Uf=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&bt(e,".sv"),"Priority must be a string or number.")}else I(t===pa||t.isEmpty(),"priority of unexpected type.");I(t===pa||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Su;class Re{constructor(e,n=Re.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Uf(this.priorityNode_)}static set __childrenNodeConstructor(e){Su=e}static get __childrenNodeConstructor(){return Su}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Re(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Re.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:G(e)===".priority"?this.priorityNode_:Re.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Re.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=G(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(I(s!==".priority"||on(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Re.__childrenNodeConstructor.EMPTY_NODE.updateChild(fe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ff(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=_f(this.value_):e+=this.value_,this.lazyHash_=ff(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Re.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Re.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Re.VALUE_TYPE_ORDER.indexOf(n),r=Re.VALUE_TYPE_ORDER.indexOf(s);return I(i>=0,"Unknown leaf type: "+n),I(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Re.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wf,Bf;function _C(t){Wf=t}function gC(t){Bf=t}class mC extends Xr{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?xn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return z.MIN}maxPost(){return new z(Pn,new Re("[PRIORITY-POST]",Bf))}makePost(e,n){const s=Wf(e);return new z(n,new Re("[PRIORITY-POST]",s))}toString(){return".priority"}}const ve=new mC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC=Math.log(2);class yC{constructor(e){const n=r=>parseInt(Math.log(r)/vC,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const wr=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Ae(d,h.node,Ae.BLACK,null,null);{const _=parseInt(u/2,10)+l,m=i(l,_),w=i(_+1,c);return h=t[_],d=n?n(h):h,new Ae(d,h.node,Ae.BLACK,m,w)}},r=function(l){let c=null,u=null,h=t.length;const d=function(m,w){const A=h-m,N=h;h-=m;const O=i(A+1,N),H=t[A],x=n?n(H):H;_(new Ae(x,H.node,w,null,O))},_=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const w=l.nextBitIsOne(),A=Math.pow(2,l.count-(m+1));w?d(A,Ae.BLACK):(d(A,Ae.BLACK),d(A,Ae.RED))}return u},o=new yC(t.length),a=r(o);return new Ve(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oo;const $n={};class kt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I($n&&ve,"ChildrenNode.ts has not been loaded"),Oo=Oo||new kt({".priority":$n},{".priority":ve}),Oo}get(e){const n=us(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ve?n:null}hasIndex(e){return bt(this.indexSet_,e.toString())}addIndex(e,n){I(e!==as,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(z.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=wr(s,e.getCompare()):a=$n;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new kt(u,c)}addToIndexes(e,n){const s=ur(this.indexes_,(i,r)=>{const o=us(this.indexSet_,r);if(I(o,"Missing index implementation for "+r),i===$n)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(z.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),wr(a,o.getCompare())}else return $n;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new z(e.name,a))),l.insert(e,e.node)}});return new kt(s,this.indexSet_)}removeFromIndexes(e,n){const s=ur(this.indexes_,i=>{if(i===$n)return i;{const r=n.get(e.name);return r?i.remove(new z(e.name,r)):i}});return new kt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bs;class W{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Uf(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Bs||(Bs=new W(new Ve(Cl),null,kt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Bs}updatePriority(e){return this.children_.isEmpty()?this:new W(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Bs:n}}getChild(e){const n=G(e);return n===null?this:this.getImmediateChild(n).getChild(fe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new z(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Bs:this.priorityNode_;return new W(i,o,r)}}updateChild(e,n){const s=G(e);if(s===null)return n;{I(G(e)!==".priority"||on(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(fe(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ve,(o,a)=>{n[o]=a.val(e),s++,r&&W.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ff(this.getPriority().val())+":"),this.forEachChild(ve,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":ff(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new z(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new z(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,z.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Oi?-1:0}withIndex(e){if(e===as||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new W(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===as||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ve),i=n.getIterator(ve);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===as?null:this.indexMap_.get(e.toString())}}W.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class EC extends W{constructor(){super(new Ve(Cl),W.EMPTY_NODE,kt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return W.EMPTY_NODE}isEmpty(){return!1}}const Oi=new EC;Object.defineProperties(z,{MIN:{value:new z(fs,W.EMPTY_NODE)},MAX:{value:new z(Pn,Oi)}});Lf.__EMPTY_NODE=W.EMPTY_NODE;Re.__childrenNodeConstructor=W;pC(Oi);gC(Oi);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC=!0;function Te(t,e=null){if(t===null)return W.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Re(n,Te(e))}if(!(t instanceof Array)&&wC){const n=[];let s=!1;if(ke(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Te(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new z(o,l)))}}),n.length===0)return W.EMPTY_NODE;const r=wr(n,fC,o=>o.name,Cl);if(s){const o=wr(n,ve.getCompare());return new W(r,Te(e),new kt({".priority":o},{".priority":ve}))}else return new W(r,Te(e),kt.Default)}else{let n=W.EMPTY_NODE;return ke(t,(s,i)=>{if(bt(t,s)&&s.substring(0,1)!=="."){const r=Te(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Te(e))}}_C(Te);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC extends Xr{constructor(e){super(),this.indexPath_=e,I(!q(e)&&G(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?xn(e.name,n.name):r}makePost(e,n){const s=Te(e),i=W.EMPTY_NODE.updateChild(this.indexPath_,s);return new z(n,i)}maxPost(){const e=W.EMPTY_NODE.updateChild(this.indexPath_,Oi);return new z(Pn,e)}toString(){return _i(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC extends Xr{compare(e,n){const s=e.node.compareTo(n.node);return s===0?xn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,n){const s=Te(e);return new z(n,s)}toString(){return".value"}}const IC=new bC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(t){return{type:"value",snapshotNode:t}}function ps(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function gi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function mi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function TC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(gi(n,a)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ps(n,s)):o.trackChildChange(mi(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ve,(i,r)=>{n.hasChild(i)||s.trackChildChange(gi(i,r))}),n.isLeafNode()||n.forEachChild(ve,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(mi(i,r,o))}else s.trackChildChange(ps(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?W.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.indexedFilter_=new bl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=vi.getStartPost_(e),this.endPost_=vi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new z(n,s))||(s=W.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=W.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(W.EMPTY_NODE);const r=this;return n.forEachChild(ve,(o,a)=>{r.matches(new z(o,a))||(i=i.updateImmediateChild(o,W.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new vi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new z(n,s))||(s=W.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=W.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=W.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(W.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,W.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const a=e;I(a.numChildren()===this.limit_,"");const l=new z(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,l);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(mi(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(gi(n,h));const w=a.updateImmediateChild(n,W.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(ps(d.name,d.node)),w.updateImmediateChild(d.name,d.node)):w}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(gi(c.name,c.node)),r.trackChildChange(ps(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,W.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ve}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:fs}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Pn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ve}copy(){const e=new Il;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function RC(t){return t.loadsAllData()?new bl(t.getIndex()):t.hasLimit()?new SC(t):new vi(t)}function Ru(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ve?n="$priority":t.index_===IC?n="$value":t.index_===as?n="$key":(I(t.index_ instanceof CC,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Se(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Se(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Se(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Se(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Se(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Au(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ve&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends Of{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ki("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Cr.getListenId_(e,s),a={};this.listens_[o]=a;const l=Ru(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),us(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Cr.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Ru(e._queryParams),s=e._path.toString(),i=new Ii;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ss(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ui(a.responseText)}catch{He("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&He("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(){this.rootNode_=W.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(){return{value:null,children:new Map}}function $f(t,e,n){if(q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=G(e);t.children.has(s)||t.children.set(s,br());const i=t.children.get(s);e=fe(e),$f(i,e,n)}}function _a(t,e,n){t.value!==null?n(e,t.value):PC(t,(s,i)=>{const r=new ce(e.toString()+"/"+s);_a(i,r,n)})}function PC(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ke(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu=10*1e3,kC=30*1e3,OC=5*60*1e3;class xC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new NC(e);const s=Pu+(kC-Pu)*Math.random();Js(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;ke(e,(i,r)=>{r>0&&bt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Js(this.reportStats_.bind(this),Math.floor(Math.random()*2*OC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var at;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(at||(at={}));function Tl(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Sl(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Rl(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=at.ACK_USER_WRITE,this.source=Tl()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ce(e));return new Ir(X(),n,this.revert)}}else return I(G(this.path)===e,"operationForChild called for unrelated child."),new Ir(fe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n){this.source=e,this.path=n,this.type=at.LISTEN_COMPLETE}operationForChild(e){return q(this.path)?new yi(this.source,X()):new yi(this.source,fe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=at.OVERWRITE}operationForChild(e){return q(this.path)?new Nn(this.source,X(),this.snap.getImmediateChild(e)):new Nn(this.source,fe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=at.MERGE}operationForChild(e){if(q(this.path)){const n=this.children.subtree(new ce(e));return n.isEmpty()?null:n.value?new Nn(this.source,X(),n.value):new _s(this.source,X(),n)}else return I(G(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new _s(this.source,fe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(q(e))return this.isFullyInitialized()&&!this.filtered_;const n=G(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function MC(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(TC(o.childName,o.snapshotNode))}),Hs(t,i,"child_removed",e,s,n),Hs(t,i,"child_added",e,s,n),Hs(t,i,"child_moved",r,s,n),Hs(t,i,"child_changed",e,s,n),Hs(t,i,"value",e,s,n),i}function Hs(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>FC(t,a,l)),o.forEach(a=>{const l=LC(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function LC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function FC(t,e,n){if(e.childName==null||n.childName==null)throw Ts("Should only compare child_ events.");const s=new z(e.childName,e.snapshotNode),i=new z(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(t,e){return{eventCache:t,serverCache:e}}function Xs(t,e,n,s){return Zr(new an(e,n,s),t.serverCache)}function jf(t,e,n,s){return Zr(t.eventCache,new an(e,n,s))}function Tr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function kn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xo;const UC=()=>(xo||(xo=new Ve(Cw)),xo);class de{constructor(e,n=UC()){this.value=e,this.children=n}static fromObject(e){let n=new de(null);return ke(e,(s,i)=>{n=n.set(new ce(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:X(),value:this.value};if(q(e))return null;{const s=G(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(fe(e),n);return r!=null?{path:me(new ce(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const n=G(e),s=this.children.get(n);return s!==null?s.subtree(fe(e)):new de(null)}}set(e,n){if(q(e))return new de(n,this.children);{const s=G(e),r=(this.children.get(s)||new de(null)).set(fe(e),n),o=this.children.insert(s,r);return new de(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new de(null):new de(null,this.children);{const n=G(e),s=this.children.get(n);if(s){const i=s.remove(fe(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new de(null):new de(this.value,r)}else return this}}get(e){if(q(e))return this.value;{const n=G(e),s=this.children.get(n);return s?s.get(fe(e)):null}}setTree(e,n){if(q(e))return n;{const s=G(e),r=(this.children.get(s)||new de(null)).setTree(fe(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new de(this.value,o)}}fold(e){return this.fold_(X(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(me(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,X(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(q(e))return null;{const r=G(e),o=this.children.get(r);return o?o.findOnPath_(fe(e),me(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,X(),n)}foreachOnPath_(e,n,s){if(q(e))return this;{this.value&&s(n,this.value);const i=G(e),r=this.children.get(i);return r?r.foreachOnPath_(fe(e),me(n,i),s):new de(null)}}foreach(e){this.foreach_(X(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(me(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.writeTree_=e}static empty(){return new ut(new de(null))}}function Zs(t,e,n){if(q(e))return new ut(new de(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Be(i,e);return r=r.updateChild(o,n),new ut(t.writeTree_.set(i,r))}else{const i=new de(n),r=t.writeTree_.setTree(e,i);return new ut(r)}}}function ga(t,e,n){let s=t;return ke(n,(i,r)=>{s=Zs(s,me(e,i),r)}),s}function Nu(t,e){if(q(e))return ut.empty();{const n=t.writeTree_.setTree(e,new de(null));return new ut(n)}}function ma(t,e){return Dn(t,e)!=null}function Dn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Be(n.path,e)):null}function ku(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ve,(s,i)=>{e.push(new z(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new z(s,i.value))}),e}function tn(t,e){if(q(e))return t;{const n=Dn(t,e);return n!=null?new ut(new de(n)):new ut(t.writeTree_.subtree(e))}}function va(t){return t.writeTree_.isEmpty()}function gs(t,e){return Vf(X(),t.writeTree_,e)}function Vf(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(I(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Vf(me(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(me(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(t,e){return qf(e,t)}function WC(t,e,n,s,i){I(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Zs(t.visibleWrites,e,n)),t.lastWriteId=s}function BC(t,e,n,s){I(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=ga(t.visibleWrites,e,n),t.lastWriteId=s}function HC(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function $C(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&jC(a,s.path)?i=!1:Je(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return VC(t),!0;if(s.snap)t.visibleWrites=Nu(t.visibleWrites,s.path);else{const a=s.children;ke(a,l=>{t.visibleWrites=Nu(t.visibleWrites,me(s.path,l))})}return!0}else return!1}function jC(t,e){if(t.snap)return Je(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Je(me(t.path,n),e))return!0;return!1}function VC(t){t.visibleWrites=Kf(t.allWrites,KC,X()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function KC(t){return t.visible}function Kf(t,e,n){let s=ut.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Je(n,o)?(a=Be(n,o),s=Zs(s,a,r.snap)):Je(o,n)&&(a=Be(o,n),s=Zs(s,X(),r.snap.getChild(a)));else if(r.children){if(Je(n,o))a=Be(n,o),s=ga(s,a,r.children);else if(Je(o,n))if(a=Be(o,n),q(a))s=ga(s,X(),r.children);else{const l=us(r.children,G(a));if(l){const c=l.getChild(fe(a));s=Zs(s,X(),c)}}}else throw Ts("WriteRecord should have .snap or .children")}}return s}function Gf(t,e,n,s,i){if(!s&&!i){const r=Dn(t.visibleWrites,e);if(r!=null)return r;{const o=tn(t.visibleWrites,e);if(va(o))return n;if(n==null&&!ma(o,X()))return null;{const a=n||W.EMPTY_NODE;return gs(o,a)}}}else{const r=tn(t.visibleWrites,e);if(!i&&va(r))return n;if(!i&&n==null&&!ma(r,X()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Je(c.path,e)||Je(e,c.path))},a=Kf(t.allWrites,o,e),l=n||W.EMPTY_NODE;return gs(a,l)}}}function GC(t,e,n){let s=W.EMPTY_NODE;const i=Dn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ve,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=tn(t.visibleWrites,e);return n.forEachChild(ve,(o,a)=>{const l=gs(tn(r,new ce(o)),a);s=s.updateImmediateChild(o,l)}),ku(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=tn(t.visibleWrites,e);return ku(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function zC(t,e,n,s,i){I(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=me(e,n);if(ma(t.visibleWrites,r))return null;{const o=tn(t.visibleWrites,r);return va(o)?i.getChild(n):gs(o,i.getChild(n))}}function qC(t,e,n,s){const i=me(e,n),r=Dn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=tn(t.visibleWrites,i);return gs(o,s.getNode().getImmediateChild(n))}else return null}function YC(t,e){return Dn(t.visibleWrites,e)}function QC(t,e,n,s,i,r,o){let a;const l=tn(t.visibleWrites,e),c=Dn(l,X());if(c!=null)a=c;else if(n!=null)a=gs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function JC(){return{visibleWrites:ut.empty(),allWrites:[],lastWriteId:-1}}function Sr(t,e,n,s){return Gf(t.writeTree,t.treePath,e,n,s)}function Al(t,e){return GC(t.writeTree,t.treePath,e)}function Ou(t,e,n,s){return zC(t.writeTree,t.treePath,e,n,s)}function Rr(t,e){return YC(t.writeTree,me(t.treePath,e))}function XC(t,e,n,s,i,r){return QC(t.writeTree,t.treePath,e,n,s,i,r)}function Pl(t,e,n){return qC(t.writeTree,t.treePath,e,n)}function zf(t,e){return qf(me(t.treePath,e),t.writeTree)}function qf(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,mi(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,gi(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,ps(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,mi(s,e.snapshotNode,i.oldSnap));else throw Ts("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Yf=new eb;class Nl{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new an(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Pl(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:kn(this.viewCache_),r=XC(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb(t){return{filter:t}}function nb(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function sb(t,e,n,s,i){const r=new ZC;let o,a;if(n.type===at.OVERWRITE){const c=n;c.source.fromUser?o=ya(t,e,c.path,c.snap,s,i,r):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!q(c.path),o=Ar(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===at.MERGE){const c=n;c.source.fromUser?o=rb(t,e,c.path,c.children,s,i,r):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Ea(t,e,c.path,c.children,s,i,a,r))}else if(n.type===at.ACK_USER_WRITE){const c=n;c.revert?o=lb(t,e,c.path,s,i,r):o=ob(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===at.LISTEN_COMPLETE)o=ab(t,e,n.path,s,r);else throw Ts("Unknown operation type: "+n.type);const l=r.getChanges();return ib(e,o,l),{viewCache:o,changes:l}}function ib(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Tr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Hf(Tr(e)))}}function Qf(t,e,n,s,i,r){const o=e.eventCache;if(Rr(s,n)!=null)return e;{let a,l;if(q(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=kn(e),u=c instanceof W?c:W.EMPTY_NODE,h=Al(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Sr(s,kn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=G(n);if(c===".priority"){I(on(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Ou(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=fe(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Ou(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Pl(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Xs(e,a,o.isFullyInitialized()||q(n),t.filter.filtersNodes())}}function Ar(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(q(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),_,null)}else{const _=G(n);if(!l.isCompleteForPath(n)&&on(n)>1)return e;const m=fe(n),A=l.getNode().getImmediateChild(_).updateChild(m,s);_===".priority"?c=u.updatePriority(l.getNode(),A):c=u.updateChild(l.getNode(),_,A,m,Yf,null)}const h=jf(e,c,l.isFullyInitialized()||q(n),u.filtersNodes()),d=new Nl(i,h,r);return Qf(t,h,n,i,d,a)}function ya(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Nl(i,e,r);if(q(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Xs(e,c,!0,t.filter.filtersNodes());else{const h=G(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Xs(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=fe(n),_=a.getNode().getImmediateChild(h);let m;if(q(d))m=s;else{const w=u.getCompleteChild(h);w!=null?yl(d)===".priority"&&w.getChild(Df(d)).isEmpty()?m=w:m=w.updateChild(d,s):m=W.EMPTY_NODE}if(_.equals(m))l=e;else{const w=t.filter.updateChild(a.getNode(),h,m,d,u,o);l=Xs(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function xu(t,e){return t.eventCache.isCompleteForChild(e)}function rb(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=me(n,l);xu(e,G(u))&&(a=ya(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=me(n,l);xu(e,G(u))||(a=ya(t,a,u,c,i,r,o))}),a}function Du(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ea(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;q(n)?c=s:c=new de(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),m=Du(t,_,d);l=Ar(t,l,new ce(h),m,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const m=e.serverCache.getNode().getImmediateChild(h),w=Du(t,m,d);l=Ar(t,l,new ce(h),w,i,r,o,a)}}),l}function ob(t,e,n,s,i,r,o){if(Rr(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(q(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ar(t,e,n,l.getNode().getChild(n),i,r,a,o);if(q(n)){let c=new de(null);return l.getNode().forEachChild(as,(u,h)=>{c=c.set(new ce(u),h)}),Ea(t,e,n,c,i,r,a,o)}else return e}else{let c=new de(null);return s.foreach((u,h)=>{const d=me(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Ea(t,e,n,c,i,r,a,o)}}function ab(t,e,n,s,i){const r=e.serverCache,o=jf(e,r.getNode(),r.isFullyInitialized()||q(n),r.isFiltered());return Qf(t,o,n,s,Yf,i)}function lb(t,e,n,s,i,r){let o;if(Rr(s,n)!=null)return e;{const a=new Nl(s,e,i),l=e.eventCache.getNode();let c;if(q(n)||G(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Sr(s,kn(e));else{const h=e.serverCache.getNode();I(h instanceof W,"serverChildren would be complete if leaf node"),u=Al(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=G(n);let h=Pl(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,fe(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,W.EMPTY_NODE,fe(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Sr(s,kn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Rr(s,X())!=null,Xs(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new bl(s.getIndex()),r=RC(s);this.processor_=tb(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(W.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(W.EMPTY_NODE,a.getNode(),null),u=new an(l,o.isFullyInitialized(),i.filtersNodes()),h=new an(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Zr(h,u),this.eventGenerator_=new DC(this.query_)}get query(){return this.query_}}function ub(t){return t.viewCache_.serverCache.getNode()}function hb(t){return Tr(t.viewCache_)}function db(t,e){const n=kn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!q(e)&&!n.getImmediateChild(G(e)).isEmpty())?n.getChild(e):null}function Mu(t){return t.eventRegistrations_.length===0}function fb(t,e){t.eventRegistrations_.push(e)}function Lu(t,e,n){const s=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Fu(t,e,n,s){e.type===at.MERGE&&e.source.queryId!==null&&(I(kn(t.viewCache_),"We should always have a full cache before handling merges"),I(Tr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=sb(t.processor_,i,e,n,s);return nb(t.processor_,r.viewCache),I(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Jf(t,r.changes,r.viewCache.eventCache.getNode(),null)}function pb(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ve,(r,o)=>{s.push(ps(r,o))}),n.isFullyInitialized()&&s.push(Hf(n.getNode())),Jf(t,s,n.getNode(),e)}function Jf(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return MC(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pr;class Xf{constructor(){this.views=new Map}}function _b(t){I(!Pr,"__referenceConstructor has already been defined"),Pr=t}function gb(){return I(Pr,"Reference.ts has not been loaded"),Pr}function mb(t){return t.views.size===0}function kl(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return I(r!=null,"SyncTree gave us an op for an invalid query."),Fu(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Fu(o,e,n,s));return r}}function Zf(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Sr(n,i?s:null),l=!1;a?l=!0:s instanceof W?(a=Al(n,s),l=!1):(a=W.EMPTY_NODE,l=!1);const c=Zr(new an(a,l,!1),new an(s,i,!1));return new cb(e,c)}return o}function vb(t,e,n,s,i,r){const o=Zf(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),fb(o,n),pb(o,n)}function yb(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=ln(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Lu(c,n,s)),Mu(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Lu(l,n,s)),Mu(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!ln(t)&&r.push(new(gb())(e._repo,e._path)),{removed:r,events:o}}function ep(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function nn(t,e){let n=null;for(const s of t.views.values())n=n||db(s,e);return n}function tp(t,e){if(e._queryParams.loadsAllData())return to(t);{const s=e._queryIdentifier;return t.views.get(s)}}function np(t,e){return tp(t,e)!=null}function ln(t){return to(t)!=null}function to(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nr;function Eb(t){I(!Nr,"__referenceConstructor has already been defined"),Nr=t}function wb(){return I(Nr,"Reference.ts has not been loaded"),Nr}let Cb=1;class Uu{constructor(e){this.listenProvider_=e,this.syncPointTree_=new de(null),this.pendingWriteTree_=JC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function sp(t,e,n,s,i){return WC(t.pendingWriteTree_,e,n,s,i),i?Os(t,new Nn(Tl(),e,n)):[]}function bb(t,e,n,s){BC(t.pendingWriteTree_,e,n,s);const i=de.fromObject(n);return Os(t,new _s(Tl(),e,i))}function Yt(t,e,n=!1){const s=HC(t.pendingWriteTree_,e);if($C(t.pendingWriteTree_,e)){let r=new de(null);return s.snap!=null?r=r.set(X(),!0):ke(s.children,o=>{r=r.set(new ce(o),!0)}),Os(t,new Ir(s.path,r,n))}else return[]}function xi(t,e,n){return Os(t,new Nn(Sl(),e,n))}function Ib(t,e,n){const s=de.fromObject(n);return Os(t,new _s(Sl(),e,s))}function Tb(t,e){return Os(t,new yi(Sl(),e))}function Sb(t,e,n){const s=xl(t,n);if(s){const i=Dl(s),r=i.path,o=i.queryId,a=Be(r,e),l=new yi(Rl(o),a);return Ml(t,r,l)}else return[]}function kr(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||np(o,e))){const l=yb(o,e,n,s);mb(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,_)=>ln(_));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=Pb(d);for(let m=0;m<_.length;++m){const w=_[m],A=w.query,N=ap(t,w);t.listenProvider_.startListening(ei(A),Ei(t,A),N.hashFn,N.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(ei(e),null):c.forEach(d=>{const _=t.queryToTagMap.get(no(d));t.listenProvider_.stopListening(ei(d),_)}))}Nb(t,c)}return a}function ip(t,e,n,s){const i=xl(t,s);if(i!=null){const r=Dl(i),o=r.path,a=r.queryId,l=Be(o,e),c=new Nn(Rl(a),l,n);return Ml(t,o,c)}else return[]}function Rb(t,e,n,s){const i=xl(t,s);if(i){const r=Dl(i),o=r.path,a=r.queryId,l=Be(o,e),c=de.fromObject(n),u=new _s(Rl(a),l,c);return Ml(t,o,u)}else return[]}function wa(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,_)=>{const m=Be(d,i);r=r||nn(_,m),o=o||ln(_)});let a=t.syncPointTree_.get(i);a?(o=o||ln(a),r=r||nn(a,X())):(a=new Xf,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=W.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,m)=>{const w=nn(m,X());w&&(r=r.updateImmediateChild(_,w))}));const c=np(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=no(e);I(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=kb();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const u=eo(t.pendingWriteTree_,i);let h=vb(a,e,n,u,r,l);if(!c&&!o&&!s){const d=tp(a,e);h=h.concat(Ob(t,e,d))}return h}function Ol(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Be(o,e),c=nn(a,l);if(c)return c});return Gf(i,e,r,n,!0)}function Ab(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=Be(c,n);s=s||nn(u,h)});let i=t.syncPointTree_.get(n);i?s=s||nn(i,X()):(i=new Xf,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new an(s,!0,!1):null,a=eo(t.pendingWriteTree_,e._path),l=Zf(i,e,a,r?o.getNode():W.EMPTY_NODE,r);return hb(l)}function Os(t,e){return rp(e,t.syncPointTree_,null,eo(t.pendingWriteTree_,X()))}function rp(t,e,n,s){if(q(t.path))return op(t,e,n,s);{const i=e.get(X());n==null&&i!=null&&(n=nn(i,X()));let r=[];const o=G(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=zf(s,o);r=r.concat(rp(a,l,c,u))}return i&&(r=r.concat(kl(i,t,s,n))),r}}function op(t,e,n,s){const i=e.get(X());n==null&&i!=null&&(n=nn(i,X()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=zf(s,o),u=t.operationForChild(o);u&&(r=r.concat(op(u,a,l,c)))}),i&&(r=r.concat(kl(i,t,s,n))),r}function ap(t,e){const n=e.query,s=Ei(t,n);return{hashFn:()=>(ub(e)||W.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Sb(t,n._path,s):Tb(t,n._path);{const r=Tw(i,n);return kr(t,n,null,r)}}}}function Ei(t,e){const n=no(e);return t.queryToTagMap.get(n)}function no(t){return t._path.toString()+"$"+t._queryIdentifier}function xl(t,e){return t.tagToQueryMap.get(e)}function Dl(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ce(t.substr(0,e))}}function Ml(t,e,n){const s=t.syncPointTree_.get(e);I(s,"Missing sync point for query tag that we're tracking");const i=eo(t.pendingWriteTree_,e);return kl(s,n,i,null)}function Pb(t){return t.fold((e,n,s)=>{if(n&&ln(n))return[to(n)];{let i=[];return n&&(i=ep(n)),ke(s,(r,o)=>{i=i.concat(o)}),i}})}function ei(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(wb())(t._repo,t._path):t}function Nb(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=no(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function kb(){return Cb++}function Ob(t,e,n){const s=e._path,i=Ei(t,e),r=ap(t,n),o=t.listenProvider_.startListening(ei(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)I(!ln(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!q(c)&&u&&ln(u))return[to(u).query];{let d=[];return u&&(d=d.concat(ep(u).map(_=>_.query))),ke(h,(_,m)=>{d=d.concat(m)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(ei(u),Ei(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ll(n)}node(){return this.node_}}class Fl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=me(this.path_,e);return new Fl(this.syncTree_,n)}node(){return Ol(this.syncTree_,this.path_)}}const xb=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Wu=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Db(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Mb(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Db=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},Mb=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&I(!1,"Unexpected increment value: "+s);const i=e.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},lp=function(t,e,n,s){return Ul(e,new Fl(n,t),s)},cp=function(t,e,n){return Ul(t,new Ll(e),n)};function Ul(t,e,n){const s=t.getPriority().val(),i=Wu(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Wu(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Re(a,Te(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Re(i))),o.forEachChild(ve,(a,l)=>{const c=Ul(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Bl(t,e){let n=e instanceof ce?e:new ce(e),s=t,i=G(n);for(;i!==null;){const r=us(s.node.children,i)||{children:{},childCount:0};s=new Wl(i,s,r),n=fe(n),i=G(n)}return s}function xs(t){return t.node.value}function up(t,e){t.node.value=e,Ca(t)}function hp(t){return t.node.childCount>0}function Lb(t){return xs(t)===void 0&&!hp(t)}function so(t,e){ke(t.node.children,(n,s)=>{e(new Wl(n,t,s))})}function dp(t,e,n,s){n&&!s&&e(t),so(t,i=>{dp(i,e,!0,s)}),n&&s&&e(t)}function Fb(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Di(t){return new ce(t.parent===null?t.name:Di(t.parent)+"/"+t.name)}function Ca(t){t.parent!==null&&Ub(t.parent,t.name,t)}function Ub(t,e,n){const s=Lb(n),i=bt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Ca(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Ca(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb=/[\[\].#$\/\u0000-\u001F\u007F]/,Bb=/[\[\].#$\u0000-\u001F\u007F]/,Do=10*1024*1024,Hl=function(t){return typeof t=="string"&&t.length!==0&&!Wb.test(t)},fp=function(t){return typeof t=="string"&&t.length!==0&&!Bb.test(t)},Hb=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),fp(t)},$b=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!pl(t)||t&&typeof t=="object"&&bt(t,".sv")},pp=function(t,e,n,s){s&&e===void 0||io(zr(t,"value"),e,n)},io=function(t,e,n){const s=n instanceof ce?new rC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+_n(s));if(typeof e=="function")throw new Error(t+"contains a function "+_n(s)+" with contents = "+e.toString());if(pl(e))throw new Error(t+"contains "+e.toString()+" "+_n(s));if(typeof e=="string"&&e.length>Do/3&&qr(e)>Do)throw new Error(t+"contains a string greater than "+Do+" utf8 bytes "+_n(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(ke(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Hl(o)))throw new Error(t+" contains an invalid key ("+o+") "+_n(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);oC(s,o),io(t,a,s),aC(s)}),i&&r)throw new Error(t+' contains ".value" child '+_n(s)+" in addition to actual children.")}},jb=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=_i(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Hl(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(iC);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&Je(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},Vb=function(t,e,n,s){if(s&&e===void 0)return;const i=zr(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];ke(e,(o,a)=>{const l=new ce(o);if(io(i,a,me(n,l)),yl(l)===".priority"&&!$b(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),jb(i,r)},_p=function(t,e,n,s){if(!(s&&n===void 0)&&!fp(n))throw new Error(zr(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Kb=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),_p(t,e,n,s)},gp=function(t,e){if(G(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Gb=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Hl(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Hb(n))throw new Error(zr(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ro(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!El(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function mp(t,e,n){ro(t,n),vp(t,s=>El(s,e))}function et(t,e,n){ro(t,n),vp(t,s=>Je(s,e)||Je(e,s))}function vp(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(qb(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function qb(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();In&&Ne("event: "+n.toString()),ks(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb="repo_interrupt",Qb=25;class Jb{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new zb,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=br(),this.transactionQueueTree_=new Wl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Xb(t,e,n){if(t.stats_=ml(t.repoInfo_),t.forceRestClient_||Pw())t.server_=new Cr(t.repoInfo_,(s,i,r,o)=>{Bu(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Hu(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Se(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Ot(t.repoInfo_,e,(s,i,r,o)=>{Bu(t,s,i,r,o)},s=>{Hu(t,s)},s=>{Zb(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Dw(t.repoInfo_,()=>new xC(t.stats_,t.server_)),t.infoData_=new AC,t.infoSyncTree_=new Uu({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=xi(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),$l(t,"connected",!1),t.serverSyncTree_=new Uu({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);et(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function yp(t){const n=t.infoData_.getNode(new ce(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function oo(t){return xb({timestamp:yp(t)})}function Bu(t,e,n,s,i){t.dataUpdateCount++;const r=new ce(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=ur(n,c=>Te(c));o=Rb(t.serverSyncTree_,r,l,i)}else{const l=Te(n);o=ip(t.serverSyncTree_,r,l,i)}else if(s){const l=ur(n,c=>Te(c));o=Ib(t.serverSyncTree_,r,l)}else{const l=Te(n);o=xi(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=ms(t,r)),et(t.eventQueue_,a,o)}function Hu(t,e){$l(t,"connected",e),e===!1&&sI(t)}function Zb(t,e){ke(e,(n,s)=>{$l(t,n,s)})}function $l(t,e,n){const s=new ce("/.info/"+e),i=Te(n);t.infoData_.updateSnapshot(s,i);const r=xi(t.infoSyncTree_,s,i);et(t.eventQueue_,s,r)}function jl(t){return t.nextWriteId_++}function eI(t,e,n){const s=Ab(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Te(i).withIndex(e._queryParams.getIndex());wa(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=xi(t.serverSyncTree_,e._path,r);else{const a=Ei(t.serverSyncTree_,e);o=ip(t.serverSyncTree_,e._path,r,a)}return et(t.eventQueue_,e._path,o),kr(t.serverSyncTree_,e,n,null,!0),r},i=>(Mi(t,"get for query "+Se(e)+" failed: "+i),Promise.reject(new Error(i))))}function tI(t,e,n,s,i){Mi(t,"set",{path:e.toString(),value:n,priority:s});const r=oo(t),o=Te(n,s),a=Ol(t.serverSyncTree_,e),l=cp(o,a,r),c=jl(t),u=sp(t.serverSyncTree_,e,l,c,!0);ro(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,_)=>{const m=d==="ok";m||He("set at "+e+" failed: "+d);const w=Yt(t.serverSyncTree_,c,!m);et(t.eventQueue_,e,w),ba(t,i,d,_)});const h=Kl(t,e);ms(t,h),et(t.eventQueue_,h,[])}function nI(t,e,n,s){Mi(t,"update",{path:e.toString(),value:n});let i=!0;const r=oo(t),o={};if(ke(n,(a,l)=>{i=!1,o[a]=lp(me(e,a),Te(l),t.serverSyncTree_,r)}),i)Ne("update() called with empty data.  Don't do anything."),ba(t,s,"ok",void 0);else{const a=jl(t),l=bb(t.serverSyncTree_,e,o,a);ro(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const h=c==="ok";h||He("update at "+e+" failed: "+c);const d=Yt(t.serverSyncTree_,a,!h),_=d.length>0?ms(t,e):e;et(t.eventQueue_,_,d),ba(t,s,c,u)}),ke(n,c=>{const u=Kl(t,me(e,c));ms(t,u)}),et(t.eventQueue_,e,[])}}function sI(t){Mi(t,"onDisconnectEvents");const e=oo(t),n=br();_a(t.onDisconnect_,X(),(i,r)=>{const o=lp(i,r,t.serverSyncTree_,e);$f(n,i,o)});let s=[];_a(n,X(),(i,r)=>{s=s.concat(xi(t.serverSyncTree_,i,r));const o=Kl(t,i);ms(t,o)}),t.onDisconnect_=br(),et(t.eventQueue_,X(),s)}function iI(t,e,n){let s;G(e._path)===".info"?s=wa(t.infoSyncTree_,e,n):s=wa(t.serverSyncTree_,e,n),mp(t.eventQueue_,e._path,s)}function $u(t,e,n){let s;G(e._path)===".info"?s=kr(t.infoSyncTree_,e,n):s=kr(t.serverSyncTree_,e,n),mp(t.eventQueue_,e._path,s)}function rI(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Yb)}function Mi(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ne(n,...e)}function ba(t,e,n,s){e&&ks(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Ep(t,e,n){return Ol(t.serverSyncTree_,e,n)||W.EMPTY_NODE}function Vl(t,e=t.transactionQueueTree_){if(e||ao(t,e),xs(e)){const n=Cp(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&oI(t,Di(e),n)}else hp(e)&&so(e,n=>{Vl(t,n)})}function oI(t,e,n){const s=n.map(c=>c.currentWriteId),i=Ep(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];I(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Be(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Mi(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Yt(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();ao(t,Bl(t.transactionQueueTree_,e)),Vl(t,t.transactionQueueTree_),et(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)ks(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{He("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}ms(t,e)}},o)}function ms(t,e){const n=wp(t,e),s=Di(n),i=Cp(t,n);return aI(t,i,s),s}function aI(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Be(n,l.path);let u=!1,h;if(I(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(Yt(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Qb)u=!0,h="maxretry",i=i.concat(Yt(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Ep(t,l.path,o);l.currentInputSnapshot=d;const _=e[a].update(d.val());if(_!==void 0){io("transaction failed: Data returned ",_,l.path);let m=Te(_);typeof _=="object"&&_!=null&&bt(_,".priority")||(m=m.updatePriority(d.getPriority()));const A=l.currentWriteId,N=oo(t),O=cp(m,d,N);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=O,l.currentWriteId=jl(t),o.splice(o.indexOf(A),1),i=i.concat(sp(t.serverSyncTree_,l.path,O,l.currentWriteId,l.applyLocally)),i=i.concat(Yt(t.serverSyncTree_,A,!0))}else u=!0,h="nodata",i=i.concat(Yt(t.serverSyncTree_,l.currentWriteId,!0))}et(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}ao(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)ks(s[a]);Vl(t,t.transactionQueueTree_)}function wp(t,e){let n,s=t.transactionQueueTree_;for(n=G(e);n!==null&&xs(s)===void 0;)s=Bl(s,n),e=fe(e),n=G(e);return s}function Cp(t,e){const n=[];return bp(t,e,n),n.sort((s,i)=>s.order-i.order),n}function bp(t,e,n){const s=xs(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);so(e,i=>{bp(t,i,n)})}function ao(t,e){const n=xs(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,up(e,n.length>0?n:void 0)}so(e,s=>{ao(t,s)})}function Kl(t,e){const n=Di(wp(t,e)),s=Bl(t.transactionQueueTree_,e);return Fb(s,i=>{Mo(t,i)}),Mo(t,s),dp(s,i=>{Mo(t,i)}),n}function Mo(t,e){const n=xs(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Yt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?up(e,void 0):n.length=r+1,et(t.eventQueue_,Di(e),i);for(let o=0;o<s.length;o++)ks(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function cI(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):He(`Invalid query segment '${n}' in query '${t}'`)}return e}const ju=function(t,e){const n=uI(t),s=n.namespace;n.domain==="firebase.com"&&Mt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Mt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Ew();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Tf(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ce(n.pathString)}},uI=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=lI(t.substring(u,h)));const d=cI(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",hI=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Vu.charAt(n%64),n=Math.floor(n/64);I(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Vu.charAt(e[i]);return I(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Se(this.snapshot.exportVal())}}class Tp{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return q(this._path)?null:yl(this._path)}get ref(){return new It(this._repo,this._path)}get _queryIdentifier(){const e=Au(this._queryParams),n=_l(e);return n==="{}"?"default":n}get _queryObject(){return Au(this._queryParams)}isEqual(e){if(e=Oe(e),!(e instanceof Gl))return!1;const n=this._repo===e._repo,s=El(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+sC(this._path)}}class It extends Gl{constructor(e,n){super(e,n,new Il,!1)}get parent(){const e=Df(this._path);return e===null?null:new It(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class vs{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ce(e),s=ys(this.ref,e);return new vs(this._node.getChild(n),s,ve)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new vs(i,ys(this.ref,s),ve)))}hasChild(e){const n=new ce(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function zn(t,e){return t=Oe(t),t._checkNotDeleted("ref"),e!==void 0?ys(t._root,e):t._root}function ys(t,e){return t=Oe(t),G(t._path)===null?Kb("child","path",e,!1):_p("child","path",e,!1),new It(t._repo,me(t._path,e))}function KS(t,e){t=Oe(t),gp("push",t._path),pp("push",e,t._path,!0);const n=yp(t._repo),s=hI(n),i=ys(t,s),r=ys(t,s);let o;return e!=null?o=dI(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function dI(t,e){t=Oe(t),gp("set",t._path),pp("set",e,t._path,!1);const n=new Ii;return tI(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function GS(t,e){Vb("update",e,t._path,!1);const n=new Ii;return nI(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Ia(t){t=Oe(t);const e=new Sp(()=>{}),n=new lo(e);return eI(t._repo,t,n).then(s=>new vs(s,new It(t._repo,t._path),t._queryParams.getIndex()))}class lo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Ip("value",this,new vs(e.snapshotNode,new It(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Tp(this,e,n):null}matches(e){return e instanceof lo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class zl{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Tp(this,e,n):null}createEvent(e,n){I(e.childName!=null,"Child events should have a childName.");const s=ys(new It(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Ip(e.type,this,new vs(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof zl?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function fI(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=n,c=(u,h)=>{$u(t._repo,t,a),l(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Sp(n,r||void 0),a=e==="value"?new lo(o):new zl(e,o);return iI(t._repo,t,a),()=>$u(t._repo,t,a)}function Lo(t,e,n,s){return fI(t,"value",e,n,s)}_b(It);Eb(It);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI="FIREBASE_DATABASE_EMULATOR_HOST",Ta={};let _I=!1;function gI(t,e,n,s){t.repoInfo_=new Tf(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function mI(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Mt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ne("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ju(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[pI]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=ju(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new os(os.OWNER):new kw(t.name,t.options,e);Gb("Invalid Firebase Database URL",o),q(o.path)||Mt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=yI(a,t,u,new Nw(t.name,n));return new EI(h,t)}function vI(t,e){const n=Ta[e];(!n||n[t.key]!==t)&&Mt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),rI(t),delete n[t.key]}function yI(t,e,n,s){let i=Ta[e.name];i||(i={},Ta[e.name]=i);let r=i[t.toURLString()];return r&&Mt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Jb(t,_I,n,s),i[t.toURLString()]=r,r}class EI{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Xb(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new It(this._repo,X())),this._rootInternal}_delete(){return this._rootInternal!==null&&(vI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Mt("Cannot call "+e+" on a deleted database.")}}function wI(t=Rd(),e){const n=il(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Bm("database");s&&CI(n,...s)}return n}function CI(t,e,n,s={}){t=Oe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Mt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Mt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new os(os.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Hm(s.mockUserToken,t.app.options.projectId);r=new os(o)}gI(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(t){_w(Rs),hs(new Tn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return mI(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),en(hu,du,t),en(hu,du,"esm2017")}Ot.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ot.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};bI();const II={apiKey:"AIzaSyCYx67Ob7AurTlGjqltJtHly55VI9CpRhc",authDomain:"project1-6b61d.firebaseapp.com",databaseURL:"https://project1-6b61d-default-rtdb.firebaseio.com",projectId:"project1-6b61d",storageBucket:"project1-6b61d.appspot.com",messagingSenderId:"443117889351",appId:"1:443117889351:web:bf68d0cde1f9d2b5e78e62"},Rp=Sd(II),qn=wI(Rp),ti=dw(Rp);function TI(){return Ap().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Ap(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const SI=typeof Proxy=="function",RI="devtools-plugin:setup",AI="plugin:settings:set";let jn,Sa;function PI(){var t;return jn!==void 0||(typeof window<"u"&&window.performance?(jn=!0,Sa=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(jn=!0,Sa=global.perf_hooks.performance):jn=!1),jn}function NI(){return PI()?Sa.now():Date.now()}class kI{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const a=e.settings[o];s[o]=a.defaultValue}const i=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},s);try{const o=localStorage.getItem(i),a=JSON.parse(o);Object.assign(r,a)}catch{}this.fallbacks={getSettings(){return r},setSettings(o){try{localStorage.setItem(i,JSON.stringify(o))}catch{}r=o},now(){return NI()}},n&&n.on(AI,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function OI(t,e){const n=t,s=Ap(),i=TI(),r=SI&&n.enableEarlyProxy;if(i&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))i.emit(RI,t,e);else{const o=r?new kI(n,i):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var Pp="store";function xI(t){return t===void 0&&(t=null),Ze(t!==null?t:Pp)}function Ds(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function DI(t){return t!==null&&typeof t=="object"}function MI(t){return t&&typeof t.then=="function"}function LI(t,e){return function(){return t(e)}}function Np(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var s=e.indexOf(t);s>-1&&e.splice(s,1)}}function kp(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;co(t,n,[],t._modules.root,!0),ql(t,n,e)}function ql(t,e,n){var s=t._state,i=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var r=t._wrappedGetters,o={},a={},l=u_(!0);l.run(function(){Ds(r,function(c,u){o[u]=LI(c,t),a[u]=Qe(function(){return o[u]()}),Object.defineProperty(t.getters,u,{get:function(){return a[u].value},enumerable:!0})})}),t._state=bi({data:e}),t._scope=l,t.strict&&HI(t),s&&n&&t._withCommit(function(){s.data=null}),i&&i.stop()}function co(t,e,n,s,i){var r=!n.length,o=t._modules.getNamespace(n);if(s.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=s),!r&&!i){var a=Yl(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){a[l]=s.state})}var c=s.context=FI(t,o,n);s.forEachMutation(function(u,h){var d=o+h;UI(t,d,u,c)}),s.forEachAction(function(u,h){var d=u.root?h:o+h,_=u.handler||u;WI(t,d,_,c)}),s.forEachGetter(function(u,h){var d=o+h;BI(t,d,u,c)}),s.forEachChild(function(u,h){co(t,e,n.concat(h),u,i)})}function FI(t,e,n){var s=e==="",i={dispatch:s?t.dispatch:function(r,o,a){var l=Or(r,o,a),c=l.payload,u=l.options,h=l.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,c)},commit:s?t.commit:function(r,o,a){var l=Or(r,o,a),c=l.payload,u=l.options,h=l.type;(!u||!u.root)&&(h=e+h),t.commit(h,c,u)}};return Object.defineProperties(i,{getters:{get:s?function(){return t.getters}:function(){return Op(t,e)}},state:{get:function(){return Yl(t.state,n)}}}),i}function Op(t,e){if(!t._makeLocalGettersCache[e]){var n={},s=e.length;Object.keys(t.getters).forEach(function(i){if(i.slice(0,s)===e){var r=i.slice(s);Object.defineProperty(n,r,{get:function(){return t.getters[i]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function UI(t,e,n,s){var i=t._mutations[e]||(t._mutations[e]=[]);i.push(function(o){n.call(t,s.state,o)})}function WI(t,e,n,s){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(o){var a=n.call(t,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:t.getters,rootState:t.state},o);return MI(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(l){throw t._devtoolHook.emit("vuex:error",l),l}):a})}function BI(t,e,n,s){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(r){return n(s.state,s.getters,r.state,r.getters)})}function HI(t){ns(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Yl(t,e){return e.reduce(function(n,s){return n[s]},t)}function Or(t,e,n){return DI(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var $I="vuex bindings",Ku="vuex:mutations",Fo="vuex:actions",Vn="vuex",jI=0;function VI(t,e){OI({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[$I]},function(n){n.addTimelineLayer({id:Ku,label:"Vuex Mutations",color:Gu}),n.addTimelineLayer({id:Fo,label:"Vuex Actions",color:Gu}),n.addInspector({id:Vn,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(s){if(s.app===t&&s.inspectorId===Vn)if(s.filter){var i=[];Lp(i,e._modules.root,s.filter,""),s.rootNodes=i}else s.rootNodes=[Mp(e._modules.root,"")]}),n.on.getInspectorState(function(s){if(s.app===t&&s.inspectorId===Vn){var i=s.nodeId;Op(e,i),s.state=zI(YI(e._modules,i),i==="root"?e.getters:e._makeLocalGettersCache,i)}}),n.on.editInspectorState(function(s){if(s.app===t&&s.inspectorId===Vn){var i=s.nodeId,r=s.path;i!=="root"&&(r=i.split("/").filter(Boolean).concat(r)),e._withCommit(function(){s.set(e._state.data,r,s.state.value)})}}),e.subscribe(function(s,i){var r={};s.payload&&(r.payload=s.payload),r.state=i,n.notifyComponentUpdate(),n.sendInspectorTree(Vn),n.sendInspectorState(Vn),n.addTimelineEvent({layerId:Ku,event:{time:Date.now(),title:s.type,data:r}})}),e.subscribeAction({before:function(s,i){var r={};s.payload&&(r.payload=s.payload),s._id=jI++,s._time=Date.now(),r.state=i,n.addTimelineEvent({layerId:Fo,event:{time:s._time,title:s.type,groupId:s._id,subtitle:"start",data:r}})},after:function(s,i){var r={},o=Date.now()-s._time;r.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},s.payload&&(r.payload=s.payload),r.state=i,n.addTimelineEvent({layerId:Fo,event:{time:Date.now(),title:s.type,groupId:s._id,subtitle:"end",data:r}})}})})}var Gu=8702998,KI=6710886,GI=16777215,xp={label:"namespaced",textColor:GI,backgroundColor:KI};function Dp(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Mp(t,e){return{id:e||"root",label:Dp(e),tags:t.namespaced?[xp]:[],children:Object.keys(t._children).map(function(n){return Mp(t._children[n],e+n+"/")})}}function Lp(t,e,n,s){s.includes(n)&&t.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:e.namespaced?[xp]:[]}),Object.keys(e._children).forEach(function(i){Lp(t,e._children[i],n,s+i+"/")})}function zI(t,e,n){e=n==="root"?e:e[n];var s=Object.keys(e),i={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(s.length){var r=qI(e);i.getters=Object.keys(r).map(function(o){return{key:o.endsWith("/")?Dp(o):o,editable:!1,value:Ra(function(){return r[o]})}})}return i}function qI(t){var e={};return Object.keys(t).forEach(function(n){var s=n.split("/");if(s.length>1){var i=e,r=s.pop();s.forEach(function(o){i[o]||(i[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),i=i[o]._custom.value}),i[r]=Ra(function(){return t[n]})}else e[n]=Ra(function(){return t[n]})}),e}function YI(t,e){var n=e.split("/").filter(function(s){return s});return n.reduce(function(s,i,r){var o=s[i];if(!o)throw new Error('Missing module "'+i+'" for path "'+e+'".');return r===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Ra(t){try{return t()}catch(e){return e}}var ft=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var s=e.state;this.state=(typeof s=="function"?s():s)||{}},Fp={namespaced:{configurable:!0}};Fp.namespaced.get=function(){return!!this._rawModule.namespaced};ft.prototype.addChild=function(e,n){this._children[e]=n};ft.prototype.removeChild=function(e){delete this._children[e]};ft.prototype.getChild=function(e){return this._children[e]};ft.prototype.hasChild=function(e){return e in this._children};ft.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};ft.prototype.forEachChild=function(e){Ds(this._children,e)};ft.prototype.forEachGetter=function(e){this._rawModule.getters&&Ds(this._rawModule.getters,e)};ft.prototype.forEachAction=function(e){this._rawModule.actions&&Ds(this._rawModule.actions,e)};ft.prototype.forEachMutation=function(e){this._rawModule.mutations&&Ds(this._rawModule.mutations,e)};Object.defineProperties(ft.prototype,Fp);var Mn=function(e){this.register([],e,!1)};Mn.prototype.get=function(e){return e.reduce(function(n,s){return n.getChild(s)},this.root)};Mn.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(s,i){return n=n.getChild(i),s+(n.namespaced?i+"/":"")},"")};Mn.prototype.update=function(e){Up([],this.root,e)};Mn.prototype.register=function(e,n,s){var i=this;s===void 0&&(s=!0);var r=new ft(n,s);if(e.length===0)this.root=r;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],r)}n.modules&&Ds(n.modules,function(a,l){i.register(e.concat(l),a,s)})};Mn.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1],i=n.getChild(s);i&&i.runtime&&n.removeChild(s)};Mn.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1];return n?n.hasChild(s):!1};function Up(t,e,n){if(e.update(n),n.modules)for(var s in n.modules){if(!e.getChild(s))return;Up(t.concat(s),e.getChild(s),n.modules[s])}}function QI(t){return new Ge(t)}var Ge=function(e){var n=this;e===void 0&&(e={});var s=e.plugins;s===void 0&&(s=[]);var i=e.strict;i===void 0&&(i=!1);var r=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Mn(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=r;var o=this,a=this,l=a.dispatch,c=a.commit;this.dispatch=function(d,_){return l.call(o,d,_)},this.commit=function(d,_,m){return c.call(o,d,_,m)},this.strict=i;var u=this._modules.root.state;co(this,u,[],this._modules.root),ql(this,u),s.forEach(function(h){return h(n)})},Ql={state:{configurable:!0}};Ge.prototype.install=function(e,n){e.provide(n||Pp,this),e.config.globalProperties.$store=this;var s=this._devtools!==void 0?this._devtools:!1;s&&VI(e,this)};Ql.state.get=function(){return this._state.data};Ql.state.set=function(t){};Ge.prototype.commit=function(e,n,s){var i=this,r=Or(e,n,s),o=r.type,a=r.payload,l={type:o,payload:a},c=this._mutations[o];c&&(this._withCommit(function(){c.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(l,i.state)}))};Ge.prototype.dispatch=function(e,n){var s=this,i=Or(e,n),r=i.type,o=i.payload,a={type:r,payload:o},l=this._actions[r];if(l){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,s.state)})}catch{}var c=l.length>1?Promise.all(l.map(function(u){return u(o)})):l[0](o);return new Promise(function(u,h){c.then(function(d){try{s._actionSubscribers.filter(function(_){return _.after}).forEach(function(_){return _.after(a,s.state)})}catch{}u(d)},function(d){try{s._actionSubscribers.filter(function(_){return _.error}).forEach(function(_){return _.error(a,s.state,d)})}catch{}h(d)})})}};Ge.prototype.subscribe=function(e,n){return Np(e,this._subscribers,n)};Ge.prototype.subscribeAction=function(e,n){var s=typeof e=="function"?{before:e}:e;return Np(s,this._actionSubscribers,n)};Ge.prototype.watch=function(e,n,s){var i=this;return ns(function(){return e(i.state,i.getters)},n,Object.assign({},s))};Ge.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};Ge.prototype.registerModule=function(e,n,s){s===void 0&&(s={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),co(this,this.state,e,this._modules.get(e),s.preserveState),ql(this,this.state)};Ge.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var s=Yl(n.state,e.slice(0,-1));delete s[e[e.length-1]]}),kp(this)};Ge.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};Ge.prototype.hotUpdate=function(e){this._modules.update(e),kp(this,!0)};Ge.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(Ge.prototype,Ql);/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Yn=typeof window<"u";function JI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const oe=Object.assign;function Uo(t,e){const n={};for(const s in e){const i=e[s];n[s]=dt(i)?i.map(t):t(i)}return n}const ni=()=>{},dt=Array.isArray,XI=/\/$/,ZI=t=>t.replace(XI,"");function Wo(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=sT(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function eT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function zu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function tT(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Es(e.matched[s],n.matched[i])&&Wp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Es(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Wp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!nT(t[n],e[n]))return!1;return!0}function nT(t,e){return dt(t)?qu(t,e):dt(e)?qu(e,t):t===e}function qu(t,e){return dt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function sT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var wi;(function(t){t.pop="pop",t.push="push"})(wi||(wi={}));var si;(function(t){t.back="back",t.forward="forward",t.unknown=""})(si||(si={}));function iT(t){if(!t)if(Yn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ZI(t)}const rT=/^[^#]+#/;function oT(t,e){return t.replace(rT,"#")+e}function aT(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const uo=()=>({left:window.pageXOffset,top:window.pageYOffset});function lT(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=aT(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Yu(t,e){return(history.state?history.state.position-e:-1)+t}const Aa=new Map;function cT(t,e){Aa.set(t,e)}function uT(t){const e=Aa.get(t);return Aa.delete(t),e}let hT=()=>location.protocol+"//"+location.host;function Bp(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),zu(l,"")}return zu(n,t)+s+i}function dT(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const _=Bp(t,location),m=n.value,w=e.value;let A=0;if(d){if(n.value=_,e.value=d,o&&o===m){o=null;return}A=w?d.position-w.position:0}else s(_);i.forEach(N=>{N(n.value,m,{delta:A,type:wi.pop,direction:A?A>0?si.forward:si.back:si.unknown})})};function l(){o=n.value}function c(d){i.push(d);const _=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return r.push(_),_}function u(){const{history:d}=window;d.state&&d.replaceState(oe({},d.state,{scroll:uo()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Qu(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?uo():null}}function fT(t){const{history:e,location:n}=window,s={value:Bp(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:hT()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(_){console.error(_),n[u?"replace":"assign"](d)}}function o(l,c){const u=oe({},e.state,Qu(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=oe({},i.value,e.state,{forward:l,scroll:uo()});r(u.current,u,!0);const h=oe({},Qu(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function pT(t){t=iT(t);const e=fT(t),n=dT(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=oe({location:"",base:t,go:s,createHref:oT.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function _T(t){return typeof t=="string"||t&&typeof t=="object"}function Hp(t){return typeof t=="string"||typeof t=="symbol"}const $t={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},$p=Symbol("");var Ju;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ju||(Ju={}));function ws(t,e){return oe(new Error,{type:t,[$p]:!0},e)}function Rt(t,e){return t instanceof Error&&$p in t&&(e==null||!!(t.type&e))}const Xu="[^/]+?",gT={sensitive:!1,strict:!1,start:!0,end:!0},mT=/[.+*?^${}()[\]/\\]/g;function vT(t,e){const n=oe({},gT,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let _=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(mT,"\\$&"),_+=40;else if(d.type===1){const{value:m,repeatable:w,optional:A,regexp:N}=d;r.push({name:m,repeatable:w,optional:A});const O=N||Xu;if(O!==Xu){_+=10;try{new RegExp(`(${O})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${m}" (${O}): `+x.message)}}let H=w?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;h||(H=A&&c.length<2?`(?:/${H})`:"/"+H),A&&(H+="?"),i+=H,_+=20,A&&(_+=-8),w&&(_+=-20),O===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const _=u[d]||"",m=r[d-1];h[m.name]=_&&m.repeatable?_.split("/"):_}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of d)if(_.type===0)u+=_.value;else if(_.type===1){const{value:m,repeatable:w,optional:A}=_,N=m in c?c[m]:"";if(dt(N)&&!w)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const O=dt(N)?N.join("/"):N;if(!O)if(A)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=O}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function yT(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function ET(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=yT(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Zu(s))return 1;if(Zu(i))return-1}return i.length-s.length}function Zu(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const wT={type:0,value:""},CT=/[a-zA-Z0-9_]/;function bT(t){if(!t)return[[]];if(t==="/")return[[wT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:CT.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function IT(t,e,n){const s=vT(bT(t.path),n),i=oe(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function TT(t,e){const n=[],s=new Map;e=nh({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const _=!d,m=ST(u);m.aliasOf=d&&d.record;const w=nh(e,u),A=[m];if("alias"in u){const H=typeof u.alias=="string"?[u.alias]:u.alias;for(const x of H)A.push(oe({},m,{components:d?d.record.components:m.components,path:x,aliasOf:d?d.record:m}))}let N,O;for(const H of A){const{path:x}=H;if(h&&x[0]!=="/"){const se=h.record.path,ge=se[se.length-1]==="/"?"":"/";H.path=h.record.path+(x&&ge+x)}if(N=IT(H,h,w),d?d.alias.push(N):(O=O||N,O!==N&&O.alias.push(N),_&&u.name&&!th(N)&&o(u.name)),m.children){const se=m.children;for(let ge=0;ge<se.length;ge++)r(se[ge],N,d&&d.children[ge])}d=d||N,(N.record.components&&Object.keys(N.record.components).length||N.record.name||N.record.redirect)&&l(N)}return O?()=>{o(O)}:ni}function o(u){if(Hp(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&ET(u,n[h])>=0&&(u.record.path!==n[h].record.path||!jp(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!th(u)&&s.set(u.record.name,u)}function c(u,h){let d,_={},m,w;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw ws(1,{location:u});w=d.record.name,_=oe(eh(h.params,d.keys.filter(O=>!O.optional).map(O=>O.name)),u.params&&eh(u.params,d.keys.map(O=>O.name))),m=d.stringify(_)}else if("path"in u)m=u.path,d=n.find(O=>O.re.test(m)),d&&(_=d.parse(m),w=d.record.name);else{if(d=h.name?s.get(h.name):n.find(O=>O.re.test(h.path)),!d)throw ws(1,{location:u,currentLocation:h});w=d.record.name,_=oe({},h.params,u.params),m=d.stringify(_)}const A=[];let N=d;for(;N;)A.unshift(N.record),N=N.parent;return{name:w,path:m,params:_,matched:A,meta:AT(A)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function eh(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function ST(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:RT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function RT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function th(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function AT(t){return t.reduce((e,n)=>oe(e,n.meta),{})}function nh(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function jp(t,e){return e.children.some(n=>n===t||jp(t,n))}const Vp=/#/g,PT=/&/g,NT=/\//g,kT=/=/g,OT=/\?/g,Kp=/\+/g,xT=/%5B/g,DT=/%5D/g,Gp=/%5E/g,MT=/%60/g,zp=/%7B/g,LT=/%7C/g,qp=/%7D/g,FT=/%20/g;function Jl(t){return encodeURI(""+t).replace(LT,"|").replace(xT,"[").replace(DT,"]")}function UT(t){return Jl(t).replace(zp,"{").replace(qp,"}").replace(Gp,"^")}function Pa(t){return Jl(t).replace(Kp,"%2B").replace(FT,"+").replace(Vp,"%23").replace(PT,"%26").replace(MT,"`").replace(zp,"{").replace(qp,"}").replace(Gp,"^")}function WT(t){return Pa(t).replace(kT,"%3D")}function BT(t){return Jl(t).replace(Vp,"%23").replace(OT,"%3F")}function HT(t){return t==null?"":BT(t).replace(NT,"%2F")}function xr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function $T(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Kp," "),o=r.indexOf("="),a=xr(o<0?r:r.slice(0,o)),l=o<0?null:xr(r.slice(o+1));if(a in e){let c=e[a];dt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function sh(t){let e="";for(let n in t){const s=t[n];if(n=WT(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(dt(s)?s.map(r=>r&&Pa(r)):[s&&Pa(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function jT(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=dt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const VT=Symbol(""),ih=Symbol(""),ho=Symbol(""),Xl=Symbol(""),Na=Symbol("");function $s(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Vt(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(ws(4,{from:n,to:e})):h instanceof Error?a(h):_T(h)?a(ws(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Bo(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(KT(a)){const c=(a.__vccOpts||a)[e];c&&i.push(Vt(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=JI(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Vt(d,n,s,r,o)()}))}}return i}function KT(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function rh(t){const e=Ze(ho),n=Ze(Xl),s=Qe(()=>e.resolve(it(t.to))),i=Qe(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Es.bind(null,u));if(d>-1)return d;const _=oh(l[c-2]);return c>1&&oh(u)===_&&h[h.length-1].path!==_?h.findIndex(Es.bind(null,l[c-2])):d}),r=Qe(()=>i.value>-1&&YT(n.params,s.value.params)),o=Qe(()=>i.value>-1&&i.value===n.matched.length-1&&Wp(n.params,s.value.params));function a(l={}){return qT(l)?e[it(t.replace)?"replace":"push"](it(t.to)).catch(ni):Promise.resolve()}return{route:s,href:Qe(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const GT=zh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:rh,setup(t,{slots:e}){const n=bi(rh(t)),{options:s}=Ze(ho),i=Qe(()=>({[ah(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[ah(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Xa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),zT=GT;function qT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function YT(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!dt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function oh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ah=(t,e,n)=>t??e??n,QT=zh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ze(Na),i=Qe(()=>t.route||s.value),r=Ze(ih,0),o=Qe(()=>{let c=it(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Qe(()=>i.value.matched[o.value]);Qi(ih,Qe(()=>o.value+1)),Qi(VT,a),Qi(Na,i);const l=W_();return ns(()=>[l.value,a.value,t.name],([c,u,h],[d,_,m])=>{u&&(u.instances[h]=c,_&&_!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),c&&u&&(!_||!Es(u,_)||!d)&&(u.enterCallbacks[h]||[]).forEach(w=>w(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return lh(n.default,{Component:d,route:c});const _=h.props[u],m=_?_===!0?c.params:typeof _=="function"?_(c):_:null,A=Xa(d,oe({},m,e,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return lh(n.default,{Component:A,route:c})||A}}});function lh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const JT=QT;function XT(t){const e=TT(t.routes,t),n=t.parseQuery||$T,s=t.stringifyQuery||sh,i=t.history,r=$s(),o=$s(),a=$s(),l=B_($t);let c=$t;Yn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Uo.bind(null,y=>""+y),h=Uo.bind(null,HT),d=Uo.bind(null,xr);function _(y,k){let R,L;return Hp(y)?(R=e.getRecordMatcher(y),L=k):L=y,e.addRoute(L,R)}function m(y){const k=e.getRecordMatcher(y);k&&e.removeRoute(k)}function w(){return e.getRoutes().map(y=>y.record)}function A(y){return!!e.getRecordMatcher(y)}function N(y,k){if(k=oe({},k||l.value),typeof y=="string"){const g=Wo(n,y,k.path),v=e.resolve({path:g.path},k),E=i.createHref(g.fullPath);return oe(g,v,{params:d(v.params),hash:xr(g.hash),redirectedFrom:void 0,href:E})}let R;if("path"in y)R=oe({},y,{path:Wo(n,y.path,k.path).path});else{const g=oe({},y.params);for(const v in g)g[v]==null&&delete g[v];R=oe({},y,{params:h(g)}),k.params=h(k.params)}const L=e.resolve(R,k),ne=y.hash||"";L.params=u(d(L.params));const f=eT(s,oe({},y,{hash:UT(ne),path:L.path})),p=i.createHref(f);return oe({fullPath:f,hash:ne,query:s===sh?jT(y.query):y.query||{}},L,{redirectedFrom:void 0,href:p})}function O(y){return typeof y=="string"?Wo(n,y,l.value.path):oe({},y)}function H(y,k){if(c!==y)return ws(8,{from:k,to:y})}function x(y){return be(y)}function se(y){return x(oe(O(y),{replace:!0}))}function ge(y){const k=y.matched[y.matched.length-1];if(k&&k.redirect){const{redirect:R}=k;let L=typeof R=="function"?R(y):R;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=O(L):{path:L},L.params={}),oe({query:y.query,hash:y.hash,params:"path"in L?{}:y.params},L)}}function be(y,k){const R=c=N(y),L=l.value,ne=y.state,f=y.force,p=y.replace===!0,g=ge(R);if(g)return be(oe(O(g),{state:typeof g=="object"?oe({},ne,g.state):ne,force:f,replace:p}),k||R);const v=R;v.redirectedFrom=k;let E;return!f&&tT(s,L,R)&&(E=ws(16,{to:v,from:L}),pt(L,L,!0,!1)),(E?Promise.resolve(E):ee(v,L)).catch(C=>Rt(C)?Rt(C,2)?C:Ft(C):te(C,v,L)).then(C=>{if(C){if(Rt(C,2))return be(oe({replace:p},O(C.to),{state:typeof C.to=="object"?oe({},ne,C.to.state):ne,force:f}),k||v)}else C=M(v,L,!0,p,ne);return Ie(v,L,C),C})}function V(y,k){const R=H(y,k);return R?Promise.reject(R):Promise.resolve()}function ie(y){const k=Un.values().next().value;return k&&typeof k.runWithContext=="function"?k.runWithContext(y):y()}function ee(y,k){let R;const[L,ne,f]=ZT(y,k);R=Bo(L.reverse(),"beforeRouteLeave",y,k);for(const g of L)g.leaveGuards.forEach(v=>{R.push(Vt(v,y,k))});const p=V.bind(null,y,k);return R.push(p),xe(R).then(()=>{R=[];for(const g of r.list())R.push(Vt(g,y,k));return R.push(p),xe(R)}).then(()=>{R=Bo(ne,"beforeRouteUpdate",y,k);for(const g of ne)g.updateGuards.forEach(v=>{R.push(Vt(v,y,k))});return R.push(p),xe(R)}).then(()=>{R=[];for(const g of f)if(g.beforeEnter)if(dt(g.beforeEnter))for(const v of g.beforeEnter)R.push(Vt(v,y,k));else R.push(Vt(g.beforeEnter,y,k));return R.push(p),xe(R)}).then(()=>(y.matched.forEach(g=>g.enterCallbacks={}),R=Bo(f,"beforeRouteEnter",y,k),R.push(p),xe(R))).then(()=>{R=[];for(const g of o.list())R.push(Vt(g,y,k));return R.push(p),xe(R)}).catch(g=>Rt(g,8)?g:Promise.reject(g))}function Ie(y,k,R){a.list().forEach(L=>ie(()=>L(y,k,R)))}function M(y,k,R,L,ne){const f=H(y,k);if(f)return f;const p=k===$t,g=Yn?history.state:{};R&&(L||p?i.replace(y.fullPath,oe({scroll:p&&g&&g.scroll},ne)):i.push(y.fullPath,ne)),l.value=y,pt(y,k,R,p),Ft()}let re;function Fe(){re||(re=i.listen((y,k,R)=>{if(!Li.listening)return;const L=N(y),ne=ge(L);if(ne){be(oe(ne,{replace:!0}),L).catch(ni);return}c=L;const f=l.value;Yn&&cT(Yu(f.fullPath,R.delta),uo()),ee(L,f).catch(p=>Rt(p,12)?p:Rt(p,2)?(be(p.to,L).then(g=>{Rt(g,20)&&!R.delta&&R.type===wi.pop&&i.go(-1,!1)}).catch(ni),Promise.reject()):(R.delta&&i.go(-R.delta,!1),te(p,L,f))).then(p=>{p=p||M(L,f,!1),p&&(R.delta&&!Rt(p,8)?i.go(-R.delta,!1):R.type===wi.pop&&Rt(p,20)&&i.go(-1,!1)),Ie(L,f,p)}).catch(ni)}))}let Tt=$s(),ye=$s(),ue;function te(y,k,R){Ft(y);const L=ye.list();return L.length?L.forEach(ne=>ne(y,k,R)):console.error(y),Promise.reject(y)}function St(){return ue&&l.value!==$t?Promise.resolve():new Promise((y,k)=>{Tt.add([y,k])})}function Ft(y){return ue||(ue=!y,Fe(),Tt.list().forEach(([k,R])=>y?R(y):k()),Tt.reset()),y}function pt(y,k,R,L){const{scrollBehavior:ne}=t;if(!Yn||!ne)return Promise.resolve();const f=!R&&uT(Yu(y.fullPath,0))||(L||!R)&&history.state&&history.state.scroll||null;return Fh().then(()=>ne(y,k,f)).then(p=>p&&lT(p)).catch(p=>te(p,y,k))}const $e=y=>i.go(y);let Fn;const Un=new Set,Li={currentRoute:l,listening:!0,addRoute:_,removeRoute:m,hasRoute:A,getRoutes:w,resolve:N,options:t,push:x,replace:se,go:$e,back:()=>$e(-1),forward:()=>$e(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:ye.add,isReady:St,install(y){const k=this;y.component("RouterLink",zT),y.component("RouterView",JT),y.config.globalProperties.$router=k,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>it(l)}),Yn&&!Fn&&l.value===$t&&(Fn=!0,x(i.location).catch(ne=>{}));const R={};for(const ne in $t)Object.defineProperty(R,ne,{get:()=>l.value[ne],enumerable:!0});y.provide(ho,k),y.provide(Xl,Ah(R)),y.provide(Na,l);const L=y.unmount;Un.add(y),y.unmount=function(){Un.delete(y),Un.size<1&&(c=$t,re&&re(),re=null,l.value=$t,Fn=!1,ue=!1),L()}}};function xe(y){return y.reduce((k,R)=>k.then(()=>ie(R)),Promise.resolve())}return Li}function ZT(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Es(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Es(c,l))||i.push(l))}return[n,s,i]}function eS(){return Ze(ho)}function zS(){return Ze(Xl)}const tS=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Ln=t=>(J_("data-v-a6b66ddf"),t=t(),X_(),t),nS={key:0,class:"loadingPage"},sS=Ln(()=>Q("h2",null,"LOADING.........",-1)),iS=[sS],rS={key:1,id:"appBox"},oS={class:"accounts"},aS={key:0,class:"nav_account"},lS={class:"nav_a_avatar"},cS=["src"],uS={class:"nav_a_name"},hS={class:"nav_a_menu"},dS={class:"nav_a_menuWrap"},fS=["onClick"],pS=["onClick"],_S=["onClick"],gS=Ln(()=>Q("hr",null,null,-1)),mS=["onClick"],vS=["onClick"],yS=Ln(()=>Q("hr",null,null,-1)),ES=Ln(()=>Q("dl",null,[Q("dt",null,"내 플레이리스트"),Q("dd",{class:"nav_a_menu_nolist"},[Q("p",null,"플레이리스트가 없습니다.")])],-1)),wS={key:1,class:"logout_account"},CS=Ln(()=>Q("button",{type:"button"},"로그인",-1)),bS=Ln(()=>Q("button",{type:"button"},"회원가입",-1)),IS=[CS,bS],TS=Ln(()=>Q("nav",null,null,-1)),SS={class:"mainWrap"},RS={__name:"App",setup(t){const e=xI(),n=eS();Yh(function(){e.dispatch("dataLoad"),Zd(ti,c=>{e.commit("setSetLoading",!0),c?Ia(zn(qn,`account/${ti.currentUser.uid}`)).then(u=>{const h=u.val();e.commit("loginAccount",h),n.push({name:"main"}),e.commit("setSetLoading",!1)}):(e.commit("loginAccount",null),n.push("/logIn"),e.commit("setSetLoading",!1))})});const s=function(){const c=document.querySelector(".nav_a_menu"),u=document.querySelector(".nav_account"),h=document.querySelector(".nav_a_menuWrap").offsetHeight;c.classList.toggle("drawing"),u.classList.toggle("drawing"),c.classList.contains("drawing")?(c.style.height=h+"px",c.style.backgroundColor="var(--main-color1)"):(c.style.height="0px",c.style.backgroundColor="white")},i=function(){n.push({name:"account",params:{ids:"my"}}),s()},r=function(){n.push({name:"main"}),e.commit("routing","Home"),s()},o=function(){n.push({name:"main"}),e.commit("routing","Music"),s()},a=function(){n.push({name:"main"}),e.commit("routing","Playlist"),s()},l=function(){n.push({name:"setting"}),s()};return(c,u)=>{const h=yg("router-view");return it(e).getters.getSetLoading?(Ks(),ji("div",nS,iS)):(Ks(),ji("div",rS,[Q("header",null,[Q("div",oS,[it(e).getters.loginStateCheck?(Ks(),ji("div",aS,[Q("div",{class:"nav_a_info",onClick:s},[Q("div",lS,[Q("img",{src:it(e).getters.getAccount.photoURL},null,8,cS)]),Q("div",uS,c_(it(e).getters.getAccount.name),1)]),Q("div",hS,[Q("div",dS,[Q("ul",null,[Q("li",null,[Q("a",{href:"/",onClick:Hn(r,["prevent"])},"홈",8,fS)]),Q("li",null,[Q("a",{href:"/",onClick:Hn(a,["prevent"])},"탐색",8,pS)]),Q("li",null,[Q("a",{href:"/",onClick:Hn(o,["prevent"])},"음악 검색",8,_S)])]),gS,Q("ul",null,[Q("li",null,[Q("a",{href:"/",onClick:Hn(i,["prevent"])},"내 정보",8,mS)]),Q("li",null,[Q("a",{href:"/",onClick:Hn(l,["prevent"])},"설정",8,vS)]),Q("li",null,[Q("a",{href:"/",onClick:u[0]||(u[0]=Hn(d=>it(e).dispatch("logout"),["prevent"]))},"로그아웃")])]),yS,ES])])])):(Ks(),ji("div",wS,IS)),TS])]),Q("main",null,[Q("div",SS,[We(h)])])]))}}},AS=tS(RS,[["__scopeId","data-v-a6b66ddf"]]),PS="modulepreload",NS=function(t){return"/"+t},ch={},Kn=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=NS(r),r in ch)return;ch[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":PS,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})},kS=[{name:"signIn",path:"/signIn",component:()=>Kn(()=>import("./signIn-9dcb2a0f.js"),["assets/signIn-9dcb2a0f.js","assets/signIn-42a2b425.css"])},{name:"logIn",path:"/logIn",component:()=>Kn(()=>import("./login-8fd92ab1.js"),["assets/login-8fd92ab1.js","assets/login-66698185.css"])},{name:"main",path:"/",component:()=>Kn(()=>import("./main-be37df0e.js"),["assets/main-be37df0e.js","assets/main-6ed896b1.css"])},{name:"account",path:"/account/:ids",component:()=>Kn(()=>import("./account-c85ea205.js"),["assets/account-c85ea205.js","assets/account-94fefe4d.css"])},{name:"player",path:"/player/:listkey",component:()=>Kn(()=>import("./player-08afe8cd.js"),["assets/player-08afe8cd.js","assets/player-c5369811.css"])},{name:"setting",path:"/setting",component:()=>Kn(()=>import("./settings-fe4e9f5b.js"),["assets/settings-fe4e9f5b.js","assets/settings-edc44ba7.css"])}],OS=XT({history:pT(),routes:kS}),xS=QI({state(){return{pageRouting:"Home",loginState:null,nowSearchMusic:null,setLoading:!1,dataUsers:{},dataPlaylists:{},dataHashs:{}}},mutations:{routing(t,e){t.pageRouting=e},loginAccount(t,e){t.loginState=e},storeSearching(t,e){t.nowSearchMusic=e},setSetLoading(t,e){console.log("[loading]",e),t.setLoading=e},setDataUsers(t,e){t.dataUsers=e},setDataPlaylists(t,e){t.dataPlaylists=e},setDataHashs(t,e){t.dataHashs=e}},getters:{page(t){return t.pageRouting},loginStateCheck(t){return t.loginState!=null},getAccount(t){return t.loginState},getNowSearchMusic(t){return t.nowSearchMusic},getSetLoading(t){return t.setLoading},getDataUsers(t){return t.dataUsers},getDataPlaylists(t){return t.dataPlaylists},getDataHashs(t){return t.dataHashs}},actions:{loginWithEmail({commit:t},e){t("setSetLoading",!0),Qy(ti,e.user_id,e.user_pwd).then(n=>{const s=n.user.uid;Ia(zn(qn,`account/${s}`)).then(i=>{i.val()}),t("setSetLoading",!1)}).catch(n=>{const s=n.code,i=n.message;console.log("[Login Error]"+s+" => "+i)})},logout({commit:t}){eE(ti).then(()=>{t("loginAccount",null),console.log("[Auth] logout")}).catch(e=>console.log(e.message))},pageLoading({commit:t,state:e}){t("setSetLoading",!0),Zd(ti,async function(n){if(n){const s=n.uid,i=await Ia(zn(qn,"account"+s));t("loginAccount",i.val()),console.log("page load",s),router.push("/"),t("setSetLoading",!1)}else t("setSetLoading",!1),router.push("/logIn")})},dataLoad({commit:t}){Lo(zn(qn,"account"),e=>{const n=e.val();t("setDataUsers",n),console.log("[userData]",n)}),Lo(zn(qn,"playlists"),e=>{const n=e.val();t("setDataPlaylists",n),console.log("[playlist data]",n)}),Lo(zn(qn,"hashs"),e=>{const n=e.val();t("setDataHashs",n),console.log("[hashs data]",n)})}}});var DS=function(){return!!(window.location.hostname==="localhost"||window.location.hostname==="[::1]"||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))},ka;typeof window<"u"&&(typeof Promise<"u"?ka=new Promise(function(t){return window.addEventListener("load",t)}):ka={then:function(t){return window.addEventListener("load",t)}});function MS(t,e){e===void 0&&(e={});var n=e.registrationOptions;n===void 0&&(n={}),delete e.registrationOptions;var s=function(i){for(var r=[],o=arguments.length-1;o-- >0;)r[o]=arguments[o+1];e&&e[i]&&e[i].apply(e,r)};"serviceWorker"in navigator&&ka.then(function(){DS()?(LS(t,s,n),navigator.serviceWorker.ready.then(function(i){s("ready",i)}).catch(function(i){return Ci(s,i)})):(Yp(t,s,n),navigator.serviceWorker.ready.then(function(i){s("ready",i)}).catch(function(i){return Ci(s,i)}))})}function Ci(t,e){navigator.onLine||t("offline"),t("error",e)}function Yp(t,e,n){navigator.serviceWorker.register(t,n).then(function(s){if(e("registered",s),s.waiting){e("updated",s);return}s.onupdatefound=function(){e("updatefound",s);var i=s.installing;i.onstatechange=function(){i.state==="installed"&&(navigator.serviceWorker.controller?e("updated",s):e("cached",s))}}}).catch(function(s){return Ci(e,s)})}function LS(t,e,n){fetch(t).then(function(s){s.status===404?(e("error",new Error("Service worker not found at "+t)),uh()):s.headers.get("content-type").indexOf("javascript")===-1?(e("error",new Error("Expected "+t+" to have javascript content-type, but received "+s.headers.get("content-type"))),uh()):Yp(t,e,n)}).catch(function(s){return Ci(e,s)})}function uh(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()}).catch(function(t){return Ci(emit,t)})}MS(`${{}.BASE_URL}service-worker.js`,{ready(){console.log(`App is being served from cache by a service worker.
For more details, visit https://goo.gl/AFskqB`)},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});Nm(AS).use(OS).use(xS).mount("#app");export{ns as A,Me as B,US as C,Ua as D,zS as E,mt as F,Bg as G,Lo as H,KS as I,We as J,Z_ as K,$S as L,dd as T,tS as _,xI as a,W_ as b,pg as c,Ks as d,ji as e,Q as f,it as g,BS as h,jg as i,Hn as j,jS as k,ti as l,GS as m,zn as n,Qh as o,qn as p,VS as q,bi as r,J_ as s,c_ as t,eS as u,HS as v,FS as w,X_ as x,WS as y,Ia as z};
