import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import RestaurantList from 'components/RestaurantList';
import RestaurantInfo from 'components/RestaurantInfo';

export default createAppContainer(
  createStackNavigator(
    {
      Home: { screen: RestaurantList },
      Info: { screen: RestaurantInfo },
    },
    {
      navigationOptions: {
        headerStyle: { backgroundColor: '#0066cc' },
        headerTintColor: '#fff',
        headerTintStyle: {
          color: '#fff',
        },
      },
    }
  )
);
