import React from "react";
import AssetCard from "../AssetCard";
import styled from "styled-components";


function Group59(props) {
  const { className, assetCard1Props, assetCard2Props, assetCard3Props } = props;

  return (
    <Group591 className={`group-59 ${className || ""}`}>
      <AssetCard cartoonRocket={assetCard1Props.cartoonRocket} group5Props={assetCard1Props.group5Props} />
      <AssetCard
        cartoonRocket={assetCard2Props.cartoonRocket}
        className={assetCard2Props.className}
        group5Props={assetCard2Props.group5Props}
      />
      <AssetCard
        cartoonRocket={assetCard3Props.cartoonRocket}
        className={assetCard3Props.className}
        group5Props={assetCard3Props.group5Props}
      />
    </Group591>
  );
}

const Group591 = styled.div`
  position: absolute;
  height: 630px;
  top: 344px;
  left: 112px;
  display: flex;
  align-items: flex-start;
  min-width: 1504px;

  &.group-59.group-61 {
    top: 1100px;
  }

  &.group-59.group-63 {
    top: 1858px;
  }
`;

export default Group59;
