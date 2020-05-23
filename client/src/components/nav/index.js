import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { useGlobalContext } from '../../utils/globalContext';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  logo: {
    color: 'black',
    textDecorationLine: 'none !important',
  }
}));



export default function Nav() {
  const classes = useStyles();
  const [state, dispatch] = useGlobalContext()

  if (state.user) {
    return (
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          <Link component={NavLink} to='/' className={classes.logo}>GymBro</Link>
        </Typography>
        <nav>
          <Link component={NavLink} variant="button" color="textPrimary" to="/about" className={classes.link}>
            about
          </Link>
          <Link component={NavLink} variant="button" color="textPrimary" to={`/user/${state.user.id}`} className={classes.link}>
            profile
          </Link>
        </nav>
        <Button component={NavLink} to='/login' color="primary" variant="outlined" className={classes.link}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
    );
  }
  else {
    return (
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          <Link component={NavLink} to='/' className={classes.logo}>GymBro</Link>
        </Typography>
        <nav>
          <Link component={NavLink} variant="button" color="textPrimary" to="/about" className={classes.link}>
            about
          </Link>
        </nav>
        <Button component={NavLink} to='/login' color="primary" variant="outlined" className={classes.link}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
    );
  }
};