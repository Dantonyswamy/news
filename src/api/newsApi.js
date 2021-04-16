import axios from 'axios';
export default axios.create({
    baseURL:'https://newsapi.org/v2',
    headers: {
             'x-api-key': '5259fd6c50d645f2bd2a3ec6289f95c2',
             'Content-Type': 'application/json'   
      }    
}) 
