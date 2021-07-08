import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        return (
            <li className="todo-item">
                <span className="todo-check"></span>
                <span className="todo-name">Jog around the park</span>
            </li>
        )
    }
}
