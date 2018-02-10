import React, { Component } from 'react';

import Button from './components/global/button/button';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

class App extends Component {
    render() {
        return (
            <main className="page">
                <Button label={"Goodbye World"} />
            </main>
        );
    }
}

export default App;