import{H as e}from"./Paragraph.8bbc9226.js";import{j as t}from"./jsx-runtime.559ba58b.js";import"./clsx.3b79bc83.js";/* empty css                             */import"./vanilla-extract-recipes-createRuntimeFn.esm.36bbe845.js";import"./iframe.589ee44a.js";const h={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
`,locationsMap:{"heading-1":{startLoc:{col:49,line:27},endLoc:{col:78,line:27},startBody:{col:49,line:27},endBody:{col:78,line:27}},"heading-2":{startLoc:{col:49,line:27},endLoc:{col:78,line:27},startBody:{col:49,line:27},endBody:{col:78,line:27}},"heading-3":{startLoc:{col:49,line:27},endLoc:{col:78,line:27},startBody:{col:49,line:27},endBody:{col:78,line:27}},"heading-4":{startLoc:{col:49,line:27},endLoc:{col:78,line:27},startBody:{col:49,line:27},endBody:{col:78,line:27}}}}},title:"UI/Typography/Heading",component:e,argTypes:{weight:{name:"weight",defaultValue:"medium",options:["light","medium"],control:{type:"select"}},root:{name:"Root component",defaultValue:"h1",options:["h1","h2","h3","h4"],control:{type:"select"}}}},n=o=>t(e,{...o}),i=n.bind({});i.args={children:"BECOME THE PLAYMAKER"};const a=n.bind({});a.args={children:"Your Cart",root:"h2"};const r=n.bind({});r.args={children:"Sense Arena Single Annual License",root:"h3"};const d=n.bind({});d.args={children:"Shipping method",root:"h4"};const H=["Heading1","Heading2","Heading3","Heading4"];export{i as Heading1,a as Heading2,r as Heading3,d as Heading4,H as __namedExportsOrder,h as default};
//# sourceMappingURL=Heading.stories.90490817.js.map
