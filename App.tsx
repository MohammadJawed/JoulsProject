import { View,StyleSheet,Text } from "react-native"
import Circle from "./components/editprofile"
import MyForm from "./components/form"
import EditPage from "./components/editprofile"
function App() {
  return (
    <View style={styles.container}>
      <EditPage/>
   </View>
 ) 
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  headerText: {
    color:'#000000'
  }
})
export default App