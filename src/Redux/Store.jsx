import { configureStore } from '@reduxjs/toolkit';
import todosSlice from './Features/todosSlice';
import darkModeSlice from './Features/darkModeSlice'

export const store = configureStore({
    reducer: {
        todo: todosSlice,
        darkMode: darkModeSlice,
    },
});