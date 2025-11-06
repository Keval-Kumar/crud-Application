import { NavLink } from "react-router"
export default function Faq() {
    return (
        <div>
            <h1 className="FAQ-Heading">Frequently Asked Questions</h1>
            <div className="FAQ">
                <h3>Q1. What is this application about?</h3>
                <p>This is a CRUD (Create, Read, Update, Delete) application to manage user data easily.</p>
                <h3>Q2. Do I need an account to use it?</h3>
                <p>No, you can directly use the application without login.</p>
                <h3>Q3. What kind of data can I add?</h3>
                <p>You can add basic details like name, age, and email.</p>
                <h3>Q4. Can I edit my information later?</h3>
                <p>Yes, you can update any record anytime.</p>
                <h3>Q5. What happens if I delete a record?</h3>
                <p>The record will be permanently removed and cannot be recovered.</p>
                <h3>Q6. Is my data safe?</h3>
                <p>Yes, all your information is stored securely in the db.JSON file(like a database).</p>
                <h3>Q7. Which Libraries are used here</h3>
                <p>This project includes react,react-router and basic html,css,javascript</p>
            </div>
            <NavLink className='FAQBack-Button' to='/About'>Back</NavLink>
           
        </div>

    )
}