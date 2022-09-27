import{I as t}from"./IconButton.77b0f6c5.js";import{v as r}from"./YoutubeIcon.eaf79e07.js";import{j as n}from"./jsx-runtime.a61abc8c.js";import"./clsx.3b79bc83.js";import"./Spinner.4975aaeb.js";/* empty css                             */import"./vanilla-extract-recipes-createRuntimeFn.esm.57f0c9b7.js";import"./iframe.4021a580.js";const B={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};
`,locationsMap:{primary:{startLoc:{col:52,line:15},endLoc:{col:110,line:15},startBody:{col:52,line:15},endBody:{col:110,line:15}},secondary:{startLoc:{col:52,line:15},endLoc:{col:110,line:15},startBody:{col:52,line:15},endBody:{col:110,line:15}},disabled:{startLoc:{col:52,line:15},endLoc:{col:110,line:15},startBody:{col:52,line:15},endBody:{col:110,line:15}},loading:{startLoc:{col:52,line:15},endLoc:{col:110,line:15},startBody:{col:52,line:15},endBody:{col:110,line:15}}}}},title:"UI/Icon Button",component:t,argTypes:{disabled:{type:"boolean"}}},o=e=>n(t,{...e,children:n(r,{})}),a=o.bind({});a.args={color:"primary"};const c=o.bind({});c.args={color:"secondary"};const i=o.bind({});i.args={disabled:!0};const l=o.bind({});l.args={loading:!0};const I=["Primary","Secondary","Disabled","Loading"];export{i as Disabled,l as Loading,a as Primary,c as Secondary,I as __namedExportsOrder,B as default};
//# sourceMappingURL=IconButton.stories.1a82144f.js.map
