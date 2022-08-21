import React from "react";
import styled from "styled-components";


function Group5(props) {
  const { src } = props;

  return (
    <Group51>
      <Image1 src={src} />
    </Group51>
  );
}

const Group51 = styled.div`
  position: absolute;
  height: 630px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 446px;
  background-color: var(--ui-dark);
  border-radius: 16.33px;
  color: white;
`;

const Image1 = styled.img`
  width: 446px;
  height: 343px;
  object-fit: cover;
`;

export default Group5;
