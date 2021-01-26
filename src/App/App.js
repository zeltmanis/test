import React from 'react';
import './App.css';

import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import PageHeader from '../components/PageHeader';

import Employees from "../pages/Employees/Employees";




const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
})

function App() {
  const classes = useStyles();

  return (


      <div className={classes.appMain}>
        <Employees />
      </div>


  );
}

export default App;
