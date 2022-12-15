import{a as f,j as t}from"./jsx-runtime-7c09b6e1.js";import{r as b}from"./index-73a32e48.js";import{c as v}from"./clsx-9a51c995.js";import{F as w}from"./FieldError-1b018ab9.js";/* empty css                            */import{c as d}from"./vanilla-extract-recipes-createRuntimeFn.esm-d30eb010.js";import"./es.object.get-own-property-descriptor-d5205e32.js";import"./Paragraph-ff822137.js";import"./typography.style.css-b45ec07e.js";var m={containerStyle:d({defaultClassName:"_1fewrzq0",variantClassNames:{border:{black:"_1fewrzq1",grey:"_1fewrzq2"},error:{true:"_1fewrzq3"},disabled:{true:"_1fewrzq4",false:"_1fewrzq5"},bRadius:{8:"_1fewrzq6",10:"_1fewrzq7"}},defaultVariants:{border:"grey",bRadius:10},compoundVariants:[]}),labelStyle:d({defaultClassName:"_1fewrzq8",variantClassNames:{variant:{simple:"_1fewrzq9",focused:"_1fewrzqa"},disabled:{true:"_1fewrzqb"}},defaultVariants:{},compoundVariants:[]}),inputStyle:d({defaultClassName:"_1fewrzqc",variantClassNames:{variant:{simple:"_1fewrzqd",focused:"_1fewrzqe"},disabled:{true:"_1fewrzqf",false:"_1fewrzqg"}},defaultVariants:{},compoundVariants:[]})};const a=({errorText:e,className:_,label:y,onFocus:l,onBlur:s,disabled:n=!1,value:o,border:x,bRadius:A,containerClassName:T,dataSAId:g,...N})=>{const[c,p]=b.exports.useState(o?"focused":"simple"),u=b.exports.useId(),q=i=>{p("focused"),l==null||l(i)},S=i=>{o||p("simple"),s==null||s(i)};return f("div",{className:_,children:[f("div",{className:v(m.containerStyle({disabled:n,error:!!e,border:x,bRadius:A}),T),"data-sa-id":g,children:[t("label",{htmlFor:u,className:m.labelStyle({variant:c,disabled:n}),children:y}),t("textarea",{className:m.inputStyle({disabled:n,variant:c}),onFocus:q,onBlur:S,disabled:n,value:o,...N,id:u})]}),t(w,{errorText:e})]})};try{a.displayName="TextArea",a.__docgenInfo={description:"",displayName:"TextArea",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"ReactNode"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"black"'},{value:'"grey"'}]}},bRadius:{defaultValue:null,description:"",name:"bRadius",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"8"},{value:"10"}]}},containerClassName:{defaultValue:null,description:"",name:"containerClassName",required:!1,type:{name:"string | undefined"}},dataSAId:{defaultValue:null,description:"",name:"dataSAId",required:!1,type:{name:"string | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/inputs/TextArea.tsx#TextArea"]={docgenInfo:a.__docgenInfo,name:"TextArea",path:"src/components/inputs/TextArea.tsx#TextArea"})}catch{}const k={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextArea } from '../../components/inputs';

export default {
  title: 'UI/Inputs/TextArea',
  component: TextArea,
  argTypes: {
    disabled: {
      type: 'boolean',
    },
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = args => <TextArea {...args} />;

export const Base = Template.bind({});
Base.args = {
  label: 'First Name',
  name: 'first_name',
  placeholder: 'write',
};

export const Filled = Template.bind({});
Filled.args = {
  label: 'First Name',
  name: 'first_name',
  value: 'Konstantin',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'First Name',
  name: 'first_name',
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  label: 'Last Name',
  name: 'last_name',
  errorText: 'Error message lorem ipsum',
};
export const ErrorFilled = Template.bind({});
ErrorFilled.args = {
  label: 'Last Name',
  name: 'last_name',
  value: 'AAAAAAAA',
  errorText: 'Error message lorem ipsum',
};
`,locationsMap:{base:{startLoc:{col:50,line:14},endLoc:{col:80,line:14},startBody:{col:50,line:14},endBody:{col:80,line:14}},filled:{startLoc:{col:50,line:14},endLoc:{col:80,line:14},startBody:{col:50,line:14},endBody:{col:80,line:14}},disabled:{startLoc:{col:50,line:14},endLoc:{col:80,line:14},startBody:{col:50,line:14},endBody:{col:80,line:14}},error:{startLoc:{col:50,line:14},endLoc:{col:80,line:14},startBody:{col:50,line:14},endBody:{col:80,line:14}},"error-filled":{startLoc:{col:50,line:14},endLoc:{col:80,line:14},startBody:{col:50,line:14},endBody:{col:80,line:14}}}}},title:"UI/Inputs/TextArea",component:a,argTypes:{disabled:{type:"boolean"}}},r=e=>t(a,{...e}),E=r.bind({});E.args={label:"First Name",name:"first_name",placeholder:"write"};const z=r.bind({});z.args={label:"First Name",name:"first_name",value:"Konstantin"};const L=r.bind({});L.args={label:"First Name",name:"first_name",disabled:!0};const C=r.bind({});C.args={label:"Last Name",name:"last_name",errorText:"Error message lorem ipsum"};const F=r.bind({});F.args={label:"Last Name",name:"last_name",value:"AAAAAAAA",errorText:"Error message lorem ipsum"};const M=["Base","Filled","Disabled","Error","ErrorFilled"];export{E as Base,L as Disabled,C as Error,F as ErrorFilled,z as Filled,M as __namedExportsOrder,k as default};
//# sourceMappingURL=TextArea.stories-5b44a7c9.js.map
