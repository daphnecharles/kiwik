import React from "react";
import styled from "styled-components";


function BackgroundElipses(props) {
  const { ellipse31, ellipse5, ellipse4, ellipse6, ellipse32 } = props;

  return (
    <BackgroundElipses1>
      <Ellipse10></Ellipse10>
      <EllipseContainer>
        <Ellipse3 src={ellipse31} />
        <Ellipse5 src={ellipse5} />
        <Ellipse4 src={ellipse4} />
        <Ellipse6 src={ellipse6} />
        <Ellipse31 src={ellipse32} />
        <Ellipse9></Ellipse9>
      </EllipseContainer>
    </BackgroundElipses1>
  );
}

const BackgroundElipses1 = styled.div`
  position: absolute;
  width: 3476px;
  top: 538px;
  left: 795px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 3850px;
  transform: rotate(119.66deg);
`;

const Ellipse10 = styled.div`
  width: 2077px;
  height: 1034px;
  margin-top: -721px;
  align-self: center;
  margin-right: 113.85px;
  border-radius: 1038.45px/517px;
  transform: rotate(-282.05deg);
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgb(0, 132.599995136261, 255) 0%,
    rgb(0, 12.000000234693289, 18.000000827014446) 100%
  );
`;

const EllipseContainer = styled.div`
  width: 4667px;
  height: 3064px;
  position: relative;
  margin-top: 55px;
  margin-left: -1527.84px;
`;

const Ellipse3 = styled.img`
  position: absolute;
  width: 1231px;
  height: 1342px;
  top: 1150px;
  left: 2514px;
  transform: rotate(-119.66deg);
`;

const Ellipse5 = styled.img`
  position: absolute;
  width: 1094px;
  height: 270px;
  top: 2387px;
  left: 2114px;
  transform: rotate(-119.66deg);
`;

const Ellipse4 = styled.img`
  position: absolute;
  width: 545px;
  height: 797px;
  top: 1203px;
  left: 2168px;
  transform: rotate(-119.66deg);
`;

const Ellipse6 = styled.img`
  position: absolute;
  width: 236px;
  height: 1092px;
  top: 245px;
  left: 3433px;
  transform: rotate(-119.66deg);
`;

const Ellipse31 = styled.img`
  position: absolute;
  width: 413px;
  height: 1466px;
  top: 1459px;
  left: 3721px;
  transform: rotate(-119.66deg);
`;

const Ellipse9 = styled.div`
  position: absolute;
  width: 2077px;
  height: 1034px;
  top: 504px;
  left: 108px;
  border-radius: 1038.45px/517px;
  transform: rotate(35.17deg);
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgb(0, 132.599995136261, 255) 0%,
    rgb(0, 12.000000234693289, 18.000000827014446) 100%
  );
`;

export default BackgroundElipses;
