import React, { useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = (props) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addBlogPost } = useContext(Context);
  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => {
          props.navigation.navigate('IndexScreen');
        });
      }}
    />
  );
};

export default CreateScreen;

const styles = StyleSheet.create({});
