import React, { Fragment } from 'react';
import{
  CssBaseline,
  withStyles,
}from '@material-ui/core';

import AppHeader from './componentes/AppHeader';
import Home from './pages/home';

const styles = theme => ({
  main:{
    padding: 3 * theme.spacing.unit,
    [theme.breakpoint.down('xs')]: {
      padding: 2 * theme.spacing.unit,
    },
  },
});
const App = ({ classes }) > (
  <Fragment>
    <CssBaseline>
      <main className={classes.main}>
      <home />
      </main>
    </CssBaseline>
  </Fragment>
);
export default withStyles(styles)(app);
//https://developer.okta.com/blog/2018/07/10/build-a-basic-crud-app-with-node-and-react