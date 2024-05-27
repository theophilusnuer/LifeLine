import React from 'react';
import { Typography, Container, Grid, Paper, Button } from '@mui/material';

const CartPage = ({ cartItems }) => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Shopping Cart
      </Typography>
      <Grid container spacing={2}>
        {cartItems.map((item) => (
          <Grid item xs={12} md={6} lg={4} key={item.id}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <Typography variant="h6" gutterBottom>{item.name}</Typography>
              <Typography variant="body1" gutterBottom>Price: ${item.price}</Typography>
              <Typography variant="body2" gutterBottom>Description: {item.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
        Proceed to Checkout
      </Button>
    </Container>
  );
};

export default CartPage;
