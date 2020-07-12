import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import NutritionApp from './pages/nutrition/NutritionApp';
import Recipes from './pages/recipes/Recipes';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component = {NutritionApp} exact path="/"/>
            <Route component = {Recipes} path="/receitas"/>
        </BrowserRouter>
    );

}

export default Routes;