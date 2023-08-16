import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import LoginStaff from "./pages/LoginStaff";
import MyPageStaff from "./pages/MyPageStaff";
import SignStaff from "./pages/SignStaff";
import Product from "./pages/Product";
import LoginStudent from "./pages/LoginStudent";
import SignStudent from "./pages/SignStudent";
import ProductDetail from "./pages/ProductDetail";
import Credit from "./pages/Credit";
import CreditSuccess from "./pages/CreditSuccess";
import GlobalStyle from './styles/globalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import MyPageStaffEdit from './pages/MyPageStaffEdit';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Router>
        <Header/>
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
          <Route path='/myPageStaff' element={<MyPageStaff/>} />
          <Route path='/myPageStaffEdit' element={<MyPageStaffEdit/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
