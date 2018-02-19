import React, { Component } from 'react';

import '../form/form.css';
import './input.css';

class Input extends Component {
    render() {
        const { inputClass, labelClass, label, value, placeholder, required } = this.props;

        return (
            <div className={"field"}>
                <span className={"field_label " + labelClass}>{label}</span>
                <input type="text" className={"field_input " + inputClass} required={required} placeholder={placeholder} value={value}></input>
            </div>
        );
    }
}

export default Input;