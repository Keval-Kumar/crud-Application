import { useState, useEffect } from "react";
import DeleteUser from "./DeleteUser";
import { NavLink,useNavigate } from "react-router";

export default function Get() {
    const [UsersData, SetUsersData] = useState([]);
   const [deletingId, setDeletingId] = useState(null);
    const Navigate = useNavigate();

    useEffect(() => {
        GetUsersData();
    }, [])

    const GetUsersData = async () => {
        const url = 'http://localhost:3000/Users';
        let response = await fetch(url);
        response = await response.json();
        SetUsersData(response);
    }
    console.log(UsersData);

    const HandelDelete = async (id) => {
        setDeletingId(id);
        await DeleteUser(id);
        setDeletingId(null); 
        await new Promise(res=>setTimeout(res,1000))
        GetUsersData();

    }

    /*<div>
        <h1  className='Heading'>JSON Server API For Get Method In React</h1>
        <ul className='listHeading'>
            <li>Name</li>
            <li>Age</li>
            <li>mail</li>
        </ul>
        {
            !Loading ?
            UsersData && UsersData.map((User, index) => (
                <ul key={index} className='userlist'>
                  <li>{User.Name}</li>
                  <li>{User.Age}</li>
                  <li>{User.mail}</li>
                </ul>
            ))
            :<img src="https://media1.tenor.com/m/6bLqzMcCDzEAAAAC/marmalady-loading-cat.gif"></img>
        }
    </div>*/
   
    return (
        <div className="Get-Page">
            {/* <h1 className='Heading'>JSON Server API For Get Method In React</h1> */}
            <h1 className='Get-Page-Header'>Student Details</h1>
            {
                    <table border="1" >
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>mail</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {UsersData.map((user, i) => (
                                <tr key={i}>
                                    <td >{user.Name}</td>
                                    <td>{user.Age}</td>
                                    <td>{user.mail}</td>

                                    <td><button className='Get-Page-Buttons' onClick={() => HandelDelete(user.id)}>{deletingId === user.id ? 'Deleting...' : 'Delete'}</button></td>
                                    <td><button className='Get-Page-Buttons' onClick={() => Navigate(`/Edit/${user.id}`,{state:user} )}>Update</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
            }
          <button className="Get-Page-Home-Btn"><NavLink to={'/'}><b>Home</b></NavLink></button> 
        </div>
    )
}