import React, {useEffect, useRef, useState} from 'react';
import fetchData from '../../helpers/fetchData';
import useInfiniteScroll from 'react-infinite-scroll-hook';

const InfiniteScrollList = ({ url, setItems, setErrors, limitItems, children }) => {
    const [hasNextPage, setHasNextPage] = useState(true);
    const [loading, setLoading] = useState();
    const cancelFetch = useRef(false);
    const page = useRef(1);
    useEffect(() => {
        page.current = 1;
        setHasNextPage(true);
        return () => {
            cancelFetch.current = true
        };
    }, [url]);
    const handleLoadMoreItems = async () => {
        setLoading(true);
        const fetchedData = await fetchData({
            url: (url.includes('?')) ?
                `${url}&page=${page.current}` :
                `${url}?page=${page.current}`,
            method: 'GET'
        });
        if (!cancelFetch.current) {
            setLoading(false);
            if (!fetchedData.errors.length) {
                page.current++;
                if (fetchedData.response.data.length < limitItems) {
                    setHasNextPage(false);
                }
                return setItems((prevState) => prevState.length ?
                    [...prevState, ...fetchedData.response.data] :
                    [...fetchedData.response.data]);
            }
            setHasNextPage(false);
            setErrors(fetchedData.errors);
        }
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
