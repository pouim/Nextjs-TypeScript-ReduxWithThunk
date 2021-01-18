import { AppProps } from "next/app";
import "../assets/styles/globals.scss";
import { wrapper } from "../Redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
