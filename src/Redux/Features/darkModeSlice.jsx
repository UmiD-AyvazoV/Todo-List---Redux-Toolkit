import { createSlice } from '@reduxjs/toolkit';

export const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState: {
        mode: JSON.parse( localStorage.getItem( 'darkMode' ) ) || false,
    },
    reducers: {
        toggleDarkMode: ( state ) => {
            state.mode = !state.mode;
            localStorage.setItem( 'darkMode' , JSON.stringify( state.mode ));
        }
    },
});

export const selectMode = state => state.darkMode.mode;

export const { toggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;