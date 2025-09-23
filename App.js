import ColorChangerApp from './ColorChangerApp';
import React from 'react';
import { SafeAreaView } from 'react-native';
import CounterApp from './CounterApp';  
import MidtermAct01 from './MidtermAct01/MidtermAct01';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
     <MidtermAct01/>
     <ColorChangerApp/>
     <CounterApp/>
 
    </SafeAreaView>
  );
}
