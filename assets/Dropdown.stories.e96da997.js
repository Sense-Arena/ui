import{u as D,a as x}from"./react-spring-web.esm.17505755.js";import{r as l,a as E,j as a}from"./jsx-runtime.923e9fc2.js";import{b as k,A as V}from"./CalendarEventIcon.ab884651.js";import{c as B}from"./clsx.3b79bc83.js";/* empty css                             */import{c as O}from"./vanilla-extract-recipes-createRuntimeFn.esm.36bbe845.js";import"./index.cefd5c17.js";import"./iframe.3d3ff981.js";const N=(e,n,t)=>{l.exports.useEffect(()=>{const r=s=>{var i;!e.current||e.current.contains(s.target)||((i=t==null?void 0:t.current)==null?void 0:i.contains(s.target))||n()};return document.addEventListener("mousedown",r),document.addEventListener("touchstart",r),()=>{document.removeEventListener("mousedown",r),document.removeEventListener("touchstart",r)}},[e,n])},A=(e,n,t)=>{l.exports.useEffect(()=>{const r=s=>{s instanceof KeyboardEvent&&s.key===t?n(s):t||n(s)};return document.addEventListener(e,r),()=>document.removeEventListener(e,r)},[e,t,n])};var T=O({defaultClassName:"_16ov49e0",variantClassNames:{border:{black:"_16ov49e1",grey:"_16ov49e2"},disabled:{true:"_16ov49e3"},error:{true:"_16ov49e4"},opened:{true:"_16ov49e5"}},defaultVariants:{},compoundVariants:[]}),g="_16ov49e6",h=O({defaultClassName:"_16ov49e8",variantClassNames:{selected:{true:"_16ov49e9"}},defaultVariants:{},compoundVariants:[]}),q="_16ov49e7";function d({disabled:e,onSelect:n,selectedOptionLabel:t,options:r,error:s,className:i,selectedOption:S,border:_}){var v;const[c,b]=l.exports.useState(!1),y=l.exports.useRef(null),m=l.exports.useRef(null),L=D({opacity:c?1:0,config:{duration:250}}),w=l.exports.useCallback(()=>{e||b(o=>!o)},[e]),f=l.exports.useCallback(()=>b(!1),[]);A("keyup",f,"Escape"),N(y,f,m);const C=l.exports.useCallback(o=>{n==null||n(o),f()},[n]);return E("div",{onClick:w,className:B(T({disabled:e,error:s,opened:c,border:_}),i),ref:m,children:[a("span",{children:t}),c?a(k,{className:g}):a(V,{className:g}),c?a(x.div,{style:{...L,width:(v=m.current)==null?void 0:v.getClientRects()[0].width},className:q,ref:y,onClick:o=>o.stopPropagation(),children:r.map(o=>a("div",{onClick:()=>C(o.value),className:h({selected:o.value===S}),children:o.title},String(o.value)))}):null]})}try{d.displayName="Dropdown",d.__docgenInfo={description:"",displayName:"Dropdown",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean | undefined"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((selected: TOption) => void) | undefined"}},selectedOptionLabel:{defaultValue:null,description:"",name:"selectedOptionLabel",required:!0,type:{name:"ReactNode"}},selectedOption:{defaultValue:null,description:"",name:"selectedOption",required:!0,type:{name:"TOption"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ title: string; value: TOption; }[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"black"'},{value:'"grey"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/dropdown/Dropdown.tsx#Dropdown"]={docgenInfo:d.__docgenInfo,name:"Dropdown",path:"src/components/dropdown/Dropdown.tsx#Dropdown"})}catch{}const J={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
`,locationsMap:{base:{startLoc:{col:50,line:37},endLoc:{col:80,line:37},startBody:{col:50,line:37},endBody:{col:80,line:37}},"long-value":{startLoc:{col:50,line:37},endLoc:{col:80,line:37},startBody:{col:50,line:37},endBody:{col:80,line:37}},disabled:{startLoc:{col:50,line:37},endLoc:{col:80,line:37},startBody:{col:50,line:37},endBody:{col:80,line:37}},error:{startLoc:{col:50,line:37},endLoc:{col:80,line:37},startBody:{col:50,line:37},endBody:{col:80,line:37}}}}},title:"UI/Dropdown",component:d,argTypes:{disabled:{type:"boolean"}}},p=[{title:"1",value:"1"},{title:"2",value:"2"},{title:"3",value:"3"},{title:"4",value:"4"},{title:"5",value:"5"}],u=e=>a(d,{...e}),I=u.bind({});I.args={selectedOption:"1",selectedOptionLabel:"1",onSelect:console.debug,options:p,border:"grey"};const H=u.bind({});H.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onSelect:console.debug,options:p};const R=u.bind({});R.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onSelect:console.debug,options:p,disabled:!0};const M=u.bind({});M.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onSelect:console.debug,options:p,error:!0,border:"grey"};const Q=["Base","LongValue","Disabled","Error"];export{I as Base,R as Disabled,M as Error,H as LongValue,Q as __namedExportsOrder,J as default};
//# sourceMappingURL=Dropdown.stories.e96da997.js.map
