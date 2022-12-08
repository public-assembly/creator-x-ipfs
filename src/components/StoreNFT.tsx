import { NFTStorage } from 'nft.storage';

const client = new NFTStorage({
  token: process.env.NEXT_PUBLIC_NFT_STORAGE_KEY as string,
});

type nftStorageProps = {
  name?: any;
  description?: any;
  thumbnail?: any;
  // nftFile?: any;
};

export const StoreNFT = ({
  name,
  description,
  thumbnail,
}: // nftFile,
nftStorageProps) => {
  async function handleClick() {
    try {
      const metadata = await client.store({
        name: name,
        description: description,
        image: thumbnail,
        // properties: {
        //   custom: 'nft file',
        //   file: nftFile,
        // },
      });
      console.log(metadata);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <button className='btn-primary' onClick={() => handleClick()}>
      Store On IPFS
    </button>
  );
};
