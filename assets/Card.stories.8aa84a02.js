/* empty css                             */import{c as P,a as _}from"./vanilla-extract-recipes-createRuntimeFn.esm.89755c4d.js";import{H as L,P as v}from"./Paragraph.c25ccb47.js";import{r as W,j as n,a as s,F as p}from"./jsx-runtime.926f1b63.js";import{g as D,a as N,s as q,_ as l,b as R,u as I,c as U,d as V,e as E}from"./styled.5d1ebd31.js";import{B as g}from"./Button.d7fa545f.js";import"./iframe.5e558cf8.js";var m={section:"tl31ld0",paddingY:"tl31ld1",paddingX:"tl31ld2",sectionContent:P({defaultClassName:"",variantClassNames:{withPadding:{true:"tl31ld2 tl31ld1"}},defaultVariants:{},compoundVariants:[]}),header:"tl31ld4 tl31ld2"};function S(t){return D("MuiDivider",t)}N("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const $=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],M=t=>{const{absolute:i,children:e,classes:a,flexItem:c,light:o,orientation:r,textAlign:d,variant:h}=t;return E({root:["root",i&&"absolute",h,o&&"light",r==="vertical"&&"vertical",c&&"flexItem",e&&"withChildren",e&&r==="vertical"&&"withChildrenVertical",d==="right"&&r!=="vertical"&&"textAlignRight",d==="left"&&r!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",r==="vertical"&&"wrapperVertical"]},S,a)},O=q("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,i)=>{const{ownerState:e}=t;return[i.root,e.absolute&&i.absolute,i[e.variant],e.light&&i.light,e.orientation==="vertical"&&i.vertical,e.flexItem&&i.flexItem,e.children&&i.withChildren,e.children&&e.orientation==="vertical"&&i.withChildrenVertical,e.textAlign==="right"&&e.orientation!=="vertical"&&i.textAlignRight,e.textAlign==="left"&&e.orientation!=="vertical"&&i.textAlignLeft]}})(({theme:t,ownerState:i})=>l({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},i.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},i.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:R(t.palette.divider,.08)},i.variant==="inset"&&{marginLeft:72},i.variant==="middle"&&i.orientation==="horizontal"&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},i.variant==="middle"&&i.orientation==="vertical"&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},i.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},i.flexItem&&{alignSelf:"stretch",height:"auto"}),({theme:t,ownerState:i})=>l({},i.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}}),({theme:t,ownerState:i})=>l({},i.children&&i.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(t.vars||t).palette.divider}`,transform:"translateX(0%)"}}),({ownerState:t})=>l({},t.textAlign==="right"&&t.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},t.textAlign==="left"&&t.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),k=q("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,i)=>{const{ownerState:e}=t;return[i.wrapper,e.orientation==="vertical"&&i.wrapperVertical]}})(({theme:t,ownerState:i})=>l({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},i.orientation==="vertical"&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`})),j=W.exports.forwardRef(function(i,e){const a=I({props:i,name:"MuiDivider"}),{absolute:c=!1,children:o,className:r,component:d=o?"div":"hr",flexItem:h=!1,light:x=!1,orientation:T="horizontal",role:C=d!=="hr"?"separator":void 0,textAlign:w="center",variant:A="fullWidth"}=a,B=U(a,$),f=l({},a,{absolute:c,component:d,flexItem:h,light:x,orientation:T,role:C,textAlign:w,variant:A}),y=M(f);return n(O,l({as:d,className:V(y.root,r),role:C,ref:e,ownerState:f},B,{children:o?n(k,{className:y.wrapper,ownerState:f,children:o}):null}))}),Y=j,u=({children:t,title:i,action:e,withPadding:a=!0,className:c,...o})=>s("section",{...o,className:_(m.section,c),children:[i&&e?s(p,{children:[s("div",{className:m.header,children:[n("div",{children:n(L,{root:"h3",children:i})}),n("div",{children:e})]}),n("div",{className:m.paddingX,children:n(Y,{})})]}):n(p,{}),n("div",{className:m.sectionContent({withPadding:a}),children:t})]});try{u.displayName="Card",u.__docgenInfo={description:"",displayName:"Card",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"ReactNode"}},withPadding:{defaultValue:{value:"true"},description:"",name:"withPadding",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/card/Card.tsx#Card"]={docgenInfo:u.__docgenInfo,name:"Card",path:"src/components/card/Card.tsx#Card"})}catch{}const it={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
`,locationsMap:{base:{startLoc:{col:46,line:22},endLoc:{col:1,line:30},startBody:{col:46,line:22},endBody:{col:1,line:30}},"without-title-and-action":{startLoc:{col:46,line:22},endLoc:{col:1,line:30},startBody:{col:46,line:22},endBody:{col:1,line:30}},"without-padding":{startLoc:{col:46,line:22},endLoc:{col:1,line:30},startBody:{col:46,line:22},endBody:{col:1,line:30}}}}},title:"UI/Card",component:u,argTypes:{withPadding:{type:"boolean"},className:{type:"string"},title:{type:"string"}}},b=t=>n("div",{style:{position:"relative",backgroundColor:"#eceff9",height:"100vh",padding:24},children:n(u,{withPadding:t.withPadding,title:t.title,action:t.action,children:t.children})}),F=b.bind({});F.args={title:"Title",action:n(g,{minWidth:!0,mode:"square",color:"outline_secondary",children:"Action"}),children:s(p,{children:[n(v,{variant:"caption",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),n(g,{style:{marginTop:12},children:"Test"})]})};const X=b.bind({});X.args={title:void 0,action:void 0,children:s(p,{children:[n(v,{variant:"caption",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),n(g,{style:{marginTop:12},children:"Test"})]})};const z=b.bind({});z.args={title:void 0,action:void 0,withPadding:!1,children:s(p,{children:[n(v,{variant:"caption",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),n(g,{style:{marginTop:12},children:"Test"})]})};const et=["Base","WithoutTitleAndAction","WithoutPadding"];export{F as Base,z as WithoutPadding,X as WithoutTitleAndAction,et as __namedExportsOrder,it as default};
//# sourceMappingURL=Card.stories.8aa84a02.js.map
