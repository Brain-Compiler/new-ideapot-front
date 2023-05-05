import type { AppProps } from "next/app";

import "../styles/globals.css";

import AppLayout from "@/components/layout/appLayout";

import { Provider } from "react-redux";
import { store } from "src/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  );
}
