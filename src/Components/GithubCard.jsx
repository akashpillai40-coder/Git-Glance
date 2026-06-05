import React from "react";

const GithubCard = ({ user }) => {
  return (
  <div>
    {/*Avatar*/}
    {user.avatar_url && (
      <img 
      src={user.avatar_url}
      alt={user.login}
      width={150}
      />
    )}
   
    {/*Username*/}
    
    <h2>{user.name || user.login}</h2>
    
    {/*Bio*/}
    {user.bio && <p>{user.bio}</p>}

    {user.location && <p>{user.location}</p>}
    {/*Followers and Following*/}
    {user.followers && (
        <p>Followers: {user.followers} | Following: {user.following}</p>
    
    )}
      {/* Website */}

      {user.blog && (
        <a
          href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`}
          > Portfolio 
              
        </a>
      )}
      {/* Stats row */}
      <div>
        {user.public_repos && (
          <span>Repos: {user.public_repos}</span>
        )}
        {user.public_gists && (
          <span>Gists: {user.public_gists}</span>
        )}
      </div>
      {/* Github Link */}
      {user.html_url && ( 
        <a  
       href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        >View Profile</a> 
        )}
      
    
      
    
    </div>
  )
};

export default GithubCard;
