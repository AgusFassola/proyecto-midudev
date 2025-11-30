import { useEffect, useState } from "react";
import { SearchFormSection } from "../../src//components/SearchFormSection";
import { Pagination } from "../../src//components/Pagination";
import { Title } from "../../src//components/Title";
import { JobList } from "../../src//components/JobList";
import { useRouter } from "../../src/hooks/useRouter";

const RESULTS_PER_PAGE = 5;

const useFilters = () => {
  const [filters, setFilters] = useState(() =>{
    const params = new URLSearchParams(window.location.search);
    return { 
      text : params.get("text") || "",
      technology : params.get("technology") || "",
      location : params.get("type") || "",
      experienceLevel : params.get("level") || ""
    }
  });
  //const [textToFilter, setTextToFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(() =>{
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("page"));
    return isNaN(page) || page < 1 ? 1 : page;
  });

  const [jobs, setJobs] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState(filters.text);

  const { navigateTo } = useRouter();

  useEffect(() => {
    async function fetchJobs() {
      try {
        setLoading(true);

        const params = new URLSearchParams();
        if (filters.text) params.append("text", filters.text);
        if (filters.technology) params.append("technology", filters.technology);
        if (filters.location) params.append("type", filters.location);
        if (filters.experienceLevel) params.append("level", filters.experienceLevel);

        const offset = (currentPage - 1) * RESULTS_PER_PAGE;
        params.append("limit", RESULTS_PER_PAGE);
        params.append("offset", offset);

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

  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.text) params.append("text", filters.text);
    if (filters.technology) params.append("technology", filters.technology);
    if (filters.location) params.append("type", filters.location);
    if (filters.experienceLevel) params.append("level", filters.experienceLevel);
  
    if (currentPage > 1) params.append("page", currentPage);

    const newUrl = params.toString()
      ? `${window.location.pathname}?${params.toString()}`
      : window.location.pathname;

  window.history.replaceState(null, "", newUrl);
  }, [filters, currentPage, navigateTo]);

  useEffect(() => {
    setText(filters.text);
  }, [filters.text]);

  const totalPages = Math.ceil(total / RESULTS_PER_PAGE);

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
    text,
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
  const { jobs, text, loading, total, totalPages, currentPage, handlePageChange, handleSearch } =
    useFilters();

  const title = loading ? 'Cargando...'
  : `Resultados: ${total}, Página: ${currentPage} - DevJobs `;

  return (
    <main>
      <title>{title}</title>
      <meta name="description" content="Encuentra el trabajo de tus sueños en DevJobs, la plataforma líder para desarrolladores. Explora ofertas de empleo, filtra por tecnología, ubicación y nivel de experiencia, y postúlate fácilmente. ¡Tu próximo desafío profesional te espera aquí!" />
      <Title />
      <SearchFormSection initialText={text} onSearch={handleSearch} />
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
