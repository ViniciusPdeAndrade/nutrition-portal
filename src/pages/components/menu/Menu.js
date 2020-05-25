import React from 'react';
import './menu.css'

const Menu  = () => {

    return(
        <div className= "menu">
            <button className = "buttons">Inicio</button>
            <button className = "buttons">Curiosidades</button>
            <button className = "buttons">Alimentação</button>
            <button className = "buttons">Receitas</button>
        </div>
    );
}

export default Menu;