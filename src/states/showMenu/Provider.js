import React, { useReducer } from 'react';
import ShowContext from './Context';
import showReducer from './reducer'


const Provider = ({ children }) => {
    const [show, dispatchContainer] = useReducer(showReducer, {viewInitial: true});

    return (
        <ShowContext.Provider value={{ show, dispatchContainer }}>
            {children}
        </ShowContext.Provider>
    );
}

export default Provider;