import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import DatatablePage from './Table';
import axios from 'axios';
class Beats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

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
            <h1>Beats</h1>
          </div>

          <div></div>

          <div style={HeaderRow} className="row grey"></div>
          <div style={{ textAlign: 'center' }} className="ui segment row"></div>
        </div>
        <Link
          to="/beatForm"
          style={{
            position: 'fixed',
            bottom: '0px',
            right: '0px',
            margin: '20px',
            height: 100,
            width: 100,
            borderRadius: '60%',
            backgroundColor: '#009688',
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
          <h1
            style={{
              verticalAlign: 'middle',
              marginTop: 28
            }}
          >
            +
          </h1>
        </Link>
      </div>
    );
  }
}

export default Beats;
