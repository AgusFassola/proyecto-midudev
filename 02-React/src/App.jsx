import { useState } from "react"

import JobCard from "../components/JobCard"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { SearchFormSection } from "../components/SearchFormSection"
import { Pagination } from "../components/Pagination"
import { Title } from "../components/Title"
import { JobList } from "../components/JobList"

import jobsData from "../../data.json"

const RESULTS_PER_PAGE=5;

function App() {

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages=Math.ceil(jobsData.length / RESULTS_PER_PAGE);

  const pagedResults = jobsData.slice(
    (currentPage -1) * RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE
  );

  const handlePageChange=(page) =>{
    setCurrentPage(page);
  }

  return (
    <>
      <Header />
      <main>
        <Title/>
        <SearchFormSection/>
        <JobList jobsData={pagedResults}/>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
        
      </main>
      <Footer />
    </>
  )
}

export default App
