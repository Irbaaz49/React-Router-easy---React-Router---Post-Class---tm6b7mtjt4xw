import React from 'react';
import Index from "./Pages/Index"
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"
export const AppRoutes = () => {
    return (
<>
  <Routes>
        
        <Route path="/" element={<Index></Index>} />
        <Route path="/home" element={<Home></Home>}
        <Route path="*" element={<NotFound></NotFound>}/ >
        </Routes>
        
        </>
    )
}
