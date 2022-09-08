import{r as d,j as t}from"./jsx-runtime.00637e2b.js";import{c as p,a as m}from"./vanilla-extract-recipes-createRuntimeFn.esm.89755c4d.js";/* empty css                             */import{s as y}from"./CalendarEventIcon.36883457.js";import"./iframe.5c428df4.js";var u=p({defaultClassName:"_19hj0km0",variantClassNames:{color:{primary:"_19hj0km1",secondary:"_19hj0km2"}},defaultVariants:{color:"primary"},compoundVariants:[]});const o=d.exports.forwardRef(({children:n,onClick:a,disabled:r,className:c,color:s,...l},i)=>t("button",{ref:i,disabled:r,className:m(u({color:s}),c),onClick:r?void 0:a,...l,children:n}));try{o.displayName="IconButton",o.__docgenInfo={description:"",displayName:"IconButton",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"secondary"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/icon-button/IconButton.tsx#IconButton"]={docgenInfo:o.__docgenInfo,name:"IconButton",path:"src/components/icon-button/IconButton.tsx#IconButton"})}catch{}const x={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
`,locationsMap:{primary:{startLoc:{col:52,line:15},endLoc:{col:110,line:15},startBody:{col:52,line:15},endBody:{col:110,line:15}},secondary:{startLoc:{col:52,line:15},endLoc:{col:110,line:15},startBody:{col:52,line:15},endBody:{col:110,line:15}},disabled:{startLoc:{col:52,line:15},endLoc:{col:110,line:15},startBody:{col:52,line:15},endBody:{col:110,line:15}}}}},title:"UI/Icon Button",component:o,argTypes:{disabled:{type:"boolean"}}},e=n=>t(o,{...n,children:t(y,{})}),B=e.bind({});B.args={color:"primary"};const I=e.bind({});I.args={color:"secondary"};const _=e.bind({});_.args={disabled:!0};const C=["Primary","Secondary","Disabled"];export{_ as Disabled,B as Primary,I as Secondary,C as __namedExportsOrder,x as default};
//# sourceMappingURL=IconButton.stories.c652f90d.js.map
