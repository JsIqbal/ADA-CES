import React from "react";
import { Navigate } from "react-router-dom";

function PublicRoute ({ children }) {
    const loggedInUser = localStorage.getItem("access_token");
    console.log(loggedInUser);
    
    if (loggedInUser === "admin") {
        return <Navigate to="/admin/dashboard" replace />
    }
    if (loggedInUser === "moderator") {
        return <Navigate to="/moderator/dashboard" replace />
    }
    if (loggedInUser === "parent") {
        return <Navigate to="/parent/dashboard" replace />
    }
    if (loggedInUser === "child") {
        return <Navigate to="/child/dashboard" replace />
    }
    return children;
}

export default PublicRoute;