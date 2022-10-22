<template  @toggleAddressList="toggleAddressList">
    <form class="form" method="POST" action="https://yoomoney.ru/quickpay/confirm.xml" @submit="checkForm">
        <input type="hidden" name="receiver" value="410019169273191">
        <input type="hidden" name="label" value="1">
        <input type="hidden" name="quickpay-form" value="shop">
        <div class="form__input-group">
            <label class="form__label" for="cart-name">Получатель (ФИО полностью)</label>
            <input class="form__input" id="cart-name" type="text" v-model="fio"
                :class="{'form__input-error': errors.fioIsEmpty}">
            <b class="form__text-error" v-if="errors.fioIsEmpty">Пожалуйста,
                заполните все обязательные поля</b>
        </div>
        <div class="form__input-group">
            <label class="form__label" for="cartcommente">Комментарий</label>
            <input class="form__input" id="cart-comment" type="text">
        </div>
        <div class="form__input-group">
            <label class="form__label" for="cart-email">E-mail</label>
            <input class="form__input" id="cart-email" type="email" v-model="mail"
                :class="{'form__input-error': errors.mailIsEmpty}">
            <b class="form__text-error" v-if="errors.mailIsEmpty">Пожалуйста, заполните все
                обязательные
                поля</b>
        </div>
        <div class="form__input-group">
            <label class="form__label" for="cart-social">Ссылка на соц. сети (для связи)</label>
            <input class="form__input" id="cart-social" type="text" placeholder="Ссылка на аккаунт VK или telegram"
                v-model="social" :class="{'form__input-error': errors.socialIsEmpty}">
            <b class="form__text-error" v-if="errors.socialIsEmpty">Пожалуйста, заполните все
                обязательные поля</b>
        </div>
        <div class="form__input-group">
            <label class="form__label" for="cart-number">Ваш телефон</label>
            <input class="form__input" id="cart-number" type="tel" placeholder="+7 (999) 999-99-99" v-model="tel"
                :class="{'form__input-error': errors.telIsEmpty}">
            <b class="form__text-error" v-if="errors.telIsEmpty">Пожалуйста, заполните все
                обязательные
                поля</b>
        </div>
        <h4 class="cart__delivery">Доставка</h4>
        <div class="form__input-group form__search-wrapper">
            <label class="form__label" for="cart-address">Адрес доставки</label>
            <input class="form__input form__adress" id="cart-address" type="text" v-model="address"
                @input="addressSearch" :class="{'form__input-error': errors.addressIsEmpty}" @focus="openAddressList">
            <b class="form__text-error" v-if="errors.addressIsEmpty">Пожалуйста, выберите заполните
                адрес
                из ниже предложенных вариантов</b>
            <div class="form__searchbox-list">
                <div v-show="addressSelectionIsActive" v-for="adressItem in AddressList" :key="adressItem.value"
                    @click="selectAddress(adressItem.value)">
                    <div class="form__searchbox-list-item">
                        <div class="form__searchbox-list-item-text">{{adressItem.data.city_with_type}}
                        </div>
                        <div class="form__searchbox-list-item-description">{{adressItem.value}}</div>
                    </div>
                </div>
            </div>
        </div>
        <p class="form__payment-method">Способ оплаты</p>
        <div class="form__radio-wrapper">
            <label class="form__radio-control">
                <input class="form__radio-payment" type="radio" name="paymentType" value="AC" checked="checked">
                <div class="form__radio-indicator"></div> Банковской картой
            </label>
        </div>
        <div class="cart__sum" v-if="productsInTheCart.length"><label><input type="hidden" name="sum" :value="sum"
                    data-type="number">Итоговая сумма:
                {{sumToFormat}}</label></div>
        <b class="cart__errors" v-if="!productsInTheCart.length">Error: добавьте в корзину хотя бы
            один товар</b>
        <b class="cart__errors" v-if="fieldsAreEmpty">Пожалуйста, заполните все обязательные
            поля</b>
        <button class="form__button" :disabled="isButtonDisabled" :class="{ btnDisabled: isButtonDisabled}">Перейти к
            оплате</button>
    </form>

</template>

<script>
import { useStore } from 'vuex'
import { ref, computed } from 'vue'
import { calculateTheSum } from '@/helpers/utils'

