import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Accept-Version'] = 'v1';
axios.defaults.headers.common['Authorization'] =
  ' Client-ID AWfq9tRqWmqR8y6wkOTZebo10vBdfhsfggwaON6SaMI';

// Application ID: 567949
// Secret Key: xYQgNx3ca3TRq1NwZpRMMpQiCvcSPjxEvZOTwxrDtrs

export const fetchImagesAPI = async (query, page) => {
  const response = axios.get(
    `/search/photos?query=${query}&page=${page}&per_page=10`
  );
  const data = (await response).data;
  return data.results;
};
