import{r as c,W as F,j as r,F as T,a as e,c as C}from"./app-fd46c604.js";import{I as g,T as N}from"./TextInput-2b47e509.js";import{P as S}from"./PrimaryButton-ad19c119.js";import{r as E}from"./index-9674b666.js";import{F as I,L as R}from"./LayoutAdmin-8736fa77.js";import{m as j}from"./moment-1012d1c5.js";import"./iconBase-f10177b7.js";function Y({dataBlog:t}){const h=["Home","Forniture","Office","Kitchen"],[m,u]=c.useState(""),[f,d]=c.useState(""),[x,b]=c.useState(),[l,p]=c.useState([]),i=c.useRef(null),{data:s,setData:w,post:y,processing:_,errors:A,reset:k}=F({title:"",author:"",image:"",content:"",tags:[]});c.useEffect(()=>{p(t.tags)},[t]);const D=a=>{p([...l.filter((n,v)=>v!==a)])};c.useEffect(()=>{w("tags",l)},[l]);const M=a=>{const n=new FileReader;b(a.target.files[0]),a.target.files[0]&&n.readAsDataURL(a.target.files[0]),n.onload=v=>{d(v.target.result)}};return r(T,{children:[_&&e("div",{className:"fixed z-[100] inset-0 overflow-y-auto",children:e("div",{className:"toast toast-center toast-top",children:e("div",{className:"alert alert-success mt-[5rem]",children:e("span",{className:"text-2xl text-white font-extrabold",children:"Berhasil membuat akun"})})})}),e("dialog",{id:"my_modal_2",className:"modal backdrop-blur-sm border-0 ",children:r("div",{className:"lg:w-[60rem] lg:h-[43rem] h-[20rem] relative rounded-xl bg-transparant",children:[e("button",{className:" btn btn-sm btn-circle btn-ghost absolute right-5 top-5 bg-white shadow-xl border border-gray-500 z-[100] select-none",onClick:()=>window.my_modal_2.close(),children:"✕"}),e("div",{className:"lg:w-[60rem] lg:h-[40rem]  h-[20rem]  p-[3rem] bg ",children:r("form",{onSubmit:async a=>{a.preventDefault();const n=new FormData;n.append("_method","PUT"),n.append("title",s.title?s.title:t.title),n.append("author",s.author?s.author:t.author),n.append("image",x||""),n.append("content",s.content?s.content:t.content),n.append("tags",s.tags),(await C.post(`/admin/blog/edit/${t.id}`,n,{headers:{"Content-Type":"multipart/form-data"}})).status&&(window.my_modal_1.close(),window.location.reload())},className:"bg-white flex flex-col gap-[1.2rem] p-10 h-[100%]  overflow-y-auto scrollModal_type rounded-2xl shadow-xl",children:[e(g,{htmlFor:"title",value:"Title"}),e(N,{id:"title",name:"title",type:"text",value:s.title||t.title||s.title,onChange:a=>w("title",a.target.value),placeholder:"Title",className:"border border-gray-300 rounded-md p-2"}),e(g,{htmlFor:"author",value:"author"}),e(N,{id:"author",name:"author",type:"text",value:s.author||t.author||s.author,onChange:a=>w("author",a.target.value),placeholder:"author",className:"border border-gray-300 rounded-md p-2"}),e(g,{htmlFor:"image",value:"image"}),r("div",{className:"flex flex-col w-[10rem] justify-center items-center relative",onClick:()=>i.current.click(),children:[e(I,{className:"absolute -right-3 bottom-5 text-teal-600 text-3xl"}),e("img",{src:f||t.image,alt:"",className:"w-[10rem] "})," ",e("span",{className:`
                            text-md text-teal-400
                            `,children:"Max 2 MB"})]}),e("input",{id:"image",name:"image",ref:i,hidden:!0,type:"file",onChange:M,placeholder:"image",className:" py-[2rem]"}),e(g,{htmlFor:"content",value:"content"}),e(E.Textarea,{required:!0,id:"content",name:"content",type:"text",value:s.content||t.content||s.content,onChange:a=>w("content",a.target.value),placeholder:"content",className:"border  p-2 border-gray-300 scrollModal_type focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"}),e(g,{htmlFor:"tags",value:"tags"}),e(N,{id:"tags",name:"tags",type:"text",value:m,onChange:a=>u(a.target.value),placeholder:"tags",className:"border border-gray-300 rounded-md p-2"})," ",e("ul",{className:"flex flex-col gap-3",children:h.filter(a=>m===""?"":a.match(new RegExp(m,"i"))).map(a=>r("li",{className:"bg-gray-300 p-2 rounded-md cursor-pointer",onClick:()=>{p([...l,a]),u("")},children:[a," "]},a))}),e("div",{className:"flex w-full flex-row gap-2 cursor-pointer ",children:l==null?void 0:l.map((a,n)=>r("div",{className:"relative px-3 py-2  rounded-md",children:[e("span",{onClick:()=>D(n),className:" absolute right-0 -top-2 bg-gray-300 w-5 h-6 rounded-full text-center text-black",children:"x"}),e("span",{className:" px-3 py-2 bg-green-custom text-white rounded-xl ",children:a})]},n))}),e("div",{className:"flex items-center justify-end mt-4",children:e(S,{className:"ml-4",disabled:_,children:"Tambah"})})]})})]})})]})}function z(){const t=["Home","Forniture","Office","Kitchen"],[h,m]=c.useState(""),[u,f]=c.useState(""),[d,x]=c.useState([]),[b,l]=c.useState(""),p=c.useRef(null),{data:i,setData:s,post:w,processing:y,errors:_,reset:A}=F({title:"",author:"",image:"",content:"",tags:[]}),k=o=>{x([...d.filter((a,n)=>n!==o)])};c.useEffect(()=>{s("tags",d)},[d]);const D=o=>{const a=new FileReader;s("image",o.target.files[0]),o.target.files[0]&&a.readAsDataURL(o.target.files[0]),a.onload=n=>{l(n.target.result)}};return r(T,{children:[y&&e("div",{className:"fixed z-[100] inset-0 overflow-y-auto",children:e("div",{className:"toast toast-center toast-top",children:e("div",{className:"alert alert-success mt-[5rem]",children:e("span",{className:"text-2xl text-white font-extrabold",children:"Berhasil membuat akun"})})})}),e("dialog",{id:"my_modal_1",className:"modal backdrop-blur-sm border-0 ",children:r("div",{className:"lg:w-[60rem] lg:h-[43rem] h-[20rem] relative rounded-xl bg-transparant",children:[e("button",{className:" btn btn-sm btn-circle btn-ghost absolute right-5 top-5 bg-white shadow-xl border border-gray-500 z-[100] select-none",onClick:()=>window.my_modal_1.close(),children:"✕"}),e("div",{className:"lg:w-[60rem] lg:h-[40rem]  h-[20rem]  p-[3rem] bg ",children:r("form",{onSubmit:async o=>{if(o.preventDefault(),!i.image){m("Gambar tidak boleh kosong"),setTimeout(()=>{m("")},3e3);return}const a=new FormData;a.append("title",i.title),a.append("author",i.author),a.append("image",i.image),a.append("content",i.content),a.append("tags",i.tags),(await C.post("/admin/blog",a,{headers:{"Content-Type":"multipart/form-data"}})).status&&(window.my_modal_1.close(),setTimeout(()=>{window.location.reload()},1500))},className:"bg-white flex flex-col gap-[1.2rem] p-10 h-[100%]  overflow-y-auto scrollModal_type rounded-2xl shadow-xl",children:[e(g,{htmlFor:"title",value:"Title"}),e(N,{required:!0,id:"title",name:"title",type:"text",value:i.title,onChange:o=>s("title",o.target.value),placeholder:"Title",className:"border border-gray-300 rounded-md p-2"}),e(g,{htmlFor:"author",value:"author"}),e(N,{required:!0,id:"author",name:"author",type:"text",value:i.author,onChange:o=>s("author",o.target.value),placeholder:"author",className:"border border-gray-300 rounded-md p-2"}),e(g,{htmlFor:"image",value:"image"}),r("div",{className:"flex flex-col w-[10rem] justify-center items-center relative",onClick:()=>p.current.click(),children:[e(I,{className:"absolute -right-3 bottom-5 text-teal-600 text-3xl"}),e("img",{src:b||"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",alt:"",className:"w-[10rem] h-[10rem] z-50"})," ",e("span",{className:`
                            text-md text-teal-400
                            `,children:"max 2 mb"}),h&&e("span",{className:"text-red-800",children:h})]}),e("input",{id:"image",name:"image",ref:p,type:"file",onChange:D,placeholder:"image",className:" py-[2rem] hidden"}),e(g,{htmlFor:"content",value:"content"}),e(E.Textarea,{required:!0,id:"content",name:"content",type:"text",value:i.content,onChange:o=>s("content",o.target.value),placeholder:"content",className:"border  p-2 border-gray-300 scrollModal_type focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"}),e(g,{htmlFor:"tags",value:"tags"}),e(N,{id:"tags",name:"tags",type:"text",value:u,onChange:o=>f(o.target.value),placeholder:"tags",className:"border border-gray-300 rounded-md p-2"})," ",e("ul",{className:"flex flex-col gap-3",children:t.filter(o=>u===""?"":o.match(new RegExp(u,"i"))).map(o=>r("li",{className:"bg-gray-300 p-2 rounded-md cursor-pointer",onClick:()=>{x([...d,o]),f("")},children:[o," "]},o))}),e("div",{className:"flex w-full flex-row gap-2 cursor-pointer ",children:d==null?void 0:d.map((o,a)=>r("div",{className:"relative px-3 py-2  rounded-md",children:[e("span",{onClick:()=>k(a),className:" absolute right-0 -top-2 bg-gray-300 w-5 h-6 rounded-full text-center text-black",children:"x"}),e("span",{className:" px-3 py-2 bg-green-custom text-white rounded-xl ",children:o})]},a))}),e("div",{className:"flex items-center justify-end mt-4",children:e(S,{className:"ml-4",disabled:y,children:"Tambah"})})]})})]})})]})}function K({auth:t,dataBlog:h}){const[m,u]=c.useState(h),[f,d]=c.useState([]),[x,b]=c.useState([]);return c.useEffect(()=>{u(h)},[h]),r(R,{title:"Dashboard",auth:t,children:[e(z,{}),e(Y,{dataBlog:f}),e(L,{data:x}),r("div",{className:"w-full pt-10 justify-center items-center",children:[e("h1",{className:"font-sans font-bold text-black text-2xl md:text-3xl",children:"BLOG MANAGEMENT"}),e("div",{className:"w-full flex flex-row justify-end",children:e("button",{onClick:()=>window.my_modal_1.show(),className:"p-2 bg-green-custom rounded-xl text-xl font-extrabold text-white",children:"New Blog"})}),e("div",{className:"overflow-x-auto mt-5",children:r("table",{className:"table",children:[e("thead",{children:r("tr",{className:"bg-green-custom",children:[e("th",{className:"text-xl font-extrabold text-white",children:"No"}),e("th",{className:"text-xl font-extrabold text-white",children:"Author"}),e("th",{className:"text-xl font-extrabold text-white",children:"Title"}),e("th",{className:"text-xl font-extrabold text-white",children:"Image"}),e("th",{className:"text-xl font-extrabold text-white",children:"Tags"}),e("th",{className:"text-xl font-extrabold text-white",children:"Content"}),e("th",{className:"text-xl font-extrabold text-white",children:"Views"}),e("th",{className:"text-xl font-extrabold text-white",children:"Comments"}),e("th",{className:"text-xl font-extrabold text-white w-[7rem]",children:"date"}),e("th",{className:"text-xl font-extrabold text-white",children:"Action"})]})}),e("tbody",{className:"border",children:m.map((l,p)=>{var i,s;return r("tr",{children:[e("th",{className:" border-r",children:p+1}),e("td",{className:" border-r",children:l==null?void 0:l.author}),e("td",{className:" border-r w-[7rem]",children:l==null?void 0:l.title}),e("td",{className:" border-r w-[16rem]",children:e("img",{src:l==null?void 0:l.image,className:"w-[16rem]",alt:""})}),e("td",{className:" border-r",children:(i=l==null?void 0:l.tags)==null?void 0:i.length}),e("td",{className:" border-r paragraph-table-Blog h-[8rem] mb-3 text-justify",children:l==null?void 0:l.content}),e("td",{className:" border-r",children:l==null?void 0:l.views}),e("td",{className:" border-r",children:(s=l==null?void 0:l.comments)==null?void 0:s.length}),e("td",{className:" border-r",children:j(l==null?void 0:l.created_at).format("DD MMMM YYYY")}),e("td",{children:r("div",{className:"flex flex-row gap-2 ",children:[e("button",{onClick:()=>{d(l),window.my_modal_2.show()},className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:"Edit"}),e("button",{onClick:()=>{b(l),window.my_modal_3.show()},className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",children:"Delete"})]})})]},p)})})]})})]})]})}const L=({data:t})=>{var x,b;const[h,m]=c.useState(!1),[u,f]=c.useState(!1),d=()=>{C.delete(`/admin/blog/delete/${t.id}`).then(l=>{m(!0),window.my_modal_3.close(),setTimeout(()=>{window.location.reload(),m(!1)},1e3)}).catch(l=>{window.my_modal_3.close(),f(!0),setTimeout(()=>{window.location.reload(),f(!1)},1e3)})};return r(T,{children:[h&&e("div",{className:"fixed z-[100] inset-0 overflow-y-auto",children:e("div",{className:"toast toast-center toast-top",children:e("div",{className:"alert alert-success mt-[5rem]",children:e("span",{className:"text-2xl text-white font-extrabold",children:"Menghapus Data Berhasil"})})})}),u&&e("div",{className:"fixed z-[100] inset-0 overflow-y-auto",children:e("div",{className:"toast toast-center toast-top",children:e("div",{className:"alert alert-success mt-[5rem]",children:e("span",{className:"text-2xl text-white font-extrabold",children:"Gagal Bro"})})})}),e("dialog",{id:"my_modal_3",className:"modal backdrop-blur-sm border-0 ",children:e("div",{className:"lg:w-[60rem] lg:h-[43rem] h-[20rem] relative rounded-xl bg-transparant",children:e("div",{className:"lg:w-[60rem] lg:h-[38rem]  h-[20rem]  p-[3rem] bg ",children:r("div",{className:"bg-white flex flex-col gap-[1.2rem] p-10 h-[100%]  overflow-y-auto scrollModal_type rounded-2xl shadow-xl",children:[r("div",{className:"flex flex-col gap-5",children:[r("div",{className:"flex flex-row justify-between",children:[e("h1",{className:"text-3xl font-bold",children:"Delete Blog"}),e("h1",{className:"text-3xl font-bold",children:t==null?void 0:t.title})]}),r("div",{className:"flex flex-row gap-5",children:[r("div",{className:"flex flex-col gap-2",children:[e("h1",{className:"text-xl font-bold",children:"Author"}),e("h1",{className:"text-xl font-bold",children:"Title"}),e("h1",{className:"text-xl font-bold mb-[2.8rem]",children:"Image"}),e("h1",{className:"text-xl font-bold",children:"Tags"}),e("h1",{className:"text-xl font-bold",children:"Content"}),e("h1",{className:"text-xl font-bold",children:"Views"}),e("h1",{className:"text-xl font-bold",children:"Comments"}),e("h1",{className:"text-xl font-bold",children:"Date"})]}),r("div",{className:"flex flex-col gap-2",children:[r("h1",{className:"text-xl font-bold",children:[": ",t==null?void 0:t.author]}),r("h1",{className:"text-xl font-bold",children:[": ",t==null?void 0:t.title]}),r("div",{className:"flex flex-row gap-2 text-xl font-bold",children:[":"," ",e("img",{src:t==null?void 0:t.image,className:"w-[8rem] ",alt:""})]}),r("h1",{className:"text-xl font-bold",children:[": ",(x=t==null?void 0:t.tags)==null?void 0:x.length]}),r("h1",{className:"text-xl font-bold",children:[": ",t==null?void 0:t.content]}),r("h1",{className:"text-xl font-bold",children:[": ",t==null?void 0:t.views]}),r("h1",{className:"text-xl font-bold",children:[": ",(b=t==null?void 0:t.comments)==null?void 0:b.length]}),r("h1",{className:"text-xl font-bold",children:[":"," ",j(t==null?void 0:t.created_at).format("DD MMMM YYYY")]})]})]})]}),r("div",{className:"flex flex-row gap-5 justify-end",children:[e("button",{onClick:()=>window.my_modal_3.close(),className:"bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded",children:"X"}),e("button",{onClick:()=>d(),className:"bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded",children:"Delete"})]})]})})})})]})};export{K as default};
