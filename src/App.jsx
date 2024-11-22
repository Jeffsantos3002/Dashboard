import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './Pages/Home'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-full flex flex-col justify-between'>
      <Header />
      <Home />
      <Footer/>
    </div>
  )
}

export default App
