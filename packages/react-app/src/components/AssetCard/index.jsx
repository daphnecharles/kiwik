import React from "react";
import { Link } from "react-router-dom";
import Group5 from "../Group5";
import styled from "styled-components";
import {
  MontserratBoldGeyser204px,
  ManropeBoldGeyser16px,
  ManropeBoldGeyser30px,
  ManropeBoldGeyser14px,
  Border1pxUiText,
  ManropeBoldGeyser12px,
  MontserratBoldBlackPearl18px,
  ValignTextMiddle,
} from "../../styledMixins";


function AssetCard(props) {
  const { cartoonRocket, className, group5Props } = props;

  return (
    <AssetCard1 className={`asset-card ${className || ""}`}>
      <OverlapGroup5 className="overlap-group5">
        <Group5 src={group5Props.src} />
        <CartoonRocket className="cartoon-rocket">{cartoonRocket}</CartoonRocket>
        <Name className="name">Shannon Case</Name>
        <Includes3ModelsM className="includes-3-models-m">
          Includes 3 models. more lorem ipsum description of the asset can go in here up to two lines,....
        </Includes3ModelsM>
        <Text1 className="text-1">(3,333)</Text1>
        <Price className="price">$10</Price>
        <OverlapGroup className="overlap-group">
          <Rockets className="rockets">#rockets</Rockets>
        </OverlapGroup>
        <OverlapGroup1 className="overlap-group1">
          <Rockets className="cartoon">#cartoon</Rockets>
        </OverlapGroup1>
        <OverlapGroup2 className="overlap-group2">
          <Space className="space">#space</Space>
        </OverlapGroup2>
        <ProfilePhoto
          className="profile-photo"
          src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63012919bc585b7a4af06a36/img/profile-photo@2x.png"
        />
        <VerifiedBadge
          className="verified-badge"
          src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63012919bc585b7a4af06a36/img/verified-badge@2x.svg"
        />
        <StarContainer className="star-container">
          <IconStar
            className="icon-star"
            src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301ada3b6730c8252845980/img/star-1-14@2x.svg"
          />
          <IconStar1
            className="icon-star-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301ada3b6730c8252845980/img/star-2-14@2x.svg"
          />
          <IconStar2
            className="icon-star-2"
            src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301ada3b6730c8252845980/img/star-3-14@2x.svg"
          />
          <IconStar3
            className="icon-star-3"
            src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301ada3b6730c8252845980/img/star-4-13@2x.svg"
          />
          <Star5
            className="star-5"
            src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301ada3b6730c8252845980/img/star-5-13@2x.svg"
          />
        </StarContainer>
        <IconHeart
          className="icon-heart"
          src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63012919bc585b7a4af06a36/img/union@2x.svg"
        />
        <Link to="/detail">
        <OverlapGroup4 className="overlap-group4">
          <ViewDetails className="view-details">View Details</ViewDetails>
        </OverlapGroup4>
        </Link>
      </OverlapGroup5>
    </AssetCard1>
  );
}

const AssetCard1 = styled.div`
  width: 446px;
  display: flex;
  align-items: flex-start;
  box-shadow: 0px 4px 25px #00000040;

  &.asset-card.asset-card-1 {
    margin-left: 83px;
  }

  &.asset-card.asset-card-2 {
    margin-left: 83px;
  }

  &.asset-card.asset-card-4 {
    margin-left: 83px;
  }

  &.asset-card.asset-card-5 {
    margin-left: 83px;
  }

  &.asset-card.asset-card-6 {
    margin-left: 83px;
  }

  &.asset-card.asset-card-7 {
    margin-left: 83px;
  }
`;

const OverlapGroup5 = styled.div`
  width: 446px;
  height: 630px;
  position: relative;
  border-radius: 16.33px;
`;

const CartoonRocket = styled.div`
  ${MontserratBoldGeyser204px}
  position: absolute;
  width: 252px;
  top: 366px;
  left: 92px;
  letter-spacing: 0;
`;

const Name = styled.div`
  ${ValignTextMiddle}
  ${ManropeBoldGeyser14px}
            position: absolute;
  width: 252px;
  height: 27px;
  top: 389px;
  left: 92px;
  letter-spacing: 0;
`;

const Includes3ModelsM = styled.p`
  ${ManropeBoldGeyser12px}
  position: absolute;
  width: 368px;
  top: 425px;
  left: 25px;
  letter-spacing: 0;
`;

const Text1 = styled.div`
  ${ManropeBoldGeyser12px}
  position: absolute;
  width: 47px;
  top: 475px;
  left: 163px;
  letter-spacing: 0;
`;

const Price = styled.h1`
  ${ValignTextMiddle}
  ${ManropeBoldGeyser30px}
            position: absolute;
  width: 61px;
  height: 37px;
  top: 562px;
  left: 30px;
  letter-spacing: 0;
`;

const OverlapGroup = styled.div`
  ${Border1pxUiText}
  position: absolute;
  height: 27px;
  top: 515px;
  left: 25px;
  display: flex;
  padding: 1px 16px;
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
  -webkit-text-stroke: 1px var(--black);
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup1 = styled.div`
  ${Border1pxUiText}
  position: absolute;
  height: 27px;
  top: 515px;
  left: 175px;
  display: flex;
  padding: 1px 16px;
  align-items: flex-start;
  min-width: 133px;
  background-color: var(--ui-dark);
  border-radius: 20px;
`;

const OverlapGroup2 = styled.div`
  ${Border1pxUiText}
  position: absolute;
  height: 27px;
  top: 515px;
  left: 319px;
  display: flex;
  padding: 1px 12.5px;
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
  -webkit-text-stroke: 1px var(--black);
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
  left: 140px;
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

const OverlapGroup4 = styled.button`
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

const ViewDetails = styled.div`
  ${MontserratBoldBlackPearl18px}
  width: 194px;
  min-height: 22px;
  text-align: center;
  letter-spacing: 0;
`;

export default AssetCard;
