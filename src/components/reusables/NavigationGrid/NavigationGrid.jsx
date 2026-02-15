import './styles/NavigationGrid.css'
import Square from '../ReusableSquare/ReusableSquare'
import { Link } from 'react-router-dom';

function NavbarGrid() {
    return (
        <nav>
            <Link to="/origin">
                <Square title="Origin" type="rectangle" />
            </Link>
            <Link to="/entity">
                <Square title="Entity" type="square" />
            </Link>
            <Link to="/list">
                <Square title="List" type="rectangle" />
            </Link>
            <Link to="/logic">
                <Square title="Logic" type="square" />
            </Link>
        </nav>
    )
}
export default NavbarGrid