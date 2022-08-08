import {useState} from "react";
import LoginForm from "../../Components/Auth/login_form";
import Weather from "../../Components/Weather/weather";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function onEmailChanged(data) {
        setEmail(data.target.value)
    }

    function onPasswordChanged(data) {
        setPassword(data.target.value)
    }

    function onSubmit(data) {
        data.preventDefault();
        tryToLogin();
    }

    async function tryToLogin() {
        let result = await fetch('https://localhost:7256/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then(async (response) => {
            if(response.ok === true) {
                const token = await response.json();
                console.log("OK!}");
            }  else {
                console.log("Error!");
            }
        });
    }

    return (
        <LoginForm
            onUsernameChanged={onEmailChanged}
            onPasswordChanged={onPasswordChanged}
            onSubmit={onSubmit}
        />
    )
}

export default Login;