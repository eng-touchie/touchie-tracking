import React from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import CustomLogo from '../resources/images/logo.png'; // Import your custom logo

const useStyles = makeStyles((theme) => ({
  image: {
    alignSelf: 'center',
    maxWidth: '200px',
    maxHeight: '100px',
    width: 'auto',
    height: 'auto',
    margin: theme.spacing(2),
  },
}));

const LogoImage = ({ color }) => {
  const theme = useTheme();
  const classes = useStyles();

  const expanded = !useMediaQuery(theme.breakpoints.down('lg'));

  const logo = useSelector((state) => state.session.server.attributes?.logo);
  const logoInverted = useSelector((state) => state.session.server.attributes?.logoInverted);

  if (logo) {
    if (expanded && logoInverted) {
      return <img className={classes.image} src={logoInverted} alt="Custom Logo" />;
    }
    return <img className={classes.image} src={logo} alt="Custom Logo" />;
  }
  return <img className={classes.image} src={CustomLogo} alt="Custom Logo" style={{ color }} />; // Use your custom logo
};

export default LogoImage;
