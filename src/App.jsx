import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Pages/about'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <h1 className='text-red-700 font-bold text-2xl'>Hello, World!</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
