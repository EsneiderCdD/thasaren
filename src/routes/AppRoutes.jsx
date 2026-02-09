import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home.jsx';
import HelloWorld from '../pages/HelloWorld.jsx';

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/helloworld' element={<HelloWorld/>}/>
        </Routes>
    );
}
export default AppRoutes;