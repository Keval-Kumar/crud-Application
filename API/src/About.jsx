import Cimage from './Image/C.jpg'
import Rimage from './Image/R.jpg'
import Uimage from './Image/U.jpg'
import Dimage from './Image/D.jpg'
import { FaInstagram, FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { NavLink, Outlet } from 'react-router'
export default function About() {
    const [open, setOpen] = useState(false);
    return (
        <div className="About-Page-Background">
            <h1 className='CRUD-Heading'>CRUD Application</h1>
            <span className='CRUD-Content'>CRUD stands for Create, Read, Update, and Delete, which are the four basic operations used to manage data in applications. These operations allow users to add new information, view existing records, make changes to data, and remove unnecessary entries. Together, CRUD provides complete control over how data is handled in a system. In databases, they are usually performed using SQL commands like INSERT, SELECT, UPDATE, and DELETE. CRUD is the foundation of almost every software application, from simple websites to complex enterprise systems. It ensures that data remains organized, accurate, and useful for both users and developers.</span>
            <div className="About-Page1">
                <div className="Create">
                    <img className='image' src={Cimage} alt="cimage" />
                    <p>Create</p>
                    <h3>The Create operation adds new data into the system.
                        It is used when registering users, adding products, or posting new content.
                        In databases, this is done using the INSERT command.
                        Here with the help of JSON Server and API the data will be stored in the db.json file through POST method
                        Validation checks are applied to prevent errors or duplicate records.
                        It is the first step in building any database-driven application.</h3>
                </div>
                <div className="Read">
                    <img className='image' src={Rimage} alt="Rimage" />
                    <p>Read</p>
                    <h3>The Read operation retrieves and displays stored information.
                        It is used for viewing records, searching data, or checking details.
                        In databases, the SELECT command performs this function.
                        Read makes stored data meaningful and usable for users.
                        It often includes filters, search, and sorting options.
                        Here by Get method through API the data will be obtained to the Users.
                        This operation is the most frequently used in any CRUD system.</h3>
                </div>
            </div>
            <div className="About-Page2">
                <div className="Update">
                    <img className='image' src={Uimage} alt="Uimage" />
                    <p>Update</p>
                    <h3>The Update operation modifies or changes existing records.
                        It helps correct errors and keep information accurate.
                        For example, editing a profile, changing a product price, or updating content.
                        In databases, this is done using the UPDATE command.
                        Here by PUT method through API the data will be deleted.
                        Update ensures data remains current and reliable.
                        It usually requires validation and permissions to prevent misuse.</h3>
                </div>
                <div className="Delete">
                    <img className='image' src={Dimage} alt="Dimage" />
                    <p>Delete</p>
                    <h3>The Delete operation removes unwanted or outdated data.
                        For example, deleting an account, removing expired items, or clearing duplicates.
                        In databases, the DELETE command is used.
                        Here by DELETE method through API the unwanted data will be Deleted.
                        It helps maintain a clean and efficient system.
                        Most apps use confirmation prompts to avoid accidental loss.
                        Sometimes, a soft delete is used so data can be restored later.</h3>
                </div>
            </div>

            <span className='Footer'>
                <ul>
                    <NavLink to='' className='NavLink' onClick={() => setOpen(!open)}>Contact </NavLink>
                </ul>
                {
                    open && (
                        <nav className='Social-Container'>
                                <li>
                                    <a href="tel:+916363323420" target="_blank"
                                        rel="noopener noreferrer" className="social-icon phone" onClick={() => setOpen(false)}> <FaPhoneAlt />   Phone </a>
                                </li>
                                <li>
                                    <a href="mailto:kevalkumarm.a321@gmail.com" className="social-icon Email"
                                       target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}> <MdEmail /> E-mail</a>
                                </li>
                                <li>
                                    <a href="https://github.com/Keval-Kumar" target="_blank"
                                        rel="noopener noreferrer" className="social-icon github"onClick={() => setOpen(false)}> <FaGithub /> GitHub</a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/keval-kumar-m-a-keval-9a1b72361/" target="_blank"
                                        rel="noopener noreferrer" className="social-icon LinkedIn" onClick={() => setOpen(false)}> <FaLinkedin /> LinkedIn</a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/keval_kumar_m_a" target="_blank"
                                        rel="noopener noreferrer"  className="social-icon Instagram" onClick={() => setOpen(false)}> <FaInstagram /> Instagram</a>
                                </li>
                        </nav>
                    )
                }
                <NavLink className='NavLink' to='Terms'>Terms And Condition</NavLink>
                <NavLink className='NavLink' to='Privacy'>Privacy And Policy</NavLink>
                <NavLink className='NavLink' to='Faq'>FAQs</NavLink>
            </span>
            <Outlet />
        </div>
    )
}