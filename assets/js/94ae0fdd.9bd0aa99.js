"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1107],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(h,o(o({ref:t},s),{},{components:a})):n.createElement(h,o({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4067:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var n=a(83117),r=(a(67294),a(3905));const i={description:"Lists the various libraries you can use to manage Candy Machines."},o="Getting Started",l={unversionedId:"programs/candy-machine/getting-started",id:"programs/candy-machine/getting-started",title:"Getting Started",description:"Lists the various libraries you can use to manage Candy Machines.",source:"@site/docs/01-programs/02-candy-machine/01-getting-started.md",sourceDirName:"01-programs/02-candy-machine",slug:"/programs/candy-machine/getting-started",permalink:"/programs/candy-machine/getting-started",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/02-candy-machine/01-getting-started.md",tags:[],version:"current",lastUpdatedAt:1684778423,formattedLastUpdatedAt:"May 22, 2023",sidebarPosition:1,frontMatter:{description:"Lists the various libraries you can use to manage Candy Machines."},sidebar:"sidebar",previous:{title:"Overview",permalink:"/programs/candy-machine/overview"},next:{title:"Candy Machine Settings",permalink:"/programs/candy-machine/candy-machine-settings"}},p={},c=[{value:"JavaScript",id:"javascript",level:2},{value:"Umi library (recommended)",id:"umi-library-recommended",level:3},{value:"Solita library",id:"solita-library",level:3},{value:"JS SDK",id:"js-sdk",level:3},{value:"Rust",id:"rust",level:2},{value:"Swift",id:"swift",level:2},{value:"Kotlin",id:"kotlin",level:2}],s={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"This page aims to help you get started with Candy Machines by listing all relevant libraries that interact with them."),(0,r.kt)("h2",{id:"javascript"},"JavaScript"),(0,r.kt)("p",null,"If you are developing for the web or using ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"Node.js"),", then we have a few libraries at your disposal."),(0,r.kt)("h3",{id:"umi-library-recommended"},"Umi library (recommended)"),(0,r.kt)("p",null,"Metaplex provides a Umi-compatible library that can be used to interact with Candy Machines. Thanks to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/umi"},"Umi framework"),", it ships without any opinionated dependencies and, thus, provides a lightweight library that can be used in any JavaScript project."),(0,r.kt)("p",null,"To get started, you'll need to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/umi/blob/main/docs/installation.md"},"install the Umi framework")," and the Umi-compatible Candy Machine library \u2014 which is currently under the ",(0,r.kt)("inlineCode",{parentName:"p"},"alpha")," tag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install \\\n  @metaplex-foundation/umi \\\n  @metaplex-foundation/umi-bundle-defaults \\\n  @solana/web3.js \\\n  @metaplex-foundation/mpl-candy-machine@alpha\n")),(0,r.kt)("p",null,"Next, you may create your ",(0,r.kt)("inlineCode",{parentName:"p"},"Umi")," instance and install the ",(0,r.kt)("inlineCode",{parentName:"p"},"mplCandyMachine")," plugin like so."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";\nimport { mplCandyMachine } from "@metaplex-foundation/mpl-candy-machine";\n\n// Use the RPC endpoint of your choice.\nconst umi = createUmi("http://127.0.0.1:8899").use(mplCandyMachine());\n')),(0,r.kt)("p",null,"That's it, you can now interact with Candy Machines by using ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/"},"the various functions provided by the library")," and passing your ",(0,r.kt)("inlineCode",{parentName:"p"},"Umi")," instance to them. Here's an example of fetching a candy machine account and its associated candy guard account."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { publicKey } from "@metaplex-foundation/umi";\nimport {\n  fetchCandyMachine,\n  fetchCandyGuard,\n} from "@metaplex-foundation/mpl-candy-machine";\n\nconst candyMachinePublicKey = publicKey("...");\nconst candyMachine = await fetchCandyMachine(umi, candyMachinePublicKey);\nconst candyGuard = await fetchCandyGuard(umi, candyMachine.mintAuthority);\n')),(0,r.kt)("p",null,"\ud83d\udd17 ",(0,r.kt)("strong",{parentName:"p"},"Helpful Links:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/metaplex-foundation/umi"},"Umi Framework")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/metaplex-foundation/mpl-candy-machine"},"GitHub Repository")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@metaplex-foundation/mpl-candy-machine"},"NPM Package")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mpl-candy-machine-js-docs.vercel.app/"},"API References"))),(0,r.kt)("h3",{id:"solita-library"},"Solita library"),(0,r.kt)("p",null,"Before releasing the Umi framework, we provided program-specific libraries generated by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/solita"},"Solita")," which are still available for you to use. Since candy machines are composed of two programs, you will need to install two libraries."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Candy Machine Core"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/metaplex-foundation/mpl-candy-machine/tree/main/clients/js-solita-candy-machine-core"},"GitHub Repository")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@metaplex-foundation/mpl-candy-machine-core"},"NPM Package")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://metaplex-foundation.github.io/metaplex-program-library/docs/candy-machine-core/index.html"},"API References")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Candy Guard"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/metaplex-foundation/mpl-candy-machine/tree/main/clients/js-solita-candy-guard"},"GitHub Repository")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@metaplex-foundation/mpl-candy-guard"},"NPM Package")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://metaplex-foundation.github.io/mpl-candy-guard/index.html"},"API References"))))),(0,r.kt)("h3",{id:"js-sdk"},"JS SDK"),(0,r.kt)("p",null,"Before releasing the Umi framework, we provided a monolithic ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/js"},"JavaScript SDK")," that encapsulated the Solita library into one big heavy API. This SDK is still available for you to use but we now recommend using the Umi library instead. Also, note that the JS SDK does not support minting Programmable NFTs."),(0,r.kt)("p",null,"Once the JS SDK is installed, you can access its Candy Machine module via ",(0,r.kt)("inlineCode",{parentName:"p"},"metaplex.candyMachines()"),". It is composed of several methods that focus on real use cases to make our life easier. Here are some of them."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"metaplex.candyMachines().create();\nmetaplex.candyMachines().update();\nmetaplex.candyMachines().insertItems();\nmetaplex.candyMachines().delete();\nmetaplex.candyMachines().mint();\nmetaplex.candyMachines().findByAddress();\nmetaplex.candyMachines().callGuardRoute();\n")),(0,r.kt)("p",null,"\ud83d\udd17 ",(0,r.kt)("strong",{parentName:"p"},"Helpful Links:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/metaplex-foundation/js"},"GitHub Repository")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@metaplex-foundation/js"},"NPM Package")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html"},"API References"))),(0,r.kt)("h2",{id:"rust"},"Rust"),(0,r.kt)("p",null,"If you are developing in Rust, you can also use the Rust crates to interact with Metaplex\u2019s programs. Since our programs are written in Rust, these crates should contain everything you need to parse accounts and build instructions."),(0,r.kt)("p",null,"This can be helpful when developing Rust clients but also when making ",(0,r.kt)("a",{parentName:"p",href:"https://solanacookbook.com/references/programs.html#how-to-do-cross-program-invocation"},"CPI calls")," to Metaplex programs within your own program."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Candy Machine Core"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/metaplex-foundation/mpl-candy-machine/tree/main/programs/candy-machine-core"},"GitHub Repository")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://crates.io/crates/mpl-candy-machine-core"},"Crate Page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/mpl-candy-machine-core/0.1.0/mpl_candy_machine_core/"},"API References")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Candy Guard"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/metaplex-foundation/mpl-candy-machine/tree/main/programs/candy-guard"},"GitHub Repository")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://crates.io/crates/mpl-candy-guard"},"Crate Page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/mpl-candy-guard/0.1.0/mpl_candy_guard/"},"API References"))))),(0,r.kt)("h2",{id:"swift"},"Swift"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Coming soon.")),(0,r.kt)("h2",{id:"kotlin"},"Kotlin"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Coming soon.")))}m.isMDXComponent=!0}}]);