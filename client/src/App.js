import { useEffect } from "react";
import {
  BrowserRouter,
  Router,
  Route,
  useLocation,
  Routes,
} from "react-router-dom";
import Checkout from "./scenes/Checkout/Checkout";
import Confirmation from "./scenes/Checkout/Confirmation";
import CartMenu from "./scenes/Global/CartMenu";
import Navbar from "./scenes/Global/Navbar";
import Home from "./scenes/Home/Home";
import ItemDetails from "./scenes/ItemDetails/ItemDetails";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <CartMenu />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/success" element={<Confirmation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
