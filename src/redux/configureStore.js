import {createStore, combineReducers, applyMiddleware } from 'redux';
import {Meals} from './meals'
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            meals: Meals,
            ...createForms({
                feedbackForm: InitialFeedback
            })
        }),       
        applyMiddleware(thunk, logger)
    );

    return store;
}