import { useParams, useNavigate, Link } from "react-router";
import { useState, useEffect } from "react";
import snarkdown from "snarkdown";
import style from "./Detail.module.css";
import { useAuthStore } from "../store/authStore";

function JobSection({ title, content }) {
  const html = snarkdown(content || "")

  return(
    <section className={style.section}>
      <h2 className={style.sectionTitle}>
        {title}
      </h2>

      <div className={`${style.sectionContent} prose`} 
        dangerouslySetInnerHTML={{ __html: html }}>
      </div>
    </section>
  )

}

export default function JobDetail() {
  const { id } = useParams();
  const Navigate = useNavigate();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {isLoggedIn} = useAuthStore()


  useEffect(() => {
    fetch(`https://jscamp-api.vercel.app/api/jobs/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error("job not found");
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setJob(data);
        console.log("entro bien al fetch:",data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  console.log(job);


  if (loading) {
    return (
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" }}>
        <div>
          <p>Cargando...</p>
        </div>
      </div>
    );
  }

  if (error || !job) {
    console.log(job);

    return (
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" }}>
        <div className={style.error}>
          <h2 className={style.errorTitle}>Error al cargar el empleo</h2>
          <button
            className={style.errorButton}
            onClick={() => Navigate("/")}
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }
  return (
    <>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" }}>
        <div className={style.container}>
          <nav className={style.breadcrumb}>
            <Link className={style.breadcrumbButton} href="/search">
              Empleos
            </Link>
            <span className={style.breadcrumbSeparator}>/</span>
            <span className={style.breadcrumbCurrent}>{job.titulo}</span>
          </nav>
        </div>
      </div>
      <header className={style.headerContainer}>
        <h1 className={style.header}>{job.titulo}</h1>
        <p className={style.meta}>
          {job.empresa} ° {job.ubicacion}
        </p>
      </header>

      <div className={style.contentWrapper}>
        <button disabled={!isLoggedIn} className={style.applyButton}>
          {isLoggedIn ? "Aplicar ahora" : "Inicia sesión para aplicar"}
        </button>
        <JobSection title="Descripcion del puesto" content={job.content.description} />
        <JobSection title="Responsabilidades" content={job.content.responsabilities} />
        <JobSection title="Requisitos" content={job.content.requirements} />
        <JobSection title="Acerca de la empresa" content={job.content.about} />
      </div>
    </>
  );
}
