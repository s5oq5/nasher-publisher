import { useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Store from './pages/Store.jsx'
import BookDetail from './pages/BookDetail.jsx'
import Services from './pages/Services.jsx'
import RequestService from './pages/RequestService.jsx'
import Board from './pages/Board.jsx'
import Strategy from './pages/Strategy.jsx'
import Shop from './pages/Shop.jsx'

export default function App() {
  const navigate = useNavigate()
  const location = useLocation()

  // Turn internal "/..." anchors (kept from the original markup) into SPA navigation.
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest && e.target.closest('a')
      if (!a) return
      const href = a.getAttribute('href')
      if (href && href.startsWith('/') && !href.startsWith('//')) {
        e.preventDefault()
        navigate(href)
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [navigate])

  // Reset scroll position on route change.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="/book" element={<BookDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/request-service" element={<RequestService />} />
        <Route path="/board" element={<Board />} />
        <Route path="/strategy" element={<Strategy />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </LanguageProvider>
  )
}
