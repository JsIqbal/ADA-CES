import { useNavigate } from 'react-router-dom';

import Footer from '../common/footer.component';

function Layout (props) {
    let navigate = useNavigate();
    const logout = () => {
        console.log(localStorage)
        localStorage.clear();
        navigate('/login');
    };
    return (
        <div className="Layout">
            <div className='col-lg-2 ms-auto'>
                <button className='btn btn-danger' onClick={logout}>logout</button>
            </div>
            <div>
                {props.children}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Layout;
