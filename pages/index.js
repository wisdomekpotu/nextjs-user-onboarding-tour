import Head from "next/head";
import Contact from "../components/Contact";
import Post from "../components/Post";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";



export default function Home() {


  return (
    <>
      <Head>
        <title>VPN Best Landingpage </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
        <Post />
        <Contact />
      </Layout>
    </>
  );
}
