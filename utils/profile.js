import axios from 'axios';
import { jwt } from './auth';

const BASE_URL = 'http://localhost:3000';


export function getProfile() {
    return axios.get(`${BASE_URL}/profile`, jwt())
}