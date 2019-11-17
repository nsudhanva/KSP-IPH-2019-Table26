import React from 'react';

class Footer extends React.Component {
  render() {
    var style = {
      backgroundColor: 'white',
      borderTop: '1px solid #E7E7E7',
      position: 'fixed',
      bottom: 0,
      margin: 0,
      height: '100px',
      width: '100%'
    };

    return (
      <div style={style} className="ui equal width height grid">
        <button
          style={{
            width: '100px',
            height: '100px',
            bordeRadius: '50%',
            backgroundColor: '#009688'
          }}
        >
          +
        </button>
      </div>
    );
  }
}

export default Footer;
