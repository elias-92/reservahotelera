import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	value: new Date(2023, 5, 21).getTime(), // Almacenar el timestamp en lugar del objeto Date
};

export const endSlice = createSlice({
	name: 'end',
	initialState,
	reducers: {
		setEnd: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const {setEnd} = endSlice.actions;

export const selectEnd = (state) => new Date(state.end.value); // Convertir el timestamp en un objeto Date

export default endSlice.reducer;
