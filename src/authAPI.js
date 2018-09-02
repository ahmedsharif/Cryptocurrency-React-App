import axios from "axios";


const authAPI = axios.create({
    baseURL: 'https://api.bitfinex.com/v2',
})

export default authAPI;