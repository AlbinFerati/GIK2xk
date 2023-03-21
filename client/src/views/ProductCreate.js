import { Button, TextField } from '@mui/material';
import { useParams, useLocation } from 'react-router-dom';

function ProductCreate() {
  const params = useParams();
  const url = useLocation();
  console.log(params, url);
  return (
    <>
      <form>
        <TextField name="title" label="Title" fullWidth />
        <TextField name="body" label="description" fullWidth />
        <TextField name="imageUrl" label="Url path to picture" fullWidth />

        <Button variant="contained" color="primary">
          Create
        </Button>
      </form>
    </>
  );
}

export default ProductCreate;
