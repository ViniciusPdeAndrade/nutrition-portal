import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import NutritionApp from './pages/nutrition/NutritionApp';
import Receipes from './pages/recipes/Receipes';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component = {NutritionApp} exact path="/"/>
            <Route component = {Receipes} path="/receitas"/>
        </BrowserRouter>
    );

}

export default Routes;