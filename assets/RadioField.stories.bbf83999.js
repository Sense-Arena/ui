import{r as s,j as o,a as l}from"./jsx-runtime.08171e10.js";import{R as c}from"./Select.3f5cff72.js";import"./iframe.efad6093.js";import"./clsx.3b79bc83.js";/* empty css                            */import"./vanilla-extract-recipes-createRuntimeFn.esm.57f0c9b7.js";import"./Paragraph.fdf0c8a8.js";import"./DropdownMenu.da1b7266.js";import"./react-spring-web.esm.6498aba4.js";import"./index.7ae5a3ad.js";import"./YoutubeIcon.ec9626df.js";var m="_1v8c6lg0";const p=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],r=s.exports.forwardRef(({style:e,children:t,className:n,direction:i},d)=>o("div",{style:{display:"flex",flexDirection:i,...e},ref:d,className:n,children:t})),a=({direction:e,children:t,spacing:n})=>o("span",{style:{[`margin${p(e)}`]:`${n}rem`},className:m,children:t});try{r.displayName="Stack",r.__docgenInfo={description:"",displayName:"Stack",props:{direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"row"'},{value:'"row-reverse"'},{value:'"column"'},{value:'"column-reverse"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/stack/Stack.tsx#Stack"]={docgenInfo:r.__docgenInfo,name:"Stack",path:"src/components/stack/Stack.tsx#Stack"})}catch{}try{a.displayName="StackItem",a.__docgenInfo={description:"",displayName:"StackItem",props:{spacing:{defaultValue:null,description:"",name:"spacing",required:!1,type:{name:"number | undefined"}},direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"row"'},{value:'"row-reverse"'},{value:'"column"'},{value:'"column-reverse"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/stack/Stack.tsx#StackItem"]={docgenInfo:a.__docgenInfo,name:"StackItem",path:"src/components/stack/Stack.tsx#StackItem"})}catch{}const T={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { RadioField } from '../../components/inputs';
import { Stack, StackItem } from '../../components/stack/Stack';

export default {
  title: 'UI/Inputs/RadioField',
  component: RadioField,
  argTypes: {
    disabled: {
      type: 'boolean',
    },
  },
} as ComponentMeta<typeof RadioField>;

const Template: ComponentStory<typeof RadioField> = args => {
  const [checked, setChecked] = useState(1);
  return (
    <Stack direction="row">
      <StackItem direction="row" spacing={1}>
        <RadioField {...args} checked={checked === 0} onChange={() => setChecked(0)} />
      </StackItem>
      <StackItem direction="row" spacing={1}>
        <RadioField {...args} checked={checked === 1} onChange={() => setChecked(1)} />
      </StackItem>
    </Stack>
  );
};

export const Base = Template.bind({});
Base.args = {
  label: 'First Name',
  radioProps: {
    name: 'first_name',
  },
};
`,locationsMap:{base:{startLoc:{col:52,line:16},endLoc:{col:1,line:28},startBody:{col:52,line:16},endBody:{col:1,line:28}}}}},title:"UI/Inputs/RadioField",component:c,argTypes:{disabled:{type:"boolean"}}},u=e=>{const[t,n]=s.exports.useState(1);return l(r,{direction:"row",children:[o(a,{direction:"row",spacing:1,children:o(c,{...e,checked:t===0,onChange:()=>n(0)})}),o(a,{direction:"row",spacing:1,children:o(c,{...e,checked:t===1,onChange:()=>n(1)})})]})},S=u.bind({});S.args={label:"First Name",radioProps:{name:"first_name"}};const w=["Base"];export{S as Base,w as __namedExportsOrder,T as default};
//# sourceMappingURL=RadioField.stories.bbf83999.js.map
