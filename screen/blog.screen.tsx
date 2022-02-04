import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  ListRenderItem,
  ListViewComponent,
  SafeAreaView,
} from "react-native";
import React, { useState, useContext } from "react";
import { ContentContext } from "../Context/contentfulContext";
import { Article, Blog, BlogImage } from "../Context/types";
import { theme } from "../sdha/themes";
import { color } from "react-native-reanimated";
import { ScrollView } from "react-native-gesture-handler";

/* const Item = ({ data }: { data: Article }) => {
  return (
    <View >
      <Text style={styles.headline}>{data.fields.headline}</Text>
    </View>
  );
}

const renderItem: ListRenderItem<Article> = ({ item }) => {
  
  if (item.fields.featureImage) {

    return (
      <View style={[styles.articleCard]}>
      <Text style={styles.headline}>{item.fields.category}</Text>
      <Image
        style={styles.featureImage}
        source={{
          uri: `https:${item.fields.featureImage.fields.file.url}`,
        }} />
          <Text style={styles.headline}>{item.fields.headline}</Text>

      
     
    </View>
    )
  } else return null
  } */

/* const Blogs = () => {
    const { articles } = useContext(ContentContext)!
    
    return (
      
      <SafeAreaView style={styles.container}>
      
      <View style={styles.container}>
      {articles && articles.length ? (
        <FlatList  style={styles.box}
        data={articles}
        keyExtractor={(item) => item.sys.id}
        renderItem={renderItem}
        
        />
        ): (
          <Text>Loading...</Text>
          )}
          
          </View>
          </SafeAreaView>
          
          
          )
        }
        export default Blogs */
/*   const Item = ({ data }: { data: Blog }) => {
          return (
            <View >
              <Text style={styles.paragraph}>{data.fields.paragraph}</Text>
            </View>
          );
        } */
const renderItem: ListRenderItem<Blog> = ({ item }) => {
  if (item.fields.featureImage || item.fields.images) {
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

        <View style={styles.imageList}>
          {item.fields.images.map((img: any) => (
            <Image
              style={styles.image}
              source={{
                uri: `https:${img.fields.file.url}`,
              }}
            />
          ))}
        </View>
      </View>
    );
  } else return null;
};
export default function Blogs() {
  const { blogs } = useContext(ContentContext)!;

  return (
    <SafeAreaView style={styles.box}>
      <ScrollView>
        <View style={styles.container}>
          {blogs && blogs.length ? (
            <FlatList
              style={styles.box}
              data={blogs}
              keyExtractor={(item) => item.sys.id}
              renderItem={renderItem}
            />
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colorBeige,
    padding: 10,
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  articleCard: {
    /*  padding: 20, */

    margin: 5,
    justifyContent: "space-between",
  },
  paragraph: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Times New Roman",
    paddingHorizontal: 5,
    paddingVertical: 10,
    color: theme.colorPurple,
    lineHeight: 30,
    letterSpacing: 0.3,
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
    alignSelf: "center",
  },
  box: {
    padding: 10,
    alignSelf: "center",
    marginBottom: 10,
  },
  imageList: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 20,
  },
});
