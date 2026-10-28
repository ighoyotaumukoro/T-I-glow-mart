import React from "react"
import Profile from "./pages/Profile"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Checkout from "./pages/Checkout"
import Cart from "./pages/Cart"


function App(){
    return(
<BrowserRouter>
<Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/profile" element={<Profile />} />
</Routes>
</BrowserRouter>
    )
}
export default App