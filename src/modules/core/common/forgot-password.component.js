import { useNavigate } from "react-router-dom";

function ForgotPassword (props) {
    const navigate = useNavigate();

    return (
        <div className="forgot-password">
            <h1 className="mt-4 mb-4 text-center">Here will be the Password reset form</h1>
            <div className="col-lg-2 me-auto ms-auto text-center mt-4">
                <button 
                    className="btn btn-success text-center" 
                    onClick={() => {navigate('/login')}}
                >Home</button>
            </div>
        </div>
    );
}

export default ForgotPassword;