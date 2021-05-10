import axios from 'axios'
import store from '@/store'

const http = axios.create({
    baseURL : 'http://localhost:8081/',
    Accept :'application/json',
    'Content-Type' : 'application/json'
})







http.interceptors.request.use(function(config){

    const token = store.state.token;
    
    console.log('token'+token)
    
    if(token){
    config.headers.Authorization= `Bearer ${token}`;
    }
    return config;
    },function(erro){
    return Promise.reject(erro);
    });




export default http