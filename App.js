import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const restaurants = [
    { name: 'React Cafe ☕', address: '123 Anywhere street' },
    { name: 'Typescript Breakfast 🍞', address: '123 Javascript street' },
    { name: 'Javascript Burgers 🍔', address: 'Behind Programming Square' },
  ];
  return (
    <View style={styles.app}>
      <Text style={styles.header}>Restaurant Review</Text>
      {restaurants.map((res, id) => (
        <View key={id} style={styles.row}>
          <View style={styles.edges}>
            <Text>{id + 1}</Text>
          </View>
          <View style={styles.nameAddress}>
            <Text>{res.name}</Text>
            <Text style={styles.address}>{res.address}</Text>
          </View>
          <View style={styles.edges}>
            <Text>Info</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 40,
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '600',
    color: 'tomato',
  },
  app: {
    flex: 1,
  },
  row: {
    flex: 1,
  },
  edges: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  nameAddress: { flexDirection: 'column', flex: 6 },
  address: { color: 'gray' },
});
