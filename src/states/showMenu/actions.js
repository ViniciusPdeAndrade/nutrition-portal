import * as visibleTypes from './types';

export const toViewInicial = () => {
    return {
        type: visibleTypes.VISIBLE_INICIAL,
        payload: {
            shows: {
                viewInicial: true,
                viewProfile: false,
                viewNutrition: false,
                viewTreatment: false
            }
        }
    }
}

export const toViewProfile = () => {
    return {
        type: visibleTypes.VISIBLE_PROFILE,
        payload: {
            shows: {
                viewInicial: false,
                viewProfile: true,
                viewNutrition: false,
                viewTreatment: false
            }
        }
    }
}

export const toViewNutrition = () => {
    return {
        type: visibleTypes.VISIBLE_NUTRITION,
        payload: {
            shows: {
                viewInicial: false,
                viewProfile: false,
                viewTreatment: false,
                viewNutrition: true
            }
        }
    }
}

export const toViewTreatment = () => {
    return {
        type: visibleTypes.VISIBLE_TREATMENT,
        payload: {
            shows: {
                viewInicial: false,
                viewProfile: false,
                viewNutrition: false,
                viewTreatment: true
            }
        }
    }
}