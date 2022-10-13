import{u as d,a as m,b as h,c as p}from"./react-spring-web.esm.bbeed26a.js";import{r as f,j as a}from"./jsx-runtime.5cca37ce.js";import{c as S}from"./clsx.3b79bc83.js";import{S as A}from"./Spinner.e46fa7f8.js";/* empty css                            */import{c as B}from"./vanilla-extract-recipes-createRuntimeFn.esm.57f0c9b7.js";import"./index.2dc55c8f.js";import"./iframe.35bd8c41.js";var o={container:B({defaultClassName:"_1n94410",variantClassNames:{bg:{white:"_1n94411"},size:{m:"_1n94412",s:"_1n94413",l:"_1n94414"}},defaultVariants:{size:"m"},compoundVariants:[]}),img:"_1n94415",loading:"_1n94416"};const n=({src:e,bg:g,size:r,alt:u,className:_})=>{const[s,b]=f.exports.useState(!0),c=d(),l=d(),v=m({opacity:s?0:1,ref:c}),y=m({opacity:s?1:0,ref:l});return h([l,c]),f.exports.useEffect(()=>{const i=new Image;i.onload=()=>b(!1),i.src=e},[e]),a("div",{className:S(o.container({bg:g,size:r}),_),children:s?a(p.div,{className:o.loading,style:y,children:a(A,{size:r})}):a(p.img,{src:e,alt:u,className:o.img,style:v})})};try{n.displayName="Avatar",n.__docgenInfo={description:"",displayName:"Avatar",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},bg:{defaultValue:null,description:"",name:"bg",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"white"'}]}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/avatar/Avatar.tsx#Avatar"]={docgenInfo:n.__docgenInfo,name:"Avatar",path:"src/components/avatar/Avatar.tsx#Avatar"})}catch{}const q={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from '../components/avatar/Avatar';

export default {
  title: 'UI/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />;

export const Base = Template.bind({});
Base.args = {
  src: 'https://sensearena.ams3.cdn.digitaloceanspaces.com/other/1d680f64-b91d-4e66-af8c-edb5541e6e04/a8013994-c771-4398-ae9f-75e6c92bc694.png',
};

export const Small = Template.bind({});
Small.args = {
  size: 's',
  src: 'https://sensearena.ams3.cdn.digitaloceanspaces.com/other/1d680f64-b91d-4e66-af8c-edb5541e6e04/a8013994-c771-4398-ae9f-75e6c92bc694.png',
};
export const Large = Template.bind({});
Large.args = {
  size: 'l',
  src: 'https://sensearena.ams3.cdn.digitaloceanspaces.com/other/1d680f64-b91d-4e66-af8c-edb5541e6e04/a8013994-c771-4398-ae9f-75e6c92bc694.png',
};
export const HeavyImg = Template.bind({});
HeavyImg.args = {
  size: 'l',
  src: 'https://effigis.com/wp-content/uploads/2015/02/DigitalGlobe_WorldView2_50cm_8bit_Pansharpened_RGB_DRA_Rome_Italy_2009DEC10_8bits_sub_r_1.jpg',
};
`,locationsMap:{base:{startLoc:{col:48,line:9},endLoc:{col:76,line:9},startBody:{col:48,line:9},endBody:{col:76,line:9}},small:{startLoc:{col:48,line:9},endLoc:{col:76,line:9},startBody:{col:48,line:9},endBody:{col:76,line:9}},large:{startLoc:{col:48,line:9},endLoc:{col:76,line:9},startBody:{col:48,line:9},endBody:{col:76,line:9}},"heavy-img":{startLoc:{col:48,line:9},endLoc:{col:76,line:9},startBody:{col:48,line:9},endBody:{col:76,line:9}}}}},title:"UI/Avatar",component:n},t=e=>a(n,{...e}),L=t.bind({});L.args={src:"https://sensearena.ams3.cdn.digitaloceanspaces.com/other/1d680f64-b91d-4e66-af8c-edb5541e6e04/a8013994-c771-4398-ae9f-75e6c92bc694.png"};const R=t.bind({});R.args={size:"s",src:"https://sensearena.ams3.cdn.digitaloceanspaces.com/other/1d680f64-b91d-4e66-af8c-edb5541e6e04/a8013994-c771-4398-ae9f-75e6c92bc694.png"};const x=t.bind({});x.args={size:"l",src:"https://sensearena.ams3.cdn.digitaloceanspaces.com/other/1d680f64-b91d-4e66-af8c-edb5541e6e04/a8013994-c771-4398-ae9f-75e6c92bc694.png"};const C=t.bind({});C.args={size:"l",src:"https://effigis.com/wp-content/uploads/2015/02/DigitalGlobe_WorldView2_50cm_8bit_Pansharpened_RGB_DRA_Rome_Italy_2009DEC10_8bits_sub_r_1.jpg"};const D=["Base","Small","Large","HeavyImg"];export{L as Base,C as HeavyImg,x as Large,R as Small,D as __namedExportsOrder,q as default};
//# sourceMappingURL=Avatar.stories.dc0b01ac.js.map
