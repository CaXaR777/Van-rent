import{j as a,u as c,r as i,f as r,a as t}from"./index-Cao7utJ_.js";const n=s=>s.catalog.catalog,o=({item:s})=>a.jsx("li",{className:"border border-[rgba(16, 24, 40, 0.2)] rounded-[20px] p-6 w-[888px] h-[358px] flex gap-6 mb-[32px]",children:a.jsxs("div",{className:"catalog-item",children:[a.jsx("h2",{className:"catalog-item__name",children:s.name}),a.jsxs("p",{className:"catalog-item__price",children:["Price: $",s.price]}),a.jsxs("p",{className:"catalog-item__location",children:["Location: ",s.location]}),a.jsx("p",{className:"catalog-item__description",children:s.description}),a.jsxs("div",{className:"catalog-item__details",children:[a.jsx("h3",{children:"Details:"}),a.jsxs("ul",{children:[a.jsxs("li",{children:["Air Conditioner: ",s.details.airConditioner]}),a.jsxs("li",{children:["Bathroom: ",s.details.bathroom]}),a.jsxs("li",{children:["Kitchen: ",s.details.kitchen]})]})]}),a.jsxs("div",{className:"catalog-item__gallery",children:[a.jsx("h3",{children:"Gallery:"}),a.jsx("div",{className:"gallery-images",children:s.gallery.map((e,l)=>a.jsx("img",{src:e,alt:`Image ${l+1}`},l))})]}),a.jsxs("div",{className:"catalog-item__reviews",children:[a.jsx("h3",{children:"Reviews:"}),s.reviews.map((e,l)=>a.jsxs("div",{className:"review",children:[a.jsx("p",{children:e.comment}),a.jsxs("p",{children:["Reviewer: ",e.reviewer_name]}),a.jsxs("p",{children:["Rating: ",e.reviewer_rating]})]},l))]})]})}),d=()=>{const s=c();i.useEffect(()=>{s(r())},[s]);const e=t(n);return a.jsx(a.Fragment,{children:a.jsx("ul",{className:"flex flex-col items-center ",children:e.map(l=>a.jsx(o,{item:l},l._id))})})},h=()=>a.jsxs("div",{className:"px-16 ml-auto mr-auto w-[1440px] mt-[50px]",children:[a.jsx("p",{children:"Catalog"}),a.jsx(d,{})]});export{h as default};
