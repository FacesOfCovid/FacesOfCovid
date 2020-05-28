import React, { useState, useEffect } from 'react';
import testEntries from '../../../src/testEntries';

//COMPONENTS
import MemorialList from "../../components/MemorialList"
import PageHeader from '../../components/headers/PageHeader';
//STYLES
import './feed.css';

const Feed = () => {
    // const [entries, setEntries] = useState(Array.from(Array(30).keys(), n => n + 1));

    const [isFetching, setIsFetching] = useState(false);

    //calls handleScroll function when window scrolls
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!isFetching) return;
        fetchMoreEntries();
    }, [isFetching]);

    //checks window height, sets isFetching bool to true when scrolled to the bottom of the window 
    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        setIsFetching(true);
    }

    //Fetches more entries, then sets isFetching to false
    function fetchMoreEntries() {
        setTimeout(() => {
            setEntries(prevState => ([...prevState, ...Array.from(Array(20).keys(), n => n + prevState.length + 1)]));
            setIsFetching(false);
        }, 2000)
    };

    return (
        <div className="Feed container">

            <PageHeader title="feed" />

            <div className="row">
                <div className="col-6 justify-content-center my-5">
                    <MemorialList entries={entries} msg={isFetching && 'Loading more memorials'} />
                </div>
            </div>

        </div>
    )
}

export default Feed;