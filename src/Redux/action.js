

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

export const deleteFromCart = (data) => {
    return {
        type: 'deleteFromCart',
        payload: data
    }
}

export const pay = (data) => {
    return {
        type: 'pay',
        payload: data
    }
}

