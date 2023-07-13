import{j as t,a as e,d as l,R as d,r as m,F as f,b as h}from"./app-fd46c604.js";import{A as x}from"./aos-7cdcffb8.js";function p(){return t("footer",{className:"footer px-0 md:px-[10rem] py-[5rem] bg-green-custom text-neutral-content flex flex-col gap-5  ",children:[t("div",{className:"flex flex-col lg:flex-row w-full justify-center",children:[e("img",{src:"/storage/assets/img/footer_stellar.png",alt:"Logo",className:"w-[17rem] lg:w-[20rem]  cursor-pointer m-0 lg:-mt-[5rem] lg:-ml-[5rem]"}),t("div",{className:" w-full lg:w-[70%] flex flex-col gap-5 lg:gap-0 lg:flex-row justify-evenly p-7 lg:p-0",children:[e("div",{className:"flex flex-col gap-2 w-[10rem] ",children:e(l,{href:"/",className:"text-xl text-white font-semibold font-roboto  cursor-pointer",children:"Home"})}),t("div",{className:"flex flex-col gap-2 w-[10rem] ",children:[e(l,{href:"/about",className:"text-xl text-white font-semibold font-roboto  cursor-pointer",children:"About"}),e(l,{href:"/about",className:"text-md text-gray-300 font-roboto  cursor-pointer",children:"Our Story"}),e(l,{href:"/about",className:"text-md text-gray-300 font-roboto  cursor-pointer",children:"Why Chouse US"})]}),t("div",{className:"flex flex-col gap-2 w-[10rem] ",children:[e(l,{href:"#",className:"text-xl text-white font-semibold font-roboto  cursor-pointer",children:"Type"}),e(l,{href:"/type",className:"text-md text-gray-300 font-roboto  cursor-pointer",children:"Standard"})]}),t("div",{className:"flex flex-col gap-2 w-[10rem] ",children:[e(l,{href:"/blog",className:"text-xl text-white font-semibold font-roboto  cursor-pointer",children:"Blog"})," ",e(l,{href:"/blog",className:"text-md text-gray-300 font-roboto  cursor-pointer",children:"Latest news"}),e(l,{href:"/blog",className:"text-md text-gray-300 font-roboto  cursor-pointer",children:"Top Trending"})]}),t("div",{className:"flex flex-col gap-1 w-auto ",children:[e("a",{href:"#",className:"text-xl text-white font-semibold font-roboto  cursor-pointer",children:"Contact Us"}),t("a",{href:"mailto: stellarjardin@gmail.com",className:"text-md text-gray-300 font-roboto flex flex-row items-center gap-3 cursor-pointer",children:[e("i",{className:"fas fa-envelope text-xl"}),"stellarjardin@gmail.com"]}),t("a",{href:"https://wa.me/6281312344843/?text="+`Halo Stellar, Saya ingin bertanya terkait produk dan layanan yang ada di Stellar. 

    from : https://stellarjardinresidence.com/`,className:"text-md text-gray-300 font-roboto flex flex-row items-center gap-3 cursor-pointer",children:[e("i",{className:"fab fa-whatsapp text-2xl"}),"+62 813-1234-4843"]}),t("div",{className:"w-full flex gap-2 mt-2",children:[e("a",{href:"https://www.instagram.com/stellarjardinresidence/",children:e("i",{className:"fab fa-instagram text-3xl"})}),e("a",{href:"https://www.facebook.com/profile.php?id=100092276786982",children:e("i",{className:"fab fa-facebook-square text-3xl"})})]})]})]})]}),t("div",{className:"w-full flex flex-col p-2 lg:p-0",children:[t("div",{className:"w-full flex justify-center gap-10 flex-col",children:[e("a",{href:"https://goo.gl/maps/JYbJxvQRWazzVSvQ8",className:" text-md lg:text-lg text-gray-300 font-roboto text-center  cursor-pointer p-5 lg:p-0",children:"Jl. Cikunir Raya No.37, RT.001/RW.002, Jaka Mulya, Kec. Bekasi Sel., Kota Bks, Jawa Barat 17146"}),e("div",{className:"border border-[#a2a2a2]"})]}),e("div",{className:"w-full flex flex-row justify-between items-center pt-5",children:t("a",{href:"#",className:"text-xs lg:text-lg text-gray-300 font-roboto text-center flex flex-row items-center  cursor-pointer",children:["Powered by"," ",e("img",{src:"/storage/assets/img/mp-footer.png",alt:""})," ","PROJECT"]})})]})]})}function g(){const[r,a]=d.useState(!1),o=window.location.pathname,[s,n]=d.useState(0),i=()=>{const c=window.scrollY;return c>0?n(c):n(0)};return m.useEffect(()=>(window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)}),[]),e("nav",{className:`w-full ${o==="/"&&s<=1.5?" bg-transparent text-white":"bg-green-custom shadow-lg text-white"} lg:px-[10rem] px-0 mt-0 sticky top-0 z-40 transition-all duration-180 ease-in-out `,children:t("div",{className:"navbar",children:[t("div",{className:"navbar-start",children:[t("div",{className:"dropdown",children:[e("label",{tabIndex:0,className:"btn btn-ghost lg:hidden",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h8m-8 6h16"})})}),t("ul",{tabIndex:0,className:"menu menu-sm dropdown-content mt-3 z-[1] py-2 px-6 shadow bg-green-custom rounded-sm w-52",children:[e("li",{children:e(l,{href:"/",className:" font-semibold text-xl ",children:"Home"})}),e("li",{children:e(l,{href:"/about",className:" font-semibold text-xl ",children:"About"})}),t("li",{children:[e("span",{className:" font-semibold text-xl ",onClick:()=>a(!r),children:"Type"}),r&&e("ul",{className:"p-2",children:e("li",{children:e(l,{href:"/type/{section}",className:" font-semibold text-xl ",children:"Standart"})})})]}),e("li",{children:e(l,{href:"/blog",className:" font-semibold text-xl ",children:"Blog"})})]})]}),e(l,{href:"/",children:e("img",{src:"/assets/img/Logo.png",alt:"Logo",className:"w-[4rem] lg:w-[6rem] cursor-pointer"})})]}),e("div",{className:"navbar-end hidden lg:flex",children:t("ul",{className:"menu menu-horizontal px-1",children:[e("li",{children:e(l,{href:"/",className:" font-semibold text-xl ",children:"Home"})}),e("li",{children:e(l,{href:"/about",className:" font-semibold text-xl ",children:"About"})}),e("li",{tabIndex:0,children:t("details",{children:[e("summary",{className:" font-semibold text-xl",children:"Type"}),e("ul",{className:"p-2 z-[1200]",style:o==="/"&&s<=1.5?{backgroundColor:"#0D7377",marginTop:"-.1rem"}:{backgroundColor:"#0D7377",marginTop:"-.1rem"},children:e("li",{children:e(l,{href:"/type/{section}",className:" font-semibold text-xl ",children:"Standard"})})})," "]})}),e("li",{children:e(l,{href:"/blog",className:" font-semibold text-xl ",children:"Blog"})})]})})]})})}function w({children:r,title:a}){return m.useEffect(()=>{x.init({once:!0,disable:"phone",duration:1200,easing:"ease-out-sine"})},[]),t(f,{children:[a&&e(h,{title:a}),e(g,{}),e("main",{className:"-mt-[5rem] ",children:r}),e(p,{})]})}export{w as L};
