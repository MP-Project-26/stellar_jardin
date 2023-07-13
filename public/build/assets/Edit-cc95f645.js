import{r as s,R as C,a,j as h,q as xe,W as Q}from"./app-fd46c604.js";import{T as R,I as be}from"./TextInput-2b47e509.js";import{L as ye}from"./LayoutAdmin-8736fa77.js";import{I as _}from"./InputError-72e0acc0.js";import{f as Z,u as T,o as ee,p as le,s as k,l as oe,S as Ne,D as te,y as ie,j as S,a as ce,b as P,e as Ce,c as Fe,d as E,X as ue,C as de,_ as ne}from"./dialog-41468972.js";import"./iconBase-f10177b7.js";function Ee(t=0){let[e,r]=s.useState(t),n=Z(),c=s.useCallback(l=>{n.current&&r(i=>i|l)},[e,n]),f=s.useCallback(l=>!!(e&l),[e]),u=s.useCallback(l=>{n.current&&r(i=>i&~l)},[r,n]),d=s.useCallback(l=>{n.current&&r(i=>i^l)},[r]);return{flags:e,addFlag:c,hasFlag:f,removeFlag:u,toggleFlag:d}}function Te(t){let e={called:!1};return(...r)=>{if(!e.called)return e.called=!0,t(...r)}}function J(t,...e){t&&e.length>0&&t.classList.add(...e)}function K(t,...e){t&&e.length>0&&t.classList.remove(...e)}function Se(t,e){let r=ee();if(!t)return r.dispose;let{transitionDuration:n,transitionDelay:c}=getComputedStyle(t),[f,u]=[n,c].map(l=>{let[i=0]=l.split(",").filter(Boolean).map(m=>m.includes("ms")?parseFloat(m):parseFloat(m)*1e3).sort((m,w)=>w-m);return i}),d=f+u;if(d!==0){r.group(i=>{i.setTimeout(()=>{e(),i.dispose()},d),i.addEventListener(t,"transitionrun",m=>{m.target===m.currentTarget&&i.dispose()})});let l=r.addEventListener(t,"transitionend",i=>{i.target===i.currentTarget&&(e(),l())})}else e();return r.add(()=>e()),r.dispose}function Pe(t,e,r,n){let c=r?"enter":"leave",f=ee(),u=n!==void 0?Te(n):()=>{};c==="enter"&&(t.removeAttribute("hidden"),t.style.display="");let d=T(c,{enter:()=>e.enter,leave:()=>e.leave}),l=T(c,{enter:()=>e.enterTo,leave:()=>e.leaveTo}),i=T(c,{enter:()=>e.enterFrom,leave:()=>e.leaveFrom});return K(t,...e.enter,...e.enterTo,...e.enterFrom,...e.leave,...e.leaveFrom,...e.leaveTo,...e.entered),J(t,...d,...i),f.nextFrame(()=>{K(t,...i),J(t,...l),Se(t,()=>(K(t,...d),J(t,...e.entered),u()))}),f.dispose}function De({container:t,direction:e,classes:r,onStart:n,onStop:c}){let f=Z(),u=le(),d=k(e);oe(()=>{let l=ee();u.add(l.dispose);let i=t.current;if(i&&d.current!=="idle"&&f.current)return l.dispose(),n.current(d.current),l.add(Pe(i,r.current,d.current==="enter",()=>{l.dispose(),c.current(d.current)})),l.dispose},[e])}function D(t=""){return t.split(" ").filter(e=>e.trim().length>1)}let U=s.createContext(null);U.displayName="TransitionContext";var $e=(t=>(t.Visible="visible",t.Hidden="hidden",t))($e||{});function Re(){let t=s.useContext(U);if(t===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}function _e(){let t=s.useContext(j);if(t===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}let j=s.createContext(null);j.displayName="NestingContext";function B(t){return"children"in t?B(t.children):t.current.filter(({el:e})=>e.current!==null).filter(({state:e})=>e==="visible").length>0}function me(t,e){let r=k(t),n=s.useRef([]),c=Z(),f=le(),u=P((p,o=S.Hidden)=>{let x=n.current.findIndex(({el:v})=>v===p);x!==-1&&(T(o,{[S.Unmount](){n.current.splice(x,1)},[S.Hidden](){n.current[x].state="hidden"}}),f.microTask(()=>{var v;!B(n)&&c.current&&((v=r.current)==null||v.call(r))}))}),d=P(p=>{let o=n.current.find(({el:x})=>x===p);return o?o.state!=="visible"&&(o.state="visible"):n.current.push({el:p,state:"visible"}),()=>u(p,S.Unmount)}),l=s.useRef([]),i=s.useRef(Promise.resolve()),m=s.useRef({enter:[],leave:[],idle:[]}),w=P((p,o,x)=>{l.current.splice(0),e&&(e.chains.current[o]=e.chains.current[o].filter(([v])=>v!==p)),e==null||e.chains.current[o].push([p,new Promise(v=>{l.current.push(v)})]),e==null||e.chains.current[o].push([p,new Promise(v=>{Promise.all(m.current[o].map(([b,$])=>$)).then(()=>v())})]),o==="enter"?i.current=i.current.then(()=>e==null?void 0:e.wait.current).then(()=>x(o)):x(o)}),g=P((p,o,x)=>{Promise.all(m.current[o].splice(0).map(([v,b])=>b)).then(()=>{var v;(v=l.current.shift())==null||v()}).then(()=>x(o))});return s.useMemo(()=>({children:n,register:d,unregister:u,onStart:w,onStop:g,wait:i,chains:m}),[d,u,n,w,g,m,i])}function Le(){}let ke=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function ae(t){var e;let r={};for(let n of ke)r[n]=(e=t[n])!=null?e:Le;return r}function Ae(t){let e=s.useRef(ae(t));return s.useEffect(()=>{e.current=ae(t)},[t]),e}let He="div",fe=Ne.RenderStrategy;function Ie(t,e){let{beforeEnter:r,afterEnter:n,beforeLeave:c,afterLeave:f,enter:u,enterFrom:d,enterTo:l,entered:i,leave:m,leaveFrom:w,leaveTo:g,...p}=t,o=s.useRef(null),x=ie(o,e),v=p.unmount?S.Unmount:S.Hidden,{show:b,appear:$,initial:N}=Re(),[y,M]=s.useState(b?"visible":"hidden"),re=_e(),{register:A,unregister:H}=re,q=s.useRef(null);s.useEffect(()=>A(o),[A,o]),s.useEffect(()=>{if(v===S.Hidden&&o.current){if(b&&y!=="visible"){M("visible");return}return T(y,{hidden:()=>H(o),visible:()=>A(o)})}},[y,o,A,H,b,v]);let z=k({enter:D(u),enterFrom:D(d),enterTo:D(l),entered:D(i),leave:D(m),leaveFrom:D(w),leaveTo:D(g)}),I=Ae({beforeEnter:r,afterEnter:n,beforeLeave:c,afterLeave:f}),V=ce();s.useEffect(()=>{if(V&&y==="visible"&&o.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[o,y,V]);let W=N&&!$,he=(()=>!V||W||q.current===b?"idle":b?"enter":"leave")(),L=Ee(0),ge=P(F=>T(F,{enter:()=>{L.addFlag(E.Opening),I.current.beforeEnter()},leave:()=>{L.addFlag(E.Closing),I.current.beforeLeave()},idle:()=>{}})),ve=P(F=>T(F,{enter:()=>{L.removeFlag(E.Opening),I.current.afterEnter()},leave:()=>{L.removeFlag(E.Closing),I.current.afterLeave()},idle:()=>{}})),O=me(()=>{M("hidden"),H(o)},re);De({container:o,classes:z,direction:he,onStart:k(F=>{O.onStart(o,F,ge)}),onStop:k(F=>{O.onStop(o,F,ve),F==="leave"&&!B(O)&&(M("hidden"),H(o))})}),s.useEffect(()=>{W&&(v===S.Hidden?q.current=null:q.current=b)},[b,W,y]);let G=p,we={ref:x};return $&&b&&N&&(G={...G,className:Ce(p.className,...z.current.enter,...z.current.enterFrom)}),C.createElement(j.Provider,{value:O},C.createElement(Fe,{value:T(y,{visible:E.Open,hidden:E.Closed})|L.flags},ue({ourProps:we,theirProps:G,defaultTag:He,features:fe,visible:y==="visible",name:"Transition.Child"})))}function Oe(t,e){let{show:r,appear:n=!1,unmount:c,...f}=t,u=s.useRef(null),d=ie(u,e);ce();let l=de();if(r===void 0&&l!==null&&(r=(l&E.Open)===E.Open),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[i,m]=s.useState(r?"visible":"hidden"),w=me(()=>{m("hidden")}),[g,p]=s.useState(!0),o=s.useRef([r]);oe(()=>{g!==!1&&o.current[o.current.length-1]!==r&&(o.current.push(r),p(!1))},[o,r]);let x=s.useMemo(()=>({show:r,appear:n,initial:g}),[r,n,g]);s.useEffect(()=>{if(r)m("visible");else if(!B(w))m("hidden");else{let N=u.current;if(!N)return;let y=N.getBoundingClientRect();y.x===0&&y.y===0&&y.width===0&&y.height===0&&m("hidden")}},[r,w]);let v={unmount:c},b=P(()=>{var N;g&&p(!1),(N=t.beforeEnter)==null||N.call(t)}),$=P(()=>{var N;g&&p(!1),(N=t.beforeLeave)==null||N.call(t)});return C.createElement(j.Provider,{value:w},C.createElement(U.Provider,{value:x},ue({ourProps:{...v,as:s.Fragment,children:C.createElement(pe,{ref:d,...v,...f,beforeEnter:b,beforeLeave:$})},theirProps:{},defaultTag:s.Fragment,features:fe,visible:i==="visible",name:"Transition"})))}function Ue(t,e){let r=s.useContext(U)!==null,n=de()!==null;return C.createElement(C.Fragment,null,!r&&n?C.createElement(Y,{ref:e,...t}):C.createElement(pe,{ref:e,...t}))}let Y=te(Oe),pe=te(Ie),je=te(Ue),X=Object.assign(Y,{Child:je,Root:Y});function se({className:t="",disabled:e,children:r,...n}){return a("button",{...n,className:`inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${e&&"opacity-25"} `+t,disabled:e,children:r})}function Be({children:t,show:e=!1,maxWidth:r="2xl",closeable:n=!0,onClose:c=()=>{}}){const f=()=>{n&&c()},u={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[r];return a(X,{show:e,as:s.Fragment,leave:"duration-200",children:h(ne,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:f,children:[a(X.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:a("div",{className:"absolute inset-0 bg-gray-500/75"})}),a(X.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:a(ne.Panel,{className:`mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${u}`,children:t})})]})})}function Me({type:t="button",className:e="",disabled:r,children:n,...c}){return a("button",{...c,type:t,className:`inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${r&&"opacity-25"} `+e,disabled:r,children:n})}function Qe({auth:t,mustVerifyEmail:e,status:r}){return a(ye,{title:"Dashboard",auth:t,children:h("div",{className:"w-full justify-center items-center flex flex-col pt-[5rem] gap-[2rem]",children:[a(qe,{mustVerifyEmail:e,status:r}),a(ze,{}),a(Ve,{})]})})}const qe=({mustVerifyEmail:t,status:e,className:r=""})=>{const n=xe().props.auth.user,{data:c,setData:f,patch:u,errors:d,processing:l,recentlySuccessful:i}=Q({name:n.name,email:n.email});return h("div",{className:"bg-green-custom w-[30rem] p-3 flex flex-col gap-2 rounded-xl",children:[a("h1",{className:"font-sans font-bold text-white text-2xl md:text-3xl",children:"Edit Profil"}),h("form",{onSubmit:w=>{w.preventDefault(),u(route("profile.update"))},className:" space-y-4",children:[h("div",{className:"w-full  space-y-2",children:[h("label",{htmlFor:"name",className:"text-2xl text-white font-medium",children:["Name"," ",a("span",{className:"text-white font-extrabold",children:"*"})]})," ",a(R,{id:"name",label:"name",name:"name",type:"text",className:"w-full",required:!0,isFocused:!0,autoComplete:"name",value:c.name,onChange:w=>f("name",w.target.value)}),a(_,{className:"mt-2 bg-gray-900 p-1 ",message:d.name})]}),h("div",{className:"w-full space-y-2",children:[h("label",{htmlFor:"email",className:"text-2xl text-white font-medium",children:["Email"," ",a("span",{className:"text-white font-extrabold",children:"*"})]})," ",a(R,{id:"email",label:"email",name:"email",type:"text",className:"w-full",required:!0,isFocused:!0,autoComplete:"email",value:c.email,onChange:w=>f("email",w.target.value)}),a(_,{className:"mt-2  bg-gray-900 p-1 ",message:d.email})]}),i?a("button",{className:"bg-white rounded-md p-2 text-green-custom font-bold select-none",children:"Loading"}):a("button",{className:"bg-white rounded-md p-2 text-green-custom font-bold select-none",disabled:l,children:"Save"}),t&&n.email_verified_at===null&&h("div",{children:[h("p",{className:"text-sm mt-2 bg-gray-900 p-1  text-gray-800",children:["Your email address is unverified.",a(Link,{href:route("verification.send"),method:"post",as:"button",className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Click here to re-send the verification email."})]}),e==="verification-link-sent"&&a("div",{className:"mt-2 bg-gray-900 p-1  font-medium text-sm text-green-600",children:"A new verification link has been sent to your email address."})]})]})]})},ze=({status:t,className:e=""})=>{const r=s.useRef(),n=s.useRef(),{data:c,setData:f,errors:u,put:d,reset:l,processing:i,recentlySuccessful:m}=Q({current_password:"",password:"",password_confirmation:""});return h("div",{className:"bg-green-custom w-[30rem] p-3 flex flex-col gap-2 rounded-xl",children:[a("h1",{className:"font-sans font-bold text-white text-2xl md:text-3xl w-full",children:"Edit Profil"}),m&&a("span",{className:"text-center font-sans font-bold text-white bg-green-300 text-2xl md:text-3xl",children:"Berhasil"}),h("form",{onSubmit:g=>{g.preventDefault(),d(route("password.update"),{preserveScroll:!0,onSuccess:()=>l(),onError:p=>{p.password&&(l("password","password_confirmation"),r.current.focus()),p.current_password&&(l("current_password"),n.current.focus())}})},className:" space-y-4",children:[h("div",{className:"w-full  space-y-2",children:[h("label",{htmlFor:"current_password",className:"text-2xl text-white font-medium",children:["current password"," ",a("span",{className:"text-white font-extrabold",children:"*"})]})," ",a(R,{label:"current_password",id:"current_password",className:"w-full",ref:n,value:c.current_password,onChange:g=>f("current_password",g.target.value),type:"password",autoComplete:"current-password"}),a(_,{message:u.current_password,className:"mt-2 bg-gray-900 p-1 "})]}),h("div",{className:"w-full space-y-2",children:[h("label",{htmlFor:"password",className:"text-2xl text-white font-medium",children:["password"," ",a("span",{className:"text-white font-extrabold",children:"*"})]})," ",a(R,{label:"password",id:"password",ref:r,className:"w-full",value:c.password,onChange:g=>f("password",g.target.value),type:"password",autoComplete:"new-password"}),a(_,{message:u.password,className:"mt-2 bg-gray-900 p-1 "})]}),h("div",{className:"w-full space-y-2",children:[h("label",{htmlFor:"password_confirmation",className:"text-2xl text-white font-medium",children:["password confirmation"," ",a("span",{className:"text-white font-extrabold",children:"*"})]})," ",a(R,{label:"password_confirmation",id:"password_confirmation",className:"w-full",value:c.password_confirmation,onChange:g=>f("password_confirmation",g.target.value),type:"password",autoComplete:"new-password"}),a(_,{message:u.password_confirmation,className:"mt-2 bg-gray-900 p-1 "})]}),m?a("button",{className:"bg-white rounded-md p-2 text-green-custom font-bold select-none",children:"Loading"}):a("button",{className:"bg-white rounded-md p-2 text-green-custom font-bold select-none",disabled:i,children:"Save"})]})]})},Ve=({className:t=""})=>{const[e,r]=s.useState(!1),n=s.useRef(),{data:c,setData:f,delete:u,processing:d,reset:l,errors:i}=Q({password:""}),m=()=>{r(!0)},w=p=>{p.preventDefault(),u(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>g(),onError:()=>n.current.focus(),onFinish:()=>l()})},g=()=>{r(!1),l()};return a("div",{className:"bg-green-custom w-[30rem] p-3 flex flex-col gap-2 rounded-xl",children:h("section",{className:`space-y-6 ${t}`,children:[h("header",{children:[a("h2",{className:"text-lg font-medium text-white",children:"Delete Account"}),a("p",{className:"mt-1 text-sm text-white",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),a(se,{onClick:m,children:"Delete Account"}),a(Be,{show:e,onClose:g,children:h("form",{onSubmit:w,className:"p-6",children:[a("h2",{className:"text-lg font-medium text-gray-900",children:"Are you sure you want to delete your account?"}),a("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),h("div",{className:"mt-6",children:[a(be,{htmlFor:"password",value:"Password",className:"sr-only"}),a(R,{id:"password",type:"password",name:"password",ref:n,value:c.password,onChange:p=>f("password",p.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),a(_,{message:i.password,className:"mt-2"})]}),h("div",{className:"mt-6 flex justify-end",children:[a(Me,{onClick:g,children:"Cancel"}),a(se,{className:"ml-3",disabled:d,children:"Delete Account"})]})]})})]})})};export{Qe as default};
