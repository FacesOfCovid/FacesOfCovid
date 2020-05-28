import React from 'react';

// STYLESHEETS
import './memorial.css';

// COMPONENTS
import EmptyImage from '../../components/placeholders_images/EmptyImage';
import Image from '../../components/placeholders_images/Image';
import MemorialHeader from '../../components/headers/MemorialHeader';
import AddCommentButton from '../../components/buttons/AddCommentButton';
import PasswordButton from '../../components/buttons/PasswordButton';

const Memorial = () => {
    return (
        <div className="memorial-container">
            <MemorialHeader className="memorial-sub" title="Remembering" name="FirtName LastName" />
            {/* insert logic here: !profilePic ? <EmptyImage /> : <Image /> */}
            <EmptyImage />
            <p className="memorial-info">
                <p>
                    <strong>Age: </strong>
                    <br/>
                    <span>25</span>
                </p>
                <p>
                    <strong>Place of Birth: </strong>
                    <br/>
                    <span>Birth Location</span>
                </p>
                <p>
                    <strong>Residence: </strong>
                    <br/>
                    <span>Last Home Location</span>
                </p>
            </p>
            <hr />
            <p className="obituary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                <p className="">by Author Name</p>
            </p>
            <hr />
            <AddCommentButton />
            <PasswordButton label="Edit Memorial" />
        </div>
    );
};

export default Memorial;