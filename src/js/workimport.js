import work from "./work.json"

function WorkData() {
  return (
    <div className="work">
      {work.map((data) => (
        <>
          <h4>
            {data.employer} - {data.workplace}
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

export default WorkData
