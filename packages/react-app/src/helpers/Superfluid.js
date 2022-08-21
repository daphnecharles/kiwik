import { Framework } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";
import { store } from "../store";
import { getDate } from './helpers';
const ERC20ABI = require('./abi.json');

const NETWORK_NAME = "matic";
const SUPER_TOKEN_NAME = "USDCx";
// Middleware Wallet Mumbai Address
// Asset creator recipient
// const RECIPIENT = "0x8ac29b4a1f99E118E2f23F705507442C2F6Ba9d5";

//TODO - wrap assets to USDCx
export async function createNewFlow(recipient, flowRate) {
    const web3ModalProvider = store.state.web3Provider;
    const senderAddress = await web3ModalProvider.getSigner().getAddress();

    const sf = await Framework.create({
      networkName: NETWORK_NAME,
      provider: web3ModalProvider,
    });

    const signer = sf.createSigner({ web3Provider: web3ModalProvider });

  const tokenxContract = await sf.loadSuperToken(SUPER_TOKEN_NAME);

  const flowRateSecond = calculateFlowRate(flowRate);

  // Upgrade and create stream at once  
  const upgradeOperation = tokenxContract.upgrade({
    amount: flowRate.toString()
  });

  console.log(flowRateSecond);

  const createFlowOperation = tokenxContract.createFlow({
    sender: senderAddress,
    receiver: recipient,
    flowRate: flowRateSecond,
    // overrides: {
    //   gasLimit: "100000",
    // },
  });

  console.log(flowRate);

  await sf
  .batchCall([upgradeOperation, createFlowOperation])
  .exec(signer)
  .then(function (tx) {
    console.log(
      `Congrats - you've just successfully executed a batch call!
      You have completed 2 operations in a single tx 🤯
      View the tx here:  https://polygonscan.com/tx/${tx.hash}
      View Your Stream At: https://app.superfluid.finance/dashboard/${RECIPIENT}
      Network: ${NETWORK_NAME}
      Super Token: ${SUPER_TOKEN_NAME}
      Sender: ${senderAddress}
      Receiver: ${recipient},
      FlowRate: ${flowRate}/month
      `
    );

    const streamDetails = {
      transaction: SUPER_TOKEN_NAME,
      superToken: SUPER_TOKEN_NAME,
      datetime: getDate(),
      flowRate: flowRate,
      statusTransaction: "progress",
      };

    store.commit('addStream', streamDetails);

    // Call the swap every X amount of seconds
    store.commit('setswapFunctionTimer', streamDetails);

  });
}

export async function updateExistingFlow(tokenType, flowRate) {
    const web3ModalProvider = store.state.web3Provider;
    const senderAddress = await web3ModalProvider.getSigner().getAddress();

    const sf = await Framework.create({
      networkName: NETWORK_NAME,
      provider: web3ModalProvider,
    });

    const signer = sf.createSigner({ web3Provider: web3ModalProvider });

    const tokenxContract = await sf.loadSuperToken(tokenType);
    const tokenx = tokenxContract.address;

    const flowRateSecond = calculateFlowRate(flowRate);

    try {
      const updateFlowOperation = sf.cfaV1.updateFlow({
        flowRate: flowRateSecond,
        receiver: RECIPIENT,
        superToken: tokenx
      });
  
      console.log("Updating your stream...");
  
      const result = await updateFlowOperation.exec(signer);
      console.log(result);
  
      console.log(
        `Congrats - you've just updated a money stream!
      View Your Stream At: https://app.superfluid.finance/dashboard/${RECIPIENT}
      Network: ${NETWORK_NAME}
      Super Token: ${tokenType}
      Sender: ${senderAddress}
      Receiver: ${RECIPIENT},
      New FlowRate: ${flowRate}
      `
      );

      // Update Vue store
      store.commit('alterStream',  {
        transaction: tokenType,
        superToken: tokenType,
        datetime: store.state.streams.findIndex(obj => obj.transaction === tokenType).datetime,
        flowRate: `${flowRate}/month`,
        statusTransaction: "progress",
        },
      );
    } catch (error) {
      console.log(
        "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
      );
      console.error(error);
    }
}

export async function deleteFlow(tokenType) {
    const web3ModalProvider = store.state.web3Provider;
    const senderAddress = await web3ModalProvider.getSigner().getAddress();

    const sf = await Framework.create({
      networkName: NETWORK_NAME,
      provider: web3ModalProvider,
    });

    const signer = sf.createSigner({ web3Provider: web3ModalProvider });

    const tokenxContract = await sf.loadSuperToken(tokenType);
    const tokenx = tokenxContract.address;
  
    try {
      const deleteFlowOperation = sf.cfaV1.deleteFlow({
        sender: senderAddress,
        receiver: RECIPIENT,
        superToken: tokenx
      });
  
      console.log("Deleting your stream...");
  
      await deleteFlowOperation.exec(signer);
  
      console.log(
        `Congrats - you've just deleted your money stream!
         Network: ${NETWORK_NAME}
         Super Token: ${tokenType}
         Sender: ${senderAddress}
         Receiver: ${RECIPIENT}
      `
      );

      // Update Vue store
      store.commit('alterStream',  {
        transaction: tokenType,
        superToken: tokenType,
        datetime: store.state.streams.findIndex(obj => obj.transaction === tokenType).datetime,
        flowRate: '$0/month',
        statusTransaction: "cancelled",
        },
      );
    } catch (error) {
      console.error(error);
    }
  }

export function calculateFlowRate(amountInDollars) {
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