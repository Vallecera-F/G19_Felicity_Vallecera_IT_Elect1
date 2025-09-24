import React from 'react';
import { SafeAreaView } from 'react-native';
import MessengerApp from './Activity5/ColorChangerApp';
import ColorChangerApp from './Activity5/CounterApp';
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
       <ColorChangerApp/>
    <CounterApp/>
    </SafeAreaView>
  );
}