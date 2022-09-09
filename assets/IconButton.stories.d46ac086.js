import{I as t}from"./IconButton.869beddb.js";import{s as r}from"./CalendarEventIcon.8df8776b.js";import{j as n}from"./jsx-runtime.d9808ae3.js";import"./clsx.3b79bc83.js";/* empty css                             */import"./vanilla-extract-recipes-createRuntimeFn.esm.36bbe845.js";import"./iframe.3f93d591.js";const u={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
`,locationsMap:{primary:{startLoc:{col:52,line:15},endLoc:{col:110,line:15},startBody:{col:52,line:15},endBody:{col:110,line:15}},secondary:{startLoc:{col:52,line:15},endLoc:{col:110,line:15},startBody:{col:52,line:15},endBody:{col:110,line:15}},disabled:{startLoc:{col:52,line:15},endLoc:{col:110,line:15},startBody:{col:52,line:15},endBody:{col:110,line:15}}}}},title:"UI/Icon Button",component:t,argTypes:{disabled:{type:"boolean"}}},o=e=>n(t,{...e,children:n(r,{})}),c=o.bind({});c.args={color:"primary"};const a=o.bind({});a.args={color:"secondary"};const s=o.bind({});s.args={disabled:!0};const B=["Primary","Secondary","Disabled"];export{s as Disabled,c as Primary,a as Secondary,B as __namedExportsOrder,u as default};
//# sourceMappingURL=IconButton.stories.d46ac086.js.map
