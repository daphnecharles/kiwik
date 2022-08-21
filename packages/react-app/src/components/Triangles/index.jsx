import React from "react";
import styled from "styled-components";
import { ManropeMediumGeyser24px, ValignTextMiddle } from "../../styledMixins";


function Triangles() {
  return (
    <Triangles1>
      <Polygon6 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63015950b041066102c5131e/img/polygon-6@2x.svg" />
      <Triangles999k>
        <span>
          <span className="manrope-medium-geyser-24px">Triangles: </span>
          <span className="manrope-semi-bold-geyser-24px">99.9k</span>
        </span>
      </Triangles999k>
    </Triangles1>
  );
}

const Triangles1 = styled.div`
  position: absolute;
  height: 28px;
  top: 220px;
  left: 14px;
  display: flex;
  padding: 0 0.3px;
  align-items: center;
  min-width: 212px;
`;

const Polygon6 = styled.img`
  width: 16px;
  height: 19px;
  margin-top: 2.76px;
`;

const Triangles999k = styled.div`
  ${ValignTextMiddle}
  ${ManropeMediumGeyser24px}
            width: 185px;
  height: 28px;
  margin-left: 9px;
  letter-spacing: 0;
`;

export default Triangles;
