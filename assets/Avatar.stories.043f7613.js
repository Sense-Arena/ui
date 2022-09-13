/* empty css                             */import{c as i}from"./vanilla-extract-recipes-createRuntimeFn.esm.36bbe845.js";import{c as d}from"./clsx.3b79bc83.js";import{j as n}from"./jsx-runtime.73c5ddb1.js";import"./iframe.0f731172.js";var t={container:i({defaultClassName:"_1n94410",variantClassNames:{bg:{white:"_1n94411"},size:{m:"_1n94412",s:"_1n94413"}},defaultVariants:{size:"m"},compoundVariants:[]}),img:"_1n94414"};const e=({src:a,bg:r,size:o,alt:c,className:l})=>n("div",{className:d(t.container({bg:r,size:o}),l),children:n("img",{src:a,alt:c,className:t.img})});try{e.displayName="Avatar",e.__docgenInfo={description:"",displayName:"Avatar",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},bg:{defaultValue:null,description:"",name:"bg",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"white"'}]}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"m"'}]}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/avatar/Avatar.tsx#Avatar"]={docgenInfo:e.__docgenInfo,name:"Avatar",path:"src/components/avatar/Avatar.tsx#Avatar"})}catch{}const y={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
`,locationsMap:{base:{startLoc:{col:48,line:9},endLoc:{col:76,line:9},startBody:{col:48,line:9},endBody:{col:76,line:9}},small:{startLoc:{col:48,line:9},endLoc:{col:76,line:9},startBody:{col:48,line:9},endBody:{col:76,line:9}}}}},title:"UI/Avatar",component:e},s=a=>n(e,{...a}),m=s.bind({});m.args={src:"https://sensearena.ams3.cdn.digitaloceanspaces.com/other/1d680f64-b91d-4e66-af8c-edb5541e6e04/a8013994-c771-4398-ae9f-75e6c92bc694.png"};const p=s.bind({});p.args={size:"s",src:"https://sensearena.ams3.cdn.digitaloceanspaces.com/other/1d680f64-b91d-4e66-af8c-edb5541e6e04/a8013994-c771-4398-ae9f-75e6c92bc694.png"};const b=["Base","Small"];export{m as Base,p as Small,b as __namedExportsOrder,y as default};
//# sourceMappingURL=Avatar.stories.043f7613.js.map
