import React from "react";
import firebase from "../utils/firebase";
import {
  Avatar,
  makeStyles,
  Button,
  Typography,
  Grid
} from "@material-ui/core";

import Usersimages from "../components/Usersimages";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: "100vh"
  }
}));

export default function Home() {
  const classes = useStyles();

  const logout = () => {
    firebase.auth().signOut();
  };

  //FirebaseAuth.getInstance().getCurrentUser();
  return (
    <div className={classes.root}>
      {/*<h1> WELCOME TO INFOMAGE! </h1>*/}
      <Typography variant="h2" color="textPrimary">
        WELCOME TO INFOMAGE!
      </Typography>
      <Avatar src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d457e81b-8fff-4551-bf7b-041a87f7a8fd/d58yfn2-80a69464-3c44-4790-9c71-155b4b039968.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q0NTdlODFiLThmZmYtNDU1MS1iZjdiLTA0MWE4N2Y3YThmZFwvZDU4eWZuMi04MGE2OTQ2NC0zYzQ0LTQ3OTAtOWM3MS0xNTViNGIwMzk5NjguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bGMyF3LEE55J2nQW4N7cY0GbNDK0JsJETewFVunI6Hg" />{" "}
      Hello! I am Kyoshi
      <p>{console.log(" displayName")}</p>
      <div>
        <Usersimages className="Gallery101" />
      </div>
      <Grid container spacing={2}>
        <Grid item>
          <Button variant="contained" color="Primary" onClick={logout}>
            Light Theme
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="Secondary" onClick={logout}>
            LOGOUT
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
