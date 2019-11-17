import React, { Component } from 'react';

class Setting extends Component {
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
          <div style={HeaderRow} className="row grey">
            <h1>Settings</h1>
          </div>
          <div className="row">
            <div className="column">
              <div className="ui segment">1</div>
            </div>
            <div className="column">
              <div className="ui segment">2</div>
            </div>
            <div className="column">
              <div className="ui segment">3</div>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div className="ui segment">1</div>
            </div>
            <div className="column">
              <div className="ui segment">2</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Setting;
