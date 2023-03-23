import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { create, getOne, update } from '../models/ProductModel';

function ProductCreate() {
  const params = useParams();
  const url = useLocation();
  console.log(params, url);

  const prodId = params.id;
  const emptyProd = {
    id: 0,
    title: '',
    description: '',
    price: 0.0,
    imageUrl: '',
  };
  const [product, setProduct] = useState({ emptyProd });

  useEffect(() => {
    if (!isNaN(prodId)) {
      getOne(prodId).then((product) =>
        setProduct({ ...product, imageUrl: product.imageUrl || ' ' })
      );
    } else {
      setProduct(emptyProd);
    }
    // eslint-disable-next-line
  }, [prodId]);

  function onSave() {
    if (product.id === 0) {
      create({ ...product, userId: 2 }).then(() =>
        console.log('Created product')
      );
    } else {
      update(product).then(() => console.log('Updated product'));
    }
  }
  function onChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    const newProduct = { ...product, [name]: value };
    setProduct(newProduct);
  }

  return (
    <>
      <form>
        <TextField
          value={product.title}
          onChange={onChange}
          name="title"
          id="title"
          label="Title"
          fullWidth
        />{' '}
        <br />
        <TextField
          value={product.description}
          onChange={onChange}
          name="description"
          label="description"
          multiline
          minRows={4}
          id="description"
          fullWidth
        />
        <TextField
          value={product.price}
          onChange={onChange}
          name="price"
          id="price"
          label="price"
          fullWidth
        />{' '}
        <br />
        <TextField
          value={product.imageUrl}
          onChange={onChange}
          name="imageUrl"
          id="imageUrl"
          label="Url path to picture"
          fullWidth
        />{' '}
        <br />
        <Button onClick={onSave} variant="contained" color="primary">
          Create
        </Button>
      </form>
    </>
  );
}

export default ProductCreate;
