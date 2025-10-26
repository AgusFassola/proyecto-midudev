const resultados= document.querySelector('.resultados');

fetch("./data.json")
    .then((response) =>{
        return response.json();
    })
    .then((jobs) =>{
        jobs.forEach((job) =>{
            const div = document.createElement('div');
            div.className = 'cajita';
            div.dataset.modalidad= job.data.modalidad;
            div.dataset.nivel= job.data.nivel;
            div.dataset.technology= job.data.technology;
            div.innerHTML= `
                <article  class="articles">
                    <h3>${job.titulo}</h3>
                    <h4>${job.empresa} | ${job.data.modalidad} </h4>
                    <p>Nivel de Experiencia: ${job.data.nivel}</p>
                    <small>${job.descripcion}</small>                
                    </article>
                <button id="boton-importante">Aplicar</button>
            `;
            resultados.appendChild(div);
        });
    });

