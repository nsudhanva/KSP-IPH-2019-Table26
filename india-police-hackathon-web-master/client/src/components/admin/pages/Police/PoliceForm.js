import React from 'react';
import axios from 'axios';

class PoliceForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      area: '',
      designation: '',
      serviceYear: '',
      isOnBeat: '',
      isAvailable: '',
      beat: '',
      fingerPrintID: ''
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
      name: this.state.name,
      area: this.state.area,
      designation: this.state.designation,
      serviceYear: this.state.serviceYear,
      isOnBeat: Boolean(this.state.isOnBeat),
      isAvailable: Boolean(this.state.isAvailable),
      beat: this.state.beat,
      fingerPrintID: this.state.fingerPrintID
    };

    axios
      .post('/api/police', formData)
      .then(response => {
        console.log(response.data);
        this.handleSubmit(response.data);

        this.setState(() => ({
          name: '',
          area: '',
          designation: '',
          serviceYear: '',
          isOnBeat: '',
          isAvailable: '',
          beat: '',
          fingerPrintID: ''
        }));
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
                Police's Form
              </div>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div className="ui segment">
                <form className="ui form">
                  <div className="field">
                    <label>Name</label>
                    <input
                      placeholder="Name"
                      type="text"
                      value={this.state.name}
                      onChange={this.handleChange}
                      name="name"
                    />
                  </div>
                  <div className="field">
                    <label>Area</label>
                    <input
                      placeholder="Area"
                      type="text"
                      value={this.state.area}
                      onChange={this.handleChange}
                      name="area"
                    />
                  </div>
                  <div className="field">
                    <label>Designation</label>
                    <input
                      placeholder="Designation"
                      type="text"
                      value={this.state.designation}
                      onChange={this.handleChange}
                      name="designation"
                    />
                  </div>
                  <div className="field">
                    <label>Year of Service</label>
                    <input
                      placeholder="Year of Service"
                      type="text"
                      value={this.state.serviceYear}
                      onChange={this.handleChange}
                      name="serviceYear"
                    />
                  </div>

                  <div className="field">
                    <label>On Beat?</label>
                    <input
                      placeholder="On Beat?"
                      type="text"
                      value={this.state.isOnBeat}
                      onChange={this.handleChange}
                      name="isOnBeat"
                    />
                  </div>
                  <div className="field">
                    <label>Is Available?</label>
                    <input
                      placeholder="Is Available?"
                      type="text"
                      value={this.state.isAvailable}
                      onChange={this.handleChange}
                      name="isAvailable"
                    />
                  </div>
                  <div className="field">
                    <label>Beat</label>
                    <input
                      placeholder="Beat"
                      type="text"
                      value={this.state.beat}
                      onChange={this.handleChange}
                      name="beat"
                    />
                  </div>
                  <div className="field">
                    <label>FingerPrint ID</label>
                    <input
                      placeholder="Finger Print ID"
                      type="text"
                      value={this.state.fingerPrintID}
                      onChange={this.handleChange}
                      name="fingerPrintID"
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

export default PoliceForm;
