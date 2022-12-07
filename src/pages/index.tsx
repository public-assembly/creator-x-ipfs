import { useAccount } from 'wagmi';
import { Create, Header, Storage } from '../components';

function Page() {
  const { isConnected } = useAccount();
  return (
    <>
      <div className=''>
        <Header />
      </div>
      <div className=''>
        <Storage />
        {/* <Create /> */}
      </div>
    </>
  );
}

export default Page;
