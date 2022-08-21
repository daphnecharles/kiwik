import React from "react";
import BackgroundElipses from "../BackgroundElipses";
import CheckoutModalBuyWithCC from "../CheckoutModalBuyWithCC";
import Header from "../Header";
import styled from "styled-components";
import "./CheckoutPagePayLater.css";

function CheckoutPagePayLater(props) {
  const { backgroundElipsesProps, checkoutModalBuyWithCCProps, signer, mainnetProvider, localProvider, web3Modal } = props;

  const newcheckoutModalBuyWithCCProps = {...checkoutModalBuyWithCCProps, signer, mainnetProvider, localProvider, web3Modal}

  return (
    <div className="container-center-horizontal">
      <div className="checkout-page-pay-later screen">
        <OverlapGroup10>
          <BackgroundElipses
            ellipse31={backgroundElipsesProps.ellipse31}
            ellipse5={backgroundElipsesProps.ellipse5}
            ellipse4={backgroundElipsesProps.ellipse4}
            ellipse6={backgroundElipsesProps.ellipse6}
            ellipse32={backgroundElipsesProps.ellipse32}
          />
          <CheckoutModalBuyWithCC {...newcheckoutModalBuyWithCCProps} />
          <Header />
        </OverlapGroup10>
      </div>
    </div>
  );
}

const OverlapGroup10 = styled.div`
  width: 5066px;
  height: 4926px;
  position: relative;
  margin-left: -1447px;
  margin-top: -1324.69px;
`;

export default CheckoutPagePayLater;
