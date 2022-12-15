import{j as e,a}from"./jsx-runtime-7c09b6e1.js";/* empty css                            */import{c as u}from"./vanilla-extract-recipes-createRuntimeFn.esm-d30eb010.js";import{c as s}from"./clsx-9a51c995.js";import{P as f}from"./Paragraph-ff822137.js";import{I as y}from"./IconButton-7f70b8fa.js";import{R as _}from"./RepeatIcon-65c02084.js";import"./index-73a32e48.js";import"./es.object.get-own-property-descriptor-d5205e32.js";import"./typography.style.css-b45ec07e.js";import"./Spinner-8bb94193.js";var m={table:"_1ewjpeq0",tCell:u({defaultClassName:"_1ewjpeq1",variantClassNames:{cellType:{head:"_1ewjpeq2",body:"_1ewjpeq3"},align:{center:"_1ewjpeq4",right:"_1ewjpeq5"},minWidth:{true:"_1ewjpeq6"},withoutPadding:{all:"_1ewjpeq7",top:"_1ewjpeq8",bottom:"_1ewjpeq9"}},defaultVariants:{cellType:"body"},compoundVariants:[]}),withHover:u({defaultClassName:"",variantClassNames:{hover:{true:"_1ewjpeqa"}},defaultVariants:{},compoundVariants:[]})};const c=({className:l,children:o,...t})=>e("table",{...t,className:s(m.table,l),children:o});try{c.displayName="Table",c.__docgenInfo={description:"",displayName:"Table",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/table/Table.tsx#Table"]={docgenInfo:c.__docgenInfo,name:"Table",path:"src/components/table/Table.tsx#Table"})}catch{}const d=({className:l,children:o,...t})=>e("tbody",{...t,className:s(l),children:o});try{d.displayName="TBody",d.__docgenInfo={description:"",displayName:"TBody",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/table/TBody.tsx#TBody"]={docgenInfo:d.__docgenInfo,name:"TBody",path:"src/components/table/TBody.tsx#TBody"})}catch{}const n=({align:l,minWidth:o,withoutPadding:t,cellType:T,className:h,children:p,...C})=>e("td",{...C,className:s(m.tCell({align:l,minWidth:o,withoutPadding:t,cellType:T}),h),children:typeof p=="string"?e(f,{variant:"caption",children:p}):p});try{n.displayName="TCell",n.__docgenInfo={description:"",displayName:"TCell",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"center"'},{value:'"right"'}]}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"true | undefined"}},withoutPadding:{defaultValue:null,description:"",name:"withoutPadding",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"all"'},{value:'"top"'},{value:'"bottom"'}]}},cellType:{defaultValue:null,description:"",name:"cellType",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"body"'},{value:'"head"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/table/TCell.tsx#TCell"]={docgenInfo:n.__docgenInfo,name:"TCell",path:"src/components/table/TCell.tsx#TCell"})}catch{}const i=({className:l,children:o,...t})=>e("thead",{...t,className:s(l),children:o});try{i.displayName="THead",i.__docgenInfo={description:"",displayName:"THead",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/table/THead.tsx#THead"]={docgenInfo:i.__docgenInfo,name:"THead",path:"src/components/table/THead.tsx#THead"})}catch{}const r=({className:l,children:o,onClick:t,...T})=>e("tr",{...T,className:s(l,m.withHover({hover:!!t})),onClick:t,children:o});try{r.displayName="TRow",r.__docgenInfo={description:"",displayName:"TRow",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void) | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/table/TRow.tsx#TRow"]={docgenInfo:r.__docgenInfo,name:"TRow",path:"src/components/table/TRow.tsx#TRow"})}catch{}const E={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Table, TCell, TBody, THead, TRow } from '../components/table';
import { IconButton } from '../components/icon-button';
import { RepeatIcon } from '../icons';

export default {
  title: 'UI/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = args => {
  return (
    <Table>
      <THead>
        <TRow>
          <TCell cellType="head">Name</TCell>
          <TCell cellType="head">Progress</TCell>
          <TCell cellType="head" minWidth>
            Action
          </TCell>
        </TRow>
      </THead>
      <TBody>
        <TRow>
          <TCell>Play tracking</TCell>
          <TCell>Progress</TCell>
          <TCell minWidth>
            <IconButton color="secondary">
              <RepeatIcon />
            </IconButton>
          </TCell>
        </TRow>
        <TRow>
          <TCell>Puck tracking</TCell>
          <TCell>Progress</TCell>
          <TCell minWidth>text</TCell>
        </TRow>
      </TBody>
    </Table>
  );
};

const TemplateWithClick: ComponentStory<typeof Table> = args => {
  return (
    <Table>
      <THead>
        <TRow>
          <TCell cellType="head">Name</TCell>
          <TCell cellType="head">Progress</TCell>
          <TCell cellType="head" minWidth>
            Action
          </TCell>
        </TRow>
      </THead>
      <TBody>
        <TRow onClick={() => console.debug('test')}>
          <TCell>Play tracking</TCell>
          <TCell>Progress</TCell>
          <TCell minWidth>
            <IconButton color="secondary">
              <RepeatIcon />
            </IconButton>
          </TCell>
        </TRow>
        <TRow onClick={() => console.debug('test')}>
          <TCell>Puck tracking</TCell>
          <TCell>Progress</TCell>
          <TCell minWidth>text</TCell>
        </TRow>
      </TBody>
    </Table>
  );
};

export const Base = Template.bind({});
Base.args = {};

export const Hover = TemplateWithClick.bind({});
Hover.args = {};
`,locationsMap:{base:{startLoc:{col:47,line:11},endLoc:{col:1,line:41},startBody:{col:47,line:11},endBody:{col:1,line:41}},hover:{startLoc:{col:56,line:43},endLoc:{col:1,line:73},startBody:{col:56,line:43},endBody:{col:1,line:73}}}}},title:"UI/Table",component:c},g=l=>a(c,{children:[e(i,{children:a(r,{children:[e(n,{cellType:"head",children:"Name"}),e(n,{cellType:"head",children:"Progress"}),e(n,{cellType:"head",minWidth:!0,children:"Action"})]})}),a(d,{children:[a(r,{children:[e(n,{children:"Play tracking"}),e(n,{children:"Progress"}),e(n,{minWidth:!0,children:e(y,{color:"secondary",children:e(_,{})})})]}),a(r,{children:[e(n,{children:"Puck tracking"}),e(n,{children:"Progress"}),e(n,{minWidth:!0,children:"text"})]})]})]}),b=l=>a(c,{children:[e(i,{children:a(r,{children:[e(n,{cellType:"head",children:"Name"}),e(n,{cellType:"head",children:"Progress"}),e(n,{cellType:"head",minWidth:!0,children:"Action"})]})}),a(d,{children:[a(r,{onClick:()=>console.debug("test"),children:[e(n,{children:"Play tracking"}),e(n,{children:"Progress"}),e(n,{minWidth:!0,children:e(y,{color:"secondary",children:e(_,{})})})]}),a(r,{onClick:()=>console.debug("test"),children:[e(n,{children:"Puck tracking"}),e(n,{children:"Progress"}),e(n,{minWidth:!0,children:"text"})]})]})]}),R=g.bind({});R.args={};const S=b.bind({});S.args={};const H=["Base","Hover"];export{R as Base,S as Hover,H as __namedExportsOrder,E as default};
//# sourceMappingURL=Table.stories-53aa5105.js.map
