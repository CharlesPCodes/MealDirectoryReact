import * as ActionTypes from './ActionTypes'
import {baseUrl} from '../shared/baseUrl'


export const postMeal = (meal) =>{
    return fetch(baseUrl + 'meals', {
        method: "POST",
        body: JSON.stringify(meal),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => { throw error; }
    )
    .then(response => response.json())
    .then(alert("Thank you for your feedback" + JSON.stringify(meal)))
    .catch(error => {
        console.log('post comment', error.message);
        alert('Your feedback could not be posted\nError: ' + error.message);
    });
}


export const addMeal = meals => ({
    type: ActionTypes.ADD_MEALS,
    payload: meals
})

export const mealsLoading = () => ({
    type: ActionTypes.MEALS_LOADING
});

export const mealsFailed = errMess => ({
    type: ActionTypes.MEALS_FAILED,
    payload: errMess
});


export const fetchMeals = () => dispatch => {
    return fetch(baseUrl + 'meals')
    .then(response => {
            if (response.ok) {
                 return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        }
    )
    .then(response => response.json())
    .then(meals => dispatch(addMeal(meals)))
    .catch(error => dispatch(mealsFailed(error.message)));
};