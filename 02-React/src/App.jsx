
import { Header } from "../src/components/Header"
import { Footer } from "../src/components/Footer"
import HomePage from "./pages/HomePage"
import SearchPage from "./pages/Search"
import NotFoundPage from "./pages/404"
import { useEffect, useState } from "react"

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  let pages = <NotFoundPage/>; 
  if (currentPath === "/") {
    pages = <HomePage />;
  } else if (currentPath === "/search") {
    pages = <SearchPage />;
  }

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  return (
    <>
      <Header />
        {pages}
      <Footer />
    </>
  )
}

export default App
