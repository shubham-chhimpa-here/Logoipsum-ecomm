import { Route, Routes, useParams } from "react-router-dom";
import Home from "./Home";
import Products from "../pages/Products";
import ProductDetails from "./ProductDetails";


export default function AllRoutes() {
    
    return <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:id" element={<ProductDetails />}/>
    </Routes>
}