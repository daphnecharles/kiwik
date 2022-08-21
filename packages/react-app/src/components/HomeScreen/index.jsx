import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MontserratNormalGeyser16px, ManropeBoldBlack114px, MontserratBoldBlack204px } from "../../styledMixins";
import "./HomeScreen.css";
import NetworkDisplay from "../NetworkDisplay"
import Card from "../Card"
import { GLTFModel, AmbientLight, DirectionLight } from "react-3d-viewer";

function HomeScreen(props) {
  const {
    rectangle11,
    iconSearch,
    search,
    signUp,
    logIn,
    discover,
    stats,
    aboutUs,
    discoverCollectA,
    kiwikIsTheWorlds,
    group51,
    surname1,
    x3DAssetByShannonCase1,
    ellipse21,
    group52,
    surname2,
    x3DAssetByShannonCase2,
    ellipse22,
    explore,
    image1,
    fantasyScenery,
    x3DAssetByShannonCase3,
    ellipse23,
    trendingNow,
    group53,
    surname3,
    x3DAssetByShannonCase4,
    ellipse24,
    NETWORKCHECK,
    localChainId,
    selectedChainId,
    targetNetwork,
    logoutOfWeb3Modal,
    USE_NETWORK_SELECTOR,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="home-screen screen">
        <OverlapGroup10>
          <OverlapGroup9>
            <OverlapGroup>
              <Rectangle11 src={rectangle11} />
              <Rectangle12></Rectangle12>
            </OverlapGroup>
            <Ellipse3></Ellipse3>
            <Ellipse5></Ellipse5>
            <Ellipse4></Ellipse4>
            <Rectangle5></Rectangle5>
            <SearchContainer>
              <IconSearch src={iconSearch} />
              <Search>{search}</Search>
            </SearchContainer>
            {/* <NetworkDisplay
        NETWORKCHECK={NETWORKCHECK}
        localChainId={localChainId}
        selectedChainId={selectedChainId}
        targetNetwork={targetNetwork}
        logoutOfWeb3Modal={logoutOfWeb3Modal}
        USE_NETWORK_SELECTOR={USE_NETWORK_SELECTOR}
      /> */}
            <Discover>{discover}</Discover>
            <Stats>{stats}</Stats>
            <AboutUs>{aboutUs}</AboutUs>
            <DiscoverCollectA>{discoverCollectA}</DiscoverCollectA>
            <KIWIKIsTheWorlds>{kiwikIsTheWorlds}</KIWIKIsTheWorlds>
            <OverlapGroup4>
            <Card
            cartoonRocket="Cartoon Rocket"
            rockets="#rockets"
            profilePhoto="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63012919bc585b7a4af06a36/img/profile-photo@2x.png"
            group5Props={cardData.group5Props}
          />
            </OverlapGroup4>
            <OverlapGroup5>
            <Card
            cartoonRocket="Cartoon Rocket"
            rockets="#rockets"
            profilePhoto="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63012919bc585b7a4af06a36/img/profile-photo@2x.png"
            group5Props={cardData.group5Props}
          />
            </OverlapGroup5>
            <OverlapGroup7>
            <Link to="/explore">
              <OverlapGroup1>
                <Explore>{explore}</Explore>
              </OverlapGroup1>
              </Link>
              <Vector3 src="https://bafybeig2g5gadgpngm2pn2ckupuoqhy4b6wvxuvrotfgqesr6nsmibik5a.ipfs.nftstorage.link/vector-3@2x.svg" />
            </OverlapGroup7>
            <OverlapGroup8>
              <Group51 >
                <GLTFModel
                  src={
                    "https://ipfs.io/ipfs/bafybeibb7psrr326hvv3thstwmghin5pgwnwtpy5xgbn6jzp2oqdy2nlzy?filename=man.glb"
                  }
                  width="550"
                  height="325"
                  position={{x:0,y:-1,z:0}}
                >
                  <DirectionLight
                    color={0xffffff}
                    position={{ x: 100, y: 200, z: 100 }}
                  />
                  <DirectionLight
                    color={0xff00ff}
                    position={{ x: -100, y: 200, z: -100 }} 
                  />
                </GLTFModel>
                {/* <Image1 src={image1} /> */}
              </Group51>
              <FantasyScenery>{fantasyScenery}</FantasyScenery>
              <X3DAssetByShannonCase1>{x3DAssetByShannonCase3}</X3DAssetByShannonCase1>
              <Ellipse21 src={ellipse23} />
              <Vector21 src="https://bafybeig2g5gadgpngm2pn2ckupuoqhy4b6wvxuvrotfgqesr6nsmibik5a.ipfs.nftstorage.link/vector-2-3@2x.svg" />
            </OverlapGroup8>
            <Group28 src="https://bafybeig2g5gadgpngm2pn2ckupuoqhy4b6wvxuvrotfgqesr6nsmibik5a.ipfs.nftstorage.link/group-28@2x.svg" />
          </OverlapGroup9>
          <TrendingNow>{trendingNow}</TrendingNow>
          <OverlapGroup6>
            <Card
            cartoonRocket="Cartoon Rocket"
            rockets="#rockets"
            profilePhoto="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63012919bc585b7a4af06a36/img/profile-photo@2x.png"
            group5Props={cardData.group5Props}
          />
          </OverlapGroup6>
          
        </OverlapGroup10>
      </div>
    </div>
  );
}

