import{w as A,u as D}from"./index-5b05281e.js";import{r as s,R as e}from"./index-8db94870.js";/* empty css                            */import{c as E}from"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import{B as y}from"./Button-525f00fe.js";import{M as F}from"./Modal-e4a7b316.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-356e4a49.js";import"./clsx-9a51c995.js";import"./Spinner-fd0f03f8.js";import"./index-df04aa12.js";import"./index-8ce4a492.js";import"./IconButton-3c3acd4a.js";import"./CloseIcon-0550241e.js";import"./Card-07587c81.js";import"./Divider-68d6f362.js";import"./Heading-3d43fd8f.js";import"./typography.style.css-07f25ccc.js";const T=()=>{};var c=(a=>(a.CookieConsent="cookie_consent",a))(c||{});const P=(a,n)=>{try{const o=localStorage.getItem(a);return o?JSON.parse(o):n}catch{return n}},Y=(a,n)=>{try{localStorage.setItem(a,JSON.stringify(n))}catch(o){console.error(o)}},j=a=>{try{localStorage.removeItem(a)}catch(n){console.error(n)}},u={getItem:P,setItem:Y,deleteItem:j};var S={colors:{red:"var(--sa-red)",redShade:"var(--sa-red-shade)",green:"var(--sa-green)",greenShade:"var(--sa-green-shade)",redDarken:"var(--sa-red-darken)",white:"var(--sa-white)",black:"var(--sa-black)",grey:"var(--sa-grey)",greyLight:"var(--sa-grey-light)",greyDark:"var(--sa-grey-dark)",blackMetal:"var(--sa-black-metal)",blackMetalShade:"var(--sa-black-metal-shade)",text:"var(--sa-text)",ctaDark:"var(--sa-cta-dark)",greyLight2:"var(--sa-grey-light-2)",logoBlack:"var(--sa-logo-black)",blueCola:"var(--sa-blue-cola)",orange:"var(--sa-orange)",atpYellow:"var(--sa-atp-yellow)",atpNavy:"var(--sa-atp-navy)",atpBlue:"var(--sa-atp-blue)",atpBlack:"var(--sa-atp-black)",atpGrey:"var(--sa-atp-grey)",atpGreen:"var(--sa-atp-green)",atpNavyShade:"var(--sa-atp-navy-shade)",nhlBlack80:"var(--sa-nhl-black-80)",nhlGrey:"var(--sa-nhl-grey)",nhlGreyDark:"var(--sa-nhl-grey-dark)",nhlGreyLight:"var(--sa-nhl-grey-light)",nhlRedDark:"var(--sa-nhl-red-dark)",nhlRedLight:"var(--sa-nhl-red-light)"},font:{family:"var(--sa-font)",atpFamily:"var(--sa-atp-font)"},zIndex:{menu:"var(--sa-menu)",menuSide:"var(--sa-menu-side)",playerOverlay:"var(--sa-player-overlay)",modal:"var(--sa-modal)",gdpr:"var(--sa-gdpr)",dropdown:"var(--sa-dropdown)"}};var J="_1h2jwbd2",W="_1h2jwbd1",U="_1h2jwbd0";var $="zf1b116",K=E({defaultClassName:"zf1b110",variantClassNames:{isOld:{true:"zf1b111"}},defaultVariants:{},compoundVariants:[]}),Q=E({defaultClassName:"zf1b112",variantClassNames:{variant:{atp:"zf1b113",nhl:"zf1b114",old:"zf1b115"}},defaultVariants:{},compoundVariants:[]}),X="zf1b118",Z="zf1b117",ee="zf1b11c",ae="zf1b119",te="zf1b11a",ne="zf1b11b";const C=({id:a,title:n,text:o,checked:t,disabled:r=!1,onChange:i})=>{const d=s.useMemo(()=>`switch-${a}`,[a]);return e.createElement("div",{className:ae},e.createElement("div",{className:U},e.createElement("input",{className:J,type:"checkbox",id:d,onChange:i,checked:t,disabled:r}),e.createElement("label",{htmlFor:d,className:W})),e.createElement("div",null,e.createElement("span",{className:te},n),e.createElement("p",{className:ne},o)))};try{C.displayName="SwitchConsentItem",C.__docgenInfo={description:"",displayName:"SwitchConsentItem",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}const B=s.createContext({setConsent:T,onSave:T,config:{},variant:"old"}),oe=()=>{var m,p,h,v,f,g,b,O,z,q,R,V,H;const[a,n]=s.useState({advertising:!1,required:!0,functional:!1}),{setConsent:o,config:t,onSave:r,variant:i}=s.useContext(B),d=s.useCallback(()=>{const l={advertising:!1,functional:!1,required:!0};u.setItem(c.CookieConsent,l),o(!0),r(l)},[r]),_=s.useCallback(()=>{const l={advertising:!0,functional:!0,required:!0};u.setItem(c.CookieConsent,l),o(!0),r(l)},[a,r]),x=s.useCallback(()=>{u.setItem(c.CookieConsent,a),o(!0),r(a)},[a,r]);return e.createElement("div",{className:K({isOld:i==="old"}),onClick:l=>l.stopPropagation()},e.createElement("h2",{className:Q({variant:i})},(m=t.modal)==null?void 0:m.heading),e.createElement("p",{className:Z},(p=t.modal)==null?void 0:p.text),e.createElement("a",{className:X,href:(h=t.findOut)==null?void 0:h.link,target:"_blank"},(v=t.findOut)==null?void 0:v.text),e.createElement("div",{className:$},e.createElement(y,{onClick:_,style:{borderRadius:i!=="old"?0:void 0,background:i==="atp"?S.colors.atpBlue:void 0}},(f=t.modal)==null?void 0:f.btnOk),e.createElement(y,{style:{borderRadius:i!=="old"?0:void 0},onClick:d,color:"secondary"},(g=t.modal)==null?void 0:g.btnDeny)),e.createElement(C,{id:"r",disabled:!0,title:((b=t.modal)==null?void 0:b.rHeading)??"",checked:a.required,text:((O=t.modal)==null?void 0:O.rText)??""}),e.createElement(C,{id:"f",title:((z=t.modal)==null?void 0:z.fHeading)??"",checked:a.functional,onChange:l=>n(N=>({...N,functional:l.target.checked})),text:((q=t.modal)==null?void 0:q.fText)??""}),e.createElement(C,{id:"a",title:((R=t.modal)==null?void 0:R.aHeading)??"",checked:a.advertising,onChange:l=>n(N=>({...N,advertising:l.target.checked})),text:((V=t.modal)==null?void 0:V.aText)??""}),e.createElement("div",{className:ee},e.createElement(y,{onClick:x,style:{borderRadius:i!=="old"?0:void 0,background:i==="atp"?S.colors.atpBlue:void 0}},(H=t.modal)==null?void 0:H.btnSave)))};var k={cookieContainer:E({defaultClassName:"_1ona0o70",variantClassNames:{variant:{atp:"_1ona0o71",nhl:"_1ona0o72",old:"_1ona0o73"}},defaultVariants:{},compoundVariants:[]}),cookieHead:E({defaultClassName:"_1ona0o74",variantClassNames:{variant:{atp:"_1ona0o75",nhl:"_1ona0o76",old:"_1ona0o77"}},defaultVariants:{},compoundVariants:[]}),cookieText:"_1ona0o78",cookieLink:"_1ona0o79",cookieBtns:"_1ona0o7a"};const se=()=>{var m,p,h,v,f,g;const{setConsent:a,config:n,onSave:o,variant:t}=s.useContext(B),[r,i]=s.useState(!1),d=s.useCallback(()=>{const b={required:!0,advertising:!0,functional:!0};u.setItem(c.CookieConsent,b),a(!0),o(b)},[o]),_=s.useCallback(()=>{i(!0)},[]),x=s.useCallback(()=>{i(!1)},[]);return e.createElement(e.Fragment,null,e.createElement("div",{className:k.cookieContainer({variant:t})},e.createElement("div",null,e.createElement("h1",{className:k.cookieHead({variant:t})},(m=n.banner)==null?void 0:m.heading),e.createElement("p",{className:k.cookieText},(p=n.banner)==null?void 0:p.text," ",e.createElement("a",{className:k.cookieLink,href:(h=n.findOut)==null?void 0:h.link,target:"_blank"},(v=n.findOut)==null?void 0:v.text))),e.createElement("div",{className:k.cookieBtns},e.createElement(y,{onClick:d,dataSAId:"gdpr-accept-all",style:{borderRadius:t!=="old"?0:void 0,background:t==="atp"?S.colors.atpBlue:void 0}},(f=n.banner)==null?void 0:f.btnOk),e.createElement(y,{onClick:_,dataSAId:"gdpr-edit-settings",color:"secondary",style:{borderRadius:t!=="old"?0:void 0}},(g=n.banner)==null?void 0:g.btnEdit))),e.createElement(F,{open:r,handleClose:x,withCard:!1},e.createElement(oe,null)))},re={banner:{heading:"Cookies",text:"We use cookies to collect and analyze information about the performance and use of the website, to ensure the functioning of social media functions, and to improve and customize content and advertising.",btnOk:"accept all",btnEdit:"edit settings"},findOut:{text:"Find out more",link:"https://www.sensearena.com/terms-and-conditions"},modal:{heading:"Information about cookies on this website",text:"The cookies used on this site are divided into categories. Below, you can find out more about each category and allow or deny some or all of them. Once you disable categories that were previously enabled, all cookies associated with that category will be deleted from your browser. You can also see a list of cookies that are assigned to each of the categories and detailed information in the cookie statement.",btnOk:"accept all",btnSave:"save settings",btnDeny:"deny all",rHeading:"Required Cookies",rText:"These cookies are necessary for the website to function and cannot be switched off in our systems. You can set your browser to block or alert you about these cookies, but this may affect how the website functions.",fHeading:"Functional Cookies",fText:"These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. These cookies also enable the website to provide enhanced functionality and personalization.",aHeading:"Advertising Cookies",aText:"These cookies are capable of tracking your browser across other sites and building up a profile of your interests. They do not store direct personal information but are based on uniquely identifying your browser and internet device."}},I=({config:a=re,onSave:n=T,variant:o="old"})=>{const[t,r]=s.useState(!0);return s.useEffect(()=>{r(!!u.getItem(c.CookieConsent,null))},[]),t?null:e.createElement(B.Provider,{value:{setConsent:r,config:a,onSave:n,variant:o}},e.createElement(se,null))};try{I.displayName="GDPR",I.__docgenInfo={description:"",displayName:"GDPR",props:{config:{defaultValue:{value:`{
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
}`},description:"",name:"onSave",required:!1,type:{name:"((consent: CookieConsentModel) => void)"}},variant:{defaultValue:{value:"old"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"atp"'},{value:'"nhl"'},{value:'"old"'}]}}}}}catch{}u.deleteItem(c.CookieConsent);const Ne={title:"UI/GDPR",component:I,tags:["autodocs"],argTypes:{}},w={play:async({canvasElement:a})=>{const n=A(a),o=n.getByText(/edit settings/i);D.click(o);const t=n.getByText(/accept all/i);D.click(t)}};var G,M,L;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const edit = canvas.getByText(/edit settings/i);
    userEvent.click(edit);
    const acceptAll = canvas.getByText(/accept all/i);
    userEvent.click(acceptAll);
  }
}`,...(L=(M=w.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};const Te=["Base"];export{w as Base,Te as __namedExportsOrder,Ne as default};
//# sourceMappingURL=GDPR.stories-12fcee59.js.map
