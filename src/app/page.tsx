import type { NextPage } from 'next';
import Head from 'next/head';
import Chatbot from '../components/Chatbot';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Chatbot</title>
        <meta name="description" content="A simple chatbot using Next.js and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Chatbot />
      </main>
    </div>
  );
};

export default Home;