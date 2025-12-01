import { useParams, useNavigate, Link } from "react-router";
import { useState, useEffect } from 'react';

export function JobDetail() {
    const { id } = useParams();
    const Navigate = useNavigate();

    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch(`https://jscamp-api.vercel.app/api/jobs?${id}`)
        .then((response) =>{
          if (!response.ok) throw new Error('job not found');
          response.json()
        }) 
        .then((data) => {
          setJob(data);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, [id])

    if(loading){
      return <div style={{maxWidth:'1280px', margin: '0 auto', padding:'0 1rem'}}>
        <div>
          <p>Cargando...</p>
        </div>
      </div>;
    }

    if(error || !job){
      return(
       <div style={{maxWidth:'1280px', margin: '0 auto', padding:'0 1rem'}}>
        <div>
          <h2>Error al cargar el empleo</h2>
          <button onClick={()=> Navigate('/')}>
            Volver al inicio
          </button>
        </div>
      </div>
      );
    }

  return (
    <div style={{maxWidth:'1280px', margin: '0 auto', padding:'0 1rem'}}>
      <nav>
        <Link
          hrefLang="/search"
        >Empleos</Link>
      </nav>
    </div>
  );
}