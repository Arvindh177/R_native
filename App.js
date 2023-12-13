import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';


export default function App() {
  return (
    <>
    <View
    style={styles.background}>
      <LittleLemonHeader/>
      <WelcomeScreen/>
    </View>
    <View>
      <LittleLemonFooter/>
    </View>
    </>
    
    
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1, 
    backgroundColor: '#333333'
  }
})

