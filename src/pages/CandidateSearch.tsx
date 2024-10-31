import CandidateSingleView from '../components/CandidateSingleView';
import { searchGithubUser, searchGithub } from '../api/API';
import { useState } from 'react';



const CandidateSearch = async () => {
  const [userList, setUserList] = useState([]);

  const fetchUserList = async() => {
    const data = await searchGithub();
    setUserList(data);
  }

  fetchUserList();

  console.log(userList)
  return (<div>
  <h1>CandidateSearch</h1>
  {/* <CandidateSingleView/> */}
  </div>)
};

export default CandidateSearch;
