export { default as Cart } from './Cart';

export const axios = require('axios');

export const config = {
    api: 'https://my-json-server.typicode.com/pingji00/e28-p3-foods-api/',
}

export let store = {
    cartCount: 0
}