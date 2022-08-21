import { Button, Card, DatePicker, Divider, Input, Progress, Row, Slider, Spin, Switch } from "antd";
import React, { useState } from "react";
import { utils } from "ethers";
import { SyncOutlined } from "@ant-design/icons";
import Entry from "./../components/Entry";
import styled from "styled-components";
import { ValignTextMiddle, ManropeBoldCornflower18px,
  ManropeMediumCornflower20px,
  MontserratNormalGeyser16px,
  MontserratMediumBlack14px,
  Border05pxNileBlue,
  MontserratLightBotticelli12px, } from "./../styledMixins";
import { WorldIDWidget } from "@worldcoin/id";
import "../components/HomeScreenCreateProfileModal/HomeScreenCreateProfileModal.css";
import { Address, Balance, Events } from "../components";
import { flexbox } from "@mui/system";

export default function ExampleUI({
  purpose,
  address,
  mainnetProvider,
  localProvider,
  yourLocalBalance,
  price,
  tx,
  readContracts,
  writeContracts,
  blockExplorer,
  createAProfile, create, entry1Props, entry2Props,
  discover1,
    stats1,
    aboutUs1,
    iconSearch,
    search,
    connectWallet,
    discover2,
    stats2,
    aboutUs2,
    discover3,
    stats3,
    aboutUs3,
    backToTop,
    somethingAboutOurPitchGoesHere,
}) {
  const [newPurpose, setNewPurpose] = useState("loading...");
  const [userHandle, setUserHandle] = useState(null);
  const [profileURI, setProfileURI] = useState(null);
  const [profileID, setProfileID] = useState(null);
  const [txHash, setTxHash] = useState(null);
  const [txStatus, setTxStatus] = useState(null);

  const widgetProps = {
    actionId: "wid_staging_f4660cc961a916c56af9cf3ef63ab70b",
    signal: "user-id-1",
    enableTelemetry: true,
    appName: "candyApp",
    signalDescription: "Receive initial airdrop April 2022",
    theme: "light",
    debug: true, // DO NOT SET TO `true` IN PRODUCTION
    onSuccess: (result) => console.log(result),
    onError: ({ code, detail }) => console.log({ code, detail }),
    onInitSuccess: () => console.log("Init successful"),
    onInitError: (error) => console.log("Error while initialization World ID", error),
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

  const profileCreationProps = {
    entry1Props: entry1Data,
    entry2Props: entry2Data,
  };

  
  return (
    <div>
      <div className="container-center-horizontal">
      <div className="home-screen-create-profile-modal screen">
        <OverlapGroup4>
          <Ellipse3></Ellipse3>
          <Ellipse5></Ellipse5>
          <Ellipse4></Ellipse4>
          <OverlapGroup2>
            <Group28 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63012919bc585b7a4af06a36/img/group-28@2x.svg" />
          
            <SearchContainer>
              <IconSearch src={iconSearch} />
              <Search>{search}</Search>
            </SearchContainer>
          </OverlapGroup2>
          <ProfileCreation1 createAProfile={profileCreationProps.createAProfile}
            create={profileCreationProps.create}
            entry1Props={profileCreationProps.entry1Props}
            entry2Props={profileCreationProps.entry2Props}>
      <FlexCol>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: "flex-end"}}>
      <img width="100px" height="70px" style={{marginRight: '20px'}}src="https://bafkreidczqgizlv4dkyxh4ri3icwa7e2ymups65c6q3pch3rqyh62hqdki.ipfs.nftstorage.link/"/>
        <Title style={{color: "white"}}>Create your Creator Profile</Title>
        </div>
        <p style={{color:'white', textAlign: "left", marginTop: "10px"}}>Create your profile on Lens Protocol and verify your identity with Worldcoin</p>
        
        <Entry username={profileCreationProps.entry1Props.username} name={profileCreationProps.entry1Props.name} setUserHandle={setUserHandle} />
        <Entry username={profileCreationProps.entry2Props.username} name={profileCreationProps.entry2Props.name} className={profileCreationProps.entry2Props.className} setProfileURI={setProfileURI} />
        <a  href="https://human.withlens.app/"><WorldIDWidget 
  {...widgetProps}
/></a>
          <Button style={{ height: '49px', alignSelf: 'center', marginTop: '62px', marginLeft: '', display: 'flex', padding: '12.7px 55.5px', justifyContent: 'flex-end', alignItems: 'flex-start', minWidth: '153px', backgroundColor: '#cee2eb', borderRadius: '50.68px',}}
            onClick={async () => {
              /* look how you call setPurpose on your contract: */
              /* notice how you pass a call back for tx updates too */
              const inputStruct = {
                to: address,
                handle: userHandle,
                imageURI: profileURI,
                followModule: "0x0000000000000000000000000000000000000000",
                followModuleData: [],
                followNFTURI:'',
              };
              const result = tx(writeContracts.ProfileCreationProxy.proxyCreateProfile(inputStruct), update => {
                console.log("📡 Transaction Update:", update);
                setTxHash(update.hash);
                if (update && (update.status === "confirmed" || update.status === 1)) {
                  console.log(" 🍾 Transaction " + update.hash + " finished!");
                  setTxStatus("Successfull");
                }
              });
              console.log("awaiting metamask/web3 confirm result...", result);
              console.log(await result);
            }}
        > Submit
        </Button>  
      </FlexCol>
      <IconClose src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63018bb545395e6f680facf1/img/close@2x.svg" />
    </ProfileCreation1>
        </OverlapGroup4>
        <OverlapGroup5>
          <OverlapGroup3>
            <FlexRow>
              <Logo src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63010f0345395e6f680fab6c/img/logo@2x.svg" />
              <FlexCol1>
                <Discover1>{discover3}</Discover1>
                <Stats1>{stats3}</Stats1>
                <AboutUs1>{aboutUs3}</AboutUs1>
              </FlexCol1>
              <BackToTop>{backToTop}</BackToTop>
            </FlexRow>
            <SomethingAboutOurPitchGoesHere>{somethingAboutOurPitchGoesHere}</SomethingAboutOurPitchGoesHere>
          </OverlapGroup3>
          <Vector3 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63010f0345395e6f680fab6c/img/vector-3@2x.svg" />
        </OverlapGroup5>
      </div>
    </div>
      


    </div>
  );
}


