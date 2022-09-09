import{u as k,a as D}from"./react-spring-web.esm.38b62865.js";import{r as l,a as C,j as a}from"./jsx-runtime.5d846f11.js";import{b as E,A as x}from"./CalendarEventIcon.57858c27.js";import{c as w,a as L}from"./vanilla-extract-recipes-createRuntimeFn.esm.89755c4d.js";/* empty css                             */import"./index.2588ba2b.js";import"./iframe.44efcd93.js";const O=(e,n,o)=>{l.exports.useEffect(()=>{const t=s=>{var i;!e.current||e.current.contains(s.target)||((i=o==null?void 0:o.current)==null?void 0:i.contains(s.target))||n()};return document.addEventListener("mousedown",t),document.addEventListener("touchstart",t),()=>{document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)}},[e,n])},B=(e,n,o)=>{l.exports.useEffect(()=>{const t=s=>{s instanceof KeyboardEvent&&s.key===o?n(s):o||n(s)};return document.addEventListener(e,t),()=>document.removeEventListener(e,t)},[e,o,n])};var V=w({defaultClassName:"_16ov49e0",variantClassNames:{disabled:{true:"_16ov49e1"},error:{true:"_16ov49e2"},opened:{true:"_16ov49e3"}},defaultVariants:{},compoundVariants:[]}),b="_16ov49e4",A=w({defaultClassName:"_16ov49e6",variantClassNames:{selected:{true:"_16ov49e7"}},defaultVariants:{},compoundVariants:[]}),N="_16ov49e5";const d=({disabled:e,onSelect:n,selectedOption:o,options:t,error:s,className:i})=>{var g;const[c,f]=l.exports.useState(!1),v=l.exports.useRef(null),m=l.exports.useRef(null),S=k({opacity:c?1:0,config:{duration:250}}),_=l.exports.useCallback(()=>{e||f(r=>!r)},[e]),y=l.exports.useCallback(()=>f(!1),[]);return B("keyup",y,"Escape"),O(v,y,m),C("div",{onClick:_,className:L(V({disabled:e,error:s,opened:c}),i),ref:m,children:[a("span",{children:o.title}),c?a(E,{className:b}):a(x,{className:b}),c?a(D.div,{style:{...S,width:(g=m.current)==null?void 0:g.getClientRects()[0].width},className:N,ref:v,onClick:r=>r.stopPropagation(),children:t.map(r=>a("div",{onClick:()=>n==null?void 0:n(r.value),className:A({selected:r.value===o.value}),children:r.title},r.value))}):null]})};try{d.displayName="Dropdown",d.__docgenInfo={description:"",displayName:"Dropdown",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean | undefined"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((selected: string) => void) | undefined"}},selectedOption:{defaultValue:null,description:"",name:"selectedOption",required:!0,type:{name:"{ title: string; value: string; }"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ title: string; value: string; }[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/dropdown/Dropdown.tsx#Dropdown"]={docgenInfo:d.__docgenInfo,name:"Dropdown",path:"src/components/dropdown/Dropdown.tsx#Dropdown"})}catch{}const K={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
  selectedOption: { title: '1', value: '1' },
  onSelect: console.debug,
  options,
};
export const LongValue = Template.bind({});
LongValue.args = {
  selectedOption: { title: 'Sense Arena Hockey dsfsdkf ', value: 'kewk' },
  onSelect: console.debug,
  options,
};

export const Disabled = Template.bind({});
Disabled.args = {
  selectedOption: { title: 'Sense Arena Hockey dsfsdkf ', value: 'kewk' },
  onSelect: console.debug,
  options,
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  selectedOption: { title: 'Sense Arena Hockey dsfsdkf ', value: 'kewk' },
  onSelect: console.debug,
  options,
  error: true,
};
`,locationsMap:{base:{startLoc:{col:50,line:37},endLoc:{col:80,line:37},startBody:{col:50,line:37},endBody:{col:80,line:37}},"long-value":{startLoc:{col:50,line:37},endLoc:{col:80,line:37},startBody:{col:50,line:37},endBody:{col:80,line:37}},disabled:{startLoc:{col:50,line:37},endLoc:{col:80,line:37},startBody:{col:50,line:37},endBody:{col:80,line:37}},error:{startLoc:{col:50,line:37},endLoc:{col:80,line:37},startBody:{col:50,line:37},endBody:{col:80,line:37}}}}},title:"UI/Dropdown",component:d,argTypes:{disabled:{type:"boolean"}}},u=[{title:"1",value:"1"},{title:"2",value:"2"},{title:"3",value:"3"},{title:"4",value:"4"},{title:"5",value:"5"}],p=e=>a(d,{...e}),h=p.bind({});h.args={selectedOption:{title:"1",value:"1"},onSelect:console.debug,options:u};const T=p.bind({});T.args={selectedOption:{title:"Sense Arena Hockey dsfsdkf ",value:"kewk"},onSelect:console.debug,options:u};const H=p.bind({});H.args={selectedOption:{title:"Sense Arena Hockey dsfsdkf ",value:"kewk"},onSelect:console.debug,options:u,disabled:!0};const I=p.bind({});I.args={selectedOption:{title:"Sense Arena Hockey dsfsdkf ",value:"kewk"},onSelect:console.debug,options:u,error:!0};const P=["Base","LongValue","Disabled","Error"];export{h as Base,H as Disabled,I as Error,T as LongValue,P as __namedExportsOrder,K as default};
//# sourceMappingURL=Dropdown.stories.304db90e.js.map
