import React from 'react';
import Initial from '../initial/Initial';
import Profile from '../profile/Profile';
import Nutrition from '../nutrition/Nutrition';
import Treatment from '../treatment/Treatment';

import styles from './Body.module.css';

const Body = ({ showMenu }) => {
    return (
        <div className={styles.container}>
            {showMenu.viewInitial && <Initial />}
            {showMenu.viewProfile && <Profile />}
            {showMenu.viewNutrition && <Nutrition />}
            {showMenu.viewTreatment && <Treatment />}
            
        </div>
    );

}

export default Body;

