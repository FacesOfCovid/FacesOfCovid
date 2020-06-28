import React from 'react';

// STYLESHEETS
import './memorial.css';

// COMPONENTS
import EmptyImage from '../../components/placeholders_images/EmptyImage';
import Image from '../../components/placeholders_images/Image';
import MemorialHeader from '../../components/headers/MemorialHeader';
import PasswordButton from '../../components/buttons/PasswordButton';

const Memorial = () => {
    return (
        <>
            <MemorialHeader className="memorial-sub" title="Remembering" name="FirstName LastName" />
            {/* insert logic here: !profilePic ? <EmptyImage /> : <Image /> */}
            <EmptyImage />
            <p className="memorial-info">
                {/* insert date of birth and date of passing here */}
                <p className="memorial-dates">
                    <span>* DD/MM/YYYY</span>
                    <span>† DD/MM/YYYY</span>
                </p>
                <p>
                    <strong>Age: </strong>
                    <span>25</span>
                </p>
                <p>
                    <strong>Place of Birth: </strong>
                    <span>Birth Location</span>
                </p>
                <p>
                    <strong>Residence: </strong>
                    <span>Last Home Location</span>
                </p>
            </p>

            {/* Comment Section starts here */}
            <hr />
            <p className="obituary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                <p className="">by Author Name</p>
            </p>
            <hr />
            <PasswordButton label="Add Comment" />
        </>
    );
};

export default Memorial;