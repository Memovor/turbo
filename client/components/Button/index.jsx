import React, { Component, cls } from '@mtfe/turbo/react';

import './index.css';

class Button extends Component {
  render() {
    const { text, className, ...others } = this.props;
    return (
      <button className={ cls('button', className) } { ...others } >
        { text }
      </button>
    );
  }
}

export default Button;
