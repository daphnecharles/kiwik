"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeployedContractArtifact = void 0;
const goerli__BondManager = require('../deployments/goerli/BondManager.json');
const goerli__CanonicalTransactionChain = require('../deployments/goerli/CanonicalTransactionChain.json');
const goerli__ChainStorageContainer_CTC_batches = require('../deployments/goerli/ChainStorageContainer-CTC-batches.json');
const goerli__ChainStorageContainer_CTC_queue = require('../deployments/goerli/ChainStorageContainer-CTC-queue.json');
const goerli__ChainStorageContainer_SCC_batches = require('../deployments/goerli/ChainStorageContainer-SCC-batches.json');
const goerli__Lib_AddressManager = require('../deployments/goerli/Lib_AddressManager.json');
const goerli__OVM_L1CrossDomainMessenger = require('../deployments/goerli/OVM_L1CrossDomainMessenger.json');
const goerli__Proxy__OVM_L1CrossDomainMessenger = require('../deployments/goerli/Proxy__OVM_L1CrossDomainMessenger.json');
const goerli__Proxy__OVM_L1StandardBridge = require('../deployments/goerli/Proxy__OVM_L1StandardBridge.json');
const goerli__StateCommitmentChain = require('../deployments/goerli/StateCommitmentChain.json');
const kovan__AddressDictator = require('../deployments/kovan/AddressDictator.json');
const kovan__BondManager = require('../deployments/kovan/BondManager.json');
const kovan__CanonicalTransactionChain = require('../deployments/kovan/CanonicalTransactionChain.json');
const kovan__ChainStorageContainer_CTC_batches = require('../deployments/kovan/ChainStorageContainer-CTC-batches.json');
const kovan__ChainStorageContainer_SCC_batches = require('../deployments/kovan/ChainStorageContainer-SCC-batches.json');
const kovan__ChugSplashDictator = require('../deployments/kovan/ChugSplashDictator.json');
const kovan__L1StandardBridge_for_verification_only = require('../deployments/kovan/L1StandardBridge_for_verification_only.json');
const kovan__Lib_AddressManager = require('../deployments/kovan/Lib_AddressManager.json');
const kovan__OVM_L1CrossDomainMessenger = require('../deployments/kovan/OVM_L1CrossDomainMessenger.json');
const kovan__Proxy__OVM_L1CrossDomainMessenger = require('../deployments/kovan/Proxy__OVM_L1CrossDomainMessenger.json');
const kovan__Proxy__OVM_L1StandardBridge = require('../deployments/kovan/Proxy__OVM_L1StandardBridge.json');
const kovan__StateCommitmentChain = require('../deployments/kovan/StateCommitmentChain.json');
const mainnet__AddressDictator = require('../deployments/mainnet/AddressDictator.json');
const mainnet__BondManager = require('../deployments/mainnet/BondManager.json');
const mainnet__CanonicalTransactionChain = require('../deployments/mainnet/CanonicalTransactionChain.json');
const mainnet__ChainStorageContainer_CTC_batches = require('../deployments/mainnet/ChainStorageContainer-CTC-batches.json');
const mainnet__ChainStorageContainer_SCC_batches = require('../deployments/mainnet/ChainStorageContainer-SCC-batches.json');
const mainnet__ChugSplashDictator = require('../deployments/mainnet/ChugSplashDictator.json');
const mainnet__L1StandardBridge_for_verification_only = require('../deployments/mainnet/L1StandardBridge_for_verification_only.json');
const mainnet__Lib_AddressManager = require('../deployments/mainnet/Lib_AddressManager.json');
const mainnet__OVM_L1CrossDomainMessenger = require('../deployments/mainnet/OVM_L1CrossDomainMessenger.json');
const mainnet__Proxy__OVM_L1CrossDomainMessenger = require('../deployments/mainnet/Proxy__OVM_L1CrossDomainMessenger.json');
const mainnet__Proxy__OVM_L1StandardBridge = require('../deployments/mainnet/Proxy__OVM_L1StandardBridge.json');
const mainnet__StateCommitmentChain = require('../deployments/mainnet/StateCommitmentChain.json');
const getDeployedContractArtifact = (name, network) => {
    return {
        goerli__BondManager,
        goerli__CanonicalTransactionChain,
        goerli__ChainStorageContainer_CTC_batches,
        goerli__ChainStorageContainer_CTC_queue,
        goerli__ChainStorageContainer_SCC_batches,
        goerli__Lib_AddressManager,
        goerli__OVM_L1CrossDomainMessenger,
        goerli__Proxy__OVM_L1CrossDomainMessenger,
        goerli__Proxy__OVM_L1StandardBridge,
        goerli__StateCommitmentChain,
        kovan__AddressDictator,
        kovan__BondManager,
        kovan__CanonicalTransactionChain,
        kovan__ChainStorageContainer_CTC_batches,
        kovan__ChainStorageContainer_SCC_batches,
        kovan__ChugSplashDictator,
        kovan__L1StandardBridge_for_verification_only,
        kovan__Lib_AddressManager,
        kovan__OVM_L1CrossDomainMessenger,
        kovan__Proxy__OVM_L1CrossDomainMessenger,
        kovan__Proxy__OVM_L1StandardBridge,
        kovan__StateCommitmentChain,
        mainnet__AddressDictator,
        mainnet__BondManager,
        mainnet__CanonicalTransactionChain,
        mainnet__ChainStorageContainer_CTC_batches,
        mainnet__ChainStorageContainer_SCC_batches,
        mainnet__ChugSplashDictator,
        mainnet__L1StandardBridge_for_verification_only,
        mainnet__Lib_AddressManager,
        mainnet__OVM_L1CrossDomainMessenger,
        mainnet__Proxy__OVM_L1CrossDomainMessenger,
        mainnet__Proxy__OVM_L1StandardBridge,
        mainnet__StateCommitmentChain
    }[(network + '__' + name).replace(/-/g, '_')];
};
exports.getDeployedContractArtifact = getDeployedContractArtifact;
//# sourceMappingURL=contract-deployed-artifacts.js.map