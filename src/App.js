import React from 'react';
import Axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      ships: []
    }

  }

  getSpaceShips(){
    Axios({
      method: 'get',
      url: 'https://swapi.co/api/starships/',
      responseType: 'application/jsons',
    }).then((response) => {
      console.log(response.data.results);
    });
  }

  render(){
    this.getSpaceShips();
    return "hello";
  }
}

export default App;
