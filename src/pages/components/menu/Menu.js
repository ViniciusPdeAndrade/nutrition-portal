import React, { useContext, useCallback } from 'react';
import ShowContext from '../../../states/showMenu/Context';

import * as visibleActions from '../../../states/showMenu/actions';
import Body from '../body/Body';
import styles from './Menu.module.css';

 
const Menu = () => {

    const { show, dispatchContainer } = useContext(ShowContext);

    const handleInitial = useCallback(() => {
        dispatchContainer(visibleActions.toViewInitial())
    }, [dispatchContainer]);

    const handleProfile = useCallback(() => {
        dispatchContainer(visibleActions.toViewProfile())
    }, [dispatchContainer]);

    const handleNutrition = useCallback(() => {
        dispatchContainer(visibleActions.toViewNutrition())
    }, [dispatchContainer]);

    const handleTreatment = useCallback(() => {
        dispatchContainer(visibleActions.toViewTreatment())
    }, [dispatchContainer]);

    const handleRecipes = useCallback(() => {
      dispatchContainer(visibleActions.toViewRecipes())
    }, [dispatchContainer]);

    return (
        <div className={styles.container}>
          <div className={styles.containerButton}>
            <button className={styles.buttons} onClick={handleInitial}>Inicio</button>
            <button className={styles.buttons} onClick={handleProfile}>Perfil</button>
            <button className={styles.buttons} onClick={handleTreatment}>Tratamentos</button>
            <button className={styles.buttons} onClick={handleRecipes}>Receitas</button>
            <button className={styles.buttons} onClick={handleNutrition}>Nutrientes</button>
          </div>
          <Body showMenu={show} />
        </div>
    );
}

export default Menu;