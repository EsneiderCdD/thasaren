import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to = "/init"> Init </Link>
            <br />
            <Link to = "/reactrouterdom"> React Router Dom </Link>
        </nav>
    );
}
export default Navbar
