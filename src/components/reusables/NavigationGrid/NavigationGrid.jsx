import './styles/NavigationGrid.css'
import Square from '../ReusableSquare/ReusableSquare'
import { Link } from 'react-router-dom';

function NavbarGrid() {
    return (
        <nav>
            <Link to="/logic">
                <Square title="Logic" type="square" />
            </Link>

            <Link to="/structures">
                <Square title="Structures" type="rectangle" />
            </Link>

            <Link to="/cycle">
                <Square title="Cycle" type="square" />
            </Link>
            <Link to="/action">
                <Square title="Action" type="rectangle" />
            </Link>
            <Link to="/dom">
                <Square title="DOM" type="square" />
            </Link>
            <Link to="/async">
                <Square title="Async" type="rectangle" />
            </Link>
            <Link to="/api">
                <Square title="API" type="square" />
            </Link>
            <Link to="/class">
                <Square title="Class" type="rectangle" />
            </Link>
            <Link to="/memory">
                <Square title="Memory" type="square" />
            </Link>
        </nav>
    )
}
export default NavbarGrid