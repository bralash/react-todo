import React, { Component } from 'react'

export default class SearchTodo extends Component {
    render() {
        return (
            <div className="search-todo">
                <div className="check">
                    <span></span>
                </div>
                <div className="search-input">
                    <input type="text" placeholder="Create a new todo" />
                </div>
            </div>
        )
    }
}
