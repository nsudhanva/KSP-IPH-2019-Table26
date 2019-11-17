import React from 'react';
import axios from 'axios';

class CriminalForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      area: '',
      adress: '',
      active: '',
      priority: '',
      age: ''
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
      adress: this.state.adress,
      active: this.state.active,
      priority: this.state.priority,
      age: this.state.age
    };

    axios
      .post('api/rowdySheeters', formData)
      .then(response => {
        console.log(response.data);
        this.handleSubmit(response.data);

        this.setState(() => ({
          name: '',
          area: '',
          adress: '',
          active: '',
          priority: '',
          age: ''
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
                Criminal's Form
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
                    <label>Address</label>
                    <input
                      placeholder="Address"
                      type="text"
                      value={this.state.adress}
                      onChange={this.handleChange}
                      name="adress"
                    />
                  </div>

                  <div className="field">
                    <label>Active</label>
                    <input
                      placeholder="Active"
                      type="text"
                      value={this.state.active}
                      onChange={this.handleChange}
                      name="active"
                    />
                  </div>

                  <div className="field">
                    <label>Priority</label>
                    <input
                      placeholder="Priority"
                      type="text"
                      value={this.state.priority}
                      onChange={this.handleChange}
                      name="priority"
                    />
                  </div>

                  <div className="field">
                    <label>Age</label>
                    <input
                      placeholder="Age"
                      type="text"
                      value={this.state.age}
                      onChange={this.handleChange}
                      name="age"
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

export default CriminalForm;
