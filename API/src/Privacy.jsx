import { NavLink } from "react-router"
export default function Privacy() {
    return (
        <div>
            <div className="Privacy-Background">
                <h1 className="Privacy-Heading">Privacy Policy</h1>
                <span className="Privacy">This Privacy Policy describes how we collect, use, and protect your personal data when you use our CRUD Application. By using this application, you agree to the terms of this Privacy Policy.</span>

                <div className="Privacy-Content">
                    <b>1.Information We Collect </b>
                    <p>We may collect the following types of information when you use the application:

                        <li>Personal Information: (e.g., name, email, phone number) when provided by you.
                        </li>
                        <li>Usage Data: Information about how you use the application, such as pages visited or actions performed.</li>

                        <li>Technical Data: Device information, browser type, and IP address.</li></p>

                    <b>2.How We Use Your Information</b>
                    <p>We use the information collected for:
                        <li>Operating and improving the CRUD application</li>
                        <li>Allowing you to create, read, update, and delete data.</li>
                        <li>Communicating with you regarding updates or support.</li>
                        <li>Ensuring security and preventing misuse of the system.</li></p>

                    <b>3.Data Storage and Security</b>
                    <p><li>Your data is stored securely in our system/database.</li>
                        <li>We take reasonable measures to protect your data from unauthorized access, alteration, or deletion.</li>
                        <li>However, no system can be 100% secure, and we cannot guarantee absolute protection.</li></p>

                    <b>4. Sharing of Information</b>
                    <p><li>We do not sell or rent your personal information to third parties.</li>
                        <li>We may share information only if:
                            <li>Required by law or legal process.</li>
                            <li>Necessary to protect our rights, safety, or property.</li></li></p>

                    <b>5. User Rights</b>
                    <p>You have the right to:
                        <li>Access your personal data.</li>
                        <li>Delete your account/data (subject to application functionality).</li>
                        <li>Withdraw consent for data collection (if applicable).</li>
                    </p>

                    <b>6. Cookies and Tracking</b>
                    <p><li>Our application may use cookies or similar technologies to improve user experience.</li>
                        <li>You can disable cookies in your browser, but some features may not work properly.</li></p>

                    <b>7. Third-Party Services</b>
                    <p>If the application uses third-party services (e.g., hosting, analytics, or cloud storage), those services may collect data in accordance with their own privacy policies.</p>

                    <b>8. Changes to Policy</b>
                    <p>We may update this Privacy Policy from time to time. Any changes will be posted with the “Last Updated” date. Continued use of the application means you accept the updated policy.</p>
                </div>
                <NavLink className='PrivacyBack-Button' to='/About'>Back</NavLink>
            </div>
        </div>
    )
}