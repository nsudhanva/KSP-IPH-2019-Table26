import React, { Component } from 'react';
import axios from 'axios';
import './Overview.css';
import { Link } from 'react-router-dom';

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidUpdate() {
    axios
      .get('/api/beat/counts')
      .then(response => {
        this.setState({
          data: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
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
    console.log(this.data);
    return (
      <div style={container}>
        <div className="ui equal width grid">
          <div style={HeaderRow} className="row grey">
            <h1 style={{ verticalAlign: 'center' }}>Overview</h1>
          </div>

          <div className="row">
            <div className="column">
              <div className="ui segment">
                <h1>Number of Cops</h1>
                <h2>{this.state.data[0]}</h2>
              </div>
            </div>

            <div className="column">
              <div className="ui segment">
                <h1>Ongoing Beats</h1>
                <h2></h2>
              </div>
            </div>

            <div className="column">
              <div className="ui segment">
                <h1>Area</h1>
                <h2></h2>
              </div>
            </div>

            <div className="column">
              <div className="ui segment">
                <h1>Beats Completed</h1>
                <h2></h2>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <div className="ui segment">
              <img src={require('../../../../data/cops_on_duty-min.png')}></img>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="ui segment">
              <img
                src={require('../../../../data/crime_per_area-min.png')}
              ></img>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="ui segment">
              <img src={require('../../../../data/distance-min.png')}></img>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="ui segment">
              <img
                src={require('../../../../data/hour_distribution-min.png')}
              ></img>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="ui segment">
              <img
                src={require('../../../../data/time_spent_beats_avg-min.png')}
              ></img>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="ui segment">
              <img
                src={require('../../../../data/type_of_crime-min.png')}
              ></img>
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

export default Overview;
