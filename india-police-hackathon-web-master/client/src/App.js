import React from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import GuestHeader from './components/people/Header/GuestHeader';
import AdminHeader from './components/admin/Header/AdminHeader';
import Home from './components/admin/pages/Home/Home';

import Overview from './components/admin/pages/Overview/Overview';
import Beats from './components/admin/pages/Beats/Beats';
import Police from './components/admin/pages/Police/Police';
import Threat from './components/admin/pages/Threat/Threat';
import Criminal from './components/admin/pages/Criminal/Criminal';
import Setting from './components/admin/pages/Setting/Setting';
import BeatForm from './components/admin/pages/Beats/BeatForm';
import PoliceForm from './components/admin/pages/Police/PoliceForm';
import CriminalForm from './components/admin/pages/Criminal/CrimeForm';

// import Login from './components/admin/pages/Login/Login';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      role: null
    };

    this.handleAuthentication = this.handleAuthentication.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.setState({
        isAuthenticated: true,
        role: localStorage.getItem('role')
      });
    }
  }

  handleAuthentication = (boolean, string) => {
    this.setState({
      isAuthenticated: boolean,
      role: string
    });
  };
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <AdminHeader />
          {/* {this.state.isAuthenticated && this.state.role === 'admin' ? (
            <AdminHeader />
          ) : (
            <GuestHeader />
          )} */}

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/overview" component={Overview} />
            <Route exact path="/threat" component={Threat} />

            <Route exact path="/beats" component={Beats} />
            <Route exact path="/police" component={Police} />
            <Route exact path="/criminal" component={Criminal} />
            <Route exact path="/setting" component={Setting} />
            <Route exact path="/beatForm" component={BeatForm} />
            <Route exact path="/policeForm" component={PoliceForm} />
            <Route exact path="/criminalForm" component={CriminalForm} />

            {/* <Route
              path="/login"
              render={props => {
                return (
                  <Login
                    {...props}
                    handleAuthentication={this.handleAuthentication}
                  />
                );
              }}
            />
*/}
            <Route
              path="/logout"
              render={props => {
                axios
                  .delete('/api/users/logoutALL', {
                    headers: {
                      'x-auth': localStorage.getItem('token')
                    }
                  })
                  .then(response => {
                    props.history.push('/');

                    this.setState(() => ({
                      isAuthenticated: false
                    }));

                    localStorage.clear();
                  });
              }}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
