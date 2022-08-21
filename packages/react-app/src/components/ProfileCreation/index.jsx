import React from "react";
import Entry from "../Entry";
import styled from "styled-components";
import { ValignTextMiddle } from "../../styledMixins";
import { WorldIDWidget } from "@worldcoin/id";


function ProfileCreation(props) {
  const { createAProfile, create, entry1Props, entry2Props } = props;

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

  return (
    <ProfileCreation1>
      <FlexCol>
        <Title style={{color: "white"}}>Create your Creator Profile</Title>
        <p style={{color:'white', textAlign: "left"}}>Create your profile on Lens Protocol and verify your identity with Worldcoin</p>
        <Entry username={entry1Props.username} name={entry1Props.name} />
        <Entry username={entry2Props.username} name={entry2Props.name} className={entry2Props.className} />
        <a  href="https://human.withlens.app/"><WorldIDWidget 
  {...widgetProps}
/></a>
        <OverlapGroup2>
          <Create>Create Profile</Create>
        </OverlapGroup2>
      </FlexCol>
      <IconClose src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63018bb545395e6f680facf1/img/close@2x.svg" />
    </ProfileCreation1>
  );
}

const ProfileCreation1 = styled.div`
  position: absolute;
  height: 600px;
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

export default ProfileCreation;
