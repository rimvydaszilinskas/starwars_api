import React from 'react';
import Axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      ships: [],
      loaded: false,
      keys: []
    };
  }

  componentDidMount(){
    this.getSpaceShips();
  }

  getSpaceShips(){
    Axios({
      method: 'get',
      url: 'https://swapi.co/api/starships/',
      responseType: 'json',
    }).then((response) => {
      this.setState({
        loaded: true,
        ships: response.data.results
      });
    });
  }

  eachHeader(header, i){
    return(
      <th key={i}>{header}</th>
    )
  }

  eachSpaceShiper(spaceShip){
    return (
      <tr>
        <td>{spaceShip.name}</td>
        <td>{spaceShip.model}</td>
        <td>{spaceShip.manufacturer}</td>
        <td>{spaceShip.cost_in_credits}</td>
        <td>{spaceShip.length}</td>
        <td>{spaceShip.max_atmosphering_speed}</td>
        <td>{spaceShip.crew}</td>
        <td>{spaceShip.passengers}</td>
        <td>{spaceShip.cargo_capacity}</td>
        <td>{spaceShip.consumables}</td>
        <td>{spaceShip.hyperdrive_rating}</td>
        <td>{spaceShip.MGLT}</td>
        <td>{spaceShip.starship_class}</td>
        <td>{spaceShip.pilots.length === 0 ? "" : spaceShip.pilots.length}</td>
        <td>{spaceShip.films.length === 0 ? "" : spaceShip.films.length}</td>
        <td>{spaceShip.created.split("T")[0]}</td>
        <td>{spaceShip.edited.split("T")[0]}</td>
        <td><a href={spaceShip.url}>Link</a></td>
      </tr>
    );
  }

  render(){
    if(this.state.loaded){
      let keys = Object.keys(this.state.ships[0]);
      // this.setState({
      //   keys: keys
      // });

      return (
        <table border="1">
          <thead>
            <tr>
              {keys.map(this.eachHeader)}
            </tr>
          </thead>
          <tbody>
              {this.state.ships.map(this.eachSpaceShiper)}
          </tbody>
        </table>
      );
    }
    else{
      return "nothing";
    }
  }
}

export default App;
