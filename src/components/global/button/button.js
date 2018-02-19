import React, { Component } from 'react';

import './button.css';

class Button extends Component {
  render() {
    const { className, label } = this.props;

    return (
        <span className={className}>{label}</span>
    );
  }
}

export default Button;