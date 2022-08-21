import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  ManropeBoldGeyser109px,
  ManropeBoldGeyser201px,
  ManropeLightGeyser161px,
  MontserratNormalGeyser16px,
  MontserratMediumBlack14px,
  MontserratLightGeyser40px,
  ManropeBoldGeyser127px,
  ManropeBoldBlueCharcoal145px,
  ManropeMediumGeyser161px,
  Border1pxBlueDianne,
  ManropeLightCornflower161px,
  MontserratLightBotticelli12px,
  MontserratBoldGeyser185px,
  Border05pxNileBlue,
  ValignTextMiddle,
} from "../../styledMixins";
import "./AssetDetailView.css";

function AssetDetailView(props) {
  const {
    ellipse31,
    ellipse5,
    ellipse4,
    ellipse6,
    ellipse32,
    cartoonRocket,
    price1,
    name1,
    ellipse7,
    text1,
    image11,
    image2,
    image3,
    image4,
    image5,
    image6,
    whatsIncluded,
    reviews,
    productInformation,
    licenseAgreement1,
    licenseType,
    fileSize,
    latestVersion,
    latestReleaseDate,
    support,
    licenseAgreement2,
    extensionAsset,
    x2018Kb,
    date,
    name2,
    visitSite,
    frequentlyAskedQuestions,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    buyItNow,
    discover,
    stats,
    aboutUs,
    iconSearch,
    search,
    connectWallet,
    similarAssets,
    image12,
    astronautOnTheMoon,
    name3,
    text2,
    price2,
    view1,
    image13,
    spaceShuttleWithLaunchPad,
    name4,
    text3,
    price3,
    view2,
    image14,
    rocketEngines,
    name5,
    text4,
    price4,
    view3,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="asset-detail-view screen">
        <OverlapGroup11>
          <EllipseContainer>
            <Ellipse3 src={ellipse31} />
            <Ellipse5 src={ellipse5} />
            <Ellipse4 src={ellipse4} />
            <Ellipse6 src={ellipse6} />
            <Ellipse31 src={ellipse32} />
            <Ellipse9></Ellipse9>
            <Ellipse10></Ellipse10>
          </EllipseContainer>
          <OverlapGroupContainer>
            <OverlapGroup6>
              <CartoonRocket>{cartoonRocket}</CartoonRocket>
              <Price>{price1}</Price>
              <Link to="/profile">
                <OverlapGroup3>
                  <Name>{name1}</Name>
                  <VerifiedBadge src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301ada3b6730c8252845980/img/verified-badge-9@2x.svg" />
                </OverlapGroup3>
                <Ellipse7 src={ellipse7} />
              </Link>
            </OverlapGroup6>
            <OverlapGroup5>
              <Text1>{text1}</Text1>
              <ImagePreview>
                <Image1 src={image11} />
                <ImageContainer>
                  <Image2 src={image2} />
                  <Image3 src={image3} />
                  <Image3 src={image4} />
                  <Image5 src={image5} />
                  <Image5 src={image6} />
                </ImageContainer>
              </ImagePreview>
              <StarContainer>
                <IconStar src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/star-1@2x.svg" />
                <IconStar1 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/star-2@2x.svg" />
                <IconStar2 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/star-3@2x.svg" />
                <IconStar3 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/star-4@2x.svg" />
                <Star5 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/star-5@2x.svg" />
              </StarContainer>
              <ProductInformationText>
                <OverlapGroup2>
                  <WhatsIncluded>{whatsIncluded}</WhatsIncluded>
                  <FlexCol>
                    <Reviews>{reviews}</Reviews>
                    <ProductInformation>{productInformation}</ProductInformation>
                    <LicenseAgreement>{licenseAgreement1}</LicenseAgreement>
                    <LicenseType>{licenseType}</LicenseType>
                    <LicenseType>{fileSize}</LicenseType>
                    <LicenseType>{latestVersion}</LicenseType>
                    <LicenseType>{latestReleaseDate}</LicenseType>
                    <Support>{support}</Support>
                  </FlexCol>
                  <FlexCol1>
                    <Union src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/union-3@2x.svg" />
                    <LicenseAgreement1>{licenseAgreement2}</LicenseAgreement1>
                    <ExtensionAsset>{extensionAsset}</ExtensionAsset>
                    <ExtensionAsset>{x2018Kb}</ExtensionAsset>
                    <ExtensionAsset>{date}</ExtensionAsset>
                    <ExtensionAsset>{name2}</ExtensionAsset>
                    <VisitSite>{visitSite}</VisitSite>
                  </FlexCol1>
                </OverlapGroup2>
                <FrequentlyAskedQuestions>{frequentlyAskedQuestions}</FrequentlyAskedQuestions>
              </ProductInformationText>
              <Union1 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/union@2x.svg" />
              <Union2 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/union-1@2x.svg" />
              <Union3 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/union-2@2x.svg" />
              <Triangles>
                <Polygon6 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/polygon-6@2x.svg" />
                <Triangles999k>
                  <span>
                    <span className="manrope-medium-geyser-16-1px">{spanText1}</span>
                    <span className="manrope-semi-bold-geyser-16-1px">{spanText2}</span>
                  </span>
                </Triangles999k>
              </Triangles>
              <Vertices>
                <Union4 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/union-4@2x.svg" />
                <Vertices555k>
                  <span>
                    <span className="manrope-medium-geyser-16-1px">{spanText3}</span>
                    <span className="manrope-semi-bold-geyser-16-1px">{spanText4}</span>
                  </span>
                </Vertices555k>
              </Vertices>
            </OverlapGroup5>
            <OverlapGroup>
              <BuyItNow>{buyItNow}</BuyItNow>
            </OverlapGroup>
          </OverlapGroupContainer>
          <OverlapGroup7>
            <Group28 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6300fb88f5b4a343a48e0a7b/img/group-28@2x.svg" />
            <Discover>{discover}</Discover>
            <Stats>{stats}</Stats>
            <AboutUs>{aboutUs}</AboutUs>
            <SearchContainer>
              <IconSearch src={iconSearch} />
              <Search>{search}</Search>
            </SearchContainer>
            <OverlapGroup1>
              <ConnectWallet>{connectWallet}</ConnectWallet>
            </OverlapGroup1>
          </OverlapGroup7>
          <Rectangle17></Rectangle17>
          <SimilarAssets>{similarAssets}</SimilarAssets>
          <OverlapGroup8>
            <Image11 src={image12} />
            <FlexCol2>
              <AstronautOnTheMoon>{astronautOnTheMoon}</AstronautOnTheMoon>
              <FlexRow>
                <FlexCol3>
                  <Name1>{name3}</Name1>
                  <StarContainer1>
                    <IconStar4 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/star-1-1@2x.svg" />
                    <IconStar5 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/star-2-1@2x.svg" />
                    <IconStar6 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/star-3-1@2x.svg" />
                    <Star51 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/star-5-1@2x.svg" />
                  </StarContainer1>
                </FlexCol3>
                <FlexCol4>
                  <VerifiedBadge1 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/verified-badge-1@2x.svg" />
                  <Text2>{text2}</Text2>
                </FlexCol4>
              </FlexRow>
              <FlexRow1>
                <Price1>{price2}</Price1>
                <OverlapGroup12>
                  <View>{view1}</View>
                </OverlapGroup12>
              </FlexRow1>
            </FlexCol2>
          </OverlapGroup8>
          <OverlapGroup9>
            <Image11 src={image13} />
            <FlexCol5>
              <SpaceShuttleWithLaunchPad>{spaceShuttleWithLaunchPad}</SpaceShuttleWithLaunchPad>
              <FlexRow2>
                <Name2>{name4}</Name2>
                <VerifiedBadge2 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/verified-badge-1@2x.svg" />
              </FlexRow2>
              <FlexRow3>
                <StarContainer2>
                  <IconStar4 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/star-1-2@2x.svg" />
                  <IconStar5 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/star-2-2@2x.svg" />
                  <IconStar6 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/star-3-2@2x.svg" />
                  <IconStar7 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/star-4-1@2x.svg" />
                  <Star52 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/star-5-2@2x.svg" />
                </StarContainer2>
                <Text3>{text3}</Text3>
              </FlexRow3>
              <FlexRow1>
                <Price2>{price3}</Price2>
                <OverlapGroup13>
                  <View>{view2}</View>
                </OverlapGroup13>
              </FlexRow1>
            </FlexCol5>
          </OverlapGroup9>
          <OverlapGroup10>
            <Image11 src={image14} />
            <FlexCol6>
              <RocketEngines>{rocketEngines}</RocketEngines>
              <FlexRow4>
                <Name2>{name5}</Name2>
                <VerifiedBadge2 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/verified-badge-1@2x.svg" />
              </FlexRow4>
              <FlexRow5>
                <IconStarContainer>
                  <IconStar4 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/star-1-3@2x.svg" />
                  <IconStar5 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/star-2-3@2x.svg" />
                  <IconStar6 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/star-3-3@2x.svg" />
                  <IconStar7 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/star-4-2@2x.svg" />
                </IconStarContainer>
                <Text4>{text4}</Text4>
              </FlexRow5>
              <FlexRow6>
                <Price1>{price4}</Price1>
                <OverlapGroup12>
                  <View>{view3}</View>
                </OverlapGroup12>
              </FlexRow6>
            </FlexCol6>
          </OverlapGroup10>
        </OverlapGroup11>
      </div>
    </div>
  );
}



