import { useParams } from "react-router";
export function JobDetail() {
    const { id } = useParams();
  return (
    <div>
      <h2>Job Detail Page</h2>
      <p>Details about a specific job will be shown here.</p>
        {id}
    </div>
  );
}