import axios from 'axios';

// export const FETCH_USERS = 'FETCH_USERS';
// const ROOT_URL = 'http://localhost:3000';
axios.get('http://localhost:3000/users')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (response) {
    console.log(response);
  });
