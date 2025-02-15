import { Button, Col, Menu, Row } from "antd";
import "antd/dist/antd.css";
import {
  useBalance,
  useContractLoader,
  useContractReader,
  useGasPrice,
  useOnBlock,
  useUserProviderAndSigner,
} from "eth-hooks";
import { useExchangeEthPrice } from "eth-hooks/dapps/dex";
import React, { useCallback, useEffect, useState } from "react";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import {
  Account,
  Contract,
  Faucet,
  GasGauge,
  Header,
  Ramp,
  NetworkDisplay,
  FaucetHint,
  NetworkSwitch,
  PricingTiers,
  CreatorProfile,
  HomeScreen,
  SearchResults,
  Discovery,
  ProfileDashboard,
  ExploreScreenNotConnected,
  HomeScreenCreateProfileModal,
  AssetDetailView,
  CheckoutPagePayLater
} from "./components";
import { NETWORKS, ALCHEMY_KEY } from "./constants";
import externalContracts from "./contracts/external_contracts";
// contracts
import deployedContracts from "./contracts/hardhat_contracts.json";
import { Transactor, Web3ModalSetup } from "./helpers";
import { Home, ExampleUI, Hints, Subgraph } from "./views";
import { useStaticJsonRPC } from "./hooks";


// import "./contracts/NftShop.sol";

const { ethers, ContractFactory } = require("ethers");
import { abi, bytecode } from "./helpers/NftMinter";

/*
    Welcome to 🏗 scaffold-eth !

    Code:
    https://github.com/scaffold-eth/scaffold-eth

    Support:
    https://t.me/joinchat/KByvmRe5wkR-8F_zz6AjpA
    or DM @austingriffith on twitter or telegram

    You should get your own Alchemy.com & Infura.io ID and put it in `constants.js`
    (this is your connection to the main Ethereum network for ENS etc.)


    🌏 EXTERNAL CONTRACTS:
    You can also bring in contract artifacts in `constants.js`
    (and then use the `useExternalContractLoader()` hook!)
*/

/// 📡 What chain are your contracts deployed to?
const initialNetwork = NETWORKS.localhost; // <------- select your target frontend network (localhost, rinkeby, xdai, mainnet)

// 😬 Sorry for all the console logging
const DEBUG = true;
const NETWORKCHECK = true;
const USE_BURNER_WALLET = true; // toggle burner wallet feature
const USE_NETWORK_SELECTOR = true;

const web3Modal = Web3ModalSetup();

// 🛰 providers
const providers = [
  "https://eth-mainnet.gateway.pokt.network/v1/lb/611156b4a585a20035148406",
  `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY}`,
  "https://rpc.scaffoldeth.io:48544",
];

async function mintNFT(userSigner, localProvider) {
    // Variables
    const name = "Example NFT"
    const uri = "bafybeicqgpqwpf3kdpngkzc5modcswibvmxetwz6ttmf7cvgroipewpsbu"
    const weiValue = ethers.BigNumber.from('100000000')
    const cost = ethers.utils.formatEther(weiValue)
    const maxMintAmount = 0
    const mintCapped = false
    
    // Read the contract artifact, which was generated by Remix
    const nftContractFactory = new ContractFactory(abi, bytecode, userSigner)
    // const nftContractFactory = new ContractFactory("NftShop")
  
    // Set gas limit and gas price, using the provider
    const price = ethers.utils.formatUnits(await localProvider.getGasPrice(), 'gwei')
    const options = {
      gasLimit: 100000,
      gasPrice: ethers.utils.parseUnits(price, 'gwei'),
    }
   
   console.log({name, uri, cost, maxMintAmount, mintCapped ,options})
    const contract = await nftContractFactory.deploy(name, uri, "00000000001", maxMintAmount, mintCapped, options )
    await contract.deployed()
    console.log(`Deployment successful! Contract Address: ${contract.address}`)
}

