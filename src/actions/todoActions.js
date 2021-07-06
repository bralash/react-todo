import * as actionTypes from './todoActionTypes'

export const addTodoItem = todo => {
    return {
        type: actionTypes.ADD_TODO,
        payload: todo
    }
}

export const completeTodo = todoId => {
    return {
        type: actionTypes.COMPLETE_TODO,
        payload: todoId
    }
}