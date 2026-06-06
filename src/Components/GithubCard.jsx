import './GithubCard.css'
import React from 'react'

const GithubCard = ({ user }) => {
  if (!user) return null
  return (
    <div className="github-card">
      {user.avatar_url && (
        <img className="github-avatar" src={user.avatar_url} alt={user.login} />
      )}
      <div className="github-info">
        <h2 className="github-name">{user.name || user.login}</h2>
        {user.bio && <p className="github-bio">{user.bio}</p>}
        {user.location && <p className="github-location">📍 {user.location}</p>}
        {user.followers && (
          <p className="github-follow">
            <span>{user.followers}</span> Followers · <span>{user.following}</span> Following
          </p>
        )}
        <div className="github-stats">
          {user.public_repos && <span className="github-stat">📁 {user.public_repos} Repos</span>}
          {user.public_gists && <span className="github-stat">📝 {user.public_gists} Gists</span>}
        </div>
        <div className="github-links">
          {user.blog && (
            <a className="github-link" href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`}>
              Portfolio
            </a>
          )}
          {user.html_url && (
            <a className="github-link" href={user.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
export default GithubCard