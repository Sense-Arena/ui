import{r as p,j as t}from"./jsx-runtime.26188c27.js";import{c as l}from"./clsx.3b79bc83.js";/* empty css                             */import{q as d}from"./TrophyIcon.22389680.js";import"./iframe.8e3f48fb.js";var m="_19hj0km0";const o=p.exports.forwardRef(({children:n,onClick:c,disabled:e,className:s,...a},i)=>t("button",{ref:i,disabled:e,className:l(m,s),onClick:e?void 0:c,...a,children:n}));try{o.displayName="IconButton",o.__docgenInfo={description:"",displayName:"IconButton",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/icon-button/IconButton.tsx#IconButton"]={docgenInfo:o.__docgenInfo,name:"IconButton",path:"src/components/icon-button/IconButton.tsx#IconButton"})}catch{}const T={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IconButton } from '../components/icon-button';
import { TrophyIcon } from '../icons';

export default {
  title: 'UI/Icon Button',
  component: IconButton,
  argTypes: {
    disabled: {
      type: 'boolean',
    },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = args => <IconButton {...args} children={<TrophyIcon />} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
`,locationsMap:{primary:{startLoc:{col:52,line:15},endLoc:{col:110,line:15},startBody:{col:52,line:15},endBody:{col:110,line:15}},disabled:{startLoc:{col:52,line:15},endLoc:{col:110,line:15},startBody:{col:52,line:15},endBody:{col:110,line:15}}}}},title:"UI/Icon Button",component:o,argTypes:{disabled:{type:"boolean"}}},r=n=>t(o,{...n,children:t(d,{})}),u=r.bind({});u.args={};const y=r.bind({});y.args={disabled:!0};const g=["Primary","Disabled"];export{y as Disabled,u as Primary,g as __namedExportsOrder,T as default};
//# sourceMappingURL=IconButton.stories.dbd0e0e1.js.map
