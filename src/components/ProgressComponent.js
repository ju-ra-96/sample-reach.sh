import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';



// Inspired by the former Facebook spinners.
const useStylesFacebook = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  top: {
    color: '#1a90ff',
    animationDuration: '550ms',
    position: 'absolute',
    left: 0,
  },
  circle: {
    strokeLinecap: 'round',
  },
}));

function FacebookCircularProgress(props) {
  const classes = useStylesFacebook();

  return (
    <div className={classes.root}>

      <CircularProgress
        variant="indeterminate"
        disableShrink
        className={classes.top}
        classes={{
          circle: classes.circle,
        }}
        size={80}
        thickness={4}
        {...props}
      />
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function ProgressBars() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ display: "flex", justifyContent: 'center', alignItems: 'center', height: '200px', paddingRight: "60px" }}>
      <FacebookCircularProgress />
      <br />

    </div>
  );
}