import{I as t}from"./IconButton.38b532f4.js";import{s as r}from"./CalendarEventIcon.57858c27.js";import{j as n}from"./jsx-runtime.5d846f11.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.89755c4d.js";/* empty css                             */import"./iframe.44efcd93.js";const b={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
Primary.args = {
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
`,locationsMap:{primary:{startLoc:{col:52,line:15},endLoc:{col:110,line:15},startBody:{col:52,line:15},endBody:{col:110,line:15}},secondary:{startLoc:{col:52,line:15},endLoc:{col:110,line:15},startBody:{col:52,line:15},endBody:{col:110,line:15}},disabled:{startLoc:{col:52,line:15},endLoc:{col:110,line:15},startBody:{col:52,line:15},endBody:{col:110,line:15}}}}},title:"UI/Icon Button",component:t,argTypes:{disabled:{type:"boolean"}}},o=e=>n(t,{...e,children:n(r,{})}),c=o.bind({});c.args={color:"primary"};const a=o.bind({});a.args={color:"secondary"};const s=o.bind({});s.args={disabled:!0};const u=["Primary","Secondary","Disabled"];export{s as Disabled,c as Primary,a as Secondary,u as __namedExportsOrder,b as default};
//# sourceMappingURL=IconButton.stories.526a4ba7.js.map
