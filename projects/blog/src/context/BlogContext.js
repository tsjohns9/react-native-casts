import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case 'delete_blogpost':
      return state.filter((x) => x.id != action.payload.id);
    case 'edit_blogpost':
      return state.map((x) => {
        return x.id === action.payload.id ? action.payload : x;
      });
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content, cb) => {
    dispatch({
      type: 'add_blogpost',
      payload: { title, content },
    });
    cb ? cb() : () => {};
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, cb) => {
    dispatch({
      type: 'edit_blogpost',
      payload: { title, content, id },
    });
    cb ? cb() : () => {};
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'delete_blogpost', payload: { id } });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  {
    addBlogPost,
    deleteBlogPost,
    editBlogPost,
  },
  [{ title: 'Test Post', content: 'fake content', id: 1 }]
);

// import React, { useReducer, useReducer } from 'react';

// const BlogContext = React.createContext();

// const blogReducer = (state, action) => {
//   switch (action.type) {
//     case 'add_blogpost':
//       return [...state, { title: `Post #${state.length + 1}` }];
//     default:
//       return state;
//   }
// };

// export const BlogProvider = ({ children }) => {
//   const [blogPosts, dispatch] = useReducer(blogReducer, []);

//   const addBlogPost = () => {
//     dispatch({ type: 'add_blogpost' });
//   };

//   return (
//     <BlogContext.Provider
//       value={{
//         blogPosts,
//         addBlogPost,
//       }}
//     >
//       {children}
//     </BlogContext.Provider>
//   );
// };

// export default BlogContext;
