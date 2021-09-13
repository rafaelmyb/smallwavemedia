import Head from "next/head";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Product } from "../components/Product";
import { Team } from "../components/Team";

export default function MainHome() {
  return (
    <>
      <Head>
        <title>Small Wave</title>
      </Head>

      <main>
        <Home />
        <About />
        <Product />
        <Team />
      </main>
    </>
  );
}
