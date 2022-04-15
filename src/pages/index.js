import Head from "next/head";
import About from "../components/About";
import Hero from "../components/Hero";
import Product from "../components/Product";
import Team from "../components/Team";

import productDescription from '../components/productDescription';

export default function Home() {
  return (
    <>
      <Head>
        <title>Small Wave</title>
      </Head>

      <main>
        <Hero />
        <About />
        <Product description={productDescription[0]} />
        {/* <Team /> */}
      </main>
    </>
  );
}
