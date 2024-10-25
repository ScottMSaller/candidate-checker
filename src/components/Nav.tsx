const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <nav className="nav d-start">
        <p className="nav-item"><a className="nav-link" href="/">Candidate Search</a></p>
        <p className="nav-item"><a className="nav-link" href="/SavedCandidates">Saved Candidates</a></p>
    </nav>
  )
};

export default Nav;
