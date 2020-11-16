import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; //instalar
import { createStackNavigator } from '@react-navigation/stack'; //instalar
import Register from './screens/Register';
import { Provider } from 'react-redux';
import { st } from './store/store';
import Estatistics from './screens/Estatistics';
import Login from './screens/Login';
import PosConsolidada from './screens/PosConsolidada';
import Welcome from './screens/welcome';
import SendMonyScreen from './screens/SendMonyScreen';
import Transactions from './screens/Transactions';
import RegisterModal from './components/RegisterModal';
import AltaUSer from './screens/AltaUser';
import FAQ from './screens/FAQ';

// icons
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator(); //contiene la navegacion
//stack.screen contiene la pantalla
function MyStack() {
	return (
		// <Stack.Navigator>
		<Stack.Navigator initialRouteName='PosConsolidada'>
			<Stack.Screen name='welcome' component={Welcome} options={{ headerShown: false }} />
			{/* <Stack.Screen
        name="Menu"
        component={Menu}
        // options={{ headerShown: false }}
      /> */}
			<Stack.Screen name='Register' component={Register} options={{ title: 'Registrarse' }} />
			<Stack.Screen
				name='Estatistics'
				component={Estatistics}
				// options={{ headerShown: false }}
			/>
			<Stack.Screen name='Login' component={Login} options={{ title: 'Iniciar sesión' }} options={{ headerShown: false }} />
			{/* <Stack.Screen
        name="Header"
        component={Header}
        options={{ headerShown: false }}
      /> */}
			<Stack.Screen
				name='PosConsolidada'
				component={PosConsolidada}
				options={{
					headerShown: true,
					headerTitleAlign: 'center',
					headerStyle: { backgroundColor: 'indigo', shadowColor: 'indigo', elevation: 0 },
					headerTitleStyle: { color: 'white', fontSize: 16 },
					headerLeft: () => <Ionicons name='ios-menu' color='white' size={30} style={{ marginHorizontal: 15 }}></Ionicons>,
					headerRight: () => <Ionicons name='ios-log-out' color='white' size={30} style={{ marginHorizontal: 15 }}></Ionicons>,
				}}
			/>
			{/* <Stack.Screen
        name="RechargeScreen"
        component={RechargeScreen}
        // options={{ headerShown: false }}
      /> */}
			<Stack.Screen
				name='SendMonyScreen'
				component={SendMonyScreen}
				// options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='Transactions'
				component={Transactions}
				// options={{ headerShown: false }}
			/>
			<Stack.Screen name='RegisterModal' component={RegisterModal} />
			<Stack.Screen name='AltaUSer' component={AltaUSer} />
			<Stack.Screen
				name='FAQ'
				component={FAQ}
				// options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}
export default function App() {
	return (
		<Provider store={st}>
			<NavigationContainer style={styles.container}>
				<MyStack />
			</NavigationContainer>
		</Provider>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
