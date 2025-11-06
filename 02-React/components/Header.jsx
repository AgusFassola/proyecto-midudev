export function Header() {
  return(
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
  )
}