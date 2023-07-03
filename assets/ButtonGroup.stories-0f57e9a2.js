import{r as u,R as e}from"./index-8db94870.js";/* empty css                            */import{c as d}from"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import{c as l}from"./clsx-9a51c995.js";import{B as t}from"./Button-35cb6828.js";import"./_commonjsHelpers-042e6b4d.js";import"./Spinner-6b93855d.js";var n={container:d({defaultClassName:"_1oan73w1",variantClassNames:{mode:{rounded:"_1oan73w2",square:"_1oan73w3"},border:{primary:"_1oan73w4",secondary:"_1oan73w5",light:"_1oan73w6"}},defaultVariants:{mode:"square"},compoundVariants:[]}),group:"_1oan73w0",groupRec:d({defaultClassName:"_1oan73w7",variantClassNames:{border:{primary:"_1oan73w8",secondary:"_1oan73w9",light:"_1oan73wa"}},defaultVariants:{},compoundVariants:[]})};const o=u.forwardRef(({children:a,className:p,dataSAId:_,mode:y,border:s,...f},w)=>e.createElement("div",{className:l(n.container({mode:y,border:s}),p),"data-sa-id":_,ref:w,...f},u.Children.map(a,g=>e.createElement("div",{className:l(n.groupRec({border:s}),n.group)},g))));try{o.displayName="ButtonGroup",o.__docgenInfo={description:"",displayName:"ButtonGroup",props:{dataSAId:{defaultValue:null,description:"",name:"dataSAId",required:!1,type:{name:"string"}},mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"rounded"'},{value:'"square"'}]}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"light"'}]}}}}}catch{}const V={title:"UI/ButtonGroup",component:o,tags:["autodocs"]},r={args:{border:"secondary"},render:a=>e.createElement(o,{...a},e.createElement(t,{size:"s",color:"secondary"},"kekw"),e.createElement(t,{size:"s",color:"primary"},"kekw"),e.createElement(t,{size:"s",color:"outline_secondary"},"kekw"))};var c,i,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    border: 'secondary'
  },
  render: args => <ButtonGroup {...args}>
      <Button size="s" color="secondary">
        kekw
      </Button>
      <Button size="s" color="primary">
        kekw
      </Button>
      <Button size="s" color="outline_secondary">
        kekw
      </Button>
    </ButtonGroup>
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const q=["Base"];export{r as Base,q as __namedExportsOrder,V as default};
//# sourceMappingURL=ButtonGroup.stories-0f57e9a2.js.map
