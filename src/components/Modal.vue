<template>
    <div class="modal">
        <div class="modal__bg">
            <div class="modal__content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyModal'
}
</script>

<style lang="scss">
.modal {
    height: 100vh;
    width: 100vw;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 7;

    &__bg {
        height: 100%;
        width: 100%;
        background-color: #fff;
    }

    &__content {
        height: 100%;
    }
}
</style>