import { useState } from "react";
const FormLogin = ({ onSubmitLoginUser, inputNameRef}:{onSubmitLoginUser: any, inputNameRef:any}) => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
  
   
    return (
      <form
  
        onSubmit={(event) => {
          event.preventDefault();
          onSubmitLoginUser(event);
        }}
        className="d-flex gap-2 w-50 align-items-center" action="/login">
        <label htmlFor="Email-form-login-user" className="form-label ">Email : </label>
        <input ref={inputNameRef} name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="text" id="setEmail-form-login-user" className="form-control w-50" />
        <label htmlFor="password-form-login-user" className="form-label ">Password: </label>
        <input ref={inputNameRef} name="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password-form-login-user"  className="form-control w-50" />
        <button onClick={() => { onSubmitLoginUser() }} className="btn btn-success" type="submit">Login</button>
      </form>
    );
  
      }
  export default FormLogin;


//   <div class="form signin">
//             <h2>sign in</h2>
//             <div class="inputBox">
//                 <input type="email" required="required">
//                 <i class="fa-regular fa-user"></i>
//                 <span>email</span>
//             </div>
//             <div class="inputBox">
//                 <input type="password" required="required">
//                 <i class="fa-solid fa-lock"></i>
//                 <span>password</span>
//             </div>
//             <div class="inputBox">
//                 <input type="submit" value="Login">
//             </div>
//             <p>not a member? <a href="#" class="create">create an account</a></p>
//         </div>
//     </div>