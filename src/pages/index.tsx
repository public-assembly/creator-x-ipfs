import { useAccount } from 'wagmi';
import { Header, Metadata } from '../components';

function Page() {
  const { isConnected } = useAccount();
  return (
    <div className='w-full mx-auto'>
      <Header />
      <Metadata />
    </div>
  );
}

export default Page;
