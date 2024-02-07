import React from 'react';
import LocalButton from './Button';
import HeaderShared from '../../sharedComponents/headers/header';

const App = () => (
  <div>
    <HeaderShared />
    <div>
      <h1>Basic Host-Remote</h1>
      <h2>Remote</h2>
      <LocalButton />
    </div>
  </div>
);

export default App;
