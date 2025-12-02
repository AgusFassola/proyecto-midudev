
import { Routes, Route} from 'react-router'

import { Header } from "../src/components/Header"
import { Footer } from "../src/components/Footer"
import HomePage from "./pages/HomePage"
import SearchPage from "./pages/Search"
import NotFoundPage from "./pages/404"
import { JobDetail } from './pages/Detail'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/search" element={<SearchPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
        <Route path="/jobs/:id" element={<JobDetail/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
