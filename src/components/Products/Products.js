import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();
  if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <Typography className={classes.title} variant="h3" gutterBottom>Product List</Typography>
      <Grid container justify="center" spacing={3}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

