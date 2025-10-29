import React from 'react'
import { useState } from 'react';

function JobCard({data, titulo, empresa, descripcion}){
            
            const [isApplied, setIsApplied] = useState(false);

            function handleClick(){
                setIsApplied(!isApplied);
            }

            const text = isApplied ? 'Aplicado' : 'Aplicar'
            const buttonClass = isApplied ? 'is-applied' : ''
            return (
                <div className="cajita">
                    <article className="articles"
                        data-modalidad={data.modalidad}
                        data-nivel={data.nivel}
                        data-technology={data.technology}
                    >
                    <h3>{titulo}</h3>
                    <h4>{empresa} - {data.modalidad}</h4>
                    <p>Nivel de experiencia: {data.nivel}</p> 
                    <small>{descripcion}</small> 
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
