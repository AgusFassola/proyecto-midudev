import { lazy, Suspense } from 'react'
import { Routes, Route} from 'react-router'

import { Header } from "../src/components/Header"
import { Footer } from "../src/components/Footer"
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Login from './pages/Login.jsx'

const HomePage = lazy(() => import('./pages/HomePage.jsx'))
const SearchPage = lazy(() => import('./pages/Search.jsx'))
const NotFoundPage = lazy(() => import('./pages/404.jsx'))
const JobDetail = lazy(() => import('./pages/Detail.jsx'))
const ProfilePage = lazy(() => import('./pages/ProfilePage.jsx'))
const RegisterPage = lazy(() => import('./pages/RegisterPage.jsx'))
const LoginPage = lazy(() => import('./pages/Login.jsx'))

function App() {
  
  return (
    <>
      <Header/>
        <Suspense fallback={<div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" }}>
          <p>Cargando...</p> </div>}>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/search" element={<SearchPage/>} />
            <Route path="*" element={<NotFoundPage/>} />
            <Route path="/jobs/:id" element={<JobDetail/>} />
            <Route path="/profile" element={
              <ProtectedRoute redirectTo="/login">
                <ProfilePage/>
              </ProtectedRoute>
              } />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<RegisterPage/>} />

          </Routes>
      </Suspense>
      <Footer />
    </>
  )
}

export default App
