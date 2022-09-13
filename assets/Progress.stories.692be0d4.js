/* empty css                             */import{c as t}from"./clsx.3b79bc83.js";import{j as s}from"./jsx-runtime.f6ca4dfe.js";import"./iframe.63f2cf9c.js";var o={progressContainer:"_1ug66720",progressLine:"_1ug66721"};const e=({className:r,value:n})=>s("div",{className:t(o.progressContainer,r),children:s("div",{style:{width:`${n}%`},className:o.progressLine})});try{e.displayName="Progress",e.__docgenInfo={description:"",displayName:"Progress",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/progress/Progress.tsx#Progress"]={docgenInfo:e.__docgenInfo,name:"Progress",path:"src/components/progress/Progress.tsx#Progress"})}catch{}const m={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Progress } from '../components/progress';

export default {
  title: 'UI/Progress',
  component: Progress,
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = args => {
  return <Progress value={args.value} />;
};

export const Base = Template.bind({});
Base.args = {
  value: 50,
};
`,locationsMap:{base:{startLoc:{col:50,line:9},endLoc:{col:1,line:11},startBody:{col:50,line:9},endBody:{col:1,line:11}}}}},title:"UI/Progress",component:e},a=r=>s(e,{value:r.value}),p=a.bind({});p.args={value:50};const d=["Base"];export{p as Base,d as __namedExportsOrder,m as default};
//# sourceMappingURL=Progress.stories.692be0d4.js.map
