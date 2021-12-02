import React, { useCallback, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => {
  const [counter, setCounter] = useState<number>(0);

  const addCount = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  const substractCount = useCallback(() => {
    setCounter(counter - 1);
  }, [counter]);

  useEffect(() => {
    if (counter === 10) {
      setCounter(0);
    }
  }, [counter]);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>{counter}</Text>
      <Button title="+1" onPress={() => addCount()} />
      <Button title="-1" onPress={() => substractCount()} />
    </View>
  );
};

export default App;
