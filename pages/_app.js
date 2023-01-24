import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../next-mui-setup/theme";
import createEmotionCache from "../next-mui-setup/createEmotionCache";
import "../styles/globals.scss";
import "../styles/typography.scss";
import AppContextProvider from "../context/AppContextProvider";
import toast, { Toaster } from "react-hot-toast";
import AuthContextProvider from "../context/AuthContextProvider";
import MembersContextProvider from "../context/MembersProvider";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>Yebox | Your Trusted Team ...</title>
          <link rel="icon" href="/favicon.png" sizes="32x32" />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Toaster
          toastOptions={{
            success: {
              iconTheme: {
                primary: "var(--color-primary-main)",
                secondary: "white",
              },
            },
            error: {
              iconTheme: {
                primary: "var(--color-error)",
                secondary: "white",
              },
            },
          }}
        />
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <AppContextProvider>
            <AuthContextProvider>
              <MembersContextProvider>
                <Component {...pageProps} />
              </MembersContextProvider>
            </AuthContextProvider>
          </AppContextProvider>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
