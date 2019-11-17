                <Dropdown
                    placeholder="Select Area"
                    fluid
                    selection
                    options={this.state.dropdown}
                    onChange={this.handleChange}
                    value={this.state.area}
                    name="area"
                  />

                 

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

                  {/* Dropdown */}
                  <Dropdown
                    placeholder="Select Friend"
                    fluid
                    selection
                    // options={friendOptions}
                  />

                  <Form.Group inline>
                    <label>Active</label>
                    <Form.Radio
                      label="True"
                      value={this.state.active}
                      name="active"
                      checked={value === 'true'}
                      onChange={this.handleChange}
                    />
                    <Form.Radio
                      label="False"
                      value={this.state.active}
                      name="active"
                      checked={value === 'false'}
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  {/* dropdown */}
                  <div className="field">
                    <label>Police Stations</label>
                    <input
                      placeholder="Police Stations"
                      type="text"
                      value={this.state.policestation}
                      onChange={this.handleChange}
                      name="policestation"
                    />
                  </div>

                  {/* radiobutton */}
                  <div className="grouped fields">
                    <label>Rowdies Checked</label>
                    <div className="field">
                      <label>
                        <input type="checkbox" />
                        This one
                      </label>
                    </div>
                    <div className="field">
                      <label>
                        <input type="checkbox" />
                        That one
                      </label>
                    </div>
                  </div>

                  {/* radiobutton */}
                  <div className="grouped fields">
                    <label>Rowdies Checked</label>
                    <div className="field">
                      <label>
                        <input type="checkbox" />
                        This one
                      </label>
                    </div>
                    <div className="field">
                      <label>
                        <input type="checkbox" />
                        That one
                      </label>
                    </div>
                  </div>

                  {/* radiobutton */}
                  <div className="grouped fields">
                    <label>Rowdies Checked</label>
                    <div className="field">
                      <label>
                        <input type="checkbox" />
                        This one
                      </label>
                    </div>
                    <div className="field">
                      <label>
                        <input type="checkbox" />
                        That one
                      </label>
                    </div>
                  </div>

                  {/* radiobutton */}
                  <div className="field">
                    <label>Completed</label>
                    <input
                      placeholder="Completed"
                      type="text"
                      value={this.state.completed}
                      onChange={this.handleChange}
                      name="completed"
                    />
                  </div>

                  {/* string */}
                  <div className="field">
                    <label>Description</label>
                    <input
                      placeholder="Description"
                      type="text"
                      value={this.state.description}
                      onChange={this.handleChange}
                      name="description"
                    />
                  </div>
