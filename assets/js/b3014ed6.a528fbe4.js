"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),h=c(n),p=i,m=h["".concat(l,".").concat(p)]||h[p]||d[p]||o;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},38545:function(e,t,n){n.d(t,{Q:function(){return r},U:function(){return s}});var a=n(67294),i=n(45697),o=n.n(i);function s(e){let{children:t}=e;return a.createElement("div",{className:"accordion"},t)}function r(e){let{open:t,title:n,actions:i,keepAlive:o=!0,children:s}=e;const[r,c]=(0,a.useState)(t),u=r||o;return a.createElement("div",{className:["accordion-item",r?"accordion-item-opened":"accordion-item-closed"].join(" ")},a.createElement("div",{className:"accordion-item-header",onClick:()=>c(!r)},a.createElement("h3",null,a.createElement(l,{opened:r}),a.createElement("span",null,n)),i),a.createElement("div",{className:"accordion-item-content"},u&&s))}function l(e){let{opened:t}=e;return t?a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M215.4,92.9A8,8,0,0,0,208,88H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8l80,80a8.2,8.2,0,0,0,11.4,0l80-80A8.4,8.4,0,0,0,215.4,92.9Z"})):a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M181.7,122.3l-80-80a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,88,48V208a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l80-80A8.1,8.1,0,0,0,181.7,122.3Z"}))}s.propTypes={children:o().any},r.propTypes={open:o().bool,title:o().string,children:o().any,actions:o().any,keepAlive:o().bool},l.propTypes={opened:o().bool}},10247:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return r},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var a=n(83117),i=(n(67294),n(3905)),o=n(38545);const s={description:"Explains how to manage the trading of assets on Auction House."},r="Trading Assets on Auction House",l={unversionedId:"programs/auction-house/trading-assets-on-auction-house",id:"programs/auction-house/trading-assets-on-auction-house",title:"Trading Assets on Auction House",description:"Explains how to manage the trading of assets on Auction House.",source:"@site/docs/01-programs/03-auction-house/04-trading-assets-on-auction-house.md",sourceDirName:"01-programs/03-auction-house",slug:"/programs/auction-house/trading-assets-on-auction-house",permalink:"/programs/auction-house/trading-assets-on-auction-house",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/03-auction-house/04-trading-assets-on-auction-house.md",tags:[],version:"current",lastUpdatedAt:1684778423,formattedLastUpdatedAt:"May 22, 2023",sidebarPosition:4,frontMatter:{description:"Explains how to manage the trading of assets on Auction House."},sidebar:"sidebar",previous:{title:"Managing Auction Houses",permalink:"/programs/auction-house/managing-auction-house"},next:{title:"Managing Buyer Escrow Account",permalink:"/programs/auction-house/managing-buyer-account"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Listing assets",id:"listing-assets",level:2},{value:"Bidding on assets",id:"bidding-on-assets",level:2},{value:"Executing sale of assets",id:"executing-sale-of-assets",level:2},{value:"Cancel Listings and Bids",id:"cancel-listings-and-bids",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:u};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"trading-assets-on-auction-house"},"Trading Assets on Auction House"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"In the previous pages, we've talked about Auction Houses and how to create & manage them. Once an Auction House is created, assets can be traded on it. A simple trade on a marketplace usually comprises of three actions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The seller lists an asset"),(0,i.kt)("li",{parentName:"ol"},"The buyer makes a bid on the asset"),(0,i.kt)("li",{parentName:"ol"},"Once a matching bid is found for a listing, the sale is executed")),(0,i.kt)("p",null,"On this page, we will talk about these three actions and see code examples to easily execute these actions. We will also see trade scenarios that are different from the above simple trade scenario, and go through a code example to execute each scenario. Finally, we'll also explore how listings and bids can be cancelled once they are created."),(0,i.kt)("p",null,"Let us start with listing an asset on an Auction House."),(0,i.kt)("h2",{id:"listing-assets"},"Listing assets"),(0,i.kt)("p",null,"We went through the process of listing an asset in the ",(0,i.kt)("a",{parentName:"p",href:"/programs/auction-house/overview"},"Overview page"),". This action is also referred to as creating a ",(0,i.kt)("strong",{parentName:"p"},"Sell Order"),". When a sell order is created using Auction House, the asset being listed remains in the wallet of the seller. This is a very important feature of Auction House as it allows users to list assets in an escrow-less fashion and thus users still maintain custody of assets while the assets are listed."),(0,i.kt)("p",null,"The asset seller can create two types of listings depending on the price at which they list the asset:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Listing at price greater than 0"),": when a user lists an asset at a price which is greater than 0 SOL (or any other SPL-token). In this case, the seller's wallet needs to be the signer and thus this wallet should be ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Listing at price of 0"),": when a user lists an asset for 0 SOL (or any other SPL-token). In this case, the authority can sign on behalf of the seller if ",(0,i.kt)("inlineCode",{parentName:"p"},"canChangeSalePrice")," option is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," which was discussed in the ",(0,i.kt)("a",{parentName:"p",href:"/programs/auction-house/getting-started"},"Auction House settings page"),". When this happens, the Auction House finds a non-0 matching bid on behalf of the seller. The asset can only be listed and sold for a price of 0 if the seller acts as the signer. There must be one and only one signer; authority or seller must sign."))),(0,i.kt)("p",null,"Depending on the type of token being listed, the number of tokens to be listed can also be specified when creating a sell order:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In case of ",(0,i.kt)("strong",{parentName:"p"},"Non-Fungible Tokens (NFTs)"),": due to the non-fungibility and uniqueness of every token, only 1 token can be listed.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In case of ",(0,i.kt)("strong",{parentName:"p"},"Fungible Assets"),": the seller can list more than 1 tokens per listing. For example: If Alice owns 5 DUST tokens, they can list 1 or more (but less than or equal to 5) of these DUST tokens in the same sell order."))),(0,i.kt)(o.U,{mdxType:"Accordion"},(0,i.kt)(o.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("p",null,"Let us look at an example for making a listing or sell order on Auction House."),(0,i.kt)("p",null,"In the following code snippet we are making a sell order for 3 DUST tokens (fungible tokens) for a total price of 5 SOL. Important to note here is that if we were creating a sell order for an NFT, we do not have to specify the number of tokens to be listed as it will default to 1 token. Specifying any other amount will result in an error."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'await metaplex\n    .auctionHouse()\n    .createListing({\n        auctionHouse,                              // A model of the Auction House related to this listing\n        seller: Keypair.generate(),                // Creator of a listing\n        authority: Keypair.generate(),             // The Auction House authority\n        mintAccount: new PublicKey("DUST...23df"), // The mint account to create a listing for, used to find the metadata\n        tokenAccount: new PublicKey("soC...87g4"), // The token account address that\'s associated to the asset a listing created is for \n        price: 5,                                  // The listing price\n        tokens: 3                                  // The number of tokens to list, for an NFT listing it must be 1 token\n    });\n'))))),(0,i.kt)("h2",{id:"bidding-on-assets"},"Bidding on assets"),(0,i.kt)("p",null,"A user looking to buy an asset can make bids, or ",(0,i.kt)("strong",{parentName:"p"},"Buy Orders")," for that asset. "),(0,i.kt)("p",null,"There can be two types of buy orders depending on that whether the asset is listed or not:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Private bids"),": This is the most common type of bid. A user, interested in a listed asset on an Auction House, creates a private bid on the given asset. This bid is tied to the specific auction and not the asset itself. This means that when the auction is closed (either the bid is rejected and the listing is cancelled, or the bid is accepted and the asset is sold), the bid is also closed.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Public bids"),": A user can post a public bid on a non-listed NFT by skipping seller and tokenAccount properties. Public bids are specific to the token itself and not to any specific auction. This means that a bid can stay active beyond the end of an auction and be resolved if it meets the criteria for subsequent auctions of that token."))),(0,i.kt)("p",null,"Like in the case of sell orders, buy orders can also specifiy the number of tokens to be bid upon depending on the type of asset listed:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Partial Buy Order"),": We discussed the case of listing more than 1 token when listing a fungible asset. When such a sell order exists, a user can make a bid to buy only a portion of the listed tokens, or make a partial buy order. For example: if Alice listed ",(0,i.kt)("inlineCode",{parentName:"p"},"3 DUST")," tokens for ",(0,i.kt)("inlineCode",{parentName:"p"},"5 SOL"),", Alice can make a bid to buy ",(0,i.kt)("inlineCode",{parentName:"p"},"2 DUST")," tokens for ",(0,i.kt)("inlineCode",{parentName:"p"},"2 SOL"),". In other words, a user can create a buy order of said assets that is less than the ",(0,i.kt)("inlineCode",{parentName:"p"},"token_size")," of the sell order.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Complete Buy Order"),": This is the case where the buyer creates a bid to buy all the tokens listed in the sell order. In case of non-fungible assets (NFTs) where only 1 token can be listed per sell order, a complete buy order is created. Complete buy orders can also be created in case of fungible tokens."))),(0,i.kt)(o.U,{mdxType:"Accordion"},(0,i.kt)(o.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("p",null,"Let us look at an example for making a bid or buy order on Auction House."),(0,i.kt)("p",null,"In the following code snippet we are making a buy order for 3 DUST tokens (fungible tokens) for a total price of 5 SOL. Important to note here is that if we were creating a sell order for an NFT, we do not have to specify the number of tokens to be listed as it will default to 1 token. Specifying any other amount will result in an error."),(0,i.kt)("p",null,"This is an example of a private bid as we are specifying the seller account and the token account. If either one of them is not specified while creating the bid, the bid will be public."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"await metaplex\n    .auctionHouse()\n    .createBid({\n        auctionHouse,                              // A model of the Auction House related to this listing\n        buyer: Keypair.generate(),                 // Creator of a bid\n        seller: Keypair,generate(),                // The account address that holds the asset a bid created is for, if this or tokenAccount isn't provided, then the bid will be public.\n        authority: Keypair.generate(),             // The Auction House authority\n        mintAccount: new PublicKey(\"DUST...23df\"), // The mint account to create a bid for\n        tokenAccount: new PublicKey(\"soC...87g4\"), // The token account address that's associated to the asset a bid created is for, if this or seller isn't provided, then the bid will be public.\n        price: 5,                                  // The buyer's price\n        tokens: 3                                  // The number of tokens to bid on, for an NFT bid it must be 1 token\n    });\n"))))),(0,i.kt)("h2",{id:"executing-sale-of-assets"},"Executing sale of assets"),(0,i.kt)("p",null,"Now that we know how to create a listing (sell order) and a bid (buy order), we can learn how to execute sales of assets. When the sale of an asset is executed:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The Auction House transfers the bid amount from the buyer escrow account to the seller's wallet. We will talk more about the buyer escrow account and how can the marketplace authority manage funds in that account.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The Auction House transfers the asset from the seller's wallet to the buyer's wallet."))),(0,i.kt)("p",null,"Now that we know what the excution of a sale means, lets explore different trade scenarios in which assets can be sold using Auction House. We have already discussed them in great detail in the ","[overview page]"," but here's a brief explanation in addition to a code snippet for each scenario:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Direct Buy"),", or ",(0,i.kt)("em",{parentName:"p"},'"Buying" at list price'),": This is the case when the execution of the sale happens when a user bids on a listed asset. In other words, a direct buy operation creates a bid on a given asset and then executes a sale on the created bid and listing. "),(0,i.kt)("p",{parentName:"li"},"In most cases, this scenario will occur when the buyer makes a bid at the listed price of the asset. But there can be cases where marketplaces have custom order matching algorithms that work on thresholds. For example: a marketplace may have a rule to execute the sale of a given asset as soon as there is a bid which is within a range of +-20% from the listed price."))),(0,i.kt)(o.U,{mdxType:"Accordion"},(0,i.kt)(o.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("p",null,"Here's an example of direct buying an asset by a user who is interested in the listed asset."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const listing = await metaplex\n    .auctionHouse()\n    .findListingByReceipt({...}) // we will see how to fetch listings in the coming pages\n    \nconst directBuyResponse = await metaplex\n    .auctionHouse()\n    .buy({\n        auctionHouse,                   // The Auction House in which to create a Bid and execute a Sale\n        buyer: Keypair.generate(),      // Creator of a bid, should not be the same as seller who creates a Listing\n        authority: Keypair.generate(),  // The Auction House authority, if this is the Signer the\n                                        // transaction fee will be paid from the Auction House Fee Account\n        listing: listing,               // The Listing that is used in the sale, we only need a\n                                        // subset of the `Listing` model but we need enough information\n                                        // regarding its settings to know how to execute the sale.\n        price: 5,                       // The buyer's price\n    });\n"))))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Direct Sell"),", or ",(0,i.kt)("em",{parentName:"li"},'"Selling" at bid price'),": Counterpart to the case of direct buy, this is the case when a user, interested in an unlisted asset, places a bid on it. If the asset owner now lists the asset for the bid amount, the execution of the sale can take place, thus direct selling the asset.")),(0,i.kt)(o.U,{mdxType:"Accordion"},(0,i.kt)(o.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("p",null,"Here's an example of direct selling an asset by a user who is interested in a bid on the asset."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'const bid = await metaplex\n    .auctionHouse()\n    .findBidByReceipt({...}) // we will see how to fetch bids in the coming pages\n    \nconst directSellResponse = await metaplex\n    .auctionHouse()\n    .sell({\n        auctionHouse,                              // The Auction House in which to create a listing and execute a Sale\n        seller: Keypair.generate(),                // Creator of a listing, there must be one and only one signer; Authority or Seller must sign.\n        authority: Keypair.generate(),             // The Auction House authority, if this is the Signer the\n                                                   // transaction fee will be paid from the Auction House Fee Account\n        bid: bid,                                  // The Public Bid that is used in the sale, we only need a\n                                                   // subset of the `Bid` model but we need enough information\n                                                   // regarding its settings to know how to execute the sale.\n        sellerToken: new PublicKey("DUST...23df")  // The Token Account of an asset to sell, public Bid doesn\'t\n                                                   // contain a token, so it must be provided externally via this parameter\n    });\n'))))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Independant Sale Execution"),", or ",(0,i.kt)("em",{parentName:"li"},"Lister agreeing to a bid"),": This is the case when the execution of the sale takes place independantly, after a ",(0,i.kt)("strong",{parentName:"li"},"Buy Order")," (bid) and a ",(0,i.kt)("strong",{parentName:"li"},"Sell Order")," (listing) exist for a given asset.")),(0,i.kt)(o.U,{mdxType:"Accordion"},(0,i.kt)(o.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("p",null,"Here's an example of an independant sale execution."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const listing = await metaplex\n    .auctionHouse()\n    .findListingByReceipt({...}) // we will see how to fetch listings in the coming pages\n    \nconst bid = await metaplex\n    .auctionHouse()\n    .findBidByReceipt({...})     // we will see how to fetch bids in the coming pages\n    \nconst executeSaleResponse = await metaplex\n    .auctionHouse()\n    .executeSale({\n        auctionHouse,                   // The Auction House in which to create a Bid and execute a Sale\n        authority: Keypair.generate(),  // The Auction House authority, if this is the Signer the\n                                        // transaction fee will be paid from the Auction House Fee Account\n        listing: listing,               // The Listing that is used in the sale, we only need a\n                                        // subset of the `Listing` model but we need enough information\n                                        // regarding its settings to know how to execute the sale.\n        bid: bid,                       // The Public Bid that is used in the sale, we only need a\n                                        // subset of the `Bid` model but we need enough information\n                                        // regarding its settings to know how to execute the sale.\n    });\n"))))),(0,i.kt)("h2",{id:"cancel-listings-and-bids"},"Cancel Listings and Bids"),(0,i.kt)("p",null,"Till now we have seen how to create bids and listings, and also execute the sales of assets in an Auction House. Once listings and bids are created in an Auction House, they can be cancelled via the authority."),(0,i.kt)(o.U,{mdxType:"Accordion"},(0,i.kt)(o.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("p",null,"Here's an example of cancelling a bid and a listing using the JS SDK."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const listing = await metaplex\n    .auctionHouse()\n    .findListingByReceipt({...}) // we will see how to fetch listings in the coming pages\n    \nconst bid = await metaplex\n    .auctionHouse()\n    .findBidByReceipt({...})     // we will see how to fetch bids in the coming pages\n    \n// Cancel a bid\nconst cancelBidResponse = await metaplex               \n    .auctionHouse()\n    .cancelBid({\n        auctionHouse,            // The Auction House in which to cancel Bid\n        bid: bid,                // The Bid to cancel\n    });\n\n// Cancel a listing\nconst cancelListingResponse = await metaplex\n    .auctionHouse()\n    .cancelListing({\n        auctionHouse,            // The Auction House in which to cancel listing\n        listing: listing,        // The listing to cancel\n    });\n"))))),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"In this page we covered all the components to manage trading of assets on a marketplace. "),(0,i.kt)("p",null,"One key point which we haven't discussed is the buyer escrow account, which is needed to escrow, or temporarily hold buyer's funds when the buyer makes a bid on an asset. How are these funds managed in this account and who is responsible for keeping track of these funds? Let's find out in the ",(0,i.kt)("a",{parentName:"p",href:"/programs/auction-house/managing-auction-house"},"next page"),"."))}h.isMDXComponent=!0}}]);