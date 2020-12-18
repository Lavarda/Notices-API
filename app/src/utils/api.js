import axios from 'axios'

const api = axios.create({
    baseUrl: 'https://news-website-cheesecake-lab.herokuapp.com'
})

export default api;