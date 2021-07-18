import React from "react";
import { CircularProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center"
  }
}));

export default function LoadingScreen() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress size={159} />
    </div>
  );
}
