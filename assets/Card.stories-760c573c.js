import{j as i,a as o,F as a}from"./jsx-runtime-7c09b6e1.js";import{C as l}from"./Card-b2bf8833.js";import{B as t}from"./Button-6100f49b.js";import{P as e}from"./Paragraph-ff822137.js";import"./index-73a32e48.js";import"./es.object.get-own-property-descriptor-d5205e32.js";import"./Divider-c3a3967f.js";/* empty css                            */import"./vanilla-extract-recipes-createRuntimeFn.esm-d30eb010.js";import"./clsx-9a51c995.js";import"./Heading-d9039fdf.js";import"./typography.style.css-b45ec07e.js";import"./Spinner-8bb94193.js";const C={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
`,locationsMap:{base:{startLoc:{col:46,line:22},endLoc:{col:1,line:30},startBody:{col:46,line:22},endBody:{col:1,line:30}},"title-is-react-node":{startLoc:{col:46,line:22},endLoc:{col:1,line:30},startBody:{col:46,line:22},endBody:{col:1,line:30}},"without-title-and-action":{startLoc:{col:46,line:22},endLoc:{col:1,line:30},startBody:{col:46,line:22},endBody:{col:1,line:30}},"without-padding":{startLoc:{col:46,line:22},endLoc:{col:1,line:30},startBody:{col:46,line:22},endBody:{col:1,line:30}}}}},title:"UI/Card",component:l,argTypes:{withPadding:{type:"boolean"},className:{type:"string"},title:{type:"string"}}},r=n=>i("div",{style:{position:"relative",backgroundColor:"#eceff9",height:"100vh",padding:24},children:i(l,{withPadding:n.withPadding,title:n.title,action:n.action,children:n.children})}),d=r.bind({});d.args={title:"Title",action:i(t,{minWidth:!0,mode:"square",color:"outline_secondary",children:"Action"}),children:o(a,{children:[i(e,{variant:"caption",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),i(t,{style:{marginTop:12},children:"Test"})]})};const u=r.bind({});u.args={title:i(e,{variant:"note",children:"Title"}),action:i(t,{minWidth:!0,mode:"square",color:"outline_secondary",children:"Action"}),children:o(a,{children:[i(e,{variant:"caption",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),i(t,{style:{marginTop:12},children:"Test"})]})};const c=r.bind({});c.args={title:void 0,action:void 0,children:o(a,{children:[i(e,{variant:"caption",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),i(t,{style:{marginTop:12},children:"Test"})]})};const s=r.bind({});s.args={title:void 0,action:void 0,withPadding:!1,children:o(a,{children:[i(e,{variant:"caption",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),i(t,{style:{marginTop:12},children:"Test"})]})};const L=["Base","TitleIsReactNode","WithoutTitleAndAction","WithoutPadding"];export{d as Base,u as TitleIsReactNode,s as WithoutPadding,c as WithoutTitleAndAction,L as __namedExportsOrder,C as default};
//# sourceMappingURL=Card.stories-760c573c.js.map
