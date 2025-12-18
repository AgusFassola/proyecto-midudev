import React from 'react'
import { useState } from 'react';
import { Link } from "./Link"

function JobCard({job}){
            
            const [isApplied, setIsApplied] = useState(false);

            function handleClick(){
                setIsApplied(!isApplied);
            }

            const text = isApplied ? 'Aplicado' : 'Aplicar'
            const buttonClass = isApplied ? 'is-applied' : ''

            return (
                <div className="cajita">
                    <article className="articles"
                        data-modalidad={job.data.modalidad}
                        data-nivel={job.data.nivel}
                        data-technology={job.data.technology}
                    >
                    <h3>
                        <Link href={job.titulo}
                            >{job.titulo}
                        </Link>
                    </h3>
                    <h4>{job.empresa} - {job.data.modalidad}</h4>
                    <p>Nivel de experiencia: {job.data.nivel}</p> 
                    <small>{job.descripcion}</small> 
                    </article>
                    <button 
                        onClick={handleClick}
                        className={`boton-importante ${buttonClass}`}
                        disabled={isApplied}
                    >{text}</button>
                </div>
            )
        }

export default JobCard;
