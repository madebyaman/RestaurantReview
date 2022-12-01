import { View } from 'react-native';
import IonIcons from '@expo/vector-icons/Ionicons';

export default function Stars({ rating }) {
  const stars = [...Array(Math.ceil(rating))];
  return (
    <View style={{ flexDirection: 'row' }}>
      {stars.map((_, i) => {
        const name = Math.floor(rating) > i ? 'star' : 'star-half';
        return <IonIcons key={i} name={name} color="#ffd64c" />;
      })}
    </View>
  );
}