export default {
    name: 'MyCartForm',
    props: {
        sumToFormat: String,
        productsInTheCart: Array,
    },
    emits: ['addressSearch', 'selectAddress'],
    setup(props, { emit }) {
        const store = useStore()

        const fio = ref('')
        const mail = ref('')
        const social = ref('')
        const tel = ref('')
        const address = ref('')
        const fieldsAreEmpty = ref(false)

        const errors = ref({
            fioIsEmpty: false,
            mailIsEmpty: false,
            socialIsEmpty: false,
            telIsEmpty: false,
            addressIsEmpty: false,
        })

        const AddressList = computed(() => store.state.addressSearch.data);
        const addressSelectionIsActive = computed(() => store.state.addressSearch.addressSelectionIsActive);

        const sum = computed(() => calculateTheSum(props.productsInTheCart))

        const isButtonDisabled = computed(() => props.productsInTheCart.length ? false : true)

        const checkForm = (e) => {
            if (fio.value && mail.value && social.value && tel.value && address.value) {
                return true
            }

            fio.value ? errors.value.fioIsEmpty = false : errors.value.fioIsEmpty = true
            mail.value ? errors.value.mailIsEmpty = false : errors.value.mailIsEmpty = true
            social.value ? errors.value.socialIsEmpty = false : errors.value.socialIsEmpty = true
            tel.value ? errors.value.telIsEmpty = false : errors.value.telIsEmpty = true
            address.value ? errors.value.addressIsEmpty = false : errors.value.addressIsEmpty = true
            e.preventDefault();
            fieldsAreEmpty.value = true
        }

        const addressSearch = () => {
            emit('addressSearch', address.value)
        }

        const selectAddress = (selectAddress) => {
            emit('selectAddress')
            address.value = selectAddress
        }

        return {
            fio, mail, social, tel, address, fieldsAreEmpty,
            errors,
            AddressList,
            sum,
            isButtonDisabled,
            addressSelectionIsActive,
            checkForm,
            addressSearch,
            selectAddress,
        }
    }
}
</script>

<style lang="scss">
.form {
    &__input-group {
        margin-bottom: 20px;
    }

    &__label {
        padding-bottom: 5px;
        font-size: 14px;
    }

    &__input {
        height: 56px;
        width: 100%;
        color: #000000;
        border: 1px solid #000000;
        padding: 0 20px;
    }

    &__input-error {
        border: 1px solid red;
    }

    &__text-error {
        color: red;
        font-size: 13px;
        margin-top: 5px;
        font-family: 'Roboto', Arial, sans-serif;
        font-weight: 500;
    }

    &__search-wrapper {
        position: relative;
    }

    &__searchbox-list:not(:empty) {
        top: 85px;
        width: 100%;
        cursor: pointer;
        max-height: 330px;
        overflow-y: scroll;
        position: absolute;
        background: #fff;
        z-index: 10;
        box-sizing: border-box;
        box-shadow: 0 4px 7px 0 grey;
    }

    &__searchbox-list-item {
        padding: 20px;
    }

    &__payment-method {
        font-size: 20px;
        padding: 20px 0 10px;
    }

    &__radio-wrapper {
        margin-bottom: 20px;
    }

    &__radio-control {
        position: relative;
        display: flex;
        cursor: pointer
    }

    &__radio-payment {
        position: absolute;
        z-index: -1;
        opacity: 0;

        &:checked~.form__radio-indicator::after,
        &:checked~.form__radio-indicator {
            opacity: 1;
        }
    }

    &__radio-indicator {
        position: relative;
        height: 20px;
        width: 20px;
        border-color: #000;
        border-style: solid;
        border-width: 2px;
        box-sizing: border-box;
        border-radius: 50%;
        margin-right: 10px;
        transition: all .2s;
        opacity: .6;


        &::after {
            content: '';
            width: 10px;
            height: 10px;
            background: #000;
            border-radius: 50%;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            opacity: 0;
        }
    }

    &__button {
        color: #ffffff;
        background-color: #000000;
        width: 100%;
        height: 60px;
        font-weight: 700;
        margin-top: 20px;
    }
}

.cart__delivery {
    margin: 20px 0 10px;
}

.cart__sum {
    padding-bottom: 20px;
    text-align: right;
    font-weight: 600;
}

.cart__errors {
    display: block;
    background: #f95d51;
    padding: 10px;
    text-align: center;
    margin-bottom: 10px;
    color: #FFFFFF;
}

.btnDisabled {
    opacity: 0.5;
    cursor: default;
}

@media(max-width:768px) {
    .form {
        &__input-group {
            margin-bottom: 10px;
        }

        &__input {
            height: 40px;
        }
    }
}

@media(max-width:425px) {
    .form {
        &__input {
            height: 35px;
        }
    }
}
</style>