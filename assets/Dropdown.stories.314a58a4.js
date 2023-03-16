import{r as l,a as w,j as t}from"./jsx-runtime.15c2e751.js";import{u as D,a as x,D as B}from"./DropdownMenu.02c0f2ef.js";import{h as T,a as V}from"./YoutubeIcon.5b6c4d16.js";import{c as h}from"./clsx.3b79bc83.js";/* empty css                            */import{c as C}from"./vanilla-extract-recipes-createRuntimeFn.esm.e37fdae4.js";import"./iframe.c03e647a.js";import"./react-spring-web.esm.0cda44e1.js";import"./index.b628021e.js";var R=C({defaultClassName:"_16ov49e0",variantClassNames:{border:{black:"_16ov49e1",grey:"_16ov49e2"},disabled:{true:"_16ov49e3"},error:{true:"_16ov49e4"},opened:{true:"_16ov49e5"},fullWidth:{true:"_16ov49e6"},size:{s:"_16ov49e7",m:"_16ov49e8",l:"_16ov49e9"},bRadius:{8:"_16ov49ea",10:"_16ov49eb"}},defaultVariants:{size:"m",bRadius:10},compoundVariants:[]}),y="_16ov49ed",q="_16ov49ec";function s({disabled:o,onSelect:a,selectedOptionLabel:b,options:g,error:S,className:v,selectedOption:k,border:O,fullWidth:L,size:A,bRadius:p,dataSAId:u}){const[r,m]=l.exports.useState(!1),f=l.exports.useRef(null),d=l.exports.useRef(null),_=l.exports.useCallback(()=>{o||m(c=>!c)},[o]),i=l.exports.useCallback(()=>m(!1),[]);D("keyup",i,"Escape"),x(f,i,d);const H=l.exports.useCallback(c=>{a==null||a(c),i()},[a]);return w("div",{onClick:_,className:h(R({disabled:o,error:S,opened:r,border:O,fullWidth:L,size:A,bRadius:p}),v),ref:d,"data-sa-id":u,children:[t("span",{className:q,children:b}),t("div",{children:r?t(T,{className:y}):t(V,{className:y})}),t(B,{menuRef:f,isOpen:r,mainRef:d,selectedOption:k,selectItem:H,options:g,bRadius:p,dataSAId:u})]})}try{s.displayName="Dropdown",s.__docgenInfo={description:"",displayName:"Dropdown",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean | undefined"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((selected: TOption) => void) | undefined"}},selectedOptionLabel:{defaultValue:null,description:"",name:"selectedOptionLabel",required:!0,type:{name:"ReactNode"}},selectedOption:{defaultValue:null,description:"",name:"selectedOption",required:!0,type:{name:"TOption"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ title: string; value: TOption; }[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"black"'},{value:'"grey"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},bRadius:{defaultValue:null,description:"",name:"bRadius",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"8"},{value:"10"}]}},dataSAId:{defaultValue:null,description:"",name:"dataSAId",required:!1,type:{name:"string | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/dropdown/Dropdown.tsx#Dropdown"]={docgenInfo:s.__docgenInfo,name:"Dropdown",path:"src/components/dropdown/Dropdown.tsx#Dropdown"})}catch{}const Z={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
`,locationsMap:{base:{startLoc:{col:50,line:37},endLoc:{col:80,line:37},startBody:{col:50,line:37},endBody:{col:80,line:37}},"long-value":{startLoc:{col:50,line:37},endLoc:{col:80,line:37},startBody:{col:50,line:37},endBody:{col:80,line:37}},disabled:{startLoc:{col:50,line:37},endLoc:{col:80,line:37},startBody:{col:50,line:37},endBody:{col:80,line:37}},error:{startLoc:{col:50,line:37},endLoc:{col:80,line:37},startBody:{col:50,line:37},endBody:{col:80,line:37}},small:{startLoc:{col:50,line:37},endLoc:{col:80,line:37},startBody:{col:50,line:37},endBody:{col:80,line:37}},large:{startLoc:{col:50,line:37},endLoc:{col:80,line:37},startBody:{col:50,line:37},endBody:{col:80,line:37}},"full-width":{startLoc:{col:50,line:37},endLoc:{col:80,line:37},startBody:{col:50,line:37},endBody:{col:80,line:37}}}}},title:"UI/Dropdown",component:s,argTypes:{disabled:{type:"boolean"}}},e=[{title:"1",value:"1"},{title:"2",value:"2"},{title:"3",value:"3"},{title:"4",value:"4"},{title:"5",value:"5"}],n=o=>t(s,{...o}),E=n.bind({});E.args={selectedOption:"1",selectedOptionLabel:"1",onSelect:console.debug,options:e,border:"grey"};const N=n.bind({});N.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey",onSelect:console.debug,options:e};const z=n.bind({});z.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onSelect:console.debug,options:e,disabled:!0};const W=n.bind({});W.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onSelect:console.debug,options:e,error:!0,border:"grey"};const I=n.bind({});I.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onSelect:console.debug,options:e,border:"grey",size:"s"};const F=n.bind({});F.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onSelect:console.debug,options:e,border:"grey",size:"l"};const M=n.bind({});M.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onSelect:console.debug,options:e,border:"grey",size:"l",fullWidth:!0};const $=["Base","LongValue","Disabled","Error","Small","Large","FullWidth"];export{E as Base,z as Disabled,W as Error,M as FullWidth,F as Large,N as LongValue,I as Small,$ as __namedExportsOrder,Z as default};
//# sourceMappingURL=Dropdown.stories.314a58a4.js.map
