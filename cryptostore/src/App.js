import { Box } from "@chakra-ui/react";

import { CryptoStore } from "./components/CryptoStore";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { CartPage } from "./components/CartPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<CryptoStore />} /> {/* Home Page */}
        <Route exact path="/cart" element={<CartPage />} /> {/* Cart Page */}
      </Routes>
    </>
  );
}

export default App;
