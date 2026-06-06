import React from 'react'
import './RepoCard.css'
const RepoCard = ( { repo }) => {
  return (
    <div>
         <div className="repo-card">
      <a href={repo.html_url} target="_blank" rel="noreferrer">
        {repo.name}
      </a>
      {repo.description && <p>{repo.description}</p>}
      <div className="repo-stats">
        <span>⭐ {repo.stargazers_count}</span>
        {repo.language && <span>🔵 {repo.language}</span>}
        <span>🍴 {repo.forks_count}</span>
      </div>
    </div>
        </div>
  )
}

export default RepoCard