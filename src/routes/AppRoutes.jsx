import { useRoutes } from 'react-router-dom';
import Layout from '../components/reusables/Layout/Layout';
import Home from '../pages/Home';
import Estructura from '../pages/Estructura';
import Tabla from '../pages/Tabla';
import Init from '../components/features/Init/Init';
import RRD from '../components/features/ReactRouterDOM/ReactRouterDOM';
import BasicCSS from '../components/features/CSS/BasicCSS/BasicCSS';
import HelloWorld from '../components/features/HelloWorld/HelloWorld';
import Pruebas from '../pages/Pruebas';
import ViewCode from '../components/reusables/ViewCode/ViewCode';
import { ejemploBasico } from '../components/reusables/ViewCode/styles/code/data';

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
                { path: 'pruebas', element: <Pruebas /> },
                { path: 'idecss', element: <ViewCode code={ejemploBasico} /> }
            ],
        },
    ]);

    return element;
};

export default AppRoutes;
