import { GoogleLogin } from "react-google-login";


const responseGoogle = (response)=>{
    console.log(response)
  }
  function Login() {
    return (
      <>
      <div className="App">
        <GoogleLogin
        clientId='265740555449-902gk9kd3e7dress7sgle5vmd8s1hj46.apps.googleusercontent.com'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        uxMode='redirect'
        redirectUri='http://localhost:3000/main'
        />
      </div>
      </>
    )}
export default Login;