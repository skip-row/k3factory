import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Total_Layout from 'layout/total/Layout';
import Total_Main from 'page/total/main';

import Pluginmaster_Layout from 'layout/pluginmaster/Layout';
import Pluginmaster_Main from 'page/pluginmaster/main';

import Todayhealth_Layout from 'layout/todayhealth/Layout';
import Todayhealth_Main from 'page/todayhealth/main';

import NotFound from 'page/notfound'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 토탈 */}
        <Route path="/" element={<Total_Layout />}> 
          <Route index element={<Total_Main />} />
        </Route>

        {/* Pluginmaster */}
        <Route path="/Pluginmaster" element={<Pluginmaster_Layout />}>
          <Route index element={<Pluginmaster_Main />} />
        </Route>

        {/* todayhealth */}
        <Route path="/todayhealth" element={<Todayhealth_Layout />}>
          <Route index element={<Todayhealth_Main />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
