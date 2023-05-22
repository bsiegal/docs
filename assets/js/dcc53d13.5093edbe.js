"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9142],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),u=a,m=c["".concat(l,".").concat(u)]||c[u]||h[u]||o;return n?i.createElement(m,r(r({ref:t},p),{},{components:n})):i.createElement(m,r({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},94880:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return r},default:function(){return h},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var i=n(83117),a=(n(67294),n(3905));const o={},r="Metaplex",s={unversionedId:"guides/archived/architecture/deep_dive/metaplex",id:"guides/archived/architecture/deep_dive/metaplex",title:"Metaplex",description:"Overview",source:"@site/docs/04-guides/07-archived/00-architecture/02-deep_dive/02-metaplex.md",sourceDirName:"04-guides/07-archived/00-architecture/02-deep_dive",slug:"/guides/archived/architecture/deep_dive/metaplex",permalink:"/guides/archived/architecture/deep_dive/metaplex",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/04-guides/07-archived/00-architecture/02-deep_dive/02-metaplex.md",tags:[],version:"current",lastUpdatedAt:1684778423,formattedLastUpdatedAt:"May 22, 2023",sidebarPosition:2,frontMatter:{},sidebar:"sidebar",previous:{title:"Auction",permalink:"/guides/archived/architecture/deep_dive/auction"},next:{title:"Burn Token",permalink:"/guides/archived/burn-token"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Types",id:"types",level:2},{value:"AuctionManager",id:"auctionmanager",level:3},{value:"AuctionManagerSettings",id:"auctionmanagersettings",level:3},{value:"AuctionManagerState",id:"auctionmanagerstate",level:3},{value:"BidRedemptionTicket",id:"bidredemptionticket",level:3},{value:"PayoutTicket",id:"payoutticket",level:3},{value:"Store",id:"store",level:3},{value:"WhitelistedCreator",id:"whitelistedcreator",level:3},{value:"SafetyDepositValidationTicket",id:"safetydepositvalidationticket",level:3},{value:"OriginalAuthorityLookup",id:"originalauthoritylookup",level:3},{value:"PrizeTrackingTicket",id:"prizetrackingticket",level:3},{value:"Concepts",id:"concepts",level:2},{value:"Types of Token Sales",id:"types-of-token-sales",level:3},{value:"Royalties",id:"royalties",level:3},{value:"Validation",id:"validation",level:3},{value:"Unwon Items",id:"unwon-items",level:3}],p={toc:d};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"metaplex"},"Metaplex"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The Metaplex is the contract that knows how the others tie together and understands what an NFT truly is, how to auction it off and how to redeem it for others. It also understands the concept of royalties and how to pay them out. Its job is to act is the orchestrator between a Vault full of tokens, an Auction primitive, a bunch of winners, creators, and an auctioneer, and make sure everybody gets what is deserved, whether it be monies or tokens (though in the end they are all tokens)."),(0,a.kt)("p",null,"Its state is reproduced here:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[repr(C)]\n#[derive(Clone, BorshSerialize, BorshDeserialize, PartialEq, Debug, Copy)]\npub enum Key {\n    Uninitialized,\n    OriginalAuthorityLookupV1,\n    BidRedemptionTicketV1,\n    StoreV1,\n    WhitelistedCreatorV1,\n    PayoutTicketV1,\n    SafetyDepositValidationTicketV1,\n    AuctionManagerV1,\n        PrizeTrackingTicketV1,\n}\n\n#[repr(C)]\n#[derive(Clone, BorshSerialize, BorshDeserialize, Debug)]\npub struct AuctionManager {\n    pub key: Key,\n\n    pub store: Pubkey,\n\n    pub authority: Pubkey,\n\n    pub auction: Pubkey,\n\n    pub vault: Pubkey,\n\n    pub accept_payment: Pubkey,\n\n    pub state: AuctionManagerState,\n\n    pub settings: AuctionManagerSettings,\n\n        /// True if this is only winning configs of one item each, used for optimization in saving.\n    pub straight_shot_optimization: bool,\n}\n\n#[repr(C)]\n#[derive(Clone, BorshSerialize, BorshDeserialize, Debug)]\npub struct AuctionManagerState {\n    pub status: AuctionManagerStatus,\n    /// When all configs are validated the auction is started and auction manager moves to Running\n    pub winning_config_items_validated: u8,\n\n    pub winning_config_states: Vec<WinningConfigState>,\n\n    pub participation_state: Option<ParticipationState>,\n}\n\n#[repr(C)]\n#[derive(Clone, BorshSerialize, BorshDeserialize, Debug)]\npub struct AuctionManagerSettings {\n    /// The safety deposit box index in the vault containing the winning items, in order of place\n    /// The same index can appear multiple times if that index contains n tokens for n appearances (this will be checked)\n    pub winning_configs: Vec<WinningConfig>,\n\n    /// The participation config is separated because it is structurally a bit different,\n    /// having different options and also because it has no real \"winning place\" in the array.\n    pub participation_config: Option<ParticipationConfig>,\n}\n\n#[repr(C)]\n#[derive(Clone, BorshSerialize, BorshDeserialize, PartialEq, Debug)]\npub struct ParticipationState {\n    /// We have this variable below to keep track in the case of the participation NFTs, whose\n    /// income will trickle in over time, how much the artists have in the escrow account and\n    /// how much would/should be owed to them if they try to claim it relative to the winning bids.\n    /// It's a bit tougher than a straightforward bid which has a price attached to it, because\n    /// there are many bids of differing amounts (in the case of GivenForBidPrice) and they dont all\n    /// come in at one time, so this little ledger here keeps track.\n    pub collected_to_accept_payment: u64,\n\n    /// Record of primary sale or not at time of auction creation, set during validation step\n    pub primary_sale_happened: bool,\n\n    pub validated: bool,\n\n    /// An account for printing authorization tokens that are made with the one time use token\n    /// after the auction ends. Provided during validation step.\n    pub printing_authorization_token_account: Option<Pubkey>,\n}\n\n#[repr(C)]\n#[derive(Clone, BorshSerialize, BorshDeserialize, PartialEq, Debug)]\npub struct ParticipationConfig {\n    /// Setups:\n    /// 1. Winners get participation + not charged extra\n    /// 2. Winners dont get participation prize\n    pub winner_constraint: WinningConstraint,\n\n    /// Setups:\n    /// 1. Non-winners get prize for free\n    /// 2. Non-winners get prize but pay fixed price\n    /// 3. Non-winners get prize but pay bid price\n    pub non_winning_constraint: NonWinningConstraint,\n\n    /// The safety deposit box index in the vault containing the template for the participation prize\n    pub safety_deposit_box_index: u8,\n    /// Setting this field disconnects the participation prizes price from the bid. Any bid you submit, regardless\n    /// of amount, charges you the same fixed price.\n    pub fixed_price: Option<u64>,\n}\n\n#[repr(C)]\n#[derive(Clone, BorshSerialize, BorshDeserialize, PartialEq, Debug)]\npub enum WinningConstraint {\n    NoParticipationPrize,\n    ParticipationPrizeGiven,\n}\n\n#[repr(C)]\n#[derive(Clone, BorshSerialize, BorshDeserialize, PartialEq, Debug)]\npub enum NonWinningConstraint {\n    NoParticipationPrize,\n    GivenForFixedPrice,\n    GivenForBidPrice,\n}\n\n#[repr(C)]\n#[derive(Clone, PartialEq, BorshSerialize, BorshDeserialize, Copy, Debug)]\npub enum WinningConfigType {\n        /// You may be selling your one-of-a-kind NFT for the first time, but not it's accompanying Metadata,\n    /// of which you would like to retain ownership. You get 100% of the payment the first sale, then\n    /// royalties forever after.\n    ///\n    /// You may be re-selling something like a Limited/Open Edition print from another auction,\n    /// a master edition record token by itself (Without accompanying metadata/printing ownership), etc.\n    /// This means artists will get royalty fees according to the top level royalty % on the metadata\n    /// split according to their percentages of contribution.\n    ///\n    /// No metadata ownership is transferred in this instruction, which means while you may be transferring\n    /// the token for a limited/open edition away, you would still be (nominally) the owner of the limited edition\n    /// metadata, though it confers no rights or privileges of any kind.\n    TokenOnlyTransfer,\n    /// Means you are auctioning off the master edition record and it's metadata ownership as well as the\n    /// token itself. The other person will be able to mint authorization tokens and make changes to the\n    /// artwork.\n    FullRightsTransfer,\n    /// Means you are using authorization tokens to print off editions during the auction using\n    /// from a MasterEditionV1\n    PrintingV1,\n    /// Means you are using the MasterEditionV2 to print off editions\n    PrintingV2,\n}\n\n#[repr(C)]\n#[derive(Clone, BorshSerialize, BorshDeserialize, Debug)]\npub struct WinningConfig {\n    // For now these are just array-of-array proxies but wanted to make them first class\n    // structs in case we want to attach other top level metadata someday.\n    pub items: Vec<WinningConfigItem>,\n}\n\n#[repr(C)]\n#[derive(Clone, BorshSerialize, BorshDeserialize, Debug)]\npub struct WinningConfigState {\n    pub items: Vec<WinningConfigStateItem>,\n    /// Ticked to true when money is pushed to accept_payment account from auction bidding pot\n    pub money_pushed_to_accept_payment: bool,\n}\n\n#[repr(C)]\n#[derive(Clone, BorshSerialize, BorshDeserialize, Copy, Debug)]\npub struct WinningConfigItem {\n    pub safety_deposit_box_index: u8,\n    pub amount: u8,\n    pub winning_config_type: WinningConfigType,\n}\n\n#[repr(C)]\n#[derive(Clone, BorshSerialize, BorshDeserialize, Copy, Debug)]\npub struct WinningConfigStateItem {\n    /// Record of primary sale or not at time of auction creation, set during validation step\n    pub primary_sale_happened: bool,\n    /// Ticked to true when a prize is claimed by person who won it\n    pub claimed: bool,\n}\n\n#[repr(C)]\n#[derive(Clone, BorshSerialize, BorshDeserialize, Debug, PartialEq)]\npub enum AuctionManagerStatus {\n    Initialized,\n    Validated,\n    Running,\n    Disbursing,\n    Finished,\n}\n\n#[repr(C)]\n#[derive(Clone, BorshSerialize, BorshDeserialize, Copy)]\npub struct OriginalAuthorityLookup {\n    pub key: Key,\n    pub original_authority: Pubkey,\n}\n\n#[repr(C)]\n#[derive(Clone, BorshSerialize, BorshDeserialize, Copy)]\npub struct BidRedemptionTicket {\n    pub key: Key,\n    pub participation_redeemed: bool,\n    pub items_redeemed: u8,\n}\n\n#[repr(C)]\n#[derive(Clone, BorshSerialize, BorshDeserialize, Copy)]\npub struct PayoutTicket {\n    pub key: Key,\n    pub recipient: Pubkey,\n    pub amount_paid: u64,\n}\n\n#[repr(C)]\n#[derive(Clone, BorshSerialize, BorshDeserialize, Copy)]\npub struct Store {\n    pub key: Key,\n    pub public: bool,\n    pub auction_program: Pubkey,\n    pub token_vault_program: Pubkey,\n    pub token_metadata_program: Pubkey,\n    pub token_program: Pubkey,\n}\n\n#[repr(C)]\n#[derive(Clone, BorshSerialize, BorshDeserialize, Copy)]\npub struct WhitelistedCreator {\n    pub key: Key,\n    pub address: Pubkey,\n    pub activated: bool,\n}\n\n#[repr(C)]\n#[derive(Clone, BorshSerialize, BorshDeserialize, Copy)]\npub struct SafetyDepositValidationTicket {\n    pub key: Key,\n    pub address: Pubkey,\n}\n\n#[repr(C)]\n#[derive(Clone, BorshSerialize, BorshDeserialize, Copy, Debug)]\npub struct PrizeTrackingTicket {\n    pub key: Key,\n    pub metadata: Pubkey,\n    pub supply_snapshot: u64,\n    pub expected_redemptions: u64,\n    pub redemptions: u64,\n}\n")),(0,a.kt)("p",null,"The instruction set for metaplex can be found here: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/metaplex-program-library/blob/master/metaplex/program/src/instruction.rs"},"https://github.com/metaplex-foundation/metaplex-program-library/blob/master/metaplex/program/src/instruction.rs")),(0,a.kt)("h2",{id:"types"},"Types"),(0,a.kt)("h3",{id:"auctionmanager"},"AuctionManager"),(0,a.kt)("p",null,'This is the top level struct of the entire contract and serves as a container for "all the things." When you make auctions on Metaplex, you are actually really making these ultimately. An AuctionManager has a single authority (you, the auctioneer), a store, which is the storefront struct, an Auction from the auction contract, and a Vault from the vault contract. It also has a token account called ',(0,a.kt)("inlineCode",{parentName:"p"},"accept_payment")," that serves as a central clearing escrow for all tokens that it will collect in the future from the winning bidders and all payments for fixed price participation nfts from all non-winners in the auction."),(0,a.kt)("p",null,"It contains embedded within it a separate ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"settings")," struct. It is seeded with the ",(0,a.kt)("inlineCode",{parentName:"p"},"settings")," on initialization by the caller, while the ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," is derived from ",(0,a.kt)("inlineCode",{parentName:"p"},"settings")," on initialization. AuctionManager goes through several states:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Initialized:")," This is the state it begins in. You provide a ",(0,a.kt)("strong",{parentName:"p"},"Created")," auction and a ",(0,a.kt)("strong",{parentName:"p"},"Combined")," vault. You can't start the auction yet though because you need to prove to this AuctionManager that the configurations you provided in your settings match the tokens in the vault."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Validated:")," You have now proven that each winning configuration in your settings match the tokens in your vault, and you can start the auction via a proxy call."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Running:")," The underlying Auction is now running."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Disbursing"),": The underlying Auction is over and now the AuctionManager is in the business of disbursing royalties to the auctioneer and creators, prizes and participation NFTs to the winners, and possibly participation NFTs to the non-winners."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Finished:")," All funds and prizes disbursed."),(0,a.kt)("p",null,"This state is not currently in use as switching to it requires an iteration over prizes to review all items for claimed-ness and this costs CPU that is too precious during the redemption call OR adding new endpoint that is not guaranteed to be called. We will revisit it later to bring it back during a refactoring, for now it is considered a NOOP state."),(0,a.kt)("p",null,"AuctionManagers always have PDAs of seed ",(0,a.kt)("inlineCode",{parentName:"p"},"['metaplex', metaplex_program_id, auction_id]")," where metaplex_program_id is the id of the Metaplex contract and ",(0,a.kt)("inlineCode",{parentName:"p"},"auction_id")," is the address of the Auction being passed to the AuctionManager."),(0,a.kt)("h3",{id:"auctionmanagersettings"},"AuctionManagerSettings"),(0,a.kt)("p",null,"AuctionManagerSettings is an embedded struct inside AuctionManager but is deserving of its own section. This struct is actually provided by the user in the ",(0,a.kt)("inlineCode",{parentName:"p"},"init_auction_manager")," call to parameterize the AuctionManager with who is winning what and whether there is a participation NFT. It is fairly straightforward - for each entry in the WinningConfig vec, it stands for a given winning place in the Auction. The 0th entry is the WinningConfig for the 1st place winner. A WinningConfig has many WinningConfigItems. For each WinningConfigItem in the 0th WinningConfig, it is a mapping to a Vault SafetyDepositBox that the 1st place winner gets items from. You can therefore configure quite arbitrary Auctions this way."),(0,a.kt)("p",null,"This setup is actually quite redundant and will likely change in the future to a setup where a WinningConfigItem is the top level structure, and it simply declares which winners will receive it, because if you wish for multiple winners to receive prints from the same Master Edition, the WinningConfigItem must right now be duplicated across each WinningConfig."),(0,a.kt)("p",null,"The Participation Config is optional, but has enums describing how it will behave for winners and for non-winners, whether it has a price associated with it, and what safety deposit box contains its printing tokens."),(0,a.kt)("p",null,"Notice that AuctionManagerSettings really doesn't contain settings about the auction. It really only breaks down how to divvy up the Vault. This is the separation of concerns in action - the Auction is parameterized with auction settings, while the AuctionManager understands how to divvy up rewards to winners and is parameterized that way. The Auction does not understand how to divvy up rewards, and the Metaplex contract does not understand how to do Auctions, only how to read winners off of it."),(0,a.kt)("h3",{id:"auctionmanagerstate"},"AuctionManagerState"),(0,a.kt)("p",null,"I consciously made the decision to keep AuctionManagerSettings identical to what you send up when you initialize AuctionManager. However, other things related to WinningConfigs, WinningConfigItems, etc. change as the AuctionManager moves through its motions. These changes are recorded in AuctionManagerState, a kind of mirror object that is instantiated during the ",(0,a.kt)("inlineCode",{parentName:"p"},"init_auction_manager")," action."),(0,a.kt)("p",null,"Specifically, for each WinningConfigItem, we need to record at the time of creation whether the primary sale had happened for later royalties measurement (because this could be changed during auction) and we need to record whether this particular WinningConfigItem has been claimed by the winner yet. We do similar things for Participation prize in its own config."),(0,a.kt)("h3",{id:"bidredemptionticket"},"BidRedemptionTicket"),(0,a.kt)("p",null,"This is created once per bid and keeps track of whether a given bidder has redeemed their main bid and their participation NFT. This is how the Metaplex contract guarantees a given bidder gets something in exchange for their BidderMetadata PDA in the Auction contract."),(0,a.kt)("p",null,"BidRedemptionTickets always have PDAs of ",(0,a.kt)("inlineCode",{parentName:"p"},"['metaplex', auction_id, bidder_metadata_key]")," where the ",(0,a.kt)("inlineCode",{parentName:"p"},"auction_id")," is the address of the Auction and the ",(0,a.kt)("inlineCode",{parentName:"p"},"bidder_metadata_key")," is the address of the BidderMetadata PDA that the Auction contract produced."),(0,a.kt)("h3",{id:"payoutticket"},"PayoutTicket"),(0,a.kt)("p",null,"For each creator, for each metadata(WinningConfigItem), for each winning place(WinningConfig) in an Auction, a PayoutTicket is created to record the sliver of income generated for that creator. There is also one made for the Auctioneer for every such case. And yes, it really is that specific. This means that a given creator may have quite a few PayoutTickets for a single AuctionManager, but each one represents a slightly different royalty payout."),(0,a.kt)("p",null,"For instance, 1st place may have three items with 3 unique metadata won while 2nd place may have 4 metadata from 4 items, every item with a single unique creator. The split of funds in the 1st place is going to be 3 ways, while in 2nd place would be 4 ways. Even if 1st and 2nd place bids are the same, we want two records to reflect the royalties paid from 1st and 2nd place, because they would be different numbers in this case, and we want to preserve history."),(0,a.kt)("p",null,"PayoutTickets always have PDAs of ",(0,a.kt)("inlineCode",{parentName:"p"},"['metaplex', auction_manager_id, winning_config_index, winning_config_item_index, creator_index, safety_deposit_key, destination_owner]")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"auction_manager_id")," is the address of the AuctionManager account, ",(0,a.kt)("inlineCode",{parentName:"p"},"winning_config_index")," is the 0-based index of the WinningConfig in the AuctionManager settings you paid out in this ticket, ",(0,a.kt)("inlineCode",{parentName:"p"},"winning_config_item_index")," is the 0-based index of the WinningConfigItem in that WinningConfig, ",(0,a.kt)("inlineCode",{parentName:"p"},"creator_index")," is the 0-based creator index in that Metadata's creator array that you paid out for that WinningConfigItem (or 'auctioneer' if paying the auctioneer for this item), ",(0,a.kt)("inlineCode",{parentName:"p"},"safety_deposit_key")," is the address to the safety deposit box for this item, and ",(0,a.kt)("inlineCode",{parentName:"p"},"destination_owner")," is the owner of the destination account where the monies are being sent. Yeah, I know, painful."),(0,a.kt)("h3",{id:"store"},"Store"),(0,a.kt)("p",null,"Every person who forks the repository to make their own storefront should have a unique store struct that is seeded by their own administrative wallet. These are created and updated by the idempotent ",(0,a.kt)("inlineCode",{parentName:"p"},"set_store"),' endpoint. Each store can choose to use its own token, token-metadata, token-vault and auction programs if it so chooses, though right now we\'ve got a hard check that the token program is actually the global spl-token program. The store also can be either public or private, which determines whether AuctionManagers can sell items that have all non-whitelisted creators on them or not. We take a "bouncer-knows-your-friend-and-lets-you-in" approach to selling items in whitelist-only stores - if an item has at least one ',(0,a.kt)("em",{parentName:"p"},"verified")," Whitelisted Creator, then it can be sold."),(0,a.kt)("p",null,"Store PDAs are always a PDA seed of ",(0,a.kt)("inlineCode",{parentName:"p"},"['metaplex', metaplex_program_id, admin_wallet]")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"metaplex_program_id")," is the address of the Metaplex contract and ",(0,a.kt)("inlineCode",{parentName:"p"},"admin_wallet")," is the wallet that is administering this store."),(0,a.kt)("h3",{id:"whitelistedcreator"},"WhitelistedCreator"),(0,a.kt)("p",null,"A cousin of the simple Creator struct from the Metadata program, this is a foreign key connector between a creator address and a store. It denotes whether this creator is currently active in the store and if they are, allows items from them to be sold in it."),(0,a.kt)("p",null,"WhitelistedCreator PDAs are always a PDA seed of ",(0,a.kt)("inlineCode",{parentName:"p"},"['metaplex', metaplex_program_id, store_key, creator_key]")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"metaplex_program_id")," is the address of the Metaplex contract, ",(0,a.kt)("inlineCode",{parentName:"p"},"store_key")," is the address of the storefront, and ",(0,a.kt)("inlineCode",{parentName:"p"},"creator_key")," is obviously the address of the creator's wallet you are whitelisting."),(0,a.kt)("h3",{id:"safetydepositvalidationticket"},"SafetyDepositValidationTicket"),(0,a.kt)("p",null,"This PDA solely exists to prevent validating a safety deposit box twice, which could present security vulnerabilities. It is created for each safety deposit box when it is presented for validation."),(0,a.kt)("p",null,"SafetyDepositValidationTickets are always PDAs with seed of ",(0,a.kt)("inlineCode",{parentName:"p"},"['metaplex', metaplex_program_id, auction_manager_id, safety_deposit_key]"),"where ",(0,a.kt)("inlineCode",{parentName:"p"},"metaplex_program_id")," is the address of the Metaplex contract, ",(0,a.kt)("inlineCode",{parentName:"p"},"auction_manager_id")," is the address of the AuctionManager, and ",(0,a.kt)("inlineCode",{parentName:"p"},"safety_deposit_key")," is the address of the SafetyDepositBox being validated."),(0,a.kt)("h3",{id:"originalauthoritylookup"},"OriginalAuthorityLookup"),(0,a.kt)("p",null,"These are created during FullRightsTransfers. When a FullRightsTransfer is happening, the Metadata ",(0,a.kt)("inlineCode",{parentName:"p"},"updateAuthority")," is shifted from the Auctioneer to the AuctionManager so that it can grant it in turn to the winner, and this record is created to keep track of whom the original ",(0,a.kt)("inlineCode",{parentName:"p"},"updateAuthority")," was to return it later if the item is not sold. That functionality (returns) is not implemented as of this writing but will be in the near future."),(0,a.kt)("p",null,"OriginalAuthorityLookups always have PDAs with seed of ",(0,a.kt)("inlineCode",{parentName:"p"},"['metaplex', auction_id, metadata_key]")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"auction_id")," is the address of the Auction and ",(0,a.kt)("inlineCode",{parentName:"p"},"metadata_key")," is the address of the actual Metadata struct."),(0,a.kt)("h3",{id:"prizetrackingticket"},"PrizeTrackingTicket"),(0,a.kt)("p",null,"Created on a distinct WinningConfigItem basis (ie by WinningConfigType AND mint) across all WinningConfigs, one PrizeTrackingTicket is created to keep track of how many expected redemptions there will be across all winners for a given MasterEdition, and what the supply was when the first person hit redeem, to keep track of the relative edition offsets each person should get relative to winner #1, #2, etc. This is used for redeeming PrintingV2 bids, to ensure winner #1 gets edition #1, and so on."),(0,a.kt)("h2",{id:"concepts"},"Concepts"),(0,a.kt)("h3",{id:"types-of-token-sales"},"Types of Token Sales"),(0,a.kt)("p",null,"There are five major types of token sales supported by the Metaplex protocol. Four are covered in the WinningConfigType enum, but this is a bit limiting as it is really only considering sales to ",(0,a.kt)("em",{parentName:"p"},"winners"),", and leaves out the all-important Participation NFT which is a different kind of sale we will consider separately."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"TokenOnlyTransfer:")," Probably the easiest to understand, this is a straight up ",(0,a.kt)("inlineCode",{parentName:"p"},"spl_token::transfer")," command wrapped in a bunch of Metaplex magic. At the end of the day, the auctioneer still owns the Metadata struct and any other associated PDAs, but someone else now has the physical token in their wallets. These tokens will still show up and work just fine in Phantom and other supported wallet clients because those clients can still look up the Metadata. This is the difference between owning the Metadata and owning the token. For a token that is an Edition, the difference is nominal, as an Edition has zero printing rights and is immutable. However, for a token that is a MasterEdition, the difference is ",(0,a.kt)("em",{parentName:"p"},"substantial"),", as the owner of the Metadata can rename it, change its symbol, it's URI, and creators array."),(0,a.kt)("p",null,"Note that owning the token itself is the ",(0,a.kt)("em",{parentName:"p"},"only")," requirement for using the ",(0,a.kt)("inlineCode",{parentName:"p"},"update_primary_sale_happened_via_token")," endpoint on the token metadata program ",(0,a.kt)("em",{parentName:"p"},"and")," for using the ",(0,a.kt)("inlineCode",{parentName:"p"},"mint_new_edition_from_master_edition_via_token"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"FullRightsTransfer:")," This is a TokenOnlyTransfer, except in addition, the ",(0,a.kt)("inlineCode",{parentName:"p"},"updateAuthority")," on the Metadata struct is set to the new owner as well, so they now have all the rights and privileges associated with the original owner, including the right to mint printing tokens. They can even change the name and URI of your token, so be careful!"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"PrintingV1:")," This token type represents a deprecated logic flow that will be removed in future editions and can only be accessed if using a MasterEditionV1 type of NFT. In this case, the safety deposit box in question does not contain the actual token, but a token from the token's Master Edition's ",(0,a.kt)("inlineCode",{parentName:"p"},"printing_mint"),". This printing token gives the bearer the authorization to label any mint they have that has a supply of one and decimals zero as a child Edition of that Master Edition one time. This is how Metaplex used to do a Printing sale. It doesn't grant the winning bidder a Limited Edition NFT. It grants them a printing token, they make their own mint/token account combo, and take the printing token to the token metadata contract and label it themselves."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"PrintingV2:")," The Auction holds the Master Edition in the safety deposit box and uses it via the special ",(0,a.kt)("inlineCode",{parentName:"p"},"mint_new_edition_from_master_edition_via_vault_proxy")," call on Token Metadata to mint editions for auction winners. Once all bids have been redeemed, the auction releases the Master Edition from this escrow via the ",(0,a.kt)("inlineCode",{parentName:"p"},"withdraw_master_edition")," call on Metaplex. This flow makes use of the PrizeTrackingTicket to keep track of the starting supply when the first redemption happens so that as each bidder comes in to redeem, everybody gets the correct offset for their edition relative to the #1 winner."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Participation NFTs:"),' Treated just like a PrintingV2, except these are first-come-first-serve as far as edition-numbering goes. This endpoint will also collect payment if the participation config has a fixed price setting or is using the "use last bid" setting to charge the user based on their last bid. Note that charging users for participation NFTs only can happen if they lose. Since the user previously cancelled their bid if they lost, they will net no change or net the difference between their last bid and the fixed price.'),(0,a.kt)("h3",{id:"royalties"},"Royalties"),(0,a.kt)("p",null,"Metadata come locked and stocked with arrays of creators, each with their own ",(0,a.kt)("inlineCode",{parentName:"p"},"share")," and all guaranteed to sum to 100. The Metadata itself has a ",(0,a.kt)("inlineCode",{parentName:"p"},"seller_fee_basis_points")," field that represents the share creators get out of the proceeds in any secondary sale and a ",(0,a.kt)("inlineCode",{parentName:"p"},"primary_sale_happened")," boolean that distinguishes to the world whether this particular Metadata has experienced its first sale or not. With all of this, Metaplex is able to do complete Royalty calculations after an Auction is over. It was mentioned above that on initialization, the Metaplex contract snapshots for each Metadata being sold the ",(0,a.kt)("inlineCode",{parentName:"p"},"primary_sale_happened")," just in case the boolean is flipped during the auction so that royalties are calculated as-of initiation - this is important to note."),(0,a.kt)("p",null,"At the end of the auction, anybody (permissionless) can cycle through each winning bid in the contract and ask the Metaplex contract to use its authority to call the Auction contract and pump the winning bid monies into the ",(0,a.kt)("inlineCode",{parentName:"p"},"accept_payment")," escrow account via ",(0,a.kt)("inlineCode",{parentName:"p"},"claim_bid"),". Once all winning bids have been settled into here, royalties are eligible to be paid out. We'll cover payouts of fixed price Participation NFTs separately."),(0,a.kt)("p",null,"Now, anybody (permissionless) can cycle through each creator PLUS the auctioneer on each item in each winning bid and call ",(0,a.kt)("inlineCode",{parentName:"p"},"empty_payment_account")," with an Associated Token Account that is owned by that creator or auctioneer and that action will calculate, using the creator's share or auctioneer's share of that item's metadata, and the fractional percentage of that item of the overall winning basket, to pay out the creator or auctioneer from the escrow."),(0,a.kt)("p",null,"Our front end implementation immediately calls the ",(0,a.kt)("inlineCode",{parentName:"p"},"update_primary_sale_happened")," endpoint on token metadata for any token once redeemed for users so that if they re-sell, the ",(0,a.kt)("inlineCode",{parentName:"p"},"primary_sale_happened")," boolean is taken into account in the ",(0,a.kt)("inlineCode",{parentName:"p"},"empty_payment_account")," logic and only the basis points given in ",(0,a.kt)("inlineCode",{parentName:"p"},"seller_fee_basis_points")," goes to the creators instead of the whole pie. The remaining part of the pie goes to the auctioneer doing the reselling."),(0,a.kt)("p",null,"We don't do weighted items in winning baskets right now - if a winning basket has 3 unique metadata in it right now, it is split three ways, even if one of the metadata is disbursing 3 tokens while the other is disbursing 2. This may come in a future version. Once this cycle is complete, the escrow account is usually empty."),(0,a.kt)("p",null,"Things get a little complex when participation NFTs come into play. When a participation NFT has a fixed price, it is only paid in the case of non-winners. What they first do is cancel their bid, getting a refund, and then they redeem their participation bid with the ",(0,a.kt)("inlineCode",{parentName:"p"},"redeem_participation_bid")," endpoint. This charges them the fixed price and dumps those funds into the ",(0,a.kt)("inlineCode",{parentName:"p"},"accept_payment")," account. At intervals, someone must come and turn the crank to dump the proceeds to the creators of the Participation NFT from the latest redeemers of that NFT because they will only receive proceeds as people come and redeem and pay for them."),(0,a.kt)("p",null,"Note because our front end implementation chooses to use SOL instead of a generic SPL token, we use a Wrapped SOL ATA account for creators. They are then forced to use a drop-down menu to liquidate and close the Wrapped SOL ATA account when they next log in, absorbing the Wrapped SOL back into their normal SOL wallets. If you choose not to use SOL in your implementation, you will not have this difficulty."),(0,a.kt)("h3",{id:"validation"},"Validation"),(0,a.kt)("p",null,"Just because you provide a vault to an AuctionManager and an AuctionManagerSettings declaring this vault is filled with wonderful prizes ",(0,a.kt)("em",{parentName:"p"},"does not")," believe that Metaplex will believe you. For every safety deposit box indexed in a WinningConfigItem, there must be a call to ",(0,a.kt)("inlineCode",{parentName:"p"},"validate_safety_deposit_box")," after initiation where the safety deposit box is provided for inspection to the Metaplex contract so that it can verify that there are enough tokens, and of the right type, to pay off all winners in the auction."),(0,a.kt)("p",null,"Given how irritating this process is, we may in the future merge token-vault with metaplex, or simply copy over the parts of it that are relevant, leaving token-vault out for those interested in experimenting with fractionalization."),(0,a.kt)("h3",{id:"unwon-items"},"Unwon Items"),(0,a.kt)("p",null,"Any Token Only Transfer item, or MasterEditionV1/MasterEditionV2 stored for a Full Rights Transfer unwon in an Auction can be returned to the Auction Manager by calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"redeem_unused_winning_config_items_as_auctioneer")," end point. It acts as a proxy, calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"redeem_bid")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"redeem_full_rights_transfer_bid"),' depending on how it is parameterized, and passing in a winning_index that overrides the actual winning_index that would be detected for the bidder_info key being passed in (which is the auctioneer\'s in this case.) In this way the auctioneer acts not as a winning bidder but as a generic "non-bidder" who empties each prize that has no bidder using the same redemption flow. For MasterEditionV2s stored for PrintingV2 or Participation prizes, these can be withdrawn using ',(0,a.kt)("inlineCode",{parentName:"p"},"withdraw_edition"),"."))}h.isMDXComponent=!0}}]);