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
import { ContentContext } from "../Context/contentfulContext";
import { Blog } from "../Context/types";
import { theme } from "../sdha/themes";
/* import { ScrollView } from "react-native-gesture-handler"; */

const renderItem: ListRenderItem<Blog> = ({ item }) => {
  if (item.fields.featureImage) {
    return (
      <View style={[styles.articleCard]}>
        <Text style={styles.title}>{item.fields.title}</Text>
        <Image
          style={styles.featureImage}
          source={{
            uri: `https:${item.fields.featureImage.fields.file.url}`,
          }}
        />
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

           
              </View>
            ))}
      </ScrollView>
          </View>
    );
  } else return null;
};
export default function Blogs() {
  const { blogs } = useContext(ContentContext)!;

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
    </View>
  );
}

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
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Times New Roman",
    paddingHorizontal: 5,
    paddingVertical: 10,
    color: theme.colorSadelBrown,
    lineHeight: 30,
    letterSpacing: 0.2,
  },
  featureImage: {
    borderRadius: 200,
    width: 300,
    height: 300,
    alignSelf: "center",
  },
  title: {
    fontWeight: "900",
    fontSize: 20,
    color: theme.colorPurple,
    paddingHorizontal: 5,
    paddingVertical: 10,
    lineHeight: 30,
    alignSelf: "flex-end",
    letterSpacing: 1,
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
    borderRadius: 200,
    width: 300,
    height: 300,
    alignSelf: "center",
    flexDirection:'row'
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
    flexDirection:'row'
  },
});
