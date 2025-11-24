
import { Header } from "../src/components/Header"
import { Footer } from "../src/components/Footer"
import HomePage from "./pages/HomePage"
import SearchPage from "./pages/Search"
import NotFoundPage from "./pages/404"
import { Route } from "./components/Route"

function App() {

  return (
    <>
      <Header />
      <Route parh="/" component={HomePage} />
      <Route parh="/search" component={SearchPage} />
      <Route parh="/404" component={NotFoundPage} />
      <Footer />
    </>
  )
}

export default App
