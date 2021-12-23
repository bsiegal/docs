"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2472],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=d(t),m=i,h=s["".concat(l,".").concat(m)]||s[m]||u[m]||r;return t?a.createElement(h,o(o({ref:n},p),{},{components:t})):a.createElement(h,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=s;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},11501:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return s}});var a=t(83117),i=t(80102),r=(t(67294),t(3905)),o=["components"],c={},l="Update the Candy Machine",d={unversionedId:"candy-machine-v2/Update",id:"candy-machine-v2/Update",title:"Update the Candy Machine",description:"Any configuration setting can be updated in the CMv2 with a single command.",source:"@site/docs/candy-machine-v2/09-Update.md",sourceDirName:"candy-machine-v2",slug:"/candy-machine-v2/Update",permalink:"/candy-machine-v2/Update",editUrl:"https://github.com/metaplex/docs/tree/main/docs/candy-machine-v2/09-Update.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"sidebar",previous:{title:"A Front End Experience for Minting",permalink:"/candy-machine-v2/MintFrontend"},next:{title:"Introduction",permalink:"/fair-launch/introduction"}},p=[{value:"Update Settings",id:"update-settings",children:[],level:2},{value:"Update Authority",id:"update-authority",children:[],level:2}],u={toc:p};function s(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"update-the-candy-machine"},"Update the Candy Machine"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Any")," configuration setting can be updated in the ",(0,r.kt)("inlineCode",{parentName:"p"},"CMv2")," with a single command."),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You need to be careful when updating a live Candy Machine, since setting a wrong value will immediately affect its functionality."))),(0,r.kt)("h2",{id:"update-settings"},"Update Settings"),(0,r.kt)("p",null,"You will need to prepare an updated config file with the updated setting values. For example, if we want to change the mint price from the original value of ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"0.5")," SOL, we would modify our ",(0,r.kt)("inlineCode",{parentName:"p"},"config.json")," file to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "price": 0.5,\n    "number": 10,\n    "gatekeeper": null,\n    "solTreasuryAccount": "<YOUR WALLET ADDRESS>",\n    "splTokenAccount": null,\n    "splToken": null,\n    "goLiveDate": "25 Dec 2021 00:00:00 GMT",\n    "endSettings": null,\n    "whitelistMintSettings": null,\n    "hiddenSettings": null,\n    "storage": "arweave",\n    "ipfsInfuraProjectId": null,\n    "ipfsInfuraSecret": null,\n    "awsS3Bucket": null,\n    "noRetainAuthority": false,\n    "noMutable": false\n}\n')),(0,r.kt)("p",null,"With the updated config file, we need to run the ",(0,r.kt)("inlineCode",{parentName:"p"},"update_candy_machine")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts update_candy_machine \\\n    -e devnet \\\n    -k ~/.config/solana/devnet.json \\\n    -cp config.json \\\n    -c example\n")),(0,r.kt)("p",null,"If successful, the command will output the message with the update transaction confirmation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"update_candy_machine finished 2zT344ZjS5FSJFsZRYE7Yu7Fg9sBtDQESSzPv1kNGezP7Mx8vDbf8geDQGvC3iMdbfo2GWCdPrZbsq58ZwmQ8136\n")),(0,r.kt)("h2",{id:"update-authority"},"Update Authority"),(0,r.kt)("p",null,"You can also update the authority of the Candy Machine, which is equivalent to giving away the control of the Candy Machine."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts update_candy_machine \\\n    -e devnet \\\n    -k ~/.config/solana/devnet.json \\\n    -cp config.json \\\n    -c example\n    --new-authority 7idYCnwadSG8quKNr2qqtt2WVTGy8xwTF5uFvAuHyY1g\n")),(0,r.kt)("p",null,"The command above transfers the authority of the Candy Machine to the wallet ",(0,r.kt)("inlineCode",{parentName:"p"},"7idYCnwadSG8quKNr2qqtt2WVTGy8xwTF5uFvAuHyY1g"),". After this point, only the owner of that wallet can operate the Candy Machine."),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This operation is irreversible, once you change the authority of the Candy Machine, you will lose the right to operate it."))))}s.isMDXComponent=!0}}]);