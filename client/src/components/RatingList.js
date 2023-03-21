import { useEffect, useState } from 'react';
import { getAll } from '../models/RatingModel';

function Rating() {
  const [ratingman, setRating] = useState([]);

  useEffect(() => {
    getAll().then((ratingman) => setRating(ratingman));
  }, []);

  return (
    <>
      <ul>
        {ratingman &&
          ratingman.map((rating) => {
            return <li key={`ratingId_${rating.id}`}></li>;
          })}
      </ul>
    </>
  );
}

export default Rating;
