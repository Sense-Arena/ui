import{j as t}from"./jsx-runtime-7c09b6e1.js";import{H as e}from"./Heading-d9039fdf.js";import"./index-73a32e48.js";import"./es.object.get-own-property-descriptor-d5205e32.js";import"./clsx-9a51c995.js";import"./typography.style.css-b45ec07e.js";/* empty css                            */import"./vanilla-extract-recipes-createRuntimeFn.esm-d30eb010.js";const y={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Heading } from '../../components/typography';

export default {
  title: 'UI/Typography/Heading',
  component: Heading,
  argTypes: {
    weight: {
      name: 'weight',
      defaultValue: 'medium',
      options: ['light', 'medium'],
      control: {
        type: 'select',
      },
    },
    root: {
      name: 'Root component',
      defaultValue: 'h1',
      options: ['h1', 'h2', 'h3', 'h4'],
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = args => <Heading {...args} />;

export const Heading1 = Template.bind({});
Heading1.args = {
  children: 'BECOME THE PLAYMAKER',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  children: 'Your Cart',
  root: 'h2',
};

export const Heading3 = Template.bind({});
Heading3.args = {
  children: 'Sense Arena Single Annual License',
  root: 'h3',
};

export const Heading4 = Template.bind({});
Heading4.args = {
  children: 'Shipping method',
  root: 'h4',
};
`,locationsMap:{"heading-1":{startLoc:{col:49,line:27},endLoc:{col:78,line:27},startBody:{col:49,line:27},endBody:{col:78,line:27}},"heading-2":{startLoc:{col:49,line:27},endLoc:{col:78,line:27},startBody:{col:49,line:27},endBody:{col:78,line:27}},"heading-3":{startLoc:{col:49,line:27},endLoc:{col:78,line:27},startBody:{col:49,line:27},endBody:{col:78,line:27}},"heading-4":{startLoc:{col:49,line:27},endLoc:{col:78,line:27},startBody:{col:49,line:27},endBody:{col:78,line:27}}}}},title:"UI/Typography/Heading",component:e,argTypes:{weight:{name:"weight",defaultValue:"medium",options:["light","medium"],control:{type:"select"}},root:{name:"Root component",defaultValue:"h1",options:["h1","h2","h3","h4"],control:{type:"select"}}}},n=o=>t(e,{...o}),i=n.bind({});i.args={children:"BECOME THE PLAYMAKER"};const a=n.bind({});a.args={children:"Your Cart",root:"h2"};const r=n.bind({});r.args={children:"Sense Arena Single Annual License",root:"h3"};const d=n.bind({});d.args={children:"Shipping method",root:"h4"};const u=["Heading1","Heading2","Heading3","Heading4"];export{i as Heading1,a as Heading2,r as Heading3,d as Heading4,u as __namedExportsOrder,y as default};
//# sourceMappingURL=Heading.stories-2199042a.js.map
