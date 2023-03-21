import { Grid, Typography } from '@mui/material';
import ProductList from '../components/ProductList';
import './Home.css';

function Home() {
  return (
    <Grid container columnSpacing={2} className="Home">
      <Grid item xs={12} md={12}>
        <Typography variant="h4" component="h2">
          All Products
        </Typography>
      </Grid>
      <Grid className="Home__grid-item" item xs={12} md={12}>
        <ProductList></ProductList>
      </Grid>
    </Grid>
  );
}

//Lägg till en höger sida som berättar om nästa spelning kasnke?

export default Home;
