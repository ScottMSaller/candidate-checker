import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';

const CandidateSearch = () => {
  const [users, setUsers] = useState([]);
  const [users2, setUsers2] = useState([]);
  useEffect(() => {
    const fetchData = async() => {
      try {
        const data = await searchGithub();
        setUsers(data);
      }
      catch(error) {
        console.log(error);
      } 
    }
    fetchData();
  }, []);
  
  useEffect(() => {
    const fetchData = async() => {
      users.map(async(user: any)=> {
      const data = await searchGithubUser(user.login)
      console.log(user.login)
      setUsers2(data);
      })
    }
    fetchData();
    console.log(users2)
  },[])

  
  return <div>
  <h1>CandidateSearch</h1>
  </div>;
};

export default CandidateSearch;
