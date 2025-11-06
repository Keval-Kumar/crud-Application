import { Button } from 'react-bootstrap';
import { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router";
export default function EditUser() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { state: user } = useLocation();
    const [Name, SetName] = useState(user?.Name || "");
    const [Age, SetAge] = useState(user?.Age || '');
    const [mail, Setmail] = useState(user?.mail || '');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

const validate = () => {
        const Nameregex = /^[A-Za-z\s]+$/;
        const Ageregex = /^[0-9]+$/;
        const Mailregex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
         
        if((!Name || !Nameregex.test(Name)) && (!Age || !Ageregex.test(Age)) && (!mail || !Mailregex.test(mail))) {
            setError("Please enter a valid Name,Age,mail");
            return false;
        }
        if((!Name || !Nameregex.test(Name)) && (!Age || !Ageregex.test(Age))) {
            setError("Please enter a valid Name,Age");
            return false;
        }
        if((!Name || !Nameregex.test(Name))&& (!mail || !Mailregex.test(mail))) {
            setError("Please enter a valid Name,mail");
            return false;
        }
        if((!Age || !Ageregex.test(Age)) && (!mail || !Mailregex.test(mail))) {
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
    const EditUserDetails = async () => {
         if (!validate()) return;
         try {
         const confirm = window.confirm("Are you sure you want to Update this user?");
        if (!confirm) return;
        setLoading(true);
        await new Promise(res => setTimeout(res, 2000));
        const url = `http://localhost:3000/Users/${id}`;
        let response = await fetch(url, {
            method: "PUT",
            body: JSON.stringify({ Name, Age, mail }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        response = await response.json();
        setLoading(false);
        if (response) {
            alert("UserData updated Succesfully");
            setMessage(" UserData Updated Successfully");
                setError("");
                SetName("");
                SetAge("");
                Setmail("");
            navigate("/Get");
        }
    }catch (err) {
            setError("Error saving user data");
        }
    };
    return (
        <div className='Update-Page-Background'>
        <div className='Update-Page-Heading'>
            <h1>Update Page</h1>
        <div className="Update-Page">
             {message && <span style={{ color: "green" }}>{message}</span>}
            {error && <span style={{ color: "red" }}>{error}</span>}
            <input type="text" className="text" value={Name} onChange={(event) => SetName(event.target.value)} placeholder="user Name" />
            <br /><br />
            <input type="text" className="text" value={Age} onChange={(event) => SetAge(event.target.value)} placeholder="user Age" />
            <br /><br />
            <input type="text" className="text" value={mail} onChange={(event) => Setmail(event.target.value)} placeholder="user mail" />
            <br /><br />
            <Button className='Update-Button'disabled={loading} onClick={EditUserDetails}>{loading ? <b>Updating...</b> : 'Update'}</Button>
        </div>
        </div>
         </div>
    )
}