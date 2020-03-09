import React, { Component } from "react";

export const AppContext = React.createContext();

export default class AppStore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      loggedUser: {},
      loggedInStatus: "NotLoggedIn",
      media: [],
      filter: ""
    };
  }

  addToPlaylist = (title, category) => {
    const ListUpdated = this.state.media.slice();
    let addedItem = ListUpdated.find(item => item.title === title);

    if (!addedItem) {
      const itemToAdd = { title: title, category: category };
      ListUpdated.push(itemToAdd);
      this.setState({ media: ListUpdated });
    }
  };

  filterPlaylist = filter => {
    this.setState({ filter: filter });
  };

  login = (userName, password) => {
    const user = this.state.users.find(
      user => user.userName === userName && user.password === password
    );
    if (!user) {
      alert(`Username-ul sau parola au fost introduse eronat!`);
      return;
    }
    this.setState({ loggedUser: user, loggedInStatus: "LoggedIn" });
  };

  logout = () => {
    this.setState({ loggedUser: {}, loggedInStatus: "NotLoggedIn" });
  };

  componentDidMount() {
    this.setState({
      users: [
        { userName: "Admin", password: "@dmin" },
        { userName: "Mihu", password: "M!hu" }
      ],
      media: [
        { id: 1, title: "Closer to the edje", category: "muzica" },
        { id: 2, title: "Assasins Creed", category: "video" }
      ]
    });
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          addToPlaylist: this.addToPlaylist,
          filterPlaylist: this.filterPlaylist,
          login: this.login,
          logout: this.logout
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
