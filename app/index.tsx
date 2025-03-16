import { createStackNavigator } from '@react-navigation/stack';
import NotesScreen from '@/src/screens/NotesScreen';
import Details from '@/src/screens/Details';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Home" component={NotesScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Details" component={Details}  options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default App;
