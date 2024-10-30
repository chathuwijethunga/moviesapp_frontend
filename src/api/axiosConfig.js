import axios from 'axios';

export default axios.create({
    baseURL: "https://d896-2402-4000-21c3-6ab1-e814-d5d7-83a3-e1d4.ngrok-free.app",
    headers:{"ngrok-skip-browser-warning": "true"}
});