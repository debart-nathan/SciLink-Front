import { useState } from "react";

const FormLogin = ({ onSubmitLoginUser, inputNameRef }) => {
   const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmitLoginUser(event);
        }}
        className="d-flex gap-2 w-50 align-items-center">
        <label htmlFor="username-form-login-user" className="form-label ">UserName : </label>
        <input ref={inputNameRef} name="username" value={username} onChange={(e) => setUsername(e.target.value)} type="text" id="username-form-login-user" className="form-control w-50" />
        <label htmlFor="pwd-form-login-user" className="form-label ">Pwd : </label>
        <input ref={inputNameRef} name="pwd" value={pwd} onChange={(e) => setPwd(e.target.value)} type="password" id="pwd-form-login-user"  className="form-control w-50" />
        <button onClick={() => { onSubmitLoginUser() }} className="btn btn-success" type="submit">Login</button>
      </form>
    );
  }

  export default FormLogin;


//   <div class="form signin">
//             <h2>sign in</h2>
//             <div class="inputBox">
//                 <input type="text" required="required">
//                 <i class="fa-regular fa-user"></i>
//                 <span>username</span>
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