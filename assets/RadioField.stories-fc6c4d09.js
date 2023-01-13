import{r}from"./index-73a32e48.js";import{S as I,a as y}from"./Stack-d033c192.js";import{a as i,j as e}from"./jsx-runtime-7c09b6e1.js";import{c as N}from"./clsx-9a51c995.js";/* empty css                            */import{c as u}from"./vanilla-extract-recipes-createRuntimeFn.esm-d30eb010.js";import{F as q}from"./FieldError-1b018ab9.js";import"./es.object.get-own-property-descriptor-d5205e32.js";import"./Paragraph-ff822137.js";import"./typography.style.css-b45ec07e.js";var s={container:u({defaultClassName:"_1qep75l0",variantClassNames:{checked:{true:"_1qep75l1"},disabled:{true:"_1qep75l2"}},defaultVariants:{},compoundVariants:[]}),input:"_1qep75l3",containerIcons:"_1qep75l4",svgRound:"_1qep75l5",svgInside:u({defaultClassName:"_1qep75l6",variantClassNames:{checked:{true:"_1qep75l7",false:"_1qep75l8"}},defaultVariants:{checked:!1},compoundVariants:[]})};const c=r.exports.forwardRef(({checked:a,onChangeHandler:o,disabled:d,dataSAId:t,...p},m)=>{const n=r.exports.useCallback(f=>{o(f.target.checked)},[o]);return i("span",{className:s.container({checked:a,disabled:d}),"data-sa-id":t,children:[e("input",{type:"radio",className:s.input,...p,ref:m,onChange:n,checked:a}),i("span",{className:s.containerIcons,children:[e("svg",{className:s.svgRound,focusable:"false",viewBox:"0 0 24 24",children:e("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})}),e("svg",{className:s.svgInside({checked:a}),focusable:"false",viewBox:"0 0 24 24",children:e("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"})})]})]})});try{c.displayName="RadioButton",c.__docgenInfo={description:"",displayName:"RadioButton",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},dataSAId:{defaultValue:null,description:"",name:"dataSAId",required:!1,type:{name:"string | undefined"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},onChangeHandler:{defaultValue:null,description:"",name:"onChangeHandler",required:!0,type:{name:"(checked: boolean) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/radio-button/RadioButton.tsx#RadioButton"]={docgenInfo:c.__docgenInfo,name:"RadioButton",path:"src/components/radio-button/RadioButton.tsx#RadioButton"})}catch{}var S={containerStyle:u({defaultClassName:"wcl9hh0",variantClassNames:{border:{black:"wcl9hh1",grey:"wcl9hh2"},error:{true:"wcl9hh3"},disabled:{true:"wcl9hh4",false:"wcl9hh5"},bRadius:{8:"wcl9hh6",10:"wcl9hh7"}},defaultVariants:{border:"grey",bRadius:10},compoundVariants:[]}),labelStyle:u({defaultClassName:"wcl9hh8",variantClassNames:{disabled:{true:"wcl9hh9"}},defaultVariants:{},compoundVariants:[]})};const l=({errorText:a,className:o,label:d,disabled:t=!1,checked:p,radioProps:m={},onChange:n,border:f,bRadius:R,containerClassName:k,dataSAId:b})=>{const _=r.exports.useId(),h=r.exports.useRef(null),C=r.exports.useCallback(v=>{t||n==null||n(!v)},[n,t]),g=r.exports.useCallback(()=>{t||(n==null||n(!0),h.current&&(h.current.checked=!0))},[n,t]);return i("div",{className:o,children:[i("div",{className:N(S.containerStyle({disabled:t,error:!!a,border:f,bRadius:R}),k),onClick:g,"data-sa-id":b,children:[e(c,{id:_,checked:!!p,onChangeHandler:C,disabled:t,...m,ref:h}),e("label",{htmlFor:_,className:S.labelStyle({disabled:t}),children:d})]}),e(q,{errorText:a})]})};try{l.displayName="RadioField",l.__docgenInfo={description:"",displayName:"RadioField",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"ReactNode"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean | undefined"}},radioProps:{defaultValue:{value:"{}"},description:"",name:"radioProps",required:!1,type:{name:"DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void) | undefined"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"black"'},{value:'"grey"'}]}},bRadius:{defaultValue:null,description:"",name:"bRadius",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"8"},{value:"10"}]}},containerClassName:{defaultValue:null,description:"",name:"containerClassName",required:!1,type:{name:"string | undefined"}},dataSAId:{defaultValue:null,description:"",name:"dataSAId",required:!1,type:{name:"string | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/inputs/RadioField.tsx#RadioField"]={docgenInfo:l.__docgenInfo,name:"RadioField",path:"src/components/inputs/RadioField.tsx#RadioField"})}catch{}const P={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { RadioField } from '../../components/inputs';
import { Stack, StackItem } from '../../components/stack/Stack';

export default {
  title: 'UI/Inputs/RadioField',
  component: RadioField,
  argTypes: {
    disabled: {
      type: 'boolean',
    },
  },
} as ComponentMeta<typeof RadioField>;

const Template: ComponentStory<typeof RadioField> = args => {
  const [checked, setChecked] = useState(1);
  return (
    <Stack direction="row">
      <StackItem direction="row" spacing={1}>
        <RadioField {...args} checked={checked === 0} onChange={() => setChecked(0)} />
      </StackItem>
      <StackItem direction="row" spacing={1}>
        <RadioField {...args} checked={checked === 1} onChange={() => setChecked(1)} />
      </StackItem>
    </Stack>
  );
};

export const Base = Template.bind({});
Base.args = {
  label: 'First Name',
  radioProps: {
    name: 'first_name',
  },
};
`,locationsMap:{base:{startLoc:{col:52,line:16},endLoc:{col:1,line:28},startBody:{col:52,line:16},endBody:{col:1,line:28}}}}},title:"UI/Inputs/RadioField",component:l,argTypes:{disabled:{type:"boolean"}}},F=a=>{const[o,d]=r.exports.useState(1);return i(I,{direction:"row",children:[e(y,{direction:"row",spacing:1,children:e(l,{...a,checked:o===0,onChange:()=>d(0)})}),e(y,{direction:"row",spacing:1,children:e(l,{...a,checked:o===1,onChange:()=>d(1)})})]})},V=F.bind({});V.args={label:"First Name",radioProps:{name:"first_name"}};const K=["Base"];export{V as Base,K as __namedExportsOrder,P as default};
//# sourceMappingURL=RadioField.stories-fc6c4d09.js.map
