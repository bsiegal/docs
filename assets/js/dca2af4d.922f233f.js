"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6469],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),h=a,d=m["".concat(s,".").concat(h)]||m[h]||c[h]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49770:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var r=n(83117),a=(n(67294),n(3905));const o={},i="Overview",l={unversionedId:"programs/token-entangler/overview",id:"programs/token-entangler/overview",title:"Overview",description:"Introduction",source:"@site/docs/01-programs/10-token-entangler/00-overview.md",sourceDirName:"01-programs/10-token-entangler",slug:"/programs/token-entangler/overview",permalink:"/programs/token-entangler/overview",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/10-token-entangler/00-overview.md",tags:[],version:"current",lastUpdatedAt:1684778423,formattedLastUpdatedAt:"May 22, 2023",sidebarPosition:0,frontMatter:{},sidebar:"sidebar",previous:{title:"Token Entangler",permalink:"/programs/token-entangler/"},next:{title:"SDKs",permalink:"/sdks/"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Opportunities",id:"opportunities",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Create your own!",id:"create-your-own",level:2},{value:"Further Information",id:"further-information",level:2}],p={toc:u};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Metaplex's Token Entangler program is pulled straight out of quantum mechanics! It enables you to entangle two NFTs together and make it so only one can exist in the wild at a time (and can always be exchanged with the entangled NFT). This could be useful to ",(0,a.kt)("strong",{parentName:"p"},"'de-rug'")," projects by replacing all the rugged NFTs with a new non-rug set. That's also the reason for Token Entanglers creation: To help the Exiled Apes community after the Degen Ape Academy\u2019s erroneous mint. You can find more about the back story on the exiled apes website."),(0,a.kt)("p",null,"The idea behind the program was that the initially minted NFTs with damaged metadata could be swapped to new NFTs containing proper metadata. It could also be used for derugging projects or more creative use cases."),(0,a.kt)("p",null,"These swaps are possible back and forth at any given time, even if the NFT that is not in the escrow currently is sold to a different wallet the new wallet will be able to swap it back again."),(0,a.kt)("h2",{id:"opportunities"},"Opportunities"),(0,a.kt)("p",null,"The Token Entangler Program is very simple. It takes a NFT A and returns the NFT B which has already been assigned to NFT A on token entangler creation. Nevertheless there are some opportunities which might be interesting for you: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Swap back and Forth"),": If the user swaps NFT A for NFT B he can always reverse that swap again."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Swapping Fee"),": You can introduce a swapping fee that is either paid every time a token is swapped or only once per NFT pair."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SPL token fee"),": The swapping fee can either be paid with SPL tokens or SOL. ")),(0,a.kt)("h2",{id:"how-it-works"},"How it works"),(0,a.kt)("p",null,"The user facing process is easy. They pay the Token Entangler with NFT A and (if configured SOL or SPL tokens) and receive the entangled mint B:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"mage showing the general Token Entangler process. It shows a Wallet and the Token Entangler Program as a box. The boxes are connected with two arrows. One from Wallet to Entangler with annotation &quot;NFT A + SOL&quot; and another one from Entangler to Wallet with annotation &quot;NFT B&quot;",src:n(64858).Z+"#radius",width:"1344",height:"544"})),(0,a.kt)("p",null,"This is a very reduced picture that just shows the user facing process. There are additional Accounts etc. that are not shown in this image."),(0,a.kt)("h2",{id:"create-your-own"},"Create your own!"),(0,a.kt)("p",null," The start to end from a general point of view looks like this:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Mint the new Tokens"),(0,a.kt)("li",{parentName:"ol"},"Entangle the old and new NFTs"),(0,a.kt)("li",{parentName:"ol"},"Host a customer facing website. There is a ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/metaplex-foundation/token-entangler-ui"},"sample UI implementation")),(0,a.kt)("li",{parentName:"ol"},"Have your users swap their NFTs!")),(0,a.kt)("h2",{id:"further-information"},"Further Information"),(0,a.kt)("p",null,"More general information about the Token Entangler Program can be found here in the documentation:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Getting Started"),(0,a.kt)("li",{parentName:"ul"},"Accounts"),(0,a.kt)("li",{parentName:"ul"},"Instructions"),(0,a.kt)("li",{parentName:"ul"},"CLI"),(0,a.kt)("li",{parentName:"ul"},"FAQ"),(0,a.kt)("li",{parentName:"ul"},"Changelog")),(0,a.kt)("p",null,"If you want to use the Token Entangler you can e.g. use "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/metaplex-foundation/deprecated-clis/blob/main/src/token-entangler-cli.ts"},"JS CLI")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/metaplex-foundation/token-entangler-ui"},"Token Entangler UI"))),(0,a.kt)("p",null,"Also feel free to Checkout the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/metaplex-program-library/tree/master/token-entangler/"},"GitHub Repository")," if you want to look into Token Entangler code."))}c.isMDXComponent=!0},64858:function(e,t,n){t.Z=n.p+"assets/images/Token-Entangler-Overview-Process-7d223a70506f81f2022783e04f940ed7.png"}}]);