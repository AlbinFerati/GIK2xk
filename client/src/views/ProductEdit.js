import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { create, getOne, obliterate, update } from '../models/ProductModel';

function ProductEdit() {
  const params = useParams();

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

  function onChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    const newProduct = { ...product, [name]: value };
    setProduct(newProduct);
  }
  function onSave() {
    if (product.id === 0) {
      create(product).then(() => console.log('Saved'));
    } else {
      update(product).then(() => console.log('Updated'));
    }
  }

  function onDelete() {
    obliterate(product.id).then(() => console.log('Product obliterated'));
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
          Update
        </Button>
        {product.id !== 0 && (
          <Button onClick={onDelete} variant="contained" color="primary">
            Delete
          </Button>
        )}
      </form>
    </>
  );
}

export default ProductEdit;
