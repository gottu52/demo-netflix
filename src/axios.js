import axios from 'axios'

//baseURLを定義
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
});

export default instance;
