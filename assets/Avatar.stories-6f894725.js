import{r as u,R as a}from"./index-8db94870.js";import{X as g,J as f,w as G,i as _}from"./index-df04aa12.js";/* empty css                            */import{c as L}from"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import{S as j}from"./Spinner-6b93855d.js";import{c as H}from"./clsx-9a51c995.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";var o={container:L({defaultClassName:"_1n94410",variantClassNames:{bg:{white:"_1n94411"},size:{m:"_1n94412",s:"_1n94413",l:"_1n94414"}},defaultVariants:{size:"m"},compoundVariants:[]}),img:"_1n94415",loading:"_1n94416"};const i=({src:e,bg:q,size:l,alt:A,className:D})=>{const[c,x]=u.useState(!0),m=g(),d=g(),B=f({opacity:c?0:1,ref:m}),C=f({opacity:c?1:0,ref:d});return G([d,m]),u.useEffect(()=>{const p=new Image;p.onload=()=>x(!1),p.src=e},[e]),a.createElement("div",{className:H(o.container({bg:q,size:l}),D)},c?a.createElement(_.div,{className:o.loading,style:C},a.createElement(j,{size:l})):a.createElement(_.img,{src:e,alt:A,className:o.img,style:B}))};try{i.displayName="Avatar",i.__docgenInfo={description:"",displayName:"Avatar",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},bg:{defaultValue:null,description:"",name:"bg",required:!1,type:{name:"enum",value:[{value:'"white"'}]}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const K={title:"UI/Avatar",tags:["autodocs"],component:i},s={args:{src:"https://sensearena.ams3.cdn.digitaloceanspaces.com/other/1d680f64-b91d-4e66-af8c-edb5541e6e04/a8013994-c771-4398-ae9f-75e6c92bc694.png"}},r={args:{size:"s",src:"https://sensearena.ams3.cdn.digitaloceanspaces.com/other/1d680f64-b91d-4e66-af8c-edb5541e6e04/a8013994-c771-4398-ae9f-75e6c92bc694.png"}},t={args:{src:"https://sensearena.ams3.cdn.digitaloceanspaces.com/other/1d680f64-b91d-4e66-af8c-edb5541e6e04/a8013994-c771-4398-ae9f-75e6c92bc694.png",size:"l"}},n={args:{size:"l",src:"https://effigis.com/wp-content/uploads/2015/02/DigitalGlobe_WorldView2_50cm_8bit_Pansharpened_RGB_DRA_Rome_Italy_2009DEC10_8bits_sub_r_1.jpg"}};var b,y,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    src: 'https://sensearena.ams3.cdn.digitaloceanspaces.com/other/1d680f64-b91d-4e66-af8c-edb5541e6e04/a8013994-c771-4398-ae9f-75e6c92bc694.png'
  }
}`,...(h=(y=s.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var v,S,R;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: 's',
    src: 'https://sensearena.ams3.cdn.digitaloceanspaces.com/other/1d680f64-b91d-4e66-af8c-edb5541e6e04/a8013994-c771-4398-ae9f-75e6c92bc694.png'
  }
}`,...(R=(S=r.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var V,w,z;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    src: 'https://sensearena.ams3.cdn.digitaloceanspaces.com/other/1d680f64-b91d-4e66-af8c-edb5541e6e04/a8013994-c771-4398-ae9f-75e6c92bc694.png',
    size: 'l'
  }
}`,...(z=(w=t.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var E,N,I;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    size: 'l',
    src: 'https://effigis.com/wp-content/uploads/2015/02/DigitalGlobe_WorldView2_50cm_8bit_Pansharpened_RGB_DRA_Rome_Italy_2009DEC10_8bits_sub_r_1.jpg'
  }
}`,...(I=(N=n.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};const M=["Base","Small","Large","HeavyImg"];export{s as Base,n as HeavyImg,t as Large,r as Small,M as __namedExportsOrder,K as default};
//# sourceMappingURL=Avatar.stories-6f894725.js.map
