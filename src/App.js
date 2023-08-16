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
import Credit from "./pages/Credit";
import CreditSuccess from "./pages/CreditSuccess";
import StudentHome from "./pages/StudentHome";
import StudentProduct from "./pages/StudentProduct";
import StudentRental from "./pages/StudentRental";
import RentalSuccess from "./pages/RentalSuccess";

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
      <Route path="/credit" element={<Credit/>}/>
      <Route path="/creditSuccess" element={<CreditSuccess/>}/>
      <Route path="/studentHome" element={<StudentHome/>}/>
      <Route path="/studentProduct" element={<StudentProduct />} />
      <Route path="/studentRental" element={<StudentRental />} />
      <Route path="/rentalSuccess" element={<RentalSuccess />} />
    </Routes>
  );
}

export default App;
