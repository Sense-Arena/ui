import{B as o}from"./Button-6100f49b.js";import{j as t}from"./jsx-runtime-7c09b6e1.js";import{A as r}from"./ArrowRightCircle-80c1d7c5.js";import"./index-73a32e48.js";import"./es.object.get-own-property-descriptor-d5205e32.js";import"./clsx-9a51c995.js";/* empty css                            */import"./vanilla-extract-recipes-createRuntimeFn.esm-d30eb010.js";import"./Spinner-8bb94193.js";const f={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
`,locationsMap:{primary:{startLoc:{col:48,line:21},endLoc:{col:76,line:21},startBody:{col:48,line:21},endBody:{col:76,line:21}},secondary:{startLoc:{col:48,line:21},endLoc:{col:76,line:21},startBody:{col:48,line:21},endBody:{col:76,line:21}},"secondary-action":{startLoc:{col:48,line:21},endLoc:{col:76,line:21},startBody:{col:48,line:21},endBody:{col:76,line:21}},outline:{startLoc:{col:48,line:21},endLoc:{col:76,line:21},startBody:{col:48,line:21},endBody:{col:76,line:21}},"outline-secondary":{startLoc:{col:48,line:21},endLoc:{col:76,line:21},startBody:{col:48,line:21},endBody:{col:76,line:21}},"primary-big":{startLoc:{col:48,line:21},endLoc:{col:76,line:21},startBody:{col:48,line:21},endBody:{col:76,line:21}},"primary-small":{startLoc:{col:48,line:21},endLoc:{col:76,line:21},startBody:{col:48,line:21},endBody:{col:76,line:21}},loading:{startLoc:{col:48,line:21},endLoc:{col:76,line:21},startBody:{col:48,line:21},endBody:{col:76,line:21}},"square-min-width":{startLoc:{col:48,line:21},endLoc:{col:76,line:21},startBody:{col:48,line:21},endBody:{col:76,line:21}},"square-full-width":{startLoc:{col:48,line:21},endLoc:{col:76,line:21},startBody:{col:48,line:21},endBody:{col:76,line:21}}}}},title:"UI/Button",component:o,argTypes:{disabled:{type:"boolean"},fullWidth:{type:"boolean"},minWidth:{type:"boolean"}}},n=e=>t(o,{...e}),i=n.bind({});i.args={children:"Button"};const l=n.bind({});l.args={children:"Button",color:"secondary"};const c=n.bind({});c.args={children:"Button",color:"secondary_action",mode:"square"};const a=n.bind({});a.args={children:"Button",color:"outline"};const d=n.bind({});d.args={children:"Button",color:"outline_secondary"};const s=n.bind({});s.args={children:"Button",size:"l"};const u=n.bind({});u.args={children:"Button",size:"s"};const m=n.bind({});m.args={children:"Test long description",loading:!0};const y=n.bind({});y.args={minWidth:!0,mode:"square",children:"Button"};const p=n.bind({});p.args={fullWidth:!0,mode:"square",children:"Button",icon:t(r,{})};const x=["Primary","Secondary","SecondaryAction","Outline","OutlineSecondary","PrimaryBig","PrimarySmall","Loading","SquareMinWidth","SquareFullWidth"];export{m as Loading,a as Outline,d as OutlineSecondary,i as Primary,s as PrimaryBig,u as PrimarySmall,l as Secondary,c as SecondaryAction,p as SquareFullWidth,y as SquareMinWidth,x as __namedExportsOrder,f as default};
//# sourceMappingURL=Button.stories-0a25b529.js.map
