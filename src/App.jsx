import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Pages/about'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import Header from './components/Header';


export default function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </BrowserRouter>
  )
}
