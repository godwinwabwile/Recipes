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
 //Ajax request
  //method pulls data from the Api with the Async await
  //method converts the dats into json format
  //method changes the state of this.state.recipes 
  async getRecipes(){
    //catching ay possible errors during data fetching
    try{ 
      const Data = await fetch(this.state.url);//fetch data from api
      const jsonData = await Data.json(); //convert the data to json

      this.setState({
        recipes:jsonData.recipes
      })

    }catch(error){
      console.log(error);
    }
  }
  componentDidMount(){
    this.getRecipes();
  }
  render() {
    console.log(this.state.recipes);
    return (
      <React.Fragment>
        <RecipeList/>
        <RecipeDetails/>
      </React.Fragment>
    );
  }
}

export default App;
