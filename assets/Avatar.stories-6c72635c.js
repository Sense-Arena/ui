import{X as p,J as u,w as C,i as g}from"./index-df04aa12.js";import{r as f}from"./index-8db94870.js";/* empty css                            */import{c as G}from"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import{S as L}from"./Spinner-4fe984f5.js";import{c as j}from"./clsx-9a51c995.js";import"./index-8ce4a492.js";import"./_commonjsHelpers-042e6b4d.js";var c={container:G({defaultClassName:"_1n94410",variantClassNames:{bg:{white:"_1n94411"},size:{m:"_1n94412",s:"_1n94413",l:"_1n94414"}},defaultVariants:{size:"m"},compoundVariants:[]}),img:"_1n94415",loading:"_1n94416"};const o=({src:e,bg:I,size:i,alt:q,className:A})=>{const[n,D]=f.useState(!0),l=p(),m=p(),x=u({opacity:n?0:1,ref:l}),B=u({opacity:n?1:0,ref:m});return C([m,l]),f.useEffect(()=>{const d=new Image;d.onload=()=>D(!1),d.src=e},[e]),React.createElement("div",{className:j(c.container({bg:I,size:i}),A)},n?React.createElement(g.div,{className:c.loading,style:B},React.createElement(L,{size:i})):React.createElement(g.img,{src:e,alt:q,className:c.img,style:x}))};try{o.displayName="Avatar",o.__docgenInfo={description:"",displayName:"Avatar",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},bg:{defaultValue:null,description:"",name:"bg",required:!1,type:{name:"enum",value:[{value:'"white"'}]}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const k={title:"UI/Avatar",tags:["autodocs"],component:o},a={args:{src:"https://sensearena.ams3.cdn.digitaloceanspaces.com/other/1d680f64-b91d-4e66-af8c-edb5541e6e04/a8013994-c771-4398-ae9f-75e6c92bc694.png"}},s={args:{size:"s",src:"https://sensearena.ams3.cdn.digitaloceanspaces.com/other/1d680f64-b91d-4e66-af8c-edb5541e6e04/a8013994-c771-4398-ae9f-75e6c92bc694.png"}},r={args:{src:"https://sensearena.ams3.cdn.digitaloceanspaces.com/other/1d680f64-b91d-4e66-af8c-edb5541e6e04/a8013994-c771-4398-ae9f-75e6c92bc694.png",size:"l"}},t={args:{size:"l",src:"https://effigis.com/wp-content/uploads/2015/02/DigitalGlobe_WorldView2_50cm_8bit_Pansharpened_RGB_DRA_Rome_Italy_2009DEC10_8bits_sub_r_1.jpg"}};var _,b,y;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    src: 'https://sensearena.ams3.cdn.digitaloceanspaces.com/other/1d680f64-b91d-4e66-af8c-edb5541e6e04/a8013994-c771-4398-ae9f-75e6c92bc694.png'
  }
}`,...(y=(b=a.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var h,v,R;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: 's',
    src: 'https://sensearena.ams3.cdn.digitaloceanspaces.com/other/1d680f64-b91d-4e66-af8c-edb5541e6e04/a8013994-c771-4398-ae9f-75e6c92bc694.png'
  }
}`,...(R=(v=s.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var S,V,w;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    src: 'https://sensearena.ams3.cdn.digitaloceanspaces.com/other/1d680f64-b91d-4e66-af8c-edb5541e6e04/a8013994-c771-4398-ae9f-75e6c92bc694.png',
    size: 'l'
  }
}`,...(w=(V=r.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var z,E,N;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: 'l',
    src: 'https://effigis.com/wp-content/uploads/2015/02/DigitalGlobe_WorldView2_50cm_8bit_Pansharpened_RGB_DRA_Rome_Italy_2009DEC10_8bits_sub_r_1.jpg'
  }
}`,...(N=(E=t.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const K=["Base","Small","Large","HeavyImg"];export{a as Base,t as HeavyImg,r as Large,s as Small,K as __namedExportsOrder,k as default};
//# sourceMappingURL=Avatar.stories-6c72635c.js.map
