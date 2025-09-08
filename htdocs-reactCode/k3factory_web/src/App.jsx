import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Total_layout from './layout/total_layout';
import Total_index from './page/total_index'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Total_layout />}> 
          {/* 메인 */}
          <Route index element={<Total_index />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
