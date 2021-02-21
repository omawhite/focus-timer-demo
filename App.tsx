import { DripsyProvider, SafeAreaView, P, Container, Button, Box, Row } from 'dripsy';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useState } from 'react';
import { Alert, Platform, StyleSheet } from 'react-native';

enum TimerMode {
  POMODORO = 'Pomodoro',
  SHORT_BREAK = 'Short Break',
  LONG_BREAK = 'Long Break',
}

const timerModeValueMap = {
  [TimerMode.POMODORO]: 25,
  [TimerMode.SHORT_BREAK]: 5,
  [TimerMode.LONG_BREAK]: 10,
};

const theme = {};

export default function App() {
  const [timerMode, setTimerMode] = useState(TimerMode.POMODORO);
  const onPressStart = useCallback(() => {
    const message = `set timer for ${timerModeValueMap[timerMode]} minutes`;
    if (Platform.OS === 'web') {
      return console.info(message);
    }
    return Alert.alert(message);
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
            <Button title={TimerMode.POMODORO} onPress={() => setTimerMode(TimerMode.POMODORO)} />
            <Button
              title={TimerMode.SHORT_BREAK}
              onPress={() => setTimerMode(TimerMode.SHORT_BREAK)}
            />
            <Button
              title={TimerMode.LONG_BREAK}
              onPress={() => setTimerMode(TimerMode.LONG_BREAK)}
            />
          </Row>
          <P sx={{ textAlign: 'center' }}>{`${timerModeValueMap[timerMode]}`}</P>
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
