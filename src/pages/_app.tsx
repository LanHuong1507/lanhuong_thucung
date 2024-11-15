import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux"; // Import the Provider
import store from "../reudx/store"; // Import the store

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      {" "}
      {/* Wrap your component with Provider */}
      <Component {...pageProps} />
    </Provider>
  );
}
