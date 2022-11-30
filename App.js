import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import HeaderStyles from './HeaderStyles';

export default function App() {
  const [search, setSearch] = useState('');
  console.log('search', search);
  const restaurants = [
    { name: 'React Cafe ☕', address: '123 Anywhere street' },
    { name: 'Typescript Breakfast 🍞', address: '123 Javascript street' },
    { name: 'Javascript Burgers 🍔', address: 'Behind Programming Square' },
  ];

  return (
    <View style={styles.app}>
      <Text style={HeaderStyles.header}>Restaurant Review</Text>
      <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={(text) => setSearch(text)}
        value={search}
      />
      {restaurants
        .filter(
          (place) =>
            // So first time when search is '' or falsy, it doesn't go to next condition. It returns true and gives back every item. If we had not used `!search` then filter would need to check even for 1st condition.
            !search || place.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((res, id) => (
          <View
            key={id}
            style={[
              styles.row,
              { backgroundColor: id % 2 === 0 ? 'white' : '#eeeeee' },
            ]}
          >
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
  app: {
    flex: 1,
  },
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
  input: {
    marginBottom: 30,
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f5f5f5',
  },
});
