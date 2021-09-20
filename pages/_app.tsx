import BaseHeader from "components/common/BaseHeader";
import Footer from "components/common/Footer";
import Navigation from "components/common/Navigation/list";
import { RecoilRoot } from "recoil";
import "normalize.css";
import "assets/css/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <BaseHeader />
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </RecoilRoot>
  );
}

export default MyApp;
