import React, { useContext, useCallback } from 'react';
import ShowContext from '../../../states/showMenu/Context';
import { Link } from 'react-router-dom';

import * as visibleActions from '../../../states/showMenu/actions';
import Body from '../body/Body';
import styles from './Menu.module.css';

 
const Menu = () => {

    const { show, dispatchContainer } = useContext(ShowContext);

    const handleIncial = useCallback(() => {
        dispatchContainer(visibleActions.toViewInicial())
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

    return (
        <div className={styles.container}>
          <div className={styles.containerButton}>
            <button className={styles.buttons} onClick={handleIncial}>Inicio</button>
            <button className={styles.buttons} onClick={handleProfile}>Perfil</button>
            <button className={styles.buttons} onClick={handleNutrition}>Nutrição</button>
            <button className={styles.buttons} onClick={handleTreatment}>Tratamentos</button>
            <Link to='/receitas' className={styles.buttons}>Receitas</Link>
          </div>
          <Body showMenu={show} />
        </div>
    );
}

export default Menu;