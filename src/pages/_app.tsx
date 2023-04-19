import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import "@/styles/globals.css";

import Header from "@/components/header";

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <div>
      {pathname == "/login" ? "" : <Header />}
      <Component {...pageProps} />
    </div>
  );
}
