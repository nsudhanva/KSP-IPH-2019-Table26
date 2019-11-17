import React from 'react';
import axios from 'axios';

class Threat extends React.Component {
  constructor() {
    super();

    this.state = {
      location_id: '',
      person_id: '',
      distance: '',
      beat_minutes: '',
      person_type: '',
      prev_records: '',
      no_of_people: '',
      no_of_cops: '',
      population: '',
      hr: '',
      minu: '',
      date: '',
      threatLevel: ''
    };
  }

  handleChange = e => {
    e.persist();
    this.setState(() => ({
      [e.target.name]: e.target.value
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    // if I use this it works
    const formData = {
      location_id: this.state.location_id,
      person_id: this.state.person_id,
      distance: this.state.distance,
      beat_minutes: this.state.beat_minutes,
      person_type: this.state.person_type,
      prev_records: this.state.prev_records,
      no_of_people: this.state.no_of_people,
      no_of_cops: this.state.no_of_cops,
      population: this.state.population,
      hr: this.state.hr,
      minu: this.state.minu,
      date: this.state.date
    };

    axios
      .get(
        `http://india-police-ml-api.herokuapp.com/recommend?location_id=${formData.location_id}&beat_minutes=${formData.person_id}&person_id=${formData.distance}&distance=1000${formData.beat_minutes}person_type=${formData.person_type}&prev_records=${formData.prev_records}&no_of_people=${formData.no_of_people}&no_of_cops=${formData.no_of_cops}&population=${formData.population}&hr=${formData.hr}&minu=${formData.minu}&date=${formData.date}`
      )
      .then(response => {
        console.log(response.data);
        this.setState({ threatLevel: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const container = {
      marginTop: '58px',
      marginBottom: '70px',
      marginRight: '10px',
      marginLeft: '10px',
      width: '100%',
      display: 'flex',
      // flexWrap: 'wrap',
      justifyContent: 'center'
    };
    return (
      <div style={container}>
        <div className="ui equal width grid">
          <div className="row">
            <div className="column">
              <div
                style={{ fontWeight: 'bold', textAlign: 'center' }}
                className="ui segment"
              >
                Threat Detection Form
              </div>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div className="ui segment">
                <form className="ui form">
                  <div className="field">
                    <label>Location</label>
                    <input
                      placeholder="Location"
                      type="text"
                      value={this.state.location_id}
                      onChange={this.handleChange}
                      name="location_id"
                    />
                  </div>

                  <div className="field">
                    <label>Person ID</label>
                    <input
                      placeholder="Person ID"
                      type="text"
                      value={this.state.person_id}
                      onChange={this.handleChange}
                      name="person_id"
                    />
                  </div>

                  <div className="field">
                    <label>Distance</label>
                    <input
                      placeholder="Distance"
                      type="text"
                      value={this.state.distance}
                      onChange={this.handleChange}
                      name="distance"
                    />
                  </div>

                  <div className="field">
                    <label>Beat Minutes</label>
                    <input
                      placeholder="Beat Minutes"
                      type="text"
                      value={this.state.beat_minutes}
                      onChange={this.handleChange}
                      name="beat_minutes"
                    />
                  </div>

                  <div className="field">
                    <label>Person Type</label>
                    <input
                      placeholder="Person Type"
                      type="text"
                      value={this.state.person_type}
                      onChange={this.handleChange}
                      name="person_type"
                    />
                  </div>

                  <div className="field">
                    <label>Previous Record</label>
                    <input
                      placeholder="Previous Record"
                      type="text"
                      value={this.state.prev_records}
                      onChange={this.handleChange}
                      name="prev_records"
                    />
                  </div>

                  <div className="field">
                    <label>Number of People</label>
                    <input
                      placeholder="Number of People"
                      type="text"
                      value={this.state.no_of_people}
                      onChange={this.handleChange}
                      name="no_of_people"
                    />
                  </div>

                  <div className="field">
                    <label>Population</label>
                    <input
                      placeholder="Population"
                      type="text"
                      value={this.state.population}
                      onChange={this.handleChange}
                      name="population"
                    />
                  </div>

                  <div className="field">
                    <label>History</label>
                    <input
                      placeholder="History"
                      type="text"
                      value={this.state.hr}
                      onChange={this.handleChange}
                      name="hr"
                    />
                  </div>

                  <div className="field">
                    <label>Minutes</label>
                    <input
                      placeholder="Minutes"
                      type="text"
                      value={this.state.minu}
                      onChange={this.handleChange}
                      name="minu"
                    />
                  </div>

                  <div className="field">
                    <label>Date</label>
                    <input
                      placeholder="Date"
                      type="text"
                      value={this.state.date}
                      onChange={this.handleChange}
                      name="date"
                    />
                  </div>

                  <div className="field">
                    <label>Number of Cops</label>
                    <input
                      placeholder="Number of Cops"
                      type="text"
                      value={this.state.no_of_cops}
                      onChange={this.handleChange}
                      name="no_of_cops"
                    />
                  </div>

                  <button
                    type="submit"
                    className="ui button"
                    onClick={e => this.handleSubmit(e)}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Threat;
