import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer GGGDOE-8GaB-FQtGRlaISv9QafIEvh9veMVTVEHRUlMrBKzqgrXQVquWdAZ159jFdBd5S-LzPKcSCZAigsI_pgwqFt0LgwPy3PsaJSLGASpmdNi8bMHtlaosBGFYX3Yx',
  },
});
