import { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Image, FlatList } from 'react-native';
import Header from 'components/Header';
import RestaurantRow from 'components/RestaurantRow';
import PizzaImage from 'images/pizza.png';
import axios from 'axios';

export default function RestaurantList({ navigation }) {
  const [search, setSearch] = useState('');
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get(`https://restaurant-review-server.vercel.app/restaurants`)
      .then((result) => setRestaurants(result.data));
  }, []);

  return (
    <View style={styles.app}>
      <View style={{ marginTop: 30, alignItems: 'center' }}>
        <Image source={PizzaImage} />
      </View>
      <Header />
      <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={(text) => setSearch(text)}
        value={search}
      />
      <FlatList
        data={restaurants.filter(
          (place) =>
            // So first time when search is '' or falsy, it doesn't go to next condition. It returns true and gives back every item. If we had not used `!search` then filter would need to check even for 1st condition.
            !search || place.name.toLowerCase().includes(search.toLowerCase())
        )}
        renderItem={({ item, index }) => (
          <RestaurantRow place={item} id={index} navigation={navigation} />
        )}
        keyExtractor={(item) => item.name}
        initialNumToRender={16}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#fff',
  },
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

RestaurantList['navigationOptions'] = (screenProps) => ({
  header: null,
});
