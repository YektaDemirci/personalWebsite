import "../globals.sass";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import "../stylesheets/components/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Yekta Demirci</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Hey, this is my personal website. You can take a look at
          my portfolio, download my CV and see how you can contact me!"
          data-react-helmet="true"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Yekta Demirci" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#111111" />
      </Head>
      <Analytics />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
