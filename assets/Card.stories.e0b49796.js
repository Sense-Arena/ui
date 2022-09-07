/* empty css                             */import{c as P,a as _}from"./vanilla-extract-recipes-createRuntimeFn.esm.89755c4d.js";import{H as L,P as v}from"./Paragraph.991a2927.js";import{r as W,j as n,a as c,F as l}from"./jsx-runtime.28c003ac.js";import{g as D,a as N,s as q,_ as d,b as R,u as I,c as U,d as V,e as E}from"./styled.b2b57946.js";import{B as g}from"./Button.8dbf7b75.js";import"./iframe.82d53202.js";var m={section:"tl31ld0",paddingY:"tl31ld1",paddingX:"tl31ld2",sectionContent:P({defaultClassName:"",variantClassNames:{withPadding:{true:"tl31ld2 tl31ld1"}},defaultVariants:{},compoundVariants:[]}),header:"tl31ld4 tl31ld2"};function S(i){return D("MuiDivider",i)}N("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const $=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],M=i=>{const{absolute:t,children:e,classes:a,flexItem:u,light:o,orientation:r,textAlign:s,variant:h}=i;return E({root:["root",t&&"absolute",h,o&&"light",r==="vertical"&&"vertical",u&&"flexItem",e&&"withChildren",e&&r==="vertical"&&"withChildrenVertical",s==="right"&&r!=="vertical"&&"textAlignRight",s==="left"&&r!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",r==="vertical"&&"wrapperVertical"]},S,a)},O=q("div",{name:"MuiDivider",slot:"Root",overridesResolver:(i,t)=>{const{ownerState:e}=i;return[t.root,e.absolute&&t.absolute,t[e.variant],e.light&&t.light,e.orientation==="vertical"&&t.vertical,e.flexItem&&t.flexItem,e.children&&t.withChildren,e.children&&e.orientation==="vertical"&&t.withChildrenVertical,e.textAlign==="right"&&e.orientation!=="vertical"&&t.textAlignRight,e.textAlign==="left"&&e.orientation!=="vertical"&&t.textAlignLeft]}})(({theme:i,ownerState:t})=>d({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(i.vars||i).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:i.vars?`rgba(${i.vars.palette.dividerChannel} / 0.08)`:R(i.palette.divider,.08)},t.variant==="inset"&&{marginLeft:72},t.variant==="middle"&&t.orientation==="horizontal"&&{marginLeft:i.spacing(2),marginRight:i.spacing(2)},t.variant==="middle"&&t.orientation==="vertical"&&{marginTop:i.spacing(1),marginBottom:i.spacing(1)},t.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"}),({theme:i,ownerState:t})=>d({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(i.vars||i).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}}),({theme:i,ownerState:t})=>d({},t.children&&t.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(i.vars||i).palette.divider}`,transform:"translateX(0%)"}}),({ownerState:i})=>d({},i.textAlign==="right"&&i.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},i.textAlign==="left"&&i.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),k=q("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(i,t)=>{const{ownerState:e}=i;return[t.wrapper,e.orientation==="vertical"&&t.wrapperVertical]}})(({theme:i,ownerState:t})=>d({display:"inline-block",paddingLeft:`calc(${i.spacing(1)} * 1.2)`,paddingRight:`calc(${i.spacing(1)} * 1.2)`},t.orientation==="vertical"&&{paddingTop:`calc(${i.spacing(1)} * 1.2)`,paddingBottom:`calc(${i.spacing(1)} * 1.2)`})),j=W.exports.forwardRef(function(t,e){const a=I({props:t,name:"MuiDivider"}),{absolute:u=!1,children:o,className:r,component:s=o?"div":"hr",flexItem:h=!1,light:x=!1,orientation:T="horizontal",role:C=s!=="hr"?"separator":void 0,textAlign:w="center",variant:A="fullWidth"}=a,B=U(a,$),f=d({},a,{absolute:u,component:s,flexItem:h,light:x,orientation:T,role:C,textAlign:w,variant:A}),y=M(f);return n(O,d({as:s,className:V(y.root,r),role:C,ref:e,ownerState:f},B,{children:o?n(k,{className:y.wrapper,ownerState:f,children:o}):null}))}),Y=j,p=({children:i,title:t,action:e,withPadding:a=!0,className:u,...o})=>c("section",{...o,className:_(m.section,u),children:[t||e?c(l,{children:[c("div",{className:m.header,children:[n("div",{children:t?n(L,{root:"h3",children:t}):n(l,{})}),e?n("div",{children:e}):n(l,{})]}),n("div",{className:m.paddingX,children:n(Y,{})})]}):n(l,{}),n("div",{className:m.sectionContent({withPadding:a}),children:i})]});try{p.displayName="Card",p.__docgenInfo={description:"",displayName:"Card",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"ReactNode"}},withPadding:{defaultValue:{value:"true"},description:"",name:"withPadding",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/card/Card.tsx#Card"]={docgenInfo:p.__docgenInfo,name:"Card",path:"src/components/card/Card.tsx#Card"})}catch{}const ti={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
`,locationsMap:{base:{startLoc:{col:46,line:22},endLoc:{col:1,line:30},startBody:{col:46,line:22},endBody:{col:1,line:30}},"without-title-and-action":{startLoc:{col:46,line:22},endLoc:{col:1,line:30},startBody:{col:46,line:22},endBody:{col:1,line:30}},"without-padding":{startLoc:{col:46,line:22},endLoc:{col:1,line:30},startBody:{col:46,line:22},endBody:{col:1,line:30}}}}},title:"UI/Card",component:p,argTypes:{withPadding:{type:"boolean"},className:{type:"string"},title:{type:"string"}}},b=i=>n("div",{style:{position:"relative",backgroundColor:"#eceff9",height:"100vh",padding:24},children:n(p,{withPadding:i.withPadding,title:i.title,action:i.action,children:i.children})}),F=b.bind({});F.args={title:"Title",action:n(g,{minWidth:!0,mode:"square",color:"outline_secondary",children:"Action"}),children:c(l,{children:[n(v,{variant:"caption",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),n(g,{style:{marginTop:12},children:"Test"})]})};const X=b.bind({});X.args={title:void 0,action:void 0,children:c(l,{children:[n(v,{variant:"caption",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),n(g,{style:{marginTop:12},children:"Test"})]})};const z=b.bind({});z.args={title:void 0,action:void 0,withPadding:!1,children:c(l,{children:[n(v,{variant:"caption",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),n(g,{style:{marginTop:12},children:"Test"})]})};const ei=["Base","WithoutTitleAndAction","WithoutPadding"];export{F as Base,z as WithoutPadding,X as WithoutTitleAndAction,ei as __namedExportsOrder,ti as default};
//# sourceMappingURL=Card.stories.e0b49796.js.map
