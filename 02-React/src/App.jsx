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
  const [filters, setFilters] = useState({
    technology: '',
    location: '',
    experienceLevel: '',
  });
  const [textToFilter, setTextToFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);


  const jobsFilteredByFilters = jobsData.filter((job) => {
    return(
      (filters.technology === '' || job.data.technology.toLowerCase() === filters.technology.toLowerCase()) 
    )
  })

  const jobsWithTextFilter = textToFilter === ''
    ? jobsFilteredByFilters
    : jobsFilteredByFilters.filter(job =>{
       return job.titulo.toLowerCase().includes(textToFilter.toLowerCase());
    }) 

      const totalPages=Math.ceil(jobsWithTextFilter.length / RESULTS_PER_PAGE);


    const pagedResults = jobsWithTextFilter.slice(
    (currentPage -1) * RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE
  );

  const handlePageChange=(page) =>{
    setCurrentPage(page);
  }

  const handleSearch = (filters) =>{
    setFilters(filters);
    setCurrentPage(1);
  }

  const handleTextFilter=(newTextToFilter)=>{
    setTextToFilter(newTextToFilter);
    setCurrentPage(1)
  }

  return (
    <>
      <Header />
      <main>
        <Title/>
        <SearchFormSection onSearch={handleSearch} onTextFilter={handleTextFilter}/>
        <JobList jobsData={pagedResults}/>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
        
      </main>
      <Footer />
    </>
  )
}

export default App
