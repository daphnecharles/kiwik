import React from "react";
import { Link } from "react-router-dom";
import Group5 from "../Group5";
import styled from "styled-components";
import { AssetDetailView } from "./";

import {
  ManropeBoldGeyser16px,
  ManropeBoldBlueCharcoal12px,
  MontserratMediumGeyser18px,
  ManropeBoldBlueCharcoal14px,
  ManropeBoldBlueCharcoal30px,
  MontserratBoldBlueCharcoal204px,
  ValignTextMiddle,
  MontserratLightGeyser338px
} from "../../styledMixins";


function Card(props) {
  const { cartoonRocket, rockets, profilePhoto, group5Props, quickView } = props;

  return (
    <Card1>
      <OverlapGroup5>
        <Group5 src={group5Props.src} />    
        <CartoonRocket>{cartoonRocket}</CartoonRocket>
        <Link to="/profile">
           <Name>Shannon Case</Name>
        </Link>
        <Includes3ModelsM>
          Includes 3 models. more lorem ipsum description of the asset can go in here up to two lines,....
        </Includes3ModelsM>
        <Text1>(3,333)</Text1>
        <Price>$10</Price>
        <OverlapGroup>
          <Rockets>{rockets}</Rockets>
        </OverlapGroup>
        <OverlapGroup1>
          <Rockets>#cartoon</Rockets>
        </OverlapGroup1>
        <OverlapGroup2>
          <Space>#space</Space>
        </OverlapGroup2>
        <Link to="/profile">
          <ProfilePhoto src={profilePhoto} />
          <VerifiedBadge style={{ right: '50px'}}src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63012919bc585b7a4af06a36/img/verified-badge@2x.svg" />
        </Link>
        <StarContainer>
          <IconStar src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63012919bc585b7a4af06a36/img/star-1@2x.svg" />
          <IconStar1 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63012919bc585b7a4af06a36/img/star-2@2x.svg" />
          <IconStar2 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63012919bc585b7a4af06a36/img/star-3@2x.svg" />
          <IconStar3 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63012919bc585b7a4af06a36/img/star-4@2x.svg" />
          <Star5 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63012919bc585b7a4af06a36/img/star-5@2x.svg" />
        </StarContainer>
        <IconHeart src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63012919bc585b7a4af06a36/img/union@2x.svg" />
        <OverlapGroup4>
          <Link to="/detail">
            <AddToCart>Buy Now</AddToCart>
          </Link>
        </OverlapGroup4>
      </OverlapGroup5>
    </Card1>
  );
}


const Card1 = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 446px;
  box-shadow: 0px 4px 25px #00000040;
`;

const Rectangle22 = styled.div`
  position: absolute;
  width: 446px;
  height: 68px;
  top: 275px;
  left: 0;
  background-color: var(--ui-dark);
`;

const Rectangle23 = styled.div`
  position: absolute;
  width: 446px;
  height: 298px;
  top: 0;
  left: 0;
  background-color: var(--black-pearl);
  border-radius: 16.33px;
`;


const OverlapGroup5 = styled.div`
  width: 446px;
  height: 630px;
  position: relative;
  border-radius: 16.33px;
`;


const QUICKVIEW = styled.div`
  ${ValignTextMiddle}
  ${MontserratLightGeyser338px}
            position: absolute;
  width: 273px;
  height: 27px;
  top: 295px;
  left: 82px;
  text-align: center;
  letter-spacing: 0;
`;

const CartoonRocket = styled.div`
  ${MontserratBoldBlueCharcoal204px}
  position: absolute;
  width: 252px;
  top: 365px;
  left: 92px;
  letter-spacing: 0;
`;

const Name = styled.div`
  ${ValignTextMiddle}
  ${ManropeBoldBlueCharcoal14px}
            position: absolute;
  width: 252px;
  height: 27px;
  top: 388px;
  left: 92px;
  letter-spacing: 0;
`;

const Includes3ModelsM = styled.p`
  ${ManropeBoldBlueCharcoal12px}
  position: absolute;
  width: 368px;
  top: 424px;
  left: 25px;
  letter-spacing: 0;
`;

const Text1 = styled.div`
  ${ManropeBoldBlueCharcoal12px}
  position: absolute;
  width: 47px;
  top: 474px;
  left: 163px;
  letter-spacing: 0;
`;

const Price = styled.h1`
  ${ValignTextMiddle}
  ${ManropeBoldBlueCharcoal30px}
            position: absolute;
  width: 61px;
  height: 37px;
  top: 561px;
  left: 30px;
  letter-spacing: 0;
`;

const OverlapGroup = styled.div`
  position: absolute;
  height: 27px;
  top: 515px;
  left: 25px;
  display: flex;
  padding: 3px 18px;
  align-items: flex-start;
  min-width: 133px;
  background-color: var(--ui-dark);
  border-radius: 20px;
`;

const Rockets = styled.div`
  ${ValignTextMiddle}
  ${ManropeBoldGeyser16px}
            width: 97px;
  height: 20px;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  height: 27px;
  top: 515px;
  left: 175px;
  display: flex;
  padding: 3px 18px;
  align-items: flex-start;
  min-width: 133px;
  background-color: var(--ui-dark);
  border-radius: 20px;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  height: 27px;
  top: 515px;
  left: 319px;
  display: flex;
  padding: 3px 14.5px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 107px;
  background-color: var(--ui-dark);
  border-radius: 20px;
`;

const Space = styled.div`
  ${ValignTextMiddle}
  ${ManropeBoldGeyser16px}
            width: 78px;
  height: 20px;
  text-align: center;
  letter-spacing: 0;
`;

const ProfilePhoto = styled.img`
  position: absolute;
  width: 55px;
  height: 55px;
  top: 358px;
  left: 17px;
  object-fit: cover;
`;

const VerifiedBadge = styled.img`
  position: absolute;
  width: 15px;
  height: 15px;
  top: 394px;
  left: 150px;
`;

const StarContainer = styled.div`
  position: absolute;
  width: 139px;
  height: 34px;
  top: 470px;
  left: 20px;
`;

const IconStar = styled.img`
  position: absolute;
  width: 35px;
  height: 34px;
  top: 0;
  left: 0;
`;

const IconStar1 = styled.img`
  position: absolute;
  width: 35px;
  height: 34px;
  top: 0;
  left: 29px;
`;

const IconStar2 = styled.img`
  position: absolute;
  width: 35px;
  height: 34px;
  top: 0;
  left: 58px;
`;

const IconStar3 = styled.img`
  position: absolute;
  width: 35px;
  height: 34px;
  top: 0;
  left: 87px;
`;

const Star5 = styled.img`
  position: absolute;
  width: 23px;
  height: 34px;
  top: 0;
  left: 116px;
`;

const IconHeart = styled.img`
  position: absolute;
  width: 35px;
  height: 30px;
  top: 32px;
  left: 385px;
`;

const OverlapGroup4 = styled.div`
  position: absolute;
  height: 39px;
  top: 560px;
  left: 128px;
  display: flex;
  padding: 8px 50px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 295px;
  background-color: var(--ui-pink);
  border-radius: 40px;
`;

const AddToCart = styled.div`
  ${MontserratMediumGeyser18px}
  width: 194px;
  min-height: 22px;
  text-align: center;
  letter-spacing: 0;
`;

export default Card;
