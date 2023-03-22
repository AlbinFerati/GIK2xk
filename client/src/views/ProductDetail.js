import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PostItemLarge from '../components/PostItemLarge';
import { getOne } from '../models/ProductModel';

function ProductDetail() {
  const params = useParams();
  const prodId = params.id;
  console.log(params);

  const [postman, setProduct] = useState({});
  useEffect(() => {
    getOne(prodId).then((postman) => setProduct(postman));
  }, [prodId]);

  return (
    <>
      <PostItemLarge postman={postman} />

      <Button variant="contained" color="primary">
        Add to cart
      </Button>
      <Link to={`/products/${prodId}/edit`}>
        <Button variant="contained" color="primary">
          Edit Product
        </Button>
      </Link>
    </>
  );
}

export default ProductDetail;
