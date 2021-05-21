import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import { CssBaseline } from "@material-ui/core";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <CssBaseline />
        <Head>
          <title>Jogo do Balão</title>
          <meta
            name="description"
            content="Jogo do Balão mais zika do universo"
          />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <Component {...pageProps} />      
    </ThemeProvider>
  );
}

export default MyApp;
