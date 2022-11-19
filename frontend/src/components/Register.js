import { useState, useContext } from "react";
import AuthenticationContext from "../services/AuthenticationContext";

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const { registerUser } = useContext('AuthenticationContext');

    const handleSubmit = async e => {
        e.preventDefault();

        registerUser(username, email, firstName, lastName, phoneNumber, password, password2);
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <hr />
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" onChange={e => setUsername(e.target.value)} placeholder="Username" required></input>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" onChange={e => setEmail(e.target.value)} placeholder="Email" required></input>
                </div>
                <div>
                    <label htmlFor="firstName">First name</label>
                    <input type="text" id="firstName" onChange={e => setFirstName(e.target.value)} placeholder="First name" required></input>
                </div>
                <div>
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" id="lastName" onChange={e => setLastName(e.target.value)} placeholder="Last name" required></input>
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone number</label>
                    <input type="number" maxLength={10} id="phoneNumber" onChange={e => setPhoneNumber(e.target.value)} placeholder="Phone number" required></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={e => setPassword(e.target.value)} placeholder="Password" required></input>
                </div>
                <div>
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" onChange={e => setPassword2(e.target.value)} placeholder="Confirm Password" required></input>
                    <p>{password2 !== password ? 'Passwords do not match' : ''}</p>
                </div>
                <button>Register</button>
            </form>
        </section>
    );
}

export default Register;
