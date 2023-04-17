import React from 'react'
import { Routes, Route } from 'react-router-dom'

const RoutesWithNotFount = ( {children} ) => {
  return (
    <Routes>
        {children}
        <Route path='*' element={<h5>Not found 404</h5>}/>
    </Routes>
  )
}

export default RoutesWithNotFount