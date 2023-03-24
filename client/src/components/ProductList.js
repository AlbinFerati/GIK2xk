import { useEffect, useState } from 'react';
import { getAll } from '../models/ProductModel';
import ProductItemSmall from './ProductItemSmall';

function ProductList({ pathname }) {
  console.log(pathname);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getAll(pathname).then((product) => setProduct(product));
  }, [pathname]);

  return (
    <ul>
      {product &&
        product.map((product) => {
          return (
            <li key={`productId_${product.id}`}>
              <ProductItemSmall product={product} />
            </li>
          );
        })}
    </ul>
  );
}

export default ProductList;