const OverlapGroup11 = styled.div`
  width: 3476px;
  height: 3850px;
  position: relative;
  margin-left: -652px;
  margin-top: -787px;
`;

const EllipseContainer = styled.div`
  position: absolute;
  width: 2765px;
  height: 2854px;
  top: 603px;
  left: 183px;
`;

const Ellipse3 = styled.img`
  position: absolute;
  width: 1146px;
  height: 1416px;
  top: 878px;
  left: 846px;
`;

const Ellipse5 = styled.img`
  position: absolute;
  width: 702px;
  height: 536px;
  top: 1959px;
  left: 469px;
`;

const Ellipse4 = styled.img`
  position: absolute;
  width: 421px;
  height: 1471px;
  top: 362px;
  left: 469px;
`;

const Ellipse6 = styled.img`
  position: absolute;
  width: 1146px;
  height: 455px;
  top: 184px;
  left: 1051px;
`;

const Ellipse31 = styled.img`
  position: absolute;
  width: 485px;
  height: 864px;
  top: 1631px;
  left: 1712px;
`;

const Ellipse9 = styled.div`
  position: absolute;
  width: 2077px;
  height: 1034px;
  top: 1316px;
  left: 108px;
  border-radius: 1038.45px/517px;
  transform: rotate(35.17deg);
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgb(0, 132.599995136261, 255) 0%,
    rgb(0, 12.000000234693289, 18.000000827014446) 100%
  );
`;

