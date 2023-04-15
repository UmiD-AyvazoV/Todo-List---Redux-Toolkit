import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: JSON.parse( localStorage.getItem( 'todos' ) ) || [],
        filter: 'all',
    },
    reducers: {
        addTodo: ( state , action ) => {
            state.todos.push( action.payload );
            localStorage.setItem( 'todos' , JSON.stringify( state.todos ));
        },
        checkTodo: ( state , action ) => {
            const check = state.todos.find( todo => todo.id === action.payload );
            check.completed = !check.completed;
            localStorage.setItem( 'todos' , JSON.stringify( state.todos ));
        },
        delTodo: ( state , action ) => {
            state.todos = state.todos.filter( todo => todo.id !== action.payload );
            localStorage.setItem( 'todos' , JSON.stringify( state.todos ));
        },
        changeFilter: ( state , action ) => {
            state.filter = action.payload;
            localStorage.setItem( 'todos' , JSON.stringify( state.todos ));
        },
        clearCompleted: ( state ) => {
            state.todos = state.todos.filter( todo => todo.completed !== true );
            localStorage.setItem( 'todos' , JSON.stringify( state.todos ));
        },
    },
});

export const { addTodo , checkTodo , delTodo , changeFilter , clearCompleted } = todosSlice.actions;

export const selectTodos = state => state.todo.todos;

export const filterTodos = state => state.todo.filter;

export default todosSlice.reducer;