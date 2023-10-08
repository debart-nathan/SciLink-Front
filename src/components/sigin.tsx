<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="style.css">
    <title>signup/login</title>
</head>

<body>
    <div className="container">
        <div className="form signup">
            <h2>sign up</h2>
            <div className="inputBox">
                <input type="text" required="required">
                <i className="fa-regular fa-user"></i>
                <span>username</span>
            </div>
            <div className="inputBox">
                <input type="mail" required="required">
                <i className="fa-regular fa-envelope"></i>
                <span>email</span>
            </div>
            <div className="inputBox">
                <input type="password" required="required">
                <i className="fa-solid fa-lock"></i>
                <span>create password</span>
            </div>
            <div className="inputBox">
                <input type="password" required="required">
                <i className="fa-solid fa-lock"></i>
                <span>confirm password</span>
            </div>
            <div className="inputBox">
                <input type="submit" value="Create Account">
            </div>
            <p>Already a member? <a href="#" className="login">Login</a></p>
        </div>
        <div className="form signin">
            <h2>sign in</h2>
            <div className="inputBox">
                <input type="text" required="required">
                <i className="fa-regular fa-user"></i>
                <span>username</span>
            </div>
            <div className="inputBox">
                <input type="password" required="required">
                <i className="fa-solid fa-lock"></i>
                <span>password</span>
            </div>
            <div className="inputBox">
                <input type="submit" value="Login">
            </div>
            <p>not a member? <a href="#" className="create">create an account</a></p>
        </div>
    </div>
    <script>
        let login = document.querySelector('.login');
        let create = document.querySelector('.create');
        let container = document.querySelector('.container');

        login.onclick = function () {
            container.classList.add('signinForm');
        }
        create.onclick = function () {
            container.classList.remove('signinForm');
        }
    </script>
</body>

</html>