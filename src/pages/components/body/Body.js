import React from 'react';
import Initial from '../initial/Initial';
import Profile from '../profile/Profile';
import Nutrients from '../nutrients/Nutrients';
import Treatment from '../treatment/Treatment';
import Recipes from '../recipes/Recipes';

import styles from './Body.module.css';

const Body = ({ showMenu }) => {
    return (
        <div className={styles.container}>
            {showMenu.viewInitial && <Initial />}
            {showMenu.viewProfile && <Profile />}
            {showMenu.viewTreatment && <Treatment />}
            {showMenu.viewRecipes && <Recipes />}
            {showMenu.viewNutrients && <Nutrients />}            
        </div>
    );

}

export default Body;

