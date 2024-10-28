function CandidateSingleView(person: any){
    console.log(person.person.login)

    return (
        <div>
            <img src={person.person.avatar_url}></img>
            <h2>{person.person.login}</h2>
            <p>Location: {person.person.location}</p>
            <p>Email: {person.person.email}</p>
            <p>Company: {person.person.company}</p>
            <p>Bio: {person.person.bio}</p>
            <button id="no">No</button>
            <button id="yes">Yes</button>
        </div>
    )
}

export default CandidateSingleView;