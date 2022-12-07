import { useAccount } from 'wagmi';

const address = useAccount();

// deployAndConfigureDrop args
export const name = 'test';
export const symbol = 'TST';

export const defaultAdmin = address;
export const editionSize = 1;
export const royaltyBPS = 500;
export const fundsRecipient = address;
//  export const saleConfig =
//  export const contractURI =
//  export const wildcardAddress =
//  export const mintPricePerToken =
