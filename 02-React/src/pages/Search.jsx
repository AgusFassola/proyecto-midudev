import { useEffect, useState } from "react";
import { SearchFormSection } from "../../src//components/SearchFormSection";
import { Pagination } from "../../src//components/Pagination";
import { Title } from "../../src//components/Title";
import { JobList } from "../../src//components/JobList";

import jobsData from "../../../data.json";

const RESULTS_PER_PAGE = 5;

const useFilters = () => {
  const [filters, setFilters] = useState({
    text: "",
    technology: "",
    location: "",
    experienceLevel: "",
  });
  //const [textToFilter, setTextToFilter] = useState('');
  const textToFilter = "";
  const [currentPage, setCurrentPage] = useState(1);

  const [jobs, setJobs] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobs() {
      try {
        setLoading(true);
        const response = await fetch("https://jscamp-api.vercel.app/api/jobs");
        const json = await response.json();
        setJobs(json.data);
        setTotal(json.total);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, []);

  const totalPages = Math.ceil(jobs.length / RESULTS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (filters) => {
    setFilters(filters);
    setCurrentPage(1);
  };

  /*   const handleTextFilter=(newTextToFilter)=>{
    setTextToFilter(newTextToFilter);
    setCurrentPage(1)
  } */

  return {
    loading,
    jobs,
    total,
    totalPages,
    currentPage,
    handlePageChange,
    handleSearch,
  };
};

function SearchPage() {
  const { jobs,loading, total, totalPages, currentPage, handlePageChange, handleSearch } =
    useFilters();

  useEffect(() => {
    document.title = `Resultados: ${total}, Página: ${currentPage} - DevJobs `;
  }, [total, currentPage]);

  return (
    <main>
      <Title />
      <SearchFormSection onSearch={handleSearch} />
      {
        loading ? <p>Cargando empleos...</p> : <JobList jobsData={jobs} />
      }
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </main>
  );
}

export default SearchPage;
