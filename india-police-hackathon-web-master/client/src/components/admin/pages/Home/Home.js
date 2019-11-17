import React, { Component } from 'react';

class Home extends Component {
  render() {
    const container = {
      marginLeft: 220,
      marginRight: 20
    };

    const HeaderRow = {
      margin: 0,
      marginLeft: -20,
      justifyContent: 'center',
      width: '100%'
    };
    return (
      <div style={container}>
        <div className="ui equal width grid">
          <div style={HeaderRow} className="row grey"></div>
          <a
            style={{ width: '100%', height: '500px' }}
            href="https://nsudhanva.github.io/frames/marker.html"
          >
            TEXT
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
