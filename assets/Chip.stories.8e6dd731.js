import{C as e}from"./Chip.65287bd8.js";import{j as r}from"./jsx-runtime.d3935788.js";import"./YoutubeIcon.e9bd2756.js";import"./clsx.3b79bc83.js";import"./Paragraph.acfab0eb.js";/* empty css                            */import"./vanilla-extract-recipes-createRuntimeFn.esm.e37fdae4.js";import"./iframe.4f4ea7f5.js";const z={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Chip } from '../components/chip';

export default {
  title: 'UI/Chip',
  component: Chip,
  argTypes: {
    size: {
      defaultValue: 'm',
      options: ['s', 'm', 'l'],
      control: {
        type: 'select',
      },
    },
    color: {
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'warning', 'dark'],
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = args => {
  return <Chip {...args}>{args.children}</Chip>;
};

export const Base = Template.bind({});
Base.args = {
  children: 'Default chip',
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  children: 'Chip size L',
  size: 'l',
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  children: 'Chip size S',
  size: 's',
};

export const SecondaryColor = Template.bind({});
SecondaryColor.args = {
  children: 'Chip Color secondary',
  color: 'secondary',
};

export const WarningColor = Template.bind({});
WarningColor.args = {
  children: 'Chip Color warning',
  color: 'warning',
};

export const DarkColor = Template.bind({});
DarkColor.args = {
  children: 'Chip Color dark',
  color: 'dark',
};

export const Deletable = Template.bind({});
Deletable.args = {
  children: 'Chip deletable',
  color: 'secondary',
  onDelete: () => {
    console.log('test');
  },
};
`,locationsMap:{base:{startLoc:{col:46,line:25},endLoc:{col:1,line:27},startBody:{col:46,line:25},endBody:{col:1,line:27}},"size-large":{startLoc:{col:46,line:25},endLoc:{col:1,line:27},startBody:{col:46,line:25},endBody:{col:1,line:27}},"size-small":{startLoc:{col:46,line:25},endLoc:{col:1,line:27},startBody:{col:46,line:25},endBody:{col:1,line:27}},"secondary-color":{startLoc:{col:46,line:25},endLoc:{col:1,line:27},startBody:{col:46,line:25},endBody:{col:1,line:27}},"warning-color":{startLoc:{col:46,line:25},endLoc:{col:1,line:27},startBody:{col:46,line:25},endBody:{col:1,line:27}},"dark-color":{startLoc:{col:46,line:25},endLoc:{col:1,line:27},startBody:{col:46,line:25},endBody:{col:1,line:27}},deletable:{startLoc:{col:46,line:25},endLoc:{col:1,line:27},startBody:{col:46,line:25},endBody:{col:1,line:27}}}}},title:"UI/Chip",component:e,argTypes:{size:{defaultValue:"m",options:["s","m","l"],control:{type:"select"}},color:{defaultValue:"primary",options:["primary","secondary","warning","dark"],control:{type:"select"}}}},n=o=>r(e,{...o,children:o.children}),l=n.bind({});l.args={children:"Default chip"};const i=n.bind({});i.args={children:"Chip size L",size:"l"};const t=n.bind({});t.args={children:"Chip size S",size:"s"};const a=n.bind({});a.args={children:"Chip Color secondary",color:"secondary"};const c=n.bind({});c.args={children:"Chip Color warning",color:"warning"};const s=n.bind({});s.args={children:"Chip Color dark",color:"dark"};const d=n.bind({});d.args={children:"Chip deletable",color:"secondary",onDelete:()=>{console.log("test")}};const L=["Base","SizeLarge","SizeSmall","SecondaryColor","WarningColor","DarkColor","Deletable"];export{l as Base,s as DarkColor,d as Deletable,a as SecondaryColor,i as SizeLarge,t as SizeSmall,c as WarningColor,L as __namedExportsOrder,z as default};
//# sourceMappingURL=Chip.stories.8e6dd731.js.map
