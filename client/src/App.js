import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import Chart from './components/Chart';
import Suggestion from './components/Suggestion';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  content: {
    padding: '2rem'
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Navbar />
      <Grid
        className={classes.content}
        container
        spacing={2}
        justify='space-around'
        alignItems='stretch'
      >
        <Grid item xs={12} md={8}>
          <Chart />
        </Grid>
        <Grid className={classes.contentItem} item xs={12} md={4}>
          <Suggestion />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default App;
