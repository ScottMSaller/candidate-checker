import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/api';
import CandidateI from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';
const CandidateSearch = () => {
  const [userList, setList] = useState([]);
  const [index, setIndex] = useState(0);
  const [currentUser, setUser] = useState<CandidateI | null>(null);
  useEffect(() => {
    const fetchUserList = async() => {
    const data  = await searchGithub();
    const tempData = data.map((user: any)=> {
      return user.login;
    });
    setList(tempData);
    };
    fetchUserList();
  },[]);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await searchGithubUser(userList[index]);
      const keys = ['avatar_url', 'login', 'location', 'email', 'company', 'bio'];
      const filteredData = keys.reduce((obj: { [key: string]: any }, key) => {
        if (data.hasOwnProperty(key)) {
          obj[key] = data[key];
        }
        return obj;
      }, {});
  
      console.log(filteredData);
      setUser(filteredData as CandidateI)
    };
  
    fetchUser();
  }, [userList, index]);

  return (
    <div>
    <h1>CandidateSearch</h1>
    <CandidateCard
      avatar_url={currentUser?.avatar_url || ''} 
      login={currentUser?.login || ''} 
      location={currentUser?.location || ''} 
      email={currentUser?.email || ''} 
      company={currentUser?.company || ''} 
      bio={currentUser?.bio || ''} 
    />
    <button onClick={() => setIndex(index + 1)}>No</button>
    <button onClick={() => { 
      setIndex(index + 1); 
      const currentArray = JSON.parse(localStorage.getItem('userArray') || '[]');
      currentArray.push(currentUser);
      localStorage.setItem('userArray', JSON.stringify(currentArray)); }}>Yes</button>
    </div>
  )
};

export default CandidateSearch;
