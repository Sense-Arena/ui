import{w as v,u as B}from"./index-5b05281e.js";import{r as i,R as n}from"./index-8db94870.js";import{G as E,m as g,i as w}from"./index-df04aa12.js";import{B as r}from"./Button-9061df2c.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-356e4a49.js";import"./index-8ce4a492.js";import"./clsx-9a51c995.js";/* empty css                            */import"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import"./Spinner-4fe984f5.js";var _="lvp7jk0";const o=({items:e,visible:t,className:l,btnProps:k={}})=>{const[c,m]=i.useState(e.slice(0,t));i.useEffect(()=>{m(e.slice(0,t))},[t]);const y=E(c,{from:{transform:"scale(0)"},enter:{transform:"scale(1)"},trail:400/c.length,unique:!0,config:g.molasses,keys:a=>a.key}),h=i.useCallback(()=>{m(a=>a.concat(e.slice(t)))},[e,t]);return React.createElement(React.Fragment,null,React.createElement("div",{className:l},y((a,f)=>React.createElement(w.div,{style:a},f.child))),c.length===e.length?null:React.createElement("div",{className:_},React.createElement(r,{color:"outline",onClick:h,style:{marginTop:"1.5rem"},...k},"Show all")))};try{o.displayName="ShowMore",o.__docgenInfo={description:"",displayName:"ShowMore",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"{ child: ReactNode; key: string; }[]"}},visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},btnProps:{defaultValue:{value:"{}"},description:"",name:"btnProps",required:!1,type:{name:"ButtonProps"}}}}}catch{}const j={title:"UI/ShowMore",component:o,tags:["autodocs"]},x=e=>n.createElement("div",{style:{position:"relative"}},n.createElement(o,{items:e.items,visible:e.visible})),s={args:{visible:2,items:[{key:"1",child:n.createElement(r,null,"kek")},{key:"2",child:n.createElement(r,null,"kek2")},{key:"3",child:n.createElement(r,null,"kek3")},{key:"4",child:n.createElement(r,null,"kek4")}]},render:x,play:async({canvasElement:e})=>{const t=v(e),l=t.getByText(/show all/i);B.click(l),t.findByText(/kek3/i),t.findByText(/kek4/i)}};var u,d,p;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
//# sourceMappingURL=ShowMore.stories-a9701e4b.js.map
