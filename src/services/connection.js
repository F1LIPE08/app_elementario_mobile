import axios from "axios";

const conn = axios.create({

    baseURL:'http://10.0.0.118:3333/',
});

export default conn;