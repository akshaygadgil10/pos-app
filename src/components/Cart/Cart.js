import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';

import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart,subtotal }) => {
  const classes = useStyles();
  const handleEmptyCart = () => onEmptyCart();
  const renderEmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart,
    </Typography>
  );
  const renderCart = () => (
    <>
      <Grid container spacing={4}>
        {cart.map((lineItem) => (
          <Grid className={classes.main} key={lineItem.id}>
            <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="primary" >Checkout</Button>
        </div>
        <Typography variant="subtitle1"></Typography>
      </div>
    </>
  );

  return (
    <div className={classes.main}>
      <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
      { !cart.length ? renderEmptyCart() : renderCart() }
    </div>
  );
};

export default Cart;
