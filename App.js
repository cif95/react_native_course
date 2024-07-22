import { StatusBar } from 'react-native';

import { FavoritesContextProvider } from './store/context/favorites-context';

// Screens
import { CategoriesScreen } from './screens/CategoriesScreen';
import { CategoryMealsScreen } from './screens/CategoryMealsScreen';
import { MealDetailsScreen } from './screens/MealDetailsScreen';
import { FavoritesScreen } from './screens/FavoritesScreen';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const DrawerNavigator = () => {
  return(
    <Drawer.Navigator

    >
      <Drawer.Screen name="Categories" component={CategoriesScreen} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  )
}

export default function App() {

  return (
    <>
      <StatusBar style="dark"/>

      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Categories"
            screenOptions={{
              headerStyle: {
                backgroundColor: 'rgb(201, 169, 132)255, 210, 204)',
              },
              contentStyle: {
                backgroundColor: 'rgb(245, 228, 219)255, 210, 204)'
              }
            }}
          >

            <Stack.Screen 
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false
              }}
            />

            <Stack.Screen 
              name="Meals"
              component={CategoryMealsScreen}
            />

            <Stack.Screen 
              name="MealDetails"
              component={MealDetailsScreen}
            />

          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>

    </>
  );
}
