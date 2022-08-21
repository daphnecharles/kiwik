import React from "react";
import { Link } from "react-router-dom";
import PaymentDropDown from "../PaymentDropDown";
import Group53 from "../Group53";
import styled from "styled-components";
import {
  ManropeSemiBoldGeyser24px,
  ManropeSemiBoldGeyser16px,
  MontserratMediumBlack14px,
  Border1pxBlueDianne,
  MontserratLightGeyser30px,
  ManropeBoldGeyser20px,
  Border05pxNileBlue,
  ManropeSemiBoldGeyser18px,
  MontserratLightBotticelli12px,
  ManropeBoldGeyser12px,
  ValignTextMiddle,
} from "../../styledMixins";
import { Framework } from "@superfluid-finance/sdk-core";
import { ethers , ContractFactory} from "ethers";
import { abi, bytecode } from "../../helpers/NftMinter";

function CheckoutModalBuyWithCC(props) {
  const {
    checkout,
    orderSummary,
    image11,
    cartoonRockets1,
    byShannonCase1,
    price1,
    image12,
    cartoonRockets2,
    byShannonCase2,
    price2,
    image13,
    cartoonRockets3,
    byShannonCase3,
    price3,
    paymentDetails,
    completeYourPurcha,
    emailAddress,
    shannonACaseGmailCom,
    payIn4,
    payOver6Weeks,
    price4,
    price5,
    price6,
    price7,
    today,
    week2,
    week4,
    week6,
    buyNowPayIn4PaymentsNoInterest,
    howItWorks,
    xcontinue,
    paymentDropDownProps,
    signer,
    mainnetProvider,
    localProvider,
    web3Modal
  } = props;

  return (
    <CheckoutModalBuyWithCC1>
      <FlexRow>
        <Checkout>{checkout}</Checkout>
        <Link to="/detail">
          <IconClose src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63015950b041066102c5131e/img/close@2x.svg" />
        </Link>
      </FlexRow>
      <Line1 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/630173e945395e6f680facca/img/line-1@1x.svg" />
      <FlexRow1>
        <FlexCol>
          <Title>{orderSummary}</Title>
          <OverlapGroupContainer>
            <OverlapGroup4>
              <Image1 src={image11} />
              <FlexCol1>
                <CartoonRockets>{cartoonRockets1}</CartoonRockets>
                <ByShannonCase>{byShannonCase1}</ByShannonCase>
                <Price>{price1}</Price>
              </FlexCol1>
            </OverlapGroup4>
            <OverlapGroup5>
              <Image1 src={image12} />
              <FlexCol1>
                <CartoonRockets>{cartoonRockets2}</CartoonRockets>
                <ByShannonCase>{byShannonCase2}</ByShannonCase>
                <Price>{price2}</Price>
              </FlexCol1>
            </OverlapGroup5>
            <OverlapGroup5>
              <Image1 src={image13} />
              <FlexCol1>
                <CartoonRockets>{cartoonRockets3}</CartoonRockets>
                <ByShannonCase>{byShannonCase3}</ByShannonCase>
                <Price>{price3}</Price>
              </FlexCol1>
            </OverlapGroup5>
          </OverlapGroupContainer>
        </FlexCol>
        <FlexCol2>
          <Group50>
            <PaymentDetails>{paymentDetails}</PaymentDetails>
            <CompleteYourPurcha>{completeYourPurcha}</CompleteYourPurcha>
            <OverlapGroup2>
              <Email>
                <EmailAddress>{emailAddress}</EmailAddress>
                <OverlapGroup>
                  <Shannonacasegmailcom>{shannonACaseGmailCom}</Shannonacasegmailcom>
                </OverlapGroup>
              </Email>
              <Union src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/630173e945395e6f680facca/img/union-6@2x.svg" />
            </OverlapGroup2>
            <OverlapGroup3>
              <PaymentDropDown buyNowPayLater={paymentDropDownProps.buyNowPayLater} />
              <Group53 />
            </OverlapGroup3>
          </Group50>
          <PayIn4>
            <PayIn41>{payIn4}</PayIn41>
            <OverlapGroup7>
              <PayOver6Weeks>{payOver6Weeks}</PayOver6Weeks>
              <OverlapGroup1>
                <Line7 src="https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63020a52db74deeef949820c/img/line-7@2x.svg" />
                <Ellipse14></Ellipse14>
                <Ellipse15></Ellipse15>
                <Ellipse16></Ellipse16>
                <Ellipse17></Ellipse17>
              </OverlapGroup1>
              <PriceContainer>
                <Price1>{price4}</Price1>
                <Price2>{price5}</Price2>
                <Price2>{price6}</Price2>
                <Price2>{price7}</Price2>
              </PriceContainer>
              <FlexRow2>
                <Today>{today}</Today>
                <Week2>{week2}</Week2>
                <Week2>{week4}</Week2>
                <Week2>{week6}</Week2>
              </FlexRow2>
              <BuyNowPayIn4PaymentsNoInterest>{buyNowPayIn4PaymentsNoInterest}</BuyNowPayIn4PaymentsNoInterest>
              <HowItWorks>{howItWorks}</HowItWorks>
            </OverlapGroup7>
          </PayIn4>
          <Link
             onClick={async () => {
               createNewFlow(signer, localProvider, "", 25);
            }}
            >
            <OverlapGroup6>
              <Continue>Mint NFT</Continue>
            </OverlapGroup6>
          </Link>
        </FlexCol2>
      </FlexRow1>
    </CheckoutModalBuyWithCC1>
  );
}

