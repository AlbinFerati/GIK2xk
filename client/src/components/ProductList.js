import { useEffect, useState } from 'react';
import { getAll } from '../models/ProductModel';
import ProductItemSmall from './ProductItemSmall';

function ProductList({ pathname }) {
  console.log(pathname);
  const [postman, setProduct] = useState([]);

  useEffect(() => {
    getAll(pathname).then((postman) => setProduct(postman));
  }, [pathname]);

  return (
    <ul>
      {postman &&
        postman.map((product) => {
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
