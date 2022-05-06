import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllPosts = createAsyncThunk(
  'get_all_posts',
  async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  }
);

export const incrementCurrentPage = createAction('increment_current_page');
export const decrementCurrentPage = createAction('decrement_current_page');
export const setSearchStr = createAction('set_search_str');
export const sortPosts = createAction('sort_posts');
export const choosePage = createAction('choose_page');


