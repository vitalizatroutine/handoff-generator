import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { label } = this.props;

    return (
        <span className="button">{label}</span>
    );
  }
}

export default Button;