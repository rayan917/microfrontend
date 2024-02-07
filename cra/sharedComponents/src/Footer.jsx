import React from 'react';

const FooterShared = () => {
  return (
    <footer style={footerStyle}>
      <p style={textStyle}>© 2024 Mon Application. Tous droits réservés.</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '1rem',
  position: 'fixed',
  bottom: '0',
  width: '100%',
};

const textStyle = {
  margin: '0',
};

export default FooterShared;
