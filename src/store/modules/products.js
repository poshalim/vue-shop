const state = {
    products: [
        {
            id: 1,
            img: 'https://thumb.tildacdn.com/stor3936-3130-4338-b233-616138663136/-/format/webp/29589777.jpg',
            imgHover: 'https://thumb.tildacdn.com/stor6364-3236-4363-b037-373739306266/-/format/webp/48027649.jpg',
            images: [
                'https://thumb.tildacdn.com/stor3936-3130-4338-b233-616138663136/-/format/webp/29589777.jpg',
                'https://thumb.tildacdn.com/stor6364-3236-4363-b037-373739306266/-/format/webp/48027649.jpg',
                'https://thumb.tildacdn.com/stor3930-6265-4561-b637-333237393865/-/format/webp/48560423.png',
            ],
            name: 'ARIVLE.H',
            period: 'В течение 5 рабочих дней',
            price: '4 700 ₽',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe laborum sunt, deleniti dolore hic quod porro quis amet minima. A blanditiis alias, consequatur veniam incidunt quae doloribus ea itaque quis.'
        },
        {
            id: 2,
            img: 'https://thumb.tildacdn.com/tild3038-6464-4461-b366-393935653139/-/format/webp/_.jpg',
            imgHover: 'https://thumb.tildacdn.com/tild3865-3030-4232-b361-316463616139/-/format/webp/IMG_4050.jpg',
            images: [
                'https://thumb.tildacdn.com/tild3038-6464-4461-b366-393935653139/-/format/webp/_.jpg',
                'https://thumb.tildacdn.com/tild3865-3030-4232-b361-316463616139/-/format/webp/IMG_4050.jpg',
                'https://thumb.tildacdn.com/tild3230-3834-4962-a239-396463383131/-/format/webp/IMG_4109.jpg',
            ],
            name: 'SPACE ODYSSEY',
            period: 'Отправка в течении 3-х недель с момента предзаказа',
            price: '2 000 ₽',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe laborum sunt, deleniti dolore hic quod porro quis amet minima. A blanditiis alias, consequatur veniam incidunt quae doloribus ea itaque quis.'
        },
        {
            id: 3,
            img: 'https://thumb.tildacdn.com/stor6562-3862-4730-b661-646531333035/-/format/webp/36400174.jpg',
            imgHover: 'https://thumb.tildacdn.com/stor3734-6232-4665-a530-373539383863/-/format/webp/26654952.jpg',
            images: [
                'https://thumb.tildacdn.com/stor6562-3862-4730-b661-646531333035/-/format/webp/36400174.jpg',
                'https://thumb.tildacdn.com/stor3734-6232-4665-a530-373539383863/-/format/webp/26654952.jpg',
                'https://thumb.tildacdn.com/stor3162-6264-4535-a137-336362386366/-/format/webp/66468277.jpg',
                'https://thumb.tildacdn.com/stor3035-3661-4130-b034-333666343536/-/format/webp/77892161.png'
            ],
            name: 'CONFIDENCE',
            period: '',
            price: '5 500 ₽',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe laborum sunt, deleniti dolore hic quod porro quis amet minima. A blanditiis alias, consequatur veniam incidunt quae doloribus ea itaque quis.'
        },
        {
            id: 4,
            img: 'https://thumb.tildacdn.com/tild3961-3038-4232-b138-383637633261/-/format/webp/photo.jpg',
            imgHover: 'https://thumb.tildacdn.com/tild6435-3866-4630-b733-613830653861/-/format/webp/DSC_0002.jpg',
            images: [
                'https://thumb.tildacdn.com/tild3961-3038-4232-b138-383637633261/-/format/webp/photo.jpg',
                'https://thumb.tildacdn.com/tild6435-3866-4630-b733-613830653861/-/format/webp/DSC_0002.jpg',
                'https://thumb.tildacdn.com/tild3935-3865-4565-b237-343162323062/-/format/webp/DSC_0015.jpg',
                'https://thumb.tildacdn.com/tild6662-6135-4538-b539-663166636336/-/format/webp/DSC_0035.jpg',
                'https://thumb.tildacdn.com/tild3638-3238-4434-b430-613232346532/-/format/webp/IMG_7527.jpg',
                'https://thumb.tildacdn.com/tild3462-3031-4162-b236-383738313536/-/format/webp/IMG_7476.jpg',
                'https://thumb.tildacdn.com/tild6539-3932-4431-b963-343637343966/-/format/webp/razmernaya_setka_kop.png',
            ],
            name: 'GRUNGE SAFARI',
            period: 'В течение 5 рабочих дней с момента окончания предзаказа',
            price: '6 500 ₽',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe laborum sunt, deleniti dolore hic quod porro quis amet minima. A blanditiis alias, consequatur veniam incidunt quae doloribus ea itaque quis.'
        },
        {
            id: 5,
            img: 'https://thumb.tildacdn.com/tild3139-6533-4262-b966-633066376661/-/format/webp/____.jpg',
            imgHover: 'https://thumb.tildacdn.com/tild6133-6133-4238-b638-343464383161/-/format/webp/BOSVnDDSnPo.jpg',
            images: [
                'https://thumb.tildacdn.com/tild3139-6533-4262-b966-633066376661/-/format/webp/____.jpg',
                'https://thumb.tildacdn.com/tild6133-6133-4238-b638-343464383161/-/format/webp/BOSVnDDSnPo.jpg',
            ],
            name: 'BORIS VALLEJO ZIP HOODIE',
            period: 'Отправка сразу после окончания предзаказа',
            price: '5 000 ₽',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe laborum sunt, deleniti dolore hic quod porro quis amet minima. A blanditiis alias, consequatur veniam incidunt quae doloribus ea itaque quis.'
        },
        {
            id: 6,
            img: 'https://thumb.tildacdn.com/tild6532-3364-4337-b766-376335336465/-/format/webp/_.jpg',
            imgHover: 'https://thumb.tildacdn.com/tild6661-3537-4638-b863-343337646265/-/format/webp/IMG_3999.jpg',
            images: [
                'https://thumb.tildacdn.com/tild6532-3364-4337-b766-376335336465/-/format/webp/_.jpg',
                'https://thumb.tildacdn.com/tild6661-3537-4638-b863-343337646265/-/format/webp/IMG_3999.jpg',
                'https://thumb.tildacdn.com/tild3731-3561-4834-a538-633466353336/-/format/webp/IMG_4008.jpg',
            ],
            name: 'VENOM PATTERN',
            period: 'В течение 5 рабочих дней',
            price: '2 000 ₽',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe laborum sunt, deleniti dolore hic quod porro quis amet minima. A blanditiis alias, consequatur veniam incidunt quae doloribus ea itaque quis.'
        },
        {
            id: 7,
            img: 'https://thumb.tildacdn.com/tild3862-6131-4961-b833-346331323264/-/format/webp/photo.jpg',
            imgHover: 'https://thumb.tildacdn.com/tild3430-3830-4563-b162-386230383431/-/format/webp/DSC_0427_2.jpg',
            images: [
                'https://thumb.tildacdn.com/tild3862-6131-4961-b833-346331323264/-/format/webp/photo.jpg',
                'https://thumb.tildacdn.com/tild3430-3830-4563-b162-386230383431/-/format/webp/DSC_0427_2.jpg',
                'https://thumb.tildacdn.com/tild3033-6332-4161-a566-643263666630/-/format/webp/DSC_0428_2.jpg',
                'https://thumb.tildacdn.com/tild3666-6533-4535-b235-313039356561/-/format/webp/DSC_0429_2.jpg',
                'https://thumb.tildacdn.com/tild3665-3733-4665-b536-623562333232/-/format/webp/razmernaya_setka_kop.png',
            ],
            name: 'LUXE PUNK',
            period: 'В течение 5 рабочих дней',
            price: '6 500 ₽',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe laborum sunt, deleniti dolore hic quod porro quis amet minima. A blanditiis alias, consequatur veniam incidunt quae doloribus ea itaque quis.'
        },
        {
            id: 8,
            img: 'https://thumb.tildacdn.com/tild6634-6630-4561-a434-356231633533/-/format/webp/133200_100_.jpg',
            imgHover: 'https://thumb.tildacdn.com/tild3931-3436-4033-b336-643631313561/-/format/webp/DSC_0455.jpg',
            images: [
                'https://thumb.tildacdn.com/tild6634-6630-4561-a434-356231633533/-/format/webp/133200_100_.jpg',
                'https://thumb.tildacdn.com/tild3931-3436-4033-b336-643631313561/-/format/webp/DSC_0455.jpg',
                'https://thumb.tildacdn.com/tild3530-6530-4238-b038-656561613832/-/format/webp/DSC_0450.jpg',
                'https://thumb.tildacdn.com/tild3335-3236-4965-a630-653231653838/-/format/webp/DSC_0453.jpg'
            ],
            name: 'ARABIC SLUDGE SHORTS white',
            period: 'В течение 5 рабочих дней',
            price: '2 900 ₽',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe laborum sunt, deleniti dolore hic quod porro quis amet minima. A blanditiis alias, consequatur veniam incidunt quae doloribus ea itaque quis.'
        },
    ],
    currentProduct: null
}

const mutations = {
    getCurrentProduct(state, payload) {
        state.currentProduct = state.products.find(product => product.id == payload)
    },
}

const actions = {
    getCurrentProduct(context, slug) {
        context.commit('getCurrentProduct', slug)

    }
}

export default {
    state, mutations, actions
}