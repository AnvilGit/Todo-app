import React from "react";

function Header(props) {
    const {todos} = props //destructuring props
    const todosLength = todos.todosLength

    const isTasksPlural = todos.length != 1;

    const taskOrTasks = isTasksPlural ? 'tasks': 'task'

    return (
        <header>
            <h1 className="text-gradient">Your have {todosLength} open {taskOrTasks}.</h1>
        </header>
    )
}

export default Header;