import JobCard from "./JobCard";

export function JobList({jobsData}){
  return(
  <>
    <h2 className="h2-busqueda">Resultado de la búsqueda:</h2>
        <p className="resultado"></p>
        <section className="resultados">  
          {jobsData.map((job) => (
            <JobCard
              key={job.id}
              job={job}
            />
          ))}
        </section>
    </>
  )
}