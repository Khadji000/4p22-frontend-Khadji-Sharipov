import axios from 'axios'

export const fetchProductsApi = () =>
  axios.get('http://localhost:5000/products').then((res) => res.data)
