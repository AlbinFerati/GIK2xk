import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductItemLarge from '../components/ProductItemLarge';
import { getOne } from '../models/ProductModel';

function ProductDetail() {
  const params = useParams();
  const prodId = params.id;
  console.log(params);

  const [product, setProduct] = useState({});
  useEffect(() => {
    getOne(prodId).then((product) => setProduct(product));
  }, [prodId]);

  return (
    <>
      <ProductItemLarge product={product} />

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
