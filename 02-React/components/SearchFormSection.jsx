import { useId } from "react";

export function SearchFormSection({ onSearch, onTextFilter }){

const idText=useId();
const idTechnology=useId();
const idLocation=useId();
const idExperienceLevel=useId();

const handleSubmit=(event)=>{
  event.preventDefault();

  const formData = new FormData(event.target);

  const filters={
    search: formData.get(idText),
    technology: formData.get(idTechnology),
    location: formData.get(idLocation),
    experienceLevel: formData.get(idExperienceLevel),
  };
 console.log(filters);
  onSearch(filters);
}

 const handleTextChange =(event) =>{
  const text = event.target.value;
  onTextFilter(text);
 }

  return(
    <form onSubmit={handleSubmit} id="empleos-form" role="search">
          <section className="caja-buscador">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-search">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
            <input name={idText} id="buscador" type="search" placeholder="Buscar empleos" 
            onChange={handleTextChange} />
            <button type="submit" >Buscar</button>
          </section>
          <section className="selects">
            <select name={idTechnology} id="filter-technology">
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
            <select name={idLocation} id="filter-location">
              <option value="">Ubicación</option>
              <option value="Remoto">Remoto</option>
              <option value="Presencial">Presencial</option>
              <option value="Híbrido">Híbrido</option>
            </select>
            <select name={idExperienceLevel} id="filter-experience-level">
              <option value="">Nivel de experiencia</option>
              <option value="Junior">Junior</option>
              <option value="Semisenior">Semisenior</option>
              <option value="Senior">Senior</option>
            </select>
          </section>
      </form>
  )
}
