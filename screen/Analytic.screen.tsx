import React from "react";
import { View,Text,Image } from "react-native";

const ImgSrc = require('../assets/HistoryPageHero.png')
const Analytic: React.FC =()=>{
    return(

    <View>
        <Text>
        <Image source={ImgSrc} />
        </Text>
        
    </View>
    )

}
export default Analytic