const NETWORK_NAME = "mumbai";
const SUPER_TOKEN_NAME = "MATICx";
const CHAIN_ID = 80001;

async function createNewFlow(userSigner, provider, recipient, flowRate) {
  const senderAddress =  await userSigner.getAddress();
  const recipientV2 = "0xA6CE7eB08A19Ed0331410b45866E7F71D9BB1f0b";

  const sf = await Framework.create({
    chainId: CHAIN_ID,
    networkName: NETWORK_NAME,
    provider: await provider
  });

  const signer = sf.createSigner({ signer: userSigner });
  const tokenxContract = await sf.loadSuperToken(SUPER_TOKEN_NAME);
  const flowRateSecond = calculateFlowRate(flowRate);

  console.log(flowRateSecond);

  const createFlowOperation = tokenxContract.createFlow({
      sender: senderAddress,
      receiver: recipientV2,
      flowRate: flowRateSecond,
      overrides: {
        gasLimit: "1000000",
      },
  });

// console.log(flowRate);

const result = await createFlowOperation.exec(signer);
console.log(
    `Congrats - you've just successfully executed a batch call!
    You have completed 2 operations in a single tx 🤯
    View the tx here:  https://polygonscan.com/tx/${result.hash}
    View Your Stream At: https://app.superfluid.finance/dashboard/${recipientV2}
    Network: ${NETWORK_NAME}
    Super Token: ${SUPER_TOKEN_NAME}
    Sender: ${senderAddress}
    Receiver: ${recipientV2},
    FlowRate: ${flowRate}/month
    `
  );

  mintNFT(userSigner, provider);
}

function calculateFlowRate(amountInDollars) {
  if (typeof Number(amountInDollars) !== "number" || isNaN(Number(amountInDollars)) === true) {
      alert("You can only calculate a flowRate based on a number");
      return;
  } else if (typeof Number(amountInDollars) === "number") {
      if (Number(amountInDollars) === 0) {
      return 0;
      }
      const monthlyAmount = ethers.utils.parseEther(amountInDollars.toString());
      const calculatedFlowRate = Math.floor(monthlyAmount / 3600 / 24 / 30);
      return calculatedFlowRate;
  }
}

async function mintNFT(userSigner, localProvider) {
  // Variables
  const name = "Example NFT"
  const uri = "bafybeicqgpqwpf3kdpngkzc5modcswibvmxetwz6ttmf7cvgroipewpsbu"
  // const weiValue = ethers.BigNumber.ƒfrom('100000000')
  const cost = 1000000 // ethers.utils.formatEther(weiValue)
  const maxMintAmount = 0
  const mintCapped = false
  
  // Read the contract artifact, which was generated by Remix
  const nftContractFactory = new ContractFactory(abi, bytecode, userSigner)
  // const nftContractFactory = new ContractFactory("NftShop")

  // Set gas limit and gas price, using the provider
  const price = ethers.utils.formatUnits(await localProvider.getGasPrice(), 'gwei')
  const options = {
    gasLimit: 100000,
    gasPrice: ethers.utils.parseUnits(price, 'gwei'),
  }
 
 console.log({name, uri, cost, maxMintAmount, mintCapped ,options})
  const contract = await nftContractFactory.deploy(name, uri, "00000000001", maxMintAmount, mintCapped, options )
  await contract.deployed()
  console.log(`Deployment successful! Contract Address: ${contract.address}`)
}

