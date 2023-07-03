import{w as v,u as B}from"./index-5b05281e.js";import{r as c,R as e}from"./index-8db94870.js";import{G as E,m as g,i as w}from"./index-df04aa12.js";import{B as r}from"./Button-35cb6828.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-356e4a49.js";import"./index-8ce4a492.js";import"./clsx-9a51c995.js";/* empty css                            */import"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import"./Spinner-6b93855d.js";var _="lvp7jk0";const o=({items:t,visible:n,className:l,btnProps:k={}})=>{const[i,m]=c.useState(t.slice(0,n));c.useEffect(()=>{m(t.slice(0,n))},[n]);const y=E(i,{from:{transform:"scale(0)"},enter:{transform:"scale(1)"},trail:400/i.length,unique:!0,config:g.molasses,keys:a=>a.key}),h=c.useCallback(()=>{m(a=>a.concat(t.slice(n)))},[t,n]);return e.createElement(e.Fragment,null,e.createElement("div",{className:l},y((a,f)=>e.createElement(w.div,{style:a},f.child))),i.length===t.length?null:e.createElement("div",{className:_},e.createElement(r,{color:"outline",onClick:h,style:{marginTop:"1.5rem"},...k},"Show all")))};try{o.displayName="ShowMore",o.__docgenInfo={description:"",displayName:"ShowMore",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"{ child: ReactNode; key: string; }[]"}},visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},btnProps:{defaultValue:{value:"{}"},description:"",name:"btnProps",required:!1,type:{name:"ButtonProps"}}}}}catch{}const j={title:"UI/ShowMore",component:o,tags:["autodocs"]},x=t=>e.createElement("div",{style:{position:"relative"}},e.createElement(o,{items:t.items,visible:t.visible})),s={args:{visible:2,items:[{key:"1",child:e.createElement(r,null,"kek")},{key:"2",child:e.createElement(r,null,"kek2")},{key:"3",child:e.createElement(r,null,"kek3")},{key:"4",child:e.createElement(r,null,"kek4")}]},render:x,play:async({canvasElement:t})=>{const n=v(t),l=n.getByText(/show all/i);B.click(l),n.findByText(/kek3/i),n.findByText(/kek4/i)}};var u,d,p;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    visible: 2,
    items: [{
      key: '1',
      child: <Button>kek</Button>
    }, {
      key: '2',
      child: <Button>kek2</Button>
    }, {
      key: '3',
      child: <Button>kek3</Button>
    }, {
      key: '4',
      child: <Button>kek4</Button>
    }]
  },
  render: Template,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const showMore = canvas.getByText(/show all/i);
    userEvent.click(showMore);
    canvas.findByText(/kek3/i);
    canvas.findByText(/kek4/i);
  }
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const A=["Base"];export{s as Base,A as __namedExportsOrder,j as default};
//# sourceMappingURL=ShowMore.stories-45b9a81f.js.map
