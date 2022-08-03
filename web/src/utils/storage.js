const STORAGE_NAME = 'keywords'

const countKeyword = () => {
    return JSON.parse(localStorage.getItem(STORAGE_NAME))?.length
}

const saveKeyword = (keywords, keyword) => { 
    localStorage.setItem(STORAGE_NAME, JSON.stringify([...keywords, keyword]))
}

const getKeyword = () => {
    return JSON.parse(localStorage.getItem(STORAGE_NAME))
}

const findKeyword = (keyword) => {
    const keywords = JSON.parse(localStorage.getItem(STORAGE_NAME))
    const result = keywords?.find((x) => x.toLowerCase() === keyword.toLowerCase()) 
    if (!result) return false
    return true
}

export {
    countKeyword, saveKeyword, getKeyword, findKeyword
}