
import React, {useState} from 'react'
import axios from 'axios'
import './App.css'
//Circular progress
import { CircularProgress, Box, Typography } from '@mui/material';

import SearchBar from './Components/SearchBar'
import RepoGrid from './Components/RepoGrid';
import GithubCard from './Components/GithubCard';


const App = () => {
  const [user, setUser] = useState('');
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const[loading, setLoading] = useState(false);

   const searchUser = async (username) => {
      setLoading(true);
      setError(null);
      try{
        
        //fetch user data
        const response = 
        await axios.get( `https://api.github.com/users/${username}`)
        setUser(response.data);  
        //user has data in response.data
        console.log(response.data);
      
        //fetch repos
        const reposResponse = 
        await axios.get(`https://api.github.com/users/${username}/repos`);
        setRepos(reposResponse.data)
        console.log(reposResponse.data);
    
      }
      catch(error) {
        console.error('Error fetching user data:', error);
        setError(error);
      }
      finally{
        setLoading(false);
      }
    }

  return (
   
   
      <div>
      <SearchBar userSearch={searchUser}/>
      {loading ? (
        <Box 
          display="flex" 
          flexDirection="column"
          justifyContent="center" 
          alignItems="center" 
          minHeight="50vh"
        >
          <CircularProgress size={60} thickness={4} color="primary" />
          <Typography variant="body1" sx={{ mt: 2, color: '#666' }}>
            Fetching GitHub Profile...
          </Typography>
        </Box>
      ) : (
        /* 3. This only renders when loading is false */
        <>
          {user && <GithubCard user={user} />}
          {repos.length > 0 && <RepoGrid repos={repos} />}
        </>
      )}
      </div>
  )
}

export default App