export const PACreatorV1Abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_zoraNFTCreatorProxy',
        type: 'address',
      },
      {
        internalType: 'contract IMetadataRenderer',
        name: '_tokenUriMetadataRenderer',
        type: 'address',
      },
      { internalType: 'address', name: '_tokenUriMinter', type: 'address' },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  { inputs: [], name: 'CantSet_ZeroAddress', type: 'error' },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'tokenUriMetadataRenderer',
        type: 'address',
      },
    ],
    name: 'TokenUriMetadataRendererInitialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newTokenUriMetadataRenderer',
        type: 'address',
      },
    ],
    name: 'TokenUriMetadataRendererUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'tokenUriMinter',
        type: 'address',
      },
    ],
    name: 'TokenUriMinterInitialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newTokenUriMinter',
        type: 'address',
      },
    ],
    name: 'TokenUriMinterUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'zoraProxyAddress',
        type: 'address',
      },
    ],
    name: 'ZoraProxyAddressInitialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newZoraProxyAddress',
        type: 'address',
      },
    ],
    name: 'ZoraProxyAddressUpdated',
    type: 'event',
  },
  {
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MINTER_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'string', name: 'name', type: 'string' },
      { internalType: 'string', name: 'symbol', type: 'string' },
      { internalType: 'address', name: 'defaultAdmin', type: 'address' },
      { internalType: 'uint64', name: 'editionSize', type: 'uint64' },
      { internalType: 'uint16', name: 'royaltyBPS', type: 'uint16' },
      {
        internalType: 'address payable',
        name: 'fundsRecipient',
        type: 'address',
      },
      {
        components: [
          { internalType: 'uint104', name: 'publicSalePrice', type: 'uint104' },
          {
            internalType: 'uint32',
            name: 'maxSalePurchasePerAddress',
            type: 'uint32',
          },
          { internalType: 'uint64', name: 'publicSaleStart', type: 'uint64' },
          { internalType: 'uint64', name: 'publicSaleEnd', type: 'uint64' },
          { internalType: 'uint64', name: 'presaleStart', type: 'uint64' },
          { internalType: 'uint64', name: 'presaleEnd', type: 'uint64' },
          {
            internalType: 'bytes32',
            name: 'presaleMerkleRoot',
            type: 'bytes32',
          },
        ],
        internalType: 'struct IERC721Drop.SalesConfiguration',
        name: 'saleConfig',
        type: 'tuple',
      },
      { internalType: 'string', name: 'contractURI', type: 'string' },
      { internalType: 'address', name: 'wildcardAddress', type: 'address' },
      { internalType: 'uint256', name: 'mintPricePerToken', type: 'uint256' },
    ],
    name: 'deployAndConfigureDrop',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IMetadataRenderer',
        name: 'newTokenUriMetadataRenderer',
        type: 'address',
      },
    ],
    name: 'setTokenUriMetadataRendererAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'newTokenUriMinter', type: 'address' },
    ],
    name: 'setTokenUriMinterAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newZoraNFTCreatorProxy',
        type: 'address',
      },
    ],
    name: 'setZoraCreatorProxyAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'tokenUriMetadataRenderer',
    outputs: [
      { internalType: 'contract IMetadataRenderer', name: '', type: 'address' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'tokenUriMinter',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'zoraNFTCreatorProxy',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
] as const;
