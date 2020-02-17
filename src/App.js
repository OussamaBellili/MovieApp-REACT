import React from "react";
import "./App.css";
import { movies } from "./data";
import MovieList from "./components/MovieList";
import Add from "./components/Add";
import Search from "./components/Search";
import Loader from "./components/Loader"

class App extends React.Component {
  state = {
    movieArray: movies,
    searchValue: "",
    searchRate: 0,
    Loading: true
  };

  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  wait = async (milliseconds) => {
    await this.sleep(milliseconds);
    this.setState({ Loading: false })
  }

  addMovie = (x) => {
    this.setState({
      movieArray: [...this.state.movieArray, x]
    });
  };

  componentDidMount() {
    this.wait(2000);
  }
  render() {
    if (this.state.Loading) return <Loader />
    return (
      <div className="App">
        <Search
          search={x => this.setState({ searchValue: x })}
          starInd={x =>
            this.setState({
              searchRate: x
            })
          }
        />
        <MovieList
          movies={this.state.movieArray}
          searchVal={this.state.searchValue}
          rateVal={this.state.searchRate}
        />
        <Add add={this.addMovie} />
      </div>
    );
  }
}

export default App;
