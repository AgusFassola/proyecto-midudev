import JobCard from "./JobCard";

export function JobList(){
  <>
          <JobCard
            titulo="Desarrollador Frontend React"
            empresa="Tech Solutions"
            descripcion="Únete a nuestro equipo de desarrollo frontend utilizando React para crear interfaces de usuario innovadoras."
            data={{ modalidad: "Remoto", nivel: "Junior", technology: "React" }}
          />
          <JobCard
            titulo="Ingeniero de Software Full Stack"
            empresa="Innovatech"
            descripcion="Buscamos un ingeniero de software con experiencia en desarrollo full stack para trabajar en proyectos emocionantes."
            data={{ modalidad: "Híbrido", nivel: "Senior", technology: "Node.js" }}
          />
          <JobCard
            titulo="Desarrollador Backend Node.js"
            empresa="DataCorp"
            descripcion="Estamos contratando un desarrollador backend con experiencia en Node.js para construir y mantener nuestras APIs."
            data={{ modalidad: "Presencial", nivel: "Mid-level", technology: "Node.js" }}
          />
    </>
}