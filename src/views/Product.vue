<template>
    <div v-if="currentProduct">
        <transition name="fade">
            <my-modal class="product" v-if="productIsOpen" @click="addToCart">
                <div v-show="modalContentIsVisible">
                    <div class="product__close-btns">
                        <button class="product__return">Все товары</button>
                        <button class="product__close close">
                            <svg width="23px" height="23px" viewBox="0 0 23 23" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g stroke="none" stroke-width="1" fill="#000000" fill-rule="evenodd">
                                    <rect
                                        transform="translate(11.313708, 11.313708) rotate(-45.000000) translate(-11.313708, -11.313708) "
                                        x="10.3137085" y="-3.6862915" width="2" height="30"></rect>
                                    <rect
                                        transform="translate(11.313708, 11.313708) rotate(-315.000000) translate(-11.313708, -11.313708) "
                                        x="10.3137085" y="-3.6862915" width="2" height="30"></rect>
                                </g>
                            </svg>
                        </button>
                    </div>
                    <transition name="transform" appear>
                        <div class="product__content">
                            <div class="product__images">
                                <swiper class="product__swiper" :modules="modules" effect="fade" navigation
                                    @swiper="setOnSwiper" :thumbs="{ swiper: thumbsSwiper }"
                                    :controller="{ control: secondSwiper }">
                                    <swiper-slide class="product__swiper-container"
                                        @click="modalContentIsVisible = false" v-for="img in currentProduct.images"
                                        :key="img">
                                        <img class="product__slide" :src="img">
                                    </swiper-slide>
                                </swiper>

                                <swiper class="product__thumbs-swiper" :modules="modules"
                                    :slides-per-view="currentProduct.images.length" :space-between="5"
                                    watch-slides-progress @swiper="setThumbsSwiper">
                                    <swiper-slide class="product__thumbs-container" v-for="img in currentProduct.images"
                                        :key="img"><img class="product__thumbs-slide" :src="img">
                                    </swiper-slide>
                                </swiper>
                            </div>
                            <div class="product__info">
                                <h2 class="product__title">{{currentProduct.name}}</h2>
                                <p class="product__price">{{currentProduct.price}}</p>
                                <button class="product__btn">Купить</button>
                                <p class="product__description">{{currentProduct.description}}
                                </p>
                            </div>
                        </div>
                    </transition>
                </div>
            </my-modal>
        </transition>

        <my-modal v-show="!modalContentIsVisible">
            <div class="product__gallery-modal">
                <button class="close" @click="modalContentIsVisible = true">
                    <svg width="23px" height="23px" viewBox="0 0 23 23" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" stroke-width="1" fill="#000000" fill-rule="evenodd">
                            <rect
                                transform="translate(11.313708, 11.313708) rotate(-45.000000) translate(-11.313708, -11.313708) "
                                x="10.3137085" y="-3.6862915" width="2" height="30"></rect>
                            <rect
                                transform="translate(11.313708, 11.313708) rotate(-315.000000) translate(-11.313708, -11.313708) "
                                x="10.3137085" y="-3.6862915" width="2" height="30"></rect>
                        </g>
                    </svg>
                </button>
                <swiper class="product__gallery" :modules="modules" navigation zoom @swiper="setSecondSwiper"
                    :controller="{ control: onSwiper }">
                    <swiper-slide class="product__gallery-container" v-for="img in currentProduct.images" :key="img">
                        <div class="swiper-zoom-container"><img class="product__gallery-item" :src="img">
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </my-modal>
    </div>
</template>

<script>
import MyModal from '@/components/Modal'
import { ref, onMounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, EffectFade, Thumbs, Zoom, Controller } from 'swiper'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/effect-fade'
import 'swiper/scss/zoom'

