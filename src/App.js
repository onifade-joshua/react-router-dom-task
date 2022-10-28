import React from 'react';
import "./App.css";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom"
import Home from "../src/components/Home";
import About from "../src/components/About";
import Contact from "../src/components/Contact";

const App = () => {
    return (
        <div className='App'>
            <header className='App-header'>
                <h1 className='App-title'>Welcome</h1>
            </header>
            <div className='menu'>
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/about">About</Link></li>
                    <li> <Link to="/contact">Contact</Link></li>
                    <li>
                        <a href='/contact'>Following</a>
                    </li>
                </ul>
            </div>
            <div className='App-intro'>
                <Routes>
                    <Route exact path="/" element={<Home />}>

                    </Route>
                    <Route path="/about" element={<About />} />
                    <Route exact path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;