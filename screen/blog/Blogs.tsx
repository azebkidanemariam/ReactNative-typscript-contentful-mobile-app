import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import { ContentContext } from "../../Context/contentfulContext";
import { Blog } from "../../Context/types";
import { theme } from "../../sdha/themes";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";




const renderItem: ListRenderItem<Blog> = ({ item }) => {

  if (item.fields.featureImage) {
    return (
      <View style={[styles.articleCard]}>
        <Image
          style={styles.featureImage}
          source={{
            uri: `https:${item.fields.featureImage.fields.file.url}`,
          }}
        />
              
       
          <Text style={styles.title}>{item.fields.title}</Text>
        <Text style={styles.paragraph}>{item.fields.paragraph}</Text>
        

        
          <ScrollView horizontal={true} style={styles.imageList}> 
            {item.fields.images.map((img: any) => (
              <View key={img.sys.id}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: `https:${img.fields.file.url}`,
                    }}
                  />

           
<View style={styles.planCardDivider}></View>
              </View>
            ))}
      </ScrollView>
          </View>
    );
  } else return null;
};
const Blogs: React.FC = () => {
  const navigation = useNavigation();
  const { blogs } = useContext(ContentContext)!;
  const handleCreateAccount = () => {
    //@ts-ignore
    navigation.navigate("BlogDetail");
  };
  <Button text="SKAPA NYTT KONTO" onPress={handleCreateAccount} />

  return (
    <View style={styles.container}>
      {blogs && blogs.length ? (
        <FlatList
          style={styles.flatlists}
          data={blogs}
          keyExtractor={(item) => item.sys.id}
          renderItem={renderItem}
        />
      ) : (
        <Text>Loading...</Text>
      )
      }
       
      <View style={styles.planCardDivider}></View>
      
    </View>
  );
}
export default Blogs

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colorBeige,
    padding: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  articleCard: {
    margin: 5,
    justifyContent: "space-between",
    
  },
  paragraph: {
    fontSize: 18,
    fontWeight: "400",
    paddingHorizontal: 5,
    paddingVertical: 10,
    color: theme.colorBlack,
    lineHeight:30,
    letterSpacing: 1,
    fontFamily:'Didot',
  },
  featureImage: {
    flex:1,
    borderRadius: 10,
    width:"100%",
    height: 300,
    alignSelf: "center",
  },
  title: {
    fontWeight: "900",
    fontSize: 24,
    color: theme.colorWhite,
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginBottom:20,
    /* marginTop:20, */
    lineHeight: 30,
   alignItems:"center",
    letterSpacing: 1,
    fontFamily:'Avenir', 
    margin: 10,
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.2)", 
    
  },
  flatlists: {
    padding: 10,
    marginBottom: 50,
  },
  imageList: {
   flexDirection:'row'
   /*  justifyContent: "space-between", */
  },
  image: {
    paddingVertical: 20,
    marginVertical: 10,
    marginLeft:10,
    borderRadius: 10,
    paddingHorizontal: 15,
    width:250,
    height:400,
    alignSelf: "center",
    flexDirection:'row',

    
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
    flexDirection:'row'
  },
  planCardDivider: {
    borderBottomColor: "grey",
    marginBottom: 20,
    height: 20,
    borderBottomWidth: 1,
  },
});
