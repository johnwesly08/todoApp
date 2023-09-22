import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Login.jsx';
import SignUp from "./SignUp.jsx";
import Application from './TodoForm.jsx';

export default function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact Component={Login} />
                <Route path="/login"  Component={Login} />
                <Route path="/signup" Component={SignUp} />
                <Route path="/home" Component={Application} />
            </Routes>
        </Router>
    );
};


