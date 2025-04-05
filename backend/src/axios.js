import axios from "axios";
import store from "./store";
import router from "./router";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
})

axiosClient.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${store.state.user.token}`
    return config;
})

axiosClient.interceptors.response.use(response => {
    return response;
}, error => {
    if(error.response.status === 401){
        // sessionStorage.removeItem('TOKEN')
        store.commit('setToken', null) // NOT SURE IF THIS IS CORRECT, TAKEN FROM GITHUB
        router.push({name: 'login'})
    }
    // console.error(error);
    throw error;
})

export default axiosClient;