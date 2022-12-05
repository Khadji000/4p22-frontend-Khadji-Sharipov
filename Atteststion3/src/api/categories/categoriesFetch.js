import axios from 'axios'

export const fetchCategoriesApi = () =>
  axios.get('http://localhost:5000/categories').then((res) => res.data)
