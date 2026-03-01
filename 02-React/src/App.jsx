import { lazy, Suspense } from 'react'
import { Routes, Route} from 'react-router'

import { Header } from "../src/components/Header"
import { Footer } from "../src/components/Footer"

const HomePage = lazy(() => import('./pages/HomePage.jsx'))
const SearchPage = lazy(() => import('./pages/Search.jsx'))
const NotFoundPage = lazy(() => import('./pages/404.jsx'))
const JobDetail = lazy(() => import('./pages/Detail.jsx'))

function App() {

  return (
    <>
      <Header />
        <Suspense fallback={<div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" }}>
          <p>Cargando...</p> </div>}>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/search" element={<SearchPage/>} />
            <Route path="*" element={<NotFoundPage/>} />
            <Route path="/jobs/:id" element={<JobDetail/>} />
          </Routes>
      </Suspense>
      <Footer />
    </>
  )
}

export default App
