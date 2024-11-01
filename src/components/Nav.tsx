import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav">
      <p className="nav-item"><Link className="nav-link" to="/">Candidate Search</Link></p>
      <p className="nav-item"><Link className="nav-link" to="SavedCandidates">Saved Candidates</Link></p>
    </nav>
  )
};

export default Nav;
