import{I as e}from"./IconButton.805147e1.js";import{y as r}from"./YoutubeIcon.968c2873.js";import{j as n}from"./jsx-runtime.03adff54.js";import"./clsx.3b79bc83.js";import"./Spinner.711b2665.js";/* empty css                            */import"./vanilla-extract-recipes-createRuntimeFn.esm.57f0c9b7.js";import"./iframe.94bae343.js";const L={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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

export const SmallSize = Template.bind({});
SmallSize.args = {
  color: 'secondary',
  size: 's',
};

export const SmallSizeLoading = Template.bind({});
SmallSizeLoading.args = {
  color: 'secondary',
  size: 's',
  loading: true,
};
`,locationsMap:{primary:{startLoc:{col:52,line:15},endLoc:{col:110,line:15},startBody:{col:52,line:15},endBody:{col:110,line:15}},secondary:{startLoc:{col:52,line:15},endLoc:{col:110,line:15},startBody:{col:52,line:15},endBody:{col:110,line:15}},disabled:{startLoc:{col:52,line:15},endLoc:{col:110,line:15},startBody:{col:52,line:15},endBody:{col:110,line:15}},loading:{startLoc:{col:52,line:15},endLoc:{col:110,line:15},startBody:{col:52,line:15},endBody:{col:110,line:15}},"small-size":{startLoc:{col:52,line:15},endLoc:{col:110,line:15},startBody:{col:52,line:15},endBody:{col:110,line:15}},"small-size-loading":{startLoc:{col:52,line:15},endLoc:{col:110,line:15},startBody:{col:52,line:15},endBody:{col:110,line:15}}}}},title:"UI/Icon Button",component:e,argTypes:{disabled:{type:"boolean"}}},o=t=>n(e,{...t,children:n(r,{})}),l=o.bind({});l.args={color:"primary"};const a=o.bind({});a.args={color:"secondary"};const i=o.bind({});i.args={disabled:!0};const c=o.bind({});c.args={loading:!0};const s=o.bind({});s.args={color:"secondary",size:"s"};const d=o.bind({});d.args={color:"secondary",size:"s",loading:!0};const I=["Primary","Secondary","Disabled","Loading","SmallSize","SmallSizeLoading"];export{i as Disabled,c as Loading,l as Primary,a as Secondary,s as SmallSize,d as SmallSizeLoading,I as __namedExportsOrder,L as default};
//# sourceMappingURL=IconButton.stories.b039b87a.js.map
