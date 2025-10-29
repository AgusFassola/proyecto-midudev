

function App() {

  return (
    <>
      <header>
        <h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move-horizontal">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 9l3 3l-3 3" />
                <path d="M15 12h6" />
                <path d="M6 9l-3 3l3 3" />
                <path d="M3 12h6" />
            </svg>
            DevJobs
        </h2>
        <nav>
            <a href="./index.html">Inicio</a>
            <a href="">Empleos</a>
            <a href="./react.html">React</a>
        </nav>
        <div>
            <devjobs-avatar
                service="github" 
                username="AgusFassola"
                size="32"
            ></devjobs-avatar>
            <devjobs-avatar
                service="github" 
                username="midudev"
                size="32"
            ></devjobs-avatar>

            <a href="">Iniciar sesión</a>
        </div>
    </header>
    <main>
        <section className="titulo">
            <h1>Encuentra tu próximo trabajo</h1>
            <p>hacer el segundo diseño en casa.</p>
        </section>
        <form id="empleos-form" role="search">
            <section className="caja-buscador">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-search">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                    <path d="M21 21l-6 -6" />
                </svg>
                <input id="buscador" type="search" placeholder="Buscar empleos"/>
            </section>
            <section className="selects">
                <select name="technology" id="filter-technology">
                    <option value="">Tecnología</option>
                    <hr />
                    <optgroup label="Frontend">
                        <option value="React">React</option>
                        <option value="JavaScript">JavaScript</option>
                    </optgroup>
                    <hr />
                    <optgroup label="Backend">
                        <option value="Python">Python</option>
                        <option value="Nodejs">Node js</option>
                        <option value="Java">Java</option>
                    </optgroup> 
                    </select>
                <select name="location" id="filter-location">
                    <option value="">Ubicación</option>
                    <option value="Remoto">Remoto</option>
                    <option value="Presencial">Presencial</option>
                    <option value="Híbrido">Híbrido</option>
                </select>
                <select name="experience-level" id="filter-experience-level">
                    <option value="">Nivel de experiencia</option>
                    <option value="Junior">Junior</option>
                    <option value="Semisenior">Semisenior</option>
                    <option value="Senior">Senior</option>
                </select>
            </section>
        </form>
        <h2 className="h2-busqueda">Resultado de la búsqueda:</h2>
        <p className="resultado"></p>
        <section className="resultados">
           
        </section>


        <section>
            <nav className="paginacion" aria-label="Paginación de resultados de búsqueda">
                <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M15 6l-6 6l6 6" />
                    </svg></a>
                <a className="is-active" href="">1</a>
                <a href="">2</a>
                <a href="">3</a>
                <a href="">4</a>
                <a href="">5</a>
                <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 6l6 6l-6 6" />
                    </svg></a>
            </nav>
        </section>
    </main>
    <footer>
        <small>&copy; 2025 DevJobs. Todos los derechos reservados.</small>
    </footer>
    </>
  )
}

export default App
