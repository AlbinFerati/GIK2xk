import { /*Rating,*/ Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function ProductItemSmall({ product }) {
  // const ratings = product.rating;
  // let totalScore = 0;
  // if (ratings && ratings.length > 0) {
  //   for (let i = 0; i < ratings.length; i++) {
  //     totalScore += ratings[i].rating;
  //   }
  // }
  // const averageScore = totalScore / ratings.length;

  return product ? (
    <>
      <div>
        <img
          alt="Something small"
          height={65}
          width="65"
          src={product.imageUrl} //ÄNDRAD
        />
      </div>
      <div>
        <Typography variant="h5" component="h3">
          <Link to={`/products/${product.id}/`}>{product.title}</Link>
        </Typography>
        <p>{product.description}</p>
        <p>{product.price} kr.</p>
        {/* <Rating name="read-only" value={averageScore} readOnly /> */}
      </div>
    </>
  ) : (
    <>Prod Missing</>
  );
}

//Something something rating

export default ProductItemSmall;