const OverlapGroup10 = styled.div`
  width: 2841px;
  height: 2881px;
  position: relative;
  margin-left: -652px;
`;

const OverlapGroup9 = styled.div`
  position: absolute;
  width: 2841px;
  height: 2881px;
  top: 0;
  left: 0;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 1728px;
  height: 646px;
  top: 91px;
  left: 652px;
`;

const Rectangle11 = styled.img`
  position: absolute;
  width: 1728px;
  height: 635px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Rectangle12 = styled.div`
  position: absolute;
  width: 1728px;
  height: 294px;
  top: 352px;
  left: 0;
  background: linear-gradient(
    180deg,
    rgba(3.000000058673322, 19.0000007674098, 27.000000290572643, 0) 0%,
    rgb(0, 12.000000234693289, 18.000000827014446) 100%
  );
`;

const Ellipse3 = styled.div`
  position: absolute;
  width: 1073px;
  height: 1471px;
  top: 726px;
  left: 1768px;
  border-radius: 536.5px/735.5px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(255, 0, 107.00000122189522, .2) 0%,
    rgba(0, 12.000000234693289, 18.000000827014446, .2) 100%
  );
`;

const Ellipse5 = styled.div`
  position: absolute;
  width: 1144px;
  height: 1034px;
  top: 1612px;
  left: 531px;
  border-radius: 572.08px/517px;
  transform: rotate(35.17deg);
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(255, 0, 107.00000122189522, .2) 0%,
    rgba(0, 12.000000234693289, 18.000000827014446, .2) 100%
  );
`;

const Ellipse4 = styled.div`
  position: absolute;
  width: 1073px;
  height: 1471px;
  top: 178px;
  left: 0;
  border-radius: 536.5px/735.5px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(255, 0, 107.00000122189522, .2) 0%,
    rgba(0, 12.000000234693289, 18.000000827014446, .2) 100%
  );
`;

const Rectangle5 = styled.div`
  position: absolute;
  width: 1728px;
  height: 92px;
  top: 0;
  left: 652px;
  background-color: #010a0e;
  box-shadow: 0px 4px 25px #00000040;
`;

const SearchContainer = styled.div`
  position: absolute;
  height: 37px;
  top: 25px;
  left: 1500px;
  display: flex;
  padding: 11.3px 13.5px;
  align-items: center;
  min-width: 296px;
  background-color: var(--ui-dark);
  border-radius: 10px;
  border: 0.5px solid #1f3d4a;
