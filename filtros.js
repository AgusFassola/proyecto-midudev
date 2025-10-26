const h2Busqueda= document.querySelector('.h2-busqueda');

const filter = document.querySelector('#filter-location');

filter?.addEventListener('change', (event)=>{
    const jobs= document.querySelectorAll('.cajita');

    const location = event.target.value;
    
    if(location){
        h2Busqueda.style.display = 'flex';
        jobs.forEach((job)=>{
            //const modalidad = job.dataset.modalidad;
            const modalidad = job.getAttribute('data-modalidad');
            /* if(location === "" || modalidad  === location){
                job.style.display = 'flex';
            }else{
                job.style.display = 'none';
            } */
           const inShown = (location === "" || modalidad  === location);
            job.classList.toggle('is-hiden', !inShown);
        });
    }  
});


const form= document.querySelector('#empleos-form');
form?.addEventListener('submit', (event)=>{
    event.preventDefault(); //evita que se recargue la página
    const formData= new FormData(form);
});

const tecla= document.addEventListener('keydown', (event)=>{
    console.log('Tecla presionada:', event.key);
});

const buscador= document.querySelector('#buscador');
buscador?.addEventListener('input', (event)=>{
    const searchTerm= event.target.value.toLowerCase();
    console.log('Buscando empleos que coincidan con:', searchTerm);
});

buscador.addEventListener('blur', (event)=>{
    console.log('El buscador perdió el foco');
});
