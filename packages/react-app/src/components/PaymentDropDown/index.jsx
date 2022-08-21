import React from "react";
import styled from "styled-components";
import { MontserratLightBotticelli12px, Border05pxNileBlue } from "../../styledMixins";


function PaymentDropDown(props) {
  const { buyNowPayLater } = props;

  return (
    <PaymentDropDown1>
      <ChoosePaymentMethod>Choose Payment Method</ChoosePaymentMethod>
      <OverlapGroup1>
        <BuyNowPayLater>{buyNowPayLater}</BuyNowPayLater>
        <Union src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63020a52db74deeef949820c/img/union-1@2x.svg" />
      </OverlapGroup1>
    </PaymentDropDown1>
  );
}

const PaymentDropDown1 = styled.div`
  position: absolute;
  width: 340px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 55px;
`;

const ChoosePaymentMethod = styled.div`
  ${MontserratLightBotticelli12px}
  width: 182px;
  min-height: 14px;
  margin-left: 6px;
  letter-spacing: 0;
`;

const OverlapGroup1 = styled.div`
  ${Border05pxNileBlue}
  height: 37px;
  margin-top: 4px;
  display: flex;
  padding: 0 18.5px;
  justify-content: flex-end;
  align-items: center;
  min-width: 336px;
  background-color: var(--blue-charcoal);
  border-radius: 10px;
`;

const BuyNowPayLater = styled.div`
  ${MontserratLightBotticelli12px}
  width: 121px;
  min-height: 14px;
  letter-spacing: 0;
`;

const Union = styled.img`
  width: 14px;
  height: 8px;
  margin-left: 145px;
  margin-top: 0.17px;
`;

export default PaymentDropDown;
