import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
// import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import API from "../../services/API"
import MemorialHeader from "../headers/MemorialHeader"

// STYLES
import "./memorialList.css";

// COMPONENTS
import BlackWhiteImage from "../images/BackWhiteImage";

const MemorialList = () => {
    // Memorials is an array of numbers now, but will be an array of memorial data from the backend
    const [memorials, setMemorials] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        getMemorials();
    }, []);


    const getMemorials = () => {
        // console.log("initial call")
        API.getMemorials()
            .then(res => {
                console.log(res.data);
                setMemorials(res.data);
            })
    };

    //truncates a string to a given number of words
    const truncate = (str, numberOfWords) => {
        return str.split(" ").splice(0, numberOfWords).join(" ");
    }

    const fetchMoreData = () => {
        //fake page of data
        if (memorials.length >= 200) {
            setHasMore(false);
            return;
        }
        // this setTimeout is a fake async api call which sends
        // 20 more records in .5 secs to simulate call to backend
        // remove after backend is implemented
        // setTimeout(() => {
        //     setMemorials(memorials.concat(moreMemorials))
        // }, 500);
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
                        <b>end</b>
                    </p>
                }
            >
                {memorials.map((memorial, index) => (

                    <div className="feed-item" key={index}>

                        <Link to={'/memorial/' + memorial._id}>
                            <MemorialHeader
                                name={memorial.name}
                                cityOfResidence={memorial.cityOfResidence}
                                stateOfResidence={memorial.stateOfResidence} />
                            <BlackWhiteImage src="https://picsum.photos/400/300" alt={memorial.name} />

                            <p className='memorial-blurb'>{truncate(memorial.story, 25)}...</p>
                            {/* <h3 className="feed-name">{memorial.name}, {memorial.age}</h3> */}
                        </Link>

                    </div>

                ))}
            </InfiniteScroll>
        </>
    );

}

export default MemorialList;