const Ellipse10 = styled.div`
  position: absolute;
  width: 2077px;
  height: 1034px;
  top: 607px;
  left: 1004px;
  border-radius: 1038.45px/517px;
  transform: rotate(77.95deg);
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgb(0, 132.599995136261, 255) 0%,
    rgb(0, 12.000000234693289, 18.000000827014446) 100%
  );
`;

const OverlapGroupContainer = styled.div`
  position: absolute;
  width: 1059px;
  top: 929px;
  left: 727px;
  display: flex;
  flex-direction: column;
  padding: 34.9px 5.6px;
  align-items: flex-end;
  min-height: 864px;
  background-color: var(--blue-charcoal-22);
  border-radius: 40px;
  border: 0.7px solid var(--blue-dianne);
`;

const OverlapGroup6 = styled.div`
  width: 845px;
  height: 115px;
  position: relative;
  align-self: flex-start;
  margin-left: 38.71px;
`;

const CartoonRocket = styled.div`
  ${MontserratLightGeyser40px}
  position: absolute;
  width: 557px;
  top: 0;
  left: 0;
  letter-spacing: 0;
`;

const Price = styled.h1`
  position: absolute;
  top: 60px;
  left: 0;
  font-family: var(--font-family-manrope);
  font-weight: 600;
  color: var(--ui-text);
  font-size: 40.2px;
  letter-spacing: 0;
`;

