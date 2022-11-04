import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';

import { registarSchema } from '../../platform/user/admin.schema';
import { registration } from "../../platform/user/admin.actions";

function Registration () {
    const navigate = useNavigate();

    return (
        <div className='container'>
            <Formik
        initialValues={{
            email: "",
            password: ""
        }}
        validationSchema={registarSchema}
        onSubmit={(values, actions) => {
            registration(values)
                .then(() => {
                    navigate('/login');
                })
                .catch(error => {
                    alert("Registration has been Complete!")
                })
            actions.setSubmitting(false);
        }}
    >
        {(formikprops) => {
            return (
                <Form className='row'>
                    <div 
                        className='col-lg-4 ms-auto me-auto login-box' 
                        style={{ height: "390px"}} 
                    >
                        <div className='form-group m-auto'>
                            <label 
                                htmlFor='email' 
                                className='form-label'
                            >Email Address</label>
                            <Field 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                name="email" 
                            />
                            <div className='invalid-feedback d-block'>
                                <ErrorMessage name="email" />
                            </div>
                        </div>

                        <div className='form-group m-auto'>
                            <label 
                                htmlFor='password' 
                                className='form-label'
                            >Password</label>
                            <Field 
                                type="password" 
                                className="form-control" 
                                id="password" 
                                name="password" 
                            />
                            <div className='invalid-feedback d-block'>
                                <ErrorMessage name="password" />
                            </div>
                            <br />
                        </div>

                        <div className='form-group m-auto'>
                            <label 
                                htmlFor='confirmPassword' className='form-label'
                            >Confirm-Password</label>
                            <Field 
                                type="password" 
                                className="form-control" 
                                id="confirmPassword" 
                                name="confirmPassword" 
                            />
                            <div className='invalid-feedback d-block'>
                                <ErrorMessage name="confirmPassword" />
                            </div>
                            <br />
                        </div>
                    
                        <div className='form-group m-auto'>
                            <button type="submit mb-4"  className="btn btn-primary col-4">Registar</button>
                        </div>
                    </div>
                </Form>
            );
        }}
    </Formik>
        </div>
    );
}

export default Registration;