function App(props) {
  // specify all the chains your app is available on. Eg: ['localhost', 'mainnet', ...otherNetworks ]
  // reference './constants.js' for other networks
  const networkOptions = ["mumbai", initialNetwork.name];

  const [injectedProvider, setInjectedProvider] = useState();
  const [address, setAddress] = useState();
  const [selectedNetwork, setSelectedNetwork] = useState(networkOptions[0]);
  const location = useLocation();

  const targetNetwork = NETWORKS[selectedNetwork];

  // 🔭 block explorer URL
  const blockExplorer = targetNetwork.blockExplorer;

  // load all your providers
  const localProvider = useStaticJsonRPC([
    process.env.REACT_APP_PROVIDER ? process.env.REACT_APP_PROVIDER : targetNetwork.rpcUrl,
  ]);
  const mainnetProvider = useStaticJsonRPC(providers);

  if (DEBUG) console.log(`Using ${selectedNetwork} network`);
  if (DEBUG) console.log(`Blockexplorer: ${blockExplorer}`);

  // 🛰 providers
  if (DEBUG) console.log("📡 Connecting to Mainnet Ethereum");

  const logoutOfWeb3Modal = async () => {
    await web3Modal.clearCachedProvider();
    if (injectedProvider && injectedProvider.provider && typeof injectedProvider.provider.disconnect == "function") {
      await injectedProvider.provider.disconnect();
    }
    setTimeout(() => {
      window.location.reload();
    }, 1);
  };

  /* 💵 This hook will get the price of ETH from 🦄 Uniswap: */
  const price = useExchangeEthPrice(targetNetwork, mainnetProvider);

  /* 🔥 This hook will get the price of Gas from ⛽️ EtherGasStation */
  const gasPrice = useGasPrice(targetNetwork, "fast");
  // Use your injected provider from 🦊 Metamask or if you don't have it then instantly generate a 🔥 burner wallet.
  const userProviderAndSigner = useUserProviderAndSigner(injectedProvider, localProvider, USE_BURNER_WALLET);
  const userSigner = userProviderAndSigner.signer;

  useEffect(() => {
    async function getAddress() {
      if (userSigner) {
        const newAddress = await userSigner.getAddress();
        setAddress(newAddress);
      }
    }
    getAddress();
  }, [userSigner]);

  // You can warn the user if you would like them to be on a specific network
  const localChainId = localProvider && localProvider._network && localProvider._network.chainId;
  const selectedChainId =
    userSigner && userSigner.provider && userSigner.provider._network && userSigner.provider._network.chainId;

  // For more hooks, check out 🔗eth-hooks at: https://www.npmjs.com/package/eth-hooks

  // The transactor wraps transactions and provides notificiations
  const tx = Transactor(userSigner, gasPrice);

  // 🏗 scaffold-eth is full of handy hooks like this one to get your balance:
  const yourLocalBalance = useBalance(localProvider, address);

  // Just plug in different 🛰 providers to get your balance on different chains:
  const yourMainnetBalance = useBalance(mainnetProvider, address);

  // const contractConfig = useContractConfig();

  const contractConfig = { deployedContracts: deployedContracts || {}, externalContracts: externalContracts || {} };

  // Load in your local 📝 contract and read a value from it:
  const readContracts = useContractLoader(localProvider, contractConfig);

  // If you want to make 🔐 write transactions to your contracts, use the userSigner:
  const writeContracts = useContractLoader(userSigner, contractConfig, localChainId);

  // EXTERNAL CONTRACT EXAMPLE:
  //
  // If you want to bring in the mainnet DAI contract it would look like:
  const mainnetContracts = useContractLoader(mainnetProvider, contractConfig);

  // If you want to call a function on a new block
  useOnBlock(mainnetProvider, () => {
    console.log(`⛓ A new mainnet block is here: ${mainnetProvider._lastBlockNumber}`);
  });

  // Then read your DAI balance like:
  const myMainnetDAIBalance = useContractReader(mainnetContracts, "DAI", "balanceOf", [
    "0x34aA3F359A9D614239015126635CE7732c18fDF3",
  ]);

  // keep track of a variable from the contract in the local React state:
  const purpose = useContractReader(readContracts, "YourContract", "purpose");

  /*
  const addressFromENS = useResolveName(mainnetProvider, "austingriffith.eth");
  console.log("🏷 Resolved austingriffith.eth as:",addressFromENS)
  */

  //
  // 🧫 DEBUG 👨🏻‍🔬
  //
  useEffect(() => {
    if (
      DEBUG &&
      mainnetProvider &&
      address &&
      selectedChainId &&
      yourLocalBalance &&
      yourMainnetBalance &&
      readContracts &&
      writeContracts &&
      mainnetContracts
    ) {
      console.log("_____________________________________ 🏗 scaffold-eth _____________________________________");
      console.log("🌎 mainnetProvider", mainnetProvider);
      console.log("🏠 localChainId", localChainId);
      console.log("👩‍💼 selected address:", address);
      console.log("🕵🏻‍♂️ selectedChainId:", selectedChainId);
      console.log("💵 yourLocalBalance", yourLocalBalance ? ethers.utils.formatEther(yourLocalBalance) : "...");
      console.log("💵 yourMainnetBalance", yourMainnetBalance ? ethers.utils.formatEther(yourMainnetBalance) : "...");
      console.log("📝 readContracts", readContracts);
      console.log("🌍 DAI contract on mainnet:", mainnetContracts);
      console.log("💵 yourMainnetDAIBalance", myMainnetDAIBalance);
      console.log("🔐 writeContracts", writeContracts);
    }
  }, [
    mainnetProvider,
    address,
    selectedChainId,
    yourLocalBalance,
    yourMainnetBalance,
    readContracts,
    writeContracts,
    mainnetContracts,
    localChainId,
    myMainnetDAIBalance,
  ]);

  const loadWeb3Modal = useCallback(async () => {
    const provider = await web3Modal.connect();
    setInjectedProvider(new ethers.providers.Web3Provider(provider));

    provider.on("chainChanged", chainId => {
      console.log(`chain changed to ${chainId}! updating providers`);
      setInjectedProvider(new ethers.providers.Web3Provider(provider));
    });

    provider.on("accountsChanged", () => {
      console.log(`account changed!`);
      setInjectedProvider(new ethers.providers.Web3Provider(provider));
    });

    // Subscribe to session disconnection
    provider.on("disconnect", (code, reason) => {
      console.log(code, reason);
      logoutOfWeb3Modal();
    });
    // eslint-disable-next-line
  }, [setInjectedProvider]);

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      loadWeb3Modal();
    }
  }, [loadWeb3Modal]);

  const faucetAvailable = localProvider && localProvider.connection && targetNetwork.name.indexOf("local") !== -1;

  return (
    <div className="App">
      {/* ✏️ Edit the header and change the title to your project name */}
      {/* <Header /> */}
      {/* <Menu style={{ textAlign: "center", marginTop: 40 }} selectedKeys={[location.pathname]} mode="horizontal">
        <Menu.Item key="/">
          <Link to="/">App Home</Link>
        </Menu.Item>
        <Menu.Item key="/exampleui">
          <Link to="/exampleui">Lens ExampleUI</Link>
        </Menu.Item>
        <Menu.Item key="/debug">
          <Link to="/debug">Debug Lens Contracts</Link>
        </Menu.Item>
        <Menu.Item key="/hints">
          <Link to="/hints">Hints</Link>
        {/*</Menu.Item>
        <Menu.Item key="/mainnetdai">
          <Link to="/mainnetdai">Mainnet DAI</Link>
        </Menu.Item>
        <Menu.Item key="/subgraph">
          <Link to="/subgraph">Subgraph</Link>
        </Menu.Item>
      </Menu> */}

      <Switch>
        <Route exact path="/demo">
          {/* pass in any web3 props to this Home component. For example, yourLocalBalance */}
          <Home yourLocalBalance={yourLocalBalance} readContracts={readContracts} />
        </Route>
        <Route exact path="/debug">
          {/*
                🎛 this scaffolding is full of commonly used components
                this <Contract/> component will automatically parse your ABI
                and give you a form to interact with it locally
            */}

          {/*<Contract
            name="YourContract"
            price={price}
            signer={userSigner}
            provider={localProvider}
            address={address}
            blockExplorer={blockExplorer}
            contractConfig={contractConfig}
          />*/}

          <Contract
            name="ProfileCreationProxy"
            price={price}
            signer={userSigner}
            provider={localProvider}
            address={address}
            blockExplorer={blockExplorer}
            contractConfig={contractConfig}
          />
          <Contract
            name="LensHubProxy"
            price={price}
            signer={userSigner}
            provider={localProvider}
            address={address}
            blockExplorer={blockExplorer}
            contractConfig={contractConfig}
          />
          <Contract
            name="LensHubImplementation"
            price={price}
            signer={userSigner}
            provider={localProvider}
            address={address}
            blockExplorer={blockExplorer}
            contractConfig={contractConfig}
          />

        </Route>
        <Route path="/explore">
        <ExploreScreenNotConnected NETWORKCHECK={NETWORKCHECK}
        localChainId={localChainId}
        selectedChainId={selectedChainId}
        targetNetwork={targetNetwork}
        logoutOfWeb3Modal={logoutOfWeb3Modal}
        USE_NETWORK_SELECTOR={USE_NETWORK_SELECTOR} {...exploreScreenNotConnectedData} />
        </Route>

        <Route path="/profile">
          <ProfileDashboard {...profileDashboardData}/>
        </Route>

        <Route path="/profile-creation">
        <ExampleUI
            address={address}
            userSigner={userSigner}
            mainnetProvider={mainnetProvider}
            localProvider={localProvider}
            yourLocalBalance={yourLocalBalance}
            price={price}
            tx={tx}
            writeContracts={writeContracts}
            readContracts={readContracts}
            purpose={purpose}
            blockExplorer={blockExplorer}
            {...homeScreenCreateProfileModalData}
          />
        </Route>

        <Route exact path="/detail">
          {/* pass in any web3 props to this Home component. For example, yourLocalBalance */}
          <AssetDetailView {...assetDetailViewData}/>
        </Route>

        <Route path="/checkout">
          <CheckoutPagePayLater   
            backgroundElipsesProps={checkoutPagePayLaterData.backgroundElipsesProps}
            checkoutModalBuyWithCCProps={checkoutPagePayLaterData.checkoutModalBuyWithCCProps}
            signer={userSigner} 
            mainnetProvider={mainnetProvider}
            localProvider={localProvider}
            web3Modal={web3Modal}
          />
        </Route>


        <Route path="/purchase-asset">
        </Route>
        <Route path="/exampleui">
          <ExampleUI
            address={address}
            userSigner={userSigner}
            mainnetProvider={mainnetProvider}
            localProvider={localProvider}
            yourLocalBalance={yourLocalBalance}
            price={price}
            tx={tx}
            writeContracts={writeContracts}
            readContracts={readContracts}
            purpose={purpose}
            blockExplorer={blockExplorer}
            {...homeScreenCreateProfileModalData}
          />
        </Route>

        <Route path="/">
          <HomeScreen {...homeScreenData} NETWORKCHECK={NETWORKCHECK}
        localChainId={localChainId}
        selectedChainId={selectedChainId}
        targetNetwork={targetNetwork}
        logoutOfWeb3Modal={logoutOfWeb3Modal}
        USE_NETWORK_SELECTOR={USE_NETWORK_SELECTOR}/>
        </Route>

        
        
        <Route path="/:path(|search-results)">
          <SearchResults />
        </Route>

        

        <Route path="/hints">
          <Hints
            address={address}
            yourLocalBalance={yourLocalBalance}
            mainnetProvider={mainnetProvider}
            price={price}
          />
        </Route>
        
{/*        <Route path="/mainnetdai">
          <Contract
            name="DAI"
            customContract={mainnetContracts && mainnetContracts.contracts && mainnetContracts.contracts.DAI}
            signer={userSigner}
            provider={mainnetProvider}
            address={address}
            blockExplorer="https://etherscan.io/"
            contractConfig={contractConfig}
            chainId={1}
          />
        </Route>*/}

        <Route path="/subgraph">
          <Subgraph
            subgraphUri={props.subgraphUri}
            tx={tx}
            writeContracts={writeContracts}
            mainnetProvider={mainnetProvider}
          />
        </Route>
      </Switch>


      {/* 👨‍💼 Your account is in the top right with a wallet at connect options */}
      <div style={{ position: "absolute", textAlign: "right", right: 0, top: 0, padding: 10, color: 'white'}}>
        <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
          {USE_NETWORK_SELECTOR && (
            <div style={{ marginRight: 20 }}>
              <NetworkSwitch
                networkOptions={networkOptions}
                selectedNetwork={selectedNetwork}
                setSelectedNetwork={setSelectedNetwork}
              />
            </div>
          )}
          <Account
            useBurner={USE_BURNER_WALLET}
            address={address}
            localProvider={localProvider}
            userSigner={userSigner}
            mainnetProvider={mainnetProvider}
            price={price}
            web3Modal={web3Modal}
            loadWeb3Modal={loadWeb3Modal}
            logoutOfWeb3Modal={logoutOfWeb3Modal}
            blockExplorer={blockExplorer}
          />
        </div>
        {yourLocalBalance.lte(ethers.BigNumber.from("0")) && (
          <FaucetHint localProvider={localProvider} targetNetwork={targetNetwork} address={address} />
        )}
      </div>
<<<<<<< HEAD
      
      {/* <div>
=======
{/*       
      <div>
>>>>>>> c135fa8a55cdfdf12a0942a8c005bf004ddd8678
        <Button
            onClick={() => {
              mintNFT(userSigner, mainnetProvider);
            }}
            size="large"
            shape="round"
          >
            <span style={{ marginRight: 8 }} role="img" aria-label="support">
              💬
            </span>
            Mint NFT!!
          </Button>
      </div> */}

      {/* 🗺 Extra UI like gas price, eth price, faucet, and support: */}
      <div style={{ position: "fixed", textAlign: "left", left: 0, bottom: 20, padding: 10 }}>
        <Row align="middle" gutter={[4, 4]}>
          <Col span={8}>
            <Ramp price={price} address={address} networks={NETWORKS} />
          </Col>

          <Col span={8} style={{ textAlign: "center", opacity: 0.8 }}>
            <GasGauge gasPrice={gasPrice} />
          </Col>
          <Col span={8} style={{ textAlign: "center", opacity: 1 }}>
            <Button
              onClick={() => {
                window.open("https://t.me/joinchat/KByvmRe5wkR-8F_zz6AjpA");
              }}
              size="large"
              shape="round"
            >
              <span style={{ marginRight: 8 }} role="img" aria-label="support">
                💬
              </span>
              Support
            </Button>
          </Col>
        </Row>

        <Row align="middle" gutter={[4, 4]}>
          <Col span={24}>
            {
              /*  if the local provider has a signer, let's show the faucet:  */
              faucetAvailable ? (
                <Faucet localProvider={localProvider} price={price} ensProvider={mainnetProvider} />
              ) : (
                ""
              )
            }
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
const homeScreenData = {
  rectangle11: "https://bafybeig2g5gadgpngm2pn2ckupuoqhy4b6wvxuvrotfgqesr6nsmibik5a.ipfs.nftstorage.link/rectangle-11@1x.png",
  iconSearch: "https://bafybeig2g5gadgpngm2pn2ckupuoqhy4b6wvxuvrotfgqesr6nsmibik5a.ipfs.nftstorage.link/search-icon@2x.png",
  search: "Search",
  signUp: "Conect Wallet",
  logIn: "Log in",
  discover: "Discover",
  stats: "Stats",
  aboutUs: "About us",
  discoverCollectA: "Discover, collect, and create high quality 3D assets",
  kiwikIsTheWorlds: "KIWIK is the world’s first decentralized marketplace for 3D assets.",
  group51: "https://bafybeig2g5gadgpngm2pn2ckupuoqhy4b6wvxuvrotfgqesr6nsmibik5a.ipfs.nftstorage.link/image-1@1x.png",
  surname1: "Golden Dragon",
  x3DAssetByShannonCase1: "3D asset by Shannon Case",
  ellipse21: "https://bafkreiau7z5looui7rubbhfeo5k6udh54bkvl6t4332hdavgq53bxclpea.ipfs.nftstorage.link/",
  group52: "https://bafybeid4lfshw2ojf2swmsyippphm27p75kqvbm4msugidnsv77iwubvsu.ipfs.nftstorage.link/",
  surname2: "Golden Dragon",
  x3DAssetByShannonCase2: "3D asset by Shannon Case",
  ellipse22: "https://bafkreiau7z5looui7rubbhfeo5k6udh54bkvl6t4332hdavgq53bxclpea.ipfs.nftstorage.link/",
  explore: "Explore",
  image1: "https://bafybeig2g5gadgpngm2pn2ckupuoqhy4b6wvxuvrotfgqesr6nsmibik5a.ipfs.nftstorage.link/image-1-3@1x.png",
  fantasyScenery: "Male Character",
  x3DAssetByShannonCase3: "3D asset by Shannon Case",
  ellipse23: "https://bafkreiau7z5looui7rubbhfeo5k6udh54bkvl6t4332hdavgq53bxclpea.ipfs.nftstorage.link/",
  trendingNow: "Trending Now",
  group53: "https://bafybeifiwv5xjzuxjbkqhhyxydte45aih4btrq3cmkgy2ojrc3ucl2d5vy.ipfs.nftstorage.link/",
  surname3: "Trex Dinosaur",
  x3DAssetByShannonCase4: "3D asset by Shannon Case",
  ellipse24: "https://bafkreiau7z5looui7rubbhfeo5k6udh54bkvl6t4332hdavgq53bxclpea.ipfs.nftstorage.link/",
  quickView: "QUICK VIEW",
};

const group51Data = {
  src: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63012919bc585b7a4af06a36/img/image-1-1@2x.png",
};

const group52Data = {
  src: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63012919bc585b7a4af06a36/img/image-1-2@2x.png",
};

const group53Data = {
  src: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63012919bc585b7a4af06a36/img/image-1-3@2x.png",
};

const profileDashboardData = {
  discover1: "Discover",
  stats1: "Stats",
  aboutUs1: "About us",
  searchIcon: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6300fb88f5b4a343a48e0a7b/img/search-icon@2x.png",
  search: "Search",
  signOut: "Sign out",
  cartoonRocket: "Cartoon Rocket",
  name1: "Shannon Case",
  includes3ModelsM1: "Includes 3 models. more lorem ipsum description of the asset can go in here up to two lines,....",
  text4: "(3,333)",
  price1: "$10",
  rockets: "#rockets",
  cartoon1: "#cartoon",
  space1: "#space",
  profilePhoto1: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63012919bc585b7a4af06a36/img/profile-photo@2x.png",
  quickView: "QUICK VIEW",
  addToCart1: "Buy Now",
  alienDude: "Alien Dude",
  name2: "Shannon Case",
  includes3ModelsM2: "Includes 3 models. more lorem ipsum description of the asset can go in here up to two lines,....",
  text2: "(3,333)",
  price2: "$10",
  alien: "#alien",
  cartoon2: "#cartoon",
  space2: "#space",
  profilePhoto2: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63012919bc585b7a4af06a36/img/profile-photo@2x.png",
  addToCart2: "Buy Now",
  astronautOnTheMoon: "Astronaut on the moon",
  name3: "Shannon Case",
  includes3ModelsM3: "Includes 3 models. more lorem ipsum description of the asset can go in here up to two lines,....",
  text3: "(3,333)",
  price3: "$10",
  astronaut: "#astronaut",
  cartoon3: "#cartoon",
  space3: "#space",
  profilePhoto3: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63012919bc585b7a4af06a36/img/profile-photo@2x.png",
  addToCart3: "Buy Now",
  shannonsMostPopularAssets: "Shannon’s most popular assets",
  youMightAlsoLike: "You might also like...",
  lensProfile: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63015950b041066102c5131e/img/lens-profile@1x.png",
  discover2: "Discover",
  stats2: "Stats",
  aboutUs2: "About us",
  discover3: "Discover",
  stats3: "Stats",
  aboutUs3: "About us",
  backToTop: "Back to top",
  somethingAboutOurPitchGoesHere: "something about our pitch goes here",
  ellipse71: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63015950b041066102c5131e/img/ellipse-7-1@2x.png",
  mitchEger: "@mitch.eger",
  designerCreatingSp: "Designer creating sports and fitness equipment and environments",
  ellipse72: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63015950b041066102c5131e/img/ellipse-7-2@2x.png",
  iheart_Robots99: "@iheart_robots99",
  x3DArtistCreatingF: "3D artist creating fun and funky robots and the world’s around them.",
  ellipse73: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63015950b041066102c5131e/img/ellipse-7-3@2x.png",
  anakin_Skywalker: "@anakin_skywalker",
  creatorOfPodRacer: "Creator of pod racers, hates sand and beaches.",
  group51Props: group51Data,
  group52Props: group52Data,
  group53Props: group53Data,
};

const assetCard1Data = {
  cartoonRocket: "Cartoon Rocket",
  group5Props: group51Data,
};

const assetCard2Data = {
  cartoonRocket: "Alien Dude",
  className: "asset-card-1",
  group5Props: group52Data,
};


const assetCard3Data = {
  cartoonRocket: "Rocket Engines",
  className: "asset-card-2",
  group5Props: group53Data,
};

const group591Data = {
  assetCard1Props: assetCard1Data,
  assetCard2Props: assetCard2Data,
  assetCard3Props: assetCard3Data,
};

const group54Data = {
  src: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301ada3b6730c8252845980/img/image-1-17@2x.png",
};

const assetCard4Data = {
  cartoonRocket: "Lightsabers",
  group5Props: group54Data,
};

const group55Data = {
  src: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301ada3b6730c8252845980/img/image-1-12@2x.png",
};

const assetCard5Data = {
  cartoonRocket: "Space Shuttle",
  className: "asset-card-4",
  group5Props: group55Data,
};

const group56Data = {
  src: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63012919bc585b7a4af06a36/img/image-1-3@2x.png",
};

const assetCard6Data = {
  cartoonRocket: "Astronaut on the Moon",
  className: "asset-card-5",
  group5Props: group56Data,
};

const group592Data = {
  className: "group-61",
  assetCard1Props: assetCard4Data,
  assetCard2Props: assetCard5Data,
  assetCard3Props: assetCard6Data,
};

const group57Data = {
  src: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301ada3b6730c8252845980/img/image-1-20@2x.png",
};

const assetCard7Data = {
  cartoonRocket: "Octopus",
  group5Props: group57Data,
};

const group58Data = {
  src: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301ada3b6730c8252845980/img/image-1-13@2x.png",
};

const assetCard8Data = {
  cartoonRocket: "Rockets",
  className: "asset-card-6",
  group5Props: group58Data,
};

const group510Data = {
  src: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301ada3b6730c8252845980/img/image-1-22@2x.png",
};

const assetCard9Data = {
  cartoonRocket: "Dragon",
  className: "asset-card-7",
  group5Props: group510Data,
};

const group593Data = {
  className: "group-63",
  assetCard1Props: assetCard7Data,
  assetCard2Props: assetCard8Data,
  assetCard3Props: assetCard9Data,
};

const exploreScreenNotConnectedData = {
  ellipse3: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301578345395e6f680fac6f/img/ellipse-3@1x.png",
  ellipse5: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301ada3b6730c8252845980/img/ellipse-5-4@1x.png",
  ellipse4: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301578345395e6f680fac6f/img/ellipse-4@1x.png",
  ellipse6: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/ellipse-6@1x.png",
  forYou: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63018495b99a625a2af31884/img/for-you@1x.png",
  latest: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63018495b99a625a2af31884/img/latest@1x.png",
  trending: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63018495b99a625a2af31884/img/trending@1x.png",
  header: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301578345395e6f680fac6f/img/header@1x.png",
  vector3: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301578345395e6f680fac6f/img/vector-3@1x.png",
  footer: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301578345395e6f680fac6f/img/footer@1x.png",
  group591Props: group591Data,
  group592Props: group592Data,
  group593Props: group593Data,
};


const entry1Data = {
    username: "Username",
    name: "Shannon",
};

const entry2Data = {
    username: "Profile Image URL",
    name: "www.mylens.xyz",
    className: "entry-1",
};

const profileCreationData = {
    createAProfile: "Create a profile",
    create: "Create",
    entry1Props: entry1Data,
    entry2Props: entry2Data,
};

const homeScreenCreateProfileModalData = {
    discover1: "Discover",
    stats1: "Stats",
    aboutUs1: "About us",
    iconSearch: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6300fb88f5b4a343a48e0a7b/img/search-icon@2x.png",
    search: "Search",
    connectWallet: "Connect Wallet",
    discover2: "Discover",
    stats2: "Stats",
    aboutUs2: "About us",
    discover3: "Discover",
    stats3: "Stats",
    aboutUs3: "About us",
    backToTop: "Back to top",
    somethingAboutOurPitchGoesHere: "something about our pitch goes here",
    profileCreationProps: profileCreationData,

  ellipse32: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/ellipse-3-1@1x.png",
  cartoonRocket: "Male Character",
  price1: "1 $MATIC",
  name1: "Shannon Case",
  ellipse7: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/ellipse-7@2x.png",
  text1: "(3,333)",
  image11: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/image-1@2x.png",
  image2: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/image-2@2x.png",
  image3: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/image-3@2x.png",
  image4: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/image-4@2x.png",
  image5: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/image-5@2x.png",
  image6: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/image-6@2x.png",
  whatsIncluded: "What’s Included",
  reviews: "Reviews",
  productInformation: "Product Information",
  licenseAgreement1: "License Agreement",
  licenseType: "License Type",
  fileSize: "File Size",
  latestVersion: "Latest version",
  latestReleaseDate: "Latest release date",
  support: "Support",
  licenseAgreement2: "License Agreement",
  extensionAsset: "Extension Asset",
  x2018Kb: "201.8 KB",
  date: "3.4.22",
  name2: "April 17. 2022",
  visitSite: "Visit site",
  frequentlyAskedQuestions: "Frequently Asked Questions",
  spanText1: "Triangles: ",
  spanText2: "99.9k",
  spanText3: "Vertices: ",
  spanText4: "55.5k",
  buyItNow: "Buy it now",
  discover: "Discover",
  stats: "Stats",
  aboutUs: "About us",
  iconSearch: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6300fb88f5b4a343a48e0a7b/img/search-icon@2x.png",
  search: "Search",
  connectWallet: "Connect Wallet",
  similarAssets: "Similar Assets",
  image12: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/image-1-1@2x.png",
  astronautOnTheMoon: "Astronaut on the moon",
  name3: "Shannon Case",
  text2: "(4,444)",
  price2: "$10",
  view1: "View",
  image13: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/image-1-2@2x.png",
  spaceShuttleWithLaunchPad: "Space Shuttle with Launch pad",
  name4: "Shannon Case",
  text3: "(3,333)",
  price3: "$100",
  view2: "View",
  image14: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/image-1-3@2x.png",
  rocketEngines: "Rocket Engines",
  name5: "Shannon Case",
  text4: "(314)",
  price4: "$33",
  view3: "View",
};

const assetDetailViewData = {
  ellipse31: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/ellipse-3@1x.png",
  ellipse5: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/ellipse-5@1x.png",
  ellipse4: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301578345395e6f680fac6f/img/ellipse-4@1x.png",
  ellipse6: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/ellipse-6@1x.png",
  ellipse32: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/ellipse-3-1@1x.png",
  cartoonRocket: "Male Character",
  price1: "1 $MATIC",
  name1: "Shannon Case",
  ellipse7: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/ellipse-7@2x.png",
  text1: "(3,333)",
  image11: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/image-1@2x.png",
  image2: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/image-2@2x.png",
  image3: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/image-3@2x.png",
  image4: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/image-4@2x.png",
  image5: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/image-5@2x.png",
  image6: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/image-6@2x.png",
  whatsIncluded: "What’s Included",
  reviews: "Reviews",
  productInformation: "Product Information",
  licenseAgreement1: "License Agreement",
  licenseType: "License Type",
  fileSize: "File Size",
  latestVersion: "Latest version",
  latestReleaseDate: "Latest release date",
  support: "Support",
  licenseAgreement2: "License Agreement",
  extensionAsset: "Extension Asset",
  x2018Kb: "201.8 KB",
  date: "3.4.22",
  name2: "April 17. 2022",
  visitSite: "Visit site",
  frequentlyAskedQuestions: "Frequently Asked Questions",
  spanText1: "Triangles: ",
  spanText2: "99.9k",
  spanText3: "Vertices: ",
  spanText4: "55.5k",
  buyItNow: "Buy it now",
  discover: "Discover",
  stats: "Stats",
  aboutUs: "About us",
  iconSearch: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6300fb88f5b4a343a48e0a7b/img/search-icon@2x.png",
  search: "Search",
  connectWallet: "Connect Wallet",
  similarAssets: "Similar Assets",
  image12: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/image-1-1@2x.png",
  astronautOnTheMoon: "Astronaut on the moon",
  name3: "Shannon Case",
  text2: "(4,444)",
  price2: "$10",
  view1: "View",
  image13: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/image-1-2@2x.png",
  spaceShuttleWithLaunchPad: "Space Shuttle with Launch pad",
  name4: "Shannon Case",
  text3: "(3,333)",
  price3: "$100",
  view2: "View",
  image14: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/image-1-3@2x.png",
  rocketEngines: "Rocket Engines",
  name5: "Shannon Case",
  text4: "(314)",
  price4: "$33",
  view3: "View",
};

const backgroundElipsesData = {
  ellipse31: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63020a52db74deeef949820c/img/ellipse-3@1x.png",
  ellipse5: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63020a52db74deeef949820c/img/ellipse-5@1x.png",
  ellipse4: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63020a52db74deeef949820c/img/ellipse-4@1x.png",
  ellipse6: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63020a52db74deeef949820c/img/ellipse-6@1x.png",
  ellipse32: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63020a52db74deeef949820c/img/ellipse-3-1@1x.png",
};

const paymentDropDownData = {
  buyNowPayLater: "Buy now, pay later",
};

const checkoutModalBuyWithCCData = {
  checkout: "Checkout",
  orderSummary: "Order Summary",
  image11: "https://bafkreihimko6m76dq4vabvd4zgyw6pvindur3ydc54mllz4ghugo7jravu.ipfs.nftstorage.link/",
  cartoonRockets1: "Male Character",
  byShannonCase1: "By Shannon Case",
  price1: "1 $KIWIK",
  image12: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/630173e945395e6f680facca/img/image-1-16@2x.png",
  cartoonRockets2: "Cartoon Rockets",
  byShannonCase2: "By Shannon Case",
  price2: "2 $KIWIK",
  image13: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/630173e945395e6f680facca/img/image-1-16@2x.png",
  cartoonRockets3: "Cartoon Rockets",
  byShannonCase3: "By Shannon Case",
  price3: "2 $KIWIK",
  paymentDetails: "Payment Details",
  completeYourPurcha: "Complete your purchase by providing your payment details.",
  emailAddress: "Email Address",
  shannonACaseGmailCom: "shannon.a.case@gmail.com",
  payIn4: "Pay in 4",
  payOver6Weeks: "Pay over 6 weeks",
  price4: "$25",
  price5: "$25",
  price6: "$25",
  price7: "$25",
  today: "Today",
  week2: "Week 2",
  week4: "Week 4",
  week6: "Week 6",
  buyNowPayIn4PaymentsNoInterest: <React.Fragment>Buy Now. Pay in 4 payments.<br />No Interest</React.Fragment>,
  howItWorks: "How it works",
  xcontinue: "Continue",
  paymentDropDownProps: paymentDropDownData,
};

const checkoutPagePayLaterData = {
  backgroundElipsesProps: backgroundElipsesData,
  checkoutModalBuyWithCCProps: checkoutModalBuyWithCCData,
};

