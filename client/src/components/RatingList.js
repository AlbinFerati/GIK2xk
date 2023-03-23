import { Chip } from '@mui/material';
import { useEffect, useState } from 'react';
import { getAll } from '../models/RatingModel';

function Rating({ ratings }) {
  // const [rating, setRating] = useState([]);

  // useEffect(() => {
  //   getAll().then((ratingman) => setRating(ratingman));
  // }, []);
  console.log(ratings);
  return ratings ? (
    <>
      <ul>
        {ratings &&
          ratings.map((rating) => {
            return <Chip key={rating.id} label={`${rating.rating}/10`}></Chip>;
          })}
      </ul>
    </>
  ) : (
    <>Rating missing</>
  );
}

export default Rating;
