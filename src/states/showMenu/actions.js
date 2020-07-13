import * as visibleTypes from './types';

export const toViewInitial = () => {
    return {
        type: visibleTypes.VISIBLE_INITIAL,
        payload: {
            shows: {
                viewInitial: true,
                viewProfile: false,
                viewNutrition: false,
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
                viewNutrition: false,
                viewTreatment: false,
                viewRecipes: false
            }
        }
    }
}

export const toViewNutrition = () => {
    return {
        type: visibleTypes.VISIBLE_NUTRITION,
        payload: {
            shows: {
                viewInitial: false,
                viewProfile: false,
                viewNutrition: true,
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
                viewNutrition: false,
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
              viewNutrition: false,
              viewTreatment: false,
              viewRecipes: true
          }
      }
  }
}