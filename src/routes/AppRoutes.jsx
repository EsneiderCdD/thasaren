import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home.jsx';
import ReactRouterDom from '../pages/ReactRouterDom.jsx';

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/reactrouterdom' element={<ReactRouterDom/>}/>
        </Routes>
    );
}
export default AppRoutes;