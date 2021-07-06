import React, { Component } from 'react'
import SearchTodo from '../components/SearchTodo'

export default class TodoList extends Component {
    render() {
        return (
            <div className="todolist">
                <h1>TODO <span className="moon"></span></h1>
                <SearchTodo />
                <div className="list-container"></div>
            </div>
        )
    }
}
