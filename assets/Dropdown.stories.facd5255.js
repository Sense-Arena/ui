import{a as C,c as h}from"./react-spring-web.esm.406dbd80.js";import{r as a,a as D,j as r}from"./jsx-runtime.7c8af39d.js";import{h as V,a as B}from"./YoutubeIcon.182b7ada.js";import{c as E}from"./clsx.3b79bc83.js";/* empty css                             */import{c as y}from"./vanilla-extract-recipes-createRuntimeFn.esm.57f0c9b7.js";import"./index.0edf9fe5.js";import"./iframe.417cfc4d.js";const N=(e,n,t)=>{a.exports.useEffect(()=>{const l=s=>{var u;!e.current||e.current.contains(s.target)||((u=t==null?void 0:t.current)==null?void 0:u.contains(s.target))||n()};return document.addEventListener("mousedown",l),document.addEventListener("touchstart",l),()=>{document.removeEventListener("mousedown",l),document.removeEventListener("touchstart",l)}},[e,n])},T=(e,n,t)=>{a.exports.useEffect(()=>{const l=s=>{s instanceof KeyboardEvent&&s.key===t?n(s):t||n(s)};return document.addEventListener(e,l),()=>document.removeEventListener(e,l)},[e,t,n])};var q=y({defaultClassName:"_16ov49e0",variantClassNames:{border:{black:"_16ov49e1",grey:"_16ov49e2"},disabled:{true:"_16ov49e3"},error:{true:"_16ov49e4"},opened:{true:"_16ov49e5"},fullWidth:{true:"_16ov49e6"},size:{s:"_16ov49e7",m:"_16ov49e8",l:"_16ov49e9"},bRadius:{8:"_16ov49ea",10:"_16ov49eb"}},defaultVariants:{size:"m",bRadius:10},compoundVariants:[]}),L="_16ov49ed",z=y({defaultClassName:"_16ov49ek",variantClassNames:{selected:{true:"_16ov49el"}},defaultVariants:{},compoundVariants:[]}),R=y({defaultClassName:"_16ov49ee",variantClassNames:{size:{s:"_16ov49ef",m:"_16ov49eg",l:"_16ov49eh"},bRadius:{8:"_16ov49ei",10:"_16ov49ej"}},defaultVariants:{size:"m",bRadius:10},compoundVariants:[]}),W="_16ov49ec";function c({disabled:e,onSelect:n,selectedOptionLabel:t,options:l,error:s,className:u,selectedOption:O,border:_,fullWidth:A,size:b,bRadius:v}){var k;const[p,g]=a.exports.useState(!1),S=a.exports.useRef(null),m=a.exports.useRef(null),H=C({opacity:p?1:0,config:{duration:250}}),w=a.exports.useCallback(()=>{e||g(o=>!o)},[e]),f=a.exports.useCallback(()=>g(!1),[]);T("keyup",f,"Escape"),N(S,f,m);const x=a.exports.useCallback(o=>{n==null||n(o),f()},[n]);return D("div",{onClick:w,className:E(q({disabled:e,error:s,opened:p,border:_,fullWidth:A,size:b,bRadius:v}),u),ref:m,children:[r("span",{className:W,children:t}),r("div",{children:p?r(V,{className:L}):r(B,{className:L})}),p?r(h.div,{style:{...H,width:(k=m.current)==null?void 0:k.getClientRects()[0].width},className:R({size:b,bRadius:v}),ref:S,onClick:o=>o.stopPropagation(),children:l.map(o=>r("div",{onClick:()=>x(o.value),className:z({selected:o.value===O}),children:o.title},String(o.value)))}):null]})}try{c.displayName="Dropdown",c.__docgenInfo={description:"",displayName:"Dropdown",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean | undefined"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((selected: TOption) => void) | undefined"}},selectedOptionLabel:{defaultValue:null,description:"",name:"selectedOptionLabel",required:!0,type:{name:"ReactNode"}},selectedOption:{defaultValue:null,description:"",name:"selectedOption",required:!0,type:{name:"TOption"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ title: string; value: TOption; }[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"black"'},{value:'"grey"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},bRadius:{defaultValue:null,description:"",name:"bRadius",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"8"},{value:"10"}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/dropdown/Dropdown.tsx#Dropdown"]={docgenInfo:c.__docgenInfo,name:"Dropdown",path:"src/components/dropdown/Dropdown.tsx#Dropdown"})}catch{}const ne={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
  selectedOptionLabel:
    'Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey',
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
`,locationsMap:{base:{startLoc:{col:50,line:37},endLoc:{col:80,line:37},startBody:{col:50,line:37},endBody:{col:80,line:37}},"long-value":{startLoc:{col:50,line:37},endLoc:{col:80,line:37},startBody:{col:50,line:37},endBody:{col:80,line:37}},disabled:{startLoc:{col:50,line:37},endLoc:{col:80,line:37},startBody:{col:50,line:37},endBody:{col:80,line:37}},error:{startLoc:{col:50,line:37},endLoc:{col:80,line:37},startBody:{col:50,line:37},endBody:{col:80,line:37}},small:{startLoc:{col:50,line:37},endLoc:{col:80,line:37},startBody:{col:50,line:37},endBody:{col:80,line:37}},large:{startLoc:{col:50,line:37},endLoc:{col:80,line:37},startBody:{col:50,line:37},endBody:{col:80,line:37}},"full-width":{startLoc:{col:50,line:37},endLoc:{col:80,line:37},startBody:{col:50,line:37},endBody:{col:80,line:37}}}}},title:"UI/Dropdown",component:c,argTypes:{disabled:{type:"boolean"}}},d=[{title:"1",value:"1"},{title:"2",value:"2"},{title:"3",value:"3"},{title:"4",value:"4"},{title:"5",value:"5"}],i=e=>r(c,{...e}),I=i.bind({});I.args={selectedOption:"1",selectedOptionLabel:"1",onSelect:console.debug,options:d,border:"grey"};const F=i.bind({});F.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey",onSelect:console.debug,options:d};const M=i.bind({});M.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onSelect:console.debug,options:d,disabled:!0};const j=i.bind({});j.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onSelect:console.debug,options:d,error:!0,border:"grey"};const U=i.bind({});U.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onSelect:console.debug,options:d,border:"grey",size:"s"};const Y=i.bind({});Y.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onSelect:console.debug,options:d,border:"grey",size:"l"};const K=i.bind({});K.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onSelect:console.debug,options:d,border:"grey",size:"l",fullWidth:!0};const oe=["Base","LongValue","Disabled","Error","Small","Large","FullWidth"];export{I as Base,M as Disabled,j as Error,K as FullWidth,Y as Large,F as LongValue,U as Small,oe as __namedExportsOrder,ne as default};
//# sourceMappingURL=Dropdown.stories.facd5255.js.map
