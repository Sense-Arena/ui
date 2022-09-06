import{r as l,j as e}from"./jsx-runtime.01de8de0.js";import{c as p}from"./clsx.3b79bc83.js";/* empty css                             */import"./iframe.0fb01180.js";var d="_19hj0km0";const o=l.exports.forwardRef(({children:n,onClick:c,disabled:t,className:s,...a},i)=>e("button",{ref:i,disabled:t,className:p(d,s),onClick:t?void 0:c,...a,children:n}));try{o.displayName="IconButton",o.__docgenInfo={description:"",displayName:"IconButton",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/icon-button/IconButton.tsx#IconButton"]={docgenInfo:o.__docgenInfo,name:"IconButton",path:"src/components/icon-button/IconButton.tsx#IconButton"})}catch{}const b={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IconButton } from '../components/icon-button';

export default {
  title: 'UI/Icon Button',
  component: IconButton,
  argTypes: {
    disabled: {
      type: 'boolean',
    },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = args => <IconButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
`,locationsMap:{primary:{startLoc:{col:52,line:14},endLoc:{col:84,line:14},startBody:{col:52,line:14},endBody:{col:84,line:14}},disabled:{startLoc:{col:52,line:14},endLoc:{col:84,line:14},startBody:{col:52,line:14},endBody:{col:84,line:14}}}}},title:"UI/Icon Button",component:o,argTypes:{disabled:{type:"boolean"}}},r=n=>e(o,{...n}),m=r.bind({});m.args={};const u=r.bind({});u.args={disabled:!0};const f=["Primary","Disabled"];export{u as Disabled,m as Primary,f as __namedExportsOrder,b as default};
//# sourceMappingURL=IconButton.stories.0ea35ba7.js.map
