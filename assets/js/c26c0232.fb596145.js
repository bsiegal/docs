"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6524],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return s}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),f=p(r),s=a,m=f["".concat(u,".").concat(s)]||f[s]||l[s]||c;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},99170:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return l},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p}});var n=r(83117),a=(r(67294),r(3905));const c={sidebar_label:"3. Update Fair Launch"},o="Update Fair Launch",i={unversionedId:"deprecated/fair-launch/update-fair-launch",id:"deprecated/fair-launch/update-fair-launch",title:"Update Fair Launch",description:"You can get info of created Fair Launch by running this command:",source:"@site/docs/06-deprecated/03-fair-launch/02-update-fair-launch.md",sourceDirName:"06-deprecated/03-fair-launch",slug:"/deprecated/fair-launch/update-fair-launch",permalink:"/deprecated/fair-launch/update-fair-launch",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/06-deprecated/03-fair-launch/02-update-fair-launch.md",tags:[],version:"current",lastUpdatedAt:1667496495,formattedLastUpdatedAt:"Nov 3, 2022",sidebarPosition:2,frontMatter:{sidebar_label:"3. Update Fair Launch"},sidebar:"sidebar",previous:{title:"2. Display Fair Launch",permalink:"/deprecated/fair-launch/display-fair-launch"},next:{title:"Introduction",permalink:"/deprecated/storefront/introduction"}},u={},p=[],d={toc:p};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"update-fair-launch"},"Update Fair Launch"),(0,a.kt)("p",null,"You can get info of created Fair Launch by running this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'ts-node ~/metaplex-foundation/deprecated-clis/src/fair-launch-cli.ts update_fair_launch --env devnet --keypair ~/.config/solana/devnet.json --uuid "devnet" --fee 0.1 --price-range-start 0.1 --price-range-end 0.5 --phase-one-start-date "16 Dec 2021 11:30:00 UTC" --phase-one-end-date "16 Dec 2021 12:00:00 UTC" --phase-two-end-date "16 Dec 2021 12:30:00 UTC" --number-of-tokens 11 --tick-size 0.1 --lottery-duration 80000\n')),(0,a.kt)("p",null,"expected output: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Updated fair launch Done: FPnv9xr4r7vMNNBgvLVzLsvmQFYh1YmhuRWRGdRFecmb\n")))}l.isMDXComponent=!0}}]);