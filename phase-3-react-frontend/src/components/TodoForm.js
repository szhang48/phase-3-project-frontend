import React, {useState} from 'react';
import uuid from 'uuid';

function TodoForm({addTodo}) {
     const [todo, setTodo] = useState({
        id: '',
        title: '',
        completed: false
     })
function handleTaskInputChange(e) {
    setTodo({...todo, task: e.target.value}); 
}

function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()){
        addTodo({...todo, id: uuid.v4() });
        // reset task input 
        setTodo({...todo, task: ""});
    }
}
    return ( 
        <form onSubmit={handleSubmit}> 
            <input 
            name="task"
            type="text"
            value={todo.task}
            onChange={handleTaskInputChange} /> 
            <button type="submit">submit</button>
        </form>
    );
}



export default TodoForm