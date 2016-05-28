import axios from 'axios';

// export const FETCH_USERS = 'FETCH_USERS';
const ROOT_URL = 'http://localhost:3000';

//  General form of request
// axios.get('/user?ID=12345')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (response) {
//     console.log(response);
//   });

// export function fetchUsers() {
//   return function (dispatch) {
//     const url = `${ROOT_URL}/users`;

//     return axios.get(url)
//       .then(function (response) {
//         dispatch({type: FETCH_USERS, payload: response });
//         return response.data;
//       });
//   };
// }
