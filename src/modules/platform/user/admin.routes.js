import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import Login from './components/login.component';
import PrivateRoute from '../../core/private-route';

function AdminRoutes () {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    return (
        <Routes>
            <Route path={pathname} element={<Login />} />

            <Route 
                path="/page-1" 
                element={
                    <PrivateRoute>
                        <h1 className='text-center mb-4'>This is Page 1</h1>
                        <div className="col-lg-2 me-auto ms-auto text-center mt-4">
                            <button 
                                className="btn btn-success text-center" 
                                onClick={() => {navigate('/')}}
                            >Dashboard</button>
                        </div>
                    </PrivateRoute>
                } 
            />

            <Route 
                path="/page-2" 
                element={
                    <PrivateRoute>
                        <h1 className='text-center'>This is Page 2</h1>
                        <div className="col-lg-2 me-auto ms-auto text-center mt-4">
                            <button 
                                className="btn btn-success text-center" 
                                onClick={() => {navigate('/')}}
                            >Dashboard</button>
                        </div>
                    </PrivateRoute>
                } 
            />
            
            <Route 
                path="/page-3" 
                element={
                    <PrivateRoute>
                        <h1 className='text-center'>This is Page 3</h1>
                        <div className="col-lg-2 me-auto ms-auto text-center mt-4">
                            <button 
                                className="btn btn-success text-center" 
                                onClick={() => {navigate('/')}}
                            >Dashboard</button>
                        </div>
                    </PrivateRoute>
                } 
            />
        </Routes>
    );
}

export default AdminRoutes;