const OverlapGroup3 = styled.div`
  position: absolute;
  width: 314px;
  height: 30px;
  top: 46px;
  left: 531px;
`;

const Name = styled.div`
  ${ValignTextMiddle}
  position: absolute;
  width: 314px;
  height: 26px;
  top: 2px;
  left: 0;
  font-family: var(--font-family-montserrat);
  font-weight: 300;
  color: var(--ui-text);
  font-size: 33.5px;
  letter-spacing: 0;
`;

const VerifiedBadge = styled.img`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 0;
  left: 253px;
`;

const Ellipse7 = styled.img`
  position: absolute;
  width: 52px;
  height: 52px;
  top: 36px;
  left: 463px;
  object-fit: cover;
`;

const OverlapGroup5 = styled.div`
  width: 1013px;
  height: 559px;
  position: relative;
`;

const Text1 = styled.div`
  position: absolute;
  top: 23px;
  left: 731px;
  font-family: var(--font-family-manrope);
  font-weight: 300;
  color: var(--ui-text);
  font-size: var(--font-size-xl);
  letter-spacing: 0;
`;

const ImagePreview = styled.div`
  position: absolute;
  width: 434px;
  top: 23px;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 0px 0;
  align-items: flex-start;
  min-height: 343px;
`;

const Image1 = styled.img`
  width: 433px;
  height: 278px;
  margin-left: 0;
  object-fit: cover;
`;

const ImageContainer = styled.div`
  height: 54px;
  margin-top: 11px;
  margin-left: 0;
  display: flex;
  align-items: flex-end;
  min-width: 434px;
`;

const Image2 = styled.img`
  width: 83px;
  height: 53px;
  object-fit: cover;
`;

const Image3 = styled.img`
  width: 83px;
  height: 53px;
  margin-left: 5px;
  object-fit: cover;
`;

const Image5 = styled.img`
  width: 83px;
  height: 53px;
  align-self: flex-start;
  margin-left: 5px;
  object-fit: cover;
`;

const StarContainer = styled.div`
  position: absolute;
  width: 161px;
  height: 39px;
  top: 21px;
  left: 563px;
`;

const IconStar = styled.img`
  position: absolute;
  width: 41px;
  height: 39px;
  top: 0;
  left: 0;
`;

const IconStar1 = styled.img`
  position: absolute;
  width: 41px;
  height: 39px;
  top: 0;
  left: 34px;
`;

const IconStar2 = styled.img`
  position: absolute;
  width: 41px;
  height: 39px;
  top: 0;
  left: 67px;
`;

const IconStar3 = styled.img`
  position: absolute;
  width: 41px;
  height: 39px;
  top: 0;
  left: 101px;
`;

const Star5 = styled.img`
  position: absolute;
  width: 27px;
  height: 39px;
  top: 0;
  left: 134px;
`;

const ProductInformationText = styled.div`
  position: absolute;
  width: 1006px;
  top: 0;
  left: 8px;
  display: flex;
  flex-direction: column;
  padding: 0 0px;
  align-items: flex-start;
  min-height: 559px;
`;

const OverlapGroup2 = styled.div`
  height: 503px;
  display: flex;
  padding: 23.8px 1px;
  align-items: flex-start;
  min-width: 974px;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/6301a7a6eee9bf332cc2ccd9/img/line-1@1x.svg);
  background-size: 100% 100%;
`;

const WhatsIncluded = styled.div`
  ${ManropeBoldGeyser201px}
  width: 231px;
  min-height: 26px;
  align-self: flex-end;
  margin-bottom: 4.36px;
  letter-spacing: 0;
`;

