import { useState } from 'react';
import { StyleSheet, ScrollView, Text, TextInput, View } from 'react-native';
import Header from 'components/Header';

export default function App() {
  const [search, setSearch] = useState('');
  const restaurants = [
    { name: 'React Cafe', address: '123 Anywhere Street' },
    { name: 'Fancy Restaurant', address: '799 Main Street' },
    { name: 'Taco Place', address: '550 Maple Road' },
    { name: "Tony's Diner", address: '4104 College St' },
    { name: 'Pasta Central', address: '706 Central St' },
    { name: 'Burger Builder', address: '4869 Hamilton Dr' },
    { name: 'Pizza Express', address: '1049 Bird St' },
    { name: 'Teriyaki To Go', address: '1885 Tea Berry Ln' },
    { name: 'Maroon Deli', address: '1082 Stuart St' },
    { name: 'Prime Bar and Grill', address: '1848 Fairfax Dr' },
    { name: 'Dumpling House', address: '747 Kelly Dr' },
    { name: 'Hot Chicken', address: '1816 Olive St' },
    { name: "Luna's Tap Room", address: '3256 Spirit Dr' },
    { name: 'Quick Sandwich Shop', address: '2587 Cherry Ridge Dr' },
    { name: "Bobby's Burgers", address: '4152 Berkley St' },
    { name: 'Turnpike Diner', address: '4571 Central Ave' },
    { name: 'Bombay Express', address: '65 Queens Ln' },
    { name: 'Coffee Central', address: '3228 Oakwood Cr' },
    { name: "King's Garden", address: '2935 Victoria Ct' },
    { name: 'Salads and More', address: '2454 Preston St' },
  ];

  return (
    <View style={styles.app}>
      <Header />
      <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={(text) => setSearch(text)}
        value={search}
      />
      <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
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
      </ScrollView>
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
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f5f5f5',
  },
});
