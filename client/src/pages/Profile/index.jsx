import React from 'react';

// STYLESHEETS
import './profile.css';

// COMPONENTS
import PageHeader from '../../components/headers/PageHeader';
import SubHeader from '../../components/headers/SubHeader';
import PasswordButton from '../../components/buttons/PasswordButton';

const Profile = () => {
    return (
        <div className="profile-container">
            <PageHeader title="Profile" />
            <img src="#" alt="Profile Picture"/>
            <SubHeader title="FirstName LastName" />
            <p className="profile-info">
                <strong>E-Mail: </strong>
                <br />
                <span>user@email.com</span>
            </p>
            <p className="profile-info">
                <strong>Joined on: </strong>
                <br />
                <span>MM/DD/YYYY</span>
            </p>
            <p className="profile-info">
                <strong>Entries: </strong>
                <ul>
                    <li>
                        <a href="#">Memorial Entry Name</a>
                    </li>
                </ul>
            </p>
            <br />

            <PasswordButton label='Change Password' />
            <PasswordButton label='Edit Profile' />
        </div>
    );
};

export default Profile;