export default {
    name: 'MyProduct',
    components: {
        MyModal,
        Swiper,
        SwiperSlide,
    },

    setup() {
        const router = useRouter()
        const route = useRoute()
        const store = useStore()
        const currentProduct = computed(() => store.state.products.currentProduct)
        const productIsOpen = ref(true)
        const modalContentIsVisible = ref(true)

        const onSwiper = ref(null);
        const secondSwiper = ref(null);

        const setOnSwiper = (swiper) => {
            onSwiper.value = swiper;
        };

        const setSecondSwiper = (swiper) => {
            secondSwiper.value = swiper;
        };

        const thumbsSwiper = ref(null);
        const setThumbsSwiper = (swiper) => {
            thumbsSwiper.value = swiper;
        };

        const addToCart = ({ target }) => {
            if (target.closest('.product__return') || target.closest('.product__close') || target.closest('.product__btn')) {
                productIsOpen.value = !productIsOpen.value
                router.push({ name: 'home' })
                if (target.closest('.product__btn')) {
                    store.dispatch('addToCart', currentProduct.value)
                    document.body.classList.toggle('_locked')
                }
            }
        }

        onMounted(() => {
            store.dispatch('getCurrentProduct', route.params.slug)
        })

        return {
            onSwiper,
            secondSwiper,
            modalContentIsVisible,
            thumbsSwiper,
            modules: [Navigation, EffectFade, Thumbs, Zoom, Controller],
            productIsOpen,
            currentProduct,
            setOnSwiper,
            setSecondSwiper,
            setThumbsSwiper,
            addToCart,
        }
    }
}
</script>

<style lang="scss">

.close {
    position: absolute;
    right: 30px;
    top: 30px;
    cursor: pointer;
    padding: 5px;
    z-index: 10;
}

.product {
    &__close-btns {
        position: relative;
    }

    &__return {
        position: absolute;
        left: 30px;
        top: 30px;
        cursor: pointer;
        padding: 5px;
        display: flex;
        align-items: center;
        opacity: .8;
        font-weight: 400;

        &::before {
            content: "←\a0";
            font-family: Arial, Helvetica, sans-serif;
        }
    }

    &__content {
        display: flex;
        flex-wrap: wrap;
        padding: 100px 50px 0;
        justify-content: center;
        overflow-y: auto;
        height: 100vh;
    }

    &__images {
        margin-bottom: 20px;
    }

    &__swiper {
        max-width: 560px;
    }

    &__swiper-container {
        display: flex;
        align-items: center;
        max-height: 560px;
        max-width: 560px;
    }

    &__slide {
        width: 100%;
        height: 100%;
        cursor: pointer;
        user-select: none;
    }

    &__thumbs-swiper {
        margin-top: 10px;
        max-width: 560px;

        .swiper-slide-thumb-active {
            border-color: rgba(0, 0, 0, .3);
        }
    }

    &__thumbs-container {
        display: flex;
        align-items: center;
        max-width: 60px;
        max-height: 60px;
        height: auto;
        transition: opacity .5s ease;
        border: 2px solid transparent;

        @media(any-hover: hover) {
            &:hover {
                opacity: .7;
                transition: opacity .5s ease;
            }
        }
    }

    &__thumbs-slide {
        width: 100%;
        height: 100%;
        cursor: pointer;
        user-select: none;
    }

    &__gallery-modal {
        height: 100%;
        display: flex;
    }

    &__gallery-container {
        display: flex;
        align-items: center;
        height: 100%;
    }

    &__gallery-item {
        max-width: 100%;
        max-height: calc(100vh - 30px);
        user-select: none;
    }

    &__info {
        max-width: 560px;
        margin: 0 20px;
        width: 100%;
        color: #525252;
    }

    &__title {
        margin-bottom: 18px;
        font-weight: 700;
        text-transform: uppercase;
    }

    &__btn {
        margin: 20px 0 30px;
        color: #fcfcfc;
        background-color: #474747;
        height: 45px;
        padding: 0 30px;
        border-radius: 5px;
        transition: opacity .5s ease;

        @media(any-hover: hover) {
            &:hover {
                opacity: .8;
                transition: opacity .5s ease;
            }
        }
    }

    &__description {
        padding-bottom: 100px;
    }
}

@media(max-width: 1260px) {
    .product__images {
        width: 100%;
    }
}

@media(max-width: 950px) {

    .product {
        &__content {
            padding: 50px 20px;
        }

        &__close-btns {
            height: 80px;
            box-shadow: 0 1px 5px rgba(0, 0, 0, .4);
            z-index: 2;
        }

        &__close {
            display: none;
        }
    }

}
</style>