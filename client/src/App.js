import './App.css';
import { Box, AppBar, Toolbar, Typography } from '@mui/material';
import { Routes, Route, Link } from 'react-router-dom';

import ProductDetail from './views/ProductDetail';
import Cart from './views/Cart';
import ProductEdit from './views/ProductEdit';
import Home from './views/Home';
import Product from './views/Product';
import ProductCreate from './views/ProductCreate';

function App() {
  return (
    <div className="App">
      <h1>Bolaget Fanpage E-handel</h1>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/products">Home</Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/products/new">Create product</Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/cart">Cart</Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <Routes>
          <Route path="/products" element={<Home>Hej Mikaela</Home>}></Route>
          <Route
            exact
            path="/products/new"
            element={<ProductCreate></ProductCreate>}
          ></Route>
          <Route
            exact
            path="/rating/:rating/products"
            element={<Product></Product>}
          ></Route>
          <Route
            exact
            path="/products/:id/edit"
            element={<ProductEdit></ProductEdit>}
          ></Route>
          <Route
            exact
            path="/products/:id"
            element={<ProductDetail></ProductDetail>}
          ></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
