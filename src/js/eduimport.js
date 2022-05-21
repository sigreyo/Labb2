import edu from "./edu.json"

function EduData() {
  return (
    <div className="edu">
      {edu.map((data) => (
        <>
          <h4>
            {data.school} - {data.course}
          </h4>
          <h5>
            {data.startdate} - {data.enddate}
          </h5>
          <p>{data.description}</p>
        </>
      ))}
    </div>
  )
}

export default EduData
