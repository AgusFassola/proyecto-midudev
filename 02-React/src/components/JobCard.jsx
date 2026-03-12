import React from "react";
import { useState } from "react";
import Link from "./Link";
import styles from "./JobCard.module.css";
import { useFavoritesStore } from "../store/favoritesStore";
import { useAuthStore } from "../store/authStore";

function JobCardFavoriteButton({ jobId }) {

  const { isFavorite, toggleFavorite } = useFavoritesStore();
  const {isLoggedIn} = useAuthStore()

  return (
    <button disabled={!isLoggedIn} onClick={() => toggleFavorite(jobId)}>
      {isFavorite(jobId) ? "❤️" : "🤍"}
    </button>
  );
}

function JobCardAppyButton({jobId}) {
  const [isApplied, setIsApplied] = useState(false);
  const {isLoggedIn} = useAuthStore()

  function handleClick() {
    setIsApplied(!isApplied);
    console.log("jobID: ", jobId)
  }

  const text = isApplied ? "Aplicado" : "Aplicar";
  const buttonClass = isApplied ? "is-applied" : "";

  return(
    <button
          onClick={handleClick}
          className={`boton-importante ${buttonClass}`}
          disabled={!isLoggedIn}
        >
          {text}
        </button>
  )
}

function JobCard({ job }) {
  
  return (
    <div className="cajita">
      <article
        className="articles"
        data-modalidad={job.data.modalidad}
        data-nivel={job.data.nivel}
        data-technology={job.data.technology}
      >
        <h3>
          <Link className={styles.title} href={`/jobs/${job.id}`}>
            {job.titulo}
          </Link>
        </h3>
        <h4>
          {job.empresa} - {job.data.modalidad}
        </h4>
        <p>Nivel de experiencia: {job.data.nivel}</p>
        <small>{job.descripcion}</small>
      </article>
      <div className={styles.actions}>
        <Link href={`/jobs/${job.id}`} className={styles.details}>
          Ver detalles
        </Link>
        <JobCardAppyButton jobId={job.id} />
        <JobCardFavoriteButton jobId={job.id} />
      </div>
    </div>
  );
}

export default JobCard;
