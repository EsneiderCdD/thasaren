import './styles/NavigationGrid.css'
import Square from '../ReusableSquare/ReusableSquare'
import { Link } from 'react-router-dom';

function NavbarGrid() {
    return (
        <nav>
            <Link to="/initialize">
                <Square />
            </Link>
        </nav>
    )
}
export default NavbarGrid