const ProfileCreation1 = styled.div`
  position: absolute;
  height: 650px;
  top: 432px;
  left: 1252px;
  display: flex;
  padding: 40.5px 35.4px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 541px;
  background-color: var(--ui-dark);
  border-radius: 13.21px;
`;

const FlexCol = styled.div`
  width: 430px;
  position: relative;
  margin-top: 7.87px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 382px;
`;

const Title = styled.h1`
  min-height: 42px;
  min-width: 224px;
  font-family: var(--font-family-manrope);
  font-weight: 600;
  color: var(--white);
  font-size: var(--font-size-xxl);
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup2 = styled.div`
  height: 49px;
  align-self: center;
  margin-top: 62px;
  margin-left: 15.01px;
  display: flex;
  padding: 12.7px 35.5px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 153px;
  background-color: var(--ui-text);
  border-radius: 50.68px;
`;

const Create = styled.div`
  ${ValignTextMiddle}
  width: 81px;
  height: 23px;
  font-family: var(--font-family-montserrat);
  font-weight: 500;
  color: var(--black);
  font-size: 17.7px;
  text-align: center;
  letter-spacing: 0;
`;

const IconClose = styled.img`
  width: 25px;
  height: 25px;
  margin-left: 4px;
`;

const OverlapGroup4 = styled.div`
  width: 3025px;
  height: 1130px;
  position: relative;
  margin-top: -275px;
  margin-left: -659px;
`;

const Ellipse3 = styled.div`
  position: absolute;
  width: 1073px;
  height: 1471px;
  top: 0;
  left: 1952px;
  border-radius: 536.5px/735.5px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgb(255, 0, 107.00000122189522) 0%,
    rgb(0, 12.000000234693289, 18.000000827014446) 100%
  );
