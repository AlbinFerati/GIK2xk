import { Rating, Typography } from '@mui/material';
import Ratings from './RatingList';
import { Link } from 'react-router-dom';

function ProductItemSmall({ product }) {
  return product ? (
    <>
      <div>
        <img
          alt="Something small"
          height={65}
          width="65"
          src={product.imageUrl}
        />
      </div>
      <div>
        <Typography variant="h5" component="h3">
          <Link to={`/products/${product.id}/`}>{product.title}</Link>
        </Typography>
        <p>{product.description}</p>
        <p>{product.price} kr.</p>
        <Ratings precision={1} max={10} rating={product.rating} Controlled />
        <Rating name="read-only" max={10} readOnly />
      </div>
    </>
  ) : (
    <>Prod Missing</>
  );
}

//Something something rating

export default ProductItemSmall;