const FlexCol = styled.div`
  width: 231px;
  margin-left: 228px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 362px;
`;

const Reviews = styled.div`
  ${ManropeBoldGeyser201px}
  width: 95px;
  min-height: 26px;
  letter-spacing: 0;
`;

const ProductInformation = styled.div`
  ${ManropeBoldGeyser201px}
  width: 231px;
  min-height: 26px;
  margin-top: 50px;
  letter-spacing: 0;
`;

const LicenseAgreement = styled.div`
  ${ManropeMediumGeyser161px}
  width: 231px;
  min-height: 19px;
  margin-top: 64px;
  letter-spacing: 0;
`;

const LicenseType = styled.div`
  ${ManropeMediumGeyser161px}
  width: 231px;
  min-height: 19px;
  margin-top: 17px;
  letter-spacing: 0;
`;

const Support = styled.div`
  ${ManropeMediumGeyser161px}
  width: 231px;
  min-height: 19px;
  margin-top: 12px;
  letter-spacing: 0;
`;

const FlexCol1 = styled.div`
  width: 231px;
  align-self: center;
  margin-left: 36px;
  margin-bottom: 17.78px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 285px;
`;

const Union = styled.img`
  width: 24px;
  height: 14px;
  margin-right: 27.5px;
`;

const LicenseAgreement1 = styled.div`
  ${ManropeLightCornflower161px}
  width: 231px;
  min-height: 19px;
  margin-top: 76px;
  text-align: right;
  letter-spacing: 0;
  text-decoration: underline;
`;

const ExtensionAsset = styled.div`
  ${ManropeLightGeyser161px}
  width: 231px;
  min-height: 19px;
  margin-top: 17px;
  text-align: right;
  letter-spacing: 0;
`;

const VisitSite = styled.div`
  ${ManropeLightCornflower161px}
  width: 231px;
  min-height: 19px;
  margin-top: 12px;
  text-align: right;
  letter-spacing: 0;
  text-decoration: underline;
`;

const FrequentlyAskedQuestions = styled.div`
  ${ManropeBoldGeyser201px}
  width: 326px;
  min-height: 26px;
  margin-top: 30px;
  margin-left: 1.01px;
  letter-spacing: 0;
`;

const Union1 = styled.img`
  position: absolute;
  width: 24px;
  height: 14px;
  top: 35px;
  left: 914px;
`;

const Union2 = styled.img`
  position: absolute;
  width: 24px;
  height: 14px;
  top: 455px;
  left: 914px;
`;

const Union3 = styled.img`
  position: absolute;
  width: 24px;
  height: 14px;
  top: 533px;
  left: 914px;
`;

const Triangles = styled.div`
  position: absolute;
  height: 19px;
  top: 148px;
  left: 468px;
  display: flex;
  padding: 0 0.2px;
  align-items: flex-start;
  min-width: 143px;
`;

const Polygon6 = styled.img`
  width: 10px;
  height: 13px;
  align-self: center;
  margin-top: 1.85px;
`;

const Triangles999k = styled.div`
  ${ValignTextMiddle}
  ${ManropeMediumGeyser161px}
            width: 124px;
  height: 19px;
  margin-left: 6px;
  margin-top: 0;
  letter-spacing: 0;
`;

const Vertices = styled.div`
  position: absolute;
  height: 19px;
  top: 148px;
  left: 627px;
  display: flex;
  padding: 0 0px;
  align-items: flex-start;
  min-width: 135px;
`;

const Union4 = styled.img`
  width: 12px;
  height: 13px;
  align-self: center;
  margin-bottom: 0.26px;
`;

const Vertices555k = styled.div`
  ${ValignTextMiddle}
  ${ManropeMediumGeyser161px}
            width: 118px;
  height: 19px;
  margin-left: 4px;
  margin-top: 0;
  letter-spacing: 0;
`;

