<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__line-container">
                <hr class="footer__line">
            </div>
            <div class="footer__inner">
                <a href="#"><img class="t463__logo t463__img t-img loaded"
                        src="https://thumb.tildacdn.com/tild3362-6163-4332-a234-666438646136/-/resize/60x/-/format/webp/aO4EXax6NJ8.jpeg"
                        style="max-width: 60px; width: 100%;"></a>
                <p class="footer__name-brand">NameBrand &#169; 2022</p>
                <div class="footer__social">
                    <a href="https://vk.com" target="_blank">
                        <svg width="25px" height="25px" viewBox="0 0 100 100" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M53.7512 76.4147C25.0516 76.4147 8.68207 56.7395 8 24H22.376C22.8482 48.03 33.4463 58.2086 41.8411 60.3073V24H55.3782V44.7245C63.668 43.8326 72.3765 34.3885 75.3146 24H88.8514C86.5954 36.802 77.1513 46.2461 70.4355 50.1287C77.1513 53.2767 87.9076 61.5141 92 76.4147H77.0988C73.8983 66.446 65.9241 58.7333 55.3782 57.684V76.4147H53.7512Z"
                                fill="#000000"></path>
                        </svg>
                    </a>
                    <a href="https://web.telegram.org" target="_blank">
                        <svg width="25px" height="25px" viewBox="0 0 100 100" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M83.1797 17.5886C83.1797 17.5886 90.5802 14.7028 89.9635 21.711C89.758 24.5968 87.9079 34.6968 86.4688 45.6214L81.5351 77.9827C81.5351 77.9827 81.124 82.7235 77.4237 83.548C73.7233 84.3724 68.173 80.6623 67.145 79.8378C66.3227 79.2195 51.7273 69.9438 46.5878 65.4092C45.1488 64.1724 43.5042 61.6989 46.7934 58.8132L68.3785 38.201C70.8454 35.7274 73.3122 29.956 63.0336 36.9642L34.2535 56.5459C34.2535 56.5459 30.9644 58.6071 24.7973 56.752L11.4351 52.6295C11.4351 52.6295 6.50135 49.5377 14.9298 46.4457C35.4871 36.7579 60.7724 26.864 83.1797 17.5886Z"
                                fill="#000000"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>

export default {
    name: 'MyFooter'
}
</script>

<style lang="scss">
.footer {
    padding: 100px 0;

    &__inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__social {
        display: flex;
        gap: 5px;
    }

    &__name-brand {
        color: #000000;
        font-size: 12px;
        font-family: 'helvetica';
        text-transform: uppercase;
    }

    &__line-container {
        padding: 0 15px 60px;
    }

    &__line {
        padding: 0 20px;
        height: 1px;
        background-color: #000;
        border: none;
        opacity: .2;
    }

}

@media(max-width:1200px) {
    .footer__inner {
        flex-direction: column;
        gap: 20px;
    }
}
</style>

