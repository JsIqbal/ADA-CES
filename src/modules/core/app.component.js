import React from "react";
import { Routes, Route, Navigate  } from 'react-router-dom';

import Dashboard from "../platform/user/components/dashboard.component";
import PublicRoute from "./public-route";
import PrivateRoute from "./private-route";
import ModDashboard from "../moderator/components/mod-dashboard.component";
import ChildDashboard from "../child/components/child-dashboard.component";
import ParentDashboard from "../parent/components/parent-dashboard.component";
import Layout from "./components/layout.component";
import Registration from "./common/registration.component";
import ForgotPassword from "./common/forgot-password.component";

import { AdminClientRoutes, Login } from "../platform/user";
import { ChildClientRoutes } from "../child";
import { ModClientRoutes } from "../moderator";
import { ParentClientRoutes } from "../parent";

function App() {
    return (
      <div className="app">
            <Routes>
                <Route path="/registration" element={<Registration />} />
                <Route path="/reset-password" element={<ForgotPassword />} />
                <Route path="/" element={<Navigate to="/login" />} />
                
                <Route 
                    path="/login" 
                    element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    }
                />

                <Route 
                    path="/admin/dashboard" 
                    element={
                        <PrivateRoute>
                            <Layout>
                                <Dashboard />
                            </Layout>
                        </PrivateRoute>
                    }
                />
                <Route 
                    path="/admin/dashboard/*" 
                    element={<AdminClientRoutes />} 
                />

                <Route 
                    path="/moderator/dashboard" 
                    element={
                        <PrivateRoute>
                            <Layout>
                                <ModDashboard />
                            </Layout>
                        </PrivateRoute>
                    }
                />
                <Route 
                    path="/moderator/dashboard/*" 
                    element={<ModClientRoutes />} 
                />

                <Route 
                    path="/parent/dashboard" 
                    element={
                        <PrivateRoute>
                            <Layout>
                                <ParentDashboard />
                            </Layout>
                        </PrivateRoute>
                    }
                />
                <Route 
                    path="/parent/dashboard/*" 
                    element={<ParentClientRoutes />} 
                />

                <Route 
                    path="/child/dashboard" 
                    element={
                        <PrivateRoute>
                            <Layout>
                                <ChildDashboard />
                            </Layout>
                        </PrivateRoute>
                    }
                />
                <Route 
                    path="/child/dashboard/*" 
                    element={<ChildClientRoutes />} 
                />
            </Routes>
      </div>
    );
}
 
export default App;