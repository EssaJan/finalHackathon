import React from 'react'
import {Text, View} from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper';
import Navigation from './component/navigation/Navigation'
function App(){
  return(
    <PaperProvider>
    <Navigation />
  </PaperProvider>
  )
}

export default App;