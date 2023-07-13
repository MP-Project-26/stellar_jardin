import{r as a,R as p,f as ut,k as ue}from"./app-fd46c604.js";var it=Object.defineProperty,at=(e,t,n)=>t in e?it(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ne=(e,t,n)=>(at(e,typeof t!="symbol"?t+"":t,n),n);let st=class{constructor(){ne(this,"current",this.detect()),ne(this,"handoffState","pending"),ne(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},L=new st,O=(e,t)=>{L.isServer?a.useEffect(e,t):a.useLayoutEffect(e,t)};function Q(e){let t=a.useRef(e);return O(()=>{t.current=e},[e]),t}function Z(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function me(){let e=[],t={addEventListener(n,r,o,u){return n.addEventListener(r,o,u),t.add(()=>n.removeEventListener(r,o,u))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);return t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...n))},setTimeout(...n){let r=setTimeout(...n);return t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return Z(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,o){let u=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:o}),this.add(()=>{Object.assign(n.style,{[r]:u})})},group(n){let r=me();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let o of e.splice(r,1))o()}},dispose(){for(let n of e.splice(0))n()}};return t}function ct(){let[e]=a.useState(me);return a.useEffect(()=>()=>e.dispose(),[e]),e}let E=function(e){let t=Q(e);return p.useCallback((...n)=>t.current(...n),[t])};function ee(){let[e,t]=a.useState(L.isHandoffComplete);return e&&L.isHandoffComplete===!1&&t(!1),a.useEffect(()=>{e!==!0&&t(!0)},[e]),a.useEffect(()=>L.handoff(),[]),e}var $e;let k=($e=p.useId)!=null?$e:function(){let e=ee(),[t,n]=p.useState(e?()=>L.nextId():null);return O(()=>{t===null&&n(L.nextId())},[t]),t!=null?""+t:void 0};function D(e,t,...n){if(e in t){let o=t[e];return typeof o=="function"?o(...n):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,D),r}function Oe(e){return L.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let ie=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var M=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(M||{}),Fe=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Fe||{}),dt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(dt||{});function ft(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(ie)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Ce=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Ce||{});function pt(e,t=0){var n;return e===((n=Oe(e))==null?void 0:n.body)?!1:D(t,{[0](){return e.matches(ie)},[1](){let r=e;for(;r!==null;){if(r.matches(ie))return!0;r=r.parentElement}return!1}})}var mt=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(mt||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function A(e){e==null||e.focus({preventScroll:!0})}let vt=["textarea","input"].join(",");function ht(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,vt))!=null?n:!1}function gt(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),u=t(r);if(o===null||u===null)return 0;let l=o.compareDocumentPosition(u);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function X(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){let u=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,l=Array.isArray(e)?n?gt(e):e:ft(e);o.length>0&&l.length>1&&(l=l.filter(m=>!o.includes(m))),r=r??u.activeElement;let i=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,l.indexOf(r))-1;if(t&4)return Math.max(0,l.indexOf(r))+1;if(t&8)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},c=0,f=l.length,v;do{if(c>=f||c+f<=0)return 0;let m=s+c;if(t&16)m=(m+f)%f;else{if(m<0)return 3;if(m>=f)return 1}v=l[m],v==null||v.focus(d),c+=i}while(v!==u.activeElement);return t&6&&ht(v)&&v.select(),2}function Te(e,t,n){let r=Q(t);a.useEffect(()=>{function o(u){r.current(u)}return document.addEventListener(e,o,n),()=>document.removeEventListener(e,o,n)},[e,n])}function Ne(e,t,n){let r=Q(t);a.useEffect(()=>{function o(u){r.current(u)}return window.addEventListener(e,o,n),()=>window.removeEventListener(e,o,n)},[e,n])}function Et(e,t,n=!0){let r=a.useRef(!1);a.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function o(l,i){if(!r.current||l.defaultPrevented)return;let s=i(l);if(s===null||!s.getRootNode().contains(s))return;let d=function c(f){return typeof f=="function"?c(f()):Array.isArray(f)||f instanceof Set?f:[f]}(e);for(let c of d){if(c===null)continue;let f=c instanceof HTMLElement?c:c.current;if(f!=null&&f.contains(s)||l.composed&&l.composedPath().includes(f))return}return!pt(s,Ce.Loose)&&s.tabIndex!==-1&&l.preventDefault(),t(l,s)}let u=a.useRef(null);Te("mousedown",l=>{var i,s;r.current&&(u.current=((s=(i=l.composedPath)==null?void 0:i.call(l))==null?void 0:s[0])||l.target)},!0),Te("click",l=>{u.current&&(o(l,()=>u.current),u.current=null)},!0),Ne("blur",l=>o(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}let De=Symbol();function wt(e,t=!0){return Object.assign(e,{[De]:t})}function F(...e){let t=a.useRef(e);a.useEffect(()=>{t.current=e},[e]);let n=E(r=>{for(let o of t.current)o!=null&&(typeof o=="function"?o(r):o.current=r)});return e.every(r=>r==null||(r==null?void 0:r[De]))?void 0:n}function Se(...e){return e.filter(Boolean).join(" ")}var ae=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(ae||{}),yt=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(yt||{});function $({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:u=!0,name:l}){let i=Me(t,e);if(u)return K(i,n,r,l);let s=o??0;if(s&2){let{static:d=!1,...c}=i;if(d)return K(c,n,r,l)}if(s&1){let{unmount:d=!0,...c}=i;return D(d?0:1,{[0](){return null},[1](){return K({...c,hidden:!0,style:{display:"none"}},n,r,l)}})}return K(i,n,r,l)}function K(e,t={},n,r){let{as:o=n,children:u,refName:l="ref",...i}=re(e,["unmount","static"]),s=e.ref!==void 0?{[l]:e.ref}:{},d=typeof u=="function"?u(t):u;"className"in i&&i.className&&typeof i.className=="function"&&(i.className=i.className(t));let c={};if(t){let f=!1,v=[];for(let[m,w]of Object.entries(t))typeof w=="boolean"&&(f=!0),w===!0&&v.push(m);f&&(c["data-headlessui-state"]=v.join(" "))}if(o===a.Fragment&&Object.keys(Pe(i)).length>0){if(!a.isValidElement(d)||Array.isArray(d)&&d.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(i).map(w=>`  - ${w}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(w=>`  - ${w}`).join(`
`)].join(`
`));let f=d.props,v=typeof(f==null?void 0:f.className)=="function"?(...w)=>Se(f==null?void 0:f.className(...w),i.className):Se(f==null?void 0:f.className,i.className),m=v?{className:v}:{};return a.cloneElement(d,Object.assign({},Me(d.props,Pe(re(i,["ref"]))),c,s,bt(d.ref,s.ref),m))}return a.createElement(o,Object.assign({},re(i,["ref"]),o!==a.Fragment&&s,o!==a.Fragment&&c),d)}function bt(...e){return{ref:e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}}function Me(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(n[o]!=null||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](o,...u){let l=n[r];for(let i of l){if((o instanceof Event||(o==null?void 0:o.nativeEvent)instanceof Event)&&o.defaultPrevented)return;i(o,...u)}}});return t}function T(e){var t;return Object.assign(a.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function Pe(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function re(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function $t(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&Tt(n)?!1:r}function Tt(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let St="div";var z=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(z||{});function Pt(e,t){let{features:n=1,...r}=e,o={ref:t,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return $({ourProps:o,theirProps:r,slot:{},defaultTag:St,name:"Hidden"})}let se=T(Pt),ve=a.createContext(null);ve.displayName="OpenClosedContext";var H=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(H||{});function Lt(){return a.useContext(ve)}function Wn({value:e,children:t}){return p.createElement(ve.Provider,{value:e},t)}var Re=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Re||{});function he(e,t){let n=a.useRef([]),r=E(e);a.useEffect(()=>{let o=[...n.current];for(let[u,l]of t.entries())if(n.current[u]!==l){let i=r(t,o);return n.current=t,i}},[r,...t])}function Ot(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}var B=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(B||{});function Ft(){let e=a.useRef(0);return Ne("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function Ae(){let e=a.useRef(!1);return O(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function U(...e){return a.useMemo(()=>Oe(...e),[...e])}function xe(e,t,n,r){let o=Q(n);a.useEffect(()=>{e=e??window;function u(l){o.current(l)}return e.addEventListener(t,u,r),()=>e.removeEventListener(t,u,r)},[e,t,r])}function Ct(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}function ke(e){let t=E(e),n=a.useRef(!1);a.useEffect(()=>(n.current=!1,()=>{n.current=!0,Z(()=>{n.current&&t()})}),[t])}function je(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let Nt="div";var Ie=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Ie||{});function Dt(e,t){let n=a.useRef(null),r=F(n,t),{initialFocus:o,containers:u,features:l=30,...i}=e;ee()||(l=1);let s=U(n);At({ownerDocument:s},!!(l&16));let d=xt({ownerDocument:s,container:n,initialFocus:o},!!(l&2));kt({ownerDocument:s,container:n,containers:u,previousActiveElement:d},!!(l&8));let c=Ft(),f=E(h=>{let S=n.current;S&&(C=>C())(()=>{D(c.current,{[B.Forwards]:()=>{X(S,M.First,{skipElements:[h.relatedTarget]})},[B.Backwards]:()=>{X(S,M.Last,{skipElements:[h.relatedTarget]})}})})}),v=ct(),m=a.useRef(!1),w={ref:r,onKeyDown(h){h.key=="Tab"&&(m.current=!0,v.requestAnimationFrame(()=>{m.current=!1}))},onBlur(h){let S=je(u);n.current instanceof HTMLElement&&S.add(n.current);let C=h.relatedTarget;C instanceof HTMLElement&&C.dataset.headlessuiFocusGuard!=="true"&&(He(S,C)||(m.current?X(n.current,D(c.current,{[B.Forwards]:()=>M.Next,[B.Backwards]:()=>M.Previous})|M.WrapAround,{relativeTo:h.target}):h.target instanceof HTMLElement&&A(h.target)))}};return p.createElement(p.Fragment,null,!!(l&4)&&p.createElement(se,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:z.Focusable}),$({ourProps:w,theirProps:i,defaultTag:Nt,name:"FocusTrap"}),!!(l&4)&&p.createElement(se,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:z.Focusable}))}let Mt=T(Dt),j=Object.assign(Mt,{features:Ie}),N=[];Ct(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&N[0]!==t.target&&(N.unshift(t.target),N=N.filter(n=>n!=null&&n.isConnected),N.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Rt(e=!0){let t=a.useRef(N.slice());return he(([n],[r])=>{r===!0&&n===!1&&Z(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=N.slice())},[e,N,t]),E(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function At({ownerDocument:e},t){let n=Rt(t);he(()=>{t||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&A(n())},[t]),ke(()=>{t&&A(n())})}function xt({ownerDocument:e,container:t,initialFocus:n},r){let o=a.useRef(null),u=Ae();return he(()=>{if(!r)return;let l=t.current;l&&Z(()=>{if(!u.current)return;let i=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===i){o.current=i;return}}else if(l.contains(i)){o.current=i;return}n!=null&&n.current?A(n.current):X(l,M.First)===Fe.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=e==null?void 0:e.activeElement})},[r]),o}function kt({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let u=Ae();xe(e==null?void 0:e.defaultView,"focus",l=>{if(!o||!u.current)return;let i=je(n);t.current instanceof HTMLElement&&i.add(t.current);let s=r.current;if(!s)return;let d=l.target;d&&d instanceof HTMLElement?He(i,d)?(r.current=d,A(d)):(l.preventDefault(),l.stopPropagation(),A(s)):A(r.current)},!0)}function He(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let Be=a.createContext(!1);function jt(){return a.useContext(Be)}function ce(e){return p.createElement(Be.Provider,{value:e.force},e.children)}function It(e){let t=jt(),n=a.useContext(Ue),r=U(e),[o,u]=a.useState(()=>{if(!t&&n!==null||L.isServer)return null;let l=r==null?void 0:r.getElementById("headlessui-portal-root");if(l)return l;if(r===null)return null;let i=r.createElement("div");return i.setAttribute("id","headlessui-portal-root"),r.body.appendChild(i)});return a.useEffect(()=>{o!==null&&(r!=null&&r.body.contains(o)||r==null||r.body.appendChild(o))},[o,r]),a.useEffect(()=>{t||n!==null&&u(n.current)},[n,u,t]),o}let Ht=a.Fragment;function Bt(e,t){let n=e,r=a.useRef(null),o=F(wt(c=>{r.current=c}),t),u=U(r),l=It(r),[i]=a.useState(()=>{var c;return L.isServer?null:(c=u==null?void 0:u.createElement("div"))!=null?c:null}),s=a.useContext(de),d=ee();return O(()=>{!l||!i||l.contains(i)||(i.setAttribute("data-headlessui-portal",""),l.appendChild(i))},[l,i]),O(()=>{if(i&&s)return s.register(i)},[s,i]),ke(()=>{var c;!l||!i||(i instanceof Node&&l.contains(i)&&l.removeChild(i),l.childNodes.length<=0&&((c=l.parentElement)==null||c.removeChild(l)))}),d?!l||!i?null:ut.createPortal($({ourProps:{ref:o},theirProps:n,defaultTag:Ht,name:"Portal"}),i):null}let Ut=a.Fragment,Ue=a.createContext(null);function _t(e,t){let{target:n,...r}=e,o={ref:F(t)};return p.createElement(Ue.Provider,{value:n},$({ourProps:o,theirProps:r,defaultTag:Ut,name:"Popover.Group"}))}let de=a.createContext(null);function Wt(){let e=a.useContext(de),t=a.useRef([]),n=E(u=>(t.current.push(u),e&&e.register(u),()=>r(u))),r=E(u=>{let l=t.current.indexOf(u);l!==-1&&t.current.splice(l,1),e&&e.unregister(u)}),o=a.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,a.useMemo(()=>function({children:u}){return p.createElement(de.Provider,{value:o},u)},[o])]}let qt=T(Bt),Vt=T(_t),fe=Object.assign(qt,{Group:Vt}),_e=a.createContext(null);function We(){let e=a.useContext(_e);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,We),t}return e}function Yt(){let[e,t]=a.useState([]);return[e.length>0?e.join(" "):void 0,a.useMemo(()=>function(n){let r=E(u=>(t(l=>[...l,u]),()=>t(l=>{let i=l.slice(),s=i.indexOf(u);return s!==-1&&i.splice(s,1),i}))),o=a.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return p.createElement(_e.Provider,{value:o},n.children)},[t])]}let Gt="p";function Kt(e,t){let n=k(),{id:r=`headlessui-description-${n}`,...o}=e,u=We(),l=F(t);O(()=>u.register(r),[r,u.register]);let i={ref:l,...u.props,id:r};return $({ourProps:i,theirProps:o,slot:u.slot||{},defaultTag:Gt,name:u.name||"Description"})}let Xt=T(Kt),zt=Object.assign(Xt,{}),ge=a.createContext(()=>{});ge.displayName="StackContext";var pe=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(pe||{});function Jt(){return a.useContext(ge)}function Qt({children:e,onUpdate:t,type:n,element:r,enabled:o}){let u=Jt(),l=E((...i)=>{t==null||t(...i),u(...i)});return O(()=>{let i=o===void 0||o===!0;return i&&l(0,n,r),()=>{i&&l(1,n,r)}},[l,n,r,o]),p.createElement(ge.Provider,{value:l},e)}function Zt(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const en=typeof Object.is=="function"?Object.is:Zt,{useState:tn,useEffect:nn,useLayoutEffect:rn,useDebugValue:on}=ue;function ln(e,t,n){const r=t(),[{inst:o},u]=tn({inst:{value:r,getSnapshot:t}});return rn(()=>{o.value=r,o.getSnapshot=t,oe(o)&&u({inst:o})},[e,r,t]),nn(()=>(oe(o)&&u({inst:o}),e(()=>{oe(o)&&u({inst:o})})),[e]),on(r),r}function oe(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!en(n,r)}catch{return!0}}function un(e,t,n){return t()}const an=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",sn=!an,cn=sn?un:ln,dn="useSyncExternalStore"in ue?(e=>e.useSyncExternalStore)(ue):cn;function fn(e){return dn(e.subscribe,e.getSnapshot,e.getSnapshot)}function pn(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(o){return r.add(o),()=>r.delete(o)},dispatch(o,...u){let l=t[o].call(n,...u);l&&(n=l,r.forEach(i=>i()))}}}function mn(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,o=r.clientWidth-r.offsetWidth,u=e-o;n.style(r,"paddingRight",`${u}px`)}}}function vn(){if(!Ot())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:r}){function o(l){return r.containers.flatMap(i=>i()).some(i=>i.contains(l))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let u=null;n.addEventListener(t,"click",l=>{if(l.target instanceof HTMLElement)try{let i=l.target.closest("a");if(!i)return;let{hash:s}=new URL(i.href),d=t.querySelector(s);d&&!o(d)&&(u=d)}catch{}},!0),n.addEventListener(t,"touchmove",l=>{l.target instanceof HTMLElement&&!o(l.target)&&l.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),u&&u.isConnected&&(u.scrollIntoView({block:"nearest"}),u=null)})}}}function hn(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function gn(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let R=pn(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:me(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:gn(n)},o=[vn(),mn(),hn()];o.forEach(({before:u})=>u==null?void 0:u(r)),o.forEach(({after:u})=>u==null?void 0:u(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});R.subscribe(()=>{let e=R.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",o=n.count!==0;(o&&!r||!o&&r)&&R.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&R.dispatch("TEARDOWN",n)}});function En(e,t,n){let r=fn(R),o=e?r.get(e):void 0,u=o?o.count>0:!1;return O(()=>{if(!(!e||!t))return R.dispatch("PUSH",e,n),()=>R.dispatch("POP",e,n)},[t,e]),u}let le=new Map,I=new Map;function Le(e,t=!0){O(()=>{var n;if(!t)return;let r=typeof e=="function"?e():e.current;if(!r)return;function o(){var l;if(!r)return;let i=(l=I.get(r))!=null?l:1;if(i===1?I.delete(r):I.set(r,i-1),i!==1)return;let s=le.get(r);s&&(s["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",s["aria-hidden"]),r.inert=s.inert,le.delete(r))}let u=(n=I.get(r))!=null?n:0;return I.set(r,u+1),u!==0||(le.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),o},[e,t])}function wn({defaultContainers:e=[],portals:t}={}){let n=a.useRef(null),r=U(n),o=E(()=>{var u;let l=[];for(let i of e)i!==null&&(i instanceof HTMLElement?l.push(i):"current"in i&&i.current instanceof HTMLElement&&l.push(i.current));if(t!=null&&t.current)for(let i of t.current)l.push(i);for(let i of(u=r==null?void 0:r.querySelectorAll("html > *, body > *"))!=null?u:[])i!==document.body&&i!==document.head&&i instanceof HTMLElement&&i.id!=="headlessui-portal-root"&&(i.contains(n.current)||l.some(s=>i.contains(s))||l.push(i));return l});return{resolveContainers:o,contains:E(u=>o().some(l=>l.contains(u))),mainTreeNodeRef:n,MainTreeNode:a.useMemo(()=>function(){return p.createElement(se,{features:z.Hidden,ref:n})},[n])}}var yn=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(yn||{}),bn=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(bn||{});let $n={[0](e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},J=a.createContext(null);J.displayName="DialogContext";function _(e){let t=a.useContext(J);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,_),n}return t}function Tn(e,t,n=()=>[document.body]){En(e,t,r=>{var o;return{containers:[...(o=r.containers)!=null?o:[],n]}})}function Sn(e,t){return D(t.type,$n,e,t)}let Pn="div",Ln=ae.RenderStrategy|ae.Static;function On(e,t){var n;let r=k(),{id:o=`headlessui-dialog-${r}`,open:u,onClose:l,initialFocus:i,__demoMode:s=!1,...d}=e,[c,f]=a.useState(0),v=Lt();u===void 0&&v!==null&&(u=(v&H.Open)===H.Open);let m=a.useRef(null),w=F(m,t),h=U(m),S=e.hasOwnProperty("open")||v!==null,C=e.hasOwnProperty("onClose");if(!S&&!C)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!S)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!C)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof u!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u}`);if(typeof l!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l}`);let y=u?0:1,[W,qe]=a.useReducer(Sn,{titleId:null,descriptionId:null,panelRef:a.createRef()}),x=E(()=>l(!1)),Ee=E(g=>qe({type:0,id:g})),q=ee()?s?!1:y===0:!1,V=c>1,we=a.useContext(J)!==null,[Ve,Ye]=Wt(),{resolveContainers:te,mainTreeNodeRef:Y,MainTreeNode:Ge}=wn({portals:Ve,defaultContainers:[(n=W.panelRef.current)!=null?n:m.current]}),Ke=V?"parent":"leaf",ye=v!==null?(v&H.Closing)===H.Closing:!1,Xe=(()=>we||ye?!1:q)(),ze=a.useCallback(()=>{var g,P;return(P=Array.from((g=h==null?void 0:h.querySelectorAll("body > *"))!=null?g:[]).find(b=>b.id==="headlessui-portal-root"?!1:b.contains(Y.current)&&b instanceof HTMLElement))!=null?P:null},[Y]);Le(ze,Xe);let Je=(()=>V?!0:q)(),Qe=a.useCallback(()=>{var g,P;return(P=Array.from((g=h==null?void 0:h.querySelectorAll("[data-headlessui-portal]"))!=null?g:[]).find(b=>b.contains(Y.current)&&b instanceof HTMLElement))!=null?P:null},[Y]);Le(Qe,Je);let Ze=(()=>!(!q||V))();Et(te,x,Ze);let et=(()=>!(V||y!==0))();xe(h==null?void 0:h.defaultView,"keydown",g=>{et&&(g.defaultPrevented||g.key===Re.Escape&&(g.preventDefault(),g.stopPropagation(),x()))});let tt=(()=>!(ye||y!==0||we))();Tn(h,tt,te),a.useEffect(()=>{if(y!==0||!m.current)return;let g=new ResizeObserver(P=>{for(let b of P){let G=b.target.getBoundingClientRect();G.x===0&&G.y===0&&G.width===0&&G.height===0&&x()}});return g.observe(m.current),()=>g.disconnect()},[y,m,x]);let[nt,rt]=Yt(),ot=a.useMemo(()=>[{dialogState:y,close:x,setTitleId:Ee},W],[y,W,x,Ee]),be=a.useMemo(()=>({open:y===0}),[y]),lt={ref:w,id:o,role:"dialog","aria-modal":y===0?!0:void 0,"aria-labelledby":W.titleId,"aria-describedby":nt};return p.createElement(Qt,{type:"Dialog",enabled:y===0,element:m,onUpdate:E((g,P)=>{P==="Dialog"&&D(g,{[pe.Add]:()=>f(b=>b+1),[pe.Remove]:()=>f(b=>b-1)})})},p.createElement(ce,{force:!0},p.createElement(fe,null,p.createElement(J.Provider,{value:ot},p.createElement(fe.Group,{target:m},p.createElement(ce,{force:!1},p.createElement(rt,{slot:be,name:"Dialog.Description"},p.createElement(j,{initialFocus:i,containers:te,features:q?D(Ke,{parent:j.features.RestoreFocus,leaf:j.features.All&~j.features.FocusLock}):j.features.None},p.createElement(Ye,null,$({ourProps:lt,theirProps:d,slot:be,defaultTag:Pn,features:Ln,visible:y===0,name:"Dialog"}))))))))),p.createElement(Ge,null))}let Fn="div";function Cn(e,t){let n=k(),{id:r=`headlessui-dialog-overlay-${n}`,...o}=e,[{dialogState:u,close:l}]=_("Dialog.Overlay"),i=F(t),s=E(c=>{if(c.target===c.currentTarget){if($t(c.currentTarget))return c.preventDefault();c.preventDefault(),c.stopPropagation(),l()}}),d=a.useMemo(()=>({open:u===0}),[u]);return $({ourProps:{ref:i,id:r,"aria-hidden":!0,onClick:s},theirProps:o,slot:d,defaultTag:Fn,name:"Dialog.Overlay"})}let Nn="div";function Dn(e,t){let n=k(),{id:r=`headlessui-dialog-backdrop-${n}`,...o}=e,[{dialogState:u},l]=_("Dialog.Backdrop"),i=F(t);a.useEffect(()=>{if(l.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[l.panelRef]);let s=a.useMemo(()=>({open:u===0}),[u]);return p.createElement(ce,{force:!0},p.createElement(fe,null,$({ourProps:{ref:i,id:r,"aria-hidden":!0},theirProps:o,slot:s,defaultTag:Nn,name:"Dialog.Backdrop"})))}let Mn="div";function Rn(e,t){let n=k(),{id:r=`headlessui-dialog-panel-${n}`,...o}=e,[{dialogState:u},l]=_("Dialog.Panel"),i=F(t,l.panelRef),s=a.useMemo(()=>({open:u===0}),[u]),d=E(c=>{c.stopPropagation()});return $({ourProps:{ref:i,id:r,onClick:d},theirProps:o,slot:s,defaultTag:Mn,name:"Dialog.Panel"})}let An="h2";function xn(e,t){let n=k(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:u,setTitleId:l}]=_("Dialog.Title"),i=F(t);a.useEffect(()=>(l(r),()=>l(null)),[r,l]);let s=a.useMemo(()=>({open:u===0}),[u]);return $({ourProps:{ref:i,id:r},theirProps:o,slot:s,defaultTag:An,name:"Dialog.Title"})}let kn=T(On),jn=T(Dn),In=T(Rn),Hn=T(Cn),Bn=T(xn),qn=Object.assign(kn,{Backdrop:jn,Panel:In,Overlay:Hn,Title:Bn,Description:zt});export{Lt as C,T as D,ae as S,$ as X,qn as _,ee as a,E as b,Wn as c,H as d,Se as e,Ae as f,yt as j,O as l,me as o,ct as p,Q as s,D as u,F as y};