const OverlapGroup = styled.div`
  height: 44px;
  margin-top: 63px;
  margin-right: 48.8px;
  display: flex;
  padding: 12.7px 42.3px;
  align-items: flex-end;
  min-width: 203px;
  background-color: var(--ui-pink);
  border-radius: 40.25px;
`;

const BuyItNow = styled.div`
  ${ValignTextMiddle}
  width: 118px;
  height: 19px;
  font-family: var(--font-family-sf_pro-semibold);
  font-weight: 400;
  color: var(--blue-charcoal2);
  font-size: var(--font-size-xl);
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup7 = styled.div`
  ${MontserratNormalGeyser16px}
  position: absolute;
  height: 92px;
  top: 787px;
  left: 652px;
  display: flex;
  padding: 0 46px;
  align-items: center;
  min-width: 1728px;
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
  margin-left: 512px;
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

const Rectangle17 = styled.div`
  ${Border1pxBlueDianne}
  position: absolute;
  width: 493px;
  height: 864px;
  top: 929px;
  left: 1837px;
  background-color: var(--blue-charcoal-22);
  border-radius: 40px;
`;

const SimilarAssets = styled.div`
  ${MontserratLightGeyser40px}
  position: absolute;
  width: 402px;
  top: 968px;
  left: 1884px;
  letter-spacing: 0;
`;

const OverlapGroup8 = styled.div`
  position: absolute;
  height: 170px;
  top: 1059px;
  left: 1882px;
  display: flex;
  align-items: center;
  min-width: 414px;
  background-color: var(--ui-dark);
  border-radius: 20px;
  box-shadow: 0px 4px 25px #00000040;
`;

const Image11 = styled.img`
  width: 215px;
  height: 170px;
  object-fit: cover;
`;

const FlexCol2 = styled.div`
  width: 193px;
  margin-left: 6px;
  margin-bottom: 3.54px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 142px;
`;

const AstronautOnTheMoon = styled.div`
  ${MontserratBoldGeyser185px}
  width: 188px;
  min-height: 24px;
  margin-left: 4.65px;
  letter-spacing: 0;
`;

const FlexRow = styled.div`
  height: 60px;
  margin-top: 25px;
  display: flex;
  align-items: center;
  min-width: 149px;
`;

const FlexCol3 = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 60px;
`;

const Name1 = styled.div`
  ${ValignTextMiddle}
  ${ManropeBoldGeyser127px}
            width: 89px;
  height: 24px;
  margin-left: 4.65px;
  letter-spacing: 0;
`;

const StarContainer1 = styled.div`
  width: 100px;
  height: 31px;
  position: relative;
  margin-top: 5px;
`;

const IconStar4 = styled.img`
  position: absolute;
  width: 32px;
  height: 31px;
  top: 0;
  left: 0;
`;

const IconStar5 = styled.img`
  position: absolute;
  width: 32px;
  height: 31px;
  top: 0;
  left: 26px;
`;

const IconStar6 = styled.img`
  position: absolute;
  width: 32px;
  height: 31px;
  top: 0;
  left: 53px;
`;

const Star51 = styled.img`
  position: absolute;
  width: 21px;
  height: 31px;
  top: 0;
  left: 79px;
`;

const FlexCol4 = styled.div`
  width: 49px;
  margin-bottom: 6.13px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 45px;
`;

const VerifiedBadge1 = styled.img`
  width: 14px;
  height: 14px;
`;

const Text2 = styled.div`
  ${ManropeBoldGeyser109px}
  width: 43px;
  min-height: 15px;
  align-self: flex-end;
  margin-top: 16px;
  letter-spacing: 0;
`;

const FlexRow1 = styled.div`
  margin-top: 9px;
  margin-left: 4.65px;
  display: flex;
  align-items: flex-start;
  min-width: 161px;
`;

const Price1 = styled.div`
  ${MontserratBoldGeyser185px}
  width: 40px;
  min-height: 24px;
  letter-spacing: 0;
