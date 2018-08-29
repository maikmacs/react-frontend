import React, { Component } from 'react';
import Jumbotron from '../Jumbotron/Jumbotron';

import PropiedadesList from '../PropiedadesList/PropiedadesList';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="container-fluid">
        <Jumbotron />
        <PropiedadesList history={this.props.history} />
      </main>
    );
  }
}

export default Home;
