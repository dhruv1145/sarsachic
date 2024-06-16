import { Routes, BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Hero from "./pages/Hero/Hero.jsx";
import Login from "./pages/Login/Login.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import ProductPage from "./pages/ProductPage/ProductPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Hero />} index />
        <Route element={<Login />} path="login" />
        <Route element={<SignUp />} path="signup" />
        <Route element={<ProductPage />} path="products" />
      </Routes>
    </BrowserRouter>
  );
}
