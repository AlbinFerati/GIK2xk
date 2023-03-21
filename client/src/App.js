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
              <Link to="/">Home</Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/product/:id/edit">Update products</Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/product/new">Create product</Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/cart">Cart</Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <Routes>
          <Route path="/" element={<Home>Hej Mikaela</Home>}></Route>
          <Route
            exact
            path="/product/new"
            element={<ProductCreate></ProductCreate>}
          ></Route>
          <Route
            exact
            path="/rating/:rating/product"
            element={<Product></Product>}
          ></Route>
          <Route
            exact
            path="/product/:id/edit"
            element={<ProductEdit></ProductEdit>}
          ></Route>
          <Route
            exact
            path="/product/:id"
            element={<ProductDetail></ProductDetail>}
          ></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
