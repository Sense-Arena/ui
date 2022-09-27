import{a as D,c as V}from"./react-spring-web.esm.b0e05906.js";import{r as a,a as B,j as i}from"./jsx-runtime.b37a007d.js";import{h as E,a as A}from"./YoutubeIcon.57e3d523.js";import{c as N}from"./clsx.3b79bc83.js";/* empty css                             */import{c as b}from"./vanilla-extract-recipes-createRuntimeFn.esm.57f0c9b7.js";import"./index.5a7cd3c9.js";import"./iframe.8f89af03.js";const T=(e,n,t)=>{a.exports.useEffect(()=>{const l=s=>{var u;!e.current||e.current.contains(s.target)||((u=t==null?void 0:t.current)==null?void 0:u.contains(s.target))||n()};return document.addEventListener("mousedown",l),document.addEventListener("touchstart",l),()=>{document.removeEventListener("mousedown",l),document.removeEventListener("touchstart",l)}},[e,n])},H=(e,n,t)=>{a.exports.useEffect(()=>{const l=s=>{s instanceof KeyboardEvent&&s.key===t?n(s):t||n(s)};return document.addEventListener(e,l),()=>document.removeEventListener(e,l)},[e,t,n])};var q=b({defaultClassName:"_16ov49e0",variantClassNames:{border:{black:"_16ov49e1",grey:"_16ov49e2"},disabled:{true:"_16ov49e3"},error:{true:"_16ov49e4"},opened:{true:"_16ov49e5"},fullWidth:{true:"_16ov49e6"},size:{s:"_16ov49e7",m:"_16ov49e8",l:"_16ov49e9"},bRadius:{8:"_16ov49ea",10:"_16ov49eb"}},defaultVariants:{size:"m",bRadius:10},compoundVariants:[]}),O="_16ov49ec",z=b({defaultClassName:"_16ov49ej",variantClassNames:{selected:{true:"_16ov49ek"}},defaultVariants:{},compoundVariants:[]}),R=b({defaultClassName:"_16ov49ed",variantClassNames:{size:{s:"_16ov49ee",m:"_16ov49ef",l:"_16ov49eg"},bRadius:{8:"_16ov49eh",10:"_16ov49ei"}},defaultVariants:{size:"m",bRadius:10},compoundVariants:[]});function c({disabled:e,onSelect:n,selectedOptionLabel:t,options:l,error:s,className:u,selectedOption:_,border:k,fullWidth:w,size:y,bRadius:g}){var L;const[p,v]=a.exports.useState(!1),S=a.exports.useRef(null),m=a.exports.useRef(null),x=D({opacity:p?1:0,config:{duration:250}}),C=a.exports.useCallback(()=>{e||v(o=>!o)},[e]),f=a.exports.useCallback(()=>v(!1),[]);H("keyup",f,"Escape"),T(S,f,m);const h=a.exports.useCallback(o=>{n==null||n(o),f()},[n]);return B("div",{onClick:C,className:N(q({disabled:e,error:s,opened:p,border:k,fullWidth:w,size:y,bRadius:g}),u),ref:m,children:[i("span",{children:t}),p?i(E,{className:O}):i(A,{className:O}),p?i(V.div,{style:{...x,width:(L=m.current)==null?void 0:L.getClientRects()[0].width},className:R({size:y,bRadius:g}),ref:S,onClick:o=>o.stopPropagation(),children:l.map(o=>i("div",{onClick:()=>h(o.value),className:z({selected:o.value===_}),children:o.title},String(o.value)))}):null]})}try{c.displayName="Dropdown",c.__docgenInfo={description:"",displayName:"Dropdown",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean | undefined"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((selected: TOption) => void) | undefined"}},selectedOptionLabel:{defaultValue:null,description:"",name:"selectedOptionLabel",required:!0,type:{name:"ReactNode"}},selectedOption:{defaultValue:null,description:"",name:"selectedOption",required:!0,type:{name:"TOption"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ title: string; value: TOption; }[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"black"'},{value:'"grey"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},bRadius:{defaultValue:null,description:"",name:"bRadius",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"8"},{value:"10"}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/dropdown/Dropdown.tsx#Dropdown"]={docgenInfo:c.__docgenInfo,name:"Dropdown",path:"src/components/dropdown/Dropdown.tsx#Dropdown"})}catch{}const ee={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Dropdown } from '../components/dropdown';

export default {
  title: 'UI/Dropdown',
  component: Dropdown,
  argTypes: {
    disabled: {
      type: 'boolean',
    },
  },
} as ComponentMeta<typeof Dropdown>;

const options = [
  {
    title: '1',
    value: '1',
  },
  {
    title: '2',
    value: '2',
  },
  {
    title: '3',
    value: '3',
  },
  {
    title: '4',
    value: '4',
  },
  {
    title: '5',
    value: '5',
  },
];

const Template: ComponentStory<typeof Dropdown> = args => <Dropdown {...args} />;

export const Base = Template.bind({});
Base.args = {
  selectedOption: '1',
  selectedOptionLabel: '1',
  onSelect: console.debug,
  options,
  border: 'grey',
};
export const LongValue = Template.bind({});
LongValue.args = {
  selectedOption: '1',
  selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
  onSelect: console.debug,
  options,
};

export const Disabled = Template.bind({});
Disabled.args = {
  selectedOption: '1',
  selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
  onSelect: console.debug,
  options,
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  selectedOption: '1',
  selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
  onSelect: console.debug,
  options,
  error: true,
  border: 'grey',
};

export const Small = Template.bind({});
Small.args = {
  selectedOption: '1',
  selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
  onSelect: console.debug,
  options,
  border: 'grey',
  size: 's',
};

export const Large = Template.bind({});
Large.args = {
  selectedOption: '1',
  selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
  onSelect: console.debug,
  options,
  border: 'grey',
  size: 'l',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  selectedOption: '1',
  selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
  onSelect: console.debug,
  options,
  border: 'grey',
  size: 'l',
  fullWidth: true,
};
`,locationsMap:{base:{startLoc:{col:50,line:37},endLoc:{col:80,line:37},startBody:{col:50,line:37},endBody:{col:80,line:37}},"long-value":{startLoc:{col:50,line:37},endLoc:{col:80,line:37},startBody:{col:50,line:37},endBody:{col:80,line:37}},disabled:{startLoc:{col:50,line:37},endLoc:{col:80,line:37},startBody:{col:50,line:37},endBody:{col:80,line:37}},error:{startLoc:{col:50,line:37},endLoc:{col:80,line:37},startBody:{col:50,line:37},endBody:{col:80,line:37}},small:{startLoc:{col:50,line:37},endLoc:{col:80,line:37},startBody:{col:50,line:37},endBody:{col:80,line:37}},large:{startLoc:{col:50,line:37},endLoc:{col:80,line:37},startBody:{col:50,line:37},endBody:{col:80,line:37}},"full-width":{startLoc:{col:50,line:37},endLoc:{col:80,line:37},startBody:{col:50,line:37},endBody:{col:80,line:37}}}}},title:"UI/Dropdown",component:c,argTypes:{disabled:{type:"boolean"}}},r=[{title:"1",value:"1"},{title:"2",value:"2"},{title:"3",value:"3"},{title:"4",value:"4"},{title:"5",value:"5"}],d=e=>i(c,{...e}),W=d.bind({});W.args={selectedOption:"1",selectedOptionLabel:"1",onSelect:console.debug,options:r,border:"grey"};const I=d.bind({});I.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onSelect:console.debug,options:r};const F=d.bind({});F.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onSelect:console.debug,options:r,disabled:!0};const M=d.bind({});M.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onSelect:console.debug,options:r,error:!0,border:"grey"};const j=d.bind({});j.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onSelect:console.debug,options:r,border:"grey",size:"s"};const U=d.bind({});U.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onSelect:console.debug,options:r,border:"grey",size:"l"};const Y=d.bind({});Y.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onSelect:console.debug,options:r,border:"grey",size:"l",fullWidth:!0};const ne=["Base","LongValue","Disabled","Error","Small","Large","FullWidth"];export{W as Base,F as Disabled,M as Error,Y as FullWidth,U as Large,I as LongValue,j as Small,ne as __namedExportsOrder,ee as default};
//# sourceMappingURL=Dropdown.stories.8715eb05.js.map
