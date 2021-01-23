import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    width: "400px",
    height: "100px",
    backgroundColor: "#baaddb",
    margin: "5px 0",
    padding: "20px 5px",
    display: "flex",
    justifyContent: "start",
  },
  heading: {
    padding: "0",
    margin: "0",
  },
  imageStyle: {
    width: "60px",
    height: "60px",
  },
  details: {
    marginLeft: "10px",
  },
}));
