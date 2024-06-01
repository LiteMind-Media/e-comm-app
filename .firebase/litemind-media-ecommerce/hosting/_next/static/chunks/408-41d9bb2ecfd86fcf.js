(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[408],{4780:function(e,t,r){"use strict";r.r(t),r.d(t,{Button:function(){return s}});var o=r(7437);r(2265);var n=r(1396),a=r.n(n),i=r(7636),l=r.n(i);let s=e=>{let{el:t="link",label:r,newTab:n,href:i,appearance:s,className:c,onClick:d,type:u="button",disabled:p,invert:m}=e,v=t,y=n?{target:"_blank",rel:"noopener noreferrer"}:{},f=[l().button,c,l()["appearance--".concat(s)],m&&l()["".concat(s,"--invert")]].filter(Boolean).join(" "),h=(0,o.jsx)("div",{className:l().content,children:(0,o.jsx)("span",{className:l().label,children:r})});if((d||"submit"===u)&&(v="button"),"link"===v)return(0,o.jsx)(a(),{href:i||"",className:f,...y,onClick:d,children:h});let g=v;return(0,o.jsx)(g,{href:i,className:f,type:u,...y,onClick:d,disabled:p,children:h})}},7992:function(e,t,r){"use strict";r.d(t,{H:function(){return i},a:function(){return l}});var o=r(7437),n=r(2265);let a=(0,n.createContext)({}),i=e=>{let{children:t}=e,[r,i]=(0,n.useState)(),[l,s]=(0,n.useState)(),c=(0,n.useCallback)(async e=>{try{let r=await fetch("".concat("http://webapps.litemindmedia.com","/api/users/create"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,password:e.password,passwordConfirm:e.passwordConfirm})});if(r.ok){var t;let{data:e,errors:o}=await r.json();if(o)throw Error(o[0].message);i(null==e?void 0:null===(t=e.loginUser)||void 0===t?void 0:t.user),s("loggedIn")}else throw Error("Invalid login")}catch(e){throw Error("An error occurred while attempting to login.")}},[]),d=(0,n.useCallback)(async e=>{try{let t=await fetch("".concat("http://webapps.litemindmedia.com","/api/users/login"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,password:e.password})});if(t.ok){let{user:e,errors:r}=await t.json();if(r)throw Error(r[0].message);return i(e),s("loggedIn"),e}throw Error("Invalid login")}catch(e){throw Error("An error occurred while attempting to login.")}},[]),u=(0,n.useCallback)(async()=>{try{let e=await fetch("".concat("http://webapps.litemindmedia.com","/api/users/logout"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"}});if(e.ok)i(null),s("loggedOut");else throw Error("An error occurred while attempting to logout.")}catch(e){throw Error("An error occurred while attempting to logout.")}},[]);(0,n.useEffect)(()=>{let e=async()=>{try{let e=await fetch("".concat("http://webapps.litemindmedia.com","/api/users/me"),{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}});if(e.ok){let{user:t}=await e.json();i(t||null),s(t?"loggedIn":void 0)}else throw Error("An error occurred while fetching your account.")}catch(e){throw i(null),Error("An error occurred while fetching your account.")}};e()},[]);let p=(0,n.useCallback)(async e=>{try{let r=await fetch("".concat("http://webapps.litemindmedia.com","/api/users/forgot-password"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email})});if(r.ok){var t;let{data:e,errors:o}=await r.json();if(o)throw Error(o[0].message);i(null==e?void 0:null===(t=e.loginUser)||void 0===t?void 0:t.user)}else throw Error("Invalid login")}catch(e){throw Error("An error occurred while attempting to login.")}},[]),m=(0,n.useCallback)(async e=>{try{let o=await fetch("".concat("http://webapps.litemindmedia.com","/api/users/reset-password"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e.password,passwordConfirm:e.passwordConfirm,token:e.token})});if(o.ok){var t,r;let{data:e,errors:n}=await o.json();if(n)throw Error(n[0].message);i(null==e?void 0:null===(t=e.loginUser)||void 0===t?void 0:t.user),s((null==e?void 0:null===(r=e.loginUser)||void 0===r?void 0:r.user)?"loggedIn":void 0)}else throw Error("Invalid login")}catch(e){throw Error("An error occurred while attempting to login.")}},[]);return(0,o.jsx)(a.Provider,{value:{user:r,setUser:i,login:d,logout:u,create:c,resetPassword:m,forgotPassword:p,status:l},children:t})},l=()=>(0,n.useContext)(a)},6272:function(e,t,r){"use strict";r.d(t,{Z:function(){return d},j:function(){return s}});var o=r(7437),n=r(2265),a=r(7992);let i=(e,t)=>{var r,o,n;switch(t.type){case"SET_CART":return t.payload;case"MERGE_CART":{let{payload:r}=t,o=[...(null==e?void 0:e.items)||[],...(null==r?void 0:r.items)||[]].reduce((e,t)=>{var r;let o="string"==typeof t.product?t.product:null==t?void 0:null===(r=t.product)||void 0===r?void 0:r.id,n=e.findIndex(e=>{let{product:t}=e;return"string"==typeof t?t===o:(null==t?void 0:t.id)===o});return n>-1?e[n]={...e[n]}:e.push(t),e},[]);return{...e,items:o}}case"ADD_ITEM":{let{payload:n}=t,a="string"==typeof n.product?n.product:null==n?void 0:null===(r=n.product)||void 0===r?void 0:r.id,i=null==e?void 0:null===(o=e.items)||void 0===o?void 0:o.findIndex(e=>{let{product:t}=e;return"string"==typeof t?t===a:(null==t?void 0:t.id)===a}),l=[...(null==e?void 0:e.items)||[]];return -1===i&&l.push(n),"number"==typeof i&&i>-1&&(l[i]={...l[i],quantity:(n.quantity||0)>0?n.quantity:void 0}),{...e,items:l}}case"DELETE_ITEM":{let{payload:r}=t,o={...e},a=null==e?void 0:null===(n=e.items)||void 0===n?void 0:n.findIndex(e=>{let{product:t}=e;return"string"==typeof t?t===r.id:(null==t?void 0:t.id)===r.id});return"number"==typeof a&&o.items&&a>-1&&o.items.splice(a,1),o}case"CLEAR_CART":return{...e,items:[]};default:return e}},l=(0,n.createContext)({}),s=()=>(0,n.useContext)(l),c=e=>Array.isArray(e)&&e.length>0,d=e=>{let{children:t}=e,{user:r,status:s}=(0,a.a)(),[d,u]=(0,n.useReducer)(i,{items:[]}),[p,m]=(0,n.useState)({formatted:"0.00",raw:0}),v=(0,n.useRef)(!1),[y,f]=(0,n.useState)(!1);(0,n.useEffect)(()=>{if(!v.current){v.current=!0;let e=async()=>{var e;let t=localStorage.getItem("cart"),r=JSON.parse(t||"{}");if((null==r?void 0:r.items)&&(null==r?void 0:null===(e=r.items)||void 0===e?void 0:e.length)>0){let e=await Promise.all(r.items.map(async e=>{let{product:t,quantity:r}=e,o=await fetch("".concat("http://webapps.litemindmedia.com","/api/products/").concat(t)),n=await o.json();return{product:n,quantity:r}}));u({type:"SET_CART",payload:{items:e}})}else u({type:"SET_CART",payload:{items:[]}})};e()}},[]),(0,n.useEffect)(()=>{v.current&&("loggedIn"===s&&u({type:"MERGE_CART",payload:null==r?void 0:r.cart}),"loggedOut"===s&&u({type:"CLEAR_CART"}))},[r,s]),(0,n.useEffect)(()=>{var e;if(!v.current||void 0===r)return;let t={...d,items:null==d?void 0:null===(e=d.items)||void 0===e?void 0:e.map(e=>{var t;return(null==e?void 0:e.product)&&"object"==typeof(null==e?void 0:e.product)?{...e,product:null==e?void 0:null===(t=e.product)||void 0===t?void 0:t.id,quantity:"number"==typeof(null==e?void 0:e.quantity)?null==e?void 0:e.quantity:0}:null}).filter(Boolean)};if(r)try{let e=async()=>{let e=await fetch("".concat("http://webapps.litemindmedia.com","/api/users/").concat(r.id),{credentials:"include",method:"PATCH",body:JSON.stringify({cart:t}),headers:{"Content-Type":"application/json"}});e.ok&&localStorage.setItem("cart","[]")};e()}catch(e){console.error("Error while syncing cart to Payload.")}else localStorage.setItem("cart",JSON.stringify(t));f(!0)},[r,d]);let h=(0,n.useCallback)(e=>{let t=!1,{items:r}=d||{};return Array.isArray(r)&&r.length>0&&(t=!!r.find(t=>{let{product:r}=t;return"string"==typeof r?r===e.id:(null==r?void 0:r.id)===e.id})),t},[d]),g=(0,n.useCallback)(e=>{u({type:"ADD_ITEM",payload:e})},[]),w=(0,n.useCallback)(e=>{u({type:"DELETE_ITEM",payload:e})},[]),_=(0,n.useCallback)(()=>{u({type:"CLEAR_CART"})},[]);return(0,n.useEffect)(()=>{var e;if(!v)return;let t=(null==d?void 0:null===(e=d.items)||void 0===e?void 0:e.reduce((e,t)=>{var r,o,n,a;return e+("object"==typeof t.product?(null===(n=JSON.parse((null==t?void 0:null===(a=t.product)||void 0===a?void 0:a.priceJSON)||"{}"))||void 0===n?void 0:null===(o=n.data)||void 0===o?void 0:null===(r=o[0])||void 0===r?void 0:r.unit_amount)*("number"==typeof(null==t?void 0:t.quantity)?null==t?void 0:t.quantity:0):0)},0))||0;m({formatted:(t/100).toLocaleString("en-US",{style:"currency",currency:"USD"}),raw:t})},[d,v]),(0,o.jsx)(l.Provider,{value:{cart:d,addItemToCart:g,deleteItemFromCart:w,cartIsEmpty:y&&!c(null==d?void 0:d.items),clearCart:_,isProductInCart:h,cartTotal:p,hasInitializedCart:y},children:t&&t})}},7636:function(e){e.exports={label:"Button_label__pYjjJ",button:"Button_button__QvmpL",content:"Button_content__rz2Uk","appearance--primary":"Button_appearance--primary__aXtFJ","appearance--secondary":"Button_appearance--secondary__67RnZ","primary--invert":"Button_primary--invert__abvn4","secondary--invert":"Button_secondary--invert__OpT85","appearance--default":"Button_appearance--default__Hxo2A","appearance--none":"Button_appearance--none__nd_sY"},e.exports.__checksum="feca588f12e7"}}]);