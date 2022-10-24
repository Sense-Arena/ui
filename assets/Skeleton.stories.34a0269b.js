import{r as c,j as t,F as r}from"./jsx-runtime.f9f83f9a.js";/* empty css                            */import"./iframe.61bcd963.js";var p={skeletonContainer:"_1maq1kx1"};const e=c.exports.memo(({children:n,loading:a,style:s,count:i=1})=>{if(a){const l=[];for(let o=0;o<i;o++)l.push(t("div",{className:p.skeletonContainer,style:s},o));return t(r,{children:l})}return t(r,{children:n})});try{e.displayName="Skeleton",e.__docgenInfo={description:"",displayName:"Skeleton",props:{loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},count:{defaultValue:null,description:"",name:"count",required:!1,type:{name:"number | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/skeleton/Skeleton.tsx#Skeleton"]={docgenInfo:e.__docgenInfo,name:"Skeleton",path:"src/components/skeleton/Skeleton.tsx#Skeleton"})}catch{}const f={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Skeleton } from '../components/skeleton/Skeleton';

export default {
  title: 'UI/Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = args => <Skeleton {...args}>Content after loading</Skeleton>;

export const Base = Template.bind({});
Base.args = {
  loading: true,
  count: 5,
};
`,locationsMap:{base:{startLoc:{col:50,line:9},endLoc:{col:110,line:9},startBody:{col:50,line:9},endBody:{col:110,line:9}}}}},title:"UI/Skeleton",component:e},d=n=>t(e,{...n,children:"Content after loading"}),m=d.bind({});m.args={loading:!0,count:5};const _=["Base"];export{m as Base,_ as __namedExportsOrder,f as default};
//# sourceMappingURL=Skeleton.stories.34a0269b.js.map
