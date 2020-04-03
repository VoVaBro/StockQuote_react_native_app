import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {SearchProvider} from './context/SearchContext'

import Navigation from './navigation/Navigation'


export default function App() {
  return (
<SearchProvider>
  <NavigationContainer>
          <Navigation/>
    </NavigationContainer>  
</SearchProvider>
  );
}

