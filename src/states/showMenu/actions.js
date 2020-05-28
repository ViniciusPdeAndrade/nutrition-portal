import * as visibleTypes from './types';

export const visibleTue = show => {
    return {
        type: visibleTypes.VISIBLE_INICIAL,
        payload: {
            show: !show
        }
    }
}

export const visibleFalse = () => {
    return {
        type: visibleTypes.VISIBLE_INICIAL,
        payload: {
            show: false
        }
    }
}