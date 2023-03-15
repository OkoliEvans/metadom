import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import Nft from './nft';
import PageLayouts from './pageLayouts';

const Home: NextPage = () => {
  return (
    <div className='flex justify-between mx-12 my-5'>
      <Head>
        <title>Metadom NFT market</title>
        <meta
          content="Web3 NFT market place for rare arts"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <div>
        <h1 className="text-xl text-blue-900 font-sans">
          Metadom NFTs
        </h1>
      </div>
      <div className="block">
            <ConnectButton />
      </div>
      <div>
        <Nft />
      </div>

    </div>
  );
};

export default Home;
