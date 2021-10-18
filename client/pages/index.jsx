import React  from '@mtfe/turbo/react';
import Button from '@components/Button';

import './index.css';

// @docs http://turbo.sankuai.com/docs/client.md
class Index extends React.Component {
  state = {
    times: 0
  }
  handleClick() {
    let { times } = this.state;
    this.setState({ times: ++times });
  }
  handleDelete() {
    let { times } = this.state;
    if (times > 0) {
      this.setState({times: --times});
    }
  }
  render() {
    const { times } = this.state;
    return (
      <div className="myapp" >
        <h1>一个基于Turbo的栗子{'/·-·/'} </h1>
        <Button text={ `Click me ++! ${times}` } onClick={ this.handleClick.bind(this) } />
        <Button text={ `Click me --! ${times}` } onClick={ this.handleDelete.bind(this) } />
      </div>
    );
  }
}

export default Index;
