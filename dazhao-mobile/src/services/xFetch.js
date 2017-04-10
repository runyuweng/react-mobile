function xFetch(url, options) {
    options.mode = "cors";
    return fetch("http://115.159.159.79"+url, options).then(res => {
        return res
    })
}

export default xFetch;
