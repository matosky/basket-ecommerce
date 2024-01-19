// import '@/styles/globals.css'
import { Footer } from "@/components/layout/footer/footer";
import { Header } from "@/components/layout/header/header";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/styles/theme/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="wrapper">
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
