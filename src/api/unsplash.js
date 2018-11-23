import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
   Authorization: 'Client-ID 505028d4fc2bc85ea88e265c0d111c9c125cfb05e01bef3479385ad534416393'
  }
});
