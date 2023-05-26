import{R as e}from"./index-8db94870.js";/* empty css                            */import{c as v}from"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import{P as h}from"./Paragraph-8e2d74bd.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx-9a51c995.js";import"./typography.style.css-66a1d45e.js";var r={alertContainer:v({defaultClassName:"_123xom10",variantClassNames:{severity:{error:"_123xom11",warning:"_123xom12",info:"_123xom13",success:"_123xom14"},bRadius:{8:"_123xom15",10:"_123xom16"}},defaultVariants:{bRadius:10},compoundVariants:[]}),iconWrap:"_123xom17",svg:"_123xom18",message:"_123xom19"};const g={error:e.createElement("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),warning:e.createElement("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),info:e.createElement("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),success:e.createElement("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"})},i=({severity:s,children:p,bRadius:d})=>e.createElement("div",{className:r.alertContainer({severity:s,bRadius:d})},e.createElement("div",{className:r.iconWrap},e.createElement("svg",{focusable:"false",viewBox:"0 0 24 24",className:r.svg},g[s])),e.createElement("div",{className:r.message},p));try{i.displayName="Alert",i.__docgenInfo={description:"",displayName:"Alert",props:{severity:{defaultValue:null,description:"",name:"severity",required:!0,type:{name:"enum",value:[{value:'"error"'},{value:'"warning"'},{value:'"info"'},{value:'"success"'}]}},bRadius:{defaultValue:null,description:"",name:"bRadius",required:!1,type:{name:"enum",value:[{value:"8"},{value:"10"}]}}}}}catch{}const L={title:"UI/Alert",tags:["autodocs"],component:i},a={args:{severity:"error",children:e.createElement(h,{variant:"caption"},"This is an error alert — check it out!")}},t={args:{severity:"error",children:e.createElement(h,null,"This is an error alert — check it out! This is an error alert — check it out! This is an error alert — check it out! This is an error alert — check it out! This is an error alert — check it out! This is an error alert — check it out! This is an error alert — check it out!")}};var o,c,n;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    severity: 'error',
    children: <Paragraph variant="caption">This is an error alert — check it out!</Paragraph>
  }
}`,...(n=(c=a.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var l,m,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    severity: 'error',
    children: <Paragraph>
        This is an error alert — check it out! This is an error alert — check it out! This is an error alert — check it out!
        This is an error alert — check it out! This is an error alert — check it out! This is an error alert — check it out!
        This is an error alert — check it out!
      </Paragraph>
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const C=["Base","LongGrid"];export{a as Base,t as LongGrid,C as __namedExportsOrder,L as default};
//# sourceMappingURL=Alert.stories-82cbe470.js.map
