import React from 'react';
import { SafeAreaView } from 'react-native';
import MessengerApp from './MidAct1/MessengerApp';
import CommentApp from './MidAct1/CommentApp';
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
       <CommentApp/>
    <MessengerApp/>
    </SafeAreaView>
  );
}
