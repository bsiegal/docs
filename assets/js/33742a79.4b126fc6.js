"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1619],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80969:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var a=n(83117),r=(n(67294),n(3905));const i={title:"v1.3"},o="Version 1.3",l={unversionedId:"programs/token-metadata/changelog/v1.3",id:"programs/token-metadata/changelog/v1.3",title:"v1.3",description:"New Features",source:"@site/docs/01-programs/01-token-metadata/08-changelog/01-v1.3.md",sourceDirName:"01-programs/01-token-metadata/08-changelog",slug:"/programs/token-metadata/changelog/v1.3",permalink:"/programs/token-metadata/changelog/v1.3",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/01-token-metadata/08-changelog/01-v1.3.md",tags:[],version:"current",lastUpdatedAt:1668084861,formattedLastUpdatedAt:"Nov 10, 2022",sidebarPosition:1,frontMatter:{title:"v1.3"},sidebar:"sidebar",previous:{title:"v1.4",permalink:"/programs/token-metadata/changelog/v1.4"},next:{title:"v1.2",permalink:"/programs/token-metadata/changelog/v1.2"}},c={},u=[{value:"New Features",id:"new-features",level:2},{value:"New Instructions",id:"new-instructions",level:2},{value:"Deprecations",id:"deprecations",level:2},{value:"Additional Links",id:"additional-links",level:2}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"version-13"},"Version 1.3"),(0,r.kt)("h2",{id:"new-features"},"New Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sized Collections"),(0,r.kt)("li",{parentName:"ul"},"Burning NFTs"),(0,r.kt)("li",{parentName:"ul"},"Set Token Standard")),(0,r.kt)("h2",{id:"new-instructions"},"New Instructions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CreateMetadataAccountV3"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Same as ",(0,r.kt)("inlineCode",{parentName:"li"},"CreateMetadataAccount2"),", but supports ",(0,r.kt)("inlineCode",{parentName:"li"},"CollectionDetails")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"VerifySizeCollectionItem"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Allows a sized collection item ",(0,r.kt)("inlineCode",{parentName:"li"},"verified")," flag to become ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," on an NFT to represent a Certified Collection. Essentially this officially adds to a Collection."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UnVerifySizedCollectionItem"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Allows a sized collection ",(0,r.kt)("inlineCode",{parentName:"li"},"verified")," flag to become ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," on an NFT to represent a Certified Collection. Essentially this officially removes from a Collection."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SetAndVerifySizedCollectionItem"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Allows both setting and verifying, in the same instruction, the collection item for a sized collection."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SetCollectionSize"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Allows an unsized collecetion to set its size once to migrate to the new sized collection standard."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SetTokenStandard"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Allows a token without a token standard to have it set. The program automatically detects and sets the correct token standard type."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BurnNft"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Allows the owner of a NFT to burn it and reclaim funds locked up in token, metadata and edition accounts.")))),(0,r.kt)("h2",{id:"deprecations"},"Deprecations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The following instruction now shows a deprecation warning when executed",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CreateMetadataAccountV2")," - ",(0,r.kt)("em",{parentName:"li"},"please use ",(0,r.kt)("inlineCode",{parentName:"em"},"CreateMetadataAccountV3")," instead"))))),(0,r.kt)("h2",{id:"additional-links"},"Additional Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/metaplex-foundation/metaplex-program-library/discussions/444"},"Token Metadata V1.3 Proposal"))))}p.isMDXComponent=!0}}]);