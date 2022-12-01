import { ScrollView, Image, StyleSheet, View, Text } from 'react-native';
import Stars from 'components/Stars';

export default function RestaurantInfo({ navigation }) {
  const place = navigation.getParam('place');

  return (
    <ScrollView style={styles.root}>
      <View style={styles.infoHeader}>
        <Image
          source={{
            uri: `https://restaurant-review-server.vercel.app/images/${place.image}`,
          }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{place.name}</Text>
        <Text style={styles.address}>{place.address}</Text>
        <Stars rating={place.rating} />
      </View>
    </ScrollView>
  );
}

RestaurantInfo.navigationOptions = (screenProps) => ({
  title: 'Restaurant Info',
});

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#fff' },
  infoHeader: { flexDirection: 'row' },
  info: { marginTop: 20 },
  name: { fontSize: 24 },
  address: { color: 'grey', marginBottom: 5 },
  image: { width: 100, height: 100, margin: 20 },
});
