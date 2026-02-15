import { useRoutes } from 'react-router-dom';
import Layout from '../components/reusables/Layout/Layout';
import Home from '../pages/Home';
import Estructura from '../pages/Estructura';
import Tabla from '../pages/Tabla';

import ViewCodePage from '../pages/ViewCodePage';
import Origin from '../pages/Origin';
import Entity from '../pages/Entity';
import List from '../pages/List';
import Logic from '../pages/Logic';

const AppRoutes = () => {
    const element = useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [
                { index: true, element: <Home /> },
                { path: 'estructura', element: <Estructura /> },
                { path: 'tabla', element: <Tabla /> },

                { path: 'idecss', element: <ViewCodePage /> },
                { path: 'origin', element: <Origin /> },
                { path: 'entity', element: <Entity /> },
                { path: 'list', element: <List /> },
                { path: 'logic', element: <Logic /> },
            ],
        },
    ]);

    return element;
};

export default AppRoutes;
