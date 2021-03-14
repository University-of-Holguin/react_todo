import React, { Component } from 'react';

export default class CreateTodo extends Component {
    render () {
        return (
            <form onSubmit={this.onSubmit.bind(this)} className="create_todo_form">
                <input type="text" placeholder="Task" ref="taskMessage" autoFocus/>
                <button>Add</button>
            </form>
        );
    }
    onSubmit (e) {
        this.props.createTask(this.refs.taskMessage.value);
        this.refs.taskMessage.value = "";
        e.preventDefault();
    }
}
