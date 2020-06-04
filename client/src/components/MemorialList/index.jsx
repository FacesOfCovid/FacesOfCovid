// import React from 'react';

// const MemorialList = (props) => {

//     return (
//         <div className="MemorialList">
//             <ul className="list-group mb-2">
//                 {props.entries.map(entry => <li className="list-group-item"><img src={entry}></img></li>)}
//             </ul>
//             {props.msg}
//         </div>
//     )
// }

// export default MemorialList;
import React, { useState } from "react";
import { useInfiniteScroll } from "react-infinite-scroll-hook";


const ARRAY_SIZE = 20;
const RESPONSE_TIME = 1000;

function PrintImg() {
    return (
        <img
            src={
                "https://exitocol.vteximg.com.br/assets/vtex.file-manager-graphql/images/slider-blue-week-desktop___451bdd92df31482e0ece795773e265d9.jpg"
            }
        />
    );
}

function loadItems(prevArray = [], startCursor = 0) {
    return new Promise(resolve => {
        setTimeout(() => {
            let newArray = prevArray;

            for (let i = startCursor; i < startCursor + ARRAY_SIZE; i++) {
                const newItem = {
                    key: i,
                    value: `This is item ${i}`
                };
                newArray = [...newArray, newItem];
            }

            resolve(newArray);
        }, RESPONSE_TIME);
    });
}

function InfiniteList({ scrollContainer }) {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);

    function handleLoadMore() {
        setLoading(true);
        loadItems(items, items.length).then(newArray => {
            setLoading(false);
            setItems(newArray);
        });
    }

    const infiniteRef = useInfiniteScroll({
        loading,
        // This value is set to "true" for this demo only. You will need to
        // get this value from the API when you request your items.
        hasNextPage: true,
        threshold: 400,
        onLoadMore: handleLoadMore,
        scrollContainer
    });

    return (
        <List ref={infiniteRef}>
            {items.map(item => (
                <ListItem key={item.key}>
                    {item.value}
                    <PrintImg />
                </ListItem>
            ))}
            {loading && <ListItem>Loading...</ListItem>}
        </List>
    );
}

InfiniteList.propTypes = {
    scrollContainer: PropTypes.oneOf(["window", "parent"])
};

export default InfiniteList;
