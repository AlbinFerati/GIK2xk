import { Button, TextField } from '@mui/material';
import { useState } from 'react';

function RatingField({ onSave }) {
  const [rating, setRating] = useState('');
  return (
    <>
      <TextField
        name="ratings"
        label="Ratings"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <Button onClick={() => onSave(rating)}>Add rating</Button>
    </>
  );
}

export default RatingField;
