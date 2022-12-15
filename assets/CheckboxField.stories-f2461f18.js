import{r}from"./index-73a32e48.js";import{S as V,a as v}from"./Stack-d033c192.js";import{a as l,j as a}from"./jsx-runtime-7c09b6e1.js";import{c as I}from"./clsx-9a51c995.js";/* empty css                            */import{c as u}from"./vanilla-extract-recipes-createRuntimeFn.esm-d30eb010.js";import{F as R}from"./FieldError-1b018ab9.js";import"./es.object.get-own-property-descriptor-d5205e32.js";import"./Paragraph-ff822137.js";import"./typography.style.css-b45ec07e.js";var i={container:u({defaultClassName:"aqr0em0",variantClassNames:{checked:{true:"aqr0em1"},disabled:{true:"aqr0em2"}},defaultVariants:{},compoundVariants:[]}),input:"aqr0em3",containerIcons:"aqr0em4",svgRound:"aqr0em5",svgInside:u({defaultClassName:"aqr0em6",variantClassNames:{checked:{true:"aqr0em7",false:"aqr0em8"}},defaultVariants:{checked:!1},compoundVariants:[]})};const m=r.exports.forwardRef(({checked:n,onChangeHandler:o,disabled:c,...e},t)=>{const p=r.exports.useCallback(s=>{o(s.target.checked)},[o]);return l("span",{className:i.container({checked:n,disabled:c}),children:[a("input",{type:"checkbox",className:i.input,...e,ref:t,onChange:p,checked:n}),l("span",{className:i.containerIcons,children:[a("svg",{className:i.svgRound,focusable:"false",viewBox:"0 0 24 24",children:a("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"})}),l("svg",{className:i.svgInside({checked:n}),focusable:"false",viewBox:"0 0 24 24",children:[a("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})," "]})]})]})});try{m.displayName="CheckboxButton",m.__docgenInfo={description:"",displayName:"CheckboxButton",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},onChangeHandler:{defaultValue:null,description:"",name:"onChangeHandler",required:!0,type:{name:"(checked: boolean) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/checkbox-button/CheckboxButton.tsx#CheckboxButton"]={docgenInfo:m.__docgenInfo,name:"CheckboxButton",path:"src/components/checkbox-button/CheckboxButton.tsx#CheckboxButton"})}catch{}var C={containerStyle:u({defaultClassName:"_1vroan32",variantClassNames:{border:{black:"_1vroan33",grey:"_1vroan34"},error:{true:"_1vroan35"},disabled:{true:"_1vroan36",false:"_1vroan37"},bRadius:{8:"_1vroan38",10:"_1vroan39"}},defaultVariants:{border:"grey",bRadius:10},compoundVariants:[]}),containerRow:u({defaultClassName:"_1vroan30",variantClassNames:{disabled:{true:"_1vroan31"}},defaultVariants:{},compoundVariants:[]}),labelStyle:u({defaultClassName:"_1vroan3a",variantClassNames:{disabled:{true:"_1vroan3b"}},defaultVariants:{},compoundVariants:[]})};const d=({errorText:n,className:o,label:c,disabled:e=!1,checked:t,inputProps:p={},onChange:s,border:x,bRadius:y,containerClassName:S,variant:g="field",dataSAId:N})=>{const b=r.exports.useId(),f=r.exports.useRef(null),h=r.exports.useCallback(k=>{e||s==null||s(k)},[s,e]),F=r.exports.useCallback(k=>{k.preventDefault(),!e&&(h(!t),f.current&&(f.current.checked=!t))},[h,e]);return l("div",{className:o,children:[l("div",{className:I(g==="field"?C.containerStyle({disabled:e,error:!!n,border:x,bRadius:y}):C.containerRow({disabled:e}),S),onClick:F,"data-sa-id":N,children:[a(m,{id:b,checked:!!t,onChangeHandler:h,disabled:e,...p,ref:f}),a("label",{htmlFor:b,className:C.labelStyle({disabled:e}),children:c})]}),a(R,{errorText:n})]})};try{d.displayName="CheckboxField",d.__docgenInfo={description:"",displayName:"CheckboxField",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"ReactNode"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean | undefined"}},inputProps:{defaultValue:{value:"{}"},description:"",name:"inputProps",required:!1,type:{name:"DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void) | undefined"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"black"'},{value:'"grey"'}]}},bRadius:{defaultValue:null,description:"",name:"bRadius",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"8"},{value:"10"}]}},containerClassName:{defaultValue:null,description:"",name:"containerClassName",required:!1,type:{name:"string | undefined"}},variant:{defaultValue:{value:"field"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"row"'},{value:'"field"'}]}},dataSAId:{defaultValue:null,description:"",name:"dataSAId",required:!1,type:{name:"string | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/inputs/CheckboxField.tsx#CheckboxField"]={docgenInfo:d.__docgenInfo,name:"CheckboxField",path:"src/components/inputs/CheckboxField.tsx#CheckboxField"})}catch{}const Y={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { CheckboxField } from '../../components/inputs';
import { Stack, StackItem } from '../../components/stack/Stack';

export default {
  title: 'UI/Inputs/CheckboxField',
  component: CheckboxField,
  argTypes: {
    disabled: {
      type: 'boolean',
    },
  },
} as ComponentMeta<typeof CheckboxField>;

const Template: ComponentStory<typeof CheckboxField> = args => {
  const [{ firstChecked, secondChecked }, setChecked] = useState({ firstChecked: true, secondChecked: true });
  return (
    <Stack direction="column">
      <StackItem direction="column" spacing={1}>
        <CheckboxField {...args} checked={firstChecked} onChange={c => setChecked({ firstChecked: c, secondChecked })} />
      </StackItem>
      <StackItem direction="column" spacing={1}>
        <CheckboxField {...args} checked={secondChecked} onChange={c => setChecked({ firstChecked, secondChecked: c })} />
      </StackItem>
    </Stack>
  );
};

export const Field = Template.bind({});
Field.args = {
  label: 'First Name',
  inputProps: {
    name: 'first_name',
  },
};
export const Row = Template.bind({});
Row.args = {
  label: 'First Name',
  inputProps: {
    name: 'first_name',
  },
  variant: 'row',
};
`,locationsMap:{field:{startLoc:{col:55,line:16},endLoc:{col:1,line:28},startBody:{col:55,line:16},endBody:{col:1,line:28}},row:{startLoc:{col:55,line:16},endLoc:{col:1,line:28},startBody:{col:55,line:16},endBody:{col:1,line:28}}}}},title:"UI/Inputs/CheckboxField",component:d,argTypes:{disabled:{type:"boolean"}}},_=n=>{const[{firstChecked:o,secondChecked:c},e]=r.exports.useState({firstChecked:!0,secondChecked:!0});return l(V,{direction:"column",children:[a(v,{direction:"column",spacing:1,children:a(d,{...n,checked:o,onChange:t=>e({firstChecked:t,secondChecked:c})})}),a(v,{direction:"column",spacing:1,children:a(d,{...n,checked:c,onChange:t=>e({firstChecked:o,secondChecked:t})})})]})},q=_.bind({});q.args={label:"First Name",inputProps:{name:"first_name"}};const T=_.bind({});T.args={label:"First Name",inputProps:{name:"first_name"},variant:"row"};const j=["Field","Row"];export{q as Field,T as Row,j as __namedExportsOrder,Y as default};
//# sourceMappingURL=CheckboxField.stories-f2461f18.js.map
