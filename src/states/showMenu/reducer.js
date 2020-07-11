import * as visibleTypes from './types';

const reducer = (_, action) => {
    switch (action.type) {
        case visibleTypes.VISIBLE_INICIAL:
            return action.payload.shows

        case visibleTypes.VISIBLE_PROFILE:
            return action.payload.shows

        case visibleTypes.VISIBLE_NUTRITION:
            return action.payload.shows

        case visibleTypes.VISIBLE_TREATMENT:
            return action.payload.shows
        default:
            throw new Error();
    }
}

export default reducer;