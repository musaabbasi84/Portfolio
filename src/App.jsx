import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import PageLoader from './components/PageLoader'
import Home from './pages/Home'

export default function App() {
  return (
    <>
      <PageLoader />
      <ScrollToTop />
      <div className="min-h-screen bg-[#020817] text-slate-200">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}
