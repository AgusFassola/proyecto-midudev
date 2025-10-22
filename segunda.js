/* const botones=document.querySelectorAll('button');
//querySelectorAll devuelve siempre una lista

botones.forEach((boton)=>{
    boton.addEventListener('click', ()=>{
    boton.textContent='¡Aplicado!';
    boton.disabled=true;
    boton.classList.add('is-applied');
    });
});

 */

const resultados= document.querySelector('.resultados');

resultados?.addEventListener('click', (event)=>{
    const boton= event.target; //se guarda el elemento clickeado
    if(boton.tagName === 'BUTTON'){
        boton.textContent='¡Aplicado!';
        boton.disabled=true;
        boton.classList.add('is-applied');
    }
});