const CheckoutModalBuyWithCC1 = styled.div`
  position: absolute;
  width: 996px;
  height: 856px;
  top: 1482px;
  left: 1812px;
  display: flex;
  flex-direction: column;
  padding: 34px 0;
  align-items: center;
  background-color: var(--ui-dark);
  border-radius: 20px;
  overflow: hidden;
`;

const FlexRow = styled.div`
  height: 35px;
  margin-left: 5.04px;
  display: flex;
  align-items: flex-start;
  min-width: 915px;
`;

const Checkout = styled.div`
  ${ManropeSemiBoldGeyser24px}
  min-height: 33px;
  align-self: flex-end;
  min-width: 113px;
  text-align: center;
  letter-spacing: 0;
`;

const IconClose = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 782px;
`;

const Line1 = styled.img`
  width: 910px;
  height: 1px;
  margin-top: 42px;
`;

const FlexRow1 = styled.div`
  height: 643px;
  align-self: flex-end;
  margin-top: 46px;
  margin-right: -51px;
  display: flex;
  align-items: flex-start;
  min-width: 1024px;
`;

const FlexCol = styled.div`
  width: 488px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 643px;
`;

const Title = styled.h1`
  ${ValignTextMiddle}
  ${MontserratLightGeyser30px}
            width: 468px;
  height: 39px;
  align-self: flex-end;
  letter-spacing: 0;
`;

const OverlapGroupContainer = styled.div`
  width: 468px;
  margin-top: 17px;
  display: flex;
  flex-direction: column;
  padding: 22px 0;
  align-items: center;
  min-height: 587px;
  background-color: var(--woodsmoke);
  border-radius: 20px;
`;

const OverlapGroup4 = styled.div`
  ${Border1pxBlueDianne}
  height: 157px;
  display: flex;
  padding: 19px 29px;
  align-items: flex-start;
  min-width: 428px;
  background-color: var(--blue-charcoal);
  border-radius: 20px;
`;

const Image1 = styled.img`
  width: 172px;
  height: 111px;
  object-fit: cover;
`;

const FlexCol1 = styled.div`
  width: 165px;
  align-self: center;
  margin-left: 19px;
  margin-bottom: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 106px;
`;

const CartoonRockets = styled.div`
  ${ManropeSemiBoldGeyser18px}
  min-height: 25px;
  min-width: 145px;
  text-align: center;
  letter-spacing: 0;
`;

const ByShannonCase = styled.div`
  ${ManropeBoldGeyser12px}
  width: 162px;
  min-height: 27px;
  margin-top: 7px;
  margin-left: 3px;
  letter-spacing: 0;
`;

const Price = styled.div`
  ${ManropeBoldGeyser20px}
  width: 162px;
  min-height: 27px;
  margin-top: 20px;
  margin-left: 3px;
  letter-spacing: 0;
`;

const OverlapGroup5 = styled.div`
  ${Border1pxBlueDianne}
  height: 157px;
  margin-top: 32px;
  display: flex;
  padding: 19px 29px;
  align-items: flex-start;
  min-width: 428px;
  background-color: var(--blue-charcoal);
  border-radius: 20px;
`;

const FlexCol2 = styled.div`
  width: 472px;
  margin-left: 64px;
  margin-top: 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 625px;
`;

const Group50 = styled.div`
  width: 472px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 255px;
`;

const PaymentDetails = styled.div`
  ${ValignTextMiddle}
  ${MontserratLightGeyser30px}
            width: 468px;
  height: 39px;
  letter-spacing: 0;
`;

const CompleteYourPurcha = styled.p`
  ${ManropeSemiBoldGeyser16px}
  width: 345px;
  min-height: 44px;
  margin-top: 8px;
  letter-spacing: 0;
`;

const OverlapGroup2 = styled.div`
  width: 340px;
  height: 55px;
  position: relative;
  margin-top: 28px;
`;

const Email = styled.div`
  position: absolute;
  width: 340px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 55px;
`;

const EmailAddress = styled.div`
  ${MontserratLightBotticelli12px}
  width: 122px;
  min-height: 14px;
  margin-left: 6px;
  letter-spacing: 0;
