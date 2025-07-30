import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NearbyResourcesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recursos Cercanos</Text>
      {/* Map component will go here */}
      <Text>Map and location services will be implemented here.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default NearbyResourcesScreen;