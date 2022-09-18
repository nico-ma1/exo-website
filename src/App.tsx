import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Lore from "./pages/Lore";
import MintMint from "./pages/MintMint";
import MintConnectWallet from "./pages/MintConnectWallet";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/lore":
        title = "";
        metaDescription = "";
        break;
      case "/mint-mint":
        title = "";
        metaDescription = "";
        break;
      case "/mint-connect-wallet":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/lore" element={<Lore />} />

      <Route path="/mint-mint" element={<MintMint />} />

      <Route path="/mint-connect-wallet" element={<MintConnectWallet />} />
    </Routes>
  );
}
export default App;
