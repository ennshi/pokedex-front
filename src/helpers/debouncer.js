let timer = null;
export const debouncer = (ms, cb) => {
    cancelDebouncer();
    timer = setTimeout(cb, ms);
};

export const cancelDebouncer = () => {
    if(timer) {
        clearTimeout(timer);
        timer = null;
    }
};
