import TodoCard from "./TodoCard";

function TodoList(props) {
    const {todos, selectedTab} = props; //destructing the props so we can use it's value

   
    const filterTodosList = selectedTab === 'All'?
        todos:
        selectedTab === 'Completed'?
            todos.filter(val => val.complete):
            todos.filter(val => !val.complete)

    return (
       <>
       {filterTodosList.map((todo, todoIndex) => {
            return (
                <TodoCard 
                key={todoIndex}
                todoIndex={todos.findIndex(val => val.input == todo.input)}
                {...props}
                todo={todo}
                />
            )
       })}
      </>
    )
}

export default TodoList;
