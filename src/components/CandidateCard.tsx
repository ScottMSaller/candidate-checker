import CandidateI from "../interfaces/Candidate.interface";

function CandidateCard(person: CandidateI){
    console.log(person.login)

    return (
        <div>
            <img src={person.avatar_url}></img>
            <h2>{person.login}</h2>
            <p>Location: {person.location}</p>
            <p>Email: {person.email}</p>
            <p>Company: {person.company}</p>
            <p>Bio: {person.bio}</p>
        </div>
    )
}

export default CandidateCard;