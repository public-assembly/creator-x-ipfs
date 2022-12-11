import { useAccount } from 'wagmi';
import { Header, Metadata } from '../components';

function Page() {
  const { isConnected } = useAccount();
  return (
    <div className=''>
      <Header />
      <Metadata />
    </div>
  );
}

export default Page;
