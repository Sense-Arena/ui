import{r as l,a as p,j as r}from"./jsx-runtime.5d846f11.js";import{c as m,a as d}from"./vanilla-extract-recipes-createRuntimeFn.esm.89755c4d.js";/* empty css                             */import"./iframe.44efcd93.js";var y=m({defaultClassName:"",variantClassNames:{variant:{primary:"_1tkctm11",secondary:"_1tkctm12"}},defaultVariants:{variant:"primary"},compoundVariants:[]}),k={primary:"_1tkctm13",secondary:"_1tkctm14"},u="_1tkctm10";const n=l.exports.forwardRef(({className:e,children:o,variant:a="primary",icon:i,...s},c)=>p("a",{ref:c,className:d(u,y({variant:a}),e),...s,children:[r("span",{className:k[a],children:o}),a==="primary"?i:null]}));try{n.displayName="Link",n.__docgenInfo={description:"",displayName:"Link",props:{icon:{defaultValue:null,description:"only for primaty variant",name:"icon",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"secondary"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/link/Link.tsx#Link"]={docgenInfo:n.__docgenInfo,name:"Link",path:"src/components/link/Link.tsx#Link"})}catch{}const x={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Link } from '../components/link';

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
`,locationsMap:{primary:{startLoc:{col:46,line:18},endLoc:{col:72,line:18},startBody:{col:46,line:18},endBody:{col:72,line:18}},secondary:{startLoc:{col:46,line:18},endLoc:{col:72,line:18},startBody:{col:46,line:18},endBody:{col:72,line:18}}}}},title:"UI/Link",component:n,argTypes:{variant:{defaultValue:"primary",options:["primary","secondary"],control:{type:"select"}}}},t=e=>r(n,{...e}),f=t.bind({});f.args={children:"Go to store"};const _=t.bind({});_.args={children:"Edit",variant:"secondary"};const T=["Primary","Secondary"];export{f as Primary,_ as Secondary,T as __namedExportsOrder,x as default};
//# sourceMappingURL=Link.stories.02001254.js.map