import React, {useEffect, useRef, useState} from 'react';
import fetchData from '../../helpers/fetchData';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import {getFromSessionStorage, setItemSessionStorage} from '../../helpers/sessionStorage';

const InfiniteScrollList = ({ url, setItems, setErrors, limitItems, children }) => {
    const [hasNextPage, setHasNextPage] = useState(true);
    const [loading, setLoading] = useState();
    const cancelFetch = useRef(false);
    const page = useRef(1);
    useEffect(() => {
        page.current = 1;
        setHasNextPage(true);
        cancelFetch.current = false;
        return () => {
            cancelFetch.current = true;
        };
    }, [url]);

    const setPageUrl = (url, page) => {
        return ((url.includes('?')) ?
            `${url}&page=${page}` :
            `${url}?page=${page}`);
    };

    const getItems = async (url) => {
        const result = {
            response: {},
            errors: []
        };
        if (getFromSessionStorage(url)) {
            result.response.data = getFromSessionStorage(url);
            return result;
        }
        const fetchedData = await fetchData({url, method: 'GET'});
        if (!fetchedData.errors.length) {
            result.response.data = fetchedData.response.data;
            (!url.includes('liked-pokemons') && setItemSessionStorage(url, fetchedData.response.data));
            return result;
        }
        result.errors = fetchedData.errors;
        return result;
    };

    const handleLoadMoreItems = async () => {
        setLoading(true);
        const { response, errors } = await getItems(setPageUrl(url, page.current));
        if (!cancelFetch.current) {
            setLoading(false);
            if (!errors.length) {
                page.current++;
                if (response.data.length < limitItems) {
                    setHasNextPage(false);
                }
                return setItems((prevState) => prevState.length ?
                    [...prevState, ...response.data] :
                    [...response.data]);
            }
            setHasNextPage(false);
            setErrors(errors);
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
