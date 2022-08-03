const FILTER_NAME = 'Sky Mobile'

const filterResults = (results) => {
    return (results || []).map(entry => {
        let points = 0;

        if (entry.title.toLowerCase().includes(FILTER_NAME.toLowerCase())) {
            points += 1;
        }      

        return { ...entry, points };
    }).sort((a, b) => b.points - a.points)
}

const urlRewriting = (urlPath) => {
    window.history.replaceState(null, null, urlPath)
}

export {
    filterResults, urlRewriting
}