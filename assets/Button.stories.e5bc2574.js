import{B as o}from"./Button.f50ac044.js";import{a as r}from"./CalendarEventIcon.261c35ba.js";import{j as t}from"./jsx-runtime.116912e2.js";import"./clsx.3b79bc83.js";import"./Spinner.382d51c3.js";/* empty css                             */import"./vanilla-extract-recipes-createRuntimeFn.esm.36bbe845.js";import"./iframe.b44b4ad0.js";const f={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
  size: 'big',
};
export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  children: 'Button',
  size: 'small',
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
`,locationsMap:{primary:{startLoc:{col:48,line:21},endLoc:{col:76,line:21},startBody:{col:48,line:21},endBody:{col:76,line:21}},secondary:{startLoc:{col:48,line:21},endLoc:{col:76,line:21},startBody:{col:48,line:21},endBody:{col:76,line:21}},outline:{startLoc:{col:48,line:21},endLoc:{col:76,line:21},startBody:{col:48,line:21},endBody:{col:76,line:21}},"outline-secondary":{startLoc:{col:48,line:21},endLoc:{col:76,line:21},startBody:{col:48,line:21},endBody:{col:76,line:21}},"primary-big":{startLoc:{col:48,line:21},endLoc:{col:76,line:21},startBody:{col:48,line:21},endBody:{col:76,line:21}},"primary-small":{startLoc:{col:48,line:21},endLoc:{col:76,line:21},startBody:{col:48,line:21},endBody:{col:76,line:21}},loading:{startLoc:{col:48,line:21},endLoc:{col:76,line:21},startBody:{col:48,line:21},endBody:{col:76,line:21}},"square-min-width":{startLoc:{col:48,line:21},endLoc:{col:76,line:21},startBody:{col:48,line:21},endBody:{col:76,line:21}},"square-full-width":{startLoc:{col:48,line:21},endLoc:{col:76,line:21},startBody:{col:48,line:21},endBody:{col:76,line:21}}}}},title:"UI/Button",component:o,argTypes:{disabled:{type:"boolean"},fullWidth:{type:"boolean"},minWidth:{type:"boolean"}}},n=e=>t(o,{...e}),i=n.bind({});i.args={children:"Button"};const l=n.bind({});l.args={children:"Button",color:"secondary"};const a=n.bind({});a.args={children:"Button",color:"outline"};const c=n.bind({});c.args={children:"Button",color:"outline_secondary"};const d=n.bind({});d.args={children:"Button",size:"big"};const s=n.bind({});s.args={children:"Button",size:"small"};const u=n.bind({});u.args={children:"Test long description",loading:!0};const m=n.bind({});m.args={minWidth:!0,mode:"square",children:"Button"};const y=n.bind({});y.args={fullWidth:!0,mode:"square",children:"Button",icon:t(r,{})};const T=["Primary","Secondary","Outline","OutlineSecondary","PrimaryBig","PrimarySmall","Loading","SquareMinWidth","SquareFullWidth"];export{u as Loading,a as Outline,c as OutlineSecondary,i as Primary,d as PrimaryBig,s as PrimarySmall,l as Secondary,y as SquareFullWidth,m as SquareMinWidth,T as __namedExportsOrder,f as default};
//# sourceMappingURL=Button.stories.e5bc2574.js.map
