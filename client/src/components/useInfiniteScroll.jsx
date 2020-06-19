import React, { useEffect, useState } from 'react'
import API from '../services/API';
import testEntries from '../testEntries';

export default function useInfiniteScroll(pageNumber) {

    useEffect(() => {
        let res = testEntries;
        console.log(testEntries[1])
    }, [pageNumber])


    return null;
}
