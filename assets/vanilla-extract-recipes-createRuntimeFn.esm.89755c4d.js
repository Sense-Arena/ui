const d=(...r)=>r.filter(Boolean).join(" ");function b(r,n,e){return n in r?Object.defineProperty(r,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[n]=e,r}function o(r,n){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable})),e.push.apply(e,t)}return e}function O(r){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?o(Object(e),!0).forEach(function(t){b(r,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach(function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))})}return r}var v=(r,n,e)=>{for(var t of Object.keys(r)){var a;if(r[t]!==((a=n[t])!==null&&a!==void 0?a:e[t]))return!1}return!0},c=r=>n=>{var e=r.defaultClassName,t=O(O({},r.defaultVariants),n);for(var a in t){var f,l=(f=t[a])!==null&&f!==void 0?f:r.defaultVariants[a];if(l!=null){var u=l;typeof u=="boolean"&&(u=u===!0?"true":"false");var p=r.variantClassNames[a][u];p&&(e+=" "+p)}}for(var[i,s]of r.compoundVariants)v(i,t,r.defaultVariants)&&(e+=" "+s);return e};export{d as a,c};
//# sourceMappingURL=vanilla-extract-recipes-createRuntimeFn.esm.89755c4d.js.map