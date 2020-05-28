import React, { useContext, useCallback } from 'react';
import ShowContext from '../../../states/showMenu/Context';
import * as visibleActions from '../../../states/showMenu/actions';
import Body from '../body/Body';
import './menu.css'


const Menu = () => {

    const { show, dispatchContainer } = useContext(ShowContext);

    const handleIncial = useCallback(() => {
        dispatchContainer(visibleActions.visibleTue(show))
    }, [show, dispatchContainer]);

   return (
        <div>
            <div className="menu">
                <button className="buttons" onClick={handleIncial}>Inicio</button>
                <button className="buttons">Curiosidades</button>
                <button className="buttons">Alimentação</button>
                <button className="buttons">Receitas</button>
            </div>
        <Body showMenu= {show}/>
        </div>
    );
}

export default Menu;