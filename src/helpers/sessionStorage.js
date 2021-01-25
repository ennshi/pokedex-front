export const getFromSessionStorage = (key) => {
    const data = window.sessionStorage.getItem(key);
    if(data) {
        return JSON.parse(data);
    }
    return null;
};

export const setItemSessionStorage = (key, value) => {
    window.sessionStorage.setItem(key, JSON.stringify(value));
};
