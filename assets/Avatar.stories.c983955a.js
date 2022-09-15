import{c as i}from"./clsx.3b79bc83.js";/* empty css                             */import{c as d}from"./vanilla-extract-recipes-createRuntimeFn.esm.36bbe845.js";import{j as n}from"./jsx-runtime.10097f40.js";import"./iframe.a94b464a.js";var s={container:d({defaultClassName:"_1n94410",variantClassNames:{bg:{white:"_1n94411"},size:{m:"_1n94412",s:"_1n94413",l:"_1n94414"}},defaultVariants:{size:"m"},compoundVariants:[]}),img:"_1n94415"};const e=({src:a,bg:r,size:c,alt:o,className:l})=>n("div",{className:i(s.container({bg:r,size:c}),l),children:n("img",{src:a,alt:o,className:s.img})});try{e.displayName="Avatar",e.__docgenInfo={description:"",displayName:"Avatar",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},bg:{defaultValue:null,description:"",name:"bg",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"white"'}]}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/avatar/Avatar.tsx#Avatar"]={docgenInfo:e.__docgenInfo,name:"Avatar",path:"src/components/avatar/Avatar.tsx#Avatar"})}catch{}const y={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
`,locationsMap:{base:{startLoc:{col:48,line:9},endLoc:{col:76,line:9},startBody:{col:48,line:9},endBody:{col:76,line:9}},small:{startLoc:{col:48,line:9},endLoc:{col:76,line:9},startBody:{col:48,line:9},endBody:{col:76,line:9}},large:{startLoc:{col:48,line:9},endLoc:{col:76,line:9},startBody:{col:48,line:9},endBody:{col:76,line:9}}}}},title:"UI/Avatar",component:e},t=a=>n(e,{...a}),m=t.bind({});m.args={src:"https://sensearena.ams3.cdn.digitaloceanspaces.com/other/1d680f64-b91d-4e66-af8c-edb5541e6e04/a8013994-c771-4398-ae9f-75e6c92bc694.png"};const p=t.bind({});p.args={size:"s",src:"https://sensearena.ams3.cdn.digitaloceanspaces.com/other/1d680f64-b91d-4e66-af8c-edb5541e6e04/a8013994-c771-4398-ae9f-75e6c92bc694.png"};const f=t.bind({});f.args={size:"l",src:"https://sensearena.ams3.cdn.digitaloceanspaces.com/other/1d680f64-b91d-4e66-af8c-edb5541e6e04/a8013994-c771-4398-ae9f-75e6c92bc694.png"};const A=["Base","Small","Large"];export{m as Base,f as Large,p as Small,A as __namedExportsOrder,y as default};
//# sourceMappingURL=Avatar.stories.c983955a.js.map
