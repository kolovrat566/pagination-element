import { createReducer, configureStore } from '@reduxjs/toolkit';
import { incrementCurrentPage, decrementCurrentPage, setSearchStr, sortPosts, choosePage } from './action';

const initialState = {
    allPosts: [],
    currentPosts: [],
    desiredPosts: [],
    currentPage: 0,
    searchStr: '',
    sortParams: {
      asc: true,
      param: 'id',
    }
};

const findDesiredPosts = (posts, searchStr) => {
  return posts.filter((item) => {
    if (item.title.includes(searchStr) || item.body.includes(searchStr) || item.id.toString().includes(searchStr)) return item;
  })
};

const streamline = (posts, params) => {
  if (!params.asc) {
    return posts.sort((a, b) => {
      if (a[params.param] > b[params.param]) return -1;
      return 1
    })
  } else {
    return posts.sort((a, b) => {
      if (a[params.param] > b[params.param]) return 1;
      return -1
    })
  }
}
    
const reducer = createReducer(initialState, (builder) => {
    builder
    .addCase('get_all_posts/pending', (state) => {    
      return {...state}
    })
    .addCase('get_all_posts/fulfilled', (state, action) => {    
      return {...state, allPosts
  : action.payload, currentPosts: action.payload.slice(0,10)}
    })
    .addCase('get_all_posts/rejected', (state) => {    
      return {...state}
    })

    .addCase(incrementCurrentPage, (state) => {
      const firstPosition = (state.currentPage + 1) * 10;
      const lastPosition = (state.currentPage + 1) * 10 + 10;
      const posts = findDesiredPosts(state.allPosts
  , state.searchStr);
      const newPosts = streamline(posts, state.sortParams);

      if (state.currentPage < (Math.ceil(posts.length / 10) - 1)) return {
        ...state, 
        currentPage: state.currentPage + 1,
        desiredPosts: newPosts,
        currentPosts: newPosts.slice(firstPosition, lastPosition),
      }
      return {...state}
    })

    .addCase(decrementCurrentPage, (state) => {
      const firstPosition = (state.currentPage - 1) * 10;
      const lastPosition = (state.currentPage - 1) * 10 + 10;
      const posts = findDesiredPosts(state.allPosts
  , state.searchStr);
      const newPosts = streamline(posts, state.sortParams);

      if (state.currentPage >= 1) return {
        ...state, 
        currentPage: state.currentPage - 1,
        desiredPosts: newPosts,
        currentPosts: newPosts.slice(firstPosition, lastPosition),
      }
      return {...state}
    })

    .addCase(setSearchStr, (state, action) => {
      const posts = findDesiredPosts(state.allPosts
  , action.payload);

      return {
        ...state, 
        currentPage: 0,
        desiredPosts: posts,
        searchStr: action.payload,
        currentPosts: posts.slice(0, 10),
      }
    })

    .addCase(sortPosts, (state, action) => {
      const posts = findDesiredPosts(state.allPosts
  , state.searchStr);
      const newPosts = streamline(posts, action.payload);

      return {
        ...state, 
        currentPage: 0,
        desiredPosts: newPosts,
        currentPosts: newPosts.slice(0, 10),
        sortParams: action.payload,
      }
    })

    .addCase(choosePage, (state, action) => {
      const firstPosition = action.payload * 10;
      const lastPosition = action.payload * 10 + 10;
      const posts = findDesiredPosts(state.allPosts
  , state.searchStr);
      const newPosts = streamline(posts, state.sortParams);

      return {
        ...state, 
        currentPage: action.payload,
        desiredPosts: newPosts,
        currentPosts: newPosts.slice(firstPosition, lastPosition),}
    })
});

const store = configureStore({
  reducer: reducer,
});

export default store;
