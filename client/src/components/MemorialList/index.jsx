import React, { useState } from "react";
// import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";

// STYLES
import "./memorialList.css";

// COMPONENTS
import BlackWhiteImage from "../images/BackWhiteImage";

const MemorialList = () => {
    // Memorials is an array of numbers now, but will be an array of memorial data from the backend
    const [memorials, setMemorials] = useState(Array.from({ length: 20 }))
    const [hasMore, setHasMore] = useState(true);

    const fetchMoreData = () => {
        //fake page of data
        const moreMemorials = Array.from({ length: 20 });

        if (memorials.length >= 200) {
            setHasMore(false);
            return;
        }
        // this setTimeout is a fake async api call which sends
        // 20 more records in .5 secs to simulate call to backend
        // remove after backend is implemented
        setTimeout(() => {
            setMemorials(memorials.concat(moreMemorials))
        }, 500);
    };

    return (
        <>
            <InfiniteScroll
                className="feed-grid"
                dataLength={memorials.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {memorials.map((i, index) => (
                    <div className="feed-item" key={index}>
                        <BlackWhiteImage src="https://picsum.photos/400/300" alt="Name goes here"/>
                        <h3 className="feed-name">First Name Last Name, age</h3>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p> */}
                    </div>
                ))}
            </InfiniteScroll>
        </>
    );
}


export default MemorialList;


