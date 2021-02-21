import { DripsyProvider, SafeAreaView, P } from 'dripsy';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';

const theme = {};

export default function App() {
  return (
    <DripsyProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <P>Open up App.tsx to start working on your app!</P>
        <StatusBar style="auto" />
      </SafeAreaView>
    </DripsyProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
