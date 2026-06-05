
import React, {useState} from 'react'
import SearchBar from './Components/SearchBar'
import axios from 'axios'
import LeetcodeCard from './Components/LeetcodeCard';
import GithubCard from './Components/GithubCard';

const App = () => {
  const [user, setUser] = useState('');
  const [error, setError] = useState(null);
  const[loading, setLoading] = useState(false);

   const searchUser = async (username) => {
      setLoading(true);
      try{
        
        const response = 
        await axios.get( `https://api.github.com/users/${username}`)
        setUser(response.data);  
        //user has data in response.data
        console.log(response.data);
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
      <GithubCard user={user} />
      </div>
  )
}

export default App