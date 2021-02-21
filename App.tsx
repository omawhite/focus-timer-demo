import {
  DripsyProvider,
  SafeAreaView,
  P,
  Container,
  Button,
  Box,
  Row,
  Text,
  useDripsyTheme,
} from 'dripsy';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useState } from 'react';
import { Alert, Platform } from 'react-native';

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

const theme = {
  colors: {
    // theme ui says that you using at least have the default color keys set, but setting them doesn't seem to have an effect so I might deviate
    primary: '#db524d',
    secondary: 'white',
    secondaryTransparent: 'rgba(255,255,255,0.1)',
  },
  text: {
    body: {
      color: 'secondary',
    },
  },
};

export default function App() {
  const [timerMode, setTimerMode] = useState(TimerMode.POMODORO);
  const onPressStart = useCallback(() => {
    const message = `set timer for ${timerModeValueMap[timerMode]} minutes`;
    if (Platform.OS === 'web') {
      return console.info(message);
    }
    return Alert.alert(message);
  }, [timerMode]);
  return (
    <DripsyProvider theme={theme}>
      <SafeAreaView
        sx={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'primary',
        }}>
        <Box
          sx={{
            backgroundColor: 'secondaryTransparent',
          }}>
          <Text>Ummm</Text>
          {/* <Row sx={{ flex: 1 }}>
            <Button
              title={TimerMode.POMODORO}
              onPress={() => setTimerMode(TimerMode.POMODORO)}
              sx={{ mx: 5 }}
            />
            <Button
              title={TimerMode.SHORT_BREAK}
              onPress={() => setTimerMode(TimerMode.SHORT_BREAK)}
              sx={{ mx: 5 }}
            />
            <Button
              title={TimerMode.LONG_BREAK}
              onPress={() => setTimerMode(TimerMode.LONG_BREAK)}
              sx={{ mx: 5 }}
            />
          </Row>
          <P sx={{ textAlign: 'center', flex: 3 }}>{`${timerModeValueMap[timerMode]}`}</P>
          <Button title={'Start'} onPress={onPressStart} sx={{ flex: 1 }} /> */}
        </Box>
        <Text>Time to work!</Text>
        <StatusBar style="auto" />
      </SafeAreaView>
    </DripsyProvider>
  );
}
