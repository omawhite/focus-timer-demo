import { DripsyProvider, SafeAreaView, P, Container, Button, Box, Row } from 'dripsy';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { Alert, Platform, StyleSheet } from 'react-native';

const theme = {};

export default function App() {
  const onPressStart = useCallback(() => {
    if (Platform.OS === 'web') {
      return console.log('You pressed start');
    }
    return Alert.alert('You pressed start');
  }, []);
  return (
    <DripsyProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <Box
          sx={{
            backgroundColor: 'grey',
            width: 'auto',
            height: 'auto',
          }}>
          <Row>
            <Button title="one" onPress={() => null} />
            <Button title="two" onPress={() => null} />
            <Button title="three" onPress={() => null} />
          </Row>
          <P sx={{ textAlign: 'center' }}>25:00</P>
          <Button title={'Start'} onPress={onPressStart} />
        </Box>
        <P>Time to work!</P>
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