`;

const IconSearch = styled.img`
  width: 12px;
  height: 14px;
  margin-bottom: 0.35px;
`;

const Search = styled.div`
  width: 90px;
  min-height: 14px;
  align-self: center;
  margin-left: 10px;
  font-family: var(--font-family-montserrat);
  font-weight: 300;
  color: #cde3ec;
  font-size: 12px;
  letter-spacing: 0;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  height: 39px;
  top: 24px;
  left: 2161px;
  display: flex;
  padding: 12px 28px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 121px;
  background-color: var(--ui-text);
  border-radius: 40px;
`;

const SignUp = styled.div`
  width: 64px;
  min-height: 14px;
  font-family: var(--font-family-montserrat);
  font-weight: 500;
  color: var(--black);
  font-size: var(--font-size-l);
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup3 = styled.div`
  position: absolute;
  height: 39px;
  top: 24px;
  left: 2023px;
  display: flex;
  padding: 11px 28px;
  align-items: flex-start;
  min-width: 121px;
  border-radius: 40px;
  border: 1px solid var(--ui-text);
`;

const LogIn = styled.div`
  width: 62px;
  min-height: 14px;
  font-family: var(--font-family-montserrat);
  font-weight: 500;
  color: var(--ui-text);
  font-size: var(--font-size-l);
  text-align: center;
  letter-spacing: 0;
`;

const Discover = styled.div`
  ${MontserratNormalGeyser16px}
  position: absolute;
  width: 75px;
  top: 35px;
  left: 931px;
  text-align: center;
  letter-spacing: 0;
`;

const Stats = styled.div`
  ${MontserratNormalGeyser16px}
  position: absolute;
  width: 44px;
  top: 35px;
  left: 1044px;
  text-align: center;
  letter-spacing: 0;
`;

const AboutUs = styled.div`
  ${MontserratNormalGeyser16px}
  position: absolute;
  width: 78px;
  top: 35px;
  left: 1127px;
  text-align: center;
  letter-spacing: 0;
`;

const DiscoverCollectA = styled.h1`
  position: absolute;
  width: 831px;
  top: 221px;
  left: 761px;
  font-family: var(--font-family-montserrat);
  font-weight: 300;
  color: var(--ui-text);
  font-size: var(--font-size-xxxxxl);
  letter-spacing: 0;
`;

const KIWIKIsTheWorlds = styled.div`
  position: absolute;
  width: 716px;
  top: 425px;
  left: 763px;
  font-family: var(--font-family-manrope);
  font-weight: 500;
  color: #95c5da;
  font-size: var(--font-size-xxxxl);
  letter-spacing: 0;
`;

const OverlapGroup4 = styled.div`
  position: absolute;
  width: 446px;
  height: 593px;
  top: 914px;
  left: 794px;
`;

const Group5 = styled.div`
  position: absolute;
  width: 444px;
  height: 593px;
  top: 0;
  left: 2px;
  background-color: var(--ui-text);
  border-radius: 16.28px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Rectangle10 = styled.div`
  position: absolute;
  width: 446px;
  height: 164px;
  top: 429px;
  left: 0;
  border-radius: 16.28px;
  background: linear-gradient(
    180deg,
    rgba(217.0000022649765, 217.0000022649765, 217.0000022649765, 0) 0%,
    rgb(206.0000029206276, 226.0000017285347, 235.0000011920929) 100%
  );
`;

const Surname = styled.div`
  ${MontserratBoldBlack204px}
  position: absolute;
  width: 251px;
  top: 523px;
  left: 98px;
  letter-spacing: 0;
`;

const X3DAssetByShannonCase = styled.p`
  ${ManropeBoldBlack114px}
  position: absolute;
  width: 251px;
  top: 550px;
  left: 98px;
  letter-spacing: 0;
