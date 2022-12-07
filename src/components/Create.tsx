import { useContractWrite, usePrepareContractWrite, useAccount } from 'wagmi';
import { PACreatorV1Abi } from '../abi/PACreatorV1Abi';

export const Create = () => {
  const address = useAccount();

  const { config, error } = usePrepareContractWrite({
    address: '0x74408C85765b06c0F3455Efd0f45C42C7678A256',
    abi: PACreatorV1Abi,
    functionName: 'deployAndConfigureDrop',
    // args: [name],
  });
  const { write } = useContractWrite(config);

  return (
    <>
      <button
        className='bg-cyan-500 px-4 py-2 text-white rounded-xl'
        // disabled={!write}
        onClick={() => write?.()}
      >
        Create Drop
      </button>
      {error && (
        <div>An error occurred preparing the transaction: {error.message}</div>
      )}
    </>
  );
};
