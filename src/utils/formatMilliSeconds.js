const formatMilliseconds = (milliseconds) => {
    if (milliseconds < 10) {
        return `00${milliseconds}`
    }else if (milliseconds < 100) {
        return `0${milliseconds}`
    } else {
        return milliseconds;
    }
};

export default formatMilliseconds;