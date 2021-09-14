import Head from "next/head";
import { Layout } from "../components/Layout";

export default function MainHome() {
  return (
    <>
      <Head>
        <title>Small Wave</title>
      </Head>

      <main>
        <Layout />
      </main>
    </>
  );
}
