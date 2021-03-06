import React, { Component } from 'react';

import './App.css';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Input from "./components/global/input/input";

const options = {
    title: 'Sample Ticket Title',
    one: '',
    two: ''
};

class App extends Component {
    render() {
        return (
            <main className="page">
                <Header title={options.title} />
                <form className={"form"}>
                    <div className={"form_item"}>
                        <Input label={"First Input"} value={options.one} placeholder={"goldcorp2017ir"} required={true} />
                    </div>
                    <div className={"form_item"}>
                        <Input label={"Second Input"} value={options.two} placeholder={"ir.goldcorp.com"} required={true} />
                    </div>
                </form>
                <Footer />
            </main>
        );
    }
}

export default App;