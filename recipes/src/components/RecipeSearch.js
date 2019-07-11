import React, {Component} from 'react';

class RecipeSearch extends Component{

    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                            <h1 className="text-slanded text-capitalize"> search for food recipes with <strong>Food2Fork API</strong></h1>

                        </div>

                    </div>
                
                </div>  
            </React.Fragment>
        )
    }
}
export default RecipeSearch;