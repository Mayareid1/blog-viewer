import axios from 'axios';
import { Post } from '../types/post';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
  } catch {
    throw new Error('Failed to fetch posts');
  }
};

export const fetchPostById = async (id: string): Promise<Post> => {
  try {
    const response = await axios.get(`${API_URL}/posts/${id}`);
    return response.data;
  } catch {
    throw new Error(`Failed to fetch post with id ${id}`);
  }
};
