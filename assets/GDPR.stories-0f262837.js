import{w as M,u as B}from"./index-5b05281e.js";import{r as s,R as e}from"./index-8db94870.js";/* empty css                            */import{B as y}from"./Button-58cdd7a4.js";import{M as P}from"./Modal-a797be0c.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-356e4a49.js";import"./clsx-9a51c995.js";import"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import"./Spinner-6b93855d.js";import"./index-df04aa12.js";import"./index-8ce4a492.js";import"./IconButton-5329e6b8.js";import"./CloseIcon-0550241e.js";import"./Card-80d56879.js";import"./Divider-8718a656.js";import"./Heading-c460fabe.js";import"./typography.style.css-66a1d45e.js";const _=()=>{};var c=(t=>(t.CookieConsent="cookie_consent",t))(c||{});const V=(t,n)=>{try{const a=localStorage.getItem(t);return a?JSON.parse(a):n}catch{return n}},F=(t,n)=>{try{localStorage.setItem(t,JSON.stringify(n))}catch(a){console.error(a)}},G=t=>{try{localStorage.removeItem(t)}catch(n){console.error(n)}},d={getItem:V,setItem:F,deleteItem:G},S=s.createContext({setConsent:_,onSave:_,config:{}});var v={cookieContainer:"_1ona0o70",cookieHead:"_1ona0o71",cookieText:"_1ona0o72",cookieLink:"_1ona0o73",cookieBtns:"_1ona0o74"};var L="zf1b112",Y="zf1b110",j="zf1b111",J="zf1b114",W="zf1b113",U="zf1b118",$="zf1b115",K="zf1b116",Q="zf1b117";var X="_1h2jwbd2",Z="_1h2jwbd1",ee="_1h2jwbd0";const w=({id:t,title:n,text:a,checked:o,disabled:i=!1,onChange:u})=>{const l=s.useMemo(()=>`switch-${t}`,[t]);return e.createElement("div",{className:$},e.createElement("div",{className:ee},e.createElement("input",{className:X,type:"checkbox",id:l,onChange:u,checked:o,disabled:i}),e.createElement("label",{htmlFor:l,className:Z})),e.createElement("div",null,e.createElement("span",{className:K},n),e.createElement("p",{className:Q},a)))};try{w.displayName="SwitchConsentItem",w.__docgenInfo={description:"",displayName:"SwitchConsentItem",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}const te=()=>{var m,f,h,p,g,b,k,I,N,q,O,z,H;const[t,n]=s.useState({advertising:!1,required:!0,functional:!1}),{setConsent:a,config:o,onSave:i}=s.useContext(S),u=s.useCallback(()=>{const r={advertising:!1,functional:!1,required:!0};d.setItem(c.CookieConsent,r),a(!0),i(r)},[i]),l=s.useCallback(()=>{const r={advertising:!0,functional:!0,required:!0};d.setItem(c.CookieConsent,r),a(!0),i(r)},[t,i]),E=s.useCallback(()=>{d.setItem(c.CookieConsent,t),a(!0),i(t)},[t,i]);return e.createElement("div",{className:Y,onClick:r=>r.stopPropagation()},e.createElement("h2",{className:j},(m=o.modal)==null?void 0:m.heading),e.createElement("p",{className:W},(f=o.modal)==null?void 0:f.text),e.createElement("a",{className:J,href:(h=o.findOut)==null?void 0:h.link,target:"_blank"},(p=o.findOut)==null?void 0:p.text),e.createElement("div",{className:L},e.createElement(y,{onClick:l},(g=o.modal)==null?void 0:g.btnOk),e.createElement(y,{onClick:u,color:"secondary"},(b=o.modal)==null?void 0:b.btnDeny)),e.createElement(w,{id:"r",disabled:!0,title:((k=o.modal)==null?void 0:k.rHeading)??"",checked:t.required,text:((I=o.modal)==null?void 0:I.rText)??""}),e.createElement(w,{id:"f",title:((N=o.modal)==null?void 0:N.fHeading)??"",checked:t.functional,onChange:r=>n(x=>({...x,functional:r.target.checked})),text:((q=o.modal)==null?void 0:q.fText)??""}),e.createElement(w,{id:"a",title:((O=o.modal)==null?void 0:O.aHeading)??"",checked:t.advertising,onChange:r=>n(x=>({...x,advertising:r.target.checked})),text:((z=o.modal)==null?void 0:z.aText)??""}),e.createElement("div",{className:U},e.createElement(y,{onClick:E},(H=o.modal)==null?void 0:H.btnSave)))},ne=()=>{var m,f,h,p,g,b;const{setConsent:t,config:n,onSave:a}=s.useContext(S),[o,i]=s.useState(!1),u=s.useCallback(()=>{const k={required:!0,advertising:!0,functional:!0};d.setItem(c.CookieConsent,k),t(!0),a(k)},[a]),l=s.useCallback(()=>{i(!0)},[]),E=s.useCallback(()=>{i(!1)},[]);return e.createElement(e.Fragment,null,e.createElement("div",{className:v.cookieContainer},e.createElement("div",null,e.createElement("h1",{className:v.cookieHead},(m=n.banner)==null?void 0:m.heading),e.createElement("p",{className:v.cookieText},(f=n.banner)==null?void 0:f.text," ",e.createElement("a",{className:v.cookieLink,href:(h=n.findOut)==null?void 0:h.link,target:"_blank"},(p=n.findOut)==null?void 0:p.text))),e.createElement("div",{className:v.cookieBtns},e.createElement(y,{onClick:u,dataSAId:"gdpr-accept-all"},(g=n.banner)==null?void 0:g.btnOk),e.createElement(y,{onClick:l,dataSAId:"gdpr-edit-settings",color:"secondary"},(b=n.banner)==null?void 0:b.btnEdit))),e.createElement(P,{open:o,handleClose:E,withCard:!1},e.createElement(te,null)))},oe={banner:{heading:"Cookies",text:"We use cookies to collect and analyze information about the performance and use of the website, to ensure the functioning of social media functions, and to improve and customize content and advertising.",btnOk:"accept all",btnEdit:"edit settings"},findOut:{text:"Find out more",link:"https://www.sensearena.com/terms-and-conditions"},modal:{heading:"Information about cookies on this website",text:"The cookies used on this site are divided into categories. Below, you can find out more about each category and allow or deny some or all of them. Once you disable categories that were previously enabled, all cookies associated with that category will be deleted from your browser. You can also see a list of cookies that are assigned to each of the categories and detailed information in the cookie statement.",btnOk:"accept all",btnSave:"save settings",btnDeny:"deny all",rHeading:"Required Cookies",rText:"These cookies are necessary for the website to function and cannot be switched off in our systems. You can set your browser to block or alert you about these cookies, but this may affect how the website functions.",fHeading:"Functional Cookies",fText:"These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. These cookies also enable the website to provide enhanced functionality and personalization.",aHeading:"Advertising Cookies",aText:"These cookies are capable of tracking your browser across other sites and building up a profile of your interests. They do not store direct personal information but are based on uniquely identifying your browser and internet device."}},T=({config:t=oe,onSave:n=_})=>{const[a,o]=s.useState(!0);return s.useEffect(()=>{o(!!d.getItem(c.CookieConsent,null))},[]),a?null:e.createElement(S.Provider,{value:{setConsent:o,config:t,onSave:n}},e.createElement(ne,null))};try{T.displayName="GDPR",T.__docgenInfo={description:"",displayName:"GDPR",props:{config:{defaultValue:{value:`{
  banner: {
    heading: 'Cookies',
    text: 'We use cookies to collect and analyze information about the performance and use of the website, to ensure the functioning of social media functions, and to improve and customize content and advertising.',
    btnOk: 'accept all',
    btnEdit: 'edit settings',
  },
  findOut: {
    text: 'Find out more',
    link: 'https://www.sensearena.com/terms-and-conditions',
  },
  modal: {
    heading: 'Information about cookies on this website',
    text: 'The cookies used on this site are divided into categories. Below, you can find out more about each category and allow or deny some or all of them. Once you disable categories that were previously enabled, all cookies associated with that category will be deleted from your browser. You can also see a list of cookies that are assigned to each of the categories and detailed information in the cookie statement.',
    btnOk: 'accept all',
    btnSave: 'save settings',
    btnDeny: 'deny all',
    rHeading: 'Required Cookies',
    rText:
      'These cookies are necessary for the website to function and cannot be switched off in our systems. You can set your browser to block or alert you about these cookies, but this may affect how the website functions.',
    fHeading: 'Functional Cookies',
    fText:
      'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. These cookies also enable the website to provide enhanced functionality and personalization.',
    aHeading: 'Advertising Cookies',
    aText:
      'These cookies are capable of tracking your browser across other sites and building up a profile of your interests. They do not store direct personal information but are based on uniquely identifying your browser and internet device.',
  },
}`},description:"",name:"config",required:!1,type:{name:"GDPRConfig"}},onSave:{defaultValue:{value:`() => {
  // do nothing
}`},description:"",name:"onSave",required:!1,type:{name:"((consent: CookieConsentModel) => void)"}}}}}catch{}d.deleteItem(c.CookieConsent);const Ee={title:"UI/GDPR",component:T,tags:["autodocs"],argTypes:{}},C={play:async({canvasElement:t})=>{const n=M(t),a=n.getByText(/edit settings/i);B.click(a);const o=n.getByText(/accept all/i);B.click(o)}};var D,R,A;C.parameters={...C.parameters,docs:{...(D=C.parameters)==null?void 0:D.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const edit = canvas.getByText(/edit settings/i);
    userEvent.click(edit);
    const acceptAll = canvas.getByText(/accept all/i);
    userEvent.click(acceptAll);
  }
}`,...(A=(R=C.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};const xe=["Base"];export{C as Base,xe as __namedExportsOrder,Ee as default};
//# sourceMappingURL=GDPR.stories-0f262837.js.map
