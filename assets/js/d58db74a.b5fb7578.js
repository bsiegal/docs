"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8996],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,h=p["".concat(l,".").concat(u)]||p[u]||m[u]||o;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},38545:function(e,t,n){n.d(t,{Q:function(){return c},U:function(){return i}});var a=n(67294),r=n(45697),o=n.n(r);function i(e){let{children:t}=e;return a.createElement("div",{className:"accordion"},t)}function c(e){let{open:t,title:n,actions:r,keepAlive:o=!0,children:i}=e;const[c,d]=(0,a.useState)(t),s=c||o;return a.createElement("div",{className:["accordion-item",c?"accordion-item-opened":"accordion-item-closed"].join(" ")},a.createElement("div",{className:"accordion-item-header",onClick:()=>d(!c)},a.createElement("h3",null,a.createElement(l,{opened:c}),a.createElement("span",null,n)),r),a.createElement("div",{className:"accordion-item-content"},s&&i))}function l(e){let{opened:t}=e;return t?a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M215.4,92.9A8,8,0,0,0,208,88H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8l80,80a8.2,8.2,0,0,0,11.4,0l80-80A8.4,8.4,0,0,0,215.4,92.9Z"})):a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M181.7,122.3l-80-80a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,88,48V208a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l80-80A8.1,8.1,0,0,0,181.7,122.3Z"}))}i.propTypes={children:o().any},c.propTypes={open:o().bool,title:o().string,children:o().any,actions:o().any,keepAlive:o().bool},l.propTypes={opened:o().bool}},61659:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var a=n(83117),r=(n(67294),n(3905)),o=n(38545);const i={description:"Explains how to mint Programmable NFTs from candy machines."},c="Programmable NFTs",l={unversionedId:"programs/candy-machine/programmable-nfts",id:"programs/candy-machine/programmable-nfts",title:"Programmable NFTs",description:"Explains how to mint Programmable NFTs from candy machines.",source:"@site/docs/01-programs/02-candy-machine/09-programmable-nfts.md",sourceDirName:"01-programs/02-candy-machine",slug:"/programs/candy-machine/programmable-nfts",permalink:"/programs/candy-machine/programmable-nfts",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/02-candy-machine/09-programmable-nfts.md",tags:[],version:"current",lastUpdatedAt:1679326952,formattedLastUpdatedAt:"Mar 20, 2023",sidebarPosition:9,frontMatter:{description:"Explains how to mint Programmable NFTs from candy machines."},sidebar:"sidebar",previous:{title:"Minting",permalink:"/programs/candy-machine/minting"},next:{title:"Available Guards",permalink:"/programs/candy-machine/available-guards"}},d={},s=[{value:"Introduction",id:"introduction",level:2},{value:"For new candy machines",id:"for-new-candy-machines",level:2},{value:"For existing candy machines",id:"for-existing-candy-machines",level:2},{value:"A new minting instruction",id:"a-new-minting-instruction",level:2},{value:"Additional reading",id:"additional-reading",level:2}],m={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"programmable-nfts"},"Programmable NFTs"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Version ",(0,r.kt)("inlineCode",{parentName:"p"},"1.7")," of Token Metadata introduced a ",(0,r.kt)("a",{parentName:"p",href:"programs/token-metadata/overview#programmable-nfts"},"new type of asset class called Programmable NFTs")," allowing, amongst other things, creators to enforce royalties on secondary sales."),(0,r.kt)("p",null,"Since version ",(0,r.kt)("inlineCode",{parentName:"p"},"1.0")," of Candy Machine Core and version ",(0,r.kt)("inlineCode",{parentName:"p"},"1.0")," of Candy Guard, it is now possible to ",(0,r.kt)("strong",{parentName:"p"},"mint Programmable NFTs from candy machines")," and even update the token standard of existing candy machines."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Note that, for JavaScript clients, the rest of the documentation currently provides examples using the Metaplex JS SDK. However, Programmable NFTs will not be supported on the JS SDK as we are working on a new JavaScript client framework that will be released soon."),(0,r.kt)("p",{parentName:"admonition"},"In the meantime, you can use the Solita-generated libraries ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@metaplex-foundation/mpl-candy-machine-core"},"mpl-candy-machine-core")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.2.1")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@metaplex-foundation/mpl-candy-guard"},"mpl-candy-guard")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.4.1")," since these are the ones the current JS SDK use under the hood. Thus, we will use these libraries to provide examples on this page.")),(0,r.kt)("h2",{id:"for-new-candy-machines"},"For new candy machines"),(0,r.kt)("p",null,"A new instruction called ",(0,r.kt)("inlineCode",{parentName:"p"},"initializeV2")," has been added to the Candy Machine Core program. This instruction is similar to the ",(0,r.kt)("inlineCode",{parentName:"p"},"initialize")," instruction, but it allows you to specify the token standard you want to use for your candy machine. This instruction will mark the newly created Candy Machine as ",(0,r.kt)("inlineCode",{parentName:"p"},"V2")," to differentiate it from the ",(0,r.kt)("inlineCode",{parentName:"p"},"V1")," Candy Machines that do not store the token standard. These new fields are using existing padding in the Candy Machine account data to avoid breaking changes in the Candy Machine serialization logic."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"initializeV2")," instruction can also be used to create a Candy Machine that mints regular NFTs and, therefore, the ",(0,r.kt)("inlineCode",{parentName:"p"},"initialize")," instruction is now deprecated. Note that no changes are needed for the Candy Guard program here since it delegates to the Candy Machine Core when minting the NFT."),(0,r.kt)("p",null,"Also, note that some optional accounts may be required depending on the token standard you choose. For example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"ruleSet")," account may be provided to assign a specific rule set to all minted Programmable NFTs. If no ",(0,r.kt)("inlineCode",{parentName:"p"},"ruleSet")," account is provided, it will use the rule set of the Collection NFT if any. Otherwise, minted Programmable NFTs will simply not have any rule set assigned. On the other hand, the ",(0,r.kt)("inlineCode",{parentName:"p"},"ruleSet")," account will be ignored when minting regular NFTs."),(0,r.kt)("p",null,"Additionally, the ",(0,r.kt)("inlineCode",{parentName:"p"},"collectionDelegateRecord")," account should now refer to the new ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/mpl-token-metadata/latest/mpl_token_metadata/state/struct.MetadataDelegateRecord.html"},"Metadata Delegate Record")," from Token Metadata."),(0,r.kt)(o.U,{mdxType:"Accordion"},(0,r.kt)(o.Q,{title:"Solita library",open:!0,mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { createInitializeV2Instruction } from "@metaplex-foundation/mpl-candy-machine-core";\nimport { TokenStandard } from "@metaplex-foundation/mpl-token-metadata";\n\nconst initializeV2Instruction: TransactionInstruction =\n  createInitializeV2Instruction(\n    {\n      authorityPda,\n      collectionUpdateAuthority,\n      candyMachine,\n      authority,\n      payer,\n      ruleSet,\n      collectionMetadata,\n      collectionMint,\n      collectionMasterEdition,\n      collectionDelegateRecord,\n      tokenMetadataProgram,\n      systemProgram,\n      sysvarInstructions,\n    },\n    {\n      data: {...},\n      tokenStandard: TokenStandard.ProgrammableNonFungible,\n    }\n  );\n')),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/metaplex-program-library/docs/candy-machine-core/functions/createInitializeV2Instruction.html"},"Typedoc"),", ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/mpl-candy-machine-core/1.0.0/mpl_candy_machine_core/accounts/struct.InitializeV2.html"},"Program"),".")))),(0,r.kt)("h2",{id:"for-existing-candy-machines"},"For existing candy machines"),(0,r.kt)("p",null,"It is possible to update the token standard of existing Candy Machines via the new ",(0,r.kt)("inlineCode",{parentName:"p"},"setTokenStandard")," instruction. When calling this instruction on a Candy Machine ",(0,r.kt)("inlineCode",{parentName:"p"},"V1"),", it will also upgrade the Candy Machine to ",(0,r.kt)("inlineCode",{parentName:"p"},"V2")," and store the token standard in the account data."),(0,r.kt)(o.U,{mdxType:"Accordion"},(0,r.kt)(o.Q,{title:"Solita library",open:!0,mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { createSetTokenStandardInstruction } from "@metaplex-foundation/mpl-candy-machine-core";\nimport { TokenStandard } from "@metaplex-foundation/mpl-token-metadata";\n\nconst setTokenStandardInstruction: TransactionInstruction =\n  createSetTokenStandardInstruction(\n    {\n      authority,\n      authorityPda,\n      candyMachine,\n      collectionAuthorityRecord,\n      collectionDelegateRecord,\n      collectionMetadata,\n      collectionMint,\n      collectionUpdateAuthority,\n      payer,\n      ruleSet,\n      sysvarInstructions,\n      tokenMetadataProgram,\n    },\n    {\n      tokenStandard: TokenStandard.ProgrammableNonFungible,\n    }\n  );\n')),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/metaplex-program-library/docs/candy-machine-core/functions/createSetTokenStandardInstruction.html"},"Typedoc"),", ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/mpl-candy-machine-core/1.0.0/mpl_candy_machine_core/accounts/struct.SetTokenStandard.html"},"Program"),".")))),(0,r.kt)("p",null,"Additionally, a new ",(0,r.kt)("inlineCode",{parentName:"p"},"setCollectionV2")," instruction has been added to support setting a collection that is compatible with Programmable NFTs. This instruction also works with regular NFTs and deprecates the ",(0,r.kt)("inlineCode",{parentName:"p"},"setCollection")," instruction."),(0,r.kt)(o.U,{mdxType:"Accordion"},(0,r.kt)(o.Q,{title:"Solita library",open:!0,mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { createSetCollectionV2Instruction } from "@metaplex-foundation/mpl-candy-machine-core";\n\nconst setCollectionV2Instruction: TransactionInstruction =\n  createSetCollectionV2Instruction({\n    authority,\n    authorityPda,\n    candyMachine,\n    collectionDelegateRecord,\n    collectionMetadata,\n    collectionMint,\n    collectionUpdateAuthority,\n    newCollectionDelegateRecord,\n    newCollectionMasterEdition,\n    newCollectionMetadata,\n    newCollectionMint,\n    newCollectionUpdateAuthority,\n    payer,\n    sysvarInstructions,\n    tokenMetadataProgram,\n  });\n')),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/metaplex-program-library/docs/candy-machine-core/functions/createSetCollectionV2Instruction.html"},"Typedoc"),", ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/mpl-candy-machine-core/1.0.0/mpl_candy_machine_core/accounts/struct.SetCollectionV2.html"},"Program"),".")))),(0,r.kt)("h2",{id:"a-new-minting-instruction"},"A new minting instruction"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"mint")," instruction of both the Candy Machine Core and the Candy Guard programs has been updated to support minting Programmable NFTs. This new instruction is called ",(0,r.kt)("inlineCode",{parentName:"p"},"mintV2")," and it is similar to the ",(0,r.kt)("inlineCode",{parentName:"p"},"mint")," instruction, but requires additional accounts to be passed in. Here as well, the new ",(0,r.kt)("inlineCode",{parentName:"p"},"mintV2")," instructions can be used to mint regular NFTs and, therefore, they deprecate the existing ",(0,r.kt)("inlineCode",{parentName:"p"},"mint")," instructions."),(0,r.kt)(o.U,{mdxType:"Accordion"},(0,r.kt)(o.Q,{title:"Solita library",open:!0,mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { createMintV2Instruction } from "@metaplex-foundation/mpl-candy-guard";\n\nconst mintV2Instruction: TransactionInstruction = createMintV2Instruction(\n  {\n    candyGuard,\n    candyMachine,\n    candyMachineAuthorityPda,\n    candyMachineProgram,\n    collectionDelegateRecord,\n    collectionMasterEdition,\n    collectionMetadata,\n    collectionMint,\n    collectionUpdateAuthority,\n    minter,\n    nftMasterEdition,\n    nftMetadata,\n    nftMint,\n    nftMintAuthority,\n    payer,\n    recentSlothashes,\n    splTokenProgram,\n    sysvarInstructions,\n    token,\n    tokenMetadataProgram,\n    tokenRecord,\n    anchorRemainingAccounts: [], // Any remaining accounts used by registered guards.\n  },\n  {\n    label: null, // Or the label of the group when minting from one.\n    mintArgs: new Uint8Array([]), // The serialized data to pass to registered guards when applicable.\n  }\n);\n')),(0,r.kt)("p",null,"API References:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Candy Guard ",(0,r.kt)("a",{parentName:"li",href:"https://metaplex-foundation.github.io/mpl-candy-guard/functions/createMintV2Instruction.html"},"Typedoc"),", ",(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/mpl-candy-guard/latest/mpl_candy_guard/accounts/struct.MintV2.html"},"Program"),"."),(0,r.kt)("li",{parentName:"ul"},"Candy Machine Core: ",(0,r.kt)("a",{parentName:"li",href:"https://metaplex-foundation.github.io/metaplex-program-library/docs/candy-machine-core/functions/createMintV2Instruction.html"},"Typedoc"),", ",(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/mpl-candy-machine-core/1.0.0/mpl_candy_machine_core/accounts/struct.MintV2.html"},"Program"),"."))))),(0,r.kt)("p",null,"Note that some of the guards offered by the Candy Guard program have also been updated to support Programmable NFTs. Whilst the updates do not introduce breaking changes when minting regular NFTs, they may expect more remaining accounts when minting depending on the token standard."),(0,r.kt)("p",null,"The guards affected by these changes are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"nftBurn")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"nftPayment")," guards which now allow the burned/sent NFT to be a Programmable NFT."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"FreezeSolPayment")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"FreezeTokenPayment")," guards. Since Programmable NFTs are by definition always frozen, they are Locked when minted via a Utility delegate and Unlocked when the thaw conditions have been met.")),(0,r.kt)("h2",{id:"additional-reading"},"Additional reading"),(0,r.kt)("p",null,"You may find the following resources about Programmable NFTs and Candy Machines useful:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/metaplex-foundation/metaplex-program-library/blob/master/token-metadata/program/ProgrammableNFTGuide.md"},"Programmable NFTs Guide")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/metaplex-foundation/metaplex-program-library/tree/master/candy-machine-core/program"},"Candy Machine Core Program")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/metaplex-foundation/mpl-candy-guard/tree/main"},"Candy Guard Program")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://metaplex-foundation.github.io/metaplex-program-library/docs/candy-machine-core/index.html"},"Candy Machine Core JS Typedoc")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://metaplex-foundation.github.io/mpl-candy-guard/index.html"},"Candy Guard JS Typedoc"))))}p.isMDXComponent=!0}}]);