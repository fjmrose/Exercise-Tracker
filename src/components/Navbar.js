import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className="navbar bg-light container">
            <h4><Link to='/'>Home</Link></h4>
            <h4><Link to='/users'>Users</Link></h4>
            <h4><Link to='/add'>Add Exercise</Link></h4>
            <h4><Link to='/stats'>Stats</Link></h4>
        </nav>
    )
}

export default Navbar
