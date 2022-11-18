import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavegationLogged from './routes/NavegationLogged'
import Navigations from './routes/Navigations'


const App = () => {
  const [dato, setDato] = useState(true);

  return (
    <>
      <NavigationContainer>
        { dato ? (
          <Navigations/>
        ):(
          <NavegationLogged />
        )}
      </NavigationContainer>
    </>
  );
};

export default App;
