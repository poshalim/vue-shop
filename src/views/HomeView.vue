<template>
  <div class="store">
    <div class="container">
      <div class="store__items">
        <router-link class="store__item store-item" :to="{name: 'product', params: {slug: product.id}}"
          v-for="product in products" :key="product.id">
          <div class="store__item-img-wrapper">
            <img class="store-item__img" :src="product.img">
            <img class="store-item__img item-img__second" :src="product.imgHover">
          </div>
          <h5 class="store-item__name">{{product.name}}</h5>
          <p class="store-item__period">{{product.period}}</p>
          <p class="store-item__price">{{product.price}}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  name: 'MyHomeView',
  setup() {
    const store = useStore()

    const products = store.state.products.products

    return {
      products
    }
  }
}
</script>


<style lang="scss">
.store__items {
  display: flex;
  gap: 50px 20px;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  margin: 80px auto 0;
  max-width: 1200px;
}

.store-item {
  max-width: 240px;
  margin: 0 20px;
  width: 100%;

  &__img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    max-width: 100%;
    max-height: 100%;
    transition: opacity .2s linear;

  }

  &__name {
    text-transform: uppercase;
    color: #525252;
    font-size: 16px;
    font-weight: 700;
    margin-top: 20px;
  }

  &__period {
    font-size: 13px;
  }

  &__price {
    margin: 12px 0;
  }
}

.item-img__second {
  opacity: 0;
}

.store__item-img-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 110%;

  @media(any-hover: hover) {
    &:hover {
      .store-item__img {
        opacity: 0;
        transition: opacity .2s linear;
      }

      .item-img__second {
        opacity: 1;
        transition: opacity .2s linear;
      }
    }
  }
}
</style>