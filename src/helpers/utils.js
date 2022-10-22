export const FormatToPrice = (price) =>  new Intl.NumberFormat('ru-RU').format(price)  + ' ₽'
export const calculateThePrice = (product) => parseInt(String(product.price).replace(/ /g, '')) * product.amount
export const calculateTheAmount = (productsInTheCart) => productsInTheCart.reduce((acc, product) => { return acc + product.amount }, 0)
export const calculateTheSum = (productsInTheCart) => productsInTheCart.reduce((acc, product) => { return acc + parseInt(String(product.price).replace(/ /g, '')) * product.amount }, 0)