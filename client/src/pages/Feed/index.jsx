import React, { useState, useEffect } from 'react';
import testEntries from '../../../src/testEntries';


//COMPONENTS
import MemorialList from "../../components/MemorialList"
import PageHeader from '../../components/headers/PageHeader';
//STYLES
import './feed.css';

const Feed = () => {
    return (

        <div className="Feed container">

            <PageHeader title="feed" />

            <div className="row justify-content-center">
                <div className="col-6 justify-content-center my-5">
                    <MemorialList />
                </div>
            </div>

        </div>
    )
}

export default Feed;