var cache = new Map();
var MAX = 5

const setCache = (key, value) => { 
    if (cache.has(key)) cache.delete(key)
    else if (cache.size === MAX) cache.delete(first());
    cache.set(key, value)
}

const getCache = (key) => {   
    const value = cache.get(key)
    if (value) {
        cache.delete(key)
        cache.set(key, value);
    }
 
    return value
}

const first = () => {
    return cache.keys().next().value;
}

export {
    setCache, getCache
}