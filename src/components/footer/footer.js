import React, { Component } from 'react';
import Button from "../global/button/button";

import './footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <section className="footer_components footer_components--right">
                    <Button className="button button--dark-slate" label={"Preview"} />
                    <Button className="button button--citrus" label={"Generate"} />
                </section>
            </footer>
        );
    }
}

export default Footer;