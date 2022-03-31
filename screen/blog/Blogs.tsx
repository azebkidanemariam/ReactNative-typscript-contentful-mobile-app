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

              {/* <View style={styles.planCardDivider}></View> */}
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
  <Button text="SKAPA NYTT KONTO" onPress={handleCreateAccount} />;

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
      )}

    
    </View>
  );
};
export default Blogs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4faff",
    /* padding: 10, */
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  articleCard: {
    margin: 2,
    justifyContent: "space-between",
    backgroundColor: "#accbff",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 18,
    fontWeight: "400",
    paddingHorizontal: 5,
    paddingVertical: 10,
    color: theme.colorBlack,
    lineHeight: 30,
    letterSpacing: 1,
    fontFamily: "Didot",
  },
  featureImage: {
    marginTop:20,
    width: 204,
    height: 204,
    borderRadius: 100,
    marginLeft: 10,
  },
  title: {
    fontWeight: "900",
    fontSize: 18,
    color: theme.colorBlack,
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginBottom: 20,
    lineHeight: 30,
    justifyContent: "center",
    letterSpacing: 1,
    fontFamily: "Avenir",
    margin: 10,
    borderRadius: 10, 
  },

  flatlists: {
    padding: 10,
   /*  marginBottom: 50, */
  },

  imageList: {
    flexDirection: "row",
  },

  image: {
    paddingVertical: 20,
    paddingHorizontal: 25,
    marginVertical: 10,
    height: 198,
    width: 180,
    padding: 0,
    marginStart: 10,
    borderRadius: 13,
    alignSelf: "flex-start",
  },
 

});