`;

const Ellipse5 = styled.div`
  position: absolute;
  width: 1144px;
  height: 1034px;
  top: 861px;
  left: 909px;
  border-radius: 572.08px/517px;
  transform: rotate(35.17deg);
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgb(255, 0, 107.00000122189522) 0%,
    rgb(0, 12.000000234693289, 18.000000827014446) 100%
  );
`;

const Ellipse4 = styled.div`
  position: absolute;
  width: 1073px;
  height: 1471px;
  top: 77px;
  left: 0;
  border-radius: 536.5px/735.5px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgb(255, 0, 107.00000122189522) 0%,
    rgb(0, 12.000000234693289, 18.000000827014446) 100%
  );
`;


const Group28 = styled.img`
  width: 170px;
  height: 28px;
  margin-top: 0.13px;
`;

const Discover = styled.div`
  width: 75px;
  min-height: 14px;
  margin-left: 63px;
  margin-bottom: 6px;
  text-align: center;
  letter-spacing: 0;
`;

const Stats = styled.div`
  width: 44px;
  min-height: 14px;
  margin-left: 38px;
  margin-bottom: 6px;
  text-align: center;
  letter-spacing: 0;
`;

const AboutUs = styled.div`
  width: 78px;
  min-height: 14px;
  margin-left: 39px;
  margin-bottom: 6px;
  text-align: center;
  letter-spacing: 0;
`;

const SearchContainer = styled.div`
  ${Border05pxNileBlue}
  height: 37px;
  margin-left: 200px;
  margin-bottom: 3px;
  display: flex;
  padding: 11.3px 13.5px;
  align-items: center;
  min-width: 296px;
  background-color: var(--ui-dark);
  border-radius: 10px;
`;

const IconSearch = styled.img`
  width: 12px;
  height: 14px;
  margin-bottom: 0.35px;
`;

const Search = styled.div`
  ${MontserratLightBotticelli12px}
  width: 90px;
  min-height: 14px;
  align-self: flex-end;
  margin-left: 10px;
  letter-spacing: 0;
`;

const OverlapGroup1 = styled.div`
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
  ${MontserratMediumBlack14px}
  width: 121px;
  min-height: 14px;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup5 = styled.div`
  width: 100%;
  height: 316px;
  position: relative;
  margin-top: 140px;
`;

const OverlapGroup3 = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 34px 46px;
  align-items: flex-start;
  min-height: 316px;
  background-color: var(--woodsmoke);
  box-shadow: 0px -4px 25px #00000040;
`;

const FlexRow = styled.div`
  height: 108px;
  display: flex;
  align-items: flex-end;
  min-width: 1625px;
`;

const Logo = styled.img`
  width: 107px;
  height: 72px;
  align-self: center;
  margin-top: 3.95px;
`;

const Discover1 = styled.div`
  width: 75px;
  min-height: 14px;
  text-align: center;
  letter-spacing: 0;
`;

const Stats1 = styled.div`
  width: 44px;
  min-height: 14px;
  margin-top: 16px;
  text-align: center;
  letter-spacing: 0;
`;

const AboutUs1 = styled.div`
  width: 78px;
  min-height: 14px;
  margin-top: 16px;
  text-align: center;
  letter-spacing: 0;
`;

const FlexCol1 = styled.div`
  ${MontserratNormalGeyser16px}
  width: 78px;
  margin-left: 69px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 74px;
`;

const BackToTop = styled.div`
  ${ManropeBoldCornflower18px}
  width: 104px;
  min-height: 28px;
  align-self: flex-start;
  margin-left: 891px;
  letter-spacing: 0;
`;

const SomethingAboutOurPitchGoesHere = styled.div`
  ${ManropeMediumCornflower20px}
  width: 265px;
  min-height: 116px;
  margin-top: 21px;
  letter-spacing: 0;
`;

const Vector3 = styled.img`
  position: absolute;
  width: 18px;
  height: 27px;
  top: 30px;
  left: 1542px;
`;