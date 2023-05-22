"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1828],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),l=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(n),p=r,h=c["".concat(m,".").concat(p)]||c[p]||d[p]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},38545:function(e,t,n){n.d(t,{Q:function(){return s},U:function(){return o}});var a=n(67294),r=n(45697),i=n.n(r);function o(e){let{children:t}=e;return a.createElement("div",{className:"accordion"},t)}function s(e){let{open:t,title:n,actions:r,keepAlive:i=!0,children:o}=e;const[s,l]=(0,a.useState)(t),u=s||i;return a.createElement("div",{className:["accordion-item",s?"accordion-item-opened":"accordion-item-closed"].join(" ")},a.createElement("div",{className:"accordion-item-header",onClick:()=>l(!s)},a.createElement("h3",null,a.createElement(m,{opened:s}),a.createElement("span",null,n)),r),a.createElement("div",{className:"accordion-item-content"},u&&o))}function m(e){let{opened:t}=e;return t?a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M215.4,92.9A8,8,0,0,0,208,88H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8l80,80a8.2,8.2,0,0,0,11.4,0l80-80A8.4,8.4,0,0,0,215.4,92.9Z"})):a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M181.7,122.3l-80-80a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,88,48V208a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l80-80A8.1,8.1,0,0,0,181.7,122.3Z"}))}o.propTypes={children:i().any},s.propTypes={open:i().bool,title:i().string,children:i().any,actions:i().any,keepAlive:i().bool},m.propTypes={opened:i().bool}},55174:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return u}});var a=n(83117),r=(n(67294),n(3905)),i=n(38545);const o={description:"Determines the end of the mint based on the total amount minted."},s="Redeemed Amount",m={unversionedId:"programs/candy-machine/available-guards/redeemed-amount",id:"programs/candy-machine/available-guards/redeemed-amount",title:"Redeemed Amount",description:"Determines the end of the mint based on the total amount minted.",source:"@site/docs/01-programs/02-candy-machine/10-available-guards/12-redeemed-amount.md",sourceDirName:"01-programs/02-candy-machine/10-available-guards",slug:"/programs/candy-machine/available-guards/redeemed-amount",permalink:"/programs/candy-machine/available-guards/redeemed-amount",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/02-candy-machine/10-available-guards/12-redeemed-amount.md",tags:[],version:"current",lastUpdatedAt:1684778423,formattedLastUpdatedAt:"May 22, 2023",sidebarPosition:12,frontMatter:{description:"Determines the end of the mint based on the total amount minted."},sidebar:"sidebar",previous:{title:"NFT Payment",permalink:"/programs/candy-machine/available-guards/nft-payment"},next:{title:"Sol Payment",permalink:"/programs/candy-machine/available-guards/sol-payment"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Guard Settings",id:"guard-settings",level:2},{value:"Mint Settings",id:"mint-settings",level:2},{value:"Route Instruction",id:"route-instruction",level:2}],d={toc:u};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"redeemed-amount"},"Redeemed Amount"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Redeemed Amount")," guard forbids minting when the number of minted NFTs for the entire Candy Machine reaches the configured maximum amount."),(0,r.kt)("p",null,"This guard becomes more interesting when used with ",(0,r.kt)("a",{parentName:"p",href:"/programs/candy-machine/guard-groups"},"Guard Groups")," since it allows us to add global minting thresholds to our groups."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CandyMachinesV3-GuardsRedeemedAmount.png",src:n(19241).Z+"#radius",width:"2472",height:"936"})),(0,r.kt)("h2",{id:"guard-settings"},"Guard Settings"),(0,r.kt)("p",null,"The Redeemed Amount guard contains the following settings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Maximum"),": The maximum amount of NFTs that can be minted.")),(0,r.kt)(i.U,{mdxType:"Accordion"},(0,r.kt)(i.Q,{title:"JavaScript \u2014 Umi library (recommended)",open:!0,mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"Here\u2019s how we can set up a Candy Machine using the Redeemed Amount guard."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"create(umi, {\n  // ...\n  itemsAvailable: 500,\n  guards: {\n    redeemedAmount: some({ maximum: 300 }),\n  },\n});\n")),(0,r.kt)("p",null,"Notice that, even if the Candy Machine contains 500 items, only 300 of these items will be mintable because of this guard."),(0,r.kt)("p",null,"Thus, this guard becomes more useful when using ",(0,r.kt)("a",{parentName:"p",href:"/programs/candy-machine/guard-groups"},"Guard Groups"),". Here\u2019s another example using two groups such that the first 300 NFTs can be minted for 1 SOL but the last 200 will need 2 SOL to mint."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'create(umi, {\n  // ...\n  itemsAvailable: 500,\n  groups: [\n    {\n      label: "early",\n      guards: {\n        redeemedAmount: some({ maximum: 300 }),\n        solPayment: some({ lamports: sol(1), destination: treasury }),\n      },\n    },\n    {\n      label: "late",\n      guards: {\n        solPayment: some({ lamports: sol(2), destination: treasury }),\n      },\n    },\n  ],\n});\n')),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/functions/create.html"},"create"),", ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/types/RedeemedAmountArgs.html"},"RedeemedAmount")))),(0,r.kt)(i.Q,{title:"JavaScript \u2014 SDK",mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"Here\u2019s how we can set up a Candy Machine using the Redeemed Amount guard via the JS SDK."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { toBigNumber } from "@metaplex-foundation/js";\n\nconst { candyMachine } = await metaplex.candyMachines().create({\n  // ...\n  itemsAvailable: toBigNumber(500),\n  guards: {\n    redeemedAmount: {\n      maximum: toBigNumber(300),\n    },\n  },\n});\n')),(0,r.kt)("p",null,"Notice that, even if the Candy Machine contains 500 items, only 300 of these items will be mintable because of this guard."),(0,r.kt)("p",null,"Thus, this guard becomes more useful when using ",(0,r.kt)("a",{parentName:"p",href:"/programs/candy-machine/guard-groups"},"Guard Groups"),". Here\u2019s another example using two groups such that the first 300 NFTs can be minted for 1 SOL but the last 200 will need 2 SOL to mint."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { toBigNumber } from "@metaplex-foundation/js";\n\nconst { candyMachine } = await metaplex.candyMachines().create({\n  // ...\n  itemsAvailable: toBigNumber(500),\n  groups: [\n    {\n      label: "early",\n      guards: {\n        redeemedAmount: { maximum: toBigNumber(300) },\n        solPayment: { amount: sol(1), destination: treasury },\n      },\n    },\n    {\n      label: "late",\n      guards: {\n        solPayment: { amount: sol(2), destination: treasury },\n      },\n    },\n  ],\n});\n')),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create"},"Operation"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html"},"Input"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html"},"Output"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create"},"Transaction Builder"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.RedeemedAmountGuardSettings.html"},"Guard Settings"),".")))),(0,r.kt)("h2",{id:"mint-settings"},"Mint Settings"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The Redeemed Amount guard does not need Mint Settings.")),(0,r.kt)("h2",{id:"route-instruction"},"Route Instruction"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The Redeemed Amount guard does not support the route instruction.")))}c.isMDXComponent=!0},19241:function(e,t,n){t.Z=n.p+"assets/images/CandyMachinesV3-GuardsRedeemedAmount-010e91fa962ed0df9e26a55edcc0d3b4.png"}}]);