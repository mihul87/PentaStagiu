import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Grid } from "@material-ui/core";
import { AppContext } from "../appStore";

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
  },
  }
}));

export default function Login(props) {
  const classes = useStyles();
  const [userName, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { login, loggedInStatus } = useContext(AppContext);

  const handleChangeUser = event => {
    setUser(event.target.value);
  };
  
  const handleChangePassword = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    login(userName, password);
    if (loggedInStatus === "LoggedIn") {
      props.history.push("/playlist");
    }
    event.preventDefault();
  };

  return (
    <div>
      <form
        className={classes.root}
        onSubmit={handleSubmit}
        autoComplete="off"
        justify="space-around"
      >
        <Grid
          justify="center"
          container
          direction="column"
          alignItems="center"
        > 
          <TextField
            id="userName"
            label="Username"
            variant="outlined"
            value={userName}
            onChange={handleChangeUser}
            required
          />
          <TextField
            id="Password"
            label="Parola"
            variant="outlined"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={handleChangePassword}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Logare
          </Button>
        </Grid>
      </form>
    </div>
  );
}
