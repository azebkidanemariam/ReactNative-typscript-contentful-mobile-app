import { Image,StyleSheet, Text, View,FlatList,Button,ListRenderItem, ListViewComponent} from 'react-native'
import React, { useState,useContext } from 'react'
import { ContentContext } from '../Context/contentfulContext'
import { Article} from '../Context/types'



const Item = ({ data }: { data: Article }) => {
  return (
    <View >
      <Text >{data.fields.headline}</Text>
    </View>
  );
}

const renderItem: ListRenderItem<Article> = ({ item }) => (
  <View style={[styles.articleCard]}>
  <Text style={styles.headline}>{item.fields.headline}</Text>
  <Text style={styles.headline}>{item.fields.category}</Text>
  <Image
    style={styles.featureImage}
    source={{
      uri: `https:$[{item.fields.featureImage.fields.file.url}]`,
    }}
  />
</View>
);
  const Blogs = () => {
  const { articles } = useContext(ContentContext)!

  return (
   

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
    
    
  )
}
export default Blogs

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lavender',
    padding: 10,
    paddingHorizontal: 10,
    marginVertical: 20,
    alignItems: 'center',
    flex: 1,
    justifyContent: "space-between",
    flexDirection:'row'
    
  
   
  },
  articleCard: {
    borderRadius: 5,
    marginBottom: 10,
    fontWeight:"normal",
    alignSelf:'center'
   
    

  },
  headline: {
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  featureImage: {
    borderRadius: 5,
    width: 400,
    height: 200,
    marginBottom: 10,
    backgroundColor: '#2aa198'
  },
  text: {
    fontWeight: 'bold',
    color: 'white'
  },
  flatlists: {
    padding: 10,
    borderRadius: 3,
    
    marginBottom: 10,
    backgroundColor: '#2aa198'
  },  
  box: {
    padding: 10,
    alignSelf: 'center',
    marginBottom: 10,
  },
})
