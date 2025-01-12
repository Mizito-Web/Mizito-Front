import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Tasks from './pages/Tasks';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import MainLayout from './layouts/mainLayout';
import AuthLayout from './layouts/AuthLayout';
import NewProject from './components/Projects/NewProject';
import ProjectDetails from './components/Projects/ProjectDetails';
import ProjectPage from './pages/ProjectPage';

const App = () => {
    return (

            <Routes>
                {/* Auth Pages (Login, Register) */}
                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>

                {/* Main Pages (Dashboard, Projects, Tasks, Profile) */}
                <Route element={<MainLayout />}>

                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/new" element={<NewProject />} />
                  
                    <Route path="/projects/:id" element={<ProjectPage />} />

                    <Route path="/tasks" element={<Tasks />} />
                    <Route path="/profile" element={<Profile />} />
                </Route>
            </Routes>

    );
};

export default App;
