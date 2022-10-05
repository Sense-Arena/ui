import{B as o}from"./Button.32ffacd8.js";import{e as r}from"./YoutubeIcon.7372dd47.js";import{j as t}from"./jsx-runtime.81dd747a.js";import"./clsx.3b79bc83.js";import"./Spinner.373a5454.js";/* empty css                            */import"./vanilla-extract-recipes-createRuntimeFn.esm.57f0c9b7.js";import"./iframe.33fbd44d.js";const W={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../components/button/Button';
import { ArrowRightCircle } from '../icons';

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    disabled: {
      type: 'boolean',
    },
    fullWidth: {
      type: 'boolean',
    },
    minWidth: {
      type: 'boolean',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
};
export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
  color: 'secondary',
};
export const SecondaryAction = Template.bind({});
SecondaryAction.args = {
  children: 'Button',
  color: 'secondary_action',
  mode: 'square',
};
export const Outline = Template.bind({});
Outline.args = {
  children: 'Button',
  color: 'outline',
};
export const OutlineSecondary = Template.bind({});
OutlineSecondary.args = {
  children: 'Button',
  color: 'outline_secondary',
};
export const PrimaryBig = Template.bind({});
PrimaryBig.args = {
  children: 'Button',
  size: 'l',
};
export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  children: 'Button',
  size: 's',
};

export const Loading = Template.bind({});
Loading.args = {
  children: 'Test long description',
  loading: true,
};

export const SquareMinWidth = Template.bind({});
SquareMinWidth.args = {
  minWidth: true,
  mode: 'square',
  children: 'Button',
};

export const SquareFullWidth = Template.bind({});
SquareFullWidth.args = {
  fullWidth: true,
  mode: 'square',
  children: 'Button',
  icon: <ArrowRightCircle />,
};
`,locationsMap:{primary:{startLoc:{col:48,line:21},endLoc:{col:76,line:21},startBody:{col:48,line:21},endBody:{col:76,line:21}},secondary:{startLoc:{col:48,line:21},endLoc:{col:76,line:21},startBody:{col:48,line:21},endBody:{col:76,line:21}},"secondary-action":{startLoc:{col:48,line:21},endLoc:{col:76,line:21},startBody:{col:48,line:21},endBody:{col:76,line:21}},outline:{startLoc:{col:48,line:21},endLoc:{col:76,line:21},startBody:{col:48,line:21},endBody:{col:76,line:21}},"outline-secondary":{startLoc:{col:48,line:21},endLoc:{col:76,line:21},startBody:{col:48,line:21},endBody:{col:76,line:21}},"primary-big":{startLoc:{col:48,line:21},endLoc:{col:76,line:21},startBody:{col:48,line:21},endBody:{col:76,line:21}},"primary-small":{startLoc:{col:48,line:21},endLoc:{col:76,line:21},startBody:{col:48,line:21},endBody:{col:76,line:21}},loading:{startLoc:{col:48,line:21},endLoc:{col:76,line:21},startBody:{col:48,line:21},endBody:{col:76,line:21}},"square-min-width":{startLoc:{col:48,line:21},endLoc:{col:76,line:21},startBody:{col:48,line:21},endBody:{col:76,line:21}},"square-full-width":{startLoc:{col:48,line:21},endLoc:{col:76,line:21},startBody:{col:48,line:21},endBody:{col:76,line:21}}}}},title:"UI/Button",component:o,argTypes:{disabled:{type:"boolean"},fullWidth:{type:"boolean"},minWidth:{type:"boolean"}}},n=e=>t(o,{...e}),i=n.bind({});i.args={children:"Button"};const l=n.bind({});l.args={children:"Button",color:"secondary"};const c=n.bind({});c.args={children:"Button",color:"secondary_action",mode:"square"};const a=n.bind({});a.args={children:"Button",color:"outline"};const d=n.bind({});d.args={children:"Button",color:"outline_secondary"};const s=n.bind({});s.args={children:"Button",size:"l"};const u=n.bind({});u.args={children:"Button",size:"s"};const y=n.bind({});y.args={children:"Test long description",loading:!0};const m=n.bind({});m.args={minWidth:!0,mode:"square",children:"Button"};const p=n.bind({});p.args={fullWidth:!0,mode:"square",children:"Button",icon:t(r,{})};const f=["Primary","Secondary","SecondaryAction","Outline","OutlineSecondary","PrimaryBig","PrimarySmall","Loading","SquareMinWidth","SquareFullWidth"];export{y as Loading,a as Outline,d as OutlineSecondary,i as Primary,s as PrimaryBig,u as PrimarySmall,l as Secondary,c as SecondaryAction,p as SquareFullWidth,m as SquareMinWidth,f as __namedExportsOrder,W as default};
//# sourceMappingURL=Button.stories.a6819c7d.js.map
