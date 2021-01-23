import React from "react";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";

import useStyles from "./styles";
const Person = ({ name, age, image, id }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Avatar alt="Remy Sharp" src={image} className={classes.imageStyle} />
      <div className={classes.details}>
        <h5>Name:{name}</h5>
        <p>Age:{age}</p>
      </div>
    </Paper>
  );
};

export default Person;
