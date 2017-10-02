import axios from 'axios';
import { jwt } from './auth';

const BASE_URL = 'http://localhost:3000';


export function getCourses() {
    return axios.get(`${BASE_URL}/courses`, jwt());
}


export function createCourse(course) {
    console.log(course);
    return axios.post(`${BASE_URL}/courses`, course, jwt());
}


export function deleteCourse(crn) {
    return axios.delete(`${BASE_URL}/course/${crn}`, jwt());
}