import axios from 'axios'

const THE_MOVE_API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYWM3NDA1YzUwNjY3YjQ1OGFmMTYzNmJhMjIyYzhhMSIsIm5iZiI6MTcxOTUwMTQxNC4wMzQzNzMsInN1YiI6IjY1ODE4Y2U5ODc1ZDFhMDdiYmFmMWNiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R3xg_rL1z6PK_KXmvVyth-_tRr0RnBPBIn8AJ6kjwfs'

export const moveAPIInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: `Bearer ${THE_MOVE_API_TOKEN}`
    },
    responseType: 'json'
})