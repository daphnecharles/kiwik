import React from "react";
import styled from "styled-components";
import { ManropeMediumGeyser24px, ValignTextMiddle } from "../../styledMixins";


function Vertices() {
  return (
    <Vertices1>
      <Union src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63015950b041066102c5131e/img/union-2@2x.svg" />
      <Vertices555k>
        <span>
          <span className="manrope-medium-geyser-24px">Vertices: </span>
          <span className="manrope-semi-bold-geyser-24px">55.5k</span>
        </span>
      </Vertices555k>
    </Vertices1>
  );
}

const Vertices1 = styled.div`
  position: absolute;
  height: 28px;
  top: 220px;
  left: 251px;
  display: flex;
  align-items: center;
  min-width: 201px;
`;

const Union = styled.img`
  width: 18px;
  height: 20px;
  margin-bottom: 0.39px;
`;

const Vertices555k = styled.div`
  ${ValignTextMiddle}
  ${ManropeMediumGeyser24px}
            width: 176px;
  height: 28px;
  margin-left: 5px;
  letter-spacing: 0;
`;

export default Vertices;
