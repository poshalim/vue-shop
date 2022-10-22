const state = {
    cartIsOpen: false,
    productsInTheCart: []
}

const mutations = {
    cartToggle(state) {
        state.cartIsOpen = !state.cartIsOpen
    },
    addToCart(state, payload) {
        const hasProduct = state.productsInTheCart.some(product => payload.id === product.id)
        if (hasProduct) {
            state.productsInTheCart.forEach(product => {
                if (payload.id === product.id) {
                    product.amount += 1
                }
            })
        } else {
            payload.amount = 1
            state.productsInTheCart.push(payload)
        }
    },
    removeFromCart(state, payload) {
        state.productsInTheCart = state.productsInTheCart.filter(product => product.id !== payload.id)
    },
    increaseAmount(state, payload) {
        state.productsInTheCart.forEach(product => {
            if (product.id === payload.id) {
                product.amount += 1
            }
        })
    },
    decreaseAmount(state, payload) {
        state.productsInTheCart.forEach(product => {
            if (product.id === payload.id) {
                product.amount -= 1
            }
        })
    }

}

const actions = {
    cartToggle(context) {
        context.commit('cartToggle')
    },
    addToCart(context, product) {
        context.commit('cartToggle')
        context.commit('addToCart', product)
    },
    removeFromCart(context, product) {
        context.commit('removeFromCart', product)
    },
    increaseAmount(context, product) {
        context.commit('increaseAmount', product)
    },
    decreaseAmount(context, product) {
        context.commit('decreaseAmount', product)
    }
}

export default {
    state, mutations, actions
}
