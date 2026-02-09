import './styles/Home.css';
import Navbar from '../components/features/Navbar/Navbar.jsx'

function Home() {
    return (
        <div className='container'>
            <h1 className="hola">React Notes + JavaScript</h1>
            <h2>Pagina web de notas</h2>
            <p>By Esneider Cadavid</p>
            <Navbar></Navbar>
        </div>
    );
}

export default Home;