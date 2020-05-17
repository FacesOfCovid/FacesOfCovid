import React from 'react';

// STYLESHEETS
import './profile.css';

// COMPONENTS


const Profile = () => {
    return (
        <div>
            <h3>Profile</h3>
            <img src="#" alt="Profile Picture"/>
            <div>FirstName LastName</div>
            <p>
                <strong>E-Mail: </strong>
                <span>user@email.com</span>
            </p>
            <p>
                <strong>Joined on:</strong>
                <span>MM/DD/YYYY</span>
            </p>
            <button>Change Password</button>
            <p>
                <strong>Entries: </strong>
                <ul>
                    <li>
                        <a href="#">Memorial Entry Name</a>
                    </li>
                </ul>
            </p>
        </div>
    );
};

export default Profile;