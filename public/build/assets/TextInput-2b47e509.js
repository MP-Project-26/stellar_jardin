import{a as u,r as n}from"./app-fd46c604.js";function i({value:t,className:e="",children:r,...s}){return u("label",{...s,className:"block font-medium text-sm text-gray-700 "+e,children:t||r})}const d=n.forwardRef(function({type:e="text",className:r="",isFocused:s=!1,...c},o){const a=o||n.useRef();return n.useEffect(()=>{s&&a.current.focus()},[]),u("input",{...c,type:e,className:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "+r,ref:a})});export{i as I,d as T};
