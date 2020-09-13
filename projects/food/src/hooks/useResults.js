import { useEffect, useState } from 'react';

import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    searchApi('italian');
  }, []);

  const searchApi = (term) => {
    yelp
      .get('/search', {
        params: {
          limit: 50,
          term,
          location: 'scottsdale',
        },
      })
      .then((res) => {
        setError('');
        setResults(res.data.businesses);
      })
      .catch((err) => {
        console.log('ERROR: ', err);
        setError('Something went wrong');
      });
  };

  return [searchApi, results, error];
};
