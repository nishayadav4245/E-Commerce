import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Admin from './Pages/Admin/Admin'; // ✅ Correct casing




export const App = () => {
  return (
    <div>
      <Navbar/>
    <Admin/>
    </div>
  )
}

export default App