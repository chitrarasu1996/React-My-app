import"../styles/login.css"
import Form from "./Form";
const Login=()=>{
const login="login!!"
  const welcomeMessage="welcome To my App"
    return(
        <div className="login-wrapper">
           
         <Form heading={login} welcomeMessage= {welcomeMessage}/>
        </div>

    )
};
export default Login;