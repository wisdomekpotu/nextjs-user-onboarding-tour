import Head from "next/head";
import Contact from "../components/Contact";
import Post from "../components/Post";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import dynamic from 'next/dynamic'
const Tour = dynamic(
  () => import('../components/Tour'),
  { ssr: false }
)

export default function Home() {


  return (
    <>
      <Head>
        <title>Fake Company Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tour />
      <Layout>
        <Hero />
        <Post />
        <Contact />
      </Layout>
    </>
  );
}
