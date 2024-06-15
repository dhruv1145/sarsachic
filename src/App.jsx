import { Routes, BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Hero from "./pages/Hero/Hero.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Hero />} index />
      </Routes>
    </BrowserRouter>
  );
}
