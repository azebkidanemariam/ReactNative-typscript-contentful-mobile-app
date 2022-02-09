import React from "react";
import { View,Text,Image,StyleSheet,Pressable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MoodPicker } from "../components/emoji";
import { theme } from "../sdha/themes";
import BreakTime from "./takeAbreak";
import { useNavigation } from "@react-navigation/core";

const imageUrl = 
'https://images.unsplash.com/photo-1643738238643-5c3ffbe46649?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'

const Home: React.FC =({})=>{
    const navigation = useNavigation()
    return(

    <View style={styles.container}>
        <TouchableOpacity onPress={() => {
            //@ts-ignore
            navigation.navigate('BreakTime')
        }}>
<Text>{BreakTime}</Text>
        </TouchableOpacity>
       <Image source={{uri : imageUrl}} style={{ flex:1 }} /> 
          <View style={[StyleSheet.absoluteFill, {justifyContent: 'center'}]}>
             <MoodPicker /> 
       
          </View>
       
        </View>
    )

}
export default Home

const styles = StyleSheet.create({
    container: {

        flex: 1,
        justifyContent: "center",
        
    }
    });
  
