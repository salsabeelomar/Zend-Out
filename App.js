import { View,StatusBar} from 'react-native';
import {Landing } from './Component/LandingPage'


const App = ()=> {
return ( 
   <View>
     <StatusBar backgroundColor='#886aad' />
     <Landing/>
   </View>
  );
}
export default App;