`;

const OverlapGroup12 = styled.div`
  height: 24px;
  margin-left: 24px;
  display: flex;
  padding: 3px 13px;
  align-items: flex-start;
  min-width: 97px;
  background-color: var(--botticelli-22);
  border-radius: 18.12px;
`;

const View = styled.div`
  ${ValignTextMiddle}
  ${ManropeBoldBlueCharcoal145px}
            width: 71px;
  height: 18px;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup9 = styled.div`
  position: absolute;
  height: 170px;
  top: 1285px;
  left: 1882px;
  display: flex;
  align-items: center;
  min-width: 414px;
  background-color: var(--ui-dark);
  border-radius: 20px;
  box-shadow: 0px 4px 25px #00000040;
`;

const FlexCol5 = styled.div`
  width: 184px;
  margin-left: 6px;
  margin-bottom: 3.54px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 142px;
`;

const SpaceShuttleWithLaunchPad = styled.div`
  ${MontserratBoldGeyser185px}
  width: 179px;
  min-height: 24px;
  margin-left: 4.65px;
  letter-spacing: 0;
`;

const FlexRow2 = styled.div`
  margin-top: 25px;
  margin-left: 4.65px;
  display: flex;
  align-items: center;
  min-width: 109px;
`;

const Name2 = styled.div`
  ${ValignTextMiddle}
  ${ManropeBoldGeyser127px}
            width: 89px;
  height: 24px;
  letter-spacing: 0;
`;

const VerifiedBadge2 = styled.img`
  width: 14px;
  height: 14px;
  margin-left: 6px;
  margin-bottom: 1.03px;
`;

const FlexRow3 = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  min-width: 175px;
`;

const StarContainer2 = styled.div`
  width: 126px;
  height: 31px;
  position: relative;
`;

const IconStar7 = styled.img`
  position: absolute;
  width: 32px;
  height: 31px;
  top: 0;
  left: 79px;
`;

const Star52 = styled.img`
  position: absolute;
  width: 21px;
  height: 31px;
  top: 0;
  left: 105px;
`;

const Text3 = styled.div`
  ${ManropeBoldGeyser109px}
  width: 43px;
  min-height: 15px;
  margin-left: 6px;
  margin-bottom: 6.49px;
  letter-spacing: 0;
`;

const Price2 = styled.div`
  ${MontserratBoldGeyser185px}
  width: 49px;
  min-height: 24px;
  letter-spacing: 0;
`;

const OverlapGroup13 = styled.div`
  height: 24px;
  margin-left: 15px;
  display: flex;
  padding: 3px 13px;
  align-items: flex-start;
  min-width: 97px;
  background-color: var(--botticelli-22);
  border-radius: 18.12px;
`;

const OverlapGroup10 = styled.div`
  position: absolute;
  height: 170px;
  top: 1511px;
  left: 1882px;
  display: flex;
  align-items: center;
  min-width: 414px;
  background-color: var(--ui-dark);
  border-radius: 20px;
  box-shadow: 0px 4px 25px #00000040;
`;

const FlexCol6 = styled.div`
  width: 175px;
  margin-left: 6px;
  margin-bottom: 3.54px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 142px;
`;

const RocketEngines = styled.div`
  ${MontserratBoldGeyser185px}
  width: 170px;
  min-height: 24px;
  margin-left: 4.65px;
  letter-spacing: 0;
`;

const FlexRow4 = styled.div`
  margin-top: 5px;
  margin-left: 4.65px;
  display: flex;
  align-items: center;
  min-width: 109px;
`;

const FlexRow5 = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  min-width: 158px;
`;

const IconStarContainer = styled.div`
  width: 111px;
  height: 31px;
  position: relative;
`;

const Text4 = styled.div`
  ${ManropeBoldGeyser109px}
  width: 43px;
  min-height: 15px;
  margin-left: 5px;
  margin-bottom: 5.92px;
  letter-spacing: 0;
`;

const FlexRow6 = styled.div`
  margin-top: 19px;
  margin-left: 4.65px;
  display: flex;
  align-items: flex-start;
  min-width: 161px;
`;

export default AssetDetailView;
