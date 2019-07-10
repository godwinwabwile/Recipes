import React, {Component} from 'react';
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';

class RecipeList extends Component{

    render(){
        const {recipes} = this.props;  
        return(
            <React.Fragment>
                <RecipeSearch/>
                <div className="container my-5">
                    {/* title */}
                    <div className="row ">
                        <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb3">
                            <h1 className="text-slanded">Recipe List</h1>
                            
                        </div>
                         {/* end of title*/}
                    
                    </div>
                    <div className="row">
                    {/* pass recipe properties to the recipe component */}
                    {
                    recipes.map(recipe =>{
                    return(
                        <Recipe
                            key={recipe.recipe_id}
                            recipe={recipe}
                        />  
                        );
                    })}
                    </div>
           

                </div>
                                
                  
            </React.Fragment>
        )
    }
}
export default RecipeList;