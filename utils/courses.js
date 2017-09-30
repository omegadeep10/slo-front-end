import axios from 'axios';
import { jwt } from './auth';

const BASE_URL = 'http://localhost:3000';


export function getCourses() {
    return axios.get(`${BASE_URL}/courses`, jwt())
}