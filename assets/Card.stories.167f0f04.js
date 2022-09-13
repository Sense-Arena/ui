/* empty css                             */import{c as w}from"./vanilla-extract-recipes-createRuntimeFn.esm.36bbe845.js";import{H as _,P as g}from"./Paragraph.082421d8.js";import{c as L}from"./clsx.3b79bc83.js";import{r as N,j as n,a as d,F as h}from"./jsx-runtime.73c5ddb1.js";import{g as R,a as W,s as C,_ as l,b as D,u as I,c as U,d as E,e as V}from"./styled.f6f11ddd.js";import{B as c}from"./Button.e262700d.js";import"./iframe.0f731172.js";import"./Spinner.ed084ab7.js";var p={section:"tl31ld0",paddingY:"tl31ld1",paddingX:"tl31ld2",sectionContent:w({defaultClassName:"",variantClassNames:{withPadding:{true:"tl31ld2 tl31ld1"}},defaultVariants:{},compoundVariants:[]}),header:"tl31ld4 tl31ld2",action:"tl31ld5"};function S(i){return R("MuiDivider",i)}W("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const $=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],M=i=>{const{absolute:t,children:e,classes:a,flexItem:u,light:o,orientation:r,textAlign:s,variant:v}=i;return V({root:["root",t&&"absolute",v,o&&"light",r==="vertical"&&"vertical",u&&"flexItem",e&&"withChildren",e&&r==="vertical"&&"withChildrenVertical",s==="right"&&r!=="vertical"&&"textAlignRight",s==="left"&&r!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",r==="vertical"&&"wrapperVertical"]},S,a)},O=C("div",{name:"MuiDivider",slot:"Root",overridesResolver:(i,t)=>{const{ownerState:e}=i;return[t.root,e.absolute&&t.absolute,t[e.variant],e.light&&t.light,e.orientation==="vertical"&&t.vertical,e.flexItem&&t.flexItem,e.children&&t.withChildren,e.children&&e.orientation==="vertical"&&t.withChildrenVertical,e.textAlign==="right"&&e.orientation!=="vertical"&&t.textAlignRight,e.textAlign==="left"&&e.orientation!=="vertical"&&t.textAlignLeft]}})(({theme:i,ownerState:t})=>l({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(i.vars||i).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:i.vars?`rgba(${i.vars.palette.dividerChannel} / 0.08)`:D(i.palette.divider,.08)},t.variant==="inset"&&{marginLeft:72},t.variant==="middle"&&t.orientation==="horizontal"&&{marginLeft:i.spacing(2),marginRight:i.spacing(2)},t.variant==="middle"&&t.orientation==="vertical"&&{marginTop:i.spacing(1),marginBottom:i.spacing(1)},t.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"}),({theme:i,ownerState:t})=>l({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(i.vars||i).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}}),({theme:i,ownerState:t})=>l({},t.children&&t.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(i.vars||i).palette.divider}`,transform:"translateX(0%)"}}),({ownerState:i})=>l({},i.textAlign==="right"&&i.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},i.textAlign==="left"&&i.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),k=C("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(i,t)=>{const{ownerState:e}=i;return[t.wrapper,e.orientation==="vertical"&&t.wrapperVertical]}})(({theme:i,ownerState:t})=>l({display:"inline-block",paddingLeft:`calc(${i.spacing(1)} * 1.2)`,paddingRight:`calc(${i.spacing(1)} * 1.2)`},t.orientation==="vertical"&&{paddingTop:`calc(${i.spacing(1)} * 1.2)`,paddingBottom:`calc(${i.spacing(1)} * 1.2)`})),j=N.exports.forwardRef(function(t,e){const a=I({props:t,name:"MuiDivider"}),{absolute:u=!1,children:o,className:r,component:s=o?"div":"hr",flexItem:v=!1,light:x=!1,orientation:T="horizontal",role:q=s!=="hr"?"separator":void 0,textAlign:B="center",variant:A="fullWidth"}=a,P=U(a,$),b=l({},a,{absolute:u,component:s,flexItem:v,light:x,orientation:T,role:q,textAlign:B,variant:A}),y=M(b);return n(O,l({as:s,className:E(y.root,r),role:q,ref:e,ownerState:b},P,{children:o?n(k,{className:y.wrapper,ownerState:b,children:o}):null}))}),Y=j,m=({children:i,title:t,action:e,withPadding:a=!0,className:u,...o})=>d("section",{...o,className:L(p.section,u),children:[t||e?d(h,{children:[d("div",{className:p.header,children:[n("div",{children:typeof t=="string"?n(_,{root:"h3",children:t}):t}),e?n("div",{className:p.action,children:e}):null]}),n("div",{className:p.paddingX,children:n(Y,{})})]}):null,n("div",{className:p.sectionContent({withPadding:a}),children:i})]});try{m.displayName="Card",m.__docgenInfo={description:"",displayName:"Card",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"ReactNode"}},withPadding:{defaultValue:{value:"true"},description:"",name:"withPadding",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/card/Card.tsx#Card"]={docgenInfo:m.__docgenInfo,name:"Card",path:"src/components/card/Card.tsx#Card"})}catch{}const ai={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from '../components/card';
import { Button } from '../components/button';
import { Paragraph } from '../components/typography';

export default {
  title: 'UI/Card',
  component: Card,
  argTypes: {
    withPadding: {
      type: 'boolean',
    },
    className: {
      type: 'string',
    },
    title: {
      type: 'string',
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => {
  return (
    <div style={{ position: 'relative', backgroundColor: '#eceff9', height: '100vh', padding: 24 }}>
      <Card withPadding={args.withPadding} title={args.title} action={args.action}>
        {args.children}
      </Card>
    </div>
  );
};

export const Base = Template.bind({});
Base.args = {
  title: 'Title',
  action: (
    <Button minWidth={true} mode="square" color="outline_secondary">
      Action
    </Button>
  ),
  children: (
    <>
      <Paragraph variant="caption">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Paragraph>
      <Button style={{ marginTop: 12 }}>Test</Button>
    </>
  ),
};

export const TitleIsReactNode = Template.bind({});
TitleIsReactNode.args = {
  title: <Paragraph variant="note">Title</Paragraph>,
  action: (
    <Button minWidth={true} mode="square" color="outline_secondary">
      Action
    </Button>
  ),
  children: (
    <>
      <Paragraph variant="caption">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Paragraph>
      <Button style={{ marginTop: 12 }}>Test</Button>
    </>
  ),
};

export const WithoutTitleAndAction = Template.bind({});
WithoutTitleAndAction.args = {
  title: undefined,
  action: undefined,
  children: (
    <>
      <Paragraph variant="caption">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Paragraph>
      <Button style={{ marginTop: 12 }}>Test</Button>
    </>
  ),
};

export const WithoutPadding = Template.bind({});
WithoutPadding.args = {
  title: undefined,
  action: undefined,
  withPadding: false,
  children: (
    <>
      <Paragraph variant="caption">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Paragraph>
      <Button style={{ marginTop: 12 }}>Test</Button>
    </>
  ),
};
`,locationsMap:{base:{startLoc:{col:46,line:22},endLoc:{col:1,line:30},startBody:{col:46,line:22},endBody:{col:1,line:30}},"title-is-react-node":{startLoc:{col:46,line:22},endLoc:{col:1,line:30},startBody:{col:46,line:22},endBody:{col:1,line:30}},"without-title-and-action":{startLoc:{col:46,line:22},endLoc:{col:1,line:30},startBody:{col:46,line:22},endBody:{col:1,line:30}},"without-padding":{startLoc:{col:46,line:22},endLoc:{col:1,line:30},startBody:{col:46,line:22},endBody:{col:1,line:30}}}}},title:"UI/Card",component:m,argTypes:{withPadding:{type:"boolean"},className:{type:"string"},title:{type:"string"}}},f=i=>n("div",{style:{position:"relative",backgroundColor:"#eceff9",height:"100vh",padding:24},children:n(m,{withPadding:i.withPadding,title:i.title,action:i.action,children:i.children})}),F=f.bind({});F.args={title:"Title",action:n(c,{minWidth:!0,mode:"square",color:"outline_secondary",children:"Action"}),children:d(h,{children:[n(g,{variant:"caption",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),n(c,{style:{marginTop:12},children:"Test"})]})};const X=f.bind({});X.args={title:n(g,{variant:"note",children:"Title"}),action:n(c,{minWidth:!0,mode:"square",color:"outline_secondary",children:"Action"}),children:d(h,{children:[n(g,{variant:"caption",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),n(c,{style:{marginTop:12},children:"Test"})]})};const z=f.bind({});z.args={title:void 0,action:void 0,children:d(h,{children:[n(g,{variant:"caption",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),n(c,{style:{marginTop:12},children:"Test"})]})};const H=f.bind({});H.args={title:void 0,action:void 0,withPadding:!1,children:d(h,{children:[n(g,{variant:"caption",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),n(c,{style:{marginTop:12},children:"Test"})]})};const oi=["Base","TitleIsReactNode","WithoutTitleAndAction","WithoutPadding"];export{F as Base,X as TitleIsReactNode,H as WithoutPadding,z as WithoutTitleAndAction,oi as __namedExportsOrder,ai as default};
//# sourceMappingURL=Card.stories.167f0f04.js.map
