import{r as p,a as m,j as a}from"./jsx-runtime.92645f65.js";import{c as d}from"./clsx.3b79bc83.js";/* empty css                             */import{c as y}from"./vanilla-extract-recipes-createRuntimeFn.esm.36bbe845.js";import"./iframe.e797048e.js";var k=y({defaultClassName:"",variantClassNames:{variant:{primary:"_1tkctm11",secondary:"_1tkctm12"}},defaultVariants:{variant:"primary"},compoundVariants:[]}),u={primary:"_1tkctm13",secondary:"_1tkctm14"},f="_1tkctm10";const e=p.exports.forwardRef(({className:n,children:i,variant:r="primary",icon:s,...c},l)=>m("a",{ref:l,className:d(f,k({variant:r}),n),...c,children:[a("span",{className:u[r],children:i}),r==="primary"?s:null]})),t=e;try{e.displayName="Link",e.__docgenInfo={description:"",displayName:"Link",props:{icon:{defaultValue:null,description:"only for primaty variant",name:"icon",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"secondary"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/link/Link.tsx#Link"]={docgenInfo:e.__docgenInfo,name:"Link",path:"src/components/link/Link.tsx#Link"})}catch{}const C={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import Link from '../components/link/Link';

export default {
  title: 'UI/Link',
  component: Link,
  argTypes: {
    variant: {
      defaultValue: 'primary',
      options: ['primary', 'secondary'],
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = args => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Go to store',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Edit',
  variant: 'secondary',
};
`,locationsMap:{primary:{startLoc:{col:46,line:18},endLoc:{col:72,line:18},startBody:{col:46,line:18},endBody:{col:72,line:18}},secondary:{startLoc:{col:46,line:18},endLoc:{col:72,line:18},startBody:{col:46,line:18},endBody:{col:72,line:18}}}}},title:"UI/Link",component:t,argTypes:{variant:{defaultValue:"primary",options:["primary","secondary"],control:{type:"select"}}}},o=n=>a(t,{...n}),_=o.bind({});_.args={children:"Go to store"};const L=o.bind({});L.args={children:"Edit",variant:"secondary"};const h=["Primary","Secondary"];export{_ as Primary,L as Secondary,h as __namedExportsOrder,C as default};
//# sourceMappingURL=Link.stories.63c531d3.js.map
