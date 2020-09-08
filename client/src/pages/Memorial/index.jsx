import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import API from "../../services/API"

// STYLES
import './memorial.css';

// COMPONENTS
import EmptyImage from '../../components/images/EmptyImage';
import MemorialHeader from '../../components/headers/MemorialHeader';
import PasswordButton from '../../components/buttons/PasswordButton';
import BlackWhiteImage from '../../components/images/BackWhiteImage';

const Memorial = () => {

    const [memorial, setMemorial] = useState({})

    let { id } = useParams();

    useEffect(() => {
        getOneMemorial(id);
    }, []);

    const getOneMemorial = (id) => {
        // console.log("initial id call");
        API.getOneMemorial(id)
            .then(res => {
                console.log(res.data);
                setMemorial(res.data);
            })
    };


    const { name, dateOfBirth, dateOfPassing, photo, story, stateOfResidence, cityOfResidence, cityOfBirth, stateOfBirth } = memorial;

    return (
        <>
            <MemorialHeader className="memorial-sub" title="Remembering" name={name} cityOfResidence={cityOfResidence} stateOfResidence={stateOfResidence} />
            {photo ? <BlackWhiteImage src={photo} /> : <EmptyImage />}

            <p className="memorial-info">
                {/* insert date of birth and date of passing here */}
                <p className="memorial-dates">
                    <span>* {dateOfBirth}</span>
                    <span>† {dateOfPassing}</span>
                </p>
                <p>
                    <strong>Age: </strong>
                    <span>25</span>
                </p>
                <p>
                    <strong>Place of Birth: </strong>
                    <span>{cityOfBirth}, {stateOfBirth}</span>
                </p>
                {/* I moved last residence to the header and commented it out below */}
                {/* <p>
                    <strong>Residence: </strong>
                    <span>Last Home Location</span>
                </p> */}
            </p>

            {/* Narrative Section starts here */}
            <hr />
            <p className="obituary">
                {story}
                <p className="">by Author Name</p>
            </p>
            <hr />
            {/* I feel like maybe comments aren't appropriate in this app, so I commented out the button */}
            {/* <PasswordButton label="Add Comment" /> */}
        </>
    );
};

export default Memorial;