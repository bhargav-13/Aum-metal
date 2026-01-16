import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Products } from './pages/Products'
import { Grades } from './pages/Grades'

export default function App() {
  return (
    <BrowserRouter>
    <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/grades" element={<Grades />} />
        </Routes>
    </MainLayout>
    </BrowserRouter>
  )
}
