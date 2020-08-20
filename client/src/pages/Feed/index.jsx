import React from 'react';

// COMPONENTS
import MemorialList from "../../components/MemorialList"
import PageHeader from '../../components/headers/PageHeader';

// STYLES
import './feed.css';

const Feed = () => {
    return (
        <main className="feed">
            <PageHeader title="In Loving Memory" />
            <MemorialList />
        </main>
    );
};

export default Feed;