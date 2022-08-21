import React from "react";
import Group59 from "../Group59";
import styled from "styled-components";
import "./ExploreScreenNotConnected.css";

function ExploreScreenNotConnected(props) {
  const {
    ellipse3,
    ellipse5,
    ellipse4,
    ellipse6,
    forYou,
    latest,
    trending,
    header,
    vector3,
    footer,
    group591Props,
    group592Props,
    group593Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="explore-screen-not-connected screen">
        <OverlapGroup8>
          <Ellipse3 src={ellipse3} />
          <Ellipse5 src={ellipse5} />
          <Ellipse4 src={ellipse4} />
          <Ellipse6 src={ellipse6} />
          <ForYou src={forYou} />
          <Latest src={latest} />
          <Trending src={trending} />
          <Header src={header} />
          <Vector3 src={vector3} />
          <Line8 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63018495b99a625a2af31884/img/line-8@2x.svg" />
          <Group59
            assetCard1Props={group591Props.assetCard1Props}
            assetCard2Props={group591Props.assetCard2Props}
            assetCard3Props={group591Props.assetCard3Props}
          />
          <Group59
            className={group592Props.className}
            assetCard1Props={group592Props.assetCard1Props}
            assetCard2Props={group592Props.assetCard2Props}
            assetCard3Props={group592Props.assetCard3Props}
          />
          <Group59
            className={group593Props.className}
            assetCard1Props={group593Props.assetCard1Props}
            assetCard2Props={group593Props.assetCard2Props}
            assetCard3Props={group593Props.assetCard3Props}
          />
        </OverlapGroup8>
        <Footer src={footer} />
      </div>
    </div>
  );
}

const OverlapGroup8 = styled.div`
  width: 1728px;
  height: 2665px;
  position: relative;
`;

const Ellipse3 = styled.img`
  position: absolute;
  width: 612px;
  height: 1471px;
  top: 726px;
  left: 1116px;
`;

const Ellipse5 = styled.img`
  position: absolute;
  width: 1006px;
  height: 1072px;
  top: 1593px;
  left: 0;
`;

const Ellipse4 = styled.img`
  position: absolute;
  width: 421px;
  height: 1471px;
  top: 178px;
  left: 0;
`;

const Ellipse6 = styled.img`
  position: absolute;
  width: 1146px;
  height: 455px;
  top: 0;
  left: 582px;
`;

const ForYou = styled.img`
  position: absolute;
  width: 138px;
  height: 36px;
  top: 168px;
  left: 539px;
`;

const Latest = styled.img`
  position: absolute;
  width: 115px;
  height: 28px;
  top: 168px;
  left: 793px;
`;

const Trending = styled.img`
  position: absolute;
  width: 175px;
  height: 38px;
  top: 166px;
  left: 1015px;
`;

const Header = styled.img`
  position: absolute;
  width: 1728px;
  height: 121px;
  top: 0;
  left: 0;
`;

const Vector3 = styled.img`
  position: absolute;
  width: 18px;
  height: 27px;
  top: 2025px;
  left: 1542px;
`;

const Line8 = styled.img`
  position: absolute;
  width: 149px;
  height: 2px;
  top: 216px;
  left: 534px;
`;

const Footer = styled.img`
  width: 1728px;
  height: 345px;
  margin-top: 7px;
`;

export default ExploreScreenNotConnected;
