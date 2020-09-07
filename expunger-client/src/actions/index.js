// export const getBlerbs = () => {
//     return (dispatch) => {
//         return fetch("http://localhost:3000/blerbs")
//             .then(res => res.json())
//             .then(blerbs => dispatch({ type: "GET_BLERBS", payload: blerbs.data}))
//     };
// };

// export const addUser = (newUser, callback) => {
//     return (dispatch) => {
//         return fetch("http://localhost:3000/users", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 user: {
//                     username: newUser.username,
//                     email: newUser.email,
//                     password: newUser.password,
//                     password_confirmation: newUser.password_confirmation
//                 }
//             })
//         })
//         .then(res => res.json())
//         .then(userInfo => {
//             if (userInfo.error) {
//                 alert(userInfo.details)
//             } else {
//                 const authentication_token = userInfo.data.attributes.authentication_token;
//                 localStorage.setItem('token', authentication_token);
//                 dispatch({ type: "LOGIN_USER", payload: userInfo.data.attributes })
//                 callback();
//             }
//         })
//             .catch(console.log())
//     };
// };

// export const loginUser = (user, callback) => {
//     return (dispatch) => {
//         return fetch("http://localhost:3000/sessions", {
//             method: "POST",
//             credentials: 'include',
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 user: {
//                     email: user.email,
//                     password: user.password,
//                 }
//             })
//         })
//         .then(res => res.json())
//         .then(userInfo => {
//             if (userInfo.error) {
//                 alert(userInfo.error)
//             } else {
//                 const authentication_token = userInfo.data.attributes.authentication_token;
//                 localStorage.setItem('token', authentication_token);
//                 dispatch({ type: "LOGIN_USER", payload: userInfo.data.attributes })
//                 callback();
//             }
//         })
//             .catch(console.log())
//     };
// };

// export const currentUser = (token) => {
//     return (dispatch) => {
//         return fetch(`http://localhost:3000/users/${token}`, {
//             credentials: 'include'
//         })
//             .then(res => res.json())
//             .then(userInfo => dispatch({ type: "LOGIN_USER", payload: userInfo.data.attributes }))
//     };
// };

// export const addBlerb = (newBlerb, user) => {
//     return (dispatch) => {
//         return fetch("http://localhost:3000/blerbs", {
//             method: "POST",
//             credentials: 'include',
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 blerb: {
//                     content: newBlerb.blerb,
//                     user_id: user.id
//                 }
//             })
//         })
//         .then(res => res.json())
//         .then(blerb => {
//             if (blerb.error) {
//                 alert(blerb.details)
//             } else {
//                 dispatch({ type: "ADD_BLERB", payload: blerb.data})
//             }
//         })
//         .catch(console.log())
//     };
// };

// export const logoutUser = (id) => {
//     return (dispatch) => {
//         return fetch(`http://localhost:3000//sessions/${id}`, {
//             method: "DELETE",
//             credentials: 'include'
//         })
//         .then(res => res.json())
//         .then(res => {
//             localStorage.removeItem("token")
//             dispatch({ type: "LOGOUT_USER" })
//         })
//     }
// }