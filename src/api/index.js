import axios from "axios";

const httpClient = axios.create({
  baseURL: 'https://fakerapi.it/api/v2/',
});

export const getAllBooks = ()=>{
    return httpClient.get('books')
}