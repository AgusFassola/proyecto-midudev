
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
      <Route path="/" component={HomePage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/404" component={NotFoundPage} />
      <Footer />
    </>
  )
}

export default App
