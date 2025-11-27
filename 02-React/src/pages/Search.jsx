import { useEffect, useState } from "react";
import { SearchFormSection } from "../../src//components/SearchFormSection";
import { Pagination } from "../../src//components/Pagination";
import { Title } from "../../src//components/Title";
import { JobList } from "../../src//components/JobList";

const RESULTS_PER_PAGE = 5;

const useFilters = () => {
  const [filters, setFilters] = useState({
    text: "",
    technology: "",
    location: "",
    experienceLevel: "",
  });
  //const [textToFilter, setTextToFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const [jobs, setJobs] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobs() {
      try {
        setLoading(true);

        const params = new URLSearchParams();
        if (filters.text) params.append("text", filters.text);
        if (filters.technology) params.append("technology", filters.technology);
        if (filters.location) params.append("type", filters.location);
        if (filters.experienceLevel) params.append("level", filters.experienceLevel);

        const queryParams = params.toString();
        
        const response = await fetch(`https://jscamp-api.vercel.app/api/jobs?${queryParams}`);
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
  }, [filters, currentPage]);

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
