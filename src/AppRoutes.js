import React from 'react';
import {Index} from "./Pages/Index"
import {Home} from "./Pages/Home"
import {NotFound} from "./Pages/NotFound"
import { Routes, Route } from 'react-router-dom'

export const AppRoutes = () => {
    return (
<>
  <Routes>
        
        <Route exact path="/" element={<Index></Index>} />
        <Route path="/home" element={<Home></Home>}/>
        <Route path="*" element={<NotFound></NotFound>}/>
        </Routes>
        
        </>
    )
}
