import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


export default function Header() {



  return (
    <div>
      <div className="container">
        <header className="d-flex justify-content-between align-items-center py-3">
          <ul className="nav nav-pills">
            <li className="nav-item"><Link to="/home" className="nav-link">Home</Link></li>
            <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
            <li className="nav-item"><a href="#" className="nav-link">About</a></li>
          </ul>
          <div className="d-flex align-items-center"> {/* Use Bootstrap classes for alignment */}
                <Link to="/profile" className="nav-link pr-3"> {/* Update the path to your profile page */}
              <i className="bi bi-person"></i>{/* Use the Font Awesome user icon */}
            </Link>        
            {/* Add other icons or links as needed */}
          </div>
        </header>
      </div>
    </div>
  );
}



     {/* <li className="nav-item"><Link to="/dashboard" className="nav-link"> Dashboard </Link> </li> */}