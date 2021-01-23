import React, { useState } from "react";

import PersonList from "./components/personList/PersonList";

import { Persons } from "./data";

import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import MenuIcon from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

const App = () => {
  const [persons, setPersons] = useState(Persons);
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Birthday Reminder App
          </Typography>
        </Toolbar>
      </AppBar>
      {/* <Grid
        container
        justify="center"
        alignItems="center"
        style={{
          height: "100vh",
          border: "1px dotted red",
          backgroundColor: "rgb(227 227 227)",
        }}
        spacing={2}
      >
        <Grid item xs={12}>
          <PersonList></PersonList>
        </Grid>
      </Grid> */}

      <Grid
        container
        style={{ backgroundColor: "rgb(227 227 227)", height: "100vh" }}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Grid container justify="center" alignItems="center">
            <Grid item>
              <PersonList persons={persons}></PersonList>
              <div style={{ textAlign: "center", marginTop: "10px" }}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={() => setPersons([])}
                >
                  Clear All
                </Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
