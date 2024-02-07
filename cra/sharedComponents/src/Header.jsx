
import React from 'react';

const HeaderShared = () => {
  return (
    <header style={headerStyle}>
      <h1 style={colorStyle}>Mon Header</h1>
    </header>
  );
};

const headerStyle = {
  backgroundColor: 'whitesmoke',
  color: '#fff',
  padding: '1rem',
};


const colorStyle = {
  color: 'black',
  padding: '1rem',
};

export default HeaderShared;
