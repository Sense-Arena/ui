import{B as r}from"./Button.ca3b21af.js";import{b as u,c as k,a as y}from"./react-spring-web.esm.2f409dc0.js";import{r as l,a as S,F as f,j as e}from"./jsx-runtime.92645f65.js";import"./clsx.3b79bc83.js";/* empty css                             */import"./vanilla-extract-recipes-createRuntimeFn.esm.36bbe845.js";import"./index.b3de1f32.js";import"./iframe.e797048e.js";var w="lvp7jk0";const s=({items:o,visible:n,className:d})=>{const[i,a]=l.exports.useState(o.slice(0,n));l.exports.useEffect(()=>{a(o.slice(0,n))},[n]);const m=u(i,{from:{transform:"scale(0)"},enter:{transform:"scale(1)"},trail:400/i.length,unique:!0,config:k.molasses,keys:t=>t.key}),p=l.exports.useCallback(()=>{a(t=>t.concat(o.slice(n)))},[o,n]);return S(f,{children:[e("div",{className:d,children:m((t,h)=>e(y.div,{style:t,children:h.child}))}),i.length===o.length?null:e("div",{className:w,children:e(r,{color:"outline",onClick:p,style:{marginTop:"1.5rem"},children:"Show all"})})]})},c=s;try{s.displayName="ShowMore",s.__docgenInfo={description:"",displayName:"ShowMore",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"{ child: ReactNode; key: string; }[]"}},visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/show-more/ShowMore.tsx#ShowMore"]={docgenInfo:s.__docgenInfo,name:"ShowMore",path:"src/components/show-more/ShowMore.tsx#ShowMore"})}catch{}const E={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from '../components/button/Button';
import ShowMore from '../components/show-more/ShowMore';

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
`,locationsMap:{base:{startLoc:{col:50,line:10},endLoc:{col:1,line:24},startBody:{col:50,line:10},endBody:{col:1,line:24}}}}},title:"UI/ShowMore",component:c},M=o=>e("div",{style:{position:"relative"},children:e(c,{items:[{key:"1",child:e(r,{children:"kek"})},{key:"2",child:e(r,{children:"kek2"})},{key:"3",child:e(r,{children:"kek2"})},{key:"4",child:e(r,{children:"kek2"})}],visible:o.visible})}),B=M.bind({});B.args={visible:2};const I=["Base"];export{B as Base,I as __namedExportsOrder,E as default};
//# sourceMappingURL=ShowMore.stories.d9e93a29.js.map
