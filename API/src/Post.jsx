import { useState, useActionState } from "react";
import { NavLink, Route, Routes } from "react-router";
import Get from "./get";
export default function Post() {
    const [Name, SetName] = useState('');
    const [Age, SetAge] = useState('');
    const [mail, Setmail] = useState('');
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const validate = () => {
        const Nameregex = /^[A-Za-z\s]+$/;
        const Ageregex = /^[0-9]+$/;
        const Mailregex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        if ((!Name || !Nameregex.test(Name)) && (!Age || !Ageregex.test(Age)) && (!mail || !Mailregex.test(mail))) {
            setError("Please enter a valid Name,Age,mail");
            return false;
        }
        if ((!Name || !Nameregex.test(Name)) && (!Age || !Ageregex.test(Age))) {
            setError("Please enter a valid Name,Age");
            return false;
        }
        if ((!Name || !Nameregex.test(Name)) && (!mail || !Mailregex.test(mail))) {
            setError("Please enter a valid Name,mail");
            return false;
        }
        if ((!Age || !Ageregex.test(Age)) && (!mail || !Mailregex.test(mail))) {
            setError("Please enter a valid Age,mail");
            return false;
        }
        if (!Name || !Nameregex.test(Name)) {
            setError("Please enter a valid Name");
            return false;
        }
        if (!Age || !Ageregex.test(Age)) {
            setError("Please enter a valid Age");
            return false;
        }
        if (!mail || !Mailregex.test(mail)) {
            setError("Please enter a valid Email");
            return false;
        }

        setError("");
        return true;
    };
    const SaveUsersData = async () => {
        if (!validate()) return;
        try {
            const url = 'http://localhost:3000/Users';
            let response = await fetch(url, {
                method: 'post',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ Name, Age, mail })
            });
            response = await response.json();
            if (response) {
                alert("New User Data Added Succesully")
                setError("");
                SetName("");
                SetAge("");
                Setmail("");
            }
        } catch (err) {
            setError("Error saving user data");
        }
    };
    return (
        <div className="Post-Page-Background">

            <Routes>
                <Route path="/Post" element={<Get />} />
            </Routes>

            <h1 className="Post-Page-Header">Add New User</h1>
            <div className="Post-Page">
                {message && <span style={{ color: "green" }}>{message}</span>}
                {error && <span style={{ color: "red" }}>{error}</span>}
                <br />
                <input type="text" className="text" value={Name} onChange={(event) => SetName(event.target.value)} placeholder="enter your name" />
                <br /><br />
                <input type="text" className="text" value={Age} onChange={(event) => SetAge(event.target.value)} placeholder="enter your Age" />
                <br /><br />
                <input type="email" className="text" value={mail} onChange={(event) => Setmail(event.target.value)} placeholder="enter your mail" />
                <br /><br />

                <button className='Post-Page-Button'onClick={SaveUsersData}>Add User</button>
            </div>
            <div className="Post-Page-Button-Container">
                <button ><NavLink to={'/'}><b>Home</b></NavLink></button>
                <button ><NavLink to={'/Get'}>StudentList</NavLink></button>
            </div>
        </div>
    )
}

