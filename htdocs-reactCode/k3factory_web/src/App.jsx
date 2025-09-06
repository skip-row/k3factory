import { useState } from 'react'
import Total_index from './page/total_index'
import Total_header from './layout/total_header'
import Total_footer from './layout/total_footer'


function App() {


  return (
    <>
      <Total_index header={<Total_header />} footer={<Total_footer />} />
    </>
  )
}

export default App
