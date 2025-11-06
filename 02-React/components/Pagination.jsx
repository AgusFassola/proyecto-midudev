export function Pagination({ currentPage = 1, totalPages = 5, onPageChange }) {

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePrevClick = (event) =>{
    event.preventDefault();
    if(!isFirstPage){
      onPageChange(currentPage -1);
    }
  }

  const handleNextClick= (event) =>{
    event.preventDefault();
    if(!isLastPage){
      onPageChange(currentPage +1);
    }
  }

  const hamdleChangePage=(event, page)=>{
    event.preventDefault();
    if(page !== currentPage){
      onPageChange(page);
    }
  }

  return (
    <section>
      <nav className="paginacion" aria-label="Paginación de resultados de búsqueda">
        {!isFirstPage && (
          <a href="#" onClick={handlePrevClick}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 6l-6 6l6 6" />
          </svg></a>
        )}

        {pages.map(page => (
          <a
            key={page}
            href="#"
            className={page === currentPage ? "is-active" : ""}
            onClick={(event) => hamdleChangePage(event, page)}       
          >
            {page}
          </a>
        ))}
        {!isLastPage && (
          <a href="#" onClick={handleNextClick}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 6l6 6l-6 6" />
          </svg></a>
        )}

      </nav>
    </section>
  )
}