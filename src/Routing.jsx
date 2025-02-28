import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from "../src/Pages/Landing/Landing"
import SignUp from "./Pages/Auth/SignUp"
import Orders from "./Pages/Orders/Order"
import Cart from "./Pages/Cart/Cart"
import Results from "./Pages/Results/Results"

function Routing() {
  return (
    <div>
      <Router basename="/Amazon-Clone-2025">
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/auth" element={<SignUp />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:categoryName" element={<Results />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Routing