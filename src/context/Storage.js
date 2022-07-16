const Storage = () => {

    const getLocalStorage = () => {
        return {
            'userId': window.localStorage.getItem('userId'),
            'name': window.localStorage.getItem('name'),
        };
    }

    const setLocalStorage = (data) => {
        if (data !== null) {
            window.localStorage.setItem('userId', data.userId);
            window.localStorage.setItem('name', data.name);
        } else {
            window.localStorage.removeItem('userId');
            window.localStorage.removeItem('name');
        }
    }

    return {
        getLocalStorage, setLocalStorage
    }
}

export default Storage;
