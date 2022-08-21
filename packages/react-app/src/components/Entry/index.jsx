import React from "react";
import styled from "styled-components";
import { MontserratLightBotticelli152px, Border06pxNileBlue } from "../../styledMixins";


function Entry(props) {
  const { username, name, className, setUserHandle, setProfileURI } = props;

  return (
    <Entry1 className={`entry ${className || ""}`}>
      <Username className="username">{username}</Username>
      {setUserHandle ? 
      (
        <OverlapGroup className="overlap-group" onChange={e => {
          setUserHandle(e.target.value);
        }}>
  </OverlapGroup>
      ) :
      <OverlapGroup className="overlap-group" onChange={e => {
        setProfileURI(e.target.value);
      }}>
</OverlapGroup>
      }
      
    </Entry1>
  );
}

const Entry1 = styled.div`
  ${MontserratLightBotticelli152px}
  width: 430px;
  margin-top: 49px;
  display: flex;
  flex-direction: column;
  padding: 0 0px;
  align-items: flex-start;
  min-height: 70px;

  &.entry.entry-1 {
    margin-top: 41px;
    margin-bottom: 30px;
  }
`;

const Username = styled.div`
  width: 155px;
  min-height: 18px;
  margin-left: 7.6px;
  letter-spacing: 0;
`;

const OverlapGroup = styled.input`
  ${Border06pxNileBlue}
  height: 47px;
  margin-top: 5px;
  display: flex;
  padding: 13.3px 18.4px;
  align-items: flex-start;
  min-width: 426px;
  background-color: var(--blue-charcoal);
  border-radius: 12.67px;
`;

const Name = styled.div`
  width: 114px;
  min-height: 18px;
  letter-spacing: 0;
`;

const Wwwmylensxyz = styled.div`
  .entry.entry-1 & {
    width: 153px;
  }
`;

export default Entry;
