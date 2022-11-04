import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import {Card, ListGroup} from 'react-bootstrap';

import { login } from "../admin.actions";
import { loginSchema } from '../admin.schema';

function Login() {
    let navigate = useNavigate();

    return (
        <div className='container ' >
            <div className='row'>
                <div className='col-lg-2 ms-auto'>
                    <Link to='/registration'
                        style={{
                            position: "absolute",
                            transform: "translate(150px, -35px)"
                        }} 
                        className='btn btn-success'
                    >Registration</Link>
                </div>
            </div>
            
            <Formik
                initialValues={{
                    email: "",
                    password: ""
                }}
                validationSchema={loginSchema}
                onSubmit={(values, actions) => {
                    const fakeData = {
                        admin : {
                            email: "admin@gmail.com",
                            password: "admin"
                        },
                        moderator: {
                            email: "moderator@gmail.com",
                            password: "moderator"
                        },
                        parent: {
                            email: "parent@gmail.com",
                            password: "parent"
                        },
                        child: {
                            email: "child@gmail.com",
                            password: "child"
                        },
                    }
                    login(values)
                        .then(response => {
                            const adminToken = response.admin;
                            const moderatorToken = response.moderator;
                            const parentToken = response.parent;
                            const childToken = response.child;

                            if (values.email===fakeData.admin.email && values.password===fakeData.admin.password) {
                                localStorage.setItem("access_token", adminToken);

                                navigate("/admin/dashboard", { 
                                    state: { someData: adminToken } 
                                });
                            }

                            if (values.email===fakeData.moderator.email && values.password===fakeData.moderator.password) {
                                localStorage.setItem("access_token", moderatorToken);

                                navigate("/moderator/dashboard", { 
                                    state: { someData: moderatorToken } 
                                });
                            }

                            if (values.email===fakeData.parent.email && values.password===fakeData.parent.password) {
                                localStorage.setItem("access_token", parentToken);

                                navigate("/parent/dashboard", { 
                                    state: { someData: parentToken } 
                                });
                            }

                            if (values.email===fakeData.child.email && values.password===fakeData.child.password) {
                                localStorage.setItem("access_token", childToken);

                                navigate("/child/dashboard", { 
                                    state: { someData: childToken } 
                                });
                            }

                            if (values.email!==fakeData.child.email && values.email!==fakeData.parent.email && values.email!==fakeData.admin.email && values.email!==fakeData.moderator.email) {
                                alert("Error 404: user not found!")

                                navigate("/");
                            }
                        })
                    actions.setSubmitting(false);
                }}
            >
                {(formikprops) => {
                    return (
                        <Form className='row'>
                                <div className='col-lg-6'>
                                    <Card style={{ width: '25rem', marginBottom: "5px" }}>
                                        <Card.Header><h4>To login as Admin</h4></Card.Header>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>email: admin@gmail.com </ListGroup.Item>
                                            <ListGroup.Item>password: admin</ListGroup.Item>
                                        </ListGroup>
                                    </Card>

                                    <Card style={{ width: '25rem', marginBottom: "5px"  }}>
                                        <Card.Header><h4>To login as Moderator</h4></Card.Header>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>email: moderator@gmail.com </ListGroup.Item>
                                            <ListGroup.Item>password: moderator</ListGroup.Item>
                                        </ListGroup>
                                    </Card>

                                    <Card style={{ width: '25rem', marginBottom: "5px"  }}>
                                        <Card.Header><h4>To login as Parent</h4></Card.Header>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>email: parent@gmail.com </ListGroup.Item>
                                            <ListGroup.Item>password: parent</ListGroup.Item>
                                        </ListGroup>
                                    </Card>

                                    <Card style={{ width: '25rem', marginBottom: "5px"  }}>
                                        <Card.Header><h4>To login as Child</h4></Card.Header>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>email: child@gmail.com </ListGroup.Item>
                                            <ListGroup.Item>password: child</ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </div>

                                <div 
                                    className='col-lg-4 ms-auto me-auto login-box' 
                                    style={{ height: "290px"}} 
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
                                            htmlFor='password' className='form-label'
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
                                        <div className='row'>
                                            <div className='col-lg-6'>
                                                <button 
                                                    type="submit mb-4"  
                                                    className="btn btn-primary"
                                                >Login</button>
                                            </div>

                                            <div className='col-lg-6'>
                                                <Link 
                                                    to='/reset-password' 
                                                    style={{marginLeft:"10px"}}
                                                >Forgot Password</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           
                        </Form>
                    );
                }}
            </Formik>
        </div>
    )
}

export default Login;