import React, { Component } from 'react';
import {recipes} from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import './App.css';

class App extends Component {
  state={
    recipes:[],
    url: "https://www.food2fork.com/api/search?key=871808d2890050df9f41ba685fc2108f"
  }
  render() {
    return (
      <React.Fragment>
        <RecipeList/>
        <RecipeDetails/>
      </React.Fragment>
    );
  }
}

export default App;
