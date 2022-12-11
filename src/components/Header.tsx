import { ConnectKitButton } from 'connectkit';
import { useAccount } from 'wagmi';
import { Account } from '../components';

export const Header = () => {
  const { isConnected } = useAccount();
  return (
    <header className='flex justify-between items-center border-b border-dashed border-gray-200 py-4'>
      <div>
        <p>Creator</p>
      </div>
      <div className=''>
        <ConnectKitButton />
        {isConnected && <Account />}
      </div>
    </header>
  );
};
