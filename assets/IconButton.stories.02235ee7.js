import{r as p,j as e}from"./jsx-runtime.92645f65.js";import{c as d}from"./clsx.3b79bc83.js";/* empty css                             */import"./iframe.e797048e.js";var m="_19hj0km0";const n=p.exports.forwardRef(({children:o,onClick:s,disabled:t,className:a,...i},l)=>e("button",{ref:l,disabled:t,className:d(m,a),onClick:t?void 0:s,...i,children:o})),c=n;try{n.displayName="IconButton",n.__docgenInfo={description:"",displayName:"IconButton",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/icon-button/IconButton.tsx#IconButton"]={docgenInfo:n.__docgenInfo,name:"IconButton",path:"src/components/icon-button/IconButton.tsx#IconButton"})}catch{}const f={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import IconButton from '../components/icon-button/IconButton';

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
`,locationsMap:{primary:{startLoc:{col:52,line:14},endLoc:{col:84,line:14},startBody:{col:52,line:14},endBody:{col:84,line:14}},disabled:{startLoc:{col:52,line:14},endLoc:{col:84,line:14},startBody:{col:52,line:14},endBody:{col:84,line:14}}}}},title:"UI/Icon Button",component:c,argTypes:{disabled:{type:"boolean"}}},r=o=>e(c,{...o}),u=r.bind({});u.args={};const y=r.bind({});y.args={disabled:!0};const g=["Primary","Disabled"];export{y as Disabled,u as Primary,g as __namedExportsOrder,f as default};
//# sourceMappingURL=IconButton.stories.02235ee7.js.map
