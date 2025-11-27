import { useId } from "react";
import { useState } from "react";


const useSearchForm = ( idText, idExperienceLevel, idTechnology, idLocation, onSearch) => {
  
  const [searchText, setSearchText] = useState("");

  
  /* const handleTextChange =(event) =>{
   const text = event.target.value;
    onTextFilter(text);
 }
 */

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const filters = {
      text: formData.get(idText),
      technology: formData.get(idTechnology),
      location: formData.get(idLocation),
      experienceLevel: formData.get(idExperienceLevel),
    };
    console.log(filters);

    setSearchText(filters.text);

    /*  console.log("target",ev);
     handleTextChange()
    */
    onSearch(filters);
  };

  return { searchText, handleSubmit };
};

  export function SearchFormSection({ onSearch }) {
    const idText = useId();
    const idTechnology = useId();
    const idLocation = useId();
    const idExperienceLevel = useId();

    const { handleSubmit } = useSearchForm(
      idText,
      idExperienceLevel,
      idTechnology,
      idLocation,
      onSearch
    );
  

  return (
    <form onChange={handleSubmit} id="empleos-form" role="search">
      <section className="caja-buscador">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-search"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg>
        <input
          name={idText}
          id="buscador"
          type="search"
          placeholder="Buscar empleos"
        />
      </section>
      <section className="selects">
        <select name={idTechnology} id="filter-technology">
            <option value="">Tecnología</option>
            <optgroup label="Tecnologías populares">
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="react">React</option>
              <option value="nodejs">Node.js</option>
            </optgroup>
            <option value="java">Java</option>
            <hr />
            <option value="csharp">C#</option>
            <option value="c">C</option>
            <option value="c++">C++</option>
            <hr />
            <option value="ruby">Ruby</option>
            <option value="php">PHP</option>
          </select>

          <select name={idLocation} id="filter-location">
            <option value="">Ubicación</option>
            <option value="remoto">Remoto</option>
            <option value="cdmx">Ciudad de México</option>
            <option value="guadalajara">Guadalajara</option>
            <option value="monterrey">Monterrey</option>
            <option value="barcelona">Barcelona</option>
          </select>

          <select name={idExperienceLevel} id="filter-experience-level">
            <option value="">Nivel de experiencia</option>
            <option value="junior">Junior</option>
            <option value="mid">Mid-level</option>
            <option value="senior">Senior</option>
            <option value="lead">Lead</option>
          </select>
      </section>
    </form>
  );
};
