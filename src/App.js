import React from 'react';
import ShowProvider from './states/showMenu/Provider';
import Routes from './routes';

const App = () => {
  return (
    <ShowProvider>
      <Routes/>
    </ShowProvider>

  );
}

export default App;
