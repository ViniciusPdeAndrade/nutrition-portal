import React, { useContext, useCallback } from 'react';
import ShowContext from '../../../states/showMenu/Context';
import * as visibleActions from '../../../states/showMenu/actions';
import Body from '../body/Body';
import styles from './Menu.module.css';


const Menu = () => {

    const { show, dispatchContainer } = useContext(ShowContext);

    const handleIncial = useCallback(() => {
        dispatchContainer(visibleActions.toViewInicial())
    }, [dispatchContainer]);

    const handleCuriosities = useCallback(() => {
        dispatchContainer(visibleActions.toViewCuriosity())
    }, [dispatchContainer]);

    const handleFeeds = useCallback(() => {
        dispatchContainer(visibleActions.toViewFeeds())
    }, [dispatchContainer]);

    return (
        <div className={styles.container}>
                <button className={styles.buttons} onClick={handleIncial}>Inicio</button>
                <button className={styles.buttons} onClick={handleCuriosities}>Curiosidades</button>
                <button className={styles.buttons} onClick={handleFeeds}>Alimentação</button>
                <button className={styles.buttons}>Receitas</button>
            <Body showMenu={show} />
        </div>
    );
}

export default Menu;