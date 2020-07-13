import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import NutritionApp from './pages/nutrition/NutritionApp';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component = {NutritionApp} exact path="/"/>
        </BrowserRouter>
    );

}

export default Routes;