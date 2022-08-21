import React from "react";
import styled from "styled-components";
import {
  Border1pxUiText,
  MontserratNormalGeyser16px,
  MontserratMediumGeyser14px,
  ValignTextMiddle,
} from "../../styledMixins";


function Header() {
  return (
    <Header1>
      <Navbar>
        <Header2>
          <Group28 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63012919bc585b7a4af06a36/img/group-28@2x.svg" />
        </Header2>
        <ProfilePhoto src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63020a52db74deeef949820c/img/profile-photo@2x.png" />
        <NavbarLinkDiscover>Discover</NavbarLinkDiscover>
        <NavbarLinkCommunity>Community</NavbarLinkCommunity>
        <NavbarLinkStats>Stats</NavbarLinkStats>
        <NavbarLinkAboutUs>About us</NavbarLinkAboutUs>
        <SignUp></SignUp>
        <Group68>
          <Close src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63020a52db74deeef949820c/img/close-1@2x.svg" />
          <AddAsset>Add Asset</AddAsset>
        </Group68>
        <IconSearch src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63020a52db74deeef949820c/img/union-2@2x.svg" />
      </Navbar>
    </Header1>
  );
}

const Header1 = styled.div`
  position: absolute;
  width: 1728px;
  height: 92px;
  top: 1325px;
  left: 1447px;
  display: flex;
  align-items: flex-start;
  background-color: var(--white);
`;

const Navbar = styled.div`
  ${MontserratNormalGeyser16px}
  width: 1728px;
  height: 92px;
  position: relative;
`;

const Header2 = styled.div`
  position: absolute;
  height: 92px;
  top: 0;
  left: 0;
  display: flex;
  padding: 31.9px 46px;
  align-items: flex-end;
  min-width: 1728px;
  background-color: var(--cod-gray);
  box-shadow: 0px 4px 25px #00000040;
`;

const Group28 = styled.img`
  width: 170px;
  height: 28px;
`;

const ProfilePhoto = styled.img`
  position: absolute;
  width: 55px;
  height: 55px;
  top: 19px;
  left: 1609px;
  object-fit: cover;
`;

const NavbarLinkDiscover = styled.div`
  position: absolute;
  width: 75px;
  top: 35px;
  left: 279px;
  text-align: center;
  letter-spacing: 0;
`;

const NavbarLinkCommunity = styled.div`
  position: absolute;
  width: 102px;
  top: 35px;
  left: 384px;
  text-align: center;
  letter-spacing: 0;
`;

const NavbarLinkStats = styled.div`
  position: absolute;
  width: 44px;
  top: 35px;
  left: 516px;
  text-align: center;
  letter-spacing: 0;
`;

const NavbarLinkAboutUs = styled.div`
  position: absolute;
  width: 78px;
  top: 35px;
  left: 590px;
  text-align: center;
  letter-spacing: 0;
`;

const SignUp = styled.div`
  ${Border1pxUiText}
  position: absolute;
  width: 159px;
  height: 39px;
  top: 26px;
  left: 1414px;
  border-radius: 40px;
`;

const Group68 = styled.div`
  position: absolute;
  height: 14px;
  top: 39px;
  left: 1447px;
  display: flex;
  align-items: flex-start;
  min-width: 97px;
`;

const Close = styled.img`
  width: 15px;
  height: 15px;
  margin-left: -1px;
  margin-top: -0.27px;
`;

const AddAsset = styled.div`
  ${ValignTextMiddle}
  ${MontserratMediumGeyser14px}
            width: 72px;
  height: 14px;
  margin-left: 10px;
  text-align: center;
  letter-spacing: 0;
`;

const IconSearch = styled.img`
  position: absolute;
  width: 26px;
  height: 29px;
  top: 31px;
  left: 1342px;
`;

export default Header;
