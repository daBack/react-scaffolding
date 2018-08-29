import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Index extends Component {
  render() {
    return (
      <div className="page1">
        <h1>React-scaffolding</h1>
        {/* <Link className="link" to="https://www.google.se">Link to Github</Link> */}
        <a href="https://github.com/daBack/react-scaffolding">Github</a>
      </div>
    );
  }
}

export default Index;
