import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { Todo } from '../model'
import SingleTodo from './singleTodo'
import './styles.css'


interface Props{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList:React.FC<Props> = ({todos,setTodos,completedTodos,setCompletedTodos}: Props) => {
  return (
    <div className="container">
        <Droppable droppableId="TodoList">
            {
                (provided, snapshot) => (
                    <div className={`todos ${snapshot.isDraggingOver?'dragactive':""}` } ref={provided.innerRef} {...provided.droppableProps}>
                        <span className="todos-heading">
                            Active Tasks
                        </span>
                        {todos.map((todo, index) => (
                            <SingleTodo index={index} todo={todo} todos={todos} key={todo.id} setTodos={setTodos}/>
                        ))}
                        {provided.placeholder}
                    </div>
                )
            }
        </Droppable>
        <Droppable droppableId='TodoRemove'>
            {
                (provided,snapshot) => (
                    <div className={`todos ${snapshot.isDraggingOver?'dragcomplete':""}` } ref={provided.innerRef} {...provided.droppableProps}>
                        <span className="todos-heading">
                            Completed Tasks
                        </span>
                        {completedTodos.map((todo,index) => (
                            <SingleTodo index={index} todo={todo} todos={completedTodos} key={todo.id} setTodos={setCompletedTodos}/>
                        ))}
                        {provided.placeholder}
                    </div>
                )
            }
        </Droppable>
    </div>
  )
}

export default TodoList