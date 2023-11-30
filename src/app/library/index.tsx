import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { router } from 'expo-router'

export default function Library() {
  return (
    <View style={styles.container}>
        <Button textColor="white" style={styles.button} onPress={() => router.push('/library/alphabetical/')}>
          Alphabétique
        </Button>
        <Button textColor="white" style={styles.button}>Zone de travail</Button>
        <Button textColor="white" style={styles.button}>Equipements</Button>
        <Button textColor="white" style={styles.button}>Mes Favoris</Button>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 350,
    height: 150,
    marginVertical: 10,
    borderRadius: 30,
    backgroundColor: '#003366',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
