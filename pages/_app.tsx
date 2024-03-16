import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../component/Header";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Defi-Voting</title>
        <meta name="description" content="NFT Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      <Component {...pageProps} />
    </div>
  );
}
