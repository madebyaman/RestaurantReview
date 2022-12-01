import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
} from 'react-native';
import Stars from 'components/Stars';

function RestaurantRow({ navigation, place, id }) {
  const [showInfo, setShowInfo] = useState(false);
  function onPressButton() {
    navigation.navigate('Info');
  }

  return (
    <>
      <View
        key={place.name}
        style={[
          styles.row,
          { backgroundColor: id % 2 === 0 ? 'white' : '#eeeeee' },
        ]}
      >
        <View style={styles.stars}>
          <Stars rating={place.rating} />
        </View>
        <View style={styles.nameAddress}>
          <Text>{place.name}</Text>
          <Text style={styles.address}>{place.address}</Text>
        </View>
        <View style={styles.edges}>
          <TouchableHighlight
            underlayColor="#5398dc"
            onPress={onPressButton}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Info</Text>
          </TouchableHighlight>
        </View>
      </View>
      {showInfo && (
        <View style={styles.info}>
          <Text>Restaurant Info</Text>
          <Image
            source={{
              uri: `https://restaurant-review-server.vercel.app/images/${place.image}`,
            }}
            style={{
              flex: 1,
              height: 100,
            }}
            resizeMode="contain"
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingBottom: 5,
  },
  stars: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5,
    minWidth: 50,
  },
  edges: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  nameAddress: { flexDirection: 'column', flex: 6 },
  address: { color: 'grey' },
  button: {
    borderWidth: 1,
    borderColor: '#0066CC',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: '#fff',
  },
  buttonText: {
    color: '#0066cc',
    fontSize: 12,
  },
  info: {
    marginHorizontal: 40,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 4,
  },
});

export default RestaurantRow;
