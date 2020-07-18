import * as visibleTypes from './types';

export const toViewInitial = () => {
    return {
        type: visibleTypes.VISIBLE_INITIAL,
        payload: {
            shows: {
                viewInitial: true,
                viewProfile: false,
                viewNutrients: false,
                viewTreatment: false,
                viewRecipes: false
            }
        }
    }
}

export const toViewProfile = () => {
    return {
        type: visibleTypes.VISIBLE_PROFILE,
        payload: {
            shows: {
                viewInitial: false,
                viewProfile: true,
                viewNutrients: false,
                viewTreatment: false,
                viewRecipes: false
            }
        }
    }
}

export const toViewNutrients = () => {
    return {
        type: visibleTypes.VISIBLE_NUTRIENTS,
        payload: {
            shows: {
                viewInitial: false,
                viewProfile: false,
                viewNutrients: true,
                viewTreatment: false,
                viewRecipes: false
            }
        }
    }
}

export const toViewTreatment = () => {
    return {
        type: visibleTypes.VISIBLE_TREATMENT,
        payload: {
            shows: {
                viewInitial: false,
                viewProfile: false,
                viewNutrients: false,
                viewTreatment: true,
                viewRecipes: false
            }
        }
    }
}

export const toViewRecipes = () => {
  return {
      type: visibleTypes.VISIBLE_TREATMENT,
      payload: {
          shows: {
              viewInitial: false,
              viewProfile: false,
              viewNutrients: false,
              viewTreatment: false,
              viewRecipes: true
          }
      }
  }
}