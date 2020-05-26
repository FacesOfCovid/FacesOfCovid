import React from 'react';

const MemorialList = (props) => {



    return (
        <div className="MemorialList">
            <ul className="list-group mb-2">
                {props.entries.map(entry => <li className="list-group-item">Entry {entry}</li>)}
            </ul>
            {props.msg}
        </div>
    )
}

export default MemorialList;