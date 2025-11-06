import { useState, useEffect } from 'react'
export default function Dummy() {

  const [UsersData, SetUsersData] = useState([]);

  useEffect(() => {
    GetUsersData();
  }, [])

  const GetUsersData = async () => {
    try {
      const url = 'https://dummyjson.com/users';
      let response = await fetch(url);
      response = await response.json();
      SetUsersData(response.users)
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  console.log(UsersData);

  return (
    <div>
      <h1 className='Heading'>API in React</h1>
      <h3 className='listhead2'>Fetch Users Data From API</h3>
      <ul className='listHeading'>
        <li>FirstName</li>
        <li>LastName</li>
        <li>Age</li>
      </ul>
      {
        UsersData && UsersData.map((User, index) => (
          <ul key={index} className='userlist'>
            <li>{User.firstName}</li>
            <li>{User.lastName}</li>
            <li>{User.age}</li>
          </ul>
        ))
      }
      <h1 style={{textAlign:"center"}}>{UsersData[0]?.firstName}</h1>
    </div>
  )
}