import React, { Component } from 'react';
import {recipes} from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import './App.css';

class App extends Component {
  state={
    recipes:recipes,
    url: "https://www.food2fork.com/api/search?key=871808d2890050df9f41ba685fc2108f",
    details_id: 35385,
    page_id: 0
  }
//  //Ajax request
//   //method pulls data from the Api with the Async await
//   //method converts the dats into json format
//   //method changes the state of this.state.recipes 
//   async getRecipes(){
//     //catching ay possible errors during data fetching
//     try{ 
//       const Data = await fetch(this.state.url);//fetch data from api
//       const jsonData = await Data.json(); //convert the data to json

//       this.setState({
//         recipes:jsonData.recipes
//       })

//     }catch(error){
//       console.log(error);
//     }
//   }
//   componentDidMount(){
//     this.getRecipes();
//   }
//page index handler
pageIndexHandler= (index) =>{
  this.setState({
    page_id: index
  })
}
//a switch statement that enables conditional rendering
 conditionalRendering=(index)=>{
  switch (index) {
    default:
      case 1:
        return(<RecipeList recipes={this.state.recipes}/>)
        case 0:
          return(<RecipeDetails details_id={this.state.details_id} pageIndexHandler={this.pageIndexHandler}/>)
  }
}
  render() {
    // console.log(this.state.recipes);
    return (
      <React.Fragment> 
          {this.conditionalRendering(this.state.page_id)}
      </React.Fragment>
    );
  }
}

export default App;
