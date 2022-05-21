import { useState, useEffect } from "react"
import Button from "react-bootstrap/Button"

function GitHubImport() {
  const [first, setfirst] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      fetch("https://api.github.com/users/sigreyo/repos")
        .then((res) => res.json())
        .then((data) => {
          setfirst(data)
          setIsLoading(false)
        })
    }, 1000)
  }, [])

  return (
    <div>
      {isLoading && <div>Läser in repositories...</div>}
      {first.map((gh) => (
        <>
          <div className="github-card">
            <ul>
              <li>
                <Button
                  href={gh.html_url}
                  target="blank"
                  variant="secondary"
                  title={gh.description}
                >
                  {gh.name}
                </Button>
              </li>
            </ul>
          </div>
        </>
      ))}
    </div>
  )
}

export default GitHubImport
