import{B as r}from"./Button.f9f28025.js";import{d as h,e as y,c as f}from"./react-spring-web.esm.c7e8fefa.js";import{r as l,a as k,F as S,j as e}from"./jsx-runtime.d3935788.js";import"./clsx.3b79bc83.js";import"./Spinner.512447c2.js";/* empty css                            */import"./vanilla-extract-recipes-createRuntimeFn.esm.e37fdae4.js";import"./index.1464d4fa.js";import"./iframe.4f4ea7f5.js";var w="lvp7jk0";const s=({items:o,visible:n,className:c,btnProps:d={}})=>{const[i,a]=l.exports.useState(o.slice(0,n));l.exports.useEffect(()=>{a(o.slice(0,n))},[n]);const m=h(i,{from:{transform:"scale(0)"},enter:{transform:"scale(1)"},trail:400/i.length,unique:!0,config:y.molasses,keys:t=>t.key}),p=l.exports.useCallback(()=>{a(t=>t.concat(o.slice(n)))},[o,n]);return k(S,{children:[e("div",{className:c,children:m((t,u)=>e(f.div,{style:t,children:u.child}))}),i.length===o.length?null:e("div",{className:w,children:e(r,{color:"outline",onClick:p,style:{marginTop:"1.5rem"},...d,children:"Show all"})})]})};try{s.displayName="ShowMore",s.__docgenInfo={description:"",displayName:"ShowMore",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"{ child: ReactNode; key: string; }[]"}},visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},btnProps:{defaultValue:{value:"{}"},description:"",name:"btnProps",required:!1,type:{name:"ButtonProps | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/show-more/ShowMore.tsx#ShowMore"]={docgenInfo:s.__docgenInfo,name:"ShowMore",path:"src/components/show-more/ShowMore.tsx#ShowMore"})}catch{}const I={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
`,locationsMap:{base:{startLoc:{col:50,line:10},endLoc:{col:1,line:24},startBody:{col:50,line:10},endBody:{col:1,line:24}}}}},title:"UI/ShowMore",component:s},B=o=>e("div",{style:{position:"relative"},children:e(s,{items:[{key:"1",child:e(r,{children:"kek"})},{key:"2",child:e(r,{children:"kek2"})},{key:"3",child:e(r,{children:"kek2"})},{key:"4",child:e(r,{children:"kek2"})}],visible:o.visible})}),_=B.bind({});_.args={visible:2};const N=["Base"];export{_ as Base,N as __namedExportsOrder,I as default};
//# sourceMappingURL=ShowMore.stories.a35bd408.js.map
