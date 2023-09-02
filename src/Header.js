import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Header() {
  return (
    <div>
      <div className="container">
    <header className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
        <li className="nav-item"><Link to="/" className="nav-link"> Home </Link> </li>
        <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
        <li className="nav-item"><a href="#" className="nav-link">About</a></li>
      </ul>
    </header>
  </div>
    </div>
  );
}
