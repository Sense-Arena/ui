import{u as D,a as h}from"./react-spring-web.esm.bc0299aa.js";import{r,a as B,j as i}from"./jsx-runtime.deb8d5db.js";import{h as E,a as V}from"./YoutubeIcon.64a415e2.js";import{c as A}from"./clsx.3b79bc83.js";/* empty css                             */import{c as b}from"./vanilla-extract-recipes-createRuntimeFn.esm.36bbe845.js";import"./index.306fed77.js";import"./iframe.ca7ab367.js";const N=(e,n,t)=>{r.exports.useEffect(()=>{const l=s=>{var u;!e.current||e.current.contains(s.target)||((u=t==null?void 0:t.current)==null?void 0:u.contains(s.target))||n()};return document.addEventListener("mousedown",l),document.addEventListener("touchstart",l),()=>{document.removeEventListener("mousedown",l),document.removeEventListener("touchstart",l)}},[e,n])},T=(e,n,t)=>{r.exports.useEffect(()=>{const l=s=>{s instanceof KeyboardEvent&&s.key===t?n(s):t||n(s)};return document.addEventListener(e,l),()=>document.removeEventListener(e,l)},[e,t,n])};var H=b({defaultClassName:"_16ov49e0",variantClassNames:{border:{black:"_16ov49e1",grey:"_16ov49e2"},disabled:{true:"_16ov49e3"},error:{true:"_16ov49e4"},opened:{true:"_16ov49e5"},fullWidth:{true:"_16ov49e6"},size:{s:"_16ov49e7",m:"_16ov49e8",l:"_16ov49e9"}},defaultVariants:{size:"m"},compoundVariants:[]}),L="_16ov49ea",z=b({defaultClassName:"_16ov49ef",variantClassNames:{selected:{true:"_16ov49eg"}},defaultVariants:{},compoundVariants:[]}),q=b({defaultClassName:"_16ov49eb",variantClassNames:{size:{s:"_16ov49ec",m:"_16ov49ed",l:"_16ov49ee"}},defaultVariants:{size:"m"},compoundVariants:[]});function c({disabled:e,onSelect:n,selectedOptionLabel:t,options:l,error:s,className:u,selectedOption:O,border:_,fullWidth:k,size:y}){var S;const[p,g]=r.exports.useState(!1),v=r.exports.useRef(null),m=r.exports.useRef(null),w=D({opacity:p?1:0,config:{duration:250}}),x=r.exports.useCallback(()=>{e||g(o=>!o)},[e]),f=r.exports.useCallback(()=>g(!1),[]);T("keyup",f,"Escape"),N(v,f,m);const C=r.exports.useCallback(o=>{n==null||n(o),f()},[n]);return B("div",{onClick:x,className:A(H({disabled:e,error:s,opened:p,border:_,fullWidth:k,size:y}),u),ref:m,children:[i("span",{children:t}),p?i(E,{className:L}):i(V,{className:L}),p?i(h.div,{style:{...w,width:(S=m.current)==null?void 0:S.getClientRects()[0].width},className:q({size:y}),ref:v,onClick:o=>o.stopPropagation(),children:l.map(o=>i("div",{onClick:()=>C(o.value),className:z({selected:o.value===O}),children:o.title},String(o.value)))}):null]})}try{c.displayName="Dropdown",c.__docgenInfo={description:"",displayName:"Dropdown",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean | undefined"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((selected: TOption) => void) | undefined"}},selectedOptionLabel:{defaultValue:null,description:"",name:"selectedOptionLabel",required:!0,type:{name:"ReactNode"}},selectedOption:{defaultValue:null,description:"",name:"selectedOption",required:!0,type:{name:"TOption"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ title: string; value: TOption; }[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"black"'},{value:'"grey"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/dropdown/Dropdown.tsx#Dropdown"]={docgenInfo:c.__docgenInfo,name:"Dropdown",path:"src/components/dropdown/Dropdown.tsx#Dropdown"})}catch{}const $={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
`,locationsMap:{base:{startLoc:{col:50,line:37},endLoc:{col:80,line:37},startBody:{col:50,line:37},endBody:{col:80,line:37}},"long-value":{startLoc:{col:50,line:37},endLoc:{col:80,line:37},startBody:{col:50,line:37},endBody:{col:80,line:37}},disabled:{startLoc:{col:50,line:37},endLoc:{col:80,line:37},startBody:{col:50,line:37},endBody:{col:80,line:37}},error:{startLoc:{col:50,line:37},endLoc:{col:80,line:37},startBody:{col:50,line:37},endBody:{col:80,line:37}},small:{startLoc:{col:50,line:37},endLoc:{col:80,line:37},startBody:{col:50,line:37},endBody:{col:80,line:37}},large:{startLoc:{col:50,line:37},endLoc:{col:80,line:37},startBody:{col:50,line:37},endBody:{col:80,line:37}},"full-width":{startLoc:{col:50,line:37},endLoc:{col:80,line:37},startBody:{col:50,line:37},endBody:{col:80,line:37}}}}},title:"UI/Dropdown",component:c,argTypes:{disabled:{type:"boolean"}}},a=[{title:"1",value:"1"},{title:"2",value:"2"},{title:"3",value:"3"},{title:"4",value:"4"},{title:"5",value:"5"}],d=e=>i(c,{...e}),W=d.bind({});W.args={selectedOption:"1",selectedOptionLabel:"1",onSelect:console.debug,options:a,border:"grey"};const I=d.bind({});I.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onSelect:console.debug,options:a};const R=d.bind({});R.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onSelect:console.debug,options:a,disabled:!0};const F=d.bind({});F.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onSelect:console.debug,options:a,error:!0,border:"grey"};const M=d.bind({});M.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onSelect:console.debug,options:a,border:"grey",size:"s"};const j=d.bind({});j.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onSelect:console.debug,options:a,border:"grey",size:"l"};const U=d.bind({});U.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onSelect:console.debug,options:a,border:"grey",size:"l",fullWidth:!0};const ee=["Base","LongValue","Disabled","Error","Small","Large","FullWidth"];export{W as Base,R as Disabled,F as Error,U as FullWidth,j as Large,I as LongValue,M as Small,ee as __namedExportsOrder,$ as default};
//# sourceMappingURL=Dropdown.stories.c155745d.js.map
