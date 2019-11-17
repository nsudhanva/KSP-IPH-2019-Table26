import React from 'react';
import axios from 'axios';
import { Dropdown, Form } from 'semantic-ui-react';
import Select from 'react-select';

class BeatForm extends React.Component {
  constructor() {
    super();

    this.state = {
      area: [],
      code: '',
      timing: { from: '', to: '' },
      sensitiveBodies: [
        { name: '', location: { latitude: '', longitude: '' } }
      ],
      active: '',
      priority: '',
      nearByPoliceStations: [{ name: '' }, { distance: '' }],
      policeOnBeat: [],
      rowdiestoBeChecked: [],
      rowdiesChecked: [],
      isCompleted: '',
      description: '',
      selectedOption: ''
    };
  }

  componentDidMount() {
    axios
      .get('/api/area')
      .then(response => {
        let areaLocal = [];
        for (let i = 0; i < response.data.length; i++) {
          areaLocal.push({
            key: response.data[i]._id,
            value: response.data[i]._id,
            text: response.data[i]._id
          });
        }

        this.setState({
          dropdown: areaLocal
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleSelect = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  handleChange = e => {
    e.persist();
    console.log(e.target.value);
    this.setState(() => ({
      [e.target.name]: e.target.value
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    const formData = {
      area: this.state.area,
      code: this.state.code,
      timing: { from: this.state.from, to: this.state.to },
      sensitiveBodies: {
        name: this.state.name,
        location: {
          latitude: this.state.latitude,
          longitude: this.state.longitude
        }
      },
      active: Boolean(this.state.active),
      priority: this.state.priority,
      nearByPoliceStations: [
        { name: this.state.stationName },
        { distance: this.state.distance }
      ],
      policeOnBeat: this.state.policeOnBeat,
      rowdiestoBeChecked: this.state.rowdiestoBeChecked,
      rowdiesChecked: this.state.rowdiesChecked,
      isCompleted: Boolean(this.state.isCompleted),
      description: this.state.description
    };

    console.log(formData);
    axios
      .post('/api/beat', formData)
      .then(response => {
        console.log(response.data);
        this.handleSubmit(response.data);

        this.setState(() => ({
          area: '',
          code: '',
          timing: { from: '', to: '' },
          sensitiveBodies: [
            {
              name: '',
              location: {
                latitude: '',
                longitude: ''
              }
            }
          ],
          active: '',
          priority: '',
          nearByPoliceStations: [{ name: '' }, { distance: '' }],
          policeOnBeat: [],
          rowdiestoBeChecked: [],
          rowdiesChecked: [],
          isCompleted: '',
          description: ''
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
                Beat's Form
              </div>
            </div>
          </div>

          <div className="row">
            <div className="column">
              <div className="ui segment">
                <form className="ui form">
                  <div className="field">
                    <label>Code</label>
                    <input
                      placeholder="Code"
                      type="text"
                      value={this.state.code}
                      onChange={this.handleChange}
                      name="code"
                    />
                  </div>
                  <div className="field">
                    <label>Time From</label>
                    <input
                      placeholder="Time From"
                      type="time"
                      value={this.state.from}
                      onChange={this.handleChange}
                      name="from"
                    />
                  </div>
                  <div className="field">
                    <label>Time To</label>
                    <input
                      placeholder="Time To"
                      type="time"
                      value={this.state.to}
                      onChange={this.handleChange}
                      name="to"
                    />
                  </div>

                  <div className="field">
                    <label>Active</label>
                    <select
                      value={this.state.active}
                      onChange={this.handleSelect}
                    >
                      <option name="active" value="true">
                        True
                      </option>
                      <option name="active" value="false">
                        False
                      </option>
                    </select>
                  </div>

                  <div className="field">
                    <label>Sensitive Bodies&gt;</label>
                    <select
                      value={this.state.name}
                      onChange={this.handleSelect}
                    >
                      <option value="kathriguppe">Kathrigupe</option>
                      <option value="banashankari">Banashankari</option>
                      <option value="jpnagar">JP Nagar</option>
                    </select>
                  </div>

                  <div>
                    <label>Latitude</label>
                    <input
                      placeholder="Latitude"
                      type="text"
                      value={this.state.latitude}
                      onChange={this.handleChange}
                      name="latitude"
                    />
                  </div>

                  <div>
                    <label>Longitude</label>
                    <input
                      placeholder="Code"
                      type="text"
                      value={this.state.longitude}
                      onChange={this.handleChange}
                      name="longitude"
                    />
                  </div>

                  <div className="field">
                    <label>Priority&gt;</label>
                    <select
                      value={this.state.priority}
                      onChange={this.handleChange}
                    >
                      <option value="low">Low</option>
                      <option value="medium">High</option>
                      <option value="high">Medium</option>
                    </select>
                  </div>

                  <div className="field">
                    <label>Near By Police Station&gt;</label>
                    <select
                      value={this.state.name}
                      onChange={this.handleChange}
                    >
                      <option value="banashankri">Banashankari</option>
                      <option value="kathrigupe">Kathrigupe</option>
                      <option value="jpnagar">JP Nagar</option>
                      <option value="indrinagar">Indranagar</option>
                    </select>
                  </div>

                  {/*                   
policeOnBeat: [{ type: Schema.Types.ObjectId, ref: 'Police' }],
rowdiestoBeChecked: [{ type: Schema.Types.ObjectId, ref: 'RowdySheeter' }],
rowdiesChecked: [{ type: Schema.Types.ObjectId, ref: 'RowdySheeter' }],
isCompleted: { type: Boolean },
description: { type: String }  */}
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

export default BeatForm;

//   area: '',
//   code: '',
//   timing: '',
//   sensitiveBodies: '',
//   active: '',
//   priority: '',
//   nearByPoliceStations: '',
//   policeOnBeat: '',
//   rowdiestoBeChecked: '',
//   rowdiesChecked: '',
//   isCompleted: '',
//   description: '',

// location: [
//   { Vijaynagar: '5dcfcae11bed4601446fce16' },
//   { Ramurthinagar: '5dcfcae11bedh3n8446fce16' },
//   { Kempapura: 'osm7cae11bed4601446fce16' },
//   { Hennur: '5dcfe11bedbw0n01446fce16' },
//   { Yelahanka: '5dcfcae11bed4pam846fce16' }
// ];
