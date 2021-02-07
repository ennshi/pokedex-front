import React, { useState } from 'react';

const useDebouncer = () => {
    const [timer, setTimer] = useState(0);
    const setDebouncer = (ms, cb) => {
        cancelDebouncer();
        setTimer(setTimeout(cb, ms));
    };
    const cancelDebouncer = () => {
        if(timer) {
            clearTimeout(timer);
            setTimer(0);
        }
    };
    return {
        setDebouncer,
        cancelDebouncer
    };
};

export default useDebouncer;
