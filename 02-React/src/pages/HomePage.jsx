import { useRouter } from "../hooks/useRouter";

export default function HomePage(){

    const {navigateTo}=useRouter();

    const handleSearch=(event)=>{
        event.preventDefault();
        const formData=new FormData (event.currentTarget);  
        const searchTerm=formData.get("search");

        const url = searchTerm
        ? `/search?text=${encodeURIComponent(searchTerm)}`
        : '/search';
        navigateTo(url);
    }

    return(
        <main>
        <section className="titulo">
            <img className="imagen-de-fondo" src="./background.webp" />
            <h1>Encuentra el trabajo de tus sueños</h1>
            <p>unete a la comunidad.</p>
            <form onSubmit={handleSearch} role="search" className="buscadorInicio">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-search">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                    <path d="M21 21l-6 -6" />
                </svg>
                <input name="search" id="buscador" required type="text" placeholder="Buscar empleos"
                    aria-label="Search through site content" />
                <button className="btnBuscar" type="submit">Buscar</button>
            </form>
        </section>
        <section>
            <div className="porque-devjobs">
                <header>¿Por qué DevJobs?</header>
             <p>DevJobs es la principal plataforma de búsqueda de empleo para desarrolladores. Conectamos a los mejores
          talentos con las empresas más innovadoras.</p>

            </div>
            <div className="formitas">
                <article className="articlesHome">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-briefcase">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                        <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                        <path d="M12 12l0 .01" />
                        <path d="M3 13a20 20 0 0 0 18 0" />
                    </svg>
                    dasdasd
                </article>
                <article className="articlesHome">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-friends">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M5 22v-5l-1 -1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5" />
                        <path d="M17 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M15 22v-4h-2l2 -6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1l2 6h-2v4" />
                    </svg>
                    adasd
                </article>
                <article className="articlesHome">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-buildings">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 21v-15c0 -1 1 -2 2 -2h5c1 0 2 1 2 2v15" />
                        <path d="M16 8h2c1 0 2 1 2 2v11" />
                        <path d="M3 21h18" />
                        <path d="M10 12v0" />
                        <path d="M10 16v0" />
                        <path d="M10 8v0" />
                        <path d="M7 12v0" />
                        <path d="M7 16v0" />
                        <path d="M7 8v0" />
                        <path d="M17 12v0" />
                        <path d="M17 16v0" />
                    </svg>
                    1adsasd
                </article>
            </div>

        </section>
    </main>

    )
}