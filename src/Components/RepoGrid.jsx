import React from 'react'
import RepoCard from './RepoCard'
import './RepoGrid.css'

const RepoGrid = ( { repos }) => {
    if(!repos || repos.length === 0 ) return null;
  return (
    <div>
          <div className="repo-grid">
      <h3>Top Repositories</h3>
      <div className="repos-container">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
    </div>
  )
}

export default RepoGrid