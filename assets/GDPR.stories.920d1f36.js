import{r as l,j as d,a as M,R as ue,F as je}from"./jsx-runtime.32150abb.js";import{B as Z}from"./Button.b934acc0.js";import{u as Xe,a as Je}from"./react-spring-web.esm.a36baeac.js";import{_ as H,a as b,p as Ze,i as Qe,s as et,d as tt,u as Ie,c as ie,b as z,e as ke,f as Ce,g as Me,h as De,j as Se,k as Te,l as Ae,m as nt,n as ot,T as Be,o as xe,q as Fe,r as st,C as rt}from"./TransitionGroupContext.0da4ec86.js";import{r as it,R as se}from"./index.ed715f1c.js";/* empty css                             */import"./iframe.063fbb8b.js";import"./clsx.3b79bc83.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.36bbe845.js";var q=(e=>(e.CookieConsent="cookie_consent",e))(q||{});const at=(e,n)=>{try{const s=localStorage.getItem(e);return s?JSON.parse(s):n}catch{return n}},lt=(e,n)=>{try{localStorage.setItem(e,JSON.stringify(n))}catch(s){console.error(s)}},ct=e=>{try{localStorage.removeItem(e)}catch(n){console.error(n)}},Q={keys:q,getItem:at,setItem:lt,deleteItem:ct},pe=()=>{};function L(e){return e&&e.ownerDocument||document}function be(e){return L(e).defaultView||window}function dt(e){const n=e.documentElement.clientWidth;return Math.abs(window.innerWidth-n)}const ut=["sx"],ft=e=>{const n={systemProps:{},otherProps:{}};return Object.keys(e).forEach(s=>{Ze[s]?n.systemProps[s]=e[s]:n.otherProps[s]=e[s]}),n};function pt(e){const{sx:n}=e,s=H(e,ut),{systemProps:t,otherProps:r}=ft(s);let o;return Array.isArray(n)?o=[t,...n]:typeof n=="function"?o=(...i)=>{const a=n(...i);return Qe(a)?b({},t,a):t}:o=b({},t,n),b({},r,{sx:o})}const ht=["className","component"];function mt(e={}){const{defaultTheme:n,defaultClassName:s="MuiBox-root",generateClassName:t,styleFunctionSx:r=tt}=e,o=et("div",{shouldForwardProp:a=>a!=="theme"&&a!=="sx"&&a!=="as"})(r);return l.exports.forwardRef(function(c,u){const m=Ie(n),f=pt(c),{className:x,component:g="div"}=f,p=H(f,ht);return d(o,b({as:g,ref:u,className:ie(x,t?t(s):s),theme:m},p))})}function Le(e){return typeof e=="string"}function xt(e,n={},s){return Le(e)?n:b({},n,{ownerState:b({},n.ownerState,s)})}function bt(e,n=[]){if(e===void 0)return{};const s={};return Object.keys(e).filter(t=>t.match(/^on[A-Z]/)&&typeof e[t]=="function"&&!n.includes(t)).forEach(t=>{s[t]=e[t]}),s}function he(e,n){return typeof e=="function"?e(n):e}function Re(e){if(e===void 0)return{};const n={};return Object.keys(e).filter(s=>!(s.match(/^on[A-Z]/)&&typeof e[s]=="function")).forEach(s=>{n[s]=e[s]}),n}function gt(e){const{getSlotProps:n,additionalProps:s,externalSlotProps:t,externalForwardedProps:r,className:o}=e;if(!n){const g=ie(r==null?void 0:r.className,t==null?void 0:t.className,o,s==null?void 0:s.className),p=b({},s==null?void 0:s.style,r==null?void 0:r.style,t==null?void 0:t.style),S=b({},s,r,t);return g.length>0&&(S.className=g),Object.keys(p).length>0&&(S.style=p),{props:S,internalRef:void 0}}const i=bt(b({},r,t)),a=Re(t),c=Re(r),u=n(i),m=ie(u==null?void 0:u.className,s==null?void 0:s.className,o,r==null?void 0:r.className,t==null?void 0:t.className),f=b({},u==null?void 0:u.style,s==null?void 0:s.style,r==null?void 0:r.style,t==null?void 0:t.style),x=b({},u,s,c,a);return m.length>0&&(x.className=m),Object.keys(f).length>0&&(x.style=f),{props:x,internalRef:u.ref}}const yt=["elementType","externalSlotProps","ownerState"];function we(e){var n;const{elementType:s,externalSlotProps:t,ownerState:r}=e,o=H(e,yt),i=he(t,r),{props:a,internalRef:c}=gt(b({},o,{externalSlotProps:i})),u=z(c,z(i==null?void 0:i.ref,(n=e.additionalProps)==null?void 0:n.ref));return xt(s,b({},a,{ref:u}),r)}function vt(e){return typeof e=="function"?e():e}const Et=l.exports.forwardRef(function(n,s){const{children:t,container:r,disablePortal:o=!1}=n,[i,a]=l.exports.useState(null),c=z(l.exports.isValidElement(t)?t.ref:null,s);return ke(()=>{o||a(vt(r)||document.body)},[r,o]),ke(()=>{if(i&&!o)return Ce(s,i),()=>{Ce(s,null)}},[s,i,o]),o?l.exports.isValidElement(t)?l.exports.cloneElement(t,{ref:c}):t:i&&it.exports.createPortal(t,i)}),kt=Et;function Ct(e){const n=L(e);return n.body===e?be(e).innerWidth>n.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function ee(e,n){n?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Ne(e){return parseInt(be(e).getComputedStyle(e).paddingRight,10)||0}function St(e){const s=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,t=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return s||t}function Pe(e,n,s,t=[],r){const o=[n,s,...t];[].forEach.call(e.children,i=>{const a=o.indexOf(i)===-1,c=!St(i);a&&c&&ee(i,r)})}function fe(e,n){let s=-1;return e.some((t,r)=>n(t)?(s=r,!0):!1),s}function Tt(e,n){const s=[],t=e.container;if(!n.disableScrollLock){if(Ct(t)){const i=dt(L(t));s.push({value:t.style.paddingRight,property:"padding-right",el:t}),t.style.paddingRight=`${Ne(t)+i}px`;const a=L(t).querySelectorAll(".mui-fixed");[].forEach.call(a,c=>{s.push({value:c.style.paddingRight,property:"padding-right",el:c}),c.style.paddingRight=`${Ne(c)+i}px`})}let o;if(t.parentNode instanceof DocumentFragment)o=L(t).body;else{const i=t.parentElement,a=be(t);o=(i==null?void 0:i.nodeName)==="HTML"&&a.getComputedStyle(i).overflowY==="scroll"?i:t}s.push({value:o.style.overflow,property:"overflow",el:o},{value:o.style.overflowX,property:"overflow-x",el:o},{value:o.style.overflowY,property:"overflow-y",el:o}),o.style.overflow="hidden"}return()=>{s.forEach(({value:o,el:i,property:a})=>{o?i.style.setProperty(a,o):i.style.removeProperty(a)})}}function Rt(e){const n=[];return[].forEach.call(e.children,s=>{s.getAttribute("aria-hidden")==="true"&&n.push(s)}),n}class wt{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(n,s){let t=this.modals.indexOf(n);if(t!==-1)return t;t=this.modals.length,this.modals.push(n),n.modalRef&&ee(n.modalRef,!1);const r=Rt(s);Pe(s,n.mount,n.modalRef,r,!0);const o=fe(this.containers,i=>i.container===s);return o!==-1?(this.containers[o].modals.push(n),t):(this.containers.push({modals:[n],container:s,restore:null,hiddenSiblings:r}),t)}mount(n,s){const t=fe(this.containers,o=>o.modals.indexOf(n)!==-1),r=this.containers[t];r.restore||(r.restore=Tt(r,s))}remove(n,s=!0){const t=this.modals.indexOf(n);if(t===-1)return t;const r=fe(this.containers,i=>i.modals.indexOf(n)!==-1),o=this.containers[r];if(o.modals.splice(o.modals.indexOf(n),1),this.modals.splice(t,1),o.modals.length===0)o.restore&&o.restore(),n.modalRef&&ee(n.modalRef,s),Pe(o.container,n.mount,n.modalRef,o.hiddenSiblings,!1),this.containers.splice(r,1);else{const i=o.modals[o.modals.length-1];i.modalRef&&ee(i.modalRef,!1)}return t}isTopModal(n){return this.modals.length>0&&this.modals[this.modals.length-1]===n}}const Nt=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Pt(e){const n=parseInt(e.getAttribute("tabindex"),10);return Number.isNaN(n)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:n}function _t(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const n=t=>e.ownerDocument.querySelector(`input[type="radio"]${t}`);let s=n(`[name="${e.name}"]:checked`);return s||(s=n(`[name="${e.name}"]`)),s!==e}function Ot(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||_t(e))}function It(e){const n=[],s=[];return Array.from(e.querySelectorAll(Nt)).forEach((t,r)=>{const o=Pt(t);o===-1||!Ot(t)||(o===0?n.push(t):s.push({documentOrder:r,tabIndex:o,node:t}))}),s.sort((t,r)=>t.tabIndex===r.tabIndex?t.documentOrder-r.documentOrder:t.tabIndex-r.tabIndex).map(t=>t.node).concat(n)}function Mt(){return!0}function Dt(e){const{children:n,disableAutoFocus:s=!1,disableEnforceFocus:t=!1,disableRestoreFocus:r=!1,getTabbable:o=It,isEnabled:i=Mt,open:a}=e,c=l.exports.useRef(),u=l.exports.useRef(null),m=l.exports.useRef(null),f=l.exports.useRef(null),x=l.exports.useRef(null),g=l.exports.useRef(!1),p=l.exports.useRef(null),S=z(n.ref,p),C=l.exports.useRef(null);l.exports.useEffect(()=>{!a||!p.current||(g.current=!s)},[s,a]),l.exports.useEffect(()=>{if(!a||!p.current)return;const h=L(p.current);return p.current.contains(h.activeElement)||(p.current.hasAttribute("tabIndex")||p.current.setAttribute("tabIndex",-1),g.current&&p.current.focus()),()=>{r||(f.current&&f.current.focus&&(c.current=!0,f.current.focus()),f.current=null)}},[a]),l.exports.useEffect(()=>{if(!a||!p.current)return;const h=L(p.current),k=y=>{const{current:w}=p;if(w!==null){if(!h.hasFocus()||t||!i()||c.current){c.current=!1;return}if(!w.contains(h.activeElement)){if(y&&x.current!==y.target||h.activeElement!==x.current)x.current=null;else if(x.current!==null)return;if(!g.current)return;let v=[];if((h.activeElement===u.current||h.activeElement===m.current)&&(v=o(p.current)),v.length>0){var P,_;const O=Boolean(((P=C.current)==null?void 0:P.shiftKey)&&((_=C.current)==null?void 0:_.key)==="Tab"),$=v[0],K=v[v.length-1];O?K.focus():$.focus()}else w.focus()}}},R=y=>{C.current=y,!(t||!i()||y.key!=="Tab")&&h.activeElement===p.current&&y.shiftKey&&(c.current=!0,m.current.focus())};h.addEventListener("focusin",k),h.addEventListener("keydown",R,!0);const D=setInterval(()=>{h.activeElement.tagName==="BODY"&&k()},50);return()=>{clearInterval(D),h.removeEventListener("focusin",k),h.removeEventListener("keydown",R,!0)}},[s,t,r,i,a,o]);const T=h=>{f.current===null&&(f.current=h.relatedTarget),g.current=!0,x.current=h.target;const k=n.props.onFocus;k&&k(h)},I=h=>{f.current===null&&(f.current=h.relatedTarget),g.current=!0};return M(l.exports.Fragment,{children:[d("div",{tabIndex:a?0:-1,onFocus:I,ref:u,"data-testid":"sentinelStart"}),l.exports.cloneElement(n,{ref:S,onFocus:T}),d("div",{tabIndex:a?0:-1,onFocus:I,ref:m,"data-testid":"sentinelEnd"})]})}function At(e){return Me("MuiModal",e)}De("MuiModal",["root","hidden"]);const Bt=["children","classes","closeAfterTransition","component","components","componentsProps","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onKeyDown","open","onTransitionEnter","onTransitionExited"],Ft=e=>{const{open:n,exited:s,classes:t}=e;return Ae({root:["root",!n&&s&&"hidden"]},At,t)};function Lt(e){return typeof e=="function"?e():e}function Ht(e){return e.children?e.children.props.hasOwnProperty("in"):!1}const $t=new wt,Ut=l.exports.forwardRef(function(n,s){var t;const{children:r,classes:o,closeAfterTransition:i=!1,component:a="div",components:c={},componentsProps:u={},container:m,disableAutoFocus:f=!1,disableEnforceFocus:x=!1,disableEscapeKeyDown:g=!1,disablePortal:p=!1,disableRestoreFocus:S=!1,disableScrollLock:C=!1,hideBackdrop:T=!1,keepMounted:I=!1,manager:h=$t,onBackdropClick:k,onClose:R,onKeyDown:D,open:y,onTransitionEnter:w,onTransitionExited:P}=n,_=H(n,Bt),[v,O]=l.exports.useState(!0),$=l.exports.useRef({}),K=l.exports.useRef(null),E=l.exports.useRef(null),A=z(E,s),B=Ht(n),ae=(t=n["aria-hidden"])!=null?t:!0,$e=()=>L(K.current),ne=()=>($.current.modalRef=E.current,$.current.mountNode=K.current,$.current),ye=()=>{h.mount(ne(),{disableScrollLock:C}),E.current.scrollTop=0},ve=Se(()=>{const N=Lt(m)||$e().body;h.add(ne(),N),E.current&&ye()}),le=l.exports.useCallback(()=>h.isTopModal(ne()),[h]),Ue=Se(N=>{K.current=N,N&&(y&&le()?ye():ee(E.current,ae))}),j=l.exports.useCallback(()=>{h.remove(ne(),ae)},[h,ae]);l.exports.useEffect(()=>()=>{j()},[j]),l.exports.useEffect(()=>{y?ve():(!B||!i)&&j()},[y,j,B,i,ve]);const ce=b({},n,{classes:o,closeAfterTransition:i,disableAutoFocus:f,disableEnforceFocus:x,disableEscapeKeyDown:g,disablePortal:p,disableRestoreFocus:S,disableScrollLock:C,exited:v,hideBackdrop:T,keepMounted:I}),Ge=Ft(ce),qe=()=>{O(!1),w&&w()},ze=()=>{O(!0),P&&P(),i&&j()},Ke=N=>{N.target===N.currentTarget&&(k&&k(N),R&&R(N,"backdropClick"))},We=N=>{D&&D(N),!(N.key!=="Escape"||!le())&&(g||(N.stopPropagation(),R&&R(N,"escapeKeyDown")))},oe={};r.props.tabIndex===void 0&&(oe.tabIndex="-1"),B&&(oe.onEnter=Te(qe,r.props.onEnter),oe.onExited=Te(ze,r.props.onExited));const Ee=c.Root||a,Ve=we({elementType:Ee,externalSlotProps:u.root,externalForwardedProps:_,additionalProps:{ref:A,role:"presentation",onKeyDown:We},className:Ge.root,ownerState:ce}),de=c.Backdrop,Ye=we({elementType:de,externalSlotProps:u.backdrop,additionalProps:{"aria-hidden":!0,onClick:Ke,open:y},ownerState:ce});return!I&&!y&&(!B||v)?null:d(kt,{ref:Ue,container:m,disablePortal:p,children:M(Ee,b({},Ve,{children:[!T&&de?d(de,b({},Ye)):null,d(Dt,{disableEnforceFocus:x,disableAutoFocus:f,disableRestoreFocus:S,isEnabled:le,open:y,children:l.exports.cloneElement(r,oe)})]}))})}),Gt=Ut;function qt(){return Ie(nt)}const _e={disabled:!1};var zt=function(n){return n.scrollTop},J="unmounted",U="exited",G="entering",V="entered",me="exiting",F=function(e){ot(n,e);function n(t,r){var o;o=e.call(this,t,r)||this;var i=r,a=i&&!i.isMounting?t.enter:t.appear,c;return o.appearStatus=null,t.in?a?(c=U,o.appearStatus=G):c=V:t.unmountOnExit||t.mountOnEnter?c=J:c=U,o.state={status:c},o.nextCallback=null,o}n.getDerivedStateFromProps=function(r,o){var i=r.in;return i&&o.status===J?{status:U}:null};var s=n.prototype;return s.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},s.componentDidUpdate=function(r){var o=null;if(r!==this.props){var i=this.state.status;this.props.in?i!==G&&i!==V&&(o=G):(i===G||i===V)&&(o=me)}this.updateStatus(!1,o)},s.componentWillUnmount=function(){this.cancelNextCallback()},s.getTimeouts=function(){var r=this.props.timeout,o,i,a;return o=i=a=r,r!=null&&typeof r!="number"&&(o=r.exit,i=r.enter,a=r.appear!==void 0?r.appear:i),{exit:o,enter:i,appear:a}},s.updateStatus=function(r,o){if(r===void 0&&(r=!1),o!==null)if(this.cancelNextCallback(),o===G){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:se.findDOMNode(this);i&&zt(i)}this.performEnter(r)}else this.performExit();else this.props.unmountOnExit&&this.state.status===U&&this.setState({status:J})},s.performEnter=function(r){var o=this,i=this.props.enter,a=this.context?this.context.isMounting:r,c=this.props.nodeRef?[a]:[se.findDOMNode(this),a],u=c[0],m=c[1],f=this.getTimeouts(),x=a?f.appear:f.enter;if(!r&&!i||_e.disabled){this.safeSetState({status:V},function(){o.props.onEntered(u)});return}this.props.onEnter(u,m),this.safeSetState({status:G},function(){o.props.onEntering(u,m),o.onTransitionEnd(x,function(){o.safeSetState({status:V},function(){o.props.onEntered(u,m)})})})},s.performExit=function(){var r=this,o=this.props.exit,i=this.getTimeouts(),a=this.props.nodeRef?void 0:se.findDOMNode(this);if(!o||_e.disabled){this.safeSetState({status:U},function(){r.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:me},function(){r.props.onExiting(a),r.onTransitionEnd(i.exit,function(){r.safeSetState({status:U},function(){r.props.onExited(a)})})})},s.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},s.safeSetState=function(r,o){o=this.setNextCallback(o),this.setState(r,o)},s.setNextCallback=function(r){var o=this,i=!0;return this.nextCallback=function(a){i&&(i=!1,o.nextCallback=null,r(a))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},s.onTransitionEnd=function(r,o){this.setNextCallback(o);var i=this.props.nodeRef?this.props.nodeRef.current:se.findDOMNode(this),a=r==null&&!this.props.addEndListener;if(!i||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var c=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],u=c[0],m=c[1];this.props.addEndListener(u,m)}r!=null&&setTimeout(this.nextCallback,r)},s.render=function(){var r=this.state.status;if(r===J)return null;var o=this.props,i=o.children;o.in,o.mountOnEnter,o.unmountOnExit,o.appear,o.enter,o.exit,o.timeout,o.addEndListener,o.onEnter,o.onEntering,o.onEntered,o.onExit,o.onExiting,o.onExited,o.nodeRef;var a=H(o,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return d(Be.Provider,{value:null,children:typeof i=="function"?i(r,a):ue.cloneElement(ue.Children.only(i),a)})},n}(ue.Component);F.contextType=Be;F.propTypes={};function W(){}F.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:W,onEntering:W,onEntered:W,onExit:W,onExiting:W,onExited:W};F.UNMOUNTED=J;F.EXITED=U;F.ENTERING=G;F.ENTERED=V;F.EXITING=me;const Kt=F,Wt=e=>e.scrollTop;function Oe(e,n){var s,t;const{timeout:r,easing:o,style:i={}}=e;return{duration:(s=i.transitionDuration)!=null?s:typeof r=="number"?r:r[n.mode]||0,easing:(t=i.transitionTimingFunction)!=null?t:typeof o=="object"?o[n.mode]:o,delay:i.transitionDelay}}const Vt=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],Yt={entering:{opacity:1},entered:{opacity:1}},jt=l.exports.forwardRef(function(n,s){const t=qt(),r={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},{addEndListener:o,appear:i=!0,children:a,easing:c,in:u,onEnter:m,onEntered:f,onEntering:x,onExit:g,onExited:p,onExiting:S,style:C,timeout:T=r,TransitionComponent:I=Kt}=n,h=H(n,Vt),k=l.exports.useRef(null),R=z(a.ref,s),D=z(k,R),y=E=>A=>{if(E){const B=k.current;A===void 0?E(B):E(B,A)}},w=y(x),P=y((E,A)=>{Wt(E);const B=Oe({style:C,timeout:T,easing:c},{mode:"enter"});E.style.webkitTransition=t.transitions.create("opacity",B),E.style.transition=t.transitions.create("opacity",B),m&&m(E,A)}),_=y(f),v=y(S),O=y(E=>{const A=Oe({style:C,timeout:T,easing:c},{mode:"exit"});E.style.webkitTransition=t.transitions.create("opacity",A),E.style.transition=t.transitions.create("opacity",A),g&&g(E)}),$=y(p);return d(I,b({appear:i,in:u,nodeRef:k,onEnter:P,onEntered:_,onEntering:w,onExit:O,onExited:$,onExiting:v,addEndListener:E=>{o&&o(k.current,E)},timeout:T},h,{children:(E,A)=>l.exports.cloneElement(a,b({style:b({opacity:0,visibility:E==="exited"&&!u?"hidden":void 0},Yt[E],C,a.props.style),ref:D},A))}))}),Xt=jt;function Jt(e){return Me("MuiBackdrop",e)}De("MuiBackdrop",["root","invisible"]);const Zt=["children","component","components","componentsProps","className","invisible","open","transitionDuration","TransitionComponent"],Qt=e=>{const{classes:n,invisible:s}=e;return Ae({root:["root",s&&"invisible"]},Jt,n)},en=xe("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:s}=e;return[n.root,s.invisible&&n.invisible]}})(({ownerState:e})=>b({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),tn=l.exports.forwardRef(function(n,s){var t,r;const o=Fe({props:n,name:"MuiBackdrop"}),{children:i,component:a="div",components:c={},componentsProps:u={},className:m,invisible:f=!1,open:x,transitionDuration:g,TransitionComponent:p=Xt}=o,S=H(o,Zt),C=b({},o,{component:a,invisible:f}),T=Qt(C);return d(p,b({in:x,timeout:g},S,{children:d(en,{"aria-hidden":!0,as:(t=c.Root)!=null?t:a,className:ie(T.root,m),ownerState:b({},C,(r=u.root)==null?void 0:r.ownerState),classes:T,ref:s,children:i})}))}),He=tn,nn=st(),on=mt({defaultTheme:nn,defaultClassName:"MuiBox-root",generateClassName:rt.generate}),sn=on,rn=["BackdropComponent","BackdropProps","closeAfterTransition","children","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","theme"],an=e=>e.classes,ln=xe("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:s}=e;return[n.root,!s.open&&s.exited&&n.hidden]}})(({theme:e,ownerState:n})=>b({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!n.open&&n.exited&&{visibility:"hidden"})),cn=xe(He,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,n)=>n.backdrop})({zIndex:-1}),dn=l.exports.forwardRef(function(n,s){var t,r;const o=Fe({name:"MuiModal",props:n}),{BackdropComponent:i=cn,BackdropProps:a,closeAfterTransition:c=!1,children:u,component:m,components:f={},componentsProps:x={},disableAutoFocus:g=!1,disableEnforceFocus:p=!1,disableEscapeKeyDown:S=!1,disablePortal:C=!1,disableRestoreFocus:T=!1,disableScrollLock:I=!1,hideBackdrop:h=!1,keepMounted:k=!1,theme:R}=o,D=H(o,rn),[y,w]=l.exports.useState(!0),P={closeAfterTransition:c,disableAutoFocus:g,disableEnforceFocus:p,disableEscapeKeyDown:S,disablePortal:C,disableRestoreFocus:T,disableScrollLock:I,hideBackdrop:h,keepMounted:k},_=b({},o,P,{exited:y}),v=an(_),O=(t=(r=f.Root)!=null?r:m)!=null?t:ln;return d(Gt,b({components:b({Root:O,Backdrop:i},f),componentsProps:{root:()=>b({},he(x.root,_),!Le(O)&&{as:m,theme:R}),backdrop:()=>b({},a,he(x.backdrop,_))},onTransitionEnter:()=>w(!1),onTransitionExited:()=>w(!0),ref:s},D,{classes:v},P,{children:u}))}),un=dn;var fn="pmkghl0";const pn=l.exports.forwardRef(function(n,s){const{in:t,children:r,onEnter:o,onExited:i,...a}=n,c=Xe({from:{opacity:0},to:{opacity:t?1:0},onStart:()=>{t&&o&&o()},onRest:()=>{!t&&i&&i()}});return d(Je.div,{ref:s,style:c,...a,children:r})}),re=({handleClose:e,handleOpen:n,open:s,children:t})=>d(un,{open:s,onClose:e,closeAfterTransition:!0,BackdropComponent:He,BackdropProps:{timeout:500},sx:{zIndex:"10998"},children:d(pn,{in:s,children:d(sn,{className:fn,children:t})})});try{re.displayName="SAModal",re.__docgenInfo={description:"",displayName:"SAModal",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},handleOpen:{defaultValue:null,description:"",name:"handleOpen",required:!0,type:{name:"() => void"}},handleClose:{defaultValue:null,description:"",name:"handleClose",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/modal/SAModal.tsx#SAModal"]={docgenInfo:re.__docgenInfo,name:"SAModal",path:"src/components/modal/SAModal.tsx#SAModal"})}catch{}const ge=l.exports.createContext({setConsent:pe,onSave:pe,config:{}});var X={cookieContainer:"_1ona0o70",cookieHead:"_1ona0o71",cookieText:"_1ona0o72",cookieLink:"_1ona0o73",cookieBtns:"_1ona0o74"};var hn="zf1b112",mn="zf1b110 _16vbc6o0",xn="zf1b111",bn="zf1b114",gn="zf1b113",yn="zf1b118",vn="zf1b115",En="zf1b116",kn="zf1b117";var Cn="_1h2jwbd2",Sn="_1h2jwbd1",Tn="_1h2jwbd0";const Y=({id:e,title:n,text:s,checked:t,disabled:r=!1,onChange:o})=>{const i=l.exports.useMemo(()=>`switch-${e}`,[e]);return M("div",{className:vn,children:[M("div",{className:Tn,children:[d("input",{className:Cn,type:"checkbox",id:i,onChange:o,checked:t,disabled:r}),d("label",{htmlFor:i,className:Sn})]}),M("div",{children:[d("span",{className:En,children:n}),d("p",{className:kn,children:s})]})]})};try{Y.displayName="SwitchConsentItem",Y.__docgenInfo={description:"",displayName:"SwitchConsentItem",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement> | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/gdpr/SwitchConsentItem.tsx#SwitchConsentItem"]={docgenInfo:Y.__docgenInfo,name:"SwitchConsentItem",path:"src/components/gdpr/SwitchConsentItem.tsx#SwitchConsentItem"})}catch{}const Rn=()=>{var c,u,m,f,x,g,p,S,C,T,I,h,k,R,D,y,w,P,_;const[e,n]=l.exports.useState({advertising:!1,required:!0,functional:!1}),{setConsent:s,config:t,onSave:r}=l.exports.useContext(ge),o=l.exports.useCallback(()=>{const v={advertising:!1,functional:!1,required:!0};Q.setItem(q.CookieConsent,v),s(!0),r(v)},[r]),i=l.exports.useCallback(()=>{const v={advertising:!0,functional:!0,required:!0};Q.setItem(q.CookieConsent,v),s(!0),r(v)},[e,r]),a=l.exports.useCallback(()=>{Q.setItem(q.CookieConsent,e),s(!0),r(e)},[e,r]);return M("div",{className:mn,onClick:v=>v.stopPropagation(),children:[d("h2",{className:xn,children:(c=t.modal)==null?void 0:c.heading}),d("p",{className:gn,children:(u=t.modal)==null?void 0:u.text}),d("a",{className:bn,href:(m=t.findOut)==null?void 0:m.link,target:"_blank",children:(f=t.findOut)==null?void 0:f.text}),M("div",{className:hn,children:[d(Z,{onClick:i,children:(x=t.modal)==null?void 0:x.btnOk}),d(Z,{onClick:o,color:"secondary",children:(g=t.modal)==null?void 0:g.btnDeny})]}),d(Y,{id:"r",disabled:!0,title:(S=(p=t.modal)==null?void 0:p.rHeading)!=null?S:"",checked:e.required,text:(T=(C=t.modal)==null?void 0:C.rText)!=null?T:""}),d(Y,{id:"f",title:(h=(I=t.modal)==null?void 0:I.fHeading)!=null?h:"",checked:e.functional,onChange:v=>n(O=>({...O,functional:v.target.checked})),text:(R=(k=t.modal)==null?void 0:k.fText)!=null?R:""}),d(Y,{id:"a",title:(y=(D=t.modal)==null?void 0:D.aHeading)!=null?y:"",checked:e.advertising,onChange:v=>n(O=>({...O,advertising:v.target.checked})),text:(P=(w=t.modal)==null?void 0:w.aText)!=null?P:""}),d("div",{className:yn,children:d(Z,{onClick:a,children:(_=t.modal)==null?void 0:_.btnSave})})]})},wn=()=>{var c,u,m,f,x,g;const{setConsent:e,config:n,onSave:s}=l.exports.useContext(ge),[t,r]=l.exports.useState(!1),o=l.exports.useCallback(()=>{const p={required:!0,advertising:!0,functional:!0};Q.setItem(q.CookieConsent,p),e(!0),s(p)},[s]),i=l.exports.useCallback(()=>{r(!0)},[]),a=l.exports.useCallback(()=>{r(!1)},[]);return M(je,{children:[M("div",{className:X.cookieContainer,children:[M("div",{children:[d("h1",{className:X.cookieHead,children:(c=n.banner)==null?void 0:c.heading}),M("p",{className:X.cookieText,children:[(u=n.banner)==null?void 0:u.text," ",d("a",{className:X.cookieLink,href:(m=n.findOut)==null?void 0:m.link,target:"_blank",children:(f=n.findOut)==null?void 0:f.text})]})]}),M("div",{className:X.cookieBtns,children:[d(Z,{onClick:o,children:(x=n.banner)==null?void 0:x.btnOk}),d(Z,{onClick:i,color:"secondary",children:(g=n.banner)==null?void 0:g.btnEdit})]})]}),d(re,{open:t,handleClose:a,handleOpen:i,children:d(Rn,{})})]})},Nn={banner:{heading:"Cookies",text:"We use cookies to collect and analyze information about the performance and use of the website, to ensure the functioning of social media functions, and to improve and customize content and advertising.",btnOk:"accept all",btnEdit:"edit settings"},findOut:{text:"Find out more",link:"https://www.sensearena.com/terms-and-conditions"},modal:{heading:"Information about cookies on this website",text:"The cookies used on this site are divided into categories. Below, you can find out more about each category and allow or deny some or all of them. Once you disable categories that were previously enabled, all cookies associated with that category will be deleted from your browser. You can also see a list of cookies that are assigned to each of the categories and detailed information in the cookie statement.",btnOk:"accept all",btnSave:"save settings",btnDeny:"deny all",rHeading:"Required Cookies",rText:"These cookies are necessary for the website to function and cannot be switched off in our systems. You can set your browser to block or alert you about these cookies, but this may affect how the website functions.",fHeading:"Functional Cookies",fText:"These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. These cookies also enable the website to provide enhanced functionality and personalization.",aHeading:"Advertising Cookies",aText:"These cookies are capable of tracking your browser across other sites and building up a profile of your interests. They do not store direct personal information but are based on uniquely identifying your browser and internet device."}},te=({config:e=Nn,onSave:n=pe})=>{const[s,t]=l.exports.useState(!0);return l.exports.useEffect(()=>{t(!!Q.getItem(q.CookieConsent,null))},[]),s?null:d(ge.Provider,{value:{setConsent:t,config:e,onSave:n},children:d(wn,{})})};try{te.displayName="GDPR",te.__docgenInfo={description:"",displayName:"GDPR",props:{config:{defaultValue:{value:`{
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
}`},description:"",name:"config",required:!1,type:{name:"GDPRConfig | undefined"}},onSave:{defaultValue:{value:`() => {
  // do nothing
}`},description:"",name:"onSave",required:!1,type:{name:"((consent: CookieConsentModel) => void) | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/gdpr/GDPR.tsx#GDPR"]={docgenInfo:te.__docgenInfo,name:"GDPR",path:"src/components/gdpr/GDPR.tsx#GDPR"})}catch{}const $n={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { GDPR } from '../components/gdpr';

export default {
  title: 'UI/GDPR',
  component: GDPR,
  argTypes: {},
} as ComponentMeta<typeof GDPR>;

const Template: ComponentStory<typeof GDPR> = args => <GDPR {...args} />;

export const Base = Template.bind({});
Base.args = {
  onSave: console.debug,
};
`,locationsMap:{base:{startLoc:{col:46,line:10},endLoc:{col:72,line:10},startBody:{col:46,line:10},endBody:{col:72,line:10}}}}},title:"UI/GDPR",component:te,argTypes:{}},Pn=e=>d(te,{...e}),_n=Pn.bind({});_n.args={onSave:console.debug};const Un=["Base"];export{_n as Base,Un as __namedExportsOrder,$n as default};
//# sourceMappingURL=GDPR.stories.920d1f36.js.map