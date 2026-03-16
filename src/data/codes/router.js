// === REACT ROUTER 6 ===

export const ejemploBrowser = `import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);`;

export const ejemploRoutes = `import { useRoutes } from 'react-router-dom';

const AppRoutes = () => {
    // Definición de rutas como objetos
    const element = useRoutes([
        {
            path: '/',
            element: <Layout />, // Layout principal (contiene Outlet)
            children: [
                { index: true, element: <Home /> }, // Ruta raíz /
                { path: 'logic', element: <Logic /> },
                { path: 'router', element: <RouterPage /> },
                // ... más rutas hijas
            ],
        },
    ]);

    return element;
};`;

export const ejemploOutlet = `import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

const Layout = () => {
    return (
        <div className="layout">
            <Header />
            
            <main className="main-content">
                {/* Aquí se renderizan las rutas hijas */}
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};`;

export const ejemploLink = `import { Link } from 'react-router-dom';

// Usar Link en lugar de <a> para evitar recargas de página
const Header = () => {
    return (
        <nav>
            <Link to="/">Inicio</Link>
            <Link to="/logic">Lógica</Link>
        </nav>
    );
};`;

export const ejemploRoutesComponent = `import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="users" element={<Users />}>
                <Route path=":id" element={<UserProfile />} />
            </Route>
        </Routes>
    );
};`;
