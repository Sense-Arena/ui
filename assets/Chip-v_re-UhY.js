import{R as a}from"./index-4g5l5LRQ.js";/* empty css                            */import{c as m}from"./createRuntimeFn-f8e161c6.esm-AdCGDnTf.js";import{S as c,a as p}from"./Stack-7_9lJU4J.js";import{c as d}from"./clsx-4u0nZvpz.js";import{P as _}from"./Paragraph-iimskj7g.js";import{C as f}from"./CloseIcon-qFmP9nq-.js";var t={chipContainer:m({defaultClassName:"_1lmm0bu0",variantClassNames:{size:{s:"_1lmm0bu1",m:"_1lmm0bu2",l:"_1lmm0bu3"},color:{primary:"_1lmm0bu4",secondary:"_1lmm0bu5",warning:"_1lmm0bu6",dark:"_1lmm0bu7"}},defaultVariants:{size:"m",color:"primary"},compoundVariants:[]}),chipText:m({defaultClassName:"_1lmm0bu8",variantClassNames:{size:{s:"_1lmm0bu9",m:"_1lmm0bua",l:"_1lmm0bub"}},defaultVariants:{size:"m"},compoundVariants:[]}),chipDelIcon:m({defaultClassName:"_1lmm0bug",variantClassNames:{size:{s:"_1lmm0buh",m:"_1lmm0bui",l:"_1lmm0buj"}},defaultVariants:{size:"m"},compoundVariants:[]}),chipDelIconContainer:m({defaultClassName:"_1lmm0buc",variantClassNames:{size:{s:"_1lmm0bud",m:"_1lmm0bue",l:"_1lmm0buf"}},defaultVariants:{size:"m"},compoundVariants:[]})};const n=({children:l,size:e,color:i,onDelete:s,className:o,dataSAId:u})=>a.createElement("div",{"data-sa-id":u,onClick:r=>r.stopPropagation(),className:d(t.chipContainer({size:e,color:i}),o)},a.createElement(c,{direction:"row",alignItems:"center"},a.createElement(p,{direction:"row",spacing:.25},a.createElement("div",{className:t.chipText({size:e})},typeof l=="string"?a.createElement(_,{variant:e==="l"?"caption":"note"},l):l)),s?a.createElement("div",{onClick:r=>{r.stopPropagation(),s()},className:t.chipDelIconContainer({size:e})},a.createElement(f,{className:t.chipDelIcon({size:e})})):null));try{n.displayName="Chip",n.__docgenInfo={description:"",displayName:"Chip",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"warning"'},{value:'"dark"'}]}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},dataSAId:{defaultValue:null,description:"",name:"dataSAId",required:!1,type:{name:"string"}}}}}catch{}export{n as C};
//# sourceMappingURL=Chip-v_re-UhY.js.map