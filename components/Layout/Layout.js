import React from "react";
import Header from "../Header";
import Head from "next/head";
export default function Layout({ children }) {
  return (
    <div className="layout">
      <Head>
        <title>Dragon Ball Characters</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Dragon Ball Characters 
            is a collection of characters from the Dragon Ball series."
        />
      </Head>

      <main>
        <Header />
        {children}
      </main>
    </div>
  );
}
