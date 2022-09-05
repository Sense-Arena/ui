import{B as r}from"./Button.b934acc0.js";import{b as h,c as u,a as k}from"./react-spring-web.esm.a36baeac.js";import{r as l,a as y,F as S,j as e}from"./jsx-runtime.32150abb.js";import"./clsx.3b79bc83.js";/* empty css                             */import"./vanilla-extract-recipes-createRuntimeFn.esm.36bbe845.js";import"./index.ed715f1c.js";import"./iframe.063fbb8b.js";var f="lvp7jk0";const s=({items:o,visible:n,className:c})=>{const[i,a]=l.exports.useState(o.slice(0,n));l.exports.useEffect(()=>{a(o.slice(0,n))},[n]);const d=h(i,{from:{transform:"scale(0)"},enter:{transform:"scale(1)"},trail:400/i.length,unique:!0,config:u.molasses,keys:t=>t.key}),m=l.exports.useCallback(()=>{a(t=>t.concat(o.slice(n)))},[o,n]);return y(S,{children:[e("div",{className:c,children:d((t,p)=>e(k.div,{style:t,children:p.child}))}),i.length===o.length?null:e("div",{className:f,children:e(r,{color:"outline",onClick:m,style:{marginTop:"1.5rem"},children:"Show all"})})]})};try{s.displayName="ShowMore",s.__docgenInfo={description:"",displayName:"ShowMore",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"{ child: ReactNode; key: string; }[]"}},visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/show-more/ShowMore.tsx#ShowMore"]={docgenInfo:s.__docgenInfo,name:"ShowMore",path:"src/components/show-more/ShowMore.tsx#ShowMore"})}catch{}const O={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../components/button';
import { ShowMore } from '../components/show-more';

export default {
  title: 'UI/ShowMore',
  component: ShowMore,
} as ComponentMeta<typeof ShowMore>;

const Template: ComponentStory<typeof ShowMore> = args => {
  return (
    <div style={{ position: 'relative' }}>
      <ShowMore
        items={[
          { key: '1', child: <Button>kek</Button> },
          { key: '2', child: <Button>kek2</Button> },
          { key: '3', child: <Button>kek2</Button> },
          { key: '4', child: <Button>kek2</Button> },
        ]}
        visible={args.visible}
      />
    </div>
  );
};

export const Base = Template.bind({});
Base.args = {
  visible: 2,
};
`,locationsMap:{base:{startLoc:{col:50,line:10},endLoc:{col:1,line:24},startBody:{col:50,line:10},endBody:{col:1,line:24}}}}},title:"UI/ShowMore",component:s},w=o=>e("div",{style:{position:"relative"},children:e(s,{items:[{key:"1",child:e(r,{children:"kek"})},{key:"2",child:e(r,{children:"kek2"})},{key:"3",child:e(r,{children:"kek2"})},{key:"4",child:e(r,{children:"kek2"})}],visible:o.visible})}),_=w.bind({});_.args={visible:2};const E=["Base"];export{_ as Base,E as __namedExportsOrder,O as default};
//# sourceMappingURL=ShowMore.stories.a3b5d1e8.js.map
