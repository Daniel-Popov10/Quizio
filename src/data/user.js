import { post, get } from './api.js';
import { setUserData, clearUserData } from '../utils.js';


export async function register(email, username, password) {
    const { sessionToken, ObjectId } = await post('/users', { email, username, password });

    const userData = {
        sessionToken,
        ObjectId,
        username,
        email,
    };

    setUserData(userData);
}

export async function login(email, password) {
    const { username, sessionToken, ObjectId } = await post('/login', { email, password });

    const userData = {
        sessionToken,
        ObjectId,
        username,
        email,
    };

    setUserData(userData);
}

export async function logout() {

    //! To Do - logout throws an error when attempted as per API docs, look for a way to fix
    // const result = await get('/users/logout');
    clearUserData();
}

//! testUser credentials - 'test@mail.com', 'testUser', 'parola123'