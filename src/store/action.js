
// export const userPostFetch = user => {
//     return dispatch => {
//         return fetch("https://webhook.site/7c0331ff-11e1-47bb-8bda-e3b87f592374", {
//             method: "POST",
//             mode: 'cors',
//             cache: 'no-cache',
//             credentials: 'same-origin',
//             headers: {
//                 'Content-Type': 'application/json',
//                 // Accept: 'application/json',
//             },
//             redirect: 'follow',
//             referrerPolicy: 'no-referrer',
//             body: JSON.stringify({ user })
//         })
//             .then(response => {
//                 return response.json()
//             })
//             .then(data => {
//                 if (data.message) {
//                 } else {
//                     localStorage.setItem("token", data.jwt)
//                     dispatch(loginUser(data.user))
//                 }
//             })

//     }
// }

// const loginUser = userObj => ({
//     type: 'LOGIN_USER',
//     payload: userObj
// })
// export const userLoginFetch = user => {
//     return dispatch => {
//         return fetch("https://webhook.site/7c0331ff-11e1-47bb-8bda-e3b87f592374", {
//             method: "POST",
//             mode: 'cors',
//             cache: 'no-cache',
//             credentials: 'same-origin',
//             redirect: 'follow',
//             referrerPolicy: 'no-referrer',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Accept: 'application/json',
//             },
//             body: JSON.stringify({ user })
//         })
//             .then(resp => resp.json())
//             .then(data => {
//                 if (data.message) {
//                 } else {
//                     localStorage.setItem("token", data.jwt)
//                     dispatch(loginUser(data.user))
//                 }
//             })
//     }
// }
// export const getProfileFetch = () => {
//     return dispatch => {
//         const token = localStorage.token;
//         if (token) {
//             return fetch("https://webhook.site/7c0331ff-11e1-47bb-8bda-e3b87f592374", {
//                 method: "GET",
//                 mode: 'cors',
//                 cache: 'no-cache',
//                 credentials: 'same-origin',
//                 redirect: 'follow',
//                 referrerPolicy: 'no-referrer',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     Accept: 'application/json',
//                     'Authorization': `Bearer ${token}`
//                 }
//             })
//                 .then(resp => resp.json())
//                 .then(data => {
//                     if (data.message) {
//                         localStorage.removeItem("token")
//                     } else {
//                         dispatch(loginUser(data.user))
//                     }
//                 })
//         }
//     }
// }