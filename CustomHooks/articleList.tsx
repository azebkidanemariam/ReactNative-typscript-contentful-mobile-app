import React, {useState,useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Article } from '../Context/types';
import { ContentContext } from '../Context/contentfulContext';

const AddArticles = () => {
  const [article, setArticle] = useState<Article[]>()
  const { articles } = useContext(ContentContext)! 

  

  return (
    <View>
      <Text style={styles.heading}>Add Shopping Item</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Enter item"
          //@ts-ignore
          value={article}
          onChangeText={text => setArticle(article)}
        />
        <TouchableOpacity style={styles.addItemButton} onPress={() => {}}>
          <Text style={styles.buttonText}>Add Item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: '700',
  },
  form: {
    marginTop: 30,
  },
  input: {
    padding: 15,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  addItemButton: {
    backgroundColor: '#eb8634',
    paddingVertical: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {color: '#fff', fontWeight: '500'},
});
export default AddArticles;