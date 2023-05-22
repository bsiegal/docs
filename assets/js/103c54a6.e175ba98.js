"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1437],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),d=a,f=h["".concat(c,".").concat(d)]||h[d]||p[d]||i;return n?o.createElement(f,r(r({ref:t},u),{},{components:n})):o.createElement(f,r({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},48874:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return r},default:function(){return p},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l}});var o=n(83117),a=(n(67294),n(3905));const i={description:"FAQ"},r="Auction House FAQ",s={unversionedId:"programs/auction-house/faq",id:"programs/auction-house/faq",title:"Auction House FAQ",description:"FAQ",source:"@site/docs/01-programs/03-auction-house/11-faq.md",sourceDirName:"01-programs/03-auction-house",slug:"/programs/auction-house/faq",permalink:"/programs/auction-house/faq",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/03-auction-house/11-faq.md",tags:[],version:"current",lastUpdatedAt:1684778423,formattedLastUpdatedAt:"May 22, 2023",sidebarPosition:11,frontMatter:{description:"FAQ"},sidebar:"sidebar",previous:{title:"Timed Auction",permalink:"/programs/auction-house/auctioneers/timed-auction/"},next:{title:"Updates",permalink:"/programs/auction-house/updates"}},c={},l=[{value:"Can I get fees when NFTs get sold-on my Auction House?",id:"can-i-get-fees-when-nfts-get-sold-on-my-auction-house",level:2},{value:"Does the Auction House restrict the user from selling their NFT on another Non-Auction House marketplace?",id:"does-the-auction-house-restrict-the-user-from-selling-their-nft-on-another-non-auction-house-marketplace",level:2},{value:"Can people view the settings of my Auction House?",id:"can-people-view-the-settings-of-my-auction-house",level:2},{value:"Can the Auction House change the sale price on my NFT?",id:"can-the-auction-house-change-the-sale-price-on-my-nft",level:2},{value:"What&#39;s the difference between public and private bids?",id:"whats-the-difference-between-public-and-private-bids",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"auction-house-faq"},"Auction House FAQ"),(0,a.kt)("h2",{id:"can-i-get-fees-when-nfts-get-sold-on-my-auction-house"},"Can I get fees when NFTs get sold-on my Auction House?"),(0,a.kt)("p",null,"Yes, An Auction House may be configured to take ",(0,a.kt)("inlineCode",{parentName:"p"},"seller fee basis points"),". This is part of the create and update command; see the CLI use it."),(0,a.kt)("p",null,"Fees are paid to Creators,Then the Auction house and the seller gets the remainder of the sale. This is easy to calculate on your UI by taking the NFT royalties, Sale price, Auction House fee and displaying to the buyer what their total gains will be."),(0,a.kt)("h2",{id:"does-the-auction-house-restrict-the-user-from-selling-their-nft-on-another-non-auction-house-marketplace"},"Does the Auction House restrict the user from selling their NFT on another Non-Auction House marketplace?"),(0,a.kt)("p",null,"No, the Auction House cannot stop users from sending their NFT even if they have a for-sale listing. If this happens, the ",(0,a.kt)("inlineCode",{parentName:"p"},"execute_sale")," operation will fail and the buyer can get their funds back by canceling their bid.\nMarketplaces creating an Auction House experience will need to track the Buy/Sell trade state accounts and watch the TokenAccounts of sellers, so they can automatically cancel the listing and bids on NFTs that have been transferred from the original seller."),(0,a.kt)("p",null,"Specifically Marketplaces should currently store:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Trade Stade Account Keys"),(0,a.kt)("li",{parentName:"ol"},"Trade State Token Size and Price parts of the seed"),(0,a.kt)("li",{parentName:"ol"},"Token Account Keys that are stored in the trade state"),(0,a.kt)("li",{parentName:"ol"},"Auction House Receipts (Listing Receipts, Bid Receipts, and Purchase Receipts)")),(0,a.kt)("p",null,"Specifically Marketplaces need to track these two events on Token Accounts:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Ownership has changed from the original Seller of the NFT"),(0,a.kt)("li",{parentName:"ol"},"Token Account Amount has changed to 0")),(0,a.kt)("p",null,"If these events happen the Auction House Authority can call instructions to cancel the bids and listings without the seller or buyer needing to be present."),(0,a.kt)("h2",{id:"can-people-view-the-settings-of-my-auction-house"},"Can people view the settings of my Auction House?"),(0,a.kt)("p",null,"Yes anyone can and should be able to verify the settings of your Auction House especially the ",(0,a.kt)("inlineCode",{parentName:"p"},"Can Change Sale Price")," parameter.\nThis can be done on the CLI with the ",(0,a.kt)("inlineCode",{parentName:"p"},"show")," command."),(0,a.kt)("h2",{id:"can-the-auction-house-change-the-sale-price-on-my-nft"},"Can the Auction House change the sale price on my NFT?"),(0,a.kt)("p",null,"Yes, but only in a certain scenario. The following conditions are required in order for an Auction House to be able to use this feature:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The Auction House instance must have ",(0,a.kt)("inlineCode",{parentName:"li"},"Can Change Sale Price")," set to ",(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ol"},"The NFT seller must list the NFT for sale at a price of 0. ")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"The Auction House can only sell it for 0 if you sign the transaction with your key, but currently it can sell it for an arbitrarily low price, e.g. 1 lamport. It is important to only list with Auction Houses you trust.")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"The Auction House now can use the ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," priced trade state you made in #2 to create new ",(0,a.kt)("inlineCode",{parentName:"li"},"sale")," listings at different prices. ")),(0,a.kt)("h2",{id:"whats-the-difference-between-public-and-private-bids"},"What's the difference between public and private bids?"),(0,a.kt)("p",null,"A standard bid, also called a private bid, refers to a bid made that's specific to an auction. When the auction is complete the bid can be canceled and the funds in escrow returned to the bidder. However, Auction House also supports public bids which are specific to the token itself and not to any specific auction. This means that a bid can stay active beyond the end of an auction and be resolved if it meets the criteria for subsequent auctions of that token."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Example:"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"Alice places a public bid on Token A for 1 SOL."),(0,a.kt)("li",{parentName:"ol"},"Bob also bids on Token A for 2 SOL."),(0,a.kt)("li",{parentName:"ol"},"Bob wins the auction and becomes the new owner of Token A."),(0,a.kt)("li",{parentName:"ol"},"A week later, Bob places Token A for auction but no one new places a bid."),(0,a.kt)("li",{parentName:"ol"},"Because Alice never canceled her public bid, hers is the sold bid on the new auction of Token A, and she wins the auction."))))}p.isMDXComponent=!0}}]);