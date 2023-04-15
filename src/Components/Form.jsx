import { useState } from 'react';
import { addTodo } from '../Redux/Features/todosSlice';
import { useDispatch , useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { selectMode } from '../Redux/Features/darkModeSlice';

function Form() {
  const [ title , setTitle ] = useState('');
  const dispatch = useDispatch();

  const mode = useSelector( selectMode );

  const [ check , setCheck ] = useState(false);

  const handleSubmit = (e) => {
    if( title.trim() ) {
      check ? dispatch( addTodo( { id: nanoid() , title , completed: true }  ) ) : dispatch( addTodo( { id: nanoid() , title , completed: false }  ) );
    }
    setTitle('');
    e.preventDefault();
  }
  return (
    <div className={ mode ? 'todo color' : 'todo' }>
      <div className="check">
        <div className="check-mark" onClick={ () => setCheck( !check ) }>
          <div className={ check ? 'fa-solid fa-circle-check' : '' } ></div>
        </div>
      </div>
      <div className="input">
        <form onSubmit={ handleSubmit }>
          <input id="input"  style={ { color: mode ? 'white' : '' } } type="text" placeholder="Create a new todo..." value={title} onChange={ (e) => setTitle(e.target.value) } autoFocus/>
        </form>
      </div>
    </div>
  );
}

export default Form;
