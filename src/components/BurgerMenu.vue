<template>
    <div class="burger-menu" @click="ToggleMenu">
        <div class="menu__head header-head">
            <span class="header-head__line"></span>
            <span class="header-head__line"></span>
            <span class="header-head__line"></span>
        </div>
        <div class="menu__body" :class="{'menu__body--active': headerMenuIsOpen}">
            <div class="menu__bg">
                <ul class="menu__body-content header-body" :class="{'menu__body-content--active': headerMenuIsOpen}">
                    <li class="menu__item header-body__item">
                        <router-link :to="{name: 'home'}">Магазин</router-link>
                    </li>
                    <li class="menu__item header-body__item">
                        <router-link :to="{name: 'delivery'}">Доставка</router-link>
                    </li>
                    <li class="menu__item header-body__item">
                        <router-link :to="{name: 'return'}">Возврат</router-link>
                    </li>
                    <li class="menu__item header-body__item">
                        <router-link :to="{name: 'contacts'}">Контакты</router-link>
                    </li>
                    <li class="menu__item header-body__item menu__social">
                        <a href="https://vk.com" target="_blank">
                            <svg width="30px" height="30px" viewBox="0 0 100 100" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50ZM25 34c.406 19.488 10.15 31.2 27.233 31.2h.968V54.05c6.278.625 11.024 5.216 12.93 11.15H75c-2.436-8.87-8.838-13.773-12.836-15.647C66.162 47.242 71.783 41.62 73.126 34h-8.058c-1.749 6.184-6.932 11.805-11.867 12.336V34h-8.057v21.611C40.147 54.362 33.838 48.304 33.556 34H25Z"
                                    fill="#000000"></path>
                            </svg>
                        </a>
                        <a href="https://web.telegram.org" target="_blank">
                            <svg width="30px" height="30px" viewBox="0 0 100 100" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm21.977-68.056c.386-4.38-4.24-2.576-4.24-2.576-3.415 1.414-6.937 2.85-10.497 4.302-11.04 4.503-22.444 9.155-32.159 13.734-5.268 1.932-2.184 3.864-2.184 3.864l8.351 2.577c3.855 1.16 5.91-.129 5.91-.129l17.988-12.238c6.424-4.38 4.882-.773 3.34.773l-13.49 12.882c-2.056 1.804-1.028 3.35-.129 4.123 2.55 2.249 8.82 6.364 11.557 8.16.712.467 1.185.778 1.292.858.642.515 4.111 2.834 6.424 2.319 2.313-.516 2.57-3.479 2.57-3.479l3.083-20.226c.462-3.511.993-6.886 1.417-9.582.4-2.546.705-4.485.767-5.362Z"
                                    fill="#000000"></path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    name: 'MyBurgerMenu',
    setup() {
        const headerMenuIsOpen = ref(false)
        const ToggleMenu = ({ target }) => {
            if (target.closest('.menu__head') || target.closest('.menu__item') || target.classList.contains('menu__bg')) {
                headerMenuIsOpen.value = !headerMenuIsOpen.value
            }
        }

        return {
            headerMenuIsOpen,
            ToggleMenu
        }
    }
}
</script>

<style lang="scss">
.menu {
    &__head {
        display: none;
    }

    &__body-content {
        display: flex;
        align-items: center;
        gap: 32px;
    }

    &__item {
        transition: opacity 0.4s ease;
        display: block;
        padding: 10px 16px;
        cursor: pointer;

        @media(any-hover: hover) {
            &:hover {
                opacity: .7;
                transition: opacity 0.4s ease;
            }
        }
    }
}

@media (max-width: 1200px) {
    .burger-menu {
        order: 1;
    }

    .menu {
        &__body {
            height: 100vh;
            width: 100vw;
            position: fixed;
            left: 0;
            top: 100px;
            opacity: 0;
            pointer-events: none;
            transition: opacity .4s ease;
        }

        &__body--active {
            opacity: 1;
            pointer-events: all;
            transition: opacity .4s ease;
        }

        &__bg {
            height: 100%;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.8);
        }

        &__head {
            display: flex;
            align-items: center;
            flex-direction: column;
            position: relative;
            gap: 5px;
            height: 35px;
            width: 35px;
            justify-content: center;
            cursor: pointer;
        }

        &__body-content {
            font-size: 20px;
            flex-direction: column;
            position: absolute;
            gap: 14px;
            left: 0;
            right: 0;
            padding: 30px 20px;
            background-color: #fff;
            box-shadow: 0px 3px 3px rgb(0, 0, 0, .1);
            transform: translateY(-200%);
            transition: transform .4s ease;
        }

        &__body-content--active {
            transform: translateY(0%);
            transition: transform .4s ease;
        }

    }
}

.header-head__line {
    background-color: #000;
    height: 2px;
    width: 22px;
}
</style>