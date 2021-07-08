import React, { Component } from 'react'
import SearchTodo from '../components/SearchTodo'
import TodoItem from '../components/TodoItem'

export default class TodoList extends Component {
    render() {
        return (
            <div className="todolist">
                <h1>TODO <span className="moon"></span></h1>
                <SearchTodo />
                <ul className="list-container">
                    <TodoItem />
                </ul>
            </div>
        )
    }
}
