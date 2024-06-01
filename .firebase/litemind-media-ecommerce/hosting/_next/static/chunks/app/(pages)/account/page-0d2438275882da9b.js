(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[524],{3941:function(e,r,t){Promise.resolve().then(t.t.bind(t,4724,23)),Promise.resolve().then(t.t.bind(t,3388,23)),Promise.resolve().then(t.bind(t,4780)),Promise.resolve().then(t.bind(t,4578)),Promise.resolve().then(t.t.bind(t,8301,23)),Promise.resolve().then(t.t.bind(t,9419,23)),Promise.resolve().then(t.bind(t,6354)),Promise.resolve().then(t.t.bind(t,1565,23)),Promise.resolve().then(t.t.bind(t,5275,23)),Promise.resolve().then(t.t.bind(t,5473,19)),Promise.resolve().then(t.t.bind(t,1649,23)),Promise.resolve().then(t.t.bind(t,5266,23))},3388:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),function(e,r){for(var t in r)Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}(r,{suspense:function(){return a},NoSSR:function(){return o}}),t(1024),t(2265);let n=t(4922);function a(){let e=Error(n.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=n.NEXT_DYNAMIC_NO_SSR_CODE,e}function o(e){let{children:r}=e;return r}},6354:function(e,r,t){"use strict";t.r(r);var n=t(7437),a=t(2265),o=t(1865),s=t(4033),i=t(4780),c=t(6399),l=t(1752),u=t(7992),d=t(5754),p=t.n(d);r.default=()=>{let[e,r]=(0,a.useState)(""),[t,d]=(0,a.useState)(""),{user:m,setUser:_}=(0,u.a)(),[h,f]=(0,a.useState)(!1),{register:g,handleSubmit:w,formState:{errors:b,isLoading:v},reset:x,watch:y}=(0,o.cI)(),j=(0,a.useRef)({});j.current=y("password","");let k=(0,s.useRouter)(),C=(0,a.useCallback)(async e=>{if(m){let t=await fetch("".concat("http://webapps.litemindmedia.com","/api/users/").concat(m.id),{credentials:"include",method:"PATCH",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});if(t.ok){let e=await t.json();_(e.doc),d("Successfully updated account."),r(""),f(!1),x({email:e.doc.email,name:e.doc.name,password:"",passwordConfirm:""})}else r("There was a problem updating your account.")}},[m,_,x]);return(0,a.useEffect)(()=>{null===m&&k.push("/login?error=".concat(encodeURIComponent("You must be logged in to view this page."),"&redirect=").concat(encodeURIComponent("/account"))),m&&x({email:m.email,name:m.name,password:"",passwordConfirm:""})},[m,k,x,h]),(0,n.jsxs)("form",{onSubmit:w(C),className:p().form,children:[(0,n.jsx)(l.v,{error:e,success:t,className:p().message}),h?(0,n.jsxs)(a.Fragment,{children:[(0,n.jsxs)("p",{children:["Change your password below, or ",(0,n.jsx)("button",{type:"button",className:p().changePassword,onClick:()=>f(!h),children:"cancel"}),"."]}),(0,n.jsx)(c.I,{name:"password",type:"password",label:"Password",required:!0,register:g,error:b.password}),(0,n.jsx)(c.I,{name:"passwordConfirm",type:"password",label:"Confirm Password",required:!0,register:g,validate:e=>e===j.current||"The passwords do not match",error:b.passwordConfirm})]}):(0,n.jsxs)(a.Fragment,{children:[(0,n.jsxs)("p",{children:["Change your account details below, or ",(0,n.jsx)("button",{type:"button",className:p().changePassword,onClick:()=>f(!h),children:"click here"})," to change your password."]}),(0,n.jsx)(c.I,{name:"email",label:"Email Address",required:!0,register:g,error:b.email,type:"email"}),(0,n.jsx)(c.I,{name:"name",label:"Name",register:g,error:b.name})]}),(0,n.jsx)(i.Button,{type:"submit",label:v?"Processing":h?"Change Password":"Update Account",disabled:v,appearance:"primary",className:p().submit})]})}},4780:function(e,r,t){"use strict";t.r(r),t.d(r,{Button:function(){return c}});var n=t(7437);t(2265);var a=t(1396),o=t.n(a),s=t(7636),i=t.n(s);let c=e=>{let{el:r="link",label:t,newTab:a,href:s,appearance:c,className:l,onClick:u,type:d="button",disabled:p,invert:m}=e,_=r,h=a?{target:"_blank",rel:"noopener noreferrer"}:{},f=[i().button,l,i()["appearance--".concat(c)],m&&i()["".concat(c,"--invert")]].filter(Boolean).join(" "),g=(0,n.jsx)("div",{className:i().content,children:(0,n.jsx)("span",{className:i().label,children:t})});if((u||"submit"===d)&&(_="button"),"link"===_)return(0,n.jsx)(o(),{href:s||"",className:f,...h,onClick:u,children:g});let w=_;return(0,n.jsx)(w,{href:s,className:f,type:d,...h,onClick:u,disabled:p,children:g})}},6399:function(e,r,t){"use strict";t.d(r,{I:function(){return s}});var n=t(7437);t(2265);var a=t(1577),o=t.n(a);let s=e=>{let{name:r,label:t,required:a,register:s,error:i,type:c="text",validate:l,disabled:u}=e;return(0,n.jsxs)("div",{className:o().inputWrap,children:[(0,n.jsxs)("label",{htmlFor:"name",className:o().label,children:[t,a?(0,n.jsx)("span",{className:o().asterisk,children:"\xa0*"}):""]}),(0,n.jsx)("input",{className:[o().input,i&&o().error].filter(Boolean).join(" "),type:c,...s(r,{required:a,validate:l,..."email"===c?{pattern:{value:/\S+@\S+\.\S+/,message:"Please enter a valid email"}}:{}}),disabled:u}),i&&(0,n.jsx)("div",{className:o().errorMessage,children:(null==i?void 0:i.message)||(null==i?void 0:i.type)!=="required"?null==i?void 0:i.message:"This field is required"})]})}},1752:function(e,r,t){"use strict";t.d(r,{v:function(){return s}});var n=t(7437);t(2265);var a=t(4690),o=t.n(a);let s=e=>{let{message:r,error:t,success:a,warning:s,className:i}=e,c=r||t||a||s;return c?(0,n.jsx)("div",{className:[o().message,i,t&&o().error,a&&o().success,s&&o().warning,!t&&!a&&!s&&o().default].filter(Boolean).join(" "),children:c}):null}},4578:function(e,r,t){"use strict";t.r(r),t.d(r,{RenderParamsComponent:function(){return l}});var n=t(7437),a=t(2265),o=t(4033),s=t(1752),i=t(6506),c=t.n(i);let l=e=>{let{params:r=["error","warning","success","message"],className:t,onParams:i}=e,l=(0,o.useSearchParams)(),u=r.map(e=>null==l?void 0:l.get(e));return((0,a.useEffect)(()=>{u.length&&i&&i(u)},[u,i]),u.length)?(0,n.jsx)("div",{className:t,children:u.map((e,t)=>e?(0,n.jsx)(s.v,{className:c().renderParams,[r[t]]:e},e):null)}):null}},7992:function(e,r,t){"use strict";t.d(r,{H:function(){return s},a:function(){return i}});var n=t(7437),a=t(2265);let o=(0,a.createContext)({}),s=e=>{let{children:r}=e,[t,s]=(0,a.useState)(),[i,c]=(0,a.useState)(),l=(0,a.useCallback)(async e=>{try{let t=await fetch("".concat("http://webapps.litemindmedia.com","/api/users/create"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,password:e.password,passwordConfirm:e.passwordConfirm})});if(t.ok){var r;let{data:e,errors:n}=await t.json();if(n)throw Error(n[0].message);s(null==e?void 0:null===(r=e.loginUser)||void 0===r?void 0:r.user),c("loggedIn")}else throw Error("Invalid login")}catch(e){throw Error("An error occurred while attempting to login.")}},[]),u=(0,a.useCallback)(async e=>{try{let r=await fetch("".concat("http://webapps.litemindmedia.com","/api/users/login"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,password:e.password})});if(r.ok){let{user:e,errors:t}=await r.json();if(t)throw Error(t[0].message);return s(e),c("loggedIn"),e}throw Error("Invalid login")}catch(e){throw Error("An error occurred while attempting to login.")}},[]),d=(0,a.useCallback)(async()=>{try{let e=await fetch("".concat("http://webapps.litemindmedia.com","/api/users/logout"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"}});if(e.ok)s(null),c("loggedOut");else throw Error("An error occurred while attempting to logout.")}catch(e){throw Error("An error occurred while attempting to logout.")}},[]);(0,a.useEffect)(()=>{let e=async()=>{try{let e=await fetch("".concat("http://webapps.litemindmedia.com","/api/users/me"),{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}});if(e.ok){let{user:r}=await e.json();s(r||null),c(r?"loggedIn":void 0)}else throw Error("An error occurred while fetching your account.")}catch(e){throw s(null),Error("An error occurred while fetching your account.")}};e()},[]);let p=(0,a.useCallback)(async e=>{try{let t=await fetch("".concat("http://webapps.litemindmedia.com","/api/users/forgot-password"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email})});if(t.ok){var r;let{data:e,errors:n}=await t.json();if(n)throw Error(n[0].message);s(null==e?void 0:null===(r=e.loginUser)||void 0===r?void 0:r.user)}else throw Error("Invalid login")}catch(e){throw Error("An error occurred while attempting to login.")}},[]),m=(0,a.useCallback)(async e=>{try{let n=await fetch("".concat("http://webapps.litemindmedia.com","/api/users/reset-password"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e.password,passwordConfirm:e.passwordConfirm,token:e.token})});if(n.ok){var r,t;let{data:e,errors:a}=await n.json();if(a)throw Error(a[0].message);s(null==e?void 0:null===(r=e.loginUser)||void 0===r?void 0:r.user),c((null==e?void 0:null===(t=e.loginUser)||void 0===t?void 0:t.user)?"loggedIn":void 0)}else throw Error("Invalid login")}catch(e){throw Error("An error occurred while attempting to login.")}},[]);return(0,n.jsx)(o.Provider,{value:{user:t,setUser:s,login:u,logout:d,create:l,resetPassword:m,forgotPassword:p,status:i},children:r})},i=()=>(0,a.useContext)(o)},5754:function(e){e.exports={form:"AccountForm_form__lSVWE",changePassword:"AccountForm_changePassword__92rDX",submit:"AccountForm_submit__sVozx"},e.exports.__checksum="7499c6b9d698"},1565:function(e){e.exports={account:"account_account__B33_e",params:"account_params__ICrtr",purchases:"account_purchases___zqLy",purchase:"account_purchase__LWh5j",noPurchases:"account_noPurchases__KdFTF"},e.exports.__checksum="965d96f865ee"},7636:function(e){e.exports={label:"Button_label__pYjjJ",button:"Button_button__QvmpL",content:"Button_content__rz2Uk","appearance--primary":"Button_appearance--primary__aXtFJ","appearance--secondary":"Button_appearance--secondary__67RnZ","primary--invert":"Button_primary--invert__abvn4","secondary--invert":"Button_secondary--invert__OpT85","appearance--default":"Button_appearance--default__Hxo2A","appearance--none":"Button_appearance--none__nd_sY"},e.exports.__checksum="feca588f12e7"},5266:function(e){e.exports={hr:"HR_hr__KdVl9"},e.exports.__checksum="754a23d341d9"},1577:function(e){e.exports={inputWrap:"Input_inputWrap__8dIRM",input:"Input_input__KwwA8",asterisk:"Input_asterisk__YQ6ea",error:"Input_error__qB_Bs",label:"Input_label__4aiDX",errorMessage:"Input_errorMessage__9tcd0"},e.exports.__checksum="3fb30c4ade3e"},9419:function(e){e.exports={label:"Label_label__jIJix"},e.exports.__checksum="3a4a48b27906"},1649:function(e){e.exports={largeBody:"LargeBody_largeBody__4csV5"},e.exports.__checksum="89003fbd68f7"},4690:function(e){e.exports={message:"Message_message__z1tdG",default:"Message_default__RDDb4",warning:"Message_warning__FT9n8",error:"Message_error__WX2fA",success:"Message_success__Cnnxv"},e.exports.__checksum="e7c05ffe3613"},6506:function(e){e.exports={renderParams:"RenderParams_renderParams__vMrJE"},e.exports.__checksum="1f73e3be0e4e"},8301:function(e){e.exports={richText:"RichText_richText__8IUJ0"},e.exports.__checksum="cfae62d1f152"},5275:function(e){e.exports={"top-large":"VerticalPadding_top-large__Fdv3J","top-medium":"VerticalPadding_top-medium__8WZul","bottom-large":"VerticalPadding_bottom-large__W6wnm","bottom-medium":"VerticalPadding_bottom-medium__T9Qsp"},e.exports.__checksum="fd5a6a28f19c"},5473:function(e){e.exports.__checksum="ac2353319419"},4033:function(e,r,t){e.exports=t(290)}},function(e){e.O(0,[724,571,971,864,744],function(){return e(e.s=3941)}),_N_E=e.O()}]);