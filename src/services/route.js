import { Routes, Route } from "react-router-dom";
import { Admin, Home, Merch } from "../components";

export default function Routers() {

   return(
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/merchandise" element={<Merch/>}/>
         <Route path="/admin" element={<Admin/>}/>
      </Routes>
   )
} 