import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    margin: 'auto',
    textAlign: 'center',
    maxWidth: '50%',
    maxHeight: '70%',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
}));

export default function NavbarComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar title={'ReachKey'} style={{ background: '#2E3B55' }}>
        <Toolbar>

          <IconButton edge="start" className={classes.menuButton} color='inherit' aria-label="menu">
            <MenuIcon />
          </IconButton>
          {<div>
            <img src={`${process.env.PUBLIC_URL}/assets/images/ReachKey.png`} className={classes.logo} alt="logo" />
          </div>}

          <Button color="inherit">Exit</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}