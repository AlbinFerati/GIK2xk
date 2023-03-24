import { Box, Button, Rating, Typography } from '@mui/material';
import Ratings from './RatingList';
import {} from '@mui/material';
import { addRating } from '../models/ProductModel';
import { useState } from 'react';
import { getAvgRating } from '../models/RatingModel';
import { Chip } from '@mui/material';

function ProductItemLarge({ product }) {
  const [rating, setRating] = useState(0);

  function onSave() {
    addRating(product.id, rating).then(() => console.log('Saved'));
  }

  return product ? (
    <>
      <>
        <div>
          <Typography>
            {' '}
            <h1>{product.title}</h1>
            <img
              alt="Something"
              height={100}
              width="100"
              src={product.imageUrl}
            />
          </Typography>
        </div>
        <p>{product.description}</p>
        <p>{product.price} kr.</p>
      </>{' '}
      <br />
      <Typography fontWeight={800}>Average rating of the product:</Typography>
      <br />
      {product?.ratings && <span>{getAvgRating(product?.ratings)}/10</span>}
      <br />
      <br />
      <Typography fontWeight={800}>
        Our customers rated this product:
      </Typography>
      <Ratings precision={1} max={10} ratings={product.ratings} />
      <br />
      <Box>
        <Rating
          onChange={(e, value) => {
            setRating(e.target.value);
          }}
          name="Rating"
          defaultValue={0}
          precision={1}
          max={10}
        />
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={() => onSave(rating)}
      >
        Add rating
      </Button>
      <br />
      <br />
    </>
  ) : (
    <>Product missing</>
  );
}

export default ProductItemLarge;
