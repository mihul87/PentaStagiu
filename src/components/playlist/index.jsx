import React, { useContext } from "react";
import "./style.css";
import { AppContext } from "../appStore";
import { ListItems } from "../listItems";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Button,
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function Playlist(props) {
  const classes = useStyles();
  const [category, setCategory] = React.useState("");
  const [title, setTitle] = React.useState("");
  const { addToPlaylist, filterPlaylist, logout, loggedUser } = useContext(
    AppContext
  );

  const handleChangeTitle = event => {
    setTitle(event.target.value);
  };
  const handleChangeCategory = event => {
    setCategory(event.target.value);
  };

  const logoutUser = () => {
    logout();
    props.history.push("/");
  };

  return (
    <div>
      <div className="user-greeting">
        <span>Hello, {loggedUser.userName}</span>
        <Button className="btn-logout" variant="contained" onClick={logoutUser}>
          Logout
        </Button>
      </div>
      <form
        className="form-container"
        noValidate
        autoComplete="off"
        backgroundcolor="secondary"
      >
        <Grid
          spacing={2}
          container
          direction="row"
          alignItems="center"
        >
          <TextField
            id="title"
            required
            label="Titlu"
            variant="outlined"
            color="primary"
            value={title}
            onChange={handleChangeTitle}
          />
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="select-category-label">Media</InputLabel>
            <Select
              labelId="select-category-label"
              id="select-category"
              variant="outlined"
              color="primary"
              value={category}
              onChange={handleChangeCategory}
            >
              <MenuItem value={"muzica"}>Muzica</MenuItem>
              <MenuItem value={"video"}>Video</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            onClick={() => addToPlaylist(title, category)}
          >
            Adaugare
          </Button>
        </Grid>
      </form>
      <div className="filter-container">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => filterPlaylist("")}
        >
          Toate
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => filterPlaylist("muzica")}
        >
          Muzica
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => filterPlaylist("video")}
        >
          Video
        </Button>
      </div>
      <ListItems />
    </div>
  );
}
