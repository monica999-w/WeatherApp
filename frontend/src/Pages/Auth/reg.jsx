import {useState} from "react";
import RegisterForm from "../../Components/Auth/register_form";

function Register() {
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
        tryToRegister();
    }

    async function tryToRegister() {

        let result = await fetch ("https://localhost:7256/api/auth/signup", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then(async (response) => {
            if(response.ok === true) {
                // eslint-disable-next-line no-unused-vars
                let token = await response.json();
                console.log("Ok!");
            }  else {
                console.log("Error!");
            }
        });
    }

    return (
        <RegisterForm
            onUsernameChanged={onEmailChanged}
            onPasswordChanged={onPasswordChanged}
            onSubmit={onSubmit}
        />
    )
}

export default Register;

