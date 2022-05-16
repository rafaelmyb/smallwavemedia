import Head from "next/head";
import About from "../components/About";
import Hero from "../components/Hero";
import Product from "../components/Product";
import WhyChoose from "../components/WhyChoose";
import Team from "../components/Team";

import productDescription from '../components/productDescription';
import Contact from "../components/Contact";
import Footer from "../components/Footer";

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
        <WhyChoose />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
