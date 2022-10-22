<template>
    <header class="header">
        <div class="header__container container">
            <nav class="header__menu menu">
                <router-link class="header__logo logo" :to="{name: 'home'}">logotip</router-link>
                <my-burger-menu />
                <div class="menu__contact contact">
                    <a class="contact__call" href="tel:74993446091">+7 (499) 344 60 91</a>
                </div>
                <my-cart />
            </nav>
        </div>
    </header>
</template>

<script>
import MyCart from '@/components/Cart'
import MyBurgerMenu from '@/components/BurgerMenu'
export default {
    name: 'MyTopBar',
    components: {
        MyCart,
        MyBurgerMenu
    },

}
</script>

<style lang="scss">
.header {
    height: 100px;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0px 1px 3px rgb(0, 0, 0, .1);
    background-color: #fff;
    z-index: 5;

    &__logo {
        text-transform: uppercase;
        font-size: 25px;
        font-weight: 700;
    }
}

.menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
    flex-wrap: wrap;

    &__contact {
        display: flex;
        align-items: center;
    }

    &__social {
        display: none;
    }

    &__cart {
        height: 35px;
        width: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 30px;
    }
}

.contact {
    &__call {
        font-weight: 600;
    }
}

@media (max-width: 1200px) {
    .menu {
        &__social {
            display: flex;
            gap: 5px;
            padding-top: 25px;
        }
    }

    .contact {
        margin-left: auto;
    }
}

@media(max-width:500px) {
    .header__logo {
        font-size: 20px;
    }

    .menu__cart {
        margin: 0 10px;
    }

    .contact {
        font-size: 14px;
    }
}
</style>