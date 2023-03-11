import axios from 'axios';
import jwt_decode from 'jwt-decode';
import dayjs from 'dayjs';
import { useContext } from 'react';
import AuthenticationContext from '../services/AuthenticationContext';

const baseURL = 'http://localhost:8000/';

const useAxios = () => {
    const { authenticationTokens, setUser, setAuthenticationTokens } = useContext(AuthenticationContext);

    // Create an instance
    const axiosInstance = axios.create({
        baseURL,
        headers: { Authorization: `Bearer ${authenticationTokens?.access}`}
    });

    // Use interceptors to refresh token if it's expired
    axiosInstance.interceptors.request.use(async request => {
        const user = jwt_decode(authenticationTokens.access);
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

        if (!isExpired)
            return request;

        const response = await axios.post(`${baseURL}authentication/refresh-token/`, {
            refresh: authenticationTokens.refresh
        });

        localStorage.setItem('authenticationTokens', JSON.stringify(response.data));

        setAuthenticationTokens(response.data);
        setUser(jwt_decode(response.data.access));

        request.headers.Authorization = `Bearer ${response.data.access}`;
        return request;
    });

    // Return instance containing refreshed/not expired token
    return axiosInstance;
}

export default useAxios;
