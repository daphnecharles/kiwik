import React from "react";
import ProfileCreation from "../ProfileCreation";
import styled from "styled-components";
import {
  ManropeBoldCornflower18px,
  ManropeMediumCornflower20px,
  MontserratNormalGeyser16px,
  MontserratMediumBlack14px,
  Border05pxNileBlue,
  MontserratLightBotticelli12px,
} from "../../styledMixins";
import "./HomeScreenCreateProfileModal.css";

function HomeScreenCreateProfileModal(props) {
  const {
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
    profileCreationProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="home-screen-create-profile-modal screen">
        <OverlapGroup4>
          <Ellipse3></Ellipse3>
          <Ellipse5></Ellipse5>
          <Ellipse4></Ellipse4>
          <OverlapGroup2>
            <Group28 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63012919bc585b7a4af06a36/img/group-28@2x.svg" />
            <Discover>{discover1}</Discover>
            <Stats>{stats1}</Stats>
            <AboutUs>{aboutUs1}</AboutUs>
            <SearchContainer>
              <IconSearch src={iconSearch} />
              <Search>{search}</Search>
            </SearchContainer>
          </OverlapGroup2>
          <ProfileCreation
            createAProfile={profileCreationProps.createAProfile}
            create={profileCreationProps.create}
            entry1Props={profileCreationProps.entry1Props}
            entry2Props={profileCreationProps.entry2Props}
          />
        </OverlapGroup4>
        <OverlapGroup5>
          <OverlapGroup3>
            <FlexRow>
              <Logo src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63010f0345395e6f680fab6c/img/logo@2x.svg" />
              <FlexCol>
                <Discover1>{discover2}</Discover1>
                <Stats1>{stats2}</Stats1>
                <AboutUs1>{aboutUs2}</AboutUs1>
              </FlexCol>
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
  );
}

const OverlapGroup4 = styled.div`
  width: 3025px;
  height: 2130px;
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

const OverlapGroup2 = styled.div`
  ${MontserratNormalGeyser16px}
  position: absolute;
  height: 92px;
  top: 275px;
  left: 659px;
  display: flex;
  padding: 0 46px;
  align-items: center;
  min-width: 100%;
  background-color: var(--cod-gray);
  box-shadow: 0px 4px 25px #00000040;
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
  width: 1744px;
  height: 316px;
  position: relative;
  margin-top: 140px;
`;

const OverlapGroup3 = styled.div`
  position: absolute;
  width: 1728px;
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

const FlexCol = styled.div`
  ${MontserratNormalGeyser16px}
  width: 78px;
  margin-left: 298px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 74px;
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

export default HomeScreenCreateProfileModal;
