import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart, Block } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
  // console.log(product);

  const handleAddToCart = () => {onAddToCart(product.id, 1)};
  

  return (
    <Card  style={{position:"relative"}}className={classes.root}>
      <img src={product.image.url}  style={{ width: '100%',display:"block" , height: '400px'}} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name} 
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${product.price.formatted}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
      </CardContent>
      <div  onClick={handleAddToCart} style={{position:"absolute" ,top:0,alignItems:"flex-end",right:0, padding:"10px"}} >
          <AddShoppingCart />
      </div>
    </Card>
  );
};

export default Product;

