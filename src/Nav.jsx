import { Link } from 'react-router-dom';


const NavBar = () => {
    return ( 
        <div className="nav-container">
            <ul>
          <li> <Link to={`/`}>Home</Link></li>
          <li> <Link to="/">About</Link></li>
          <li> <Link to="/">Service</Link></li>
            <li id="logo">AOD</li>
            <li><Link to="/">Portfolio</Link></li>
           <li> <Link to="/">Blog</Link></li>
            <li><Link to="/">Contact</Link></li>
            </ul>
        </div>
     );
}
 
export default NavBar;