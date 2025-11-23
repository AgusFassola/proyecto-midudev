
import { Header } from "../src/components/Header"
import { Footer } from "../src/components/Footer"
import HomePage from "./pages/HomePage"
import SearchPage from "./pages/Search"
import NotFoundPage from "./pages/404"
import { useRouter } from "./hooks/useRouter"

function App() {

  const { currentPath } = useRouter();

  let pages = <NotFoundPage/>; 
  if (currentPath === "/") {
    pages = <HomePage />;
  } else if (currentPath === "/search") {
    pages = <SearchPage />;
  }



  return (
    <>
      <Header />
        {pages}
      <Footer />
    </>
  )
}

export default App
