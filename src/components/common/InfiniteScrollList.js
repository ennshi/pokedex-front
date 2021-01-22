import React, {useEffect, useRef, useState} from 'react';
import fetchData from '../../helpers/fetchData';
import useInfiniteScroll from 'react-infinite-scroll-hook';

const InfiniteScrollList = ({ url, setItems, setErrors, limitItems, children }) => {
    const [hasNextPage, setHasNextPage] = useState(true);
    const [loading, setLoading] = useState();
    const page = useRef(25);
    console.log(loading, hasNextPage);
    const handleLoadMoreItems = async () => {
        setLoading(true);
        const fetchedData = await fetchData({
            url: `${url}?page=${page.current}`,
            method: 'GET'
        });
        setLoading(false);
        if(!fetchedData.errors.length) {
            page.current++;
            if(fetchedData.response.data.length < limitItems) {
                setHasNextPage(false);
            }
            return setItems((prevState) => prevState.length ?
                [...prevState, ...fetchedData.response.data] :
                [...fetchedData.response.data]);
        }
        setHasNextPage(false);
        setErrors(fetchedData.errors);
    };
    const infiniteRef = useInfiniteScroll({
        loading,
        hasNextPage,
        onLoadMore: handleLoadMoreItems
    });
    return (
        <div ref={infiniteRef}>
            { children }
            {loading && <h5>Loading...</h5>}
        </div>
    );
};

export default InfiniteScrollList;
