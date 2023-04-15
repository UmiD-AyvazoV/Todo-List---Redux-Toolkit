import { useSelector , useDispatch } from "react-redux";
import { selectTodos , checkTodo , delTodo , filterTodos , changeFilter , clearCompleted } from "../Redux/Features/todosSlice";
import { selectMode } from '../Redux/Features/darkModeSlice';

let activeFilter = [];

function TodoList() {
 
  let todos = useSelector(selectTodos);

  const filtered = useSelector(filterTodos);
  const dispatch = useDispatch();

  const todosLeft = todos.filter( todo => todo.completed === false ).length;

  const mode = useSelector(selectMode); 

  activeFilter = todos;
  if( filtered !== 'all' ){
    activeFilter = todos.filter( todo => filtered === 'completed' ? todo.completed === true : todo.completed === false);
  }

  return (
    <div className={ mode ? 'wrapper color' : 'wrapper' } id="div">
      <div className="items">

        {activeFilter.map((todo) => (
          <div className="item" key={todo.id}>
            <div className="check">
              <div className="check-mark" onClick={ () => dispatch( checkTodo( todo.id ) ) }>
                  <div className={ todo.completed ? 'fa-solid fa-circle-check on' : 'fa-solid fa-circle-check off' }></div>
              </div>
             </div>
            <div className={ todo.completed === true ? 'text line' : 'text' } style={ { color: mode ? 'white' : '' } }>{todo.title}</div>
            <i className="fas fa-times-circle" onClick={ () => dispatch( delTodo( todo.id ) ) }></i>
          </div>
        ))}

      </div>
      <div className={ mode ? 'info color' : 'info' }>
        <div className="left" style={ { color: mode ? 'white' : '' } }>
          <span className="count">{todosLeft}</span> item{ todosLeft > 1 && 's' } left
        </div>
        <div className="statuses">
          <span style={ { color: mode ? 'white' : '' } } className={ filtered === 'all' ? 'active' : '' } onClick={ () => dispatch( changeFilter('all') ) }>All</span>
          <span style={ { color: mode ? 'white' : '' } } className={ filtered === 'completed' ? 'active' : '' } onClick={ () => dispatch( changeFilter('completed') ) }>Completed</span>
          <span style={ { color: mode ? 'white' : '' } } className={ filtered === 'uncompleted' ? 'active' : '' } onClick={ () => dispatch( changeFilter('uncompleted') ) }>Uncompleted</span>
        </div>
        <div className="clear">
          <span style={ { color: mode ? 'white' : '' } } onClick={ () => dispatch( clearCompleted() ) }>Clear Completed</span>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
