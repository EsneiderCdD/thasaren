import { Link } from "react-router-dom";
import './styles/Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <h1>Thasaren</h1>
            </div>
            <div classname='themes'>
                <nav>
                    <Link to="/init"> Init </Link>
                    <Link to="/reactrouterdom"> React Router Dom </Link>
                </nav>
            </div>
        </div>

    );
}
export default Navbar
