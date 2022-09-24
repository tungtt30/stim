import { listGame } from '../fakeData/game'
import uniqueItem from '../utils/uniqueItem'

const initState = {
    listGame: listGame,
    selectedGame: {
        name: '',
        genre: '',
        image: '',
        rating: '',
        starRating: '',
        studio: '',
        year: '',
        price: 0,
        discount: 0
    },
    wishlist: [],
    cart: []
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'selectGame': {
            state.selectedGame = action.payload
            return {
                ...state
            }
        }
        case 'addToCart': {
            state.cart.push(action.payload)
            return {
                ...state
            }
        }

        case 'addToWishlist': {
            state.wishlist.push(action.payload)
            return {
                ...state
            }
        }
        default:
            return state

    }


}

export default rootReducer