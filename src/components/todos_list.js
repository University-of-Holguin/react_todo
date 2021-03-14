import React, { Component } from 'react';
import TodosListItem from "./todos_list_item";

export default class TodosList extends Component {
    renderItems () {
        return this.props.todos.map((c, index) => {
            return (
                <TodosListItem
                    key={index}
                    {...c}
                    id={index}
                    toggleTask={this.props.toggleTask}
                    editTask={this.props.editTask}
                    deleteTask={this.props.deleteTask}
                />
            )
        });
    }
    render () {
        if (!this.props.todos.length) {
            return <p className="Todos">Mi aplicación de TODOs</p>;
        }
        return (
            <table>
                {}
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        )
    }
}
