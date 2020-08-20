import React from 'react';

// STYLESHEETS
import './profile.css';

// COMPONENTS
import EmptyImage from '../../components/images/EmptyImage';
import PageHeader from '../../components/headers/PageHeader';
import PasswordButton from '../../components/buttons/PasswordButton';
import SubHeader from '../../components/headers/SubHeader';

const Profile = () => {
    return (
        <>
            <PageHeader title="Profile" />
            <div className="profile-grid">
                <div className="profile-img">
                    {/* insert logic here: !profilePic ? <EmptyImage /> : <Image /> */}
                    <EmptyImage />
                </div>
                <div>
                    <SubHeader title="FirstName LastName" />
                    <div className="profile-info">
                        <h5>E-Mail:</h5>
                        <p>user@email.com</p>
                    </div>
                    <div className="profile-info">
                        <h5>Joined on:</h5>
                        <p>MM/DD/YYYY</p>
                    </div>
                    <div className="profile-info">
                        <h5>Entries:</h5>
                        <ul>
                            <li>
                                <a href="#">Memorial Entry Name</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="profile-btn">
                    <PasswordButton label='Change Password' />
                    <PasswordButton label='Edit Profile' />
                </div>
            </div>
        </>
    );
};

export default Profile;