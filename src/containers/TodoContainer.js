import React, { Component } from 'react'
import TodoList from './TodoList'

export default class TodoContainer extends Component {
    render() {
        return (
            <div className="container">
                <div className="image-container"></div>
                <TodoList />

            </div>
        )
    }
}
