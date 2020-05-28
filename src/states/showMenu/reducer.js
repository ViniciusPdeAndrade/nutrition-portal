import * as visibleTypes from './types';

const reducer = (_, action) => {
    switch(action.type) {
        case visibleTypes.VISIBLE_INICIAL:
            return action.payload.show

        default:
            throw new Error();
    }
}

export default reducer;