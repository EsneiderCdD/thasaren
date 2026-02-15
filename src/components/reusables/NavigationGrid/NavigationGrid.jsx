import './styles/NavigationGrid.css'
import Square from '../ReusableSquare/ReusableSquare'
import { Link } from 'react-router-dom';

function NavbarGrid() {
    return (
        <nav>
            <Link to="/initialize">
                <Square title="Initialize" type="square" />
            </Link>
            <Link to="/rrd">
                <Square title="React Router DOM" type="rectangle" />
            </Link>
            <Link to="/basiccss" >
                <Square title="Basic CSS" type="square" />
            </Link>
            <Link to="/helloworld" >
                <Square title="Hello World" type="rectangle" />
            </Link>
            <Link to="/origin">
                <Square title="Origin" type="rectangle"/>
            </Link>
        </nav>
    )
}
export default NavbarGrid