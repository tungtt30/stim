

export const selectGame = (data) => {
    return {
        type: 'selectGame',
        payload: data
    }
}

export const addToCart = (data) => {
    return {
        type: 'addToCart',
        payload: data
    }
}

export const addToWishlist = (data) => {
    return {
        type: 'addToWishlist',
        payload: data
    }
}

