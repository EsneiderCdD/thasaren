import { useRoutes } from 'react-router-dom';
import Layout from '../components/reusables/Layout/Layout';
import Home from '../pages/Home';
import Estructura from '../pages/Estructura';
import Tabla from '../pages/Tabla';
import Init from '../components/features/Init/Init';
import RRD from '../components/features/ReactRouterDOM/ReactRouterDOM';
import BasicCSS from '../components/features/CSS/BasicCSS/BasicCSS';
import HelloWorld from '../components/features/HelloWorld/HelloWorld';

const AppRoutes = () => {
    const element = useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [
                { index: true, element: <Home /> },
                { path: 'estructura', element: <Estructura /> },
                { path: 'tabla', element: <Tabla /> },
                { path: 'initialize', element: <Init /> },
                { path: 'rrd', element: <RRD /> },
                { path: 'basiccss', element: <BasicCSS /> },
                { path: 'helloworld', element: <HelloWorld /> },
            ],
        },
    ]);

    return element;
};

export default AppRoutes;
