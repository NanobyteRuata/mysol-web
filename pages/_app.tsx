import "../styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className="pt-24 bg-gray-100 w-full flex flex-col">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default appWithTranslation(MyApp);
