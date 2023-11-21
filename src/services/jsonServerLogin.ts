export default class JsonServer {
    private static url = "https://localhost:8000/Users";              // http://localhost:3002/centerReachers
/**
 *  creer un nouveau centerReacher    
 * @param centerReacher 
 * @returns   
 * @example http://localhost:3002/Users     
 */
static async loadUser(email:string, password:string) {
  return fetch(`${JsonServer.url}?email=${email}&password=${password}`)
    .then(response => {
      console.log(`response.status`, response.status);
      return response.json();
    })
    .then(user => {
      console.log(`user: `, user);
      return user;
    })
}

// static async loadUsers() {
//   return fetch(JsonServer.url)
//     .then(response => {
//       console.log(`response.status`, response.status);
//       return response.json();
//     })
//     .then(users => {
//       console.log(`users: `, users);
//       return users;
//     })
// }

static async isLogin(){
  return fetch(JsonServer.url,
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "GET",
        })
        .then(function (response) { 
          console.log(response) 
          return response.json();
        })
        .then(function (user:string) { 
          console.log("user", user) 
        })
        .catch(function (error) { console.error(error) })
   
}
}
