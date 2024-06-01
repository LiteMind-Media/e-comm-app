(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[826],{3869:function(e,r,t){Promise.resolve().then(t.t.bind(t,3388,23)),Promise.resolve().then(t.bind(t,4578)),Promise.resolve().then(t.t.bind(t,8608,23)),Promise.resolve().then(t.bind(t,1372))},3388:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),function(e,r){for(var t in r)Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}(r,{suspense:function(){return a},NoSSR:function(){return o}}),t(1024),t(2265);let n=t(4922);function a(){let e=Error(n.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=n.NEXT_DYNAMIC_NO_SSR_CODE,e}function o(e){let{children:r}=e;return r}},1372:function(e,r,t){"use strict";t.r(r);var n=t(7437),a=t(2265),o=t(1865),s=t(1396),i=t.n(s),l=t(4033),c=t(4780),u=t(6399),d=t(1752),p=t(7992),m=t(2621),h=t.n(m);r.default=()=>{let e=(0,l.useSearchParams)(),r=e.toString()?"?".concat(e.toString()):"",t=(0,a.useRef)(e.get("redirect")),{login:s}=(0,p.a)(),m=(0,l.useRouter)(),[_,f]=a.useState(null),{register:g,handleSubmit:w,formState:{errors:v,isLoading:b}}=(0,o.cI)(),y=(0,a.useCallback)(async e=>{try{await s(e),(null==t?void 0:t.current)?m.push(t.current):m.push("/account")}catch(e){f("There was an error with the credentials provided. Please try again.")}},[s,m]);return(0,n.jsxs)("form",{onSubmit:w(y),className:h().form,children:[(0,n.jsxs)("p",{children:["This is where your customers will login to manage their account, review their order history, and more. To manage all users, ",(0,n.jsx)(i(),{href:"/admin/collections/users",children:"login to the admin dashboard"}),"."]}),(0,n.jsx)(d.v,{error:_,className:h().message}),(0,n.jsx)(u.I,{name:"email",label:"Email Address",required:!0,register:g,error:v.email,type:"email"}),(0,n.jsx)(u.I,{name:"password",type:"password",label:"Password",required:!0,register:g,error:v.password}),(0,n.jsx)(c.Button,{type:"submit",appearance:"primary",label:b?"Processing":"Login",disabled:b,className:h().submit}),(0,n.jsxs)("div",{children:[(0,n.jsx)(i(),{href:"/create-account".concat(r),children:"Create an account"}),(0,n.jsx)("br",{}),(0,n.jsx)(i(),{href:"/recover-password".concat(r),children:"Recover your password"})]})]})}},4780:function(e,r,t){"use strict";t.r(r),t.d(r,{Button:function(){return l}});var n=t(7437);t(2265);var a=t(1396),o=t.n(a),s=t(7636),i=t.n(s);let l=e=>{let{el:r="link",label:t,newTab:a,href:s,appearance:l,className:c,onClick:u,type:d="button",disabled:p,invert:m}=e,h=r,_=a?{target:"_blank",rel:"noopener noreferrer"}:{},f=[i().button,c,i()["appearance--".concat(l)],m&&i()["".concat(l,"--invert")]].filter(Boolean).join(" "),g=(0,n.jsx)("div",{className:i().content,children:(0,n.jsx)("span",{className:i().label,children:t})});if((u||"submit"===d)&&(h="button"),"link"===h)return(0,n.jsx)(o(),{href:s||"",className:f,..._,onClick:u,children:g});let w=h;return(0,n.jsx)(w,{href:s,className:f,type:d,..._,onClick:u,disabled:p,children:g})}},6399:function(e,r,t){"use strict";t.d(r,{I:function(){return s}});var n=t(7437);t(2265);var a=t(1577),o=t.n(a);let s=e=>{let{name:r,label:t,required:a,register:s,error:i,type:l="text",validate:c,disabled:u}=e;return(0,n.jsxs)("div",{className:o().inputWrap,children:[(0,n.jsxs)("label",{htmlFor:"name",className:o().label,children:[t,a?(0,n.jsx)("span",{className:o().asterisk,children:"\xa0*"}):""]}),(0,n.jsx)("input",{className:[o().input,i&&o().error].filter(Boolean).join(" "),type:l,...s(r,{required:a,validate:c,..."email"===l?{pattern:{value:/\S+@\S+\.\S+/,message:"Please enter a valid email"}}:{}}),disabled:u}),i&&(0,n.jsx)("div",{className:o().errorMessage,children:(null==i?void 0:i.message)||(null==i?void 0:i.type)!=="required"?null==i?void 0:i.message:"This field is required"})]})}},1752:function(e,r,t){"use strict";t.d(r,{v:function(){return s}});var n=t(7437);t(2265);var a=t(4690),o=t.n(a);let s=e=>{let{message:r,error:t,success:a,warning:s,className:i}=e,l=r||t||a||s;return l?(0,n.jsx)("div",{className:[o().message,i,t&&o().error,a&&o().success,s&&o().warning,!t&&!a&&!s&&o().default].filter(Boolean).join(" "),children:l}):null}},4578:function(e,r,t){"use strict";t.r(r),t.d(r,{RenderParamsComponent:function(){return c}});var n=t(7437),a=t(2265),o=t(4033),s=t(1752),i=t(6506),l=t.n(i);let c=e=>{let{params:r=["error","warning","success","message"],className:t,onParams:i}=e,c=(0,o.useSearchParams)(),u=r.map(e=>null==c?void 0:c.get(e));return((0,a.useEffect)(()=>{u.length&&i&&i(u)},[u,i]),u.length)?(0,n.jsx)("div",{className:t,children:u.map((e,t)=>e?(0,n.jsx)(s.v,{className:l().renderParams,[r[t]]:e},e):null)}):null}},7992:function(e,r,t){"use strict";t.d(r,{H:function(){return s},a:function(){return i}});var n=t(7437),a=t(2265);let o=(0,a.createContext)({}),s=e=>{let{children:r}=e,[t,s]=(0,a.useState)(),[i,l]=(0,a.useState)(),c=(0,a.useCallback)(async e=>{try{let t=await fetch("".concat("http://webapps.litemindmedia.com","/api/users/create"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,password:e.password,passwordConfirm:e.passwordConfirm})});if(t.ok){var r;let{data:e,errors:n}=await t.json();if(n)throw Error(n[0].message);s(null==e?void 0:null===(r=e.loginUser)||void 0===r?void 0:r.user),l("loggedIn")}else throw Error("Invalid login")}catch(e){throw Error("An error occurred while attempting to login.")}},[]),u=(0,a.useCallback)(async e=>{try{let r=await fetch("".concat("http://webapps.litemindmedia.com","/api/users/login"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,password:e.password})});if(r.ok){let{user:e,errors:t}=await r.json();if(t)throw Error(t[0].message);return s(e),l("loggedIn"),e}throw Error("Invalid login")}catch(e){throw Error("An error occurred while attempting to login.")}},[]),d=(0,a.useCallback)(async()=>{try{let e=await fetch("".concat("http://webapps.litemindmedia.com","/api/users/logout"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"}});if(e.ok)s(null),l("loggedOut");else throw Error("An error occurred while attempting to logout.")}catch(e){throw Error("An error occurred while attempting to logout.")}},[]);(0,a.useEffect)(()=>{let e=async()=>{try{let e=await fetch("".concat("http://webapps.litemindmedia.com","/api/users/me"),{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}});if(e.ok){let{user:r}=await e.json();s(r||null),l(r?"loggedIn":void 0)}else throw Error("An error occurred while fetching your account.")}catch(e){throw s(null),Error("An error occurred while fetching your account.")}};e()},[]);let p=(0,a.useCallback)(async e=>{try{let t=await fetch("".concat("http://webapps.litemindmedia.com","/api/users/forgot-password"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email})});if(t.ok){var r;let{data:e,errors:n}=await t.json();if(n)throw Error(n[0].message);s(null==e?void 0:null===(r=e.loginUser)||void 0===r?void 0:r.user)}else throw Error("Invalid login")}catch(e){throw Error("An error occurred while attempting to login.")}},[]),m=(0,a.useCallback)(async e=>{try{let n=await fetch("".concat("http://webapps.litemindmedia.com","/api/users/reset-password"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e.password,passwordConfirm:e.passwordConfirm,token:e.token})});if(n.ok){var r,t;let{data:e,errors:a}=await n.json();if(a)throw Error(a[0].message);s(null==e?void 0:null===(r=e.loginUser)||void 0===r?void 0:r.user),l((null==e?void 0:null===(t=e.loginUser)||void 0===t?void 0:t.user)?"loggedIn":void 0)}else throw Error("Invalid login")}catch(e){throw Error("An error occurred while attempting to login.")}},[]);return(0,n.jsx)(o.Provider,{value:{user:t,setUser:s,login:u,logout:d,create:c,resetPassword:m,forgotPassword:p,status:i},children:r})},i=()=>(0,a.useContext)(o)},2621:function(e){e.exports={form:"LoginForm_form__hRhV7",submit:"LoginForm_submit__6onyZ",message:"LoginForm_message__zgJb0"},e.exports.__checksum="7a215eb31eec"},8608:function(e){e.exports={login:"login_login__feCRA",params:"login_params__6nyBj"},e.exports.__checksum="17135c6862b9"},7636:function(e){e.exports={label:"Button_label__pYjjJ",button:"Button_button__QvmpL",content:"Button_content__rz2Uk","appearance--primary":"Button_appearance--primary__aXtFJ","appearance--secondary":"Button_appearance--secondary__67RnZ","primary--invert":"Button_primary--invert__abvn4","secondary--invert":"Button_secondary--invert__OpT85","appearance--default":"Button_appearance--default__Hxo2A","appearance--none":"Button_appearance--none__nd_sY"},e.exports.__checksum="feca588f12e7"},1577:function(e){e.exports={inputWrap:"Input_inputWrap__8dIRM",input:"Input_input__KwwA8",asterisk:"Input_asterisk__YQ6ea",error:"Input_error__qB_Bs",label:"Input_label__4aiDX",errorMessage:"Input_errorMessage__9tcd0"},e.exports.__checksum="3fb30c4ade3e"},4690:function(e){e.exports={message:"Message_message__z1tdG",default:"Message_default__RDDb4",warning:"Message_warning__FT9n8",error:"Message_error__WX2fA",success:"Message_success__Cnnxv"},e.exports.__checksum="e7c05ffe3613"},6506:function(e){e.exports={renderParams:"RenderParams_renderParams__vMrJE"},e.exports.__checksum="1f73e3be0e4e"},4033:function(e,r,t){e.exports=t(290)}},function(e){e.O(0,[724,571,971,864,744],function(){return e(e.s=3869)}),_N_E=e.O()}]);