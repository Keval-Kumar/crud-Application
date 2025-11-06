import { NavLink } from "react-router"
export default function Terms() {
    return (
        <div className="Terms-Background">
            <h1 className="Terms-Heading">Terms and condition</h1>
            <span className="Terms">Welcome to our CRUD Application. By accessing or using this application, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully.</span>

            <div className="Terms-Content">
                <b>1. Acceptance of Terms</b>
                <p>By using this application, you acknowledge that you have read, understood, and agree to these Terms and Conditions. If you do not agree, please do not use this application.</p>

                <b>2. Use of the Application</b>
                <p>You are responsible for ensuring that the information you create, update, or delete is accurate and lawful.
                    You agree not to use the application for illegal, harmful, or unauthorized purposes.
                    You must not attempt to hack, modify, or disrupt the system.</p>

                <b>3. User Data </b>
                <p>Any data you provide (such as personal information, text, or files) remains your responsibility.
                    We may store, process, or display your data as part of the application’s functionality.
                    We are not responsible for any loss of data caused by user error, system issues, or unauthorized access.</p>

                <b>4. Intellectual Property</b>
                <p>The application and its content (excluding user-generated content) are owned by [Your Name/Company].
                    You may not copy, distribute, or reproduce any part of the application without prior permission.</p>

                <b>5. Privacy</b>
                <p>Your personal data will be handled in accordance with our Privacy Policy.
                    We will not share your information with third parties without consent, except as required by law.</p>

                <b>6. Limitations of Liability</b>
                <p>We are not liable for any damages resulting from the use or inability to use this application.
                    We do not guarantee uninterrupted or error-free service.</p>

                <b>7. Termination</b>
                <p>We reserve the right to suspend or terminate access if a user violates these Terms and Conditions.
                    You may stop using the application at any time.</p>

                <b>8. Changes to Terms</b>
                <p>We may update these Terms from time to time. Continued use of the application after changes means you accept the updated Terms.</p>
            </div>
           <NavLink className='TermsBack-Button'to='/About'>Back</NavLink>
        </div>

    )
}