import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeIcon, BlogIcon, AnalyticIcon,MusicIcon } from "../components/icons";
import Music from "../screen/Music";
import Home from "../screen/Home";
import Blogs from "../screen/blog/Blogs";
import { Text } from "react-native-svg";
import { theme } from "../sdha/themes";

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: theme.colorPurple,
        tabBarInactiveTintColor: theme.colorBrown,
        tabBarShowLabel: true,
        tabBarStyle:{
          backgroundColor:"pink",
          borderTopLeftRadius:15,
          borderTopRightRadius:15,
          paddingHorizontal:10,
          paddingBottom:4,
          height:60,
        },
        tabBarIcon: ({ size, color }) => {
          if (route.name === "Home") {
            return <HomeIcon size={size} color={color} />;
          }
          if (route.name === "Blogs") {
            return <BlogIcon size={size} color={color} />;
          }
          if (route.name === "Music") {
            return <AnalyticIcon size={size} color={color} />;
          }
          return null;
        },
      })}
    >
      <BottomTabs.Screen
        name="Home"
        component={Home}
        
      />
      <BottomTabs.Screen
        name="Blogs"
        component={Blogs}
      />
      <BottomTabs.Screen
        name="Music"
        component={Music}
      />
    </BottomTabs.Navigator>
  );
};


