import axios from 'axios'

const api = axios.create({
    baseURL: 'https://news-website-cheesecake-lab.herokuapp.com',
    timeout: 100000,
})

export default api;