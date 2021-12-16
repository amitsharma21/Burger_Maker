import axios from 'axios';

const instance=axios.create({
    baseURL:'https://react-my-burger-f8afb-default-rtdb.firebaseio.com/'
});
export default instance;