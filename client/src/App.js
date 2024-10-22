import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Signup from './components/Signup';
import Project from './components/Project';
import projectsData from './data/projectsData'; // Importing project data
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                {/* Navbar */}
                <header>
                    <nav className="navbar">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/projects">Projects</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/signup">Signup</Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                {/* Routes */}
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
        </Router>
    );
}

// About component
function About() {
    return (
        <section className="about-section">
            <h2>About Me</h2>
            <p>
                I am an engineering student passionate about technology and innovation. I enjoy working on projects that combine my technical skills with creativity. My goal is to leverage my knowledge in engineering to solve real-world problems.
            </p>
            <p>
            
            </p>

            {/* Resume Section */}
            <section id="resume">
                <h2>My Resume</h2>
                <p>You can view or download my resume by clicking the link below:</p>
                <a href="/frontend_resume.pdf" target="_blank" rel="noopener noreferrer">
                    Download Resume
                </a>
            </section>
        </section>
    );
}

// Projects component
function Projects() {
    return (
        <section className="projects-section">
            <h2>My Projects</h2>
            <div className="project-list">
                {projectsData.map(project => (
                    <Project key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}

export default App;
