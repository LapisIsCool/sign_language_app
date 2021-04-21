import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Header } from 'react-native-elements';
import logo from './logo.png';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      displayText: '',
      text1: '',
      imageUrl:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/d4cb63873d9792ea08a22f735ad1df58',
    };
  }

  loadNewImage=()=>{
    
  }

  render() {
    return (
      <View>
        <Header
          backgroundColor={'red'}
          centerComponent={{
            text: 'sign language app',
          }}
        />
        <Image
          source={require('./logo.png')}
          style={{ width: 100, marginLeft: 110, height: 80 }}
        />

        <Image 
        source={{uri:this.state.imageUrl}}
        style={{width:100,marginLeft:110,height:80}}
        />

        <TextInput
          style={styles.anyname}
          onChangeText={(text1)=>{
            this.setState({
              text1: text1
            })
          }}
        />

        <TouchableOpacity
          style={styles.button1}
          onPress={() => {
            this.setState = { 
              displayText: this.state.text1,
            };
          }}>
          <Text style={styles.buttonText}>GO</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  anyname: {
    backgroundColor: 'magenta',
    width: '30%',
    height: 40,
    justifyContent: 'center',
    marginTop: 250,
    alignSelf:"center",
    textAlign:"center",
    fontSize:25,
    outLine:"none"
  },
  button1: {},
  buttonText:{
    alignSelf:"center",
    marginTop:25,
    backgroundColor:"red", 
    width:80,
    height:25,
    textAlign:"center",
    
  },
});