`;

const OverlapGroup = styled.div`
  ${Border05pxNileBlue}
  height: 37px;
  margin-top: 4px;
  display: flex;
  padding: 0 37.5px;
  align-items: center;
  min-width: 336px;
  background-color: var(--blue-charcoal);
  border-radius: 10px;
`;

const Shannonacasegmailcom = styled.div`
  ${MontserratLightBotticelli12px}
  width: 225px;
  min-height: 14px;
  letter-spacing: 0;
`;

const Union = styled.img`
  position: absolute;
  width: 12px;
  height: 13px;
  top: 31px;
  left: 15px;
`;

const OverlapGroup3 = styled.div`
  width: 340px;
  height: 55px;
  position: relative;
  margin-top: 26px;
`;

const PayIn4 = styled.div`
  width: 360px;
  margin-top: 26px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 224px;
`;

const PayIn41 = styled.div`
  ${MontserratLightBotticelli12px}
  width: 182px;
  min-height: 14px;
  margin-left: 6px;
  letter-spacing: 0;
`;

const OverlapGroup7 = styled.div`
  ${Border05pxNileBlue}
  width: 336px;
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  padding: 12.5px 14.5px;
  align-items: flex-start;
  min-height: 206px;
  background-color: var(--blue-charcoal);
  border-radius: 10px;
`;

const PayOver6Weeks = styled.div`
  ${MontserratLightBotticelli12px}
  width: 182px;
  min-height: 14px;
  margin-left: 1px;
  letter-spacing: 0;
`;

const OverlapGroup1 = styled.div`
  width: 273px;
  height: 16px;
  position: relative;
  margin-top: 20px;
  margin-left: 6.5px;
`;

const Line7 = styled.img`
  position: absolute;
  width: 267px;
  height: 1px;
  top: 7px;
  left: 2px;
`;

const Ellipse14 = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  top: 1px;
  left: 0;
  background-color: var(--ui-text);
  border-radius: 7.5px;
`;

const Ellipse15 = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  top: 1px;
  left: 86px;
  background-color: var(--ui-text);
  border-radius: 7.5px;
`;

const Ellipse16 = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  top: 0;
  left: 172px;
  background-color: var(--ui-text);
  border-radius: 7.5px;
`;

const Ellipse17 = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  top: 0;
  left: 258px;
  background-color: var(--ui-text);
  border-radius: 7.5px;
`;

const PriceContainer = styled.div`
  ${MontserratLightBotticelli12px}
  height: 14px;
  margin-top: 11px;
  margin-left: 3.5px;
  display: flex;
  align-items: flex-start;
  min-width: 283px;
`;

const Price1 = styled.div`
  width: 28px;
  min-height: 14px;
  letter-spacing: 0;
`;

const Price2 = styled.div`
  width: 28px;
  min-height: 14px;
  margin-left: 57px;
  letter-spacing: 0;
`;

const FlexRow2 = styled.div`
  ${MontserratLightBotticelli12px}
  height: 14px;
  align-self: flex-end;
  margin-top: 4px;
  margin-right: 0.5px;
  display: flex;
  align-items: flex-start;
  min-width: 303px;
`;

const Today = styled.div`
  width: 48px;
  min-height: 14px;
  letter-spacing: 0;
`;

const Week2 = styled.div`
  width: 48px;
  min-height: 14px;
  margin-left: 37px;
  letter-spacing: 0;
`;

const BuyNowPayIn4PaymentsNoInterest = styled.p`
  ${MontserratLightBotticelli12px}
  width: 264px;
  min-height: 33px;
  margin-top: 16px;
  letter-spacing: 0;
`;

const HowItWorks = styled.div`
  width: 264px;
  min-height: 33px;
  margin-top: 6px;
  margin-left: 1px;
  font-family: var(--font-family-montserrat);
  font-weight: 500;
  color: var(--cornflower);
  font-size: var(--font-size-m);
  letter-spacing: 0;
  text-decoration: underline;
`;

const OverlapGroup6 = styled.div`
  height: 39px;
  align-self: center;
  margin-top: 81px;
  margin-right: 136px;
  display: flex;
  padding: 10px 41.9px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 178px;
  background-color: var(--ui-text);
  border-radius: 40px;
`;

const Continue = styled.div`
  ${ValignTextMiddle}
  ${MontserratMediumBlack14px}
            width: 94px;
  height: 18px;
  text-align: center;
  letter-spacing: 0;
`;

export default CheckoutModalBuyWithCC;
