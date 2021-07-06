import * as actionTypes from './todoActionTypes'

const initialState = {
    loading: false,
    todos: [
        {id: 0, task: 'Clean the house',completed: false},
        {id: 1, task: 'Finish the project',completed: false},
        {id: 2, task: 'Make money',completed: false}
    ],
    status: 'Active'
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_TODO:
            return {
                ...state,
                todos: action.payload
            }
        case actionTypes.COMPLETE_TODO: 
            return {
                ...state,
                todos: action.payload.completed = true
            }
        default: return state
    }
}

export default rootReducer;