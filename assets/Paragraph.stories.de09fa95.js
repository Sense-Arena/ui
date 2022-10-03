import{P as n}from"./Paragraph.4cd10bc9.js";import{j as r}from"./jsx-runtime.7c8af39d.js";import"./clsx.3b79bc83.js";/* empty css                             */import"./vanilla-extract-recipes-createRuntimeFn.esm.57f0c9b7.js";import"./iframe.417cfc4d.js";const h={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Paragraph } from '../../components/typography';

export default {
  title: 'UI/Typography/Paragraph',
  component: Paragraph,
  argTypes: {
    variant: {
      defaultValue: 'body',
      options: ['perex', 'body', 'caption', 'note'],
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = args => <Paragraph {...args} />;

export const Perex = Template.bind({});
Perex.args = {
  children: 'Boost your decision-making skills and gain confidence to improve your on-ice performance.',
  variant: 'perex',
};

export const Body = Template.bind({});
Body.args = {
  children: 'Boost your decision-making skills and gain confidence to improve your on-ice performance.',
};

export const Caption = Template.bind({});
Caption.args = {
  children: 'Vice President, Athlete Care, New Jersey Devils',
  variant: 'caption',
};

export const Note = Template.bind({});
Note.args = {
  children: 'Error message lorem ipsum',
  variant: 'note',
};

export const Label = Template.bind({});
Label.args = {
  children: 'Error message lorem ipsum',
  variant: 'label',
};
`,locationsMap:{perex:{startLoc:{col:51,line:18},endLoc:{col:82,line:18},startBody:{col:51,line:18},endBody:{col:82,line:18}},body:{startLoc:{col:51,line:18},endLoc:{col:82,line:18},startBody:{col:51,line:18},endBody:{col:82,line:18}},caption:{startLoc:{col:51,line:18},endLoc:{col:82,line:18},startBody:{col:51,line:18},endBody:{col:82,line:18}},note:{startLoc:{col:51,line:18},endLoc:{col:82,line:18},startBody:{col:51,line:18},endBody:{col:82,line:18}},label:{startLoc:{col:51,line:18},endLoc:{col:82,line:18},startBody:{col:51,line:18},endBody:{col:82,line:18}}}}},title:"UI/Typography/Paragraph",component:n,argTypes:{variant:{defaultValue:"body",options:["perex","body","caption","note"],control:{type:"select"}}}},e=o=>r(n,{...o}),a=e.bind({});a.args={children:"Boost your decision-making skills and gain confidence to improve your on-ice performance.",variant:"perex"};const t=e.bind({});t.args={children:"Boost your decision-making skills and gain confidence to improve your on-ice performance."};const i=e.bind({});i.args={children:"Vice President, Athlete Care, New Jersey Devils",variant:"caption"};const l=e.bind({});l.args={children:"Error message lorem ipsum",variant:"note"};const c=e.bind({});c.args={children:"Error message lorem ipsum",variant:"label"};const b=["Perex","Body","Caption","Note","Label"];export{t as Body,i as Caption,c as Label,l as Note,a as Perex,b as __namedExportsOrder,h as default};
//# sourceMappingURL=Paragraph.stories.de09fa95.js.map
