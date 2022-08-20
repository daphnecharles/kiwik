export interface RollupDeployConfig {
    whitelistOwner: string;
    gasPriceOracleOwner: string;
    gasPriceOracleOverhead: number;
    gasPriceOracleScalar: number;
    gasPriceOracleL1BaseFee: number;
    gasPriceOracleGasPrice: number;
    gasPriceOracleDecimals: number;
    l2BlockGasLimit: number;
    l2ChainId: number;
    blockSignerAddress: string;
    l1StandardBridgeAddress: string;
    l1FeeWalletAddress: string;
    l1CrossDomainMessengerAddress: string;
    berlinBlock: number;
}
export declare const makeL2GenesisFile: (cfg: RollupDeployConfig) => Promise<any>;
