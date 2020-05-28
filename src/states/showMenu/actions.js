import * as visibleTypes from './types';

export const toViewInicial = () => {
    return {
        type: visibleTypes.VISIBLE_INICIAL,
        payload: {
            shows: {
                viewInicial: true,
                viewCuriosity: false,
                viewFeeds: false
            }
        }
    }
}

export const toViewCuriosity = () => {
    return {
        type: visibleTypes.VISIBLE_CURIOSITY,
        payload: {
            shows: {
                viewInicial: false,
                viewCuriosity: true,
                viewFeeds: false
            }
        }
    }
}

export const toViewFeeds = () => {
    return {
        type: visibleTypes.VISIBLE_FEEDS,
        payload: {
            shows: {
                viewInicial: false,
                viewCuriosity: false,
                viewFeeds: true
            }
        }
    }
}