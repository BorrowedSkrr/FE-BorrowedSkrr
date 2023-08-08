import './App.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import LoginStaff from "./pages/LoginStaff";
import SignStaff from "./pages/SignStaff";
import Product from "./pages/Product";
import LoginStudent from "./pages/LoginStudent";
import SignStudent from "./pages/SignStudent";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/loginStaff" element={<LoginStaff />} />
      <Route path="/signStaff" element={<SignStaff />} />
      <Route path="/product" element={<Product />} />
      <Route path="/loginStudent" element={<LoginStudent />} />
      <Route path="/signStudent" element={<SignStudent />} />
      <Route path="/productDetail" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
