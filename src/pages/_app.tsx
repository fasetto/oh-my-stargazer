import "@/styles/global.css";
import "focus-visible";

import Head from "next/head";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Oh My Stargazer</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
