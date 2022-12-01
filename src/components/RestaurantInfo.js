import { View, Text } from 'react-native';

export default function RestaurantInfo() {
  return (
    <View>
      <Text>Info</Text>
    </View>
  );
}

RestaurantInfo.navigationOptions = (screenProps) => ({
  title: 'Restaurant Info',
});
