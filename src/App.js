
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import HomePage from "./pages/HomePage"
import ProductDetailPage from "./pages/ProductDetailPage"
import ProductPage from "./pages/ProductPage"
import ErrorPage from "./pages/ErrorPage"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import CartPage from "./pages/CartPage"


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/products/:catId" element={<ProductPage/>}></Route>
    <Route path="/products/detail/:id" element={<ProductDetailPage/>}></Route>
    <Route path="/about" element={<AboutPage/>}></Route>
    <Route path="/contact" element={<ContactPage/>}></Route>
    <Route path="/register" element={<RegisterPage/>}></Route>
    <Route path="/login" element={<LoginPage/>}></Route>
    <Route path="/cart" element={<CartPage/>}></Route>
    <Route path="*" element={<ErrorPage/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App