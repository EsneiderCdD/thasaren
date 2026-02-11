import { useRoutes } from 'react-router-dom';
import Layout from '../components/reusables/Layout/Layout';
import Home from '../pages/Home';
import Estructura from '../pages/Estructura';
import Tabla from '../pages/Tabla';

const AppRoutes = () => {
    const element = useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [
                { index: true, element: <Home /> },
                { path: 'estructura', element: <Estructura /> },
                { path: 'tabla', element: <Tabla /> },
            ],
        },
    ]);

    return element;
};

export default AppRoutes;
