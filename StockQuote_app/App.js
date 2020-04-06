import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {AppProvider} from './context/SearchContext'

import Navigation from './navigation/Navigation'


export default function App() {
  return (
<AppProvider>
  <NavigationContainer>
          <Navigation/>
    </NavigationContainer>  
</AppProvider>
  );
}

