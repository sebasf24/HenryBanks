import * as React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Qrnative from './QrCreate'
import Card from './Card'

 
const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);
 
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);
 
const initialLayout = { width: Dimensions.get('window').width };
 
function Recharge() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Tarjeta' },
    { key: 'second', title: 'Codigo QR' },
  ]);
 
  const renderScene = SceneMap({
    first: FirstRoute,
    second: Qrnative,
  });
 
  return (

        <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        />
    
  );
}
 
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

export default Recharge;