import React from 'react';
import Inicial from '../inicial/Incial';
import Curiosities from '../curiosities/Curiosities';
import Feeds from '../feeds/Feeds';

import styles from './Body.module.css';

const Body = ({ showMenu }) => {
    return (
        <div>
            {showMenu.viewInicial && <Inicial />}
            {showMenu.viewCuriosity && <Curiosities />}
            {showMenu.viewFeeds && <Feeds />}
        </div>
    );

}

export default Body;

