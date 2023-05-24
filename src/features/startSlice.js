import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	value: new Date(2023, 5, 21).getTime(), // Almacenar el timestamp en lugar del objeto Date
};

export const startSlice = createSlice({
	name: 'start',
	initialState,
	reducers: {
		setStart: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const {setStart} = startSlice.actions;

export const selectStart = (state) => new Date(state.start.value); // Convertir el timestamp en un objeto Date

export default startSlice.reducer;
