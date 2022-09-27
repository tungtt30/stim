import { listGame } from '../fakeData/game'


const initState = {
    userWallet: 200,
    listGame: listGame,
    selectedGame: {
        id: '',
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
            let selectedGame = state.selectedGame
            selectedGame = action.payload
            return {
                ...state,
                selectedGame: selectedGame
            }
        }
        case 'addToCart': {
            let cart = state.cart
            cart.push(action.payload)
            let uniqueCart = cart.filter((v, i, a) => a.findIndex(v2 => (v2.id === v.id)) === i)
            return {
                ...state,
                cart: uniqueCart
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
        case 'deleteFromCart': {
            let cart = state.cart
            cart.splice(action.payload, 1)
            return {
                ...state,
                cart: cart
            }
        }
        case 'pay': {
            let wallet = state.userWallet
            wallet = wallet - action.payload
            return {
                ...state,
                userWallet: wallet,
                cart: []
            }
        }
        default:
            return state

    }


}

export default rootReducer