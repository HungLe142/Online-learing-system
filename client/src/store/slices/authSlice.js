import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: localStorage.getItem('access_token'),
    user: JSON.parse(localStorage.getItem('user')),
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {  // Add the action parameter
            console.log("Payload: " + JSON.stringify(action.payload));  // Log the correct payload
            state.user = action.payload.user;
            state.token = action.payload.token;
            localStorage.setItem('access_token', action.payload.token);
            localStorage.setItem('user', JSON.stringify(action.payload.user)); // Store user object
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem('access_token');
            localStorage.removeItem('user'); // Remove user object
        },
    },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
