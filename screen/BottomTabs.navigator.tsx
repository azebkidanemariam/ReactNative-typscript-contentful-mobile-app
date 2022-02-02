import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeIcon,BlogIcon,AnalyticIcon} from "../components/icons";
import Analytic from "./Analytic.screen";
import Home  from "./home.screen";
import Blogs from "./blog.screen";
import { Text } from "react-native-svg";
import { theme } from "../types/themes";

const BottomTabs = createBottomTabNavigator()

export const BottomTabsNavigator: React.FC = () => {
    return(

<BottomTabs.Navigator 
screenOptions={({ route }) => ({
    tabBarActiveTintColor: theme.colorPurple,
    tabBarInactiveTintColor: theme.colorBrown,
    tabBarShowLabel:false,
    tabBarIcon: ({ size,color}) =>{
        if(route.name === 'Home'){
            return <HomeIcon size={size} color={color}/>
        }
            if(route.name === 'Blogs'){
    
                return <BlogIcon size={size} color={color}/>
            }
            if(route.name === 'Analytic') {
                return <AnalyticIcon size ={size} color ={color}/>
            }
            return null
        }


})}>
   
    <BottomTabs.Screen name="Home" component={Home} options={{ title: 'Home Page'}} />
    <BottomTabs.Screen name="Blogs" component={Blogs} options={{ title: 'my blog Page'}}/>
    <BottomTabs.Screen name="Analytic" component={Analytic} options={{ title: 'Analytic Page'}}/>
    
</BottomTabs.Navigator>
    )
}