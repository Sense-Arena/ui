import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{c as r,n as i,r as a,t as o}from"./react-spring_web.modern-CfgRmnGF.js";import{n as s,t as c}from"./Button-BBKcU3Dj.js";var l;function u(){return(u=e((()=>{l=`lvp7jk0`})))()}var d,f,p;function m(){return(m=e((()=>{i(),d=t(),s(),u(),f=n(),p=({items:e,visible:t,className:n,btnProps:i={}})=>{let[s,u]=(0,d.useState)(e.slice(0,t));(0,d.useEffect)(()=>{u(e.slice(0,t))},[t]);let p=r(s,{from:{transform:`scale(0)`},enter:{transform:`scale(1)`},trail:400/s.length,unique:!0,config:a.molasses,keys:e=>e.key}),m=(0,d.useCallback)(()=>{u(n=>n.concat(e.slice(t)))},[e,t]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`div`,{className:n,children:p((e,t)=>(0,f.jsx)(o.div,{style:e,children:t.child}))}),s.length===e.length?null:(0,f.jsx)(`div`,{className:l,children:(0,f.jsx)(c,{color:`outline`,onClick:m,style:{marginTop:`1.5rem`},...i,children:`Show all`})})]})},p.__docgenInfo={description:``,methods:[],displayName:`ShowMore`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  child: ReactNode;
  key: string;
}`,signature:{properties:[{key:`child`,value:{name:`ReactNode`,required:!0}},{key:`key`,value:{name:`string`,required:!0}}]}}],raw:`{
  child: ReactNode;
  key: string;
}[]`},description:``},visible:{required:!0,tsType:{name:`number`},description:``},className:{required:!1,tsType:{name:`string`},description:``},btnProps:{required:!1,tsType:{name:`intersection`,raw:`{
  children?: ReactNode;
  icon?: ReactNode;
  size?: 's' | 'm' | 'l';
  color?: 'primary' | 'secondary' | 'secondary_action' | 'outline' | 'outline_secondary';
  mode?: 'rounded' | 'square';
  minWidth?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  dataSAId?: string;
} & Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'ref'>`,elements:[{name:`signature`,type:`object`,raw:`{
  children?: ReactNode;
  icon?: ReactNode;
  size?: 's' | 'm' | 'l';
  color?: 'primary' | 'secondary' | 'secondary_action' | 'outline' | 'outline_secondary';
  mode?: 'rounded' | 'square';
  minWidth?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  dataSAId?: string;
}`,signature:{properties:[{key:`children`,value:{name:`ReactNode`,required:!1}},{key:`icon`,value:{name:`ReactNode`,required:!1}},{key:`size`,value:{name:`union`,raw:`'s' | 'm' | 'l'`,elements:[{name:`literal`,value:`'s'`},{name:`literal`,value:`'m'`},{name:`literal`,value:`'l'`}],required:!1}},{key:`color`,value:{name:`union`,raw:`'primary' | 'secondary' | 'secondary_action' | 'outline' | 'outline_secondary'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'secondary_action'`},{name:`literal`,value:`'outline'`},{name:`literal`,value:`'outline_secondary'`}],required:!1}},{key:`mode`,value:{name:`union`,raw:`'rounded' | 'square'`,elements:[{name:`literal`,value:`'rounded'`},{name:`literal`,value:`'square'`}],required:!1}},{key:`minWidth`,value:{name:`boolean`,required:!1}},{key:`fullWidth`,value:{name:`boolean`,required:!1}},{key:`loading`,value:{name:`boolean`,required:!1}},{key:`dataSAId`,value:{name:`string`,required:!1}}]}},{name:`Omit`,elements:[{name:`DetailedHTMLProps`,elements:[{name:`ButtonHTMLAttributes`,elements:[{name:`HTMLButtonElement`}],raw:`ButtonHTMLAttributes<HTMLButtonElement>`},{name:`HTMLButtonElement`}],raw:`DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>`},{name:`literal`,value:`'ref'`}],raw:`Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'ref'>`}]},description:``,defaultValue:{value:`{}`,computed:!1}}}}})))()}var h,g,_,v,y,b,x;function S(){return(S=e((()=>{t(),s(),m(),h=n(),{userEvent:g,within:_}=__STORYBOOK_MODULE_TEST__,v={title:`UI/ShowMore`,component:p,tags:[`autodocs`]},y=e=>(0,h.jsx)(`div`,{style:{position:`relative`},children:(0,h.jsx)(p,{items:e.items,visible:e.visible})}),b={args:{visible:2,items:[{key:`1`,child:(0,h.jsx)(c,{children:`kek`})},{key:`2`,child:(0,h.jsx)(c,{children:`kek2`})},{key:`3`,child:(0,h.jsx)(c,{children:`kek3`})},{key:`4`,child:(0,h.jsx)(c,{children:`kek4`})}]},render:y,play:async({canvasElement:e})=>{let t=_(e),n=t.getByText(/show all/i);await g.click(n),t.findByText(/kek3/i),t.findByText(/kek4/i)}},x=[`Base`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
    await userEvent.click(showMore);
    canvas.findByText(/kek3/i);
    canvas.findByText(/kek4/i);
  }
}`,...b.parameters?.docs?.source}}}})))()}S();export{b as Base,x as __namedExportsOrder,v as default};