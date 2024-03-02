import React, { useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { AppProps } from "next/app";
import Head from "next/head";
import { AppContext, ContextProvider } from "@/utils/AppContext";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import "../app/globals.css";

function App({ Component, pageProps }: AppProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <NextUIProvider>
      <ContextProvider>
        <AppContext.Provider value={{ isNavOpen }}>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <title>VetMemos</title>
          </Head>
          <Component {...pageProps} />
        </AppContext.Provider>
      </ContextProvider>
    </NextUIProvider>
  );
}

export default App;
