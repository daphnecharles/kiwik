import React from "react";
import ProductInformationText from "../ProductInformationText";
import Triangles from "../Triangles";
import Vertices from "../Vertices";
import styled from "styled-components";
import {
  MontserratLightGeyser50px,
  MontserratLightGeyser60px,
  ManropeSemiBoldGeyser60px,
  SfproNormalBlueCharcoal30px,
  ManropeLightGeyser30px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./DetailQuickView.css";

function DetailQuickView(props) {
  const {
    title,
    price,
    name,
    ellipse7,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    text1,
    buyItNow,
    viewFullDetails,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="detail-quick-view screen">
        <FlexCol>
          <FlexRow>
            <OverlapGroup5>
              <Title>{title}</Title>
              <Price>{price}</Price>
              <OverlapGroup2>
                <Name>{name}</Name>
                <IconCheckMark src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63015950b041066102c5131e/img/verified-badge@2x.svg" />
              </OverlapGroup2>
              <Ellipse7 src={ellipse7} />
            </OverlapGroup5>
            <IconClose src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301773945395e6f680facd8/img/close@2x.svg" />
          </FlexRow>
          <FlexRow1>
            <ImagePreview>
              <Image1 src={image1} />
              <ImageContainer>
                <Image2 src={image2} />
                <Image3 src={image3} />
                <Image3 src={image4} />
                <Image5 src={image5} />
                <Image5 src={image6} />
              </ImageContainer>
            </ImagePreview>
            <OverlapGroup4>
              <Text1>{text1}</Text1>
              <StarContainer>
                <IconStar src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301773945395e6f680facd8/img/star-1@2x.svg" />
                <IconStar1 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301773945395e6f680facd8/img/star-2@2x.svg" />
                <IconStar2 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301773945395e6f680facd8/img/star-3@2x.svg" />
                <IconStar3 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301773945395e6f680facd8/img/star-4@2x.svg" />
                <Star5 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301773945395e6f680facd8/img/star-5@2x.svg" />
              </StarContainer>
              <ProductInformationText />
              <Union src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63015950b041066102c5131e/img/union@2x.svg" />
              <Triangles />
              <Vertices />
            </OverlapGroup4>
          </FlexRow1>
          <OverlapGroupContainer>
            <OverlapGroup>
              <BuyItNow>{buyItNow}</BuyItNow>
            </OverlapGroup>
            <OverlapGroup1>
              <ViewFullDetails>{viewFullDetails}</ViewFullDetails>
            </OverlapGroup1>
          </OverlapGroupContainer>
        </FlexCol>
      </div>
    </div>
  );
}

const FlexCol = styled.div`
  width: 1578px;
  display: flex;
  flex-direction: column;
  padding: 32px 28px;
  align-items: flex-end;
  min-height: 943px;
  background-color: var(--ui-dark);
  border-radius: 10.43px;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 1492px;
`;

const OverlapGroup5 = styled.div`
  width: 1260px;
  height: 172px;
  position: relative;
`;

const Title = styled.h1`
  ${MontserratLightGeyser60px}
  position: absolute;
  width: 831px;
  top: 0;
  left: 0;
  letter-spacing: 0;
`;

const Price = styled.div`
  ${ManropeSemiBoldGeyser60px}
  position: absolute;
  top: 90px;
  left: 0;
  letter-spacing: 0;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  width: 468px;
  height: 45px;
  top: 69px;
  left: 792px;
`;

const Name = styled.div`
  ${ValignTextMiddle}
  ${MontserratLightGeyser50px}
            position: absolute;
  width: 468px;
  height: 39px;
  top: 3px;
  left: 0;
  letter-spacing: 0;
`;

const IconCheckMark = styled.img`
  position: absolute;
  width: 45px;
  height: 45px;
  top: 0;
  left: 377px;
`;

const Ellipse7 = styled.img`
  position: absolute;
  width: 78px;
  height: 78px;
  top: 53px;
  left: 690px;
  object-fit: cover;
`;

const IconClose = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 212px;
`;

const FlexRow1 = styled.div`
  align-self: center;
  margin-left: 13px;
  display: flex;
  align-items: center;
  min-width: 1489px;
`;

const ImagePreview = styled.div`
  width: 647px;
  margin-top: 7px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 511px;
`;

const Image1 = styled.img`
  width: 646px;
  height: 415px;
  object-fit: cover;
`;

const ImageContainer = styled.div`
  height: 80px;
  margin-top: 16px;
  display: flex;
  align-items: flex-end;
  min-width: 647px;
`;

const Image2 = styled.img`
  width: 123px;
  height: 79px;
  object-fit: cover;
`;

const Image3 = styled.img`
  width: 123px;
  height: 79px;
  margin-left: 8px;
  object-fit: cover;
`;

const Image5 = styled.img`
  width: 123px;
  height: 79px;
  align-self: flex-start;
  margin-left: 8px;
  object-fit: cover;
`;

const OverlapGroup4 = styled.div`
  width: 806px;
  height: 574px;
  position: relative;
  margin-left: 36px;
`;

const Text1 = styled.div`
  ${ManropeLightGeyser30px}
  position: absolute;
  top: 35px;
  left: 264px;
  letter-spacing: 0;
`;

const StarContainer = styled.div`
  position: absolute;
  width: 241px;
  height: 59px;
  top: 32px;
  left: 13px;
`;

const IconStar = styled.img`
  position: absolute;
  width: 61px;
  height: 59px;
  top: 0;
  left: 0;
`;

const IconStar1 = styled.img`
  position: absolute;
  width: 61px;
  height: 59px;
  top: 0;
  left: 50px;
`;

const IconStar2 = styled.img`
  position: absolute;
  width: 61px;
  height: 59px;
  top: 0;
  left: 100px;
`;

const IconStar3 = styled.img`
  position: absolute;
  width: 61px;
  height: 59px;
  top: 0;
  left: 150px;
`;

const Star5 = styled.img`
  position: absolute;
  width: 40px;
  height: 59px;
  top: 0;
  left: 200px;
`;

const Union = styled.img`
  position: absolute;
  width: 36px;
  height: 21px;
  top: 52px;
  left: 679px;
`;

const OverlapGroupContainer = styled.div`
  margin-top: 41px;
  margin-right: 57.04px;
  display: flex;
  align-items: flex-start;
  min-width: 706px;
`;

const OverlapGroup = styled.div`
  height: 66px;
  display: flex;
  padding: 0 63px;
  align-items: center;
  min-width: 302px;
  background-color: var(--ui-pink);
  border-radius: 60px;
`;

const BuyItNow = styled.div`
  ${ValignTextMiddle}
  ${SfproNormalBlueCharcoal30px}
            width: 176px;
  height: 28px;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup1 = styled.div`
  height: 66px;
  margin-left: 72px;
  display: flex;
  padding: 0 41px;
  align-items: center;
  min-width: 332px;
  background-color: var(--ui-text);
  border-radius: 60px;
`;

const ViewFullDetails = styled.div`
  ${ValignTextMiddle}
  ${SfproNormalBlueCharcoal30px}
            width: 249px;
  height: 28px;
  text-align: center;
  letter-spacing: 0;
`;

export default DetailQuickView;
