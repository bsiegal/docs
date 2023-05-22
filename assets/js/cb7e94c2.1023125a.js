"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5794],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,h=u["".concat(c,".").concat(d)]||u[d]||p[d]||r;return n?i.createElement(h,o(o({ref:t},m),{},{components:n})):i.createElement(h,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38545:function(e,t,n){n.d(t,{Q:function(){return l},U:function(){return o}});var i=n(67294),a=n(45697),r=n.n(a);function o(e){let{children:t}=e;return i.createElement("div",{className:"accordion"},t)}function l(e){let{open:t,title:n,actions:a,keepAlive:r=!0,children:o}=e;const[l,s]=(0,i.useState)(t),m=l||r;return i.createElement("div",{className:["accordion-item",l?"accordion-item-opened":"accordion-item-closed"].join(" ")},i.createElement("div",{className:"accordion-item-header",onClick:()=>s(!l)},i.createElement("h3",null,i.createElement(c,{opened:l}),i.createElement("span",null,n)),a),i.createElement("div",{className:"accordion-item-content"},m&&o))}function c(e){let{opened:t}=e;return t?i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},i.createElement("rect",{width:"256",height:"256",fill:"none"}),i.createElement("path",{d:"M215.4,92.9A8,8,0,0,0,208,88H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8l80,80a8.2,8.2,0,0,0,11.4,0l80-80A8.4,8.4,0,0,0,215.4,92.9Z"})):i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},i.createElement("rect",{width:"256",height:"256",fill:"none"}),i.createElement("path",{d:"M181.7,122.3l-80-80a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,88,48V208a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l80-80A8.1,8.1,0,0,0,181.7,122.3Z"}))}o.propTypes={children:r().any},l.propTypes={open:r().bool,title:r().string,children:r().any,actions:r().any,keepAlive:r().bool},c.propTypes={opened:r().bool}},88790:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return m}});var i=n(83117),a=(n(67294),n(3905)),r=n(38545);const o={description:"Specifies a limit on the number of mints per wallet."},l="Mint Limit",c={unversionedId:"programs/candy-machine/available-guards/mint-limit",id:"programs/candy-machine/available-guards/mint-limit",title:"Mint Limit",description:"Specifies a limit on the number of mints per wallet.",source:"@site/docs/01-programs/02-candy-machine/10-available-guards/08-mint-limit.md",sourceDirName:"01-programs/02-candy-machine/10-available-guards",slug:"/programs/candy-machine/available-guards/mint-limit",permalink:"/programs/candy-machine/available-guards/mint-limit",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/02-candy-machine/10-available-guards/08-mint-limit.md",tags:[],version:"current",lastUpdatedAt:1684778423,formattedLastUpdatedAt:"May 22, 2023",sidebarPosition:8,frontMatter:{description:"Specifies a limit on the number of mints per wallet."},sidebar:"sidebar",previous:{title:"Gatekeeper",permalink:"/programs/candy-machine/available-guards/gatekeeper"},next:{title:"NFT Burn",permalink:"/programs/candy-machine/available-guards/nft-burn"}},s={},m=[{value:"Overview",id:"overview",level:2},{value:"Guard Settings",id:"guard-settings",level:2},{value:"Mint Settings",id:"mint-settings",level:2},{value:"Route Instruction",id:"route-instruction",level:2}],p={toc:m};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mint-limit"},"Mint Limit"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Mint Limit")," guard allows specifying a limit on the number of NFTs each wallet can mint."),(0,a.kt)("p",null,"The limit is set per wallet, per candy machine and per identifier \u2014 provided in the settings \u2014 to allow multiple mint limits within the same Candy Machine."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CandyMachinesV3-GuardsMintLimit.png",src:n(39134).Z+"#radius",width:"2472",height:"936"})),(0,a.kt)("h2",{id:"guard-settings"},"Guard Settings"),(0,a.kt)("p",null,"The Mint Limit guard contains the following settings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ID"),": A unique identifier for this guard. Different identifiers will use different counters to track how many items were minted by a given wallet. This is particularly useful when using groups of guards as we may want each of them to have a different mint limit."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Limit"),": The maximum number of mints allowed per wallet for that identifier.")),(0,a.kt)(r.U,{mdxType:"Accordion"},(0,a.kt)(r.Q,{title:"JavaScript \u2014 Umi library (recommended)",open:!0,mdxType:"AccordionItem"},(0,a.kt)("div",{className:"accordion-item-padding"},(0,a.kt)("p",null,"Here\u2019s how we can set up a Candy Machine using the Mint Limit guard."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"create(umi, {\n  // ...\n  guards: {\n    mintLimit: some({ id: 1, limit: 5 }),\n  },\n});\n")),(0,a.kt)("p",null,"API References: ",(0,a.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/functions/create.html"},"create"),", ",(0,a.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/types/MintLimit.html"},"MintLimit")))),(0,a.kt)(r.Q,{title:"JavaScript \u2014 SDK",mdxType:"AccordionItem"},(0,a.kt)("div",{className:"accordion-item-padding"},(0,a.kt)("p",null,"Here\u2019s how we can set up a Candy Machine using the Mint Limit guard via the JS SDK."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const { candyMachine } = await metaplex.candyMachines().create({\n  // ...\n  guards: {\n    mintLimit: {\n      id: 1,\n      limit: 5,\n    },\n  },\n});\n")),(0,a.kt)("p",null,"API References: ",(0,a.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create"},"Operation"),", ",(0,a.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html"},"Input"),", ",(0,a.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html"},"Output"),", ",(0,a.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create"},"Transaction Builder"),", ",(0,a.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.MintLimitGuardSettings.html"},"Guard Settings"),".")))),(0,a.kt)("h2",{id:"mint-settings"},"Mint Settings"),(0,a.kt)("p",null,"The Mint Limit guard contains the following Mint Settings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ID"),": A unique identifier for this guard.")),(0,a.kt)("p",null,"Note that, if you\u2019re planning on constructing instructions without the help of our SDKs, you will need to provide these Mint Settings and more as a combination of instruction arguments and remaining accounts. See the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/mpl-candy-machine/tree/main/programs/candy-guard#mintlimit"},"Candy Guard\u2019s program documentation")," for more details."),(0,a.kt)(r.U,{mdxType:"Accordion"},(0,a.kt)(r.Q,{title:"JavaScript \u2014 Umi library (recommended)",open:!0,mdxType:"AccordionItem"},(0,a.kt)("div",{className:"accordion-item-padding"},(0,a.kt)("p",null,"You may pass the Mint Settings of the Mint Limit guard using the ",(0,a.kt)("inlineCode",{parentName:"p"},"mintArgs")," argument like so."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"mintV2(umi, {\n  // ...\n  mintArgs: {\n    mintLimit: some({ id: 1 }),\n  },\n});\n")),(0,a.kt)("p",null,"API References: ",(0,a.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/functions/mintV2.html"},"mintV2"),", ",(0,a.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/types/MintLimitMintArgs.html"},"MintLimitMintArgs")))),(0,a.kt)(r.Q,{title:"JavaScript \u2014 SDK",mdxType:"AccordionItem"},(0,a.kt)("div",{className:"accordion-item-padding"},(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The JS SDK does not require any Mint Settings for the Mint Limit guard since it can infer them from the provided Candy Machine model."))))),(0,a.kt)("h2",{id:"route-instruction"},"Route Instruction"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The Mint Limit guard does not support the route instruction.")))}u.isMDXComponent=!0},39134:function(e,t,n){t.Z=n.p+"assets/images/CandyMachinesV3-GuardsMintLimit-e4fbb2023a76dafcb0a73d5dd5fa63f5.png"}}]);