import React from 'react';
import Axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      ships: [],
      originalShips: [],
      loaded: false,
      keys: [],
      filters: {
        name: null,
        model: null,
        manufacturer: null,
        cost: null,
        length: null,
        speed: null,
        crew: null,
        passengers: null,
        cargo: null,
        used: null,
        rating: null,
        MGLT: null,
        className: null,
        pilots: null,
        filterFilms: null
      }
    };
    this.filterName = this.filterName.bind(this);
    this.filterModel = this.filterModel.bind(this);
    this.filterManufacturer = this.filterManufacturer.bind(this);
    this.filterCost = this.filterCost.bind(this);
    this.filterLength = this.filterLength.bind(this);
    this.filterSpeed = this.filterSpeed.bind(this);
    this.filterCrew = this.filterCrew.bind(this);
    this.filterPassengers = this.filterPassengers.bind(this);
    this.filterCargo = this.filterCargo.bind(this);
    this.filterRating = this.filterRating.bind(this);
    this.filterMGLT = this.filterMGLT.bind(this);
    this.filterClass = this.filterClass.bind(this);
    this.filterPilots = this.filterPilots.bind(this);
    this.filterFilms = this.filterFilms.bind(this);
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
        ships: response.data.results,
        originalShips: response.data.results
      });
    });
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

  filterName(name){
      let ships = this.state.originalShips;
      let filtered = [];

      for(let i=0; i<ships.length; i++){
        if(ships[i].name.includes(name.target.value)){
          filtered.push(ships[i]);
        }
      }

      this.setState({
        ships: filtered
      });
  }

  filterModel(model){
    let ships = this.state.originalShips;
    let filtered = [];

    for(let i=0; i<ships.length; i++){
      if(ships[i].model.includes(model.target.value)){
        filtered.push(ships[i]);
      }
    }

    this.setState({
      ships: filtered
    });
  }

  filterManufacturer(manufacturer){
    let ships = this.state.originalShips;
    let filtered = [];

    for(let i=0; i<ships.length; i++){
      if(ships[i].manufacturer.includes(manufacturer.target.value)){
        filtered.push(ships[i]);
      }
    }

    this.setState({
      ships: filtered
    });
  }

  filterCost(cost){
    if(cost.target.value === ""){
      this.setState({
        ships: this.state.originalShips
      });
      return;
    }
    let ships = this.state.originalShips;
    let filtered = [];
    cost = parseInt(cost.target.value);
    for(let i=0; i<ships.length; i++){
        if(ships[i].cost_in_credits > cost){
          filtered.push(ships[i]);
        }
    }

    this.setState({
      ships: filtered
    });
  }

  filterLength(length){
    if(length.target.value === ""){
      this.setState({
        ships: this.state.originalShips
      });
      return;
    }
    let ships = this.state.originalShips;
    let filtered = [];
    length = parseInt(length.target.value);
    for(let i=0; i<ships.length; i++){
        if(ships[i].length > length){
          filtered.push(ships[i]);
        }
    }

    this.setState({
      ships: filtered
    });
  }

  filterSpeed(speed){
    if(speed.target.value === ""){
      this.setState({
        ships: this.state.originalShips
      });
      return;
    }
    let ships = this.state.originalShips;
    let filtered = [];
    speed = parseInt(speed.target.value);

    for(let i=0; i<ships.length; i++){
        if(ships[i].speed > speed){
          filtered.push(ships[i]);
        }
    }

    this.setState({
      ships: filtered
    });
  }

  filterCrew(crew){
    if(crew.target.value === ""){
      this.setState({
        ships: this.state.originalShips
      });
      return;
    }
    let ships = this.state.originalShips;
    let filtered = [];

    crew = parseInt(crew.target.value);

    for(let i=0; i<ships.length; i++){
        if(ships[i].crew > crew){
          filtered.push(ships[i]);
        }
    }

    this.setState({
      ships: filtered
    });
  }

  filterPassengers(passengers){
    if(passengers.target.value === ""){
      this.setState({
        ships: this.state.originalShips
      });
      return;
    }
    let ships = this.state.originalShips;
    let filtered = [];

    passengers = parseInt(passengers.target.value);

    for(let i=0; i<ships.length; i++){
        if(ships[i].passengers > passengers){
          filtered.push(ships[i]);
        }
    }

    this.setState({
      ships: filtered
    });
  }

  filterCargo(cargo){
    if(cargo.target.value === ""){
      this.setState({
        ships: this.state.originalShips
      });
      return;
    }
    let ships = this.state.originalShips;
    let filtered = [];

    cargo = parseInt(cargo.target.value);

    for(let i=0; i<ships.length; i++){
        if(ships[i].cargo_capacity > cargo){
          filtered.push(ships[i]);
        }
    }

    this.setState({
      ships: filtered
    });
  }

  filterRating(rating){
    if(rating.target.value === ""){
      this.setState({
        ships: this.state.originalShips
      });
      return;
    }
    let ships = this.state.originalShips;
    let filtered = [];

    rating = parseInt(rating.target.value);

    for(let i=0; i<ships.length; i++){
        if(ships[i].hyperdrive_rating > rating){
          filtered.push(ships[i]);
        }
    }

    this.setState({
      ships: filtered
    });
  }

  filterMGLT(mglt){
    if(mglt.target.value === ""){
      this.setState({
        ships: this.state.originalShips
      });
      return;
    }
    let ships = this.state.originalShips;
    let filtered = [];

    mglt = parseInt(mglt.target.value);

    for(let i=0; i<ships.length; i++){
        if(ships[i].MGLT > mglt){
          filtered.push(ships[i]);
        }
    }

    this.setState({
      ships: filtered
    });
  }

  filterClass(className){
    let ships = this.state.originalShips;
    let filtered = [];

    for(let i=0; i<ships.length; i++){
      if(ships[i].starship_class.includes(className.target.value)){
        filtered.push(ships[i]);
      }
    }

    this.setState({
      ships: filtered
    });
  }

  filterPilots(pilots){
    if(pilots.target.value === ""){
      this.setState({
        ships: this.state.originalShips
      });
      return;
    }
    let ships = this.state.originalShips;
    let filtered = [];

    pilots = parseInt(pilots.target.value);

    for(let i=0; i<ships.length; i++){
        if(ships[i].pilots.length > pilots){
          filtered.push(ships[i]);
        }
    }

    this.setState({
      ships: filtered
    });
  }

  filterFilms(films){
    if(films.target.value === ""){
      this.setState({
        ships: this.state.originalShips
      });
      return;
    }
    let ships = this.state.originalShips;
    let filtered = [];

    films = parseInt(films.target.value);

    for(let i=0; i<ships.length; i++){
        if(ships[i].films.length > films){
          filtered.push(ships[i]);
        }
    }

    this.setState({
      ships: filtered
    });
  }

  render(){
    if(this.state.loaded){
      return (
        <table border="1">
          <thead>
            <tr>
              <th key="1">Name<br/><input type="text" onChange={this.filterName}/></th>
              <th key="2">Model<br/><input type="text" onChange={this.filterModel}/></th>
              <th key="3">Manufacturer<br/><input type="text" onChange={this.filterManufacturer}/></th>
              <th key="4">Cost(CR)<br/><input type="number" min="0" onChange={this.filterCost}/></th>
              <th key="5">Length<br/><input type="number" min="0" onChange={this.filterLength}/></th>
              <th key="6">Max atmosphering speed<br/><input type="number" min="0" onChange={this.filterSpeed}/></th>
              <th key="7">Crew<br/><input type="number" min="0" onChange={this.filterCrew}/></th>
              <th key="8">Passengers<br/><input type="number" min="0" onChange={this.filterPassengers}/></th>
              <th key="9">Cargo capacity<br/><input type="number" min="0" onChange={this.filterCargo}/></th>
              <th key="10">Used for</th>
              <th key="11">Hyperdrive rating<br/><input type="number" step="0.5" min="0" onChange={this.filterRating}/></th>
              <th key="12">MGLT<br/><input type="number" min="0" onChange={this.filterMGLT}/></th>
              <th key="13">Starship class<br/><input type="text" onChange={this.filterClass}/></th>
              <th key="14">Pilot count<br/><input type="number" min="0" onChange={this.filterPilots}/></th>
              <th key="15">Film count<br/><input type="number" min="0" onChange={this.filterFilms}/></th>
              <th key="16">Created</th>
              <th key="17">Edited</th>
              <th key="18">URL</th>
            </tr>
          </thead>
          <tbody>
              {this.state.ships.map(this.eachSpaceShiper)}
          </tbody>
        </table>
      );
    }
    else{
      return ("");
    }
  }
}

export default App;
