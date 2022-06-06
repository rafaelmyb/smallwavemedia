import { useState, useEffect } from "react";

import Head from "next/head";
import About from "../components/About";
import Hero from "../components/Hero";
import Product from "../components/Product";
import WhyChoose from "../components/WhyChoose";
import Team from "../components/Team";
import Spinner from "../components/Spinner";

import productDescription from "../components/productDescription";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>Small Wave</title>
      </Head>
      {isLoading ? (
        <div
          style={{
            width: '100vw',
            height: '100vh',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: '#121214',
          }}
        >
          <Spinner size={64} />
        </div>
      ) : (
        <>
          <main
            style={{
              backgroundColor: '#121214',
            }}
          >
            <Hero />
            <About />
            <Product description={productDescription[0]} />
            <WhyChoose />
            <Team />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
