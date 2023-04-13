import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart, ExitToApp} from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/logo.png';
import useStyles from './styles';
// import LogoutIcon from '@material-ui/icons-material/Logout';

const PrimarySearchAppBar = ({ totalItems }) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();
  const location = useLocation();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

   if(location.pathname === '/') return null
  return (
    
    <>

   
      <AppBar position="fixed" className={classes.appBar} color="inherit">
         <nav className={classes.nav}>
     
       
      </nav>
        <Toolbar>
       <div style={{display:"flex"}}>
       <img src={logo} alt="commerce.js" height="30px" color='black' className={classes.image} /> 
          <Typography component={Link} to="/products" variant="h6" className={classes.title} color="inherit">
            e-shop
          </Typography>
       </div>
         
          <div className={classes.grow} />
          {location.pathname === '/products' && (
          <div className={classes.button}>
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>

            <IconButton component={Link} to="/" aria-label="Show cart items" color="inherit">
                <ExitToApp />
            </IconButton>
          </div>
          )}
        </Toolbar>

      </AppBar>
      {renderMobileMenu}
      </>
  );
};

export default PrimarySearchAppBar;
