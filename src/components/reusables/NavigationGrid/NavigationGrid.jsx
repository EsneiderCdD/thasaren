import './styles/NavigationGrid.css'
import Square from '../ReusableSquare/ReusableSquare'
import { Link } from 'react-router-dom';

function NavbarGrid() {
    return (
        <nav>
    
            <Link to="/entity">
                <Square title="Entity" type="square" />
            </Link>
            <Link to="/list">
                <Square title="List" type="rectangle" />
            </Link>
            <Link to="/logic">
                <Square title="Logic" type="square" />
            </Link>
            <Link to="/cycle">
                <Square title="Cycle" type="rectangle" />
            </Link>
            <Link to="/action">
                <Square title="Action" type="square" />
            </Link>
            <Link to="/dom">
                <Square title="DOM" type="rectangle" />
            </Link>
            <Link to="/async">
                <Square title="Async" type="square" />
            </Link>
            <Link to="/api">
                <Square title="API" type="rectangle" />
            </Link>
            <Link to="/class">
                <Square title="Class" type="square" />
            </Link>
            <Link to="/memory">
                <Square title="Memory" type="rectangle" />
            </Link>
        </nav>
    )
}
export default NavbarGrid