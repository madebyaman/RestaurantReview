import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RestaurantRow({ place, id }) {
  return (
    <View
      key={place.name}
      style={[
        styles.row,
        { backgroundColor: id % 2 === 0 ? 'white' : '#eeeeee' },
      ]}
    >
      <View style={styles.edges}>
        <Text>{id + 1}</Text>
      </View>
      <View style={styles.nameAddress}>
        <Text>{place.name}</Text>
        <Text style={styles.address}>{place.address}</Text>
      </View>
      <View style={styles.edges}>
        <Text>Info</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  edges: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  nameAddress: { flexDirection: 'column', flex: 8 },
  address: { color: 'grey' },
});
