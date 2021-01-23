import React from "react";

import Person from "../person/Person";

import Paper from "@material-ui/core/Paper";

import useStyles from "./styles";

const PersonList = ({ persons }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} variant="outlined">
      <h3>{persons.length} birthdays today</h3>
      {persons.map((person) => {
        const { id, name, age, image } = person;
        return <Person key={id} name={name} age={age} image={image} />;
      })}
    </Paper>
  );
};

export default PersonList;
