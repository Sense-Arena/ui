/* empty css                             */import{c as f}from"./vanilla-extract-recipes-createRuntimeFn.esm.36bbe845.js";import{c as d}from"./clsx.3b79bc83.js";import{j as e,a as r}from"./jsx-runtime.73c5ddb1.js";import{P as y}from"./Paragraph.082421d8.js";import{I as C}from"./IconButton.5904761a.js";import{R as g}from"./CalendarEventIcon.369d2387.js";import"./iframe.0f731172.js";import"./Spinner.ed084ab7.js";var m={table:"_1ewjpeq0",tCell:f({defaultClassName:"_1ewjpeq1",variantClassNames:{cellType:{head:"_1ewjpeq2",body:"_1ewjpeq3"},align:{center:"_1ewjpeq4",right:"_1ewjpeq5"},minWidth:{true:"_1ewjpeq6"},withoutPadding:{all:"_1ewjpeq7",top:"_1ewjpeq8",bottom:"_1ewjpeq9"}},defaultVariants:{cellType:"body"},compoundVariants:[]})};const s=({className:n,children:l,...t})=>e("table",{...t,className:d(m.table,n),children:l});try{s.displayName="Table",s.__docgenInfo={description:"",displayName:"Table",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/table/Table.tsx#Table"]={docgenInfo:s.__docgenInfo,name:"Table",path:"src/components/table/Table.tsx#Table"})}catch{}const c=({className:n,children:l,...t})=>e("tbody",{...t,className:d(n),children:l});try{c.displayName="TBody",c.__docgenInfo={description:"",displayName:"TBody",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/table/TBody.tsx#TBody"]={docgenInfo:c.__docgenInfo,name:"TBody",path:"src/components/table/TBody.tsx#TBody"})}catch{}const a=({align:n,minWidth:l,withoutPadding:t,cellType:T,className:u,children:p,..._})=>e("td",{..._,className:d(m.tCell({align:n,minWidth:l,withoutPadding:t,cellType:T}),u),children:typeof p=="string"?e(y,{variant:"caption",children:p}):p});try{a.displayName="TCell",a.__docgenInfo={description:"",displayName:"TCell",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"right"'},{value:'"center"'}]}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"true | undefined"}},withoutPadding:{defaultValue:null,description:"",name:"withoutPadding",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"all"'},{value:'"top"'},{value:'"bottom"'}]}},cellType:{defaultValue:null,description:"",name:"cellType",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"body"'},{value:'"head"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/table/TCell.tsx#TCell"]={docgenInfo:a.__docgenInfo,name:"TCell",path:"src/components/table/TCell.tsx#TCell"})}catch{}const i=({className:n,children:l,...t})=>e("thead",{...t,className:d(n),children:l});try{i.displayName="THead",i.__docgenInfo={description:"",displayName:"THead",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/table/THead.tsx#THead"]={docgenInfo:i.__docgenInfo,name:"THead",path:"src/components/table/THead.tsx#THead"})}catch{}const o=({className:n,children:l,...t})=>e("tr",{...t,className:d(n),children:l});try{o.displayName="TRow",o.__docgenInfo={description:"",displayName:"TRow",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/table/TRow.tsx#TRow"]={docgenInfo:o.__docgenInfo,name:"TRow",path:"src/components/table/TRow.tsx#TRow"})}catch{}const q={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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

export const Base = Template.bind({});
Base.args = {};
`,locationsMap:{base:{startLoc:{col:47,line:11},endLoc:{col:1,line:41},startBody:{col:47,line:11},endBody:{col:1,line:41}}}}},title:"UI/Table",component:s},h=n=>r(s,{children:[e(i,{children:r(o,{children:[e(a,{cellType:"head",children:"Name"}),e(a,{cellType:"head",children:"Progress"}),e(a,{cellType:"head",minWidth:!0,children:"Action"})]})}),r(c,{children:[r(o,{children:[e(a,{children:"Play tracking"}),e(a,{children:"Progress"}),e(a,{minWidth:!0,children:e(C,{color:"secondary",children:e(g,{})})})]}),r(o,{children:[e(a,{children:"Puck tracking"}),e(a,{children:"Progress"}),e(a,{minWidth:!0,children:"text"})]})]})]}),b=h.bind({});b.args={};const x=["Base"];export{b as Base,x as __namedExportsOrder,q as default};
//# sourceMappingURL=Table.stories.b197f2e9.js.map
