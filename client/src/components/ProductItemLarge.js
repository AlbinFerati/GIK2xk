import { Button, Rating, Typography } from '@mui/material';
import Ratings from './RatingList';
import {} from '@mui/material';

function ProductItemLarge({ product }) {
  console.log(product);
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
      <Typography fontWeight={800}>
        Our customers rated this product:
      </Typography>
      <Ratings precision={1} max={10} ratings={product.ratings} />
      <Rating name="Controlled" max={10} />
      <br />
      <Button variant="contained" color="primary">
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
