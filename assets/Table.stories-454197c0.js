import{R as e}from"./index-f1f749bf.js";/* empty css                            */import{c as y}from"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import{c}from"./clsx-9a51c995.js";import{P as v}from"./Paragraph-3244d658.js";import{I as N}from"./IconButton-a1691125.js";import{R as w}from"./RepeatIcon-87be62f6.js";import"./_commonjsHelpers-042e6b4d.js";import"./typography.style.css-343b204a.js";import"./Spinner-11203674.js";var T={table:"_1ewjpeq0",tCell:y({defaultClassName:"_1ewjpeq1",variantClassNames:{cellType:{head:"_1ewjpeq2",body:"_1ewjpeq3"},align:{center:"_1ewjpeq4",right:"_1ewjpeq5"},minWidth:{true:"_1ewjpeq6"},withoutPadding:{all:"_1ewjpeq7",top:"_1ewjpeq8",bottom:"_1ewjpeq9"}},defaultVariants:{cellType:"body"},compoundVariants:[]}),withHover:y({defaultClassName:"",variantClassNames:{hover:{true:"_1ewjpeqa"}},defaultVariants:{},compoundVariants:[]})};const o=({className:t,children:n,...a})=>e.createElement("table",{...a,className:c(T.table,t)},n);try{o.displayName="Table",o.__docgenInfo={description:"",displayName:"Table",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const m=({className:t,children:n,...a})=>e.createElement("tbody",{...a,className:c(t)},n);try{m.displayName="TBody",m.__docgenInfo={description:"",displayName:"TBody",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const l=({align:t,minWidth:n,withoutPadding:a,cellType:u,className:b,children:p,...P})=>e.createElement("td",{...P,className:c(T.tCell({align:t,minWidth:n,withoutPadding:a,cellType:u}),b)},typeof p=="string"?e.createElement(v,{variant:"caption"},p):p);try{l.displayName="TCell",l.__docgenInfo={description:"",displayName:"TCell",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"right"'}]}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"true"}},withoutPadding:{defaultValue:null,description:"",name:"withoutPadding",required:!1,type:{name:"enum",value:[{value:'"all"'},{value:'"top"'},{value:'"bottom"'}]}},cellType:{defaultValue:null,description:"",name:"cellType",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"head"'}]}}}}}catch{}const d=({className:t,children:n,...a})=>e.createElement("thead",{...a,className:c(t)},n);try{d.displayName="THead",d.__docgenInfo={description:"",displayName:"THead",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const r=({className:t,children:n,onClick:a,...u})=>e.createElement("tr",{...u,className:c(t,T.withHover({hover:!!a})),onClick:a},n);try{r.displayName="TRow",r.__docgenInfo={description:"",displayName:"TRow",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const F={title:"UI/Table",component:o,tags:["autodocs"]},R=t=>e.createElement(o,null,e.createElement(d,null,e.createElement(r,null,e.createElement(l,{cellType:"head"},"Name"),e.createElement(l,{cellType:"head"},"Progress"),e.createElement(l,{cellType:"head",minWidth:!0},"Action"))),e.createElement(m,null,e.createElement(r,null,e.createElement(l,null,"Play tracking"),e.createElement(l,null,"Progress"),e.createElement(l,{minWidth:!0},e.createElement(N,{color:"secondary"},e.createElement(w,null)))),e.createElement(r,null,e.createElement(l,null,"Puck tracking"),e.createElement(l,null,"Progress"),e.createElement(l,{minWidth:!0},"text")))),q=t=>e.createElement(o,null,e.createElement(d,null,e.createElement(r,null,e.createElement(l,{cellType:"head"},"Name"),e.createElement(l,{cellType:"head"},"Progress"),e.createElement(l,{cellType:"head",minWidth:!0},"Action"))),e.createElement(m,null,e.createElement(r,{onClick:()=>console.debug("test")},e.createElement(l,null,"Play tracking"),e.createElement(l,null,"Progress"),e.createElement(l,{minWidth:!0},e.createElement(N,{color:"secondary"},e.createElement(w,null)))),e.createElement(r,{onClick:()=>console.debug("test")},e.createElement(l,null,"Puck tracking"),e.createElement(l,null,"Progress"),e.createElement(l,{minWidth:!0},"text")))),s=R.bind({}),i=q.bind({});var g,_,C;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  return <Table>
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
    </Table>;
}`,...(C=(_=s.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var h,E,f;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  return <Table>
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
    </Table>;
}`,...(f=(E=i.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};const O=["Base","Hover"];export{s as Base,i as Hover,O as __namedExportsOrder,F as default};
//# sourceMappingURL=Table.stories-454197c0.js.map
