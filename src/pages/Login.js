import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "../utils/firebase";
import {
  Button,
  makeStyles,
  TextField,
  Grid,
  Card,
  CardContent,
  Typography,
  Snackbar
} from "@material-ui/core";

import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: theme.palette.background.default
  },
  card: {
    width: 350
  }
}));

const initialState = {
  email: "",
  password: ""
};

export default function Login() {
  const classes = useStyles();
  const [state, setState] = useState(initialState);
  const [message, setMessage] = useState({
    open: false,
    type: "error", // or success
    text: ""
  });

  const handleChange = (prop) => (e) => {
    setState({ ...state, [prop]: e.target.value });
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setMessage({ ...message, open: false });
  };

  const showMessage = (type, text) => {
    setMessage({ ...message, open: true, type, text });
  };

  const register = (e) => {
    e.preventDefault();

    if (!state.email || !state.password) {
      showMessage("error", "Fillout all Fields!");
    } // else if for number/age
    else {
      firebase
        .auth()
        .signInWithEmailAndPassword(state.email, state.password)
        .then((signedInUser) => {
          showMessage(
            "success",
            "Logged in Complete! - " + signedInUser.user.email
          );
        })
        .catch((error) => {
          showMessage("error", error.message);
        });
    }
  };

  return (
    <Grid
      container
      direction="column"
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <Typography variant="h3" color="primary">
          Welcome to InfoMage
        </Typography>
      </Grid>
      <Grid item>
        <Card className={classes.card}>
          <CardContent>
            <form>
              <Grid container direction="column" spacing={3}>
                <Grid item>
                  <TextField
                    variant="outlined"
                    type="email"
                    label="Email"
                    required
                    fullWidth
                    value={state.email}
                    onChange={handleChange("email")}
                  />
                </Grid>
                <Grid item>
                  <Grid item>
                    <TextField
                      variant="outlined"
                      type="password"
                      label="Password"
                      required
                      fullWidth
                      value={state.password}
                      onChange={handleChange("password")}
                    />
                  </Grid>
                </Grid>
                <Grid item container spacing={3} justify="center">
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      onClick={register}
                    >
                      LOGIN
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="secondary"
                      component={Link}
                      to="/Register"
                    >
                      CREATE NEW ACCOUNT
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>

      <Snackbar
        open={message.open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={message.type}>
          {message.text}
        </Alert>
      </Snackbar>
    </Grid>
  );
}
