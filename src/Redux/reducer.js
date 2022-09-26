import { listGame } from '../fakeData/game'
import uniqueItem from '../utils/uniqueItem'

const initState = {
    listGame: listGame,
    selectedGame: {
        name: '',
        genre: '',
        image: 'https://ict-imgs.vgcloud.vn/2021/12/21/09/game-nft-la-gi-va-hoa-t-do-ng-nhu-the-na-o.jpg',
        rating: '',
        starRating: '',
        studio: '',
        year: '',
        price: 0,
        discount: 0
    },
    wishlist: [],
    cart: [],
    isCartShow: false
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
        case 'setShowCart': {
            state.isCartShow = !state.isCartShow
            return {
                ...state
            }
        }
        default:
            return state

    }


}

export default rootReducer