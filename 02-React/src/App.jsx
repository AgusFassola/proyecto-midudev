import { lazy, Suspense, useState } from 'react'
import { Routes, Route} from 'react-router'

import { Header } from "../src/components/Header"
import { Footer } from "../src/components/Footer"

const HomePage = lazy(() => import('./pages/HomePage.jsx'))
const SearchPage = lazy(() => import('./pages/Search.jsx'))
const NotFoundPage = lazy(() => import('./pages/404.jsx'))
const JobDetail = lazy(() => import('./pages/Detail.jsx'))

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  const handleLogin =()=>{
    setIsLoggedIn(true)
  }

  const handleLogout=()=>{
    setIsLoggedIn(false)
  }
  return (
    <>
      <Header isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
        <Suspense fallback={<div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" }}>
          <p>Cargando...</p> </div>}>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/search" element={<SearchPage/>} />
            <Route path="*" element={<NotFoundPage/>} />
            <Route path="/jobs/:id" element={<JobDetail isLoggedIn={isLoggedIn} />} />
          </Routes>
      </Suspense>
      <Footer />
    </>
  )
}

export default App
