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
  const [postman, setProduct] = useState({ emptyProd });

  useEffect(() => {
    if (!isNaN(prodId)) {
      getOne(prodId).then((postman) =>
        setProduct({ ...postman, imageUrl: postman.imageUrl || ' ' })
      );
    } else {
      setProduct(emptyProd);
    }
    // eslint-disable-next-line
  }, [prodId]);
  function onChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    const newProduct = { ...postman, [name]: value };
    setProduct(newProduct);
  }
  function onSave() {
    if (postman.id === 0) {
      create(postman).then(() => console.log('Saved'));
    } else {
      update(postman).then(() => console.log('Updated'));
    }
  }

  function onDelete() {
    obliterate(postman.id).then(() => console.log('Product obliterated'));
  }
  return (
    <>
      <form>
        <TextField
          value={postman.title}
          onChange={onChange}
          name="title"
          id="title"
          label="Title"
          fullWidth
        />{' '}
        <br />
        <TextField
          value={postman.description}
          onChange={onChange}
          name="description"
          label="description"
          multiline
          minRows={4}
          id="description"
          fullWidth
        />
        <TextField
          value={postman.price}
          onChange={onChange}
          name="price"
          id="price"
          label="price"
          fullWidth
        />{' '}
        <br />
        <TextField
          value={postman.imageUrl}
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
        {postman.id !== 0 && (
          <Button onClick={onDelete} variant="contained" color="primary">
            Delete
          </Button>
        )}
      </form>
    </>
  );
}

export default ProductEdit;
