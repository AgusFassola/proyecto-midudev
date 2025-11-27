import { useEffect, useState } from "react"
import { SearchFormSection } from "../../src//components/SearchFormSection"
import { Pagination } from "../../src//components/Pagination"
import { Title } from "../../src//components/Title"
import { JobList } from "../../src//components/JobList"

import jobsData from "../../../data.json"

const RESULTS_PER_PAGE=5;

const useFilters = () => {
const [filters, setFilters] = useState({
    text : '',
    technology: '',
    location: '',
    experienceLevel: '',
  });
  //const [textToFilter, setTextToFilter] = useState('');
  const textToFilter = '';
  const [currentPage, setCurrentPage] = useState(1);


  const jobsFilteredByFilters = jobsData.filter((job) => {
    return(
      (filters.text === '' || job.titulo.toLowerCase().includes(filters.text.toLowerCase())) &&
      (filters.technology === '' || job.data.technology.toLowerCase() === filters.technology.toLowerCase()) && 
      (filters.location === '' || job.data.modalidad.toLowerCase() === filters.location.toLowerCase()) &&
      (filters.experienceLevel === '' || job.data.nivel.toLowerCase() === filters.experienceLevel.toLowerCase())

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

/*   const handleTextFilter=(newTextToFilter)=>{
    setTextToFilter(newTextToFilter);
    setCurrentPage(1)
  } */

    return{
    jobsWithTextFilter,
    pagedResults,
    totalPages,
    currentPage,
    handlePageChange,
    handleSearch
    }
}


function SearchPage() {

  const{
    jobsWithTextFilter,
    pagedResults,
    totalPages,
    currentPage,
    handlePageChange,
    handleSearch
  } = useFilters();

  useEffect(() => {
    document.title = `Resultados: ${jobsWithTextFilter.length}, Página: ${currentPage} - DevJobs `
  }, [jobsWithTextFilter, currentPage]);
  

  return (
      <main>
        <Title/>
        <SearchFormSection onSearch={handleSearch} />
        <JobList jobsData={pagedResults}/>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
        
      </main>
  )
}

export default SearchPage
