import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './layout/Layout';
import Main from './page/main';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}> 
          {/* 메인 */}
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
