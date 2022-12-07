import { ConnectKitButton } from 'connectkit';
import { useAccount } from 'wagmi';
import { Account } from '../components';

export const Header = () => {
  const { isConnected } = useAccount();
  return (
    <header className='flex justify-between items-center border-b border-dashed border-gray-200 py-4'>
      <div>
        <p>Public Assembly Creator</p>
      </div>
      <div className='p-4'>
        <ConnectKitButton />
        {isConnected && <Account />}
      </div>
    </header>
  );
};
