import{r as s,j as a,a as l}from"./jsx-runtime.0b33d63e.js";import{R as c}from"./TextField.b21168b3.js";import"./iframe.9228a094.js";import"./clsx.3b79bc83.js";/* empty css                            */import"./vanilla-extract-recipes-createRuntimeFn.esm.57f0c9b7.js";import"./Paragraph.e357287c.js";var m="_1v8c6lg0";const p=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],r=s.exports.forwardRef(({style:e,children:t,className:n,direction:i},d)=>a("div",{style:{display:"flex",flexDirection:i,...e},ref:d,className:n,children:t})),o=({direction:e,children:t,spacing:n})=>a("span",{style:{[`margin${p(e)}`]:`${n}rem`},className:m,children:t});try{r.displayName="Stack",r.__docgenInfo={description:"",displayName:"Stack",props:{direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"row"'},{value:'"row-reverse"'},{value:'"column"'},{value:'"column-reverse"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/stack/Stack.tsx#Stack"]={docgenInfo:r.__docgenInfo,name:"Stack",path:"src/components/stack/Stack.tsx#Stack"})}catch{}try{o.displayName="StackItem",o.__docgenInfo={description:"",displayName:"StackItem",props:{spacing:{defaultValue:null,description:"",name:"spacing",required:!1,type:{name:"number | undefined"}},direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"row"'},{value:'"row-reverse"'},{value:'"column"'},{value:'"column-reverse"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/stack/Stack.tsx#StackItem"]={docgenInfo:o.__docgenInfo,name:"StackItem",path:"src/components/stack/Stack.tsx#StackItem"})}catch{}const C={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
`,locationsMap:{base:{startLoc:{col:52,line:16},endLoc:{col:1,line:28},startBody:{col:52,line:16},endBody:{col:1,line:28}}}}},title:"UI/Inputs/RadioField",component:c,argTypes:{disabled:{type:"boolean"}}},u=e=>{const[t,n]=s.exports.useState(1);return l(r,{direction:"row",children:[a(o,{direction:"row",spacing:1,children:a(c,{...e,checked:t===0,onChange:()=>n(0)})}),a(o,{direction:"row",spacing:1,children:a(c,{...e,checked:t===1,onChange:()=>n(1)})})]})},S=u.bind({});S.args={label:"First Name",radioProps:{name:"first_name"}};const R=["Base"];export{S as Base,R as __namedExportsOrder,C as default};
//# sourceMappingURL=RadioField.stories.74ba47f5.js.map
