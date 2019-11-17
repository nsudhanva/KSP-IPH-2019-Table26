import React from 'react';
import { Link } from 'react-router-dom';
// import { Dropdown } from 'semantic-ui-react';
import './AdminHeader.css';

class AdminHeader extends React.Component {
  render() {
    const HeaderStyle = {
      backgroundColor: '#161616',
      height: '100%',
      width: 240,
      position: 'fixed',
      margin: 0,
      top: 0,

      zIndex: 100
    };
    const MenuStyle = {
      fontSize: '30px',
      padding: '20px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column'
    };
    return (
      <div style={HeaderStyle}>
        <div style={MenuStyle}>
          <Link
            style={{
              top: '',
              backgroundColor: '#4120A9',
              fontWeight: 'bold',
              height: '50px'
            }}
            to="/"
          >
            Dashboard
          </Link>
          <Link to="/overview">Overview</Link>
          <Link to="/threat">Threa</Link>
          <Link to="/beats">Beats</Link>
          <Link to="/police">Police</Link>
          <Link to="/criminal">Criminal</Link>
          <Link to="/setting">Setting</Link>
          <Link to="/criminalForm"></Link>
          <Link to="/policeForm"></Link>
          <Link to="/beatForm"></Link>

          <Link to="/logout">Logout</Link>
        </div>
      </div>
    );
  }
}

export default AdminHeader;
