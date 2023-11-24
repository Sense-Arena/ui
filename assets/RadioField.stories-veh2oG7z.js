import{r as n,R as e}from"./index-4g5l5LRQ.js";import{S as I,a as b}from"./Stack-7_9lJU4J.js";import{c as w}from"./clsx-4u0nZvpz.js";/* empty css                            */import{c as o}from"./createRuntimeFn-f8e161c6.esm-AdCGDnTf.js";import{F as S}from"./FieldError-9hkGzNn9.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./Paragraph-KE75Y3vx.js";import"./typography.style.css-H62P5Ui0.js";var d={container:o({defaultClassName:"_1qep75l0",variantClassNames:{checked:{true:"_1qep75l1"},disabled:{true:"_1qep75l2"}},defaultVariants:{},compoundVariants:[]}),input:"_1qep75l3",containerIcons:"_1qep75l4",svgRound:"_1qep75l5",svgInside:o({defaultClassName:"_1qep75l6",variantClassNames:{checked:{true:"_1qep75l7",false:"_1qep75l8"}},defaultVariants:{checked:!1},compoundVariants:[]})};const h=n.forwardRef(({checked:a,onChangeHandler:l,disabled:s,dataSAId:r,...u},m)=>{const t=n.useCallback(p=>{l(p.target.checked)},[l]);return e.createElement("span",{className:d.container({checked:a,disabled:s}),"data-sa-id":r},e.createElement("input",{type:"radio",className:d.input,...u,ref:m,onChange:t,checked:a}),e.createElement("span",{className:d.containerIcons},e.createElement("svg",{className:d.svgRound,focusable:"false",viewBox:"0 0 24 24"},e.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})),e.createElement("svg",{className:d.svgInside({checked:a}),focusable:"false",viewBox:"0 0 24 24"},e.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}))))});try{h.displayName="RadioButton",h.__docgenInfo={description:"",displayName:"RadioButton",props:{dataSAId:{defaultValue:null,description:"",name:"dataSAId",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},onChangeHandler:{defaultValue:null,description:"",name:"onChangeHandler",required:!0,type:{name:"(checked: boolean) => void"}}}}}catch{}var _={containerStyle:o({defaultClassName:"wcl9hh0",variantClassNames:{border:{black:"wcl9hh1",grey:"wcl9hh2"},error:{true:"wcl9hh3"},disabled:{true:"wcl9hh4",false:"wcl9hh5"},bRadius:{8:"wcl9hh6",10:"wcl9hh7"}},defaultVariants:{border:"grey",bRadius:10},compoundVariants:[]}),labelStyle:o({defaultClassName:"wcl9hh8",variantClassNames:{disabled:{true:"wcl9hh9"}},defaultVariants:{},compoundVariants:[]})};const c=({errorText:a,className:l,label:s,disabled:r=!1,checked:u,radioProps:m={},onChange:t,border:p,bRadius:k,containerClassName:V,dataSAId:E})=>{const y=n.useId(),f=n.useRef(null),g=n.useCallback(R=>{r||t==null||t(!R)},[t,r]),C=n.useCallback(()=>{r||(t==null||t(!0),f.current&&(f.current.checked=!0))},[t,r]);return e.createElement("div",{className:l},e.createElement("div",{className:w(_.containerStyle({disabled:r,error:!!a,border:p,bRadius:k}),V),onClick:C,"data-sa-id":E},e.createElement(h,{id:y,checked:!!u,onChangeHandler:g,disabled:r,...m,ref:f}),e.createElement("label",{htmlFor:y,className:_.labelStyle({disabled:r})},s)),e.createElement(S,{errorText:a}))};try{c.displayName="RadioField",c.__docgenInfo={description:"",displayName:"RadioField",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"ReactNode"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},radioProps:{defaultValue:{value:"{}"},description:"",name:"radioProps",required:!1,type:{name:"DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"enum",value:[{value:'"black"'},{value:'"grey"'}]}},bRadius:{defaultValue:null,description:"",name:"bRadius",required:!1,type:{name:"enum",value:[{value:"8"},{value:"10"}]}},containerClassName:{defaultValue:null,description:"",name:"containerClassName",required:!1,type:{name:"string"}},dataSAId:{defaultValue:null,description:"",name:"dataSAId",required:!1,type:{name:"string"}}}}}catch{}const D={title:"UI/Inputs/RadioField",component:c,tags:["autodocs"],argTypes:{disabled:{type:"boolean"}}},F=a=>{const[l,s]=n.useState(1);return e.createElement(I,{direction:"row"},e.createElement(b,{direction:"row",spacing:1},e.createElement(c,{...a,checked:l===0,onChange:()=>s(0)})),e.createElement(b,{direction:"row",spacing:1},e.createElement(c,{...a,checked:l===1,onChange:()=>s(1)})))},i={args:{label:"First Name",radioProps:{name:"first_name"}},render:F};var N,v,q;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    radioProps: {
      name: 'first_name'
    }
  },
  render: Template
}`,...(q=(v=i.parameters)==null?void 0:v.docs)==null?void 0:q.source}}};const O=["Base"];export{i as Base,O as __namedExportsOrder,D as default};
//# sourceMappingURL=RadioField.stories-veh2oG7z.js.map
