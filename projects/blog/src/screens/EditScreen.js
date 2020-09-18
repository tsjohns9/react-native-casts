import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';
//
const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const id = navigation.getParam('id');
  const blog = state.find((x) => x.id === id) || {};

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => {
          navigation.pop();
        });
      }}
      initialValues={{
        title: blog.title,
        content: blog.content,
      }}
    />
  );
};

export default EditScreen;

const styles = StyleSheet.create({});
