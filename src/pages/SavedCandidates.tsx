import { useEffect, useState } from 'react'
import CandidateI from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';
const SavedCandidates = () => {
  const [userList, setList] = useState<CandidateI[]>([]);

  useEffect(() => {
    const data = localStorage.getItem('userArray');
    if (data) {
      setList(JSON.parse(data));
    }
  }, [])
  console.log(userList)
  function createList(): JSX.Element[] {
    return userList.map((user: CandidateI) => {
      return (
        <div style={{padding: "10px", margin: "auto"}}>
        <CandidateCard
          avatar_url={user?.avatar_url || ''}
          login={user?.login || ''}
          location={user?.location || ''}
          email={user?.email || ''}
          company={user?.company || ''}
          bio={user?.bio || ''} />

          <button
  onClick={() => {
    // Retrieve and parse the existing array from localStorage
    const currentArray = JSON.parse(localStorage.getItem('userArray') || '[]');
    const updatedArray = currentArray.filter((data: { login: string; }) => data.login !== user.login);
    localStorage.setItem('userArray', JSON.stringify(updatedArray));
    window.location.href = '/SavedCandidates'
  }}
>
  Remove
</button>
</div>
      );
      
    });
  }
  
  return (
    <>
      <h1>Potential Candidates</h1>
      <div style={{display: "flex", flexDirection: "row", flexWrap: 'wrap',}}>{createList()}</div>
      
    </>
  );
};

export default SavedCandidates;
