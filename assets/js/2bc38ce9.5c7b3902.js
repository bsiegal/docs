"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7081],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return p}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=u(n),p=i,h=c["".concat(l,".").concat(p)]||c[p]||d[p]||r;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},16304:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return u}});var a=n(83117),i=(n(67294),n(3905));const r={},o="Introduction",s={unversionedId:"programs/hydra/intro",id:"programs/hydra/intro",title:"Introduction",description:"Hydra is a wallet of wallets, a fanout wallet if you will. It enables extremely large membership sets that can take part",source:"@site/docs/01-programs/06-hydra/00-intro.md",sourceDirName:"01-programs/06-hydra",slug:"/programs/hydra/intro",permalink:"/programs/hydra/intro",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/06-hydra/00-intro.md",tags:[],version:"current",lastUpdatedAt:1675793124,formattedLastUpdatedAt:"Feb 7, 2023",sidebarPosition:0,frontMatter:{},sidebar:"sidebar",previous:{title:"Hydra: Fanout Wallet",permalink:"/programs/hydra/"},next:{title:"Quick Start",permalink:"/programs/hydra/quick-start"}},l={},u=[{value:"Basic Flow",id:"basic-flow",level:2},{value:"Creating a Wallet",id:"creating-a-wallet",level:2},{value:"Also accept SPL Tokens",id:"also-accept-spl-tokens",level:3},{value:"Adding Members",id:"adding-members",level:2},{value:"Distributing Funds",id:"distributing-funds",level:2},{value:"Wallet",id:"wallet",level:3},{value:"NFT",id:"nft",level:3},{value:"Token",id:"token",level:3},{value:"Distribute SPL Tokens",id:"distribute-spl-tokens",level:3},{value:"Additional Capabilities",id:"additional-capabilities",level:2},{value:"Signing Metadata as Creator",id:"signing-metadata-as-creator",level:3}],m={toc:u};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Hydra is a wallet of wallets, a fanout wallet if you will. It enables extremely large membership sets that can take part\nin fund distribution from a central wallet. It works with SOL and any SPL token."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(72240).Z+"#radius#shadow",width:"441",height:"521"})),(0,i.kt)("p",null,"\ud83d\udd17 ",(0,i.kt)("strong",{parentName:"p"},"Helpful links:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cardinal-labs/hydra-ui"},"Hydra UI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/GlassEaters/hydra"},"GitHub Repository")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@glasseaters/hydra-sdk"},"JS SDK")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://crates.io/crates/hydra_wallet"},"Rust Crate"))),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"The PROGRAM ID FOR Hydra is:"),(0,i.kt)("p",{parentName:"admonition"},"Devnet: hyDQ4Nz1eYyegS6JfenyKwKzYxRsCWCriYSAjtzP4Vg"),(0,i.kt)("p",{parentName:"admonition"},"Testnet: Do you want this?"),(0,i.kt)("p",{parentName:"admonition"},"Mainnet: hyDQ4Nz1eYyegS6JfenyKwKzYxRsCWCriYSAjtzP4Vg")),(0,i.kt)("h2",{id:"basic-flow"},"Basic Flow"),(0,i.kt)("p",null,"A Hydra Wallet's lifecycle has 3 phases:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Creation - Create the Wallet"),(0,i.kt)("li",{parentName:"ol"},"Member Addition - Add Members and specify their share"),(0,i.kt)("li",{parentName:"ol"},"Distribution - Distribute funds to the Members according to their share")),(0,i.kt)("p",null,"The Distribution phase is an on-chain operation that's called on a per-Member basis. We'll get into all the details of\nthis later, but Hydra will track all distributions and ensure that Members always get their fair share of the funds. As\nnew funds flow into the Hydra Wallet, members (or other automated processes) will call the Distribution operation to\ndisburse the appropriate share of funds to the given Member."),(0,i.kt)("p",null,"Let's get into a bit more detail on these steps."),(0,i.kt)("h2",{id:"creating-a-wallet"},"Creating a Wallet"),(0,i.kt)("p",null,"The creator of the Hydra Wallet is known as the ",(0,i.kt)("strong",{parentName:"p"},"Authority"),". The Authority will specify the globally unique name of\nthe wallet, the total number of shares to be distributed, and the Membership Model (which we'll cover in a moment).\nWe've provided our own ",(0,i.kt)("inlineCode",{parentName:"p"},"FanoutClient")," with the SDK, which you'll initialize with the Authority's Wallet. You'll need\nabout XXX Sol to create the Hydra Wallet."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const connection = new Connection("devnet", "confirmed");\nlet fanoutSdk: FanoutClient;\n\nauthorityWallet = Keypair.generate();\n\nfanoutSdk = new FanoutClient(\n  connection,\n  new NodeWallet(new Account(authorityWallet.secretKey))\n);\n\nconst init = await fanoutSdk.initializeFanout({\n  totalShares: 100,\n  name: `Test${Date.now()}`,\n  membershipModel: MembershipModel.Wallet,\n});\n')),(0,i.kt)("h3",{id:"also-accept-spl-tokens"},"Also accept SPL Tokens"),(0,i.kt)("p",null,"If you want to also accept other specific SPL Tokens, you can update your Hydra Wallet to accept those by specifying the\ngiven token's public key after initializing the wallet."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const mintPublicKey = "SPL-Token-Public-Key";\n\nconst { fanoutForMint, tokenAccount } = await fanoutSdk.initializeFanoutForMint(\n  {\n    fanout,\n    mint: mint.publicKey,\n  }\n);\n')),(0,i.kt)("h2",{id:"adding-members"},"Adding Members"),(0,i.kt)("p",null,"There are three different Membership Models shipping with this first version of Hydra:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Wallet")," - This is the simplest membership model. It's just a list of each Member's public address and the number\nof shares they own. The sum of all Member's shares must equal the ",(0,i.kt)("inlineCode",{parentName:"li"},"totalShares")," specified in the ",(0,i.kt)("inlineCode",{parentName:"li"},"initializeFanout"),"\ncall.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const member = new Keypair();\n\nconst { membershipAccount } = await fanoutSdk.addMemberWallet({\n  fanout: init.fanout,\n  fanoutNativeAccount: init.nativeAccount,\n  membershipKey: member.publicKey,\n  shares: 10\n});\n\n// Add members until sum of shares = totalShares\n...\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"NFT")," - With this model membership is tied to an NFT mint address instead of static public address. Each NFT mint\naddress can still have a different quantity of shares as in the Wallet model. The greatest benefit of this model is\nit effectively enables the simple transfer of rights to future distributions to any wallet owner that holds the given\nNFT.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'\nconst nftMintPublicKey = "nftMintPublicKey";\n\nconst init = await fanoutSdk.initializeFanout({\n  totalShares: 100,\n  name: `Test${Date.now()}`,\n  membershipModel: MembershipModel.NFT,\n});\n\nconst { membershipAccount } = await fanoutSdk.addMemberNft({\n  fanout: init.fanout,\n  fanoutNativeAccount: init.nativeAccount,\n  membershipKey: nftMintPublicKey,\n  shares: 10\n});\n\n// Add members until sum of shares = totalShares\n...\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Token")," - This is the most flexible membership model, but is a bit more complicated. In this model, Membership is\nassociated with staked ownership of the specified Token. When creating a Hydra Wallet with the Token model, you\nspecify the mint of an SPL Token and distribute those tokens to your members (in whatever proportion you want). Then\nthose members need to stake their tokens with the Hydra Wallet to be able to claim their share of the distribution."),(0,i.kt)("p",{parentName:"li"},"For example, if you mint a supply of 1000 tokens and distribute all 1000, but only 40 of them are staked, then\ndistributions will be calculated off of the 40 that are staked, not the 1000 total supply. Members who do not stake\nget 0% and those that do get ",(0,i.kt)("inlineCode",{parentName:"p"},"staked / 40")," of the distribution."),(0,i.kt)("p",{parentName:"li"},"We are aware of some initialization issues with this model, so for now we recommend you don't fund the Hydra Wallet\nuntil you've given your members enough time to stake their tokens."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const membershipMintPublicKey = "SPL-TokenPublicKey";\n\nconst { fanout } = await fanoutSdk.initializeFanout({\n  totalShares: 0,\n  name: `Test${Date.now()}`,\n  membershipModel: MembershipModel.Token,\n  mint: membershipMintPublicKey,\n});\n\n// Staking tokens\n\nconst ixs = await fanoutSdk.stakeTokenMemberInstructions({\n  shares: supply * 0.1,\n  fanout: fanout,\n  membershipMintTokenAccount: tokenAcctMember,\n  membershipMint: membershipMint.publicKey,\n  member: member.publicKey,\n  payer: member.publicKey,\n});\n\nconst tx = await fanoutSdk.sendInstructions(\n  ixs.instructions,\n  [member],\n  member.publicKey\n);\nif (!!tx.RpcResponseAndContext.value.err) {\n  const txdetails = await connection.getConfirmedTransaction(\n    tx.TransactionSignature\n  );\n  console.log(txdetails, tx.RpcResponseAndContext.value.err);\n}\n\nconst stake = await membershipMint.getAccountInfo(ixs.output.stakeAccount);\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"NOTE: Some Hydra use cases are Airdropping the membership token to the members. In this case, you may want to stake then\ntokens on the members' behalf. The most effective way to do this is to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"stakeForTokenMemberInstructions")," method.\nIn the example below note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"membershipMintTokenAccount")," is the ATA of the Authority not the member. In this way\nyou are simply sending the membership tokens to the member's stake account not their personal ATA for the membership\nmint"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// Example of setting up a Hydra with a in Memory keypair.\nlet authorityWallet = Keypair.generate();\nlet fanoutSdk = new FanoutClient(\n  connection,\n  new NodeWallet(new Account(authorityWallet.secretKey))\n);\n// Setup a Hydra -> Since you configured the SDK with the authority Wallet as the wallet you dont need to pass the signer into the init.\nconst { fanout } = await fanoutSdk.initializeFanout({\n  totalShares: 0,\n  name: `Test${Date.now()}`,\n  membershipModel: MembershipModel.Token,\n  mint: membershipMint.publicKey\n});\n\n...\nconst ixs = await fanoutSdk.stakeForTokenMemberInstructions(\n  {\n    shares: supply * .1,\n    fanout: fanout,\n    membershipMintTokenAccount: tokenAcct,\n    membershipMint: membershipMint.publicKey,\n    fanoutAuthority: authorityWallet.publicKey,\n    member: member.publicKey,\n    payer: authorityWallet.publicKey\n  }\n);\n"))),(0,i.kt)("h2",{id:"distributing-funds"},"Distributing Funds"),(0,i.kt)("p",null,"The Distribute method is expected to be called many times over the lifetime of a Hydra Wallet. In order to keep the\nprocessing and memory costs under Solana limits while enabling arbitrarily large membership sets, we require that you\nspecify the Member (and if applicable the Member's NFT or SPL mint) that you want to distribute funds to."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Distribution will fail if the sum of member shares does not equal the totalShares specified in the ",(0,i.kt)("inlineCode",{parentName:"p"},"initializeFanout"),"\ncall.")),(0,i.kt)("p",null,"Hydra will track distribution, so you can call this multiple times and funds will only be distributed to the Member once.\nThe Distribute method is slightly different depending on the Membership Model:"),(0,i.kt)("h3",{id:"wallet"},"Wallet"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const member1\n.\npublicKey = "Member1.publicKey";\nconst distributionBot = new Keypair();\n// This is the caller of the Distribute method, it can be a bot or a user,\n// they just need enough funds to pay for the transaction fee. If you\'re using\n// this code, airdrop a sol to distributionBot.\n\nlet distributeToMember1 = await fanoutSdk.distributeWalletMemberInstructions(\n  {\n    distributeForMint: false,\n    member: member1.publicKey,\n    fanout: fanout, // From initialization\n    payer: distributionBot.publicKey,\n  },\n);\n\nconst tx = await fanoutSdk.sendInstructions(\n  [...distMember1.instructions],\n  [distributionBot],\n  distributionBot.publicKey\n);\nif (!!tx.RpcResponseAndContext.value.err) {\n  const txdetails = await connection.getConfirmedTransaction(tx.TransactionSignature);\n  console.log(txdetails, tx.RpcResponseAndContext.value.err);\n}\n')),(0,i.kt)("h3",{id:"nft"},"NFT"),(0,i.kt)("p",null,"Same as above, but replace distributeToMember1 with this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const member1\n.\nmint = "NFT Mint for Member 1";\n\nlet distributeToMember1 = await fanoutSdk.distributeNftMemberInstructions(\n  {\n    distributeForMint: false,\n    member: member1.publicKey,\n    membershipKey: member1.mint,\n    fanout: fanout,\n    payer: distributionBot.publicKey,\n  },\n);\n')),(0,i.kt)("h3",{id:"token"},"Token"),(0,i.kt)("p",null,"Same as Wallet, but replace distributeToMember1 with this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const membershiptMint\n.\npublicKey = "SPL-Token-PublicKey";\n\nlet distributeToMember1 = await fanoutSdk.distributeTokenMemberInstructions(\n  {\n    distributeForMint: false,\n    membershipMint: membershipMint.publicKey,\n    fanout: fanout,\n    member: member1.publicKey,\n    payer: distributionBot.publicKey,\n  }\n);\n')),(0,i.kt)("h3",{id:"distribute-spl-tokens"},"Distribute SPL Tokens"),(0,i.kt)("p",null,"The process is basically the same, you'll additionally specify the Mint of the Token you want to distribute and set\ndistributeForMint to true."),(0,i.kt)("p",null,"Example for the Wallet member model:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const mint\n.\npublicKey = "SPL-Token-To-Distribute-PublicKey";\n\nlet distributeToMember1 = await fanoutSdk.distributeWalletMemberInstructions(\n  {\n    distributeForMint: true,\n    member: member1.publicKey,\n    fanout: builtFanout.fanout,\n    payer: distributionBot.publicKey,\n    fanoutMint: mint.publicKey\n  },\n);\n\n')),(0,i.kt)("h2",{id:"additional-capabilities"},"Additional Capabilities"),(0,i.kt)("h3",{id:"signing-metadata-as-creator"},"Signing Metadata as Creator"),(0,i.kt)("p",null,"One key use case for Hydra is specifying the Hydra Wallet as a creator with some royalty share for an NFT. We've enabled\nthe Authority of the Hydra Wallet to sign NFTs as the Hydra Wallet so the wallet is a verified creator in the NFT\nmetadata. We've left out the details of creating the NFT, but assuming you've set the Hydra wallet a creator\nvia ",(0,i.kt)("inlineCode",{parentName:"p"},"init.fanout"),", you can sign with the instruction below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// Create Hydra as above.\n\n// Set Royalties\nconst allCreators = [\n  { creator: authorityWallet.publicKey, share: 0 },\n  {\n    creator: init.fanout,\n    publicKey,\n    share: 100,\n  },\n];\n\n// CREATE NFT Code Adding allCreators as Creator for the NFT\n\nconst instructions: TransactionInstruction[] = [];\ninstructions.push(\n  /// Create NFT Instructions\n  /// Sign the nft\n  ...fanoutSdk.signMetadataInstructions({\n    metadata: metadataAccount,\n    holdingAccount: init.nativeAccount,\n    fanout: init.fanout,\n  }).instructions\n);\n\n///....send instructions to solana\n")))}d.isMDXComponent=!0},72240:function(e,t,n){t.Z=n.p+"assets/images/hydra-368a5385149dc1b7384df361b46fd7d1.jpg"}}]);