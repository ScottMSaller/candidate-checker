import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import CandidateSingleView from '../components/CandidateSingleView';
import CandidateI from '../interfaces/CandidateInterface';
const CandidateSearch = () => {
  const [usersArray, setUsersArray] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [index, setIndex] = useState(1);
  useEffect(() => {

    const fetchData = async() => {
      try {
        const data = await searchGithub();
        let usernameData = data.map((user: { login: any; }) => {
          return user.login;
        })
        setUsersArray(usernameData);
      }
      catch(error) {
        console.log(error);
      } 
    }
    fetchData();
  }, []);

  const fetchMoreData = async() => {
    const moreData = await searchGithubUser(usersArray[index]);
    const currentUser = filterResponse<CandidateI>(moreData, ['avatar_url', 'login', 'location', 'email', 'company', 'bio']);
    return setCurrentUser(currentUser);
  }
  useEffect(() => {
    fetchMoreData();
  }, []);

  console.log(currentUser);

  function filterResponse<T>(response: any, keys: Array<keyof T>): T {
    const filtered: Partial<T> = {};
    keys.forEach(key => {
      if (key in response) {
        filtered[key] = response[key];
      }
    });
    return filtered as T;
  }


  return <div>
  <h1>CandidateSearch</h1>
  <CandidateSingleView person={currentUser}/>
  </div>
};

export default CandidateSearch;
