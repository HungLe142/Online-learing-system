import { useDispatch, useSelector } from 'react-redux';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { setCredentials, logout } from '../store/slices/authSlice';
import request from '../utils/request';
import endpoints from '../constants/apiEndpoints';
import axios from 'axios';

export const useAuth = () => {
    const dispatch = useDispatch();
    const queryClient = useQueryClient();
    const { user, token } = useSelector((state) => state.auth);

    const loginMutation = useMutation({
        mutationFn: async (inp) => {
            console.log(JSON.stringify(inp)); // This line was moved here
            return (await axios.post('http://localhost:3001/user/login', inp, {
                headers: {
                    'Content-Type': 'application/json',
                    // Include any other headers needed, such as authorization tokens
                    // 'Authorization': 'Bearer your-token'
                }
            })).data;
        },
        onSuccess: (data) => {
            console.log("Response data:", data);
            dispatch(setCredentials(data));
            queryClient.invalidateQueries({ queryKey: ['user'] });
        },
    });
    
    

    const handleLogout = () => {
        dispatch(logout());
        queryClient.clear();
    };

    return {
        user,
        token,
        isAuthenticated: !!token,
        login: loginMutation.mutate,
        logout: handleLogout,
        isLoggingIn: loginMutation.isPending,
        loginError: loginMutation.error,
    };
};