import React from 'react';
import Inicial from '../inicial/Incial';

const Body = ({ showMenu }) => {

    return(
        <div>
        {showMenu && <Inicial/>}
        </div>
    );

}


export default Body;

