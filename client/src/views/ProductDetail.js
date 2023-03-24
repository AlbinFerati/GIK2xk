import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductItemLarge from '../components/ProductItemLarge';
import { getOne } from '../models/ProductModel';
import { addToCart } from '../models/CartModel';

function ProductDetail() {
  const params = useParams();
  const prodId = params.id;
  const [product, setProduct] = useState({});

  useEffect(() => {
    getOne(prodId).then((product) => setProduct(product));
  }, [prodId]);

  function onProductAdd() {
    addToCart(1, prodId, 1).then((result) => console.log(result));
  }

  return (
    <>
      <ProductItemLarge product={product} />

      <Button variant="contained" color="primary" onClick={onProductAdd}>
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
