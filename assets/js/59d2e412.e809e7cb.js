"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4200],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38545:function(e,t,n){n.d(t,{Q:function(){return c},U:function(){return o}});var r=n(67294),a=n(45697),i=n.n(a);function o(e){let{children:t}=e;return r.createElement("div",{className:"accordion"},t)}function c(e){let{open:t,title:n,actions:a,keepAlive:i=!0,children:o}=e;const[c,l]=(0,r.useState)(t),u=c||i;return r.createElement("div",{className:["accordion-item",c?"accordion-item-opened":"accordion-item-closed"].join(" ")},r.createElement("div",{className:"accordion-item-header",onClick:()=>l(!c)},r.createElement("h3",null,r.createElement(s,{opened:c}),r.createElement("span",null,n)),a),r.createElement("div",{className:"accordion-item-content"},u&&o))}function s(e){let{opened:t}=e;return t?r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},r.createElement("rect",{width:"256",height:"256",fill:"none"}),r.createElement("path",{d:"M215.4,92.9A8,8,0,0,0,208,88H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8l80,80a8.2,8.2,0,0,0,11.4,0l80-80A8.4,8.4,0,0,0,215.4,92.9Z"})):r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},r.createElement("rect",{width:"256",height:"256",fill:"none"}),r.createElement("path",{d:"M181.7,122.3l-80-80a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,88,48V208a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l80-80A8.1,8.1,0,0,0,181.7,122.3Z"}))}o.propTypes={children:i().any},c.propTypes={open:i().bool,title:i().string,children:i().any,actions:i().any,keepAlive:i().bool},s.propTypes={opened:i().bool}},72490:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var r=n(83117),a=(n(67294),n(3905)),i=n(38545);const o={description:"Restricts the mint to holders of a specified token, requiring a burn of the tokens."},c="Token Burn",s={unversionedId:"programs/candy-machine/available-guards/token-burn",id:"programs/candy-machine/available-guards/token-burn",title:"Token Burn",description:"Restricts the mint to holders of a specified token, requiring a burn of the tokens.",source:"@site/docs/01-programs/02-candy-machine/10-available-guards/16-token-burn.md",sourceDirName:"01-programs/02-candy-machine/10-available-guards",slug:"/programs/candy-machine/available-guards/token-burn",permalink:"/programs/candy-machine/available-guards/token-burn",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/02-candy-machine/10-available-guards/16-token-burn.md",tags:[],version:"current",lastUpdatedAt:1684778423,formattedLastUpdatedAt:"May 22, 2023",sidebarPosition:16,frontMatter:{description:"Restricts the mint to holders of a specified token, requiring a burn of the tokens."},sidebar:"sidebar",previous:{title:"Third Party Signer",permalink:"/programs/candy-machine/available-guards/third-party-signer"},next:{title:"Token Gate",permalink:"/programs/candy-machine/available-guards/token-gate"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Guard Settings",id:"guard-settings",level:2},{value:"Mint Settings",id:"mint-settings",level:2},{value:"Route Instruction",id:"route-instruction",level:2}],p={toc:u};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"token-burn"},"Token Burn"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Token Burn")," guard allows minting by burning some of the payer\u2019s tokens from a configured mint account. If the payer does not have the required amount of tokens to burn, minting will fail."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CandyMachinesV3-GuardsTokenBurn.png",src:n(46727).Z+"#radius",width:"2472",height:"936"})),(0,a.kt)("h2",{id:"guard-settings"},"Guard Settings"),(0,a.kt)("p",null,"The Token Burn guard contains the following settings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Amount"),": The number of tokens to burn."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Mint"),": The address of the mint account defining the SPL Token we want to burn.")),(0,a.kt)(i.U,{mdxType:"Accordion"},(0,a.kt)(i.Q,{title:"JavaScript \u2014 Umi library (recommended)",open:!0,mdxType:"AccordionItem"},(0,a.kt)("div",{className:"accordion-item-padding"},(0,a.kt)("p",null,"Here\u2019s how we can set up a Candy Machine using the Token Burn guard."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"create(umi, {\n  // ...\n  guards: {\n    tokenBurn: some({\n      amount: 300,\n      mint: tokenMint.publicKey,\n    }),\n  },\n});\n")),(0,a.kt)("p",null,"API References: ",(0,a.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/functions/create.html"},"create"),", ",(0,a.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/types/TokenBurnArgs.html"},"TokenBurn")))),(0,a.kt)(i.Q,{title:"JavaScript \u2014 SDK",mdxType:"AccordionItem"},(0,a.kt)("div",{className:"accordion-item-padding"},(0,a.kt)("p",null,"Here\u2019s an example of how to set up a Candy Machine using the Token Burn guard."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { token } from "@metaplex-foundation/js";\n\nconst { candyMachine } = await metaplex.candyMachines().create({\n  // ...\n  guards: {\n    tokenBurn: {\n      amount: token(300),\n      mint: tokenMint.address,\n    },\n  },\n});\n')),(0,a.kt)("p",null,"API References: ",(0,a.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create"},"Operation"),", ",(0,a.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html"},"Input"),", ",(0,a.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html"},"Output"),", ",(0,a.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create"},"Transaction Builder"),", ",(0,a.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.TokenBurnGuardSettings.html"},"Guard Settings"),".")))),(0,a.kt)("h2",{id:"mint-settings"},"Mint Settings"),(0,a.kt)("p",null,"The Token Burn guard contains the following Mint Settings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Mint"),": The address of the mint account defining the SPL Token we want to burn.")),(0,a.kt)("p",null,"Note that, if you\u2019re planning on constructing instructions without the help of our SDKs, you will need to provide these Mint Settings and more as a combination of instruction arguments and remaining accounts. See the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/mpl-candy-machine/tree/main/programs/candy-guard#tokenburn"},"Candy Guard\u2019s program documentation")," for more details."),(0,a.kt)(i.U,{mdxType:"Accordion"},(0,a.kt)(i.Q,{title:"JavaScript \u2014 Umi library (recommended)",open:!0,mdxType:"AccordionItem"},(0,a.kt)("div",{className:"accordion-item-padding"},(0,a.kt)("p",null,"You may pass the Mint Settings of the Token Burn guard using the ",(0,a.kt)("inlineCode",{parentName:"p"},"mintArgs")," argument like so."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"mintV2(umi, {\n  // ...\n  mintArgs: {\n    tokenBurn: some({ mint: tokenMint.publicKey }),\n  },\n});\n")),(0,a.kt)("p",null,"API References: ",(0,a.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/functions/mintV2.html"},"mintV2"),", ",(0,a.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/types/TokenBurnMintArgs.html"},"TokenBurnMintArgs")))),(0,a.kt)(i.Q,{title:"JavaScript \u2014 SDK",mdxType:"AccordionItem"},(0,a.kt)("div",{className:"accordion-item-padding"},(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The JS SDK does not require any Mint Settings for the Token Burn guard since it can infer them from the provided Candy Machine model."))))),(0,a.kt)("h2",{id:"route-instruction"},"Route Instruction"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The Token Burn guard does not support the route instruction.")))}d.isMDXComponent=!0},46727:function(e,t,n){t.Z=n.p+"assets/images/CandyMachinesV3-GuardsTokenBurn-0db2245911459af9adb64db911d9bc7a.png"}}]);