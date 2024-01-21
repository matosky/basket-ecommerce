// import '@/styles/globals.css'
import React, { lazy, Suspense } from 'react';
import { Footer } from "@/components/layout/footer/footer";
import { Header } from "@/components/layout/header/header";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/styles/theme/theme";
import { Provider } from "react-redux";
import { Banner } from "@/components/layout/header/banner";
import AppProvider from "@/store/provider";


export default function App({ Component, pageProps }: AppProps) {


  return (
    <div className="wrapper">
      <AppProvider>
        <ThemeProvider theme={theme}>
          <Banner />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </AppProvider>
    </div>
  );
}