`;

const Ellipse2 = styled.img`
  position: absolute;
  width: 55px;
  height: 55px;
  top: 517px;
  left: 23px;
  object-fit: cover;
`;

const Vector2 = styled.img`
  position: absolute;
  width: 29px;
  height: 17px;
  top: 535px;
  left: 394px;
`;

const OverlapGroup5 = styled.div`
  position: absolute;
  width: 446px;
  height: 593px;
  top: 913px;
  left: 1792px;
`;

const OverlapGroup7 = styled.div`
  position: absolute;
  width: 302px;
  height: 66px;
  top: 587px;
  left: 766px;
  border-radius: 60px;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  height: 66px;
  top: 0;
  left: 0;
  display: flex;
  padding: 13px 74px;
  align-items: flex-start;
  min-width: 302px;
  background-color: var(--ui-pink);
  border-radius: 60px;
`;

const Explore = styled.div`
  width: 126px;
  min-height: 28px;
  font-family: var(--font-family-sf_pro-semibold);
  font-weight: 400;
  color: var(--blue-charcoal);
  font-size: 30px;
  text-align: center;
  letter-spacing: 0;
`;

const Vector3 = styled.img`
  position: absolute;
  width: 36px;
  height: 18px;
  top: 24px;
  left: 198px;
`;

const OverlapGroup8 = styled.div`
  position: absolute;
  width: 546px;
  height: 437px;
  top: 190px;
  left: 1650px;
  border-radius: 20px;
`;

const Group51 = styled.div`
  position: absolute;
  height: 437px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 546px;
  background-color: var(--ui-text);
  border-radius: 20px;
`;

const Image1 = styled.img`
  width: 546px;
  height: 330px;
  object-fit: cover;
`;

const FantasyScenery = styled.div`
  position: absolute;
  width: 308px;
  top: 354px;
  left: 118px;
  font-family: var(--font-family-montserrat);
  font-weight: 700;
  color: var(--black);
  font-size: var(--font-size-xxxl);
  letter-spacing: 0;
`;

const X3DAssetByShannonCase1 = styled.p`
  position: absolute;
  width: 308px;
  top: 387px;
  left: 118px;
  font-family: var(--font-family-manrope);
  font-weight: 700;
  color: var(--black);
  font-size: var(--font-size-l);
  letter-spacing: 0;
`;

const Ellipse21 = styled.img`
  position: absolute;
  width: 67px;
  height: 67px;
  top: 346px;
  left: 26px;
  object-fit: cover;
`;

const Vector21 = styled.img`
  position: absolute;
  width: 36px;
  height: 21px;
  top: 368px;
  left: 482px;
`;

const Group28 = styled.img`
  position: absolute;
  width: 170px;
  height: 28px;
  top: 32px;
  left: 698px;
`;

const TrendingNow = styled.div`
  position: absolute;
  width: 354px;
  top: 795px;
  left: 1385px;
  font-family: var(--font-family-montserrat);
  font-weight: 300;
  color: var(--ui-text);
  font-size: 40px;
  letter-spacing: 0;
`;

const OverlapGroup6 = styled.div`
  position: absolute;
  width: 446px;
  height: 593px;
  top: 913px;
  left: 1293px;
`;

const OverlapGroup11 = styled.div`
  height: 39px;
  margin-left: 71px;
  margin-top: 1px;
  display: flex;
  padding: 10px 30.2px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 183px;
  background-color: var(--ui-text);
  border-radius: 40px;
`;

const ConnectWallet = styled.div`
  width: 121px;
  min-height: 14px;
  font-family: var(--font-family-montserrat);
  font-weight: 500;
  color: var(--black);
  font-size: var(--font-size-l);
  text-align: center;
  letter-spacing: 0;
`;

const group5Data = {
  src: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63012919bc585b7a4af06a36/img/image-1-1@2x.png",
};

const cardData = {
  group5Props: group5Data,
};



export default HomeScreen;
