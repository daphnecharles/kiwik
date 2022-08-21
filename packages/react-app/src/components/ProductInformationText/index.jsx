import React from "react";
import styled from "styled-components";
import {
  ManropeLightGeyser24px,
  ManropeBoldGeyser30px,
  ManropeLightCornflower24px,
  ManropeMediumGeyser24px,
} from "../../styledMixins";


function ProductInformationText() {
  return (
    <ProductInformationText1>
      <Line1 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63015950b041066102c5131e/img/line-1@1x.svg" />
      <FlexRow>
        <ProductInformation>Product Information</ProductInformation>
        <Union src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63015950b041066102c5131e/img/union-1@2x.svg" />
      </FlexRow>
      <LicenseAgreementContainer>
        <LicenseAgreement>License Agreement</LicenseAgreement>
        <LicenseAgreement1>License Agreement</LicenseAgreement1>
      </LicenseAgreementContainer>
      <FlexRow1>
        <LicenseAgreement>License Type</LicenseAgreement>
        <ExtensionAsset>Extension Asset</ExtensionAsset>
      </FlexRow1>
      <FlexRow1>
        <LicenseAgreement>File Size</LicenseAgreement>
        <ExtensionAsset>201.8 KB</ExtensionAsset>
      </FlexRow1>
      <FlexRow1>
        <LicenseAgreement>Latest version</LicenseAgreement>
        <ExtensionAsset>3.4.22</ExtensionAsset>
      </FlexRow1>
      <FlexRow1>
        <LicenseAgreement>Latest release date</LicenseAgreement>
        <ExtensionAsset>April 17. 2022</ExtensionAsset>
      </FlexRow1>
      <FlexRow2>
        <LicenseAgreement>Support</LicenseAgreement>
        <LicenseAgreement1>Visit site</LicenseAgreement1>
      </FlexRow2>
    </ProductInformationText1>
  );
}

const ProductInformationText1 = styled.div`
  position: absolute;
  width: 806px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 574px;
`;

const Line1 = styled.img`
  width: 780px;
  height: 124px;
`;

const FlexRow = styled.div`
  height: 39px;
  margin-top: 25px;
  margin-left: 14px;
  display: flex;
  align-items: flex-start;
  min-width: 701px;
`;

const ProductInformation = styled.div`
  ${ManropeBoldGeyser30px}
  width: 344px;
  min-height: 39px;
  letter-spacing: 0;
`;

const Union = styled.img`
  width: 36px;
  height: 21px;
  margin-left: 321px;
`;

const LicenseAgreementContainer = styled.div`
  height: 28px;
  margin-top: 96px;
  margin-left: 14px;
  display: flex;
  align-items: flex-start;
  min-width: 742px;
`;

const LicenseAgreement = styled.div`
  ${ManropeMediumGeyser24px}
  width: 344px;
  min-height: 28px;
  letter-spacing: 0;
`;

const LicenseAgreement1 = styled.div`
  ${ManropeLightCornflower24px}
  width: 344px;
  min-height: 28px;
  margin-left: 54px;
  text-align: right;
  letter-spacing: 0;
  text-decoration: underline;
`;

const FlexRow1 = styled.div`
  height: 28px;
  margin-top: 26px;
  margin-left: 14px;
  display: flex;
  align-items: flex-start;
  min-width: 742px;
`;

const ExtensionAsset = styled.div`
  ${ManropeLightGeyser24px}
  width: 344px;
  min-height: 28px;
  margin-left: 54px;
  text-align: right;
  letter-spacing: 0;
`;

const FlexRow2 = styled.div`
  height: 28px;
  margin-top: 18px;
  margin-left: 14px;
  display: flex;
  align-items: flex-start;
  min-width: 742px;
`;

export default ProductInformationText;
