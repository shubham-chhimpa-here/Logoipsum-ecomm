import { Route, Routes, useParams } from "react-router-dom";
import Home from "./Home";
import Products from "../pages/Products";
import ProductDetails from "./ProductDetails";
import Categories from "../pages/Categories";


export default function AllRoutes() {
    
    return <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/products/:id" element={<ProductDetails />}/>
        <Route path='/products' element={<Products />}/>
        <Route path="/categories/:cates" element={<Categories />}/>
        <Route path="/categories" element={<Categories />}/>
    </Routes>
}