import{a as m,j as e}from"./jsx-runtime-7c09b6e1.js";import{r as y}from"./index-73a32e48.js";import{c as B}from"./clsx-9a51c995.js";import{F as S}from"./FieldError-1b018ab9.js";/* empty css                            */import{c as p}from"./vanilla-extract-recipes-createRuntimeFn.esm-d30eb010.js";import{S as x}from"./SearchIcon-259b3075.js";import{I as E}from"./IconButton-7f70b8fa.js";import"./es.object.get-own-property-descriptor-d5205e32.js";import"./Paragraph-ff822137.js";import"./typography.style.css-b45ec07e.js";import"./Spinner-8bb94193.js";var L=p({defaultClassName:"_1dipjr50",variantClassNames:{border:{black:"_1dipjr51",grey:"_1dipjr52"},error:{true:"_1dipjr53"},disabled:{true:"_1dipjr54",false:"_1dipjr55"},withEndAdornment:{true:"_1dipjr56",false:"_1dipjr57"},bRadius:{8:"_1dipjr58",10:"_1dipjr59"}},defaultVariants:{border:"grey",bRadius:10},compoundVariants:[]}),C="_1dipjr5b",R="_1dipjr5c",V="_1dipjr5a",q=p({defaultClassName:"_1dipjr5h",variantClassNames:{variant:{simple:"_1dipjr5i",focused:"_1dipjr5j"},disabled:{true:"_1dipjr5k",false:"_1dipjr5l"},withIcon:{true:"_1dipjr5m"},bRadius:{8:"_1dipjr5n",10:"_1dipjr5o"}},defaultVariants:{bRadius:10},compoundVariants:[]}),W=p({defaultClassName:"_1dipjr5d",variantClassNames:{variant:{simple:"_1dipjr5e",focused:"_1dipjr5f"},disabled:{true:"_1dipjr5g"}},defaultVariants:{},compoundVariants:[]});const t=({errorText:a,className:T,label:F,onFocus:l,onBlur:i,disabled:r=!1,value:o,border:g,endAdornment:s,endIcon:d,bRadius:u,containerClassName:h,inputRef:I,dataSAId:N,...j})=>{const[f,b]=y.exports.useState(o?"focused":"simple"),_=y.exports.useId(),v=c=>{b("focused"),l==null||l(c)},A=c=>{o||b("simple"),i==null||i(c)};return m("div",{className:T,children:[m("div",{className:B(L({disabled:r,error:!!a,border:g,withEndAdornment:!!s,bRadius:u}),h),"data-sa-id":N,children:[m("div",{className:V,children:[e("label",{htmlFor:_,className:W({variant:f,disabled:r}),children:F}),e("input",{className:q({disabled:r,variant:f,withIcon:!!d,bRadius:u}),onFocus:v,onBlur:A,disabled:r,value:o,ref:I,...j,id:_})]}),s?e("div",{className:C,children:s}):null,d?e("div",{className:R,children:d}):null]}),e(S,{errorText:a})]})};try{t.displayName="TextField",t.__docgenInfo={description:"",displayName:"TextField",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"ReactNode"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"black"'},{value:'"grey"'}]}},endAdornment:{defaultValue:null,description:"",name:"endAdornment",required:!1,type:{name:"ReactNode"}},endIcon:{defaultValue:null,description:"",name:"endIcon",required:!1,type:{name:"ReactNode"}},bRadius:{defaultValue:null,description:"",name:"bRadius",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"8"},{value:"10"}]}},containerClassName:{defaultValue:null,description:"",name:"containerClassName",required:!1,type:{name:"string | undefined"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"RefObject<HTMLInputElement> | undefined"}},dataSAId:{defaultValue:null,description:"",name:"dataSAId",required:!1,type:{name:"string | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/inputs/TextField.tsx#TextField"]={docgenInfo:t.__docgenInfo,name:"TextField",path:"src/components/inputs/TextField.tsx#TextField"})}catch{}const ae={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextField } from '../../components/inputs';
import { IconButton } from '../../components/icon-button';
import { SearchIcon } from '../../icons';

export default {
  title: 'UI/Inputs/TextField',
  component: TextField,
  argTypes: {
    disabled: {
      type: 'boolean',
    },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = args => <TextField {...args} />;

export const Base = Template.bind({});
Base.args = {
  label: 'First Name',
  name: 'first_name',
  placeholder: 'write',
};
export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'First Name',
  name: 'first_name',
  endIcon: <SearchIcon />,
};

export const WithIconButton = Template.bind({});
WithIconButton.args = {
  label: 'First Name',
  name: 'first_name',
  endAdornment: (
    <IconButton>
      <SearchIcon />
    </IconButton>
  ),
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
`,locationsMap:{base:{startLoc:{col:51,line:16},endLoc:{col:82,line:16},startBody:{col:51,line:16},endBody:{col:82,line:16}},"with-icon":{startLoc:{col:51,line:16},endLoc:{col:82,line:16},startBody:{col:51,line:16},endBody:{col:82,line:16}},"with-icon-button":{startLoc:{col:51,line:16},endLoc:{col:82,line:16},startBody:{col:51,line:16},endBody:{col:82,line:16}},filled:{startLoc:{col:51,line:16},endLoc:{col:82,line:16},startBody:{col:51,line:16},endBody:{col:82,line:16}},disabled:{startLoc:{col:51,line:16},endLoc:{col:82,line:16},startBody:{col:51,line:16},endBody:{col:82,line:16}},error:{startLoc:{col:51,line:16},endLoc:{col:82,line:16},startBody:{col:51,line:16},endBody:{col:82,line:16}},"error-filled":{startLoc:{col:51,line:16},endLoc:{col:82,line:16},startBody:{col:51,line:16},endBody:{col:82,line:16}}}}},title:"UI/Inputs/TextField",component:t,argTypes:{disabled:{type:"boolean"}}},n=a=>e(t,{...a}),w=n.bind({});w.args={label:"First Name",name:"first_name",placeholder:"write"};const O=n.bind({});O.args={label:"First Name",name:"first_name",endIcon:e(x,{})};const k=n.bind({});k.args={label:"First Name",name:"first_name",endAdornment:e(E,{children:e(x,{})})};const D=n.bind({});D.args={label:"First Name",name:"first_name",value:"Konstantin"};const K=n.bind({});K.args={label:"First Name",name:"first_name",disabled:!0};const M=n.bind({});M.args={label:"Last Name",name:"last_name",errorText:"Error message lorem ipsum"};const U=n.bind({});U.args={label:"Last Name",name:"last_name",value:"AAAAAAAA",errorText:"Error message lorem ipsum"};const te=["Base","WithIcon","WithIconButton","Filled","Disabled","Error","ErrorFilled"];export{w as Base,K as Disabled,M as Error,U as ErrorFilled,D as Filled,O as WithIcon,k as WithIconButton,te as __namedExportsOrder,ae as default};
//# sourceMappingURL=TextField.stories-3845a767.js.map
