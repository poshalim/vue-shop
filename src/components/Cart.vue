<template>
    <div @click="toggleCart">
        <button class="menu__cart">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M3.67986 6.91023C3.72631 6.39482 4.15832 6 4.67582 6H17.3242C17.8417 6 18.2737 6.39482 18.3201 6.91023L19.4018 18.9102C19.4545 19.4956 18.9935 20 18.4058 20H3.59419C3.00646 20 2.54547 19.4956 2.59823 18.9102L3.67986 6.91023Z"
                    stroke="#000000" stroke-width="1.8"></path>
                <path d="M15 9V5C15 2.79086 13.2091 1 11 1C8.79086 1 7 2.79086 7 5V9" stroke="#000000"
                    stroke-width="1.85"></path>
            </svg>
            <div class="menu__cart-counter">{{amount}}</div>
        </button>
        <transition name="fade">
            <div class="modal cart" v-if="cartIsOpen">
                <div class="modal__bg">
                    <div class="modal__content" @click="toggleAddressList">
                        <h3 class="form__title cart__title">Ваш заказ:</h3>
                        <div class="cart__items">
                            <div class="cart__item cart-item" v-for="product in productsInTheCart" :key="product.id">
                                <img class="cart-item__img" :src="product.img">
                                <h5 class="cart-item__name">{{product.name}}</h5>
                                <div>
                                    <span @click="decreaseAmount(product)"><img
                                            src="https://static.tildacdn.com/lib/linea/c8eecd27-9482-6c4f-7896-3eb09f6a1091/arrows_circle_minus.svg"
                                            style="width:16px;height:16px;border:0"></span>
                                    <span class="cart-item__amount">{{product.amount}}</span>
                                    <span @click="increaseAmount(product)"><img
                                            src="https://static.tildacdn.com/lib/linea/c47d1e0c-6880-dc39-ae34-521197f7fba7/arrows_circle_plus.svg"
                                            style="width:16px;height:16px;border:0"></span>
                                </div>
                                <p class="cart-item__price">{{getPrice(product)}}</p>
                                <div class="cart-item__remove" @click="removeFromCart(product)">
                                    <img src="https://static.tildacdn.com/lib/linea/1bec3cd7-e9d1-2879-5880-19b597ef9f1a/arrows_circle_remove.svg"
                                        style="width:20px;height:20px;border:0;">
                                </div>
                            </div>
                        </div>
                        <p class="cart__sum" v-if="productsInTheCart.length">Сумма: {{sumToFormat}}</p>

                        <my-cart-form :sum-to-format="sumToFormat" :products-in-the-cart="productsInTheCart"
                            @selectAddress="selectAddress" @addressSearch="addressSearch" />
                    </div>
                </div>
            </div>
        </transition>
    </div>

</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { calculateTheAmount } from '@/helpers/utils'
import { calculateTheSum } from '@/helpers/utils'
import { calculateThePrice } from '@/helpers/utils'
import { FormatToPrice } from '@/helpers/utils'
import MyCartForm from '@/components/CartForm.vue'

export default {
    name: 'MyCart',
    components: {
        MyCartForm,
    },
    setup() {
        const store = useStore()

        const cartIsOpen = computed(() => store.state.cart.cartIsOpen);
        const productsInTheCart = computed(() => store.state.cart.productsInTheCart)
        const amount = computed(() => calculateTheAmount(productsInTheCart.value))
        const sumToFormat = computed(() => FormatToPrice(calculateTheSum(productsInTheCart.value)))
        const addressSelectionIsActive = computed(() => store.state.addressSearch.addressSelectionIsActive);

        const getPrice = (product) => FormatToPrice(calculateThePrice(product))


        const toggleCart = ({ target }) => {
            if (target.closest('.menu__cart') || target.classList.contains('modal__bg')) {
                store.dispatch('cartToggle')
                document.body.classList.toggle('_locked')

            }
        }

        const removeFromCart = (product) => {
            store.dispatch('removeFromCart', product)
        }

        const increaseAmount = (product) => {
            store.dispatch('increaseAmount', product)
        }

        const decreaseAmount = (product) => {
            if (product.amount > 1) {
                store.dispatch('decreaseAmount', product)
            } else {
                store.dispatch('removeFromCart', product)
            }
        }

        const toggleAddressList = ({ target }) => {
            if (addressSelectionIsActive.value && (!target.closest('.form__searchbox-list') || !target.closest('.form__adress'))) {
                store.dispatch('toggleaddressSelection')
            } else if (target.closest('.form__adress')) {
                store.dispatch('toggleaddressSelection')
            }
        }

        const addressSearch = (address) => {
            store.dispatch('getListAdresses', address)
        }

        const selectAddress = () => {
            store.dispatch('toggleaddressSelection')
        }

        return {
            cartIsOpen,
            productsInTheCart,
            amount,
            sumToFormat,
            getPrice,
            toggleCart,
            removeFromCart,
            increaseAmount,
            decreaseAmount,
            toggleAddressList,
            addressSearch,
            selectAddress
        }
    }
}
</script>

<style lang="scss" scoped>
.menu__cart {
    position: relative;
}

.menu__cart-counter {
    min-width: 10px;
    height: 14px;
    line-height: 12px;
    font-size: 10px;
    padding: 0px 3px;
    background-color: red;
    color: #fff;
    border-radius: 30px;
    position: absolute;
    right: 3px;
    bottom: 3px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
}

.modal {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 7;

    &__bg {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        padding: 40px;
    }

    &__content {
        max-height: 90%;
        max-width: 560px;
        margin: auto;
        overflow-y: auto;
        background-color: #FFFFFF;
        padding: 40px;
        border-radius: 5px;
    }
}

.cart__items {
    border-top: 1px solid rgba(0, 0, 0, .2);
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    margin-bottom: 30px;
}

.cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    font-size: 14px;

    &__img {
        width: 70px;
        height: 70px;
    }

    &__name {
        padding: 15px 0;
        font-weight: 600;
        font-size: 16px;
        width: 180px;
    }

    &__amount {
        padding: 0 5px;
    }

    &__price {}

    &__remove {
        cursor: pointer;
    }
}

.form__title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 30px;
}

@media(max-width:768px) {

    .modal {
        &__bg {
            padding: 40px 20px;
        }

        &__content {
            padding: 40px 15px;
        }
    }

    .form {
        &__input-group {
            margin-bottom: 10px;
        }

        &__input {
            height: 40px;
        }
    }

    .cart-item__name {
        width: 130px;
        font-size: 14px;
    }
}

@media(max-width:425px) {

    .form {
        &__title {
            font-size: 20px;
        }

    }

    .cart-item__name {
        width: 100px;
        font-size: 12px;
    }